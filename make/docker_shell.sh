docker_ids=`docker ps|grep $1|cut -d" " -f 1`
shell=$2

for docker_id in $docker_ids; do
    echo "Starting ${shell} on $1:$docker_id"
    gnome-terminal --title="Shell on $1" -- bash -c "docker exec -it $docker_id $shell"
done
