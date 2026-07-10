# Manual CI/CD Deployment Guide (ISO Capstone System)

This document serves as a quick reference guide for manually deploying updates to the staging and production environments hosted on CloudPanel.

---

## 1. CloudPanel Site Identification

Based on your CloudPanel configuration, here is the breakdown of your ISO Capstone sites:

### 🟢 Testing / Staging Environment
* **Frontend:** `capstoneasstesting.chigozieikuru.cloud` 
  * **Site User:** `test_admin`
  * **App Type:** STATIC
* **Backend:** `apicapstoneassessment.chigozieikuru.cloud` 
  * **Site User:** `chigs-apicapstoneassessment`
  * **App Type:** REVERSE-PROXY

### 🟡 Demo / Legacy Environment (If actively used)
* **Frontend:** `iso-demo.chigozieikuru.cloud`
  * **Site User:** `iso_frontend_admin`
  * **App Type:** STATIC
* **Backend:** `api-iso-demo.chigozieikuru.cloud`
  * **Site User:** `iso_backend_admin`
  * **App Type:** PYTHON

### 🔴 Production Environment
* **Frontend:** `assessments.chigozieikuru.cloud` 
  * **Site User:** `chigozieikuru-assessments`
  * **App Type:** STATIC
* **Backend:** `api.chigozieikuru.cloud`
  * **Site User:** `api_admin`
  * **App Type:** PYTHON

---

## 2. Deployment Workflow

When you have pushed code from your local machine to GitHub (`origin staging` or `origin main`), follow these steps to deploy to the VPS.

### Step A: Deploying the Backend (API)
1. **SSH into the Backend Site User:**
   ```bash
   # For Demo: ssh iso_backend_admin@147.79.118.135
   # For Prod API: ssh api_admin@147.79.118.135
   # For Testing API: ssh chigs-apicapstoneassessment@147.79.118.135
   ```
2. **Navigate to the Application Directory:**
   ```bash
   cd htdocs/YOUR_API_DOMAIN_HERE/backend
   ```
3. **Pull Latest Code:**
   ```bash
   git fetch origin
   git checkout staging  # or main, depending on your environment
   git pull origin staging
   ```
4. **Restart the Service:**
   (Depending on how you run your Python app on CloudPanel, this usually means killing the existing `gunicorn`/`uvicorn` process and restarting it, or using `systemctl` if configured).
   ```bash
   pkill -f gunicorn
   nohup venv/bin/gunicorn -w 3 -k uvicorn.workers.UvicornWorker main:app --bind 127.0.0.1:8000 > gunicorn.log 2>&1 &
   ```

### Step B: Deploying the Frontend (Static UI)
1. **SSH into the Frontend Site User:**
   *(For Demo Environment)*
   ```bash
   ssh iso_frontend_admin@147.79.118.135
   ```
   *(For Testing/Staging)*
   ```bash
   ssh test_admin@147.79.118.135
   ```
   *(For Production)*
   ```bash
   ssh chigozieikuru-assessments@147.79.118.135
   ```
2. **Navigate to the Application Directory:**
   ```bash
   cd htdocs/YOUR_DOMAIN_NAME_HERE/frontend
   ```
3. **Pull Latest Code:**
   ```bash
   git fetch origin
   git checkout staging  # or main
   git pull origin staging
   ```
4. **Build the Static Assets:**
   ```bash
   npm install
   npm run build
   ```
   *(CloudPanel serves the `dist/` folder automatically for STATIC apps, so once the build finishes, the live site is instantly updated!)*

---

## 3. Quick Checklist before Deploying
- [ ] Have the tests passed locally?
- [ ] Is the code pushed to GitHub (`git push origin staging`)?
- [ ] Did you SSH using the correct CloudPanel **Site User** (not root)?
- [ ] Did you remember to rebuild the frontend (`npm run build`)?
