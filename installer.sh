spin[0]="[ - ] Installing..."
spin[1]="[ \\ ] Installing..."
spin[2]="[ | ] Installing..."
spin[3]="[ / ] Installing..."

speedtest = "Loading..." &           ## & : continue running script
pid=$!                          ## PID of last command

# If this script is killed, kill 'speedtest':
trap "kill $pid 2> /dev/null" EXIT

# While 'speedtest' is running:
while kill -0 $pid 2> /dev/null; do
for i in "${spin[@]}"
do
    echo -ne "\b$i"
    sleep 0.1
done
done

# Disable the trap on a normal exit:
trap - EXIT

printf "\n\t           "
grep Download: .st.txt
printf "\t             "
grep Upload: .st.txt
echo ''
rm -f st.txt
#while true; do
  #echo -ne "${spin[0]}"
  #sleep 0.1
  #echo -ne "${spin[1]}"
  #sleep 0.1
  #echo -ne "${spin[2]}"
  #sleep 0.1
  #echo -ne "${spin[3]}"
  #sleep 0.1
#done

git clone https://github.com/RobloxUtil/robloxutil.git
cd robloxutil
npm install
echo -ne "\e[32m[ ✔ ]\e[m \e \e[1mRobloxUtil \e[0mwas successfully installed."
