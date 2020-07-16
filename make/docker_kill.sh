docker_ids=`docker ps|grep $1|cut -d" " -f 1`

for docker_id in $docker_ids; do
    echo "Killing $docker_id"
    docker kill $docker_id
done
