# 4. Tous les documents correspondants

Écrivez un script qui liste tous les documents ayant `name="Holberton school"` dans la collection `school` :

- Le nom de la base de données sera passé comme option de la commande `mongo`.

Exemple d'exécution :
```bash
guillaume@ubuntu:~/$ cat 4-match | mongo my_db
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
- Fichier : `4-match`
```

---

### Explication Détaillée

#### Objectif
L'objectif de ce script est de lister tous les documents de la collection `school` qui ont un attribut `name` égal à `"Holberton school"`. Le nom de la base de données est passé comme argument à la commande `mongo`.

#### Fonctions Utilisées
1. **`db.collection.find(query)`** :
   - **Description** : Cette méthode MongoDB permet de récupérer les documents d'une collection qui correspondent à un critère de recherche spécifique.
   - **Fonctionnement** : Elle prend un objet JSON comme argument pour spécifier les critères de recherche et renvoie un curseur contenant les documents correspondants.
   - **Exemple** : `db.school.find({ name: "Holberton school" })` récupère tous les documents de la collection `school` où l'attribut `name` est égal à `"Holberton school"`.

2. **`mongo <database_name>`** :
   - **Description** : Le shell interactif de MongoDB, utilisé pour exécuter des commandes MongoDB directement dans le terminal. Le nom de la base de données est passé comme argument.
   - **Utilisation** : Le script est passé en entrée au shell MongoDB via `cat 4-match | mongo my_db`.

#### Structure du Script
Le script doit contenir la commande pour lister les documents correspondant au critère spécifié. Voici un exemple de contenu pour le fichier `4-match` :

```bash
#!/usr/bin/env mongo
db.school.find({ name: "Holberton school" })
```

#### Explication du Code
- **`#!/usr/bin/env mongo`** : Cette ligne indique que le script doit être exécuté en utilisant le shell MongoDB.
- **`db.school.find({ name: "Holberton school" })`** : Cette commande récupère tous les documents de la collection `school` où l'attribut `name` est égal à `"Holberton school"`.

#### Exécution du Script
1. Sauvegardez le script dans un fichier nommé `4-match`.
2. Rendez le fichier exécutable avec la commande :
   ```bash
   chmod +x 4-match
   ```
3. Exécutez le script en utilisant :
   ```bash
   ./4-match | mongo my_db
   ```
   Ou en utilisant `cat` pour passer le contenu du fichier au shell MongoDB :
   ```bash
   cat 4-match | mongo my_db
   ```

#### Résultat Attendu
Le script affichera tous les documents de la collection `school` où l'attribut `name` est égal à `"Holberton school"`. Par exemple :
```json
{ "_id" : ObjectId("5a8fad532b69437b63252406"), "name" : "Holberton school" }
```

---

### Synthèse
Ce script utilise la méthode `db.collection.find(query)` de MongoDB pour lister les documents d'une collection qui correspondent à un critère spécifique (`name="Holberton school"` dans ce cas). Il est exécuté via le shell MongoDB et permet de filtrer les données en fonction de conditions précises. C'est une commande essentielle pour interroger des collections MongoDB avec des critères de recherche.