# Étape 1 : Construire l'application
FROM node:20.12.2-alpine3.18 as build

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier package.json et package-lock.json
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste du code de l'application
COPY . .

# Construire l'application
RUN npm run build

# Étape 2 : Servir l'application avec un serveur web
FROM nginx:stable-alpine

# Copier les fichiers de build de l'étape précédente
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port
EXPOSE 80

# Commande pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
