# Dockerfile-guru

The project aims to allow you to import external Dockerfiles.

### getting started

you need to have a Dockerfile.template file in the current directory. For example, I have this Dockerfile:
```
IMPORT ../Dockerfile.master
IMPORT ../Documents/Dockerfile.master
EXPOSE 3000
CMD [ "npm", "start" ]
```
as you can see, we are importing other Dockerfiles using the import statement. After running ```dfg```, you will see the Dockerfile generated with the external Dockerfiles included, as so:
```
FROM node:wheezy

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN apt-get update
RUN apt-get install -y build-essential g++
RUN npm install -g gulp
RUN npm install
RUN npm rebuild node-sass

# Bundle app source
COPY . /usr/src/app

#this is another master
#first line is where the master lives
EXPOSE 3000
CMD [ "npm", "start" ]
```

### Installing
```
npm install -g dockerfile-guru
```

## Running the tests
```sh
npm test
```

## License

## Acknowledgments

