while kill -0 $pid 2> /dev/null; do
for i in "${spin[@]}"
do
    echo -ne "\b$i"
    sleep 0.1
done
done

spin[0]="[ - ] Installing..."
spin[1]="[ \\ ] Installing..."
spin[2]="[ | ] Installing..."
spin[3]="[ / ] Installing..."

git clone https://github.com/RobloxUtil/robloxutil.git
cd robloxutil
npm install
echo -e "\e[32m[ ✔ ]\e[m \e \e[1mRobloxUtil \e[0mwas successfully installed."
