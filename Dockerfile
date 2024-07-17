# Utiliser une image de base officielle Node.js
FROM node:20

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et package-lock.json (si présent)
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier le reste des fichiers de l'application dans le conteneur
COPY . .

# Exposer le port sur lequel l'application s'exécute
EXPOSE 3000

# Démarrer l'application
CMD ["node", "app.js"]
