# 1. Etapa de Construcción (Build)
FROM node:lts-alpine AS build
WORKDIR /app

# Copiar dependencias e instalarlas
COPY package*.json ./
RUN npm install

# Copiar todo el código y compilar el proyecto Astro
COPY . .
RUN npm run build

# 2. Etapa de Servidor de Producción (Nginx)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]