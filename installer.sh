read -p "[⚠️ ] Git and Node.js must be installed. Enter 'Ok' to continue." -n 1 -r

if [[ $REPLY = Ok ]]; then
    echo "[🐱] Cloning Github Repo."
    git clone -b v1.0.3 https://github.com/RBXUtil/RBXUtil.git > /dev/null && cd RBXUtil
    echo "[📦] Installing Node.js dependencies."
    npm i > /dev/null && echo "[🎉] Installation Finished!"
    echo "[📝] Run the command 'cd RBXUtil' and 'npm start'"
fi
