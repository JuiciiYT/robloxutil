read -p "[⚠️ ] Git and Node.js must be installed. Enter 'Ok' to continue." -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY = Ok ]]
then
    echo "[🐱] Cloning Github Repo."
    git clone -b v1.0.3 https://github.com/RBXUtil/RBXUtil.git > /dev/null 2>&1 && cd RBXUtil
    echo "[📦] Installing Node.js dependencies."
    npm i > /dev/null 2>&1 && echo "[🎉] Installation Finished!"
    echo "[📝] Run the command 'cd RBXUtil' and 'npm start'"
fi
