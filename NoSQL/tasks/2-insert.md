# 2. Insérer un document

Écrivez un script qui insère un document dans la collection `school` :

- Le document doit avoir un attribut `name` avec la valeur `"Holberton school"`.
- Le nom de la base de données sera passé comme option de la commande `mongo`.

Exemple d'exécution :
```bash
guillaume@ubuntu:~/$ cat 2-insert | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
WriteResult({ "nInserted" : 1 })
bye
guillaume@ubuntu:~/$
```

**Dépôt :**
- Répertoire GitHub : `holbertonschool-web_back_end`
- Répertoire : `NoSQL`
- Fichier : `2-insert`
```

---

### Explication Détaillée

#### Objectif
L'objectif de ce script est d'insérer un document dans une collection MongoDB nommée `school`. Le document doit contenir un attribut `name` avec la valeur `"Holberton school"`. Le nom de la base de données est passé comme argument à la commande `mongo`.

#### Fonctions Utilisées
1. **`db.collection.insert()`** :
   - **Description** : Cette méthode MongoDB permet d'insérer un document dans une collection spécifique.
   - **Fonctionnement** : Elle prend un objet JSON comme argument et l'ajoute à la collection.
   - **Exemple** : `db.school.insert({ name: "Holberton school" })` insère un document dans la collection `school`.

2. **`mongo <database_name>`** :
   - **Description** : Le shell interactif de MongoDB, utilisé pour exécuter des commandes MongoDB directement dans le terminal. Le nom de la base de données est passé comme argument.
   - **Utilisation** : Le script est passé en entrée au shell MongoDB via `cat 2-insert | mongo my_db`.

#### Structure du Script
Le script doit contenir la commande pour insérer un document dans la collection `school`. Voici un exemple de contenu pour le fichier `2-insert` :

```bash
#!/usr/bin/env mongo
db.school.insert({ name: "Holberton school" })
```

#### Explication du Code
- **`#!/usr/bin/env mongo`** : Cette ligne indique que le script doit être exécuté en utilisant le shell MongoDB.
- **`db.school.insert({ name: "Holberton school" })`** : Cette commande insère un document avec un attribut `name` dans la collection `school`.

#### Exécution du Script
1. Sauvegardez le script dans un fichier nommé `2-insert`.
2. Rendez le fichier exécutable avec la commande :
   ```bash
   chmod +x 2-insert
   ```
3. Exécutez le script en utilisant :
   ```bash
   ./2-insert | mongo my_db
   ```
   Ou en utilisant `cat` pour passer le contenu du fichier au shell MongoDB :
   ```bash
   cat 2-insert | mongo my_db
   ```

#### Résultat Attendu
Le script affichera un message indiquant que le document a été inséré avec succès. Par exemple :
```
WriteResult({ "nInserted" : 1 })
```

---

### Synthèse
Ce script utilise la méthode `db.collection.insert()` de MongoDB pour insérer un document dans une collection spécifique (`school` dans ce cas). Il est exécuté via le shell MongoDB et permet de gérer facilement l'insertion de données. C'est une commande de base essentielle pour travailler avec des collections MongoDB.