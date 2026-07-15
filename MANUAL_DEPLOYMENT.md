# Manual CI/CD Deployment Guide (ISO Capstone System)

This document serves as a robust reference guide for manually deploying updates to the staging and production environments hosted on CloudPanel. 

**CRITICAL WARNING:** This guide has been updated to completely prevent the `502 Bad Gateway` errors we experienced in the past. The key to preventing the bug is ensuring you bind to the **exact port** that CloudPanel has assigned to the app, and making sure you clear out the old process before starting the new one!

---

## 1. STAGING DEPLOYMENT (Testing Environment)

Use these exact commands to deploy the `staging` branch to the demo/staging server (`147.79.118.135`).

### Step A: Deploying the Staging Backend
1. **SSH into the server:**
   ```bash
   ssh iso_backend_admin@147.79.118.135
   # Password: TFniAVtDbcpq9qrQS1gZ
   ```
2. **Pull Code and Restart Server:**
   ```bash
   cd htdocs/api-iso-demo.chigozieikuru.cloud/backend
   git fetch origin
   git checkout staging
   git pull origin staging

   # Clear port 8081
   lsof -t -i :8081 | xargs kill -9

   # Restart the backend permanently on port 8081
   nohup venv/bin/gunicorn -w 3 -k uvicorn.workers.UvicornWorker main:app --bind 127.0.0.1:8081 > gunicorn.log 2>&1 &
   ```

### Step B: Deploying the Staging Frontend
1. **SSH into the server:**
   ```bash
   ssh iso_frontend_admin@147.79.118.135
   # Password: yCDwMx1VysVx0E7EWtAP
   ```
2. **Pull Code and Build:**
   ```bash
   cd htdocs/iso-demo.chigozieikuru.cloud/frontend
   git fetch origin
   git checkout staging
   git pull origin staging
   npm install
   npm run build
   ```

---

## 2. MERGING STAGING TO MAIN (The Bridge)

Once the staging site has been tested and approved, you must merge the changes to the `main` branch locally before deploying to production. Run these commands on your local development machine:

```bash
git checkout main
git merge staging
git push origin main
```

---

## 3. MAIN PRODUCTION DEPLOYMENT (Live Environment)

Use these exact commands to deploy the `main` branch to the live production server (`72.62.5.218`).

### Step A: Deploying the Main Backend
1. **SSH into the server:**
   ```bash
   ssh api_capston@72.62.5.218
   # Password: cdE8N7et6dleeJuHW9mr
   ```
2. **Pull Code and Restart Server:**
   ```bash
   cd htdocs/api-exams.astutebusinessprojects.cloud/backend
   git fetch origin
   git checkout main
   git pull origin main

   # Clear port 8091
   lsof -t -i :8091 | xargs kill -9

   # Restart the backend permanently on port 8091
   nohup venv/bin/gunicorn -w 3 -k uvicorn.workers.UvicornWorker main:app --bind 127.0.0.1:8091 > gunicorn.log 2>&1 &
   ```

### Step B: Deploying the Main Frontend
1. **SSH into the server:**
   ```bash
   ssh exams_capstone@72.62.5.218
   # Password: qbQeV75DPNJzeOJHq1fZ
   ```
2. **Pull Code and Build:**
   ```bash
   cd htdocs/exams.astutebusinessprojects.cloud/frontend
   git fetch origin
   git checkout main
   git pull origin main
   npm install
   npm run build
   ```

---

## 4. Post-Deployment Operations

### Generating New Exam Access Codes
To generate new batches of access codes for the live site, SSH into the backend server and run the python generation script.
1. **SSH into the Backend:**
   ```bash
   ssh api_capston@72.62.5.218
   # Password: cdE8N7et6dleeJuHW9mr
   ```
2. **Run the Generator:**
   ```bash
   cd htdocs/api-exams.astutebusinessprojects.cloud/backend
   
   # Example: Generate 10 codes for ISO 27001
   venv/bin/python generate_codes.py --exam iso27001_foundation --count 10
   
   # Other standard IDs include: iso14001_foundation, fssc22000_foundation, iso45001_foundation
   ```
The newly generated access codes will be printed in your terminal and saved to the production database automatically.

### Immediate Post-Deployment Testing (No Camera Required)
You can instantly verify the live site is working without needing a webcam by using the Secret Developer Bypass.
1. Open the live site in your browser: `https://exams.astutebusinessprojects.cloud`
2. Enter any valid Name, Email, and Access Code.
3. On the **Pre-Flight Hardware Check** screen, look at the top header that says **"HARDWARE SETUP"**.
4. **Rapidly click the "HARDWARE SETUP" title 5 times.**
5. A secret red button labeled `[DEV MODE] Force Bypass Error` will appear. Click it.
6. The system will turn green and let you enter the exam immediately, skipping the webcam checks.
