Voici la traduction complète en français du projet **NodeJS Basics** au format Markdown (`.md`) :

---

# Projet : Bases de NodeJS

## Description

Ce projet vise à vous familiariser avec les bases de NodeJS, en vous apprenant à exécuter du JavaScript avec NodeJS, à utiliser des modules NodeJS, à lire des fichiers, à manipuler les arguments de ligne de commande, et à créer des serveurs HTTP simples avec NodeJS et Express.

---

## Ressources

### Lectures et vidéos recommandées :
- [Démarrer avec Node JS](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Documentation de l'API Process](https://nodejs.org/api/process.html)
- [Processus enfant](https://nodejs.org/api/child_process.html)
- [Démarrer avec Express](https://expressjs.com/en/starter/installing.html)
- [Documentation de Mocha](https://mochajs.org/)
- [Documentation de Nodemon](https://nodemon.io/)

---

## Objectifs d'apprentissage

À la fin de ce projet, vous serez capable d'expliquer à n'importe qui, sans l'aide de Google :

- Exécuter du JavaScript avec NodeJS.
- Utiliser des modules NodeJS.
- Utiliser un module NodeJS spécifique pour lire des fichiers.
- Utiliser `process` pour accéder aux arguments de ligne de commande et à l'environnement.
- Créer un petit serveur HTTP avec NodeJS.
- Créer un petit serveur HTTP avec Express JS.
- Créer des routes avancées avec Express JS.
- Utiliser ES6 avec NodeJS via Babel-node.
- Utiliser Nodemon pour développer plus rapidement.

---

## Exigences

- **Éditeurs autorisés** : `vi`, `vim`, `emacs`, `Visual Studio Code`.
- **Version de NodeJS** : Tous les fichiers seront interprétés/compilés sur Ubuntu 20.04 LTS avec NodeJS (version 20.x.x).
- **Format des fichiers** : Tous les fichiers doivent se terminer par une nouvelle ligne.
- **README.md** : Un fichier `README.md` à la racine du dossier du projet est obligatoire.
- **Extension des fichiers** : Utilisez l'extension `.js` pour vos fichiers.
- **Tests** : Votre code sera testé avec Jest en exécutant `npm run test`.
- **Linting** : Votre code sera vérifié avec ESLint. Vous pouvez vérifier l'intégralité du projet en exécutant `npm run full-test`.
- **Exportation des fonctions/classes** : Toutes vos fonctions/classes doivent être exportées en utilisant le format suivant : `module.exports = myFunction;`.

---

## Fichiers fournis

- **`database.csv`** : Un fichier CSV contenant des données d'étudiants.
- **`package.json`** : Fichier de configuration pour les dépendances et les scripts.
- **`babel.config.js`** : Configuration de Babel pour utiliser ES6.
- **`.eslintrc.js`** : Configuration d'ESLint pour le linting.

---

## Tâches

### 0. Exécuter du JavaScript de base avec Node JS

**Objectif** : Créer une fonction `displayMessage` dans le fichier `0-console.js` qui affiche un message dans la sortie standard (STDOUT).

**Exemple** :
```bash
$ node 0-main.js
Hello NodeJS!
```

---

### 1. Utiliser `process.stdin`

**Objectif** : Créer un programme `1-stdin.js` qui interagit avec l'utilisateur via l'entrée standard.

**Exemple** :
```bash
$ node 1-stdin.js
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
```

---

### 2. Lire un fichier de manière synchrone avec Node JS

**Objectif** : Créer une fonction `countStudents` dans `2-read_file.js` qui lit un fichier CSV de manière synchrone et affiche le nombre d'étudiants par domaine.

**Exemple** :
```bash
$ node 2-main_1.js
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
```

---

### 3. Lire un fichier de manière asynchrone avec Node JS

**Objectif** : Créer une fonction `countStudents` dans `3-read_file_async.js` qui lit un fichier CSV de manière asynchrone et retourne une promesse.

**Exemple** :
```bash
$ node 3-main_1.js
After!
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
Done!
```

---

### 4. Créer un petit serveur HTTP avec le module HTTP de Node

**Objectif** : Créer un serveur HTTP dans `4-http.js` qui écoute sur le port 1245 et affiche "Hello Holberton School!" pour n'importe quel endpoint.

**Exemple** :
```bash
$ curl localhost:1245 && echo ""
Hello Holberton School!
```

---

### 5. Créer un serveur HTTP plus complexe avec le module HTTP de Node

**Objectif** : Créer un serveur HTTP dans `5-http.js` qui affiche des informations sur les étudiants lorsque l'URL `/students` est appelée.

**Exemple** :
```bash
$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
```

---

### 6. Créer un petit serveur HTTP avec Express

**Objectif** : Créer un serveur HTTP dans `6-http_express.js` en utilisant Express, qui écoute sur le port 1245 et affiche "Hello Holberton School!" pour l'endpoint `/`.

**Exemple** :
```bash
$ curl localhost:1245 && echo ""
Hello Holberton School!
```

---

### 7. Créer un serveur HTTP plus complexe avec Express

**Objectif** : Créer un serveur HTTP dans `7-http_express.js` en utilisant Express, qui affiche des informations sur les étudiants lorsque l'URL `/students` est appelée.

**Exemple** :
```bash
$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
```

---

### 8. Organiser un serveur HTTP complexe avec Express

**Objectif** : Organiser un serveur HTTP complet dans un dossier nommé `full_server`, en utilisant Express, Babel, et des contrôleurs/routes séparés.

**Exemple** :
```bash
$ curl localhost:1245 && echo ""
Hello Holberton School!

$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
```

---

## Conclusion

Ce projet vous permet de maîtriser les bases de NodeJS, de la lecture de fichiers à la création de serveurs HTTP simples et complexes. Vous apprendrez également à organiser un projet NodeJS de manière professionnelle en utilisant Express, Babel, et des modules externes comme Nodemon.

---

Pour réaliser ce projet **NodeJS Basics**, vous aurez besoin d'installer plusieurs outils et bibliothèques. Voici une liste détaillée des logiciels et dépendances nécessaires :

---

### 1. **NodeJS et NPM**
NodeJS est l'environnement d'exécution JavaScript utilisé pour ce projet, et NPM (Node Package Manager) est le gestionnaire de paquets pour installer les dépendances.

- **Installation de NodeJS** :
  - Téléchargez et installez NodeJS depuis [nodejs.org](https://nodejs.org/).
  - Vérifiez l'installation avec les commandes suivantes :
    ```bash
    node -v
    npm -v
    ```

---

### 2. **Babel**
Babel est un compilateur JavaScript qui permet d'utiliser des fonctionnalités modernes d'ES6+ dans NodeJS.

- **Installation de Babel** :
  - Installez Babel et ses presets via NPM :
    ```bash
    npm install --save-dev @babel/core @babel/node @babel/preset-env
    ```
  - Créez un fichier `babel.config.js` à la racine du projet avec le contenu suivant :
    ```javascript
    module.exports = {
      presets: ['@babel/preset-env'],
    };
    ```

---

### 3. **Express**
Express est un framework web pour NodeJS, utilisé pour créer des serveurs HTTP.

- **Installation d'Express** :
  - Installez Express via NPM :
    ```bash
    npm install express
    ```

---

### 4. **Nodemon**
Nodemon est un outil qui surveille les changements dans vos fichiers et redémarre automatiquement le serveur NodeJS.

- **Installation de Nodemon** :
  - Installez Nodemon globalement ou localement :
    ```bash
    npm install -g nodemon  # Installation globale
    npm install --save-dev nodemon  # Installation locale
    ```

---

### 5. **ESLint**
ESLint est un outil de linting pour vérifier la qualité du code JavaScript.

- **Installation d'ESLint** :
  - Installez ESLint via NPM :
    ```bash
    npm install --save-dev eslint
    ```
  - Configurez ESLint en créant un fichier `.eslintrc.js` à la racine du projet :
    ```javascript
    module.exports = {
      env: {
        node: true,
        es6: true,
      },
      extends: 'eslint:recommended',
      parserOptions: {
        ecmaVersion: 2021,
      },
      rules: {
        // Ajoutez vos règles personnalisées ici
      },
    };
    ```

---

### 6. **Jest**
Jest est un framework de test pour JavaScript, utilisé pour tester votre code.

- **Installation de Jest** :
  - Installez Jest via NPM :
    ```bash
    npm install --save-dev jest
    ```

---

### 7. **Autres dépendances**
- **`csv-parser`** : Pour lire les fichiers CSV.
  ```bash
  npm install csv-parser
  ```

---

### 8. **Structure du projet**
Voici la structure de fichiers recommandée pour ce projet :

```
Node_JS_basic/
├── 0-console.js
├── 1-stdin.js
├── 2-read_file.js
├── 3-read_file_async.js
├── 4-http.js
├── 5-http.js
├── 6-http_express.js
├── 7-http_express.js
├── full_server/
│   ├── controllers/
│   │   ├── AppController.js
│   │   └── StudentsController.js
│   ├── routes/
│   │   └── index.js
│   ├── utils.js
│   └── server.js
├── database.csv
├── package.json
├── babel.config.js
├── .eslintrc.js
└── README.md
```

---

### 9. **Commandes utiles**
- **Démarrer le serveur avec Nodemon et Babel** :
  ```bash
  nodemon --exec babel-node --presets @babel/preset-env ./full_server/server.js
  ```

- **Exécuter les tests** :
  ```bash
  npm run test
  ```

- **Exécuter les tests complets (tests + linting)** :
  ```bash
  npm run full-test
  ```

---

### 10. **Résumé des installations**
Voici un résumé des commandes à exécuter pour installer toutes les dépendances :

```bash
npm init -y  # Initialiser un projet NodeJS
npm install --save-dev @babel/core @babel/node @babel/preset-env nodemon eslint jest
npm install express csv-parser
```

---

### Conclusion
Avec ces outils et dépendances installés, vous êtes prêt à réaliser le projet **NodeJS Basics**. Assurez-vous de bien configurer Babel, ESLint, et Nodemon pour un développement fluide et professionnel.
