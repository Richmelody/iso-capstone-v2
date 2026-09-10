# Moodle Clone/Migration Process (CloudPanel) — v6 (Battle-Tested + QA-Hardened)

This is the complete, proven procedure for cloning a live Moodle site to a new site on the same CloudPanel server. It was built by actually running the full process end-to-end on `astutebusinessconsult` infrastructure, hitting real failures, and recording the exact fix for each one. Every **GOTCHA** box is a bug that was actually hit during that run. A second pass ("QA NOTE" boxes) then reviewed the *document itself* for weaknesses that didn't happen to bite during that run but could on a future one — those are called out separately so the two are never confused: **the live test clone this document was built from is verified working end-to-end; the QA pass hardened the instructions for next time, it did not find anything wrong with that clone.**

Placeholders used throughout: `[old_domain]`, `[new_domain]`, `[old_site_user]`, `[new_site_user]`, `[old_db_name/user/pass]`, `[new_db_name/user/pass]`.

## Prerequisites
- Both sites reside on the same CloudPanel server.
- Root SSH access to the server (see Phase 0 — this is *not* the same as your CloudPanel dashboard login).
- DNS A record for the new domain already pointing to the server IP.
- **We never write to, modify, or delete anything on the old/live site.** Every command in this process only reads from the old site. Deleting the old site (if/when you're ready) is a separate, manual, deliberate decision — never automated here.
- **Credential hygiene note:** several commands below embed database passwords directly on the command line (`-p[password]`) for brevity. On a real production cutover, remember this leaves the password briefly visible in shell history and to anyone else on the box running `ps aux` at that moment. Phase 5 shows the safer pattern (bare `-p`, prompted interactively) — prefer that pattern throughout if you're being careful, at the cost of more typing.

---

## Phase 0: Get real root SSH access

> **GOTCHA:** CloudPanel's own web dashboard login (`admin` / your CloudPanel password) is a **completely different credential** from root SSH access to the underlying Linux server. Do not assume they're the same, and do not guess-try the CloudPanel password over SSH repeatedly — repeated failed SSH attempts can trigger fail2ban and lock you out of the box entirely.

1. Log into your hosting provider's control panel (e.g. Hostinger hPanel), not CloudPanel.
2. Find your VPS → Overview. Look for a section titled "Root access" showing `ssh root@[server_ip]`.
3. If you don't already know the root password, use "Reset password" there (or "Forgot root password?") to set one.
4. Test it:
   ```bash
   ssh root@[server_ip]
   ```

---

## Phase 1: Create the New Site in CloudPanel

1. Log into CloudPanel.
2. **Add Site → New PHP Site.**
3. **Application:** select **Moodle 5** (this only applies a PHP-FPM tuning preset + a starter vhost template — see GOTCHA below. It does **not** install Moodle or create a database).
4. **Domain Name:** enter it carefully.
   > **GOTCHA:** Autofill/paste sometimes appends a trailing `/` to the domain field (e.g. `mysite.cloud/`). CloudPanel will accept it, but it's wrong — always double check there's no trailing slash before submitting.
5. **PHP Version:** must **match the old site's PHP version exactly** (check the old site's Settings tab first, or run `php -v` in its SSH session).
   > **GOTCHA:** The form may default to a *newer* PHP version than your live site runs (e.g. defaulting to 8.5 while live runs 8.4). A mismatch breaks any later commands hard-coded to a specific PHP binary (`php8.4`) and risks running Moodle on an untested PHP version. Always check and correct this field before submitting.
6. **Site User:** CloudPanel may auto-suggest a long name combining your org and domain.
   > **GOTCHA:** Site usernames are capped at **32 characters**. A suggested name like `astutebusinessprojects-lmsmigratetesting` (40 chars) will be rejected with "This value is too long." Shorten it manually (e.g. just `lmsmigratetesting`) before submitting.
