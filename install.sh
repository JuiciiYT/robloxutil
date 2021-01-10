spin[0]="[ - ] Installing..."
spin[1]="[ \\ ] Installing..."
spin[2]="[ | ] Installing..."
spin[3]="[ / ] Installing..."

while true; do
  echo -n "${spin[0]}"
  sleep 1
  echo -n "${spin[1]}"
  sleep 1
  echo -n "${spin[2]}"
  sleep 1
  echo -n "${spin[3]}"
  sleep 1
done

git clone https://github.com/RobloxUtil/robloxutil.git
cd robloxutil
npm install
echo -ne "\e[32m[ ✔ ]\e[m \e \e[1mRobloxUtil \e[0mwas successfully installed."
