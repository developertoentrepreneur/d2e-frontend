FROM node:14-slim as build-stage

WORKDIR /app

RUN apt update && apt install g++ build-essential git -y

RUN npm install -g @vue/cli

COPY package*.json ./

RUN npm install
RUN npm rebuild node-sass

# copie les fichiers et dossiers du projet dans le dossier de travail (par exemple : le dossier 'app')
COPY . .

EXPOSE 8080 6006

CMD ["npm", "run", "serve"]