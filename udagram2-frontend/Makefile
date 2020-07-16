ROOT ?= ..
include $(ROOT)/make/make.helper

svc_name = $(call get_service_path)
SOURCES := $(shell find src -print)

node_modules: package.json
	npm install

www: $(SOURCES)
	ionic build

build: node_modules www
	@ echo Building $(svc_name)

docker_done: build Dockerfile
	@ touch $@
	docker build -t $(GIT_USER)/$(svc_name):latest .

docker: docker_done

push-docker:
	docker push $(GIT_USER)/$(svc_name)

run-native: build
	gnome-terminal -- bash -c "ionic serve --external; exec bash"

run-docker: docker
	gnome-terminal -- bash -c "docker run --env-file $(ROOT)/env.docker $(GIT_USER)/$(svc_name):latest; exec bash"

kill-docker:
	$(helpers_dir)/docker_kill.sh $(svc_name)

clean:
	@ echo "$@ $(svc_name)..."
	rm -f docker_done
	rm -fr www

distclean: clean
	@ echo "$@ $(svc_name)..."
	rm -fr node_modules

.PHONY: build run-native run-docker kill-docker
