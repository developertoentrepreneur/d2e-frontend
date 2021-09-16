FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

# copie les fichiers et dossiers du projet dans le dossier de travail (par exemple : le dossier 'app')
COPY . .


EXPOSE 8080

CMD ["npm", "run", "serve"]