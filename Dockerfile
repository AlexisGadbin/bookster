# Étape 1 : Construire l'application
FROM node:20.12.2-alpine3.18 as build

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier package.json et package-lock.json
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

RUN npm i -g serve

# Copier tout le reste du code de l'application
COPY . .

# Créer un fichier .env
# Ajouter la variable VITE_API_URL
RUN echo "VITE_API_URL=https://alaikssi.com/api" > .env

# Construire l'application
RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "dist"]