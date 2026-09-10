import pexpect
import sys

password = 'yCDwMx1VysVx0E7EWtAP'

print("--- Deploying staging frontend ---")
command = 'ssh -o StrictHostKeyChecking=no iso_frontend_admin@147.79.118.135 "cd htdocs/iso-demo.chigozieikuru.cloud/frontend && git fetch origin && git checkout staging && git pull origin staging && npm install && npm run build -- --mode staging"'
child = pexpect.spawn(command, encoding='utf-8', timeout=300)
child.expect('password:')
child.sendline(password)
child.expect(pexpect.EOF)
print(child.before)
