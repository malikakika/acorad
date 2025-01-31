# Étape 1 : Construction de l'application
FROM node:18 AS build

WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY ./package.json ./package-lock.json ./

# Installer les dépendances
RUN npm install --legacy-peer-deps

# Copier le reste des fichiers du projet dans le conteneur
COPY . .

# Construire l'application
RUN npm run build

# Étape 2 : Serveur de production avec Nginx
FROM nginx:alpine

# Copier les fichiers construits par Vite dans le dossier public de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80 pour que Nginx puisse servir l'application
EXPOSE 80

# Démarrer Nginx en mode premier plan
CMD ["nginx", "-g", "daemon off;"]
