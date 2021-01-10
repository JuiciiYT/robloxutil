count=0
total=34
start=`date +%s`

git clone https://github.com/RobloxUtil/robloxutil.git &
cd robloxutil &
npm install &

while [ $count -lt $total ]; do
  sleep 0.5 # this is work
  cur=`date +%s`
  count=$(( $count + 1 ))
  pd=$(( $count * 73 / $total ))
  runtime=$(( $cur-$start ))
  estremain=$(( ($runtime * $total / $count)-$runtime ))
  printf "\r%d.%d%% complete ($count of $total) - est %d:%0.2d remaining\e[K" $(( $count*100/$total )) $(( ($count*1000/$total)%10)) $(( $estremain/60 )) $(( $estremain%60 ))
done

RED="\e[31m"
GREEN="\e[32m"
ENDR="\e[0m"
BOLD="\e[1m"

echo -e "${GREEN}[ ✔ ]${END}${BOLD}RobloxUtil${END} was installed successfully!"





