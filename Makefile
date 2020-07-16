MICROSERVICES := \
	udagram2-reverseproxy \
	udagram2-backend/udagram2-feed-backend \
	udagram2-backend/udagram2-user-backend \
	udagram2-frontend

build clean distclean docker run-native run-docker kill-docker push-docker:
	@echo "Global $@..."
	@$(foreach microservice, $(MICROSERVICES), \
	    cd $(microservice) ; \
	    make ROOT=$(CURDIR) $@; \
	    cd $(CURDIR); \
	)
