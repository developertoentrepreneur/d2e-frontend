FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

# copie les fichiers et dossiers du projet dans le dossier de travail (par exemple : le dossier 'app')
COPY . .

# construit l'app pour la production en la minifiant
RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "serve"]