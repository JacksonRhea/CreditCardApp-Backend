# Installs Node.js image
FROM node:16.13.1-alpine3.14 as base

# sets the working directory for any RUN, CMD, COPY command
WORKDIR /usr/src/app

# Copies package.json, package-lock.json, and tsconfig.json
COPY package*.json ./

# Installs all packages
RUN npm install

# Copies source code
COPY . .

#basically extends base and adds production stuff
FROM base as production

ENV NODE_PATH=./dist

RUN npm run build

# # Compile TypeScript to JavaScript
# RUN npm run build

# # Command to run the compiled JavaScript with Node.js
# CMD ["node", "dist/app.js"]