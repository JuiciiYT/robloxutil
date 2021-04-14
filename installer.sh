echo "[⚠️ ] Git and Node.js must be installed."
echo "[🐱] Cloning Github Repo."
sleep 2
git clone -b v1.0.3 https://github.com/RBXUtil/RBXUtil.git
echo "[📦] Installing Node.js dependencies."
sleep 3
cd RBXUtil; npm i && sleep 2 && echo "[🎉] Installation Finished!"
location=`pwd`
name=RBXUtil
echo "[📝] Installed in: $location/$name"
echo "[📝] Run the command 'cd RBXUtil' and 'npm start'"

