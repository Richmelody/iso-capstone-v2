# 🚀 ISO Capstone: Official Production Deployment Guide

This document is the definitive, battle-tested blueprint for deploying the ISO Capstone Exam System to your company's live Production VPS. It includes all the "hard lessons" and edge cases discovered during the Staging deployment to ensure a flawless, zero-downtime transition.

## 🏗️ Architecture & Branch Strategy
- **Staging VPS (Your Server)**: Tracks the `staging` branch. Used for testing new AI features and UI updates.
- **Production VPS (Company Server)**: Tracks the `main` branch. 
- **Frontend Domain**: e.g., `assessments.company.com`
- **Backend Domain**: e.g., `api.assessments.company.com`

---

## Phase 1: CloudPanel & Server Preparation
*Do not use the `root` user. Isolate the frontend and backend for security.*

1. **Create Backend Site (Python App)**
   - **Domain**: `api.assessments.company.com`
   - **App Port**: `8081`
   - **Python Version**: `3.12`
   - **Site User**: `iso_api_prod`

2. **Create Frontend Site (Static HTML)**
   - **Domain**: `assessments.company.com`
   - **Site User**: `iso_web_prod`

---

## Phase 2: Secure Git Authentication
*HTTP cloning will timeout. You must use SSH.*

1. Generate an SSH key on the Company VPS for both users:
   ```bash
   ssh-keygen -t ed25519 -C "production-vps"
   cat ~/.ssh/id_ed25519.pub
   ```
2. Add both SSH keys to the GitHub Repository Deploy Keys.
3. Verify connection: `ssh -T git@github.com`

---

## Phase 3: Backend API Deployment (`main` branch)
*Log in as your backend user (e.g., `iso_api_prod`)*

### 1. Clone the Production Branch
```bash
cd ~/htdocs/api.assessments.company.com
git init
git remote add origin git@github.com:Richmelody/iso-capstone-v2.git
git fetch
git checkout -t origin/main -f
```

### 2. Configure Production Environment Variables
*The `.env` file must be created manually to enforce 12-factor isolation. It is CRITICAL to set `ENV=production` so test codes (DEMO-14001) are permanently locked out.*
```bash
cd backend
cat <<EOT >> .env
FRONTEND_URL=https://assessments.company.com
API_PUBLIC_URL=https://api.assessments.company.com
ENV=production
EOT
```

### 3. Install & Boot the Server
*We use `python-dotenv` (which we added to the codebase) to ensure the `.env` file is read reliably. We use `killall uvicorn` (not `python3`) to prevent Port 8081 collisions.*
```bash
# Activate virtual environment
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Ruthlessly terminate any stuck instances
killall uvicorn

# Boot the API in the background securely
nohup venv/bin/uvicorn main:app --host 127.0.0.1 --port 8081 > api.log 2>&1 &

# Verify it booted cleanly (Look for "Application startup complete")
cat api.log
```

---

## Phase 4: Frontend Deployment (`main` branch)
*Log in as your frontend user (e.g., `iso_web_prod`)*

### 1. Clone the Production Branch
```bash
cd ~/htdocs/assessments.company.com
git init
git remote add origin git@github.com:Richmelody/iso-capstone-v2.git
git fetch
git checkout -t origin/main -f
```

### 2. Overwrite the Vite Production URL
*Vite automatically prioritizes `.env.production`. You **MUST** overwrite this file before building, otherwise the frontend will be hardcoded to the wrong API.*
```bash
cd frontend
echo "VITE_API_URL=https://api.assessments.company.com" > .env.production
```

### 3. Compile the React Application
```bash
npm install
npm run build
```

---

## Phase 5: CloudPanel Nginx Configuration (The Final Step)
*Because React is a Single Page Application (SPA), Nginx will throw a 404 error if a user refreshes the page mid-exam unless we explicitly tell Nginx how to route traffic.*

1. Go to your CloudPanel Dashboard.
2. Click on the Frontend Site (`assessments.company.com`).
3. Click the **Vhost** tab.
4. **Change the Root Directory:**
   Find the line `{{root}}` (or `root /home/...;`) near the top. Change it to exactly point to the `dist` folder:
   ```nginx
   root /home/iso_web_prod/htdocs/assessments.company.com/frontend/dist;
   ```
5. **Fix the React Routing:**
   Scroll to the very bottom. **Delete** this block:
   ```nginx
   if (-f $request_filename) {
     break;
   }
   ```
   **Replace it** with this exact block:
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```
6. Click **Save**.

Your production environment is now live, securely isolated, and completely decoupled from your legacy monolith!
