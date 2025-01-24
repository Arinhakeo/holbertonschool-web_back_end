// Importer le module express
const express = require('express');

// Créer une instance de l'application Express
const app = express();

// Définir une route pour l'endpoint /
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Faire écouter le serveur sur le port 1245
app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

// Exporter l'application
module.exports = app;
