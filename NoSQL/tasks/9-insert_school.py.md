# 9. Insérer un document en Python

Écrivez une fonction Python qui insère un nouveau document dans une collection en fonction des arguments `kwargs` :

- **Prototype :** `def insert_school(mongo_collection, **kwargs):`
- `mongo_collection` sera un objet de collection PyMongo.
- **Retourne :** Le nouvel `_id` du document inséré.

Exemple d'exécution :
```bash
guillaume@ubuntu:~/$ cat 9-main.py
#!/usr/bin/env python3
""" 9-main """
from pymongo import MongoClient
list_all = __import__('8-all').list_all
insert_school = __import__('9-insert_school').insert_school

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    school_collection = client.my_db.school
    new_school_id = insert_school(school_collection, name="UCSF", address="505 Parnassus Ave")
    print("New school created: {}".format(new_school_id))

    schools = list_all(school_collection)
    for school in schools:
        print("[{}] {} {}".format(school.get('_id'), school.get('name'), school.get('address', "")))

guillaume@ubuntu:~/$
guillaume@ubuntu:~/$ ./9-main.py
New school created: 5a8f60cfd4321e1403ba7abb
[5a8f60cfd4321e1403ba7ab9] Holberton school
[5a8f60cfd4321e1403ba7aba] UCSD
[5a8f60cfd4321e1403ba7abb] UCSF 505 Parnassus Ave
guillaume@ubuntu:~/$
```

**Dépôt :**
- Répertoire GitHub : `holbertonschool-web_back_end`
- Répertoire : `NoSQL`
- Fichier : `9-insert_school.py`
```

---

### Explication Détaillée

#### Objectif
L'objectif de cette fonction Python est d'insérer un nouveau document dans une collection MongoDB en utilisant PyMongo. Les données du document sont passées sous forme d'arguments `kwargs`. La fonction retourne l'`_id` du document nouvellement inséré.

#### Fonctions Utilisées
1. **`insert_one(document)`** :
   - **Description** : Cette méthode PyMongo permet d'insérer un document dans une collection.
   - **Fonctionnement** : Elle prend un dictionnaire Python comme argument et insère ce document dans la collection.
   - **Retourne** : Un objet `InsertOneResult` contenant l'`_id` du document inséré.
   - **Exemple** : `mongo_collection.insert_one({"name": "UCSF", "address": "505 Parnassus Ave"})`.

2. **`kwargs`** :
   - **Description** : En Python, `**kwargs` permet de passer un nombre variable d'arguments nommés à une fonction. Ces arguments sont traités comme un dictionnaire.
   - **Utilisation** : Les arguments passés à la fonction sont utilisés pour créer le document à insérer.

#### Structure de la Fonction
Voici un exemple de code pour la fonction `insert_school` :

```python
#!/usr/bin/env python3
""" 9-insert_school.py """
from pymongo.collection import Collection

def insert_school(mongo_collection: Collection, **kwargs):
    """
    Insère un nouveau document dans une collection MongoDB.
    
    Args:
        mongo_collection (Collection): L'objet de collection PyMongo.
        **kwargs: Les attributs du document à insérer.
    
    Returns:
        ObjectId: L'_id du document inséré.
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
```

#### Explication du Code
- **`mongo_collection.insert_one(kwargs)`** : Cette méthode insère un document dans la collection. Les arguments `kwargs` sont passés sous forme de dictionnaire.
- **`result.inserted_id`** : Retourne l'`_id` du document nouvellement inséré.

#### Exemple d'Utilisation
Voici un exemple de script principal (`9-main.py`) pour tester la fonction :

```python
#!/usr/bin/env python3
""" 9-main """
from pymongo import MongoClient
list_all = __import__('8-all').list_all
insert_school = __import__('9-insert_school').insert_school

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    school_collection = client.my_db.school
    new_school_id = insert_school(school_collection, name="UCSF", address="505 Parnassus Ave")
    print("New school created: {}".format(new_school_id))

    schools = list_all(school_collection)
    for school in schools:
        print("[{}] {} {}".format(school.get('_id'), school.get('name'), school.get('address', "")))
```

#### Résultat Attendu
Le script affiche l'`_id` du document nouvellement inséré et liste tous les documents de la collection. Par exemple :
```
New school created: 5a8f60cfd4321e1403ba7abb
[5a8f60cfd4321e1403ba7ab9] Holberton school
[5a8f60cfd4321e1403ba7aba] UCSD
[5a8f60cfd4321e1403ba7abb] UCSF 505 Parnassus Ave
```

---

### Synthèse
Cette fonction Python utilise PyMongo pour insérer un document dans une collection MongoDB. Elle est flexible grâce à l'utilisation de `kwargs` et retourne l'`_id` du document inséré. C'est un outil essentiel pour ajouter des données à une collection MongoDB en Python.