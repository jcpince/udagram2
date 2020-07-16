D13=`echo $1 | cut -d. -f 1-3`
D4=`echo $1 | cut -d. -f4`

echo $D13.$(( D4 += 1 ))
