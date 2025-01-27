### Traduction en français

#### **Tâche 3 : Pagination hypermédia résiliente aux suppressions**
**Obligatoire**  
**Score : 48,75 % (Vérifications terminées : 75,00 %)**  

L'objectif de cette tâche est de garantir que, si des lignes sont supprimées du dataset entre deux requêtes, l'utilisateur ne manque aucun élément lorsqu'il change de page.

Le fichier `3-hypermedia_del_pagination.py` commence avec le code suivant :

```python
#!/usr/bin/env python3
"""
Pagination hypermédia résiliente aux suppressions
"""

import csv
import math
from typing import List, Dict


class Server:
    """Classe Server pour paginer une base de données de noms de bébés populaires.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Dataset mis en cache
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexé par position de tri, commençant à 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        pass
```

#### **Objectif**
Implémentez une méthode `get_hyper_index` qui prend deux arguments entiers : `index` (par défaut `None`) et `page_size` (par défaut 10). Cette méthode doit retourner un dictionnaire contenant les paires clé-valeur suivantes :

- **`index`** : L'index de départ de la page actuelle. C'est l'index du premier élément de la page.
- **`next_index`** : L'index à interroger pour la page suivante. C'est l'index du premier élément après le dernier élément de la page actuelle.
- **`page_size`** : La taille de la page actuelle.
- **`data`** : La page actuelle du dataset.

#### **Comportement attendu**
- Utilisez `assert` pour vérifier que `index` est dans une plage valide.
- Si l'utilisateur interroge l'index 0 avec `page_size` 10, il doit obtenir les lignes indexées de 0 à 9 inclus.
- Si l'utilisateur demande l'index suivant (10) avec `page_size` 10, mais que les lignes 3, 6 et 7 ont été supprimées, il doit toujours recevoir les lignes indexées de 10 à 19 inclus.

#### **Exemple d'utilisation :**

```bash
bob@dylan:~$ cat 3-main.py
#!/usr/bin/env python3
"""
Fichier principal
"""

Server = __import__('3-hypermedia_del_pagination').Server

server = Server()

server.indexed_dataset()

try:
    server.get_hyper_index(300000, 100)
except AssertionError:
    print("AssertionError raised when out of range")        

index = 3
page_size = 2

print("Nb items: {}".format(len(server._Server__indexed_dataset)))

# 1- Requête du premier index
res = server.get_hyper_index(index, page_size)
print(res)

# 2- Requête de l'index suivant
print(server.get_hyper_index(res.get('next_index'), page_size))

# 3- Suppression du premier index
del server._Server__indexed_dataset[res.get('index')]
print("Nb items: {}".format(len(server._Server__indexed_dataset)))

# 4- Requête à nouveau de l'index initial -> les données récupérées ne sont pas les mêmes que lors de la première requête
print(server.get_hyper_index(index, page_size))

# 5- Requête à nouveau de l'index suivant initial -> même page de données que lors de la requête 2
print(server.get_hyper_index(res.get('next_index'), page_size))

bob@dylan:~$ ./3-main.py
AssertionError raised when out of range
Nb items: 19418
{'index': 3, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emma', '99', '4'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emily', '99', '4']], 'page_size': 2, 'next_index': 5}
{'index': 5, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Mia', '79', '5'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Charlotte', '59', '6']], 'page_size': 2, 'next_index': 7}
Nb items: 19417
{'index': 3, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emily', '99', '4'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Mia', '79', '5']], 'page_size': 2, 'next_index': 6}
{'index': 5, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Mia', '79', '5'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Charlotte', '59', '6']], 'page_size': 2, 'next_index': 7}
bob@dylan:~$
```

**Dépôt :**  
GitHub repository: holbertonschool-web_back_end  
Directory: pagination  
File: 3-hypermedia_del_pagination.py  

---

### Explications détaillées

#### **Contexte de la tâche**
Cette tâche vise à rendre la pagination résiliente aux suppressions. Si des éléments sont supprimés du dataset entre deux requêtes, l'utilisateur ne doit pas manquer d'éléments lorsqu'il navigue entre les pages.

