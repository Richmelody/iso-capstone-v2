# Manual CI/CD Deployment Guide (ISO Capstone System)

This document serves as a robust reference guide for manually deploying updates to the staging and production environments hosted on CloudPanel. 

**CRITICAL WARNING:** This guide has been updated to completely prevent the `502 Bad Gateway` errors we experienced in the past. The key to preventing the bug is ensuring you bind to the **exact port** that CloudPanel has assigned to the app, and making sure you clear out the old process before starting the new one!

---

## 1. CloudPanel Site Identification & Credentials

Here is the breakdown of your ISO Capstone sites, including SSH credentials:

### 🟡 Demo / Legacy Environment
* **Frontend:** `iso-demo.chigozieikuru.cloud`
  * **Site User:** `iso_frontend_admin`
  * **Password:** `yCDwMx1VysVx0E7EWtAP`
  * **App Type:** STATIC
* **Backend:** `api-iso-demo.chigozieikuru.cloud`
  * **Site User:** `iso_backend_admin`
  * **Password:** `TFniAVtDbcpq9qrQS1gZ`
  * **App Type:** PYTHON (CloudPanel Port: `8081`)

### 🟢 Testing / Staging Environment
* **Frontend:** `capstoneasstesting.chigozieikuru.cloud` 
  * **Site User:** `test_admin`
  * **App Type:** STATIC
* **Backend:** `apicapstoneassessment.chigozieikuru.cloud` 
  * **Site User:** `chigs-apicapstoneassessment`
  * **App Type:** REVERSE-PROXY

### 🔴 Production Environment
* **Frontend:** `assessments.chigozieikuru.cloud` 
  * **Site User:** `chigozieikuru-assessments`
  * **App Type:** STATIC
* **Backend:** `api.chigozieikuru.cloud`
  * **Site User:** `api_admin`
  * **App Type:** PYTHON

---

## 2. Deployment Workflow

Follow these exact steps to deploy to any VPS without causing port conflicts.

### Step A: Deploying the Backend (API)

1. **Verify Your Port in CloudPanel:**
   Before you do anything, go to your CloudPanel Dashboard -> click your backend domain -> look at **Python Settings**. Find the **App Port** (e.g., `8081`, `8000`, etc.). You **must** use this exact port in the commands below!

2. **SSH into the Backend Site User:**
   ```bash
   ssh YOUR_SITE_USER@147.79.118.135
   # Provide the password when prompted
   ```

3. **Pull Latest Code:**
   ```bash
   cd htdocs/YOUR_API_DOMAIN_HERE/backend
   git fetch origin
   git checkout staging  # (Use 'main' if deploying to production)
   git pull origin staging # (Use 'origin main' if deploying to production)
   ```

4. **Clear the Port (Prevents the 502 Bug!):**
   Run this command using your specific port to cleanly kill the old process:
   ```bash
   # Replace 8081 with your actual CloudPanel App Port!
   lsof -t -i :8081 | xargs kill -9
   ```

5. **Start the New Server Permanently:**
   Start the new code in the background on that exact same port:
   ```bash
   # Replace 8081 with your actual CloudPanel App Port!
   nohup venv/bin/uvicorn main:app --host 127.0.0.1 --port 8081 > uvicorn.log 2>&1 &
   ```

### Step B: Deploying the Frontend (Static UI)

1. **SSH into the Frontend Site User:**
   ```bash
   ssh YOUR_FRONTEND_SITE_USER@147.79.118.135
   # Provide the password when prompted
   ```

2. **Pull Latest Code & Build:**
   ```bash
   cd htdocs/YOUR_FRONTEND_DOMAIN_HERE/frontend
   git fetch origin
   git checkout staging  # (Use 'main' if deploying to production)
   git pull origin staging # (Use 'origin main' if deploying to production)
   npm install
   npm run build
   ```
   *(Since this is a STATIC app, it instantly updates once the build finishes!)*
