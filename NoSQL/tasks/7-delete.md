# 7. Supprimer par correspondance

Écrivez un script qui supprime tous les documents ayant `name="Holberton school"` dans la collection `school` :

- Le nom de la base de données sera passé comme option de la commande `mongo`.

Exemple d'exécution :
```bash
guillaume@ubuntu:~/$ cat 7-delete | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
{ "acknowledged" : true, "deletedCount" : 1 }
bye
guillaume@ubuntu:~/$
guillaume@ubuntu:~/$ cat 4-match | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
bye
guillaume@ubuntu:~/$
```

**Dépôt :**
- Répertoire GitHub : `holbertonschool-web_back_end`
- Répertoire : `NoSQL`
- Fichier : `7-delete`
```

---

### Explication Détaillée

#### Objectif
L'objectif de ce script est de supprimer tous les documents de la collection `school` ayant un attribut `name` égal à `"Holberton school"`. Le nom de la base de données est passé comme argument à la commande `mongo`.

#### Fonctions Utilisées
1. **`db.collection.deleteMany(filter)`** :
   - **Description** : Cette méthode MongoDB permet de supprimer tous les documents qui correspondent à un critère de recherche spécifique.
   - **Fonctionnement** : Elle prend un objet JSON comme argument pour spécifier les critères de recherche et supprime tous les documents correspondants.
   - **Exemple** : `db.school.deleteMany({ name: "Holberton school" })` supprime tous les documents de la collection `school` ayant `name="Holberton school"`.

2. **`mongo <database_name>`** :
   - **Description** : Le shell interactif de MongoDB, utilisé pour exécuter des commandes MongoDB directement dans le terminal. Le nom de la base de données est passé comme argument.
   - **Utilisation** : Le script est passé en entrée au shell MongoDB via `cat 7-delete | mongo my_db`.

#### Structure du Script
Le script doit contenir la commande pour supprimer les documents correspondant au critère spécifié. Voici un exemple de contenu pour le fichier `7-delete` :

```bash
#!/usr/bin/env mongo
db.school.deleteMany({ name: "Holberton school" })
```

#### Explication du Code
- **`#!/usr/bin/env mongo`** : Cette ligne indique que le script doit être exécuté en utilisant le shell MongoDB.
- **`db.school.deleteMany({ name: "Holberton school" })`** : Cette commande supprime tous les documents de la collection `school` ayant `name="Holberton school"`.

#### Exécution du Script
1. Sauvegardez le script dans un fichier nommé `7-delete`.
2. Rendez le fichier exécutable avec la commande :
   ```bash
   chmod +x 7-delete
   ```
3. Exécutez le script en utilisant :
   ```bash
   ./7-delete | mongo my_db
   ```
   Ou en utilisant `cat` pour passer le contenu du fichier au shell MongoDB :
   ```bash
   cat 7-delete | mongo my_db
   ```

#### Résultat Attendu
Le script affichera un message indiquant le nombre de documents supprimés. Par exemple :
```json
{ "acknowledged" : true, "deletedCount" : 1 }
```

Après exécution, les documents ayant `name="Holberton school"` seront supprimés. Si vous essayez de les lister à nouveau avec un script comme `4-match`, aucun document ne sera affiché.

---

### Synthèse
Ce script utilise la méthode `db.collection.deleteMany()` de MongoDB pour supprimer tous les documents d'une collection qui correspondent à un critère spécifique (`name="Holberton school"` dans ce cas). Il est exécuté via le shell MongoDB et permet de gérer facilement la suppression de données. C'est une commande essentielle pour nettoyer ou maintenir des collections MongoDB.