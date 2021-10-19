FROM node
ENV NODE_ENV=dev
# Create app directory
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/
COPY ./package*.json ./
COPY . .



ONBUILD RUN npm install
RUN npm install

ENV HOST 0.0.0.0


# Install app dependencies
CMD [ "npm", "run", "buildStart"]
EXPOSE 3000 #or other
CMD ["npm", "run", "dev"]
