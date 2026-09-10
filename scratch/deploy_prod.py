import pexpect
import sys

print("--- Deploying production backend ---")
password_backend = '29VXt4QeH66kx1YyCXZF'
command1 = 'ssh -o StrictHostKeyChecking=no api_capston@72.62.5.218 "cd htdocs/api-exams.astutebusinessprojects.cloud/backend && git fetch origin && git checkout main && git pull origin main && source venv/bin/activate && pip install --force-reinstall anyio && pip install -r requirements.txt && lsof -t -i :8091 | xargs kill -9; nohup uvicorn main:app --host 127.0.0.1 --port 8091 > uvicorn.log 2>&1 &"'
child1 = pexpect.spawn(command1, encoding='utf-8', timeout=300)
child1.logfile = sys.stdout
try:
    child1.expect('(?i)password:')
    child1.sendline(password_backend)
    child1.expect(pexpect.EOF)
except Exception as e:
    print(f"Backend deployment error: {e}")

print("\n--- Deploying production frontend ---")
password_frontend = '5jaZk4vu1V5orMKnjjgI'
command2 = 'ssh -o StrictHostKeyChecking=no exams_capstone@72.62.5.218 "cd htdocs/exams.astutebusinessprojects.cloud && git pull origin main && echo \\"VITE_API_URL=https://api-exams.astutebusinessprojects.cloud\\" > frontend/.env.production && cd frontend && rm -rf node_modules package-lock.json && npm install && npm run build"'
child2 = pexpect.spawn(command2, encoding='utf-8', timeout=600)
child2.logfile = sys.stdout
try:
    child2.expect('(?i)password:')
    child2.sendline(password_frontend)
    child2.expect(pexpect.EOF)
except Exception as e:
    print(f"Frontend deployment error: {e}")

print("\nDeployment scripts complete.")
