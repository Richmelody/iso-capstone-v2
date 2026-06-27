# 🚀 ISO Capstone: Failproof CI/CD & VPS Deployment Guide

This document captures the hard-earned lessons, edge cases, and exact operational workflows required to manage the ISO Capstone system. It guarantees a safe, failproof deployment pipeline from your local machine, to the Staging VPS, and finally to the Live Company VPS without disrupting other existing services (like the company LMS).

---

## 🏗️ The CI/CD Pipeline Architecture
We use a two-branch, two-server architecture:
1. **Local Machine**: Where you write and test code.
2. **Staging VPS (`staging` branch)**: `iso-demo.chigozieikuru.cloud`. This is your personal server where new features are tested before going live.
3. **Production VPS (`main` branch)**: `exams.astutebusinessprojects.cloud`. The live company server.

---

## 🔄 Day-to-Day Workflow: From Code to Live

### Phase 1: Local Development to Staging
When you finish building a new feature locally:

1. **Push to Staging from your Local Machine:**
   ```bash
   git checkout staging
   git add .
   git commit -m "feat: your new feature"
   git push origin staging
   ```
2. **Pull and Deploy on the Staging VPS:**
   *SSH into your Staging VPS and run the deployment commands (see Phase 3 below).*

### Phase 2: Staging to Production (The Merge)
Once you have tested the staging site and confirmed it is bug-free:

1. **Merge Staging into Main on your Local Machine:**
   ```bash
   git checkout main
   git merge staging
   git push origin main
   ```
2. **Pull and Deploy on the Production VPS:**
   *SSH into the Company VPS and run the deployment commands (see Phase 3 below).*

---

## 🚀 Phase 3: The Failproof Deployment Execution
*These are the exact commands you run on the VPS (Staging or Production) to apply the code updates.*

### 1. Frontend Deployment (React)
*Log in to the server. Switch to your frontend user (e.g., `su - exams_capstone`).*

```bash
# 1. Navigate to the frontend folder
cd ~/htdocs/exams.astutebusinessprojects.cloud
git pull origin main  # (Use 'origin staging' if on the Staging VPS)

# 2. Force the correct Environment URL
# If on Production:
echo "VITE_API_URL=https://api-exams.astutebusinessprojects.cloud" > frontend/.env.production
# If on Staging:
echo "VITE_API_URL=https://api-iso-demo.chigozieikuru.cloud" > frontend/.env.production

# 3. Enter the frontend folder
cd frontend

# 4. Clean out old packages to prevent Native Binding / Rollup bugs
rm -rf node_modules package-lock.json

# 5. Compile the site (Make sure you are using Node 22 via NVM!)
npm install
npm run build
```

### 2. Backend Deployment (FastAPI)
*Log in to the server. Switch to your backend user (e.g., `su - api_capston`).*

```bash
# 1. Navigate to the backend folder
cd ~/htdocs/api-exams.astutebusinessprojects.cloud
git pull origin main  # (Use 'origin staging' if on the Staging VPS)

# 2. Activate the virtual environment
# NOTE: The virtual environment MUST be located strictly inside the 'backend' folder!
cd backend
source venv/bin/activate

# 3. Force reinstall dependencies (Fixes the fatal `anyio` Server 500 crashes)
pip install --force-reinstall anyio
pip install -r requirements.txt

# 4. Kill the old instance securely
killall uvicorn

# 5. Boot the new server in the background
# If on Production:
nohup uvicorn main:app --host 127.0.0.1 --port 8091 > api.log 2>&1 &
# If on Staging:
nohup uvicorn main:app --host 127.0.0.1 --port 8081 > api.log 2>&1 &

# 6. Verify the boot was successful
cat api.log
```

---

## 🛡️ Critical Glitches & "Hard Lessons" Log

### 1. The Root LMS Danger & Node.js
**The Bug:** Vite 8 requires Node.js v22. The default server OS only provides v18. Upgrading Node globally via `root` risks breaking the company's existing LMS.
**The Fix:** We exclusively use `nvm` (Node Version Manager) to install Node.js strictly inside the isolated frontend user (`/home/exams_capstone/`). It requires zero root access and leaves the LMS 100% untouched.

### 2. The CloudPanel Let's Encrypt / React Router Conflict
**The Bug:** React requires Nginx to route all traffic to `/index.html` via `try_files`. However, Let's Encrypt needs to read a hidden `.well-known` folder in the root to issue SSL certificates, resulting in a 404 failure.
**The Fix:** Add this exact block to the CloudPanel Vhost to securely bypass the React routing for SSL generation:
```nginx
location ~ /.well-known {
  root /home/exams_capstone/htdocs/exams.astutebusinessprojects.cloud;
  auth_basic off;
  allow all;
}
```

### 3. The Vite `.env.production` Override Trap
**The Bug:** Vite automatically overrides `.env` with `.env.production` when building for production. If the old production URL is checked into Git, the frontend will be permanently hardcoded to the wrong server and throw "Vault connection refused" CORS errors.
**The Fix:** The deployment pipeline MUST echo the correct URL into `.env.production` right before running `npm run build`.

### 4. The `anyio._backends` 500 Crash
**The Bug:** Sometimes when the FastAPI server is restarted, it throws a `500 Internal Server Error` and a `ModuleNotFoundError: No module named 'anyio._backends'`, blocking all CORS headers.
**The Fix:** Run `pip install --force-reinstall anyio` inside the `backend` folder before booting the server to rebuild the corrupted native bindings.
