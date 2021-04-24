@echo off
echo [ALERT] Git and Node.js must be installed.
echo [INFO] Cloning Github Repo.
timeout 2
git clone -b v1.0.3 https://github.com/RBXUtil/RBXUtil.git
echo [INFO] Installing Node.js dependencies.
timeout 3
cd RBXUtil && npm i
timeout 2
echo [INFO] Installation Finished!
echo [INFO] Run the command 'cd RBXUtil' and 'npm start'

