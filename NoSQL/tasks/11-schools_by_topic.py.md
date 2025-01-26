# 11. Où puis-je apprendre Python ?

Écrivez une fonction Python qui retourne la liste des écoles ayant un sujet spécifique :

- **Prototype :** `def schools_by_topic(mongo_collection, topic):`
- `mongo_collection` sera un objet de collection PyMongo.
- `topic` (chaîne de caractères) sera le sujet recherché.

Exemple d'exécution :
```bash
guillaume@ubuntu:~/$ cat 11-main.py
#!/usr/bin/env python3
""" 11-main """
from pymongo import MongoClient
list_all = __import__('8-all').list_all
insert_school = __import__('9-insert_school').insert_school
schools_by_topic = __import__('11-schools_by_topic').schools_by_topic

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    school_collection = client.my_db.school

    j_schools = [
        { 'name': "Holberton school", 'topics': ["Algo", "C", "Python", "React"]},
        { 'name': "UCSF", 'topics': ["Algo", "MongoDB"]},
        { 'name': "UCLA", 'topics': ["C", "Python"]},
        { 'name': "UCSD", 'topics': ["Cassandra"]},
        { 'name': "Stanford", 'topics': ["C", "React", "Javascript"]}
    ]
    for j_school in j_schools:
        insert_school(school_collection, **j_school)

    schools = schools_by_topic(school_collection, "Python")
    for school in schools:
        print("[{}] {} {}".format(school.get('_id'), school.get('name'), school.get('topics', "")))

guillaume@ubuntu:~/$
guillaume@ubuntu:~/$ ./11-main.py
[5a90731fd4321e1e5a3f53e3] Holberton school ['Algo', 'C', 'Python', 'React']
[5a90731fd4321e1e5a3f53e5] UCLA ['C', 'Python']
guillaume@ubuntu:~/$
```

**Dépôt :**
- Répertoire GitHub : `holbertonschool-web_back_end`
- Répertoire : `NoSQL`
- Fichier : `11-schools_by_topic.py`
```

---

### Explication Détaillée

#### Objectif
L'objectif de cette fonction Python est de rechercher et de retourner tous les documents d'une collection MongoDB qui contiennent un sujet spécifique dans leur liste de sujets.

#### Fonctions Utilisées
1. **`find(query)`** :
   - **Description** : Cette méthode PyMongo permet de rechercher des documents dans une collection en fonction d'un critère de recherche.
   - **Fonctionnement** : Elle prend un dictionnaire comme argument pour spécifier les critères de recherche et renvoie un curseur contenant les documents correspondants.
   - **Exemple** : `mongo_collection.find({"topics": "Python"})` recherche tous les documents où `"Python"` est présent dans la liste `topics`.

2. **Conversion en liste** :
   - **Description** : Le curseur renvoyé par `find()` peut être converti en une liste Python pour faciliter la manipulation des données.
   - **Exemple** : `list(mongo_collection.find({"topics": "Python"}))` convertit le curseur en une liste de documents.

#### Structure de la Fonction
Voici un exemple de code pour la fonction `schools_by_topic` :

```python
#!/usr/bin/env python3
""" 11-schools_by_topic.py """
from pymongo.collection import Collection

def schools_by_topic(mongo_collection: Collection, topic: str):
    """
    Retourne la liste des écoles ayant un sujet spécifique.
    
    Args:
        mongo_collection (Collection): L'objet de collection PyMongo.
        topic (str): Le sujet à rechercher.
    
    Returns:
        list: Une liste de documents correspondants.
    """
    schools = list(mongo_collection.find({"topics": topic}))
    return schools
```

#### Explication du Code
- **`mongo_collection.find({"topics": topic})`** : Cette méthode recherche tous les documents où le sujet spécifié (`topic`) est présent dans la liste `topics`.
- **`list(...)`** : Convertit le curseur en une liste Python.

#### Exemple d'Utilisation
Voici un exemple de script principal (`11-main.py`) pour tester la fonction :

```python
#!/usr/bin/env python3
""" 11-main """
from pymongo import MongoClient
list_all = __import__('8-all').list_all
insert_school = __import__('9-insert_school').insert_school
schools_by_topic = __import__('11-schools_by_topic').schools_by_topic

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    school_collection = client.my_db.school

    j_schools = [
        { 'name': "Holberton school", 'topics': ["Algo", "C", "Python", "React"]},
        { 'name': "UCSF", 'topics': ["Algo", "MongoDB"]},
        { 'name': "UCLA", 'topics': ["C", "Python"]},
        { 'name': "UCSD", 'topics': ["Cassandra"]},
        { 'name': "Stanford", 'topics': ["C", "React", "Javascript"]}
    ]
    for j_school in j_schools:
        insert_school(school_collection, **j_school)

    schools = schools_by_topic(school_collection, "Python")
    for school in schools:
        print("[{}] {} {}".format(school.get('_id'), school.get('name'), school.get('topics', "")))
```

#### Résultat Attendu
Le script affiche les documents des écoles qui ont le sujet `"Python"` dans leur liste de sujets. Par exemple :
```
[5a90731fd4321e1e5a3f53e3] Holberton school ['Algo', 'C', 'Python', 'React']
[5a90731fd4321e1e5a3f53e5] UCLA ['C', 'Python']
```

---

### Synthèse
Cette fonction Python utilise PyMongo pour rechercher des documents dans une collection MongoDB en fonction d'un sujet spécifique. Elle retourne une liste de documents correspondants, ce qui permet de répondre à des questions comme "Où puis-je apprendre Python ?". C'est un outil essentiel pour interroger des collections MongoDB avec des critères spécifiques.