echo "[⚠️ ] Git and Node.js must be installed."
echo "[🐱] Cloning Github Repo."
sleep 2
git clone -b v1.0.3 https://github.com/RBXUtil/RBXUtil.git > /dev/null
echo "[📦] Installing Node.js dependencies."
sleep 3
cd RBXUtil && npm i > /dev/null && sleep 2 && echo "[🎉] Installation Finished!"
echo "[📝] Run the command 'cd RBXUtil' and 'npm start'"

