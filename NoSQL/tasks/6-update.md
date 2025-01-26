# 6. Mettre à jour

Écrivez un script qui ajoute un nouvel attribut à un document dans la collection `school` :

- Le script doit mettre à jour uniquement les documents ayant `name="Holberton school"` (tous les documents correspondants).
- La mise à jour doit ajouter l'attribut `address` avec la valeur `"972 Mission street"`.
- Le nom de la base de données sera passé comme option de la commande `mongo`.

Exemple d'exécution :
```bash
guillaume@ubuntu:~/$ cat 6-update | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
bye
guillaume@ubuntu:~/$
guillaume@ubuntu:~/$ cat 4-match | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
{ "_id" : ObjectId("5a8fad532b69437b63252406"), "name" : "Holberton school", "address" : "972 Mission street" }
bye
guillaume@ubuntu:~/$
```

**Dépôt :**
- Répertoire GitHub : `holbertonschool-web_back_end`
- Répertoire : `NoSQL`
- Fichier : `6-update`
```

---

### Explication Détaillée

#### Objectif
L'objectif de ce script est de mettre à jour tous les documents de la collection `school` ayant un attribut `name` égal à `"Holberton school"`. La mise à jour consiste à ajouter un nouvel attribut `address` avec la valeur `"972 Mission street"`. Le nom de la base de données est passé comme argument à la commande `mongo`.

#### Fonctions Utilisées
1. **`db.collection.updateMany(filter, update)`** :
   - **Description** : Cette méthode MongoDB permet de mettre à jour tous les documents qui correspondent à un critère de recherche spécifique.
   - **Fonctionnement** : Elle prend deux arguments :
     - `filter` : Un objet JSON qui spécifie les critères de recherche.
     - `update` : Un objet JSON qui spécifie les modifications à appliquer.
   - **Exemple** : `db.school.updateMany({ name: "Holberton school" }, { $set: { address: "972 Mission street" } })` met à jour tous les documents ayant `name="Holberton school"` en ajoutant l'attribut `address`.

2. **`mongo <database_name>`** :
   - **Description** : Le shell interactif de MongoDB, utilisé pour exécuter des commandes MongoDB directement dans le terminal. Le nom de la base de données est passé comme argument.
   - **Utilisation** : Le script est passé en entrée au shell MongoDB via `cat 6-update | mongo my_db`.

#### Structure du Script
Le script doit contenir la commande pour mettre à jour les documents correspondant au critère spécifié. Voici un exemple de contenu pour le fichier `6-update` :

```bash
#!/usr/bin/env mongo
db.school.updateMany(
  { name: "Holberton school" },
  { $set: { address: "972 Mission street" } }
)
```

#### Explication du Code
- **`#!/usr/bin/env mongo`** : Cette ligne indique que le script doit être exécuté en utilisant le shell MongoDB.
- **`db.school.updateMany(...)`** : Cette commande met à jour tous les documents de la collection `school` ayant `name="Holberton school"` en ajoutant l'attribut `address` avec la valeur `"972 Mission street"`.

#### Exécution du Script
1. Sauvegardez le script dans un fichier nommé `6-update`.
2. Rendez le fichier exécutable avec la commande :
   ```bash
   chmod +x 6-update
   ```
3. Exécutez le script en utilisant :
   ```bash
   ./6-update | mongo my_db
   ```
   Ou en utilisant `cat` pour passer le contenu du fichier au shell MongoDB :
   ```bash
   cat 6-update | mongo my_db
   ```

#### Résultat Attendu
Le script affichera un message indiquant le nombre de documents mis à jour. Par exemple :
```json
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

Après exécution, les documents correspondants auront l'attribut `address` ajouté. Par exemple :
```json
{ "_id" : ObjectId("5a8fad532b69437b63252406"), "name" : "Holberton school", "address" : "972 Mission street" }
```

---

### Synthèse
Ce script utilise la méthode `db.collection.updateMany()` de MongoDB pour mettre à jour tous les documents d'une collection qui correspondent à un critère spécifique (`name="Holberton school"` dans ce cas). Il ajoute un nouvel attribut `address` avec la valeur `"972 Mission street"`. C'est une commande essentielle pour modifier des documents existants dans MongoDB.