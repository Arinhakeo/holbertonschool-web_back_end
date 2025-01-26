# 5. Compter

Écrivez un script qui affiche le nombre de documents dans la collection `school` :

- Le nom de la base de données sera passé comme option de la commande `mongo`.

Exemple d'exécution :
```bash
guillaume@ubuntu:~/$ cat 5-count | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
1
bye
guillaume@ubuntu:~/$
```

**Dépôt :**
- Répertoire GitHub : `holbertonschool-web_back_end`
- Répertoire : `NoSQL`
- Fichier : `5-count`
```

---

### Explication Détaillée

#### Objectif
L'objectif de ce script est de compter le nombre de documents présents dans la collection `school` d'une base de données MongoDB. Le nom de la base de données est passé comme argument à la commande `mongo`.

#### Fonctions Utilisées
1. **`db.collection.countDocuments()`** :
   - **Description** : Cette méthode MongoDB permet de compter le nombre de documents dans une collection.
   - **Fonctionnement** : Elle renvoie le nombre total de documents dans la collection spécifiée.
   - **Exemple** : `db.school.countDocuments()` renvoie le nombre de documents dans la collection `school`.

2. **`mongo <database_name>`** :
   - **Description** : Le shell interactif de MongoDB, utilisé pour exécuter des commandes MongoDB directement dans le terminal. Le nom de la base de données est passé comme argument.
   - **Utilisation** : Le script est passé en entrée au shell MongoDB via `cat 5-count | mongo my_db`.

#### Structure du Script
Le script doit contenir la commande pour compter les documents de la collection `school`. Voici un exemple de contenu pour le fichier `5-count` :

```bash
#!/usr/bin/env mongo
db.school.countDocuments()
```

#### Explication du Code
- **`#!/usr/bin/env mongo`** : Cette ligne indique que le script doit être exécuté en utilisant le shell MongoDB.
- **`db.school.countDocuments()`** : Cette commande compte le nombre de documents dans la collection `school`.

#### Exécution du Script
1. Sauvegardez le script dans un fichier nommé `5-count`.
2. Rendez le fichier exécutable avec la commande :
   ```bash
   chmod +x 5-count
   ```
3. Exécutez le script en utilisant :
   ```bash
   ./5-count | mongo my_db
   ```
   Ou en utilisant `cat` pour passer le contenu du fichier au shell MongoDB :
   ```bash
   cat 5-count | mongo my_db
   ```

#### Résultat Attendu
Le script affichera le nombre de documents dans la collection `school`. Par exemple :
```
1
```

---

### Synthèse
Ce script utilise la méthode `db.collection.countDocuments()` de MongoDB pour compter le nombre de documents dans une collection spécifique (`school` dans ce cas). Il est exécuté via le shell MongoDB et permet de connaître rapidement la taille d'une collection. C'est une commande essentielle pour surveiller et gérer les données dans MongoDB.