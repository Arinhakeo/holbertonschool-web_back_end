# 0. Lister toutes les bases de données

Écrivez un script qui liste toutes les bases de données dans MongoDB.

Exemple d'exécution :
```bash
guillaume@ubuntu:~/$ cat 0-list_databases | mongo
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.6.3
admin        0.000GB
config       0.000GB
local        0.000GB
logs         0.005GB
bye
guillaume@ubuntu:~/$
```

**Dépôt :**
- Répertoire GitHub : `holbertonschool-web_back_end`
- Répertoire : `NoSQL`
- Fichier : `0-list_databases`
```

---

### Explication Détaillée

#### Objectif
L'objectif de ce script est de lister toutes les bases de données disponibles dans une instance MongoDB. Cela permet de visualiser rapidement les bases de données existantes et leur taille.

#### Fonctions Utilisées
1. **`show dbs`** :
   - **Description** : Cette commande MongoDB affiche toutes les bases de données disponibles sur le serveur MongoDB auquel vous êtes connecté.
   - **Fonctionnement** : Elle parcourt les bases de données et renvoie leur nom ainsi que leur taille en Go.
   - **Exemple de sortie** :
     ```
     admin        0.000GB
     config       0.000GB
     local        0.000GB
     logs         0.005GB
     ```

2. **`mongo`** :
   - **Description** : C'est le shell interactif de MongoDB. Il permet d'exécuter des commandes MongoDB directement dans le terminal.
   - **Utilisation** : Le script est passé en entrée au shell MongoDB via `cat 0-list_databases | mongo`.

#### Structure du Script
Le script doit contenir la commande `show dbs` pour lister les bases de données. Voici un exemple de contenu pour le fichier `0-list_databases` :

```bash
#!/usr/bin/env mongo
show dbs
```

#### Explication du Code
- **`#!/usr/bin/env mongo`** : Cette ligne indique que le script doit être exécuté en utilisant le shell MongoDB.
- **`show dbs`** : Cette commande est exécutée dans le shell MongoDB pour afficher toutes les bases de données.

#### Exécution du Script
1. Sauvegardez le script dans un fichier nommé `0-list_databases`.
2. Rendez le fichier exécutable avec la commande :
   ```bash
   chmod +x 0-list_databases
   ```
3. Exécutez le script en utilisant :
   ```bash
   ./0-list_databases
   ```
   Ou en utilisant `cat` pour passer le contenu du fichier au shell MongoDB :
   ```bash
   cat 0-list_databases | mongo
   ```

#### Résultat Attendu
Le script affichera la liste des bases de données disponibles sur le serveur MongoDB, accompagnées de leur taille en Go. Par exemple :
```
admin        0.000GB
config       0.000GB
local        0.000GB
logs         0.005GB
```

---

### Synthèse
Ce script simple utilise la commande `show dbs` de MongoDB pour lister toutes les bases de données disponibles sur un serveur MongoDB. Il est exécuté via le shell MongoDB et peut être utilisé pour vérifier rapidement les bases de données existantes et leur taille. C'est un outil de base essentiel pour l'administration des bases de données MongoDB.