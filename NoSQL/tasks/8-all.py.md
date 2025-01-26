# 8. Lister tous les documents en Python

Écrivez une fonction Python qui liste tous les documents d'une collection :

- **Prototype :** `def list_all(mongo_collection):`
- **Retourne :** Une liste vide si aucun document n'est présent dans la collection.
- `mongo_collection` sera un objet de collection PyMongo.

Exemple d'exécution :
```bash
guillaume@ubuntu:~/$ cat 8-main.py
#!/usr/bin/env python3
""" 8-main """
from pymongo import MongoClient
list_all = __import__('8-all').list_all

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    school_collection = client.my_db.school
    schools = list_all(school_collection)
    for school in schools:
        print("[{}] {}".format(school.get('_id'), school.get('name')))

guillaume@ubuntu:~/$
guillaume@ubuntu:~/$ ./8-main.py
[5a8f60cfd4321e1403ba7ab9] Holberton school
[5a8f60cfd4321e1403ba7aba] UCSD
guillaume@ubuntu:~/$
```

**Dépôt :**
- Répertoire GitHub : `holbertonschool-web_back_end`
- Répertoire : `NoSQL`
- Fichier : `8-all.py`
```

---

### Explication Détaillée

#### Objectif
L'objectif de cette fonction Python est de lister tous les documents d'une collection MongoDB en utilisant PyMongo. Si la collection est vide, la fonction doit retourner une liste vide.

#### Fonctions Utilisées
1. **`find()`** :
   - **Description** : Cette méthode PyMongo permet de récupérer tous les documents d'une collection.
   - **Fonctionnement** : Elle renvoie un curseur contenant tous les documents de la collection. Si aucun critère de recherche n'est spécifié, elle renvoie tous les documents.
   - **Exemple** : `mongo_collection.find()` récupère tous les documents de la collection.

2. **Conversion en liste** :
   - **Description** : Le curseur renvoyé par `find()` peut être converti en une liste Python pour faciliter la manipulation des données.
   - **Exemple** : `list(mongo_collection.find())` convertit le curseur en une liste de documents.

#### Structure de la Fonction
Voici un exemple de code pour la fonction `list_all` :

```python
#!/usr/bin/env python3
""" 8-all.py """
from pymongo.collection import Collection

def list_all(mongo_collection: Collection):
    """
    Liste tous les documents dans une collection MongoDB.
    
    Args:
        mongo_collection (Collection): L'objet de collection PyMongo.
    
    Returns:
        list: Une liste de documents, ou une liste vide si aucun document n'est trouvé.
    """
    documents = list(mongo_collection.find())
    return documents
```

#### Explication du Code
- **`mongo_collection.find()`** : Cette méthode récupère tous les documents de la collection.
- **`list(...)`** : Convertit le curseur en une liste Python.
- **Retourne une liste vide si aucun document n'est trouvé** : Si la collection est vide, `find()` renvoie un curseur vide, qui est converti en une liste vide.

#### Exemple d'Utilisation
Voici un exemple de script principal (`8-main.py`) pour tester la fonction :

```python
#!/usr/bin/env python3
""" 8-main """
from pymongo import MongoClient
list_all = __import__('8-all').list_all

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    school_collection = client.my_db.school
    schools = list_all(school_collection)
    for school in schools:
        print("[{}] {}".format(school.get('_id'), school.get('name')))
```

#### Résultat Attendu
Si la collection contient des documents, la fonction les affiche. Par exemple :
```
[5a8f60cfd4321e1403ba7ab9] Holberton school
[5a8f60cfd4321e1403ba7aba] UCSD
```

Si la collection est vide, la fonction ne retourne rien (ou une liste vide).

---

### Synthèse
Cette fonction Python utilise PyMongo pour lister tous les documents d'une collection MongoDB. Elle est simple, efficace et renvoie une liste vide si la collection est vide. C'est un outil de base essentiel pour interagir avec des collections MongoDB en Python.