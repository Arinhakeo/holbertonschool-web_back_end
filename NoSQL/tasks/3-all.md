# 3. Tous les documents

Écrivez un script qui liste tous les documents de la collection `school` :

- Le nom de la base de données sera passé comme option de la commande `mongo`.

Exemple d'exécution :
```bash
guillaume@ubuntu:~/$ cat 3-all | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
{ "_id" : ObjectId("5a8fad532b69437b63252406"), "name" : "Holberton school" }
bye
guillaume@ubuntu:~/$
```

**Dépôt :**
- Répertoire GitHub : `holbertonschool-web_back_end`
- Répertoire : `NoSQL`
- Fichier : `3-all`
```

---

### Explication Détaillée

#### Objectif
L'objectif de ce script est de lister tous les documents présents dans la collection `school` d'une base de données MongoDB. Le nom de la base de données est passé comme argument à la commande `mongo`.

#### Fonctions Utilisées
1. **`db.collection.find()`** :
   - **Description** : Cette méthode MongoDB permet de récupérer tous les documents d'une collection spécifique.
   - **Fonctionnement** : Elle renvoie un curseur contenant tous les documents de la collection. Si aucun critère de recherche n'est spécifié, elle renvoie tous les documents.
   - **Exemple** : `db.school.find()` récupère tous les documents de la collection `school`.

2. **`mongo <database_name>`** :
   - **Description** : Le shell interactif de MongoDB, utilisé pour exécuter des commandes MongoDB directement dans le terminal. Le nom de la base de données est passé comme argument.
   - **Utilisation** : Le script est passé en entrée au shell MongoDB via `cat 3-all | mongo my_db`.

#### Structure du Script
Le script doit contenir la commande pour lister tous les documents de la collection `school`. Voici un exemple de contenu pour le fichier `3-all` :

```bash
#!/usr/bin/env mongo
db.school.find()
```

#### Explication du Code
- **`#!/usr/bin/env mongo`** : Cette ligne indique que le script doit être exécuté en utilisant le shell MongoDB.
- **`db.school.find()`** : Cette commande récupère tous les documents de la collection `school`.

#### Exécution du Script
1. Sauvegardez le script dans un fichier nommé `3-all`.
2. Rendez le fichier exécutable avec la commande :
   ```bash
   chmod +x 3-all
   ```
3. Exécutez le script en utilisant :
   ```bash
   ./3-all | mongo my_db
   ```
   Ou en utilisant `cat` pour passer le contenu du fichier au shell MongoDB :
   ```bash
   cat 3-all | mongo my_db
   ```

#### Résultat Attendu
Le script affichera tous les documents de la collection `school`. Par exemple :
```json
{ "_id" : ObjectId("5a8fad532b69437b63252406"), "name" : "Holberton school" }
```

---

### Synthèse
Ce script utilise la méthode `db.collection.find()` de MongoDB pour lister tous les documents d'une collection spécifique (`school` dans ce cas). Il est exécuté via le shell MongoDB et permet de visualiser rapidement les données stockées dans une collection. C'est une commande de base essentielle pour interroger des collections MongoDB.