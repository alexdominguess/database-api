FROM node:18
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
#command to run image using the ".env" file variable locally >>> docker run -d -p 3000:3000 --name db_api --env-file .env db_api