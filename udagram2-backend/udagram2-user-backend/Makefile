ROOT ?= ../..
include $(ROOT)/make/make.helper

svc_name = $(call get_service_path)
SOURCES := $(shell find src -name '*.ts')

node_modules: package.json
	npm install

www: $(SOURCES)
	npm run build

build: node_modules www
	@ echo Building $(svc_name)

docker_done: www Dockerfile
	@ touch $@
	docker build -t $(GIT_USER)/$(svc_name):latest .

docker: build docker_done

push-docker:
	docker push $(GIT_USER)/$(svc_name)

run-native:
	gnome-terminal -- bash -c "npm run dev; exec bash"

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

.PHONY: build docker run-native run-docker kill-docker
