# 1. Créer une base de données

Écrivez un script qui crée ou utilise la base de données `my_db`.

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
guillaume@ubuntu:~/$ cat 1-use_or_create_database | mongo
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.6.3
switched to db my_db
bye
guillaume@ubuntu:~/$
```

**Dépôt :**
- Répertoire GitHub : `holbertonschool-web_back_end`
- Répertoire : `NoSQL`
- Fichier : `1-use_or_create_database`
```

---

### Explication Détaillée

#### Objectif
L'objectif de ce script est de créer ou d'utiliser une base de données MongoDB nommée `my_db`. Si la base de données existe déjà, le script se contente de l'utiliser. Sinon, elle est créée automatiquement.

#### Fonctions Utilisées
1. **`use <database_name>`** :
   - **Description** : Cette commande MongoDB permet de passer à une base de données spécifique. Si la base de données n'existe pas, elle est créée automatiquement.
   - **Fonctionnement** : Elle change le contexte actuel pour la base de données spécifiée.
   - **Exemple** : `use my_db` passe à la base de données `my_db`.

2. **`mongo`** :
   - **Description** : Le shell interactif de MongoDB, utilisé pour exécuter des commandes MongoDB directement dans le terminal.
   - **Utilisation** : Le script est passé en entrée au shell MongoDB via `cat 1-use_or_create_database | mongo`.

#### Structure du Script
Le script doit contenir la commande `use my_db` pour créer ou utiliser la base de données `my_db`. Voici un exemple de contenu pour le fichier `1-use_or_create_database` :

```bash
#!/usr/bin/env mongo
use my_db
```

#### Explication du Code
- **`#!/usr/bin/env mongo`** : Cette ligne indique que le script doit être exécuté en utilisant le shell MongoDB.
- **`use my_db`** : Cette commande passe à la base de données `my_db`. Si elle n'existe pas, elle est créée automatiquement.

#### Exécution du Script
1. Sauvegardez le script dans un fichier nommé `1-use_or_create_database`.
2. Rendez le fichier exécutable avec la commande :
   ```bash
   chmod +x 1-use_or_create_database
   ```
3. Exécutez le script en utilisant :
   ```bash
   ./1-use_or_create_database
   ```
   Ou en utilisant `cat` pour passer le contenu du fichier au shell MongoDB :
   ```bash
   cat 1-use_or_create_database | mongo
   ```

#### Résultat Attendu
Le script affichera un message indiquant que le contexte a été changé pour la base de données `my_db`. Par exemple :
```
switched to db my_db
```

---

### Synthèse
Ce script utilise la commande `use <database_name>` de MongoDB pour créer ou utiliser une base de données spécifique (`my_db` dans ce cas). Il est exécuté via le shell MongoDB et permet de gérer facilement les bases de données. C'est une commande de base essentielle pour travailler avec MongoDB.