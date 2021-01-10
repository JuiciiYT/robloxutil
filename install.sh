spin[0]="[ - ] Installing..."
spin[1]="[ \\ ] Installing..."
spin[2]="[ | ] Installing..."
spin[3]="[ / ] Installing..."

while true; do
  echo -e "${spin[0]}\033[K\r"
  sleep 1
  echo -e "${spin[1]}\033[K\r"
  sleep 1
  echo -e "${spin[2]}\033[K\r"
  sleep 1
  echo -e "${spin[3]}\033[K\r"
  sleep 1
done

git clone https://github.com/RobloxUtil/robloxutil.git
cd robloxutil
npm install
echo -ne "\e[32m[ ✔ ]\e[m \e \e[1mRobloxUtil \e[0mwas successfully installed."
