read -p "[⚠️ ] Git and Node.js must be installed. Enter 'Ok' to continue." -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY = Ok ]]
then
    git clone -b v1.0.3 https://github.com/RBXUtil/RBXUtil.git && cd RBXUtil
    npm i && echo "[🎉] Installation Finished!"
    echo "[📝] Run the command 'cd RBXUtil' and 'npm start'"
fi