7. **Site User Password:** save it immediately — it's shown once.
8. Click **Create**.

---

## Phase 2: Create the Database (manual — not automatic)

> **GOTCHA:** Despite selecting "Application: Moodle 5," CloudPanel does **not** auto-create a database or wire up `config.php`. After site creation, the new site's Databases tab will show "No databases found." You must add one manually, same as for a generic PHP site.

1. Go to the new site → **Databases** tab.
2. **Add Database.** Set:
   - Database Name: e.g. `[new_site_user]`
   - Database User Name: same, and note MySQL usernames also cap around 32 characters
   - Database User Password: use the generated one, save it
3. Submit. Confirm it now appears listed.

---

## Phase 3: Issue SSL

1. Go to the new site → **SSL/TLS** tab.
2. Issue a **Let's Encrypt** certificate for the domain now, before anything forces `https://` in config.
3. Confirm it shows "Installed: Yes."

---

## Phase 4: Fix the Document Root (critical — do this before copying any files)

This is the step most likely to trip you up, so read it fully before acting.

> **GOTCHA — root cause:** The "Moodle 5" vhost template's `{{root}}` placeholder resolves to the bare site folder (`.../htdocs/[new_domain]`), with **no `/public` subfolder** — unlike a properly-configured Moodle site, where Moodle's actual code should live inside a `public/` subfolder and `moodledata` sits *outside* the public webroot as a sibling. If you skip this step and just copy files in following the folder names literally, **`moodledata` (containing all trainee-submitted files and personal data) ends up inside the public webroot and becomes downloadable by anyone on the internet.** This is a real data-exposure risk, not a hypothetical.

1. Confirm the problem: SSH in and run:
   ```bash
   grep 'root ' /etc/nginx/sites-enabled/[new_domain].conf
   ```
   If it shows `root /home/[new_site_user]/htdocs/[new_domain];` (no `/public`), you need this fix.

2. **Do NOT try to fix this by editing the Vhost Editor's `{{root}}` line directly** (e.g. changing it to `root {{root}}/public;`). This looks like the obvious fix but **will fail nginx validation**:
   ```
   nginx: [emerg] invalid number of arguments in "root" directive
   ```
   Why: `{{root}}` doesn't expand to just a path — it expands to the **entire directive**, `root /home/.../domain;` (keyword, path, and semicolon all included). Appending `/public;` after it produces a duplicated, malformed `root` line. CloudPanel safely rejects the save when this happens (nginx test fails, so nothing breaks — but it also doesn't fix anything).

