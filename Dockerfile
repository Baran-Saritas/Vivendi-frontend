FROM node:14.17-alpine
# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

# add app
COPY . ./

RUN npm install --force


# start app
CMD ["npm", "start"]