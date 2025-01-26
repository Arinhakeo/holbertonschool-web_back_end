# 12. Statistiques des logs

Écrivez un script Python qui fournit des statistiques sur les logs Nginx stockés dans MongoDB :

- **Base de données :** `logs`
- **Collection :** `nginx`
- **Affichage (identique à l'exemple) :**
  - Première ligne : `x logs` où `x` est le nombre de documents dans cette collection.
  - Deuxième ligne : `Methods:`
  - 5 lignes avec le nombre de documents ayant la méthode `["GET", "POST", "PUT", "PATCH", "DELETE"]` dans cet ordre (voir l'exemple ci-dessous - attention : il y a une tabulation avant chaque ligne).
  - Une ligne avec le nombre de documents ayant :
    - `method=GET`
    - `path=/status`

Vous pouvez utiliser ce dump comme échantillon de données : [dump.zip](https://s3.eu-west-3.amazonaws.com/hbtn.intranet.project.files/holbertonschool-webstack/411/dump.zip)

Le résultat de votre script doit être exactement le même que l'exemple.

Exemple d'exécution :
```bash
guillaume@ubuntu:~/$ curl -o dump.zip -s "https://s3.eu-west-3.amazonaws.com/hbtn.intranet.project.files/holbertonschool-webstack/411/dump.zip"
guillaume@ubuntu:~/$
guillaume@ubuntu:~/$ unzip dump.zip
Archive:  dump.zip
   creating: dump/
   creating: dump/logs/
  inflating: dump/logs/nginx.metadata.json  
  inflating: dump/logs/nginx.bson    
guillaume@ubuntu:~/$
guillaume@ubuntu:~/$ mongorestore dump
2018-02-23T20:12:37.807+0000    preparing collections to restore from
2018-02-23T20:12:37.816+0000    reading metadata for logs.nginx from dump/logs/nginx.metadata.json
2018-02-23T20:12:37.825+0000    restoring logs.nginx from dump/logs/nginx.bson
2018-02-23T20:12:40.804+0000    [##......................]  logs.nginx  1.21MB/13.4MB  (9.0%)
2018-02-23T20:12:43.803+0000    [#####...................]  logs.nginx  2.88MB/13.4MB  (21.4%)
2018-02-23T20:12:46.803+0000    [#######.................]  logs.nginx  4.22MB/13.4MB  (31.4%)
2018-02-23T20:12:49.803+0000    [##########..............]  logs.nginx  5.73MB/13.4MB  (42.7%)
2018-02-23T20:12:52.803+0000    [############............]  logs.nginx  7.23MB/13.4MB  (53.8%)
2018-02-23T20:12:55.803+0000    [###############.........]  logs.nginx  8.53MB/13.4MB  (63.5%)
2018-02-23T20:12:58.803+0000    [#################.......]  logs.nginx  10.1MB/13.4MB  (74.9%)
2018-02-23T20:13:01.803+0000    [####################....]  logs.nginx  11.3MB/13.4MB  (83.9%)
2018-02-23T20:13:04.803+0000    [######################..]  logs.nginx  12.8MB/13.4MB  (94.9%)
2018-02-23T20:13:06.228+0000    [########################]  logs.nginx  13.4MB/13.4MB  (100.0%)
2018-02-23T20:13:06.230+0000    no indexes to restore
2018-02-23T20:13:06.231+0000    finished restoring logs.nginx (94778 documents)
2018-02-23T20:13:06.232+0000    done
guillaume@ubuntu:~/$
guillaume@ubuntu:~/$ ./12-log_stats.py 
94778 logs
Methods:
    method GET: 93842
    method POST: 229
    method PUT: 0
    method PATCH: 0
    method DELETE: 0
47415 status check
guillaume@ubuntu:~/$
```

**Dépôt :**
- Répertoire GitHub : `holbertonschool-web_back_end`
- Répertoire : `NoSQL`
- Fichier : `12-log_stats.py`
```

---

### Explication Détaillée

#### Objectif
L'objectif de ce script Python est de fournir des statistiques sur les logs Nginx stockés dans une collection MongoDB. Le script doit afficher :
1. Le nombre total de logs.
2. Le nombre de logs pour chaque méthode HTTP (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`).
3. Le nombre de logs ayant `method=GET` et `path=/status`.

#### Fonctions Utilisées
1. **`count_documents({})`** :
   - **Description** : Cette méthode PyMongo permet de compter le nombre de documents dans une collection.
   - **Exemple** : `mongo_collection.count_documents({})` compte tous les documents dans la collection.

2. **`count_documents(query)`** :
   - **Description** : Cette méthode permet de compter les documents qui correspondent à un critère de recherche spécifique.
   - **Exemple** : `mongo_collection.count_documents({"method": "GET"})` compte les documents ayant `method=GET`.

3. **`count_documents({"method": "GET", "path": "/status"})`** :
   - **Description** : Cette méthode compte les documents ayant à la fois `method=GET` et `path=/status`.

#### Structure du Script
Voici un exemple de code pour le script `12-log_stats.py` :

```python
#!/usr/bin/env python3
""" 12-log_stats.py """
from pymongo import MongoClient

def log_stats():
    """
    Affiche des statistiques sur les logs Nginx stockés dans MongoDB.
    """
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client.logs
    collection = db.nginx

    # Nombre total de logs
    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    # Méthodes HTTP
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"    method {method}: {count}")

    # Nombre de logs avec method=GET et path=/status
    status_check = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_check} status check")

if __name__ == "__main__":
    log_stats()
```

#### Explication du Code
- **`collection.count_documents({})`** : Compte tous les documents dans la collection `nginx`.
- **`collection.count_documents({"method": method})`** : Compte les documents pour chaque méthode HTTP.
- **`collection.count_documents({"method": "GET", "path": "/status"})`** : Compte les documents ayant `method=GET` et `path=/status`.

#### Exécution du Script
1. Téléchargez et restaurez le dump MongoDB :
   ```bash
   curl -o dump.zip -s "https://s3.eu-west-3.amazonaws.com/hbtn.intranet.project.files/holbertonschool-webstack/411/dump.zip"
   unzip dump.zip
   mongorestore dump
   ```
2. Exécutez le script :
   ```bash
   ./12-log_stats.py
   ```

#### Résultat Attendu
Le script affiche les statistiques des logs Nginx. Par exemple :
```
94778 logs
Methods:
    method GET: 93842
    method POST: 229
    method PUT: 0
    method PATCH: 0
    method DELETE: 0
47415 status check
```

---

### Synthèse
Ce script Python utilise PyMongo pour analyser les logs Nginx stockés dans une collection MongoDB. Il fournit des statistiques sur le nombre total de logs, les méthodes HTTP utilisées, et les logs de vérification d'état (`/status`). C'est un outil essentiel pour surveiller et analyser les logs d'un serveur Nginx.