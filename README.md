# Udagram Image Filtering Application

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree.
It allows users to register and log into a web client, post photos to the feed, and process photos
using an image filtering microservice.

The project is split in 4 parts:
1. Frontend - Angular web application built with Ionic Framework
2. Backend RESTful feed API - Node-Express application
3. Backend RESTful user API - Node-Express application
4. Reverse proxy- Nginx application allowing to have a single entry point to our project

### Prerequisite
1. The depends on the Node Package Manager (NPM). You will need to download and install Node from [https://nodejs.com/en/download](https://nodejs.org/en/download/). This will allow you to be able to run `npm` commands.
2. Environment variables will need to be set. These environment variables include database connection details that should not be hard-coded into the application code.

#### Environment variables
Here is the list of environment variables required:
```
POSTGRES_USERNAME
POSTGRES_PASSWORD
POSTGRES_DATABASE
POSTGRES_HOST
POSTGRES_PORT
AWS_REGION
AWS_PROFILE
AWS_MEDIA_BUCKET
JWT_SECRET
FEED_API_PORT
USER_API_PORT
APP_URL
```

### Database
A PostgreSQL database shall be used on AWS RDS.
Set the config values for environment variables prefixed with `POSTGRES_`.

### S3
A AWS S3 bucket shall be setup.
Set the config values for environment variables prefixed with `AWS_`.

### Building
For convenience, a Makefile has been created to manage the main operations; i.e. building, running locally or in docker containers and cleaning.
1. make build       _# to build all the compenents_
2. make docker      _# to build the docker containers_
3. make run-native  _# to run locally (note that the reverseproxy **ALWAYS** run in a container)_
4. make run-docker  _# to run in containers_
5. make kill-docker _# to kill **ALL** the spawned containers of our project_
6. make clean       _# to cleanup the project_
7. make distclean   _# to remove all the generated data_

### Backend feed API
This microservice allows to access to the feed table of the database.
It is accessible locally or in the container through the configured port.

### Backend user API
This microservice allows to access to the user table of the database.
It is accessible locally or in the container through the configured port.

### Frontend App
This is the web application.

### Screenshots
This is the place where the project requirements shall be shown.
