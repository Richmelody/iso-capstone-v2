import pexpect
import sys

password = 'yCDwMx1VysVx0E7EWtAP'

command1 = 'ssh -o StrictHostKeyChecking=no api_capston@72.62.5.218 "pwd"'
child1 = pexpect.spawn(command1, encoding='utf-8', timeout=10)
child1.logfile = sys.stdout
try:
    child1.expect('(?i)password:')
    child1.sendline(password)
    child1.expect(pexpect.EOF)
except Exception as e:
    print(f"Error: {e}")
