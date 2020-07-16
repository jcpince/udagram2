ROOT ?= ..

include $(ROOT)/make/make.helper

svc_name = $(call get_service_path)

build:
	@ echo Building $(svc_name)

docker_done: nginx.conf Dockerfile
	@ touch $@
	docker build -t $(GIT_USER)/$(svc_name):latest .

docker: docker_done

push-docker:
	docker push $(GIT_USER)/$(svc_name)

# Workaround because using the address name for the frontend seems to break the connectivity...
set-native-frontend:
	sed 's/udagram-frontend/$(local_ip)/g' nginx.template > nginx.conf

set-docker-frontend:
	sed 's/udagram-frontend/$(fontend_docker_ip)/g' nginx.template > nginx.conf

run-native: set-native-frontend docker
	gnome-terminal -- bash -c "docker run --add-host udagram-feed-api:$(local_ip) --add-host udagram-user-api:$(local_ip) --add-host udagram-frontend:$(local_ip) $(GIT_USER)/$(svc_name):latest; exec bash"

run-docker: set-docker-frontend docker
	gnome-terminal -- bash -c "docker run --add-host udagram-feed-api:$(feed_docker_ip) --add-host udagram-user-api:$(user_docker_ip) --add-host udagram-frontend:$(fontend_docker_ip) $(GIT_USER)/$(svc_name):latest; exec bash"

restaure-nginx-conf:
	cp nginx.template nginx.conf

kill-docker: restaure-nginx-conf
	$(helpers_dir)/docker_kill.sh $(svc_name)

clean: restaure-nginx-conf
	@ echo "$@ $(svc_name)..."
	rm -f docker_done

distclean: clean
	@ echo "$@ $(svc_name)..."

.PHONY: build docker kill-docker
