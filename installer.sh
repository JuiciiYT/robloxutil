BAR='##############################'
FILL='------------------------------'
totalLines=$(wc -l $file | awk '{print $1}')  # num. lines in file
barLen=30

# --- iterate over lines in csv file ---
count=0
while IFS=, read -r _ col1 col2 col3; do
    # update progress bar
    count=$(($count + 1))
    percent=$((($count * 100 / $totalLines * 100) / 100))
    i=$(($percent * $barLen / 100))
    echo -ne "\r[${BAR:0:$i}${FILL:$i:barLen}] $count/$totalLines ($percent%)"

    # other stuff
    (...)
done git clone https://github.com/RobloxUtil/robloxutil.git && cd robloxutil && npm install && echo -e "\e[32m[ ✔ ]\e[m \e \e[1mRobloxUtil \e[0mwas successfully installed."
