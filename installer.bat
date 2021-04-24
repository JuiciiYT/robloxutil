@echo off
echo "[⚠️ ] Git and Node.js must be installed."
echo "[🐱] Cloning Github Repo."
timeout 2
git clone -b v1.0.3 https://github.com/RBXUtil/RBXUtil.git
echo "[📦] Installing Node.js dependencies."
timeout 3
cd RBXUtil && npm i
timeout 2
echo "[🎉] Installation Finished!"
set location=`pwd`
echo "[📝] Installed in: $location"
echo "[📝] Run the command 'cd RBXUtil' and 'npm start'"

