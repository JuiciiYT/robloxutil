if command git --version 2>&1 >/dev/null; then 
  if command --version node &>/dev/null; then
     git clone https://github.com/RobloxUtil/robloxutil.git;
     npm install;
     echo "\e[1m\e[32mRobloxUtil \e[0m\e[32mwas installed";
  else
     echo "\e[31m\e[1mNode.js \e[0m\e[31mis not installed.";
else
  echo "\e[31m\e[1mGit \e[0m\e[31mis not installed.";
fi;
