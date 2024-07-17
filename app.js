const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configurer EJS comme moteur de template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurer le dossier public pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/index', (req, res) => {
    res.render('index');
  });

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/blog', (req, res) => {
  res.render('blog');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/elements', (req, res) => {
  res.render('elements');
});

app.get('/partenaire', (req, res) => {
  res.render('partenaire');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/services_copy', (req, res) => {
  res.render('services_copy');
});

// Ajoutez d'autres routes ici

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
