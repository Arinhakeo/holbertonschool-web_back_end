// Importer les modules nécessaires
const express = require('express');
const fs = require('fs').promises;
const countStudents = require('./3-read_file_async'); // Assurez-vous que le chemin est correct

// Créer une instance de l'application Express
const app = express();

// Définir une route pour l'endpoint /
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Définir une route pour l'endpoint /students
app.get('/students', async (req, res) => {
  const dbPath = process.argv[2]; // Récupérer le chemin du fichier de la base de données à partir des arguments de la ligne de commande
  
  if (!dbPath) {
    return res.status(500).send('Database path is missing');
  }

  try {
    const result = await countStudents(dbPath); // Appeler la fonction countStudents avec le chemin de la base de données
    res.send(`This is the list of our students\n${result}`);
  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
});

// Faire écouter le serveur sur le port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Exporter l'application
module.exports = app;
