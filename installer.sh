echo "[⚠️ ] Git and Node.js must be installed."
echo "[🐱] Cloning Github Repo."
sleep 2
git clone -b v1.0.3 https://github.com/RBXUtil/RBXUtil.git > /dev/null && cd RBXUtil
echo "[📦] Installing Node.js dependencies."
sleep 3
npm i > /dev/null && echo "[🎉] Installation Finished!"
echo "[📝] Run the command 'cd RBXUtil' and 'npm start'"