3. **The actual fix:** CloudPanel stores the webroot separately as a per-site **"Root Directory"** value (confirmed directly in CloudPanel's own database — the `site.root_directory` column — during this run; this is the value actually substituted into `{{root}}`). Compare against a working old site to confirm the pattern — e.g. the old site's stored value reads `[old_domain]/public`, not just `[old_domain]`.

   > **QA NOTE — be honest about what we actually confirmed here.** In the real run, this field was *not* obviously an editable input on the Settings tab at first look — two attempts to fix it a different way (editing the vhost text, and a direct database edit, which was blocked by a safety check) failed before it ended up correctly set. Exactly which click/control in the CloudPanel UI made the successful edit was never pinned down and confirmed in the moment. **If you don't immediately see an editable "Root Directory" field on the Settings tab:** look for an edit icon/pencil near the displayed value, try clicking directly on the displayed value itself, or check CloudPanel's changelog/docs for your specific version — don't assume it's impossible just because it isn't obviously a text box. Whatever you do, avoid editing CloudPanel's internal database directly (see the box below).

   Once you find it, update the new site's Root Directory value to:
   ```
   [new_domain]/public
   ```
   Save it.

4. Now go to the **Vhost** tab and hit **Save** (the content can be left completely unchanged — just re-saving triggers CloudPanel to re-render the template using the now-corrected Root Directory value, then validate and reload nginx). You should see "Vhost has been saved" with no error.

5. Verify from SSH:
   ```bash
   grep 'root ' /etc/nginx/sites-enabled/[new_domain].conf
   # should now show: root /home/[new_site_user]/htdocs/[new_domain]/public;
   nginx -t
   # should end with: syntax is ok / test is successful
   ```

> **Do not** attempt to fix this by editing CloudPanel's internal SQLite/application database directly over SSH — that's an unsupported, risky path, and it should be actively refused/blocked as too dangerous to attempt casually.
>
> **QA NOTE — the CLI fallback is unverified, treat it with suspicion.** A previous version of this document suggested "delete and recreate the site via `clpctl`, specifying the correct root at creation if the CLI/UI allows it" as a fallback. That was never actually confirmed to work: inspecting CloudPanel's own database directly showed that even the generic "Generic" vhost template's stored root directory is blank by default, and `clpctl site:add:php`'s documented options don't show an obvious root-path parameter. **Don't rely on this fallback without testing it in isolation first** (e.g. on a disposable test site) before trusting it on anything with real data. If you truly can't find a working UI path, the safest fallback is: `clpctl db:export` your already-migrated database to back it up, then open a support ticket with CloudPanel/your host describing the exact template and version, rather than guessing at destructive site recreation.

---

## Phase 5: Database Migration

> **GOTCHA #1:** Don't use phpMyAdmin — large tables like `mdl_logstore_standard_log` cause timeouts or silent truncation on real Moodle databases.

> **GOTCHA #2:** A plain `mysqldump` will likely fail with:
> ```
> mysqldump: Error: 'Access denied; you need (at least one of) the PROCESS privilege(s)...' when trying to dump tablespaces
> ```
> This happens because your scoped database user (correctly) lacks server-wide `PROCESS` privilege. Fix: add `--no-tablespaces`. (Note: in some MySQL versions this is a non-fatal warning and the dump proceeds anyway despite showing an error — but don't rely on that; always pass the flag.)

1. Get the old site's DB credentials (either from its CloudPanel Databases tab, or faster — read them straight out of its live `config.php` over SSH, since you have root anyway):
   ```bash
   cat /home/[old_site_user]/htdocs/[old_domain]/public/config.php
   ```
2. Dump and import directly, in one piped command:
   ```bash
   mysqldump -u [old_db_user] -p --single-transaction --no-tablespaces [old_db_name] | mysql -u [new_db_user] -p [new_db_name]
   ```
   *(`-p` with no inline password keeps it out of shell history — you'll be prompted twice, old password then new password. `--single-transaction` gives a consistent snapshot if the live site is active.)*
3. Verify directly — don't just trust "no error":
   ```bash
   mysql -u [new_db_user] -p[new_db_pass] -e "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema='[new_db_name]';"
   mysql -u [new_db_user] -p[new_db_pass] -e "SELECT id, username, email FROM [new_db_name].mdl_user WHERE id > 1 LIMIT 5;"
   ```
   You should see the same table count and real user rows matching the old site.

---

## Phase 6: File Copy & Ownership

Now that Phase 4 confirmed the correct layout (`public/` as webroot, `moodledata/` as a sibling outside it):

1. Copy the codebase:
   ```bash
   cp -a /home/[old_site_user]/htdocs/[old_domain]/public /home/[new_site_user]/htdocs/[new_domain]/public
   ```
2. Copy the data folder (sibling of `public`, **not** nested inside it):
   ```bash
   cp -a /home/[old_site_user]/htdocs/[old_domain]/moodledata /home/[new_site_user]/htdocs/[new_domain]/moodledata
   ```
3. **Fix ownership.** `cp -a` preserves the *source* site's ownership, which the new site's PHP-FPM (running as `[new_site_user]`) cannot read/write — this causes a 500 error if skipped:
   ```bash
   chown -R [new_site_user]:[new_site_user] /home/[new_site_user]/htdocs/[new_domain]/public
   chown -R [new_site_user]:[new_site_user] /home/[new_site_user]/htdocs/[new_domain]/moodledata
   ```
4. Verify ownership actually changed:
   ```bash
   ls -la /home/[new_site_user]/htdocs/[new_domain]/public | head -3
   ls -la /home/[new_site_user]/htdocs/[new_domain]/moodledata | head -3
   ```
   Both should show `[new_site_user]` as owner, not the old site's user.
5. **QA NOTE — cosmetic cleanup, optional:** the one-click installer's placeholder `index.php` and `.well-known` folder at the bare site root (outside `public/`, from Phase 1) are now dead weight — nginx no longer serves that directory once Phase 4 is applied. Harmless to leave, safe to delete if you want a tidy folder.

---

## Phase 7: Reconcile config.php

The copied `public/config.php` is still a literal copy of the old site's file — it has the *old* DB credentials and paths.

```bash
nano /home/[new_site_user]/htdocs/[new_domain]/public/config.php
```

Update:
```php
$CFG->dbname    = '[new_db_name]';
$CFG->dbuser    = '[new_db_user]';
$CFG->dbpass    = '[new_db_password]';

$CFG->wwwroot   = 'https://[new_domain]';

$CFG->dataroot  = '/home/[new_site_user]/htdocs/[new_domain]/moodledata';
```
Leave everything else (`dbtype`, `dbhost`, `prefix`, `dboptions`, `admin`, `directorypermissions`) unchanged — they're the same on both sites *if* both sites are on the same server with the same local MySQL setup. Double check `dbhost` specifically if the real cutover ever targets a different server.

Verify:
```bash
chown [new_site_user]:[new_site_user] /home/[new_site_user]/htdocs/[new_domain]/public/config.php
php8.4 -l /home/[new_site_user]/htdocs/[new_domain]/public/config.php
# should say: No syntax errors detected
```

**Checkpoint:** the site should now load in a browser (front page, login page) even though URLs inside content still point to the old domain — that gets fixed next.

---

## Phase 8: URL Replacement (Moodle's built-in tool)

> **GOTCHA:** If the new domain is longer than the old one, the default run fails:
> ```
> The replacement is longer than the original and shortening is not allowed; cannot continue.
> ```
> Fix: add `--shorten`. This tells the tool it's allowed to safely truncate any fixed-length `varchar` columns if the longer replacement would otherwise overflow them (it recalculates properly, doesn't corrupt data).

> **QA NOTE — searching `https://` only is narrower than it looks.** This exact command only catches links that literally start with `https://[old_domain]`. Any legacy `http://` link (e.g. content created before SSL was enabled) or protocol-relative link (`//[old_domain]/...`) will slip through this pass — Phase 10's full scan will eventually catch stragglers, but you can close the gap in one shot instead of relying on that safety net. Moodle's own `admin/tool/replace/cli/replace.php --help` example deliberately uses the protocol-relative form for exactly this reason:
> ```bash
> sudo -u [new_site_user] php8.4 /home/[new_site_user]/htdocs/[new_domain]/public/admin/tool/replace/cli/replace.php \
>   --search=//[old_domain] --replace=//[new_domain] --shorten --non-interactive
> ```
> Run the `https://` version below first (matches `$CFG->wwwroot` exactly), then optionally run the protocol-relative version too as a wider second pass.

```bash
sudo -u [new_site_user] php8.4 /home/[new_site_user]/htdocs/[new_domain]/public/admin/tool/replace/cli/replace.php \
  --search=https://[old_domain] --replace=https://[new_domain] --shorten --non-interactive
```

Then purge caches:
```bash
sudo -u [new_site_user] php8.4 /home/[new_site_user]/htdocs/[new_domain]/public/admin/cli/purge_caches.php
```

---

## Phase 9: Manual Cleanup of Fields Moodle's Tool Skips

> **GOTCHA:** `admin/tool/replace` deliberately skips the `mdl_config` and `mdl_config_plugins` tables (core site configuration) as a safety measure. If the old site has **any custom HTML/CSS/JS injected via Site Administration → Appearance → Additional HTML** (header/footer scripts, custom buttons, etc.), or plugin settings with hardcoded URLs (e.g. Shibboleth auth instructions), those will still reference the old domain after Phase 8 and must be fixed by hand.

1. Check what's left:
   ```bash
   mysql -u [new_db_user] -p[new_db_pass] -e \
     "SELECT plugin, name FROM [new_db_name].mdl_config_plugins WHERE value LIKE '%[old_domain]%';"
   mysql -u [new_db_user] -p[new_db_pass] -e \
     "SELECT name FROM [new_db_name].mdl_config WHERE value LIKE '%[old_domain]%';"
   ```
2. For each row found, inspect the value, then fix with a targeted `REPLACE()`:
   ```bash
   mysql -u [new_db_user] -p[new_db_pass] -e \
     "UPDATE [new_db_name].mdl_config SET value = REPLACE(value, '[old_domain]', '[new_domain]') WHERE name='[the_setting_name]';"
   ```
   Known repeat offenders from past runs: `additionalhtmltopofbody`, `additionalhtmlfooter`, `auth_shibboleth`/`auth_instructions` (in `mdl_config_plugins`), `siteidentifier` (cosmetic, low priority), `geoip2file` (check first whether the referenced file even exists on the *old* site — if it never existed there either, it's a pre-existing dead setting, not something the clone broke; not worth "fixing" to point at a still-nonexistent path).

   > **SHELL GOTCHA:** If you write these `UPDATE` statements with backtick-quoted identifiers (`` `column_name` ``) inside a `bash -c "..."` / double-quoted `-e "..."` string, **bash will interpret the backticks as command substitution before mysql ever sees them**, silently mangling the query into something that runs without error but changes nothing. Either avoid backticks entirely when you've confirmed the identifier isn't a MySQL reserved word (safe for the specific names listed above), or — safer in general, see Phase 10's fix — write the SQL to a `.sql` file first and run `mysql ... < file.sql`, where you *can* safely use backtick-quoting since there's no shell involved at that point.

3. Re-run the check query from step 1 — confirm zero rows returned.

> **QA NOTE — this phase is about functional correctness, not just tidiness.** These specific fields (custom header/footer HTML, auth plugin instructions) actually render on pages users see, so fixing them matters. Contrast with Phase 10 below, where some of what gets flagged (e.g. historical audit logs) is purely cosmetic — worth knowing the difference so you spend debugging time where it actually affects the live site first.

---

## Phase 10: Full Database-Wide Verification Scan

Phases 8 and 9 cover the tables you'd expect. In practice, a handful of tables outside that expected set can still hold leftover references — historical logs (`mdl_config_log`, purely cosmetic/audit-only, zero effect on live behavior), the audit trail (`mdl_logstore_standard_log`, which stores plain JSON in its `other` column — safe to text-replace, not PHP-serialized), private messages, notifications, and even quiz question content/categories (these last four **do** affect what users see — not cosmetic). Don't guess which ones — run a scan across the entire schema.

> **QA NOTE — the version of this script from the first run had two real bugs that could produce a false "all clear."** Both are fixed in the version below:
> 1. It quoted no SQL identifiers at all (to dodge a shell backtick-interpolation bug — see Phase 9), which meant any table with a column name that happens to be a MySQL reserved word (`read`, `order`, `key`, `range`, `group`, `desc`, `condition` — all plausible on a customized site with third-party plugins) would throw a SQL error on that table's check.
> 2. It swallowed that error with `2>/dev/null` instead of surfacing it — so a broken check silently vanished from the output entirely, without being counted as either "dirty" or reported as a failure, while the script still printed "ZERO REMAINING REFERENCES - CLEAN" at the end.
> 3. (Related) It never raised `group_concat_max_len` before building each table's column list — on installs where that session variable defaults low (1024 on some MySQL/MariaDB configs), a table with enough text/char columns could have its column list silently truncated, meaning some columns are never scanned at all, no warning given.
>
> The fixed version below writes each query to a file (avoiding the shell backtick problem entirely, so identifiers *can* be safely backtick-quoted), raises `group_concat_max_len` up front, and reports any query that errors out instead of silently skipping it.

Save this as `/root/scan_old_domain.sh` on the server (fill in `DB`, `CREDS`, `OLD`):

```bash
#!/bin/bash
DB="[new_db_name]"
CREDS="-u [new_db_user] -p[new_db_password]"
OLD="[old_domain]"

mysql $CREDS -N -e "SET SESSION group_concat_max_len = 1000000;
SELECT table_name, GROUP_CONCAT(column_name SEPARATOR '|')
FROM information_schema.columns
WHERE table_schema='$DB' AND (data_type LIKE '%text%' OR data_type LIKE '%char%')
GROUP BY table_name;" > /tmp/table_cols.tsv

FOUND=0
ERRORED=0
while IFS=$'\t' read -r tbl cols; do
  IFS='|' read -ra colarr <<< "$cols"
  where=""
  for col in "${colarr[@]}"; do
    if [ -n "$where" ]; then where="$where OR "; fi
    where="${where}\`${col}\` LIKE '%${OLD}%'"
  done

  cat > /tmp/_scan_check.sql << SQLEOF
SET SESSION group_concat_max_len = 1000000;
SELECT COUNT(*) FROM \`${DB}\`.\`${tbl}\` WHERE ${where};
SQLEOF

  result=$(mysql $CREDS -N < /tmp/_scan_check.sql 2>/tmp/_scan_err.txt)
  err=$(cat /tmp/_scan_err.txt)

  if [ -n "$err" ]; then
    echo "!! ERROR scanning $tbl — could not check this table: $err"
    ERRORED=1
    continue
  fi

  if [ "$result" != "0" ] && [ -n "$result" ]; then
    echo "$tbl: $result rows STILL contain old domain"
    FOUND=1
  fi
done < /tmp/table_cols.tsv

rm -f /tmp/_scan_check.sql /tmp/_scan_err.txt

if [ "$FOUND" == "0" ] && [ "$ERRORED" == "0" ]; then
  echo "ZERO REMAINING REFERENCES - CLEAN (all tables scanned successfully)"
elif [ "$ERRORED" == "1" ]; then
  echo "SCAN INCOMPLETE — one or more tables errored above and were NOT verified. Fix those errors and re-run before trusting this scan."
fi
```

Run it: `bash /root/scan_old_domain.sh`

**Do not treat "ZERO REMAINING REFERENCES - CLEAN" as trustworthy unless it's the exact phrase printed** — if you see "SCAN INCOMPLETE" instead, some table couldn't be checked and needs manual attention (usually just wrapping that specific table/column name in backticks in a one-off query to work around a reserved-word collision).

If anything is listed as dirty, for each flagged table: check its columns' data types via `information_schema.columns` (skip anything that looks like PHP-serialized data unless you've confirmed the format — JSON and plain HTML/text are safe to blind-`REPLACE()`; genuine PHP `serialize()` output with embedded length prefixes is not, and needs the length recalculated, not just the text swapped), then apply the same length-safe `UPDATE ... SET col = SUBSTR(REPLACE(col, old, new), 1, max_length)` pattern used in Phase 9 (use `SUBSTR` only for `varchar` columns with a real max length; plain `REPLACE()` for `text`/`longtext`; write to a `.sql` file and pipe it in to avoid the shell backtick problem, same as above). Re-run the scan until it reports clean.

---

## Phase 11: Configure Cron (do not skip this)

> **QA NOTE — this entire phase was missing from the first version of this document,** discovered only on a later re-read, not during the actual clone run. It's a real functional gap: without it, Moodle silently fails to run scheduled tasks on the new site — no notification digests, no automated backups, no gradebook/completion processing, no calendar reminders — with no error message anywhere, just things quietly not happening. This is exactly the kind of bug this document is meant to prevent, so treat it as a required phase, not optional cleanup.

1. In CloudPanel, go to the new site → **Cron Jobs** tab.
2. Add a new cron job that runs Moodle's cron script every minute, as the site's own user (not root):
   ```bash
   * * * * * sudo -u [new_site_user] php8.4 /home/[new_site_user]/htdocs/[new_domain]/public/admin/cli/cron.php >/dev/null 2>&1
   ```
   (If CloudPanel's Cron Jobs UI already runs jobs as the site user by default, you may not need the `sudo -u` wrapper — check what the old, working site's cron entry looks like and mirror it exactly.)
3. Verify by checking the old site's existing cron entry for comparison:
   ```bash
   crontab -l -u [old_site_user] 2>/dev/null || cat /etc/cron.d/*[old_site_user]* 2>/dev/null
   ```
   Confirm the new site's entry follows the same pattern (frequency, user, flags).
4. After a couple of minutes, confirm it actually ran:
   ```bash
   grep -i cron /home/[new_site_user]/htdocs/[new_domain]/moodledata/... # or check Site Administration → Reports → Task logs, in the browser
   ```
   Or simpler: in the browser, go to **Site Administration → Server → Tasks → Scheduled tasks**, and confirm "Last run" timestamps are recent and updating.

---

## Phase 12: Final Verification

1. **Live curl check** (bypasses any browser/CDN cache; use `-F` for a fixed-string match rather than treating the domain as a regex, since the `.` in a domain name is a regex metacharacter otherwise — harmless here but sloppy):
   ```bash
   curl -s https://[new_domain]/ | grep -oF '[old_domain]' | wc -l
   # should be 0
   ```
2. Load the site in an actual browser — front page, login page.
3. *(Optional, redundant with Phase 10's exhaustive scan — kept only as a fast human-readable spot check if you want one without running the full script)* spot-check course-content tables directly:
   ```bash
   for t_c in "mdl_course:summary" "mdl_course_sections:summary" "mdl_url:externalurl" "mdl_page:content" \
              "mdl_label:intro" "mdl_book_chapters:content" "mdl_lesson_pages:contents" \
              "mdl_forum_posts:message" "mdl_folder:intro" "mdl_resource:intro"; do
     tbl="${t_c%%:*}"; col="${t_c##*:}"
     echo -n "$tbl.$col: "
     mysql -u [new_db_user] -p[new_db_password] -N -e \
       "SELECT COUNT(*) FROM [new_db_name].$tbl WHERE $col LIKE '%[old_domain]%';" 2>/dev/null
   done
   ```
   All should print `0`.
4. Log in with an existing (real, migrated) admin account — same credentials as the old site, since the database was cloned wholesale. Do **not** create a new admin account; the real one already came across.
5. Confirm self-registration/guest-access behavior matches expectations — it was copied as-is from the old site's settings.
6. Confirm Phase 11's cron is actually ticking (Site Administration → Server → Tasks → Scheduled tasks, "Last run" timestamps recent).

---

## Summary of Every Bug Encountered Live (quick-reference)

These 12 actually happened during the real clone run that this document is based on:

| # | Symptom | Root Cause | Fix |
|---|---|---|---|
| 1 | New site defaults to a newer PHP version than live | Form default doesn't match live site | Manually set PHP version to match old site exactly |
| 2 | Domain field has trailing `/` | Paste/autofill artifact | Remove it before submitting |
| 3 | "Site User: value too long" | Auto-suggested name exceeds 32 chars | Use a short custom site user name |
| 4 | New site's Databases tab: "No databases found" | "Moodle 5" app selector is a vhost template, not an installer — no DB auto-created | Manually add a database |
| 5 | New site directory only has a placeholder `index.php`, no Moodle files | Same as #4 — nothing was actually installed | Copy files manually in Phase 6 |
| 6 | nginx root = bare site folder, no `/public` | "Moodle 5" vhost template's `root_directory` differs from the old site's manually-tuned convention | Edit the Root Directory *value* (Settings tab) to add `/public`, not the vhost text |
| 7 | `nginx: [emerg] invalid number of arguments in "root" directive` | Tried editing `{{root}}` directly in Vhost Editor — it already expands to a full directive, not just a path | Use the Root Directory field instead; leave Vhost Editor's `{{root}}` line untouched |
| 8 | `mysqldump: ... PROCESS privilege(s) ... when trying to dump tablespaces` | Scoped DB user lacks server-wide PROCESS privilege (expected/correct) | Add `--no-tablespaces` to mysqldump |
| 9 | `The replacement is longer than the original and shortening is not allowed` | New domain string is longer than old domain string | Add `--shorten` to `replace.php` |
| 10 | Custom footer/header HTML, Shibboleth link still show old domain after running `replace.php` | Tool deliberately skips `mdl_config`/`mdl_config_plugins` | Manually `UPDATE` those specific rows |
| 11 | Old domain still found in logs, messages, notifications, quiz questions after everything else fixed | Not covered by the standard tool or the config-table manual fix | Run the full database-wide column scan (Phase 10) and fix whatever it flags |
| 12 | `UPDATE` commands run with exit code 0 but change nothing | Backtick-quoted SQL identifiers get consumed by bash command substitution before reaching MySQL, when run via `-e "..."` over SSH | Avoid backticks in shell-embedded SQL, or write the SQL to a file first and pipe it in with `mysql ... < file.sql` |

## Latent Risks Found During Documentation QA (not encountered live — fixed proactively, before they could bite on a future run)

These did **not** happen during the actual clone and don't call into question the result of that run — they were found by re-reading the finished document critically, and are fixed in this version:

| # | Risk | Where |
|---|---|---|
| 13 | Verification scan script could silently report "CLEAN" while actually failing to check a table (unquoted reserved-word column names + swallowed errors via `2>/dev/null`) | Phase 10 |
| 14 | Same script's column-list query could silently truncate on tables with many text columns (`group_concat_max_len` never raised) | Phase 10 |
| 15 | No cron job was ever configured on the cloned site — scheduled tasks, digests, and backups would silently never run | New Phase 11 |
| 16 | Phase 4's "update the Root Directory field" instruction was stated more confidently than what was actually confirmed — the exact UI path that worked was never pinned down | Phase 4 |
| 17 | Phase 4's CLI-recreate fallback was unverified and likely doesn't do what it claimed | Phase 4 |
| 18 | Phase 8's URL replace only catches `https://` links, missing `http://` and protocol-relative links in the same pass | Phase 8 |
| 19 | No distinction was drawn between fixes that affect live site behavior vs. purely cosmetic historical-log cleanup, risking misplaced priority under time pressure | Phase 9 / 10 |

---

**Bottom line for the real cutover:** follow Phases 0–12 in order. Don't skip Phase 10's full scan, and specifically check that it ends with the exact phrase "ZERO REMAINING REFERENCES - CLEAN (all tables scanned successfully)" — not just "CLEAN" on its own, since that could now mean the hardened script explicitly failed to check something. Don't skip Phase 11 (cron) — it has no visible symptom until days later when someone asks why they never got a notification. Budget the most time for Phase 4 (document root) and Phase 9 (manual config cleanup) — those are the two steps with no obvious warning sign until you go looking, and the two most likely to have a UI detail that's changed since this was written.
