# étape de build
FROM node:14-slim as build-stage
WORKDIR /app

RUN apt update && apt install g++ build-essential git -y

RUN npm install -g @vue/cli

COPY package*.json ./

RUN npm install
RUN npm rebuild node-sass

COPY . .

RUN npm run build

# étape de production
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]