#### **Objectif de la méthode `get_hyper_index`**
La méthode `get_hyper_index` retourne un dictionnaire contenant :
1. **`index`** : L'index de départ de la page actuelle.
2. **`next_index`** : L'index à interroger pour la page suivante.
3. **`page_size`** : La taille de la page actuelle.
4. **`data`** : Les données de la page actuelle.

#### **Comportement attendu**
- Si des éléments sont supprimés, les indices sont ajustés pour éviter de sauter des données.
- Si l'utilisateur demande une page et que certains éléments ont été supprimés, la méthode doit toujours retourner le bon nombre d'éléments.

#### **Syntaxe de la méthode**
Voici comment implémenter la méthode `get_hyper_index` en Python :

```python
def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
    """
    Retourne un dictionnaire contenant des métadonnées pour une pagination résiliente aux suppressions.

    Args:
        index (int): L'index de départ de la page (par défaut None).
        page_size (int): La taille de la page (par défaut 10).

    Returns:
        Dict: Un dictionnaire contenant les métadonnées de pagination.
    """
    assert index is None or (isinstance(index, int) and 0 <= index < len(self.indexed_dataset()))
    dataset = self.indexed_dataset()
    if index is None:
        index = 0
    data = []
    next_index = index
    for _ in range(page_size):
        while next_index not in dataset and next_index < len(dataset):
            next_index += 1
        if next_index >= len(dataset):
            break
        data.append(dataset[next_index])
        next_index += 1
    return {
        "index": index,
        "data": data,
        "page_size": page_size,
        "next_index": next_index if next_index < len(dataset) else None,
    }
```

#### **Explication de la syntaxe**
1. **Validation de l'index :**
   - `assert index is None or (isinstance(index, int) and 0 <= index < len(self.indexed_dataset()))` : Vérifie que l'index est valide.

2. **Récupération des données :**
   - `dataset = self.indexed_dataset()` : Charge le dataset indexé.
   - Si `index` est `None`, il est initialisé à 0.

3. **Construction de la page :**
   - `data = []` : Initialise une liste vide pour stocker les données de la page.
   - `next_index = index` : Initialise l'index de départ.
   - Une boucle `for` parcourt les éléments pour remplir la page.
   - Si un index est manquant (supprimé), il est ignoré.

4. **Retour du résultat :**
   - Retourne un dictionnaire contenant les métadonnées de pagination.

#### **Exemples concrets**
1. **Requête initiale :**
   - `index = 3`, `page_size = 2`.
   - Retourne les éléments indexés 3 et 4.
   - Exemple de sortie :
     ```python
     {
         "index": 3,
         "data": [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emma', '99', '4'],
                  ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emily', '99', '4']],
         "page_size": 2,
         "next_index": 5
     }
     ```

2. **Requête suivante après suppression :**
   - Suppression de l'élément à l'index 3.
   - Nouvelle requête avec `index = 3`, `page_size = 2`.
   - Retourne les éléments indexés 4 et 5.
   - Exemple de sortie :
     ```python
     {
         "index": 3,
         "data": [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emily', '99', '4'],
                  ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Mia', '79', '5']],
         "page_size": 2,
         "next_index": 6
     }
     ```

#### **Mots-clés à retenir**
| Terme               | Définition                                                                 |
|---------------------|----------------------------------------------------------------------------|
| **Résilient**       | Capacité à fonctionner correctement malgré des modifications (suppressions).|
| **Index**           | Position d'un élément dans une liste ou un tableau.                        |
| **Dataset indexé**  | Dataset où chaque élément est associé à un index unique.                   |

---

### **Résumé**
Cette tâche vous apprend à implémenter une pagination résiliente aux suppressions, garantissant que les utilisateurs ne manquent pas d'éléments même si des données sont supprimées entre deux requêtes. Cette compétence est essentielle pour créer des applications robustes et fiables.