# Use NodeJS base image
FROM node:13

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./
COPY angular.json ./
COPY ionic.config.json ./

# Install dependencies
RUN npm install
RUN npm install -g ionic

# Copy app source
COPY . .

# Bind the port that the image will run on
EXPOSE 8100

# Define the Docker image's behavior at runtime
# CMD ["ionic", "serve", "--external", "--no-open"]
CMD ["ionic", "serve", "--external"]

