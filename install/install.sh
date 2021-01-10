git --version 2>&1 >/dev/null # improvement by tripleee
GIT_IS_AVAILABLE=$?
# ...
if [ $GIT_IS_AVAILABLE -eq 0 ]; then 
  if command --version node &>/dev/null; then
     git clone https://github.com/RobloxUtil/robloxutil.git
     npm install
  else
     echo "\e[31m\e[1mNode.js \e[0m\e[31mis not installed."
   fi
else
  echo "\e[31m\e[1mGit \e[0m\e[31mis not installed."
fi
