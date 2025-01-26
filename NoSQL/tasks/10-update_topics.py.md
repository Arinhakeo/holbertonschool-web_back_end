# 10. Modifier les sujets d'une école

Écrivez une fonction Python qui modifie tous les sujets d'un document d'école en fonction du nom :

- **Prototype :** `def update_topics(mongo_collection, name, topics):`
- `mongo_collection` sera un objet de collection PyMongo.
- `name` (chaîne de caractères) sera le nom de l'école à mettre à jour.
- `topics` (liste de chaînes de caractères) sera la liste des sujets abordés dans l'école.

Exemple d'exécution :
```bash
guillaume@ubuntu:~/$ cat 10-main.py
#!/usr/bin/env python3
""" 10-main """
from pymongo import MongoClient
list_all = __import__('8-all').list_all
update_topics = __import__('10-update_topics').update_topics

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    school_collection = client.my_db.school
    update_topics(school_collection, "Holberton school", ["Sys admin", "AI", "Algorithm"])

    schools = list_all(school_collection)
    for school in schools:
        print("[{}] {} {}".format(school.get('_id'), school.get('name'), school.get('topics', "")))

    update_topics(school_collection, "Holberton school", ["iOS"])

    schools = list_all(school_collection)
    for school in schools:
        print("[{}] {} {}".format(school.get('_id'), school.get('name'), school.get('topics', "")))

guillaume@ubuntu:~/$
guillaume@ubuntu:~/$ ./10-main.py
[5a8f60cfd4321e1403ba7abb] UCSF 
[5a8f60cfd4321e1403ba7aba] UCSD 
[5a8f60cfd4321e1403ba7ab9] Holberton school ['Sys admin', 'AI', 'Algorithm']
[5a8f60cfd4321e1403ba7abb] UCSF 
[5a8f60cfd4321e1403ba7aba] UCSD 
[5a8f60cfd4321e1403ba7ab9] Holberton school ['iOS']
guillaume@ubuntu:~/$
```

**Dépôt :**
- Répertoire GitHub : `holbertonschool-web_back_end`
- Répertoire : `NoSQL`
- Fichier : `10-update_topics.py`
```

---

### Explication Détaillée

#### Objectif
L'objectif de cette fonction Python est de mettre à jour les sujets d'une école spécifique dans une collection MongoDB. La fonction prend en entrée le nom de l'école et une liste de sujets, puis met à jour le document correspondant dans la collection.

#### Fonctions Utilisées
1. **`update_many(filter, update)`** :
   - **Description** : Cette méthode PyMongo permet de mettre à jour tous les documents qui correspondent à un critère de recherche spécifique.
   - **Fonctionnement** : Elle prend deux arguments :
     - `filter` : Un dictionnaire qui spécifie les critères de recherche.
     - `update` : Un dictionnaire qui spécifie les modifications à appliquer.
   - **Exemple** : `mongo_collection.update_many({"name": "Holberton school"}, {"$set": {"topics": ["Sys admin", "AI", "Algorithm"]}})` met à jour les sujets de l'école "Holberton school".

2. **`$set`** :
   - **Description** : Cet opérateur MongoDB est utilisé pour définir la valeur d'un champ dans un document. Si le champ n'existe pas, il est créé.
   - **Utilisation** : Il est inclus dans le dictionnaire `update` pour spécifier les modifications.

#### Structure de la Fonction
Voici un exemple de code pour la fonction `update_topics` :

```python
#!/usr/bin/env python3
""" 10-update_topics.py """
from pymongo.collection import Collection

def update_topics(mongo_collection: Collection, name: str, topics: list):
    """
    Met à jour les sujets d'une école spécifique dans une collection MongoDB.
    
    Args:
        mongo_collection (Collection): L'objet de collection PyMongo.
        name (str): Le nom de l'école à mettre à jour.
        topics (list): La liste des sujets à définir pour l'école.
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
```

#### Explication du Code
- **`mongo_collection.update_many(...)`** : Cette méthode met à jour tous les documents ayant un attribut `name` égal à la valeur spécifiée.
- **`{"$set": {"topics": topics}}`** : Cet opérateur définit l'attribut `topics` avec la nouvelle liste de sujets.

#### Exemple d'Utilisation
Voici un exemple de script principal (`10-main.py`) pour tester la fonction :

```python
#!/usr/bin/env python3
""" 10-main """
from pymongo import MongoClient
list_all = __import__('8-all').list_all
update_topics = __import__('10-update_topics').update_topics

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    school_collection = client.my_db.school
    update_topics(school_collection, "Holberton school", ["Sys admin", "AI", "Algorithm"])

    schools = list_all(school_collection)
    for school in schools:
        print("[{}] {} {}".format(school.get('_id'), school.get('name'), school.get('topics', "")))

    update_topics(school_collection, "Holberton school", ["iOS"])

    schools = list_all(school_collection)
    for school in schools:
        print("[{}] {} {}".format(school.get('_id'), school.get('name'), school.get('topics', "")))
```

#### Résultat Attendu
Le script affiche les documents mis à jour avec les nouveaux sujets. Par exemple :
```
[5a8f60cfd4321e1403ba7abb] UCSF 
[5a8f60cfd4321e1403ba7aba] UCSD 
[5a8f60cfd4321e1403ba7ab9] Holberton school ['Sys admin', 'AI', 'Algorithm']
[5a8f60cfd4321e1403ba7abb] UCSF 
[5a8f60cfd4321e1403ba7aba] UCSD 
[5a8f60cfd4321e1403ba7ab9] Holberton school ['iOS']
```

---

### Synthèse
Cette fonction Python utilise PyMongo pour mettre à jour les sujets d'une école spécifique dans une collection MongoDB. Elle est flexible et permet de modifier dynamiquement les données d'un document. C'est un outil essentiel pour gérer les mises à jour dans une base de données MongoDB.