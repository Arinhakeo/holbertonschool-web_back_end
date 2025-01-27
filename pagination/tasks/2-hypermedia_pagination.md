### Traduction en français

#### **Tâche 2 : Pagination hypermédia**
**Obligatoire**  
**Score : 48,75 % (Vérifications terminées : 75,00 %)**  

Répliquez le code de la tâche précédente et implémentez une méthode `get_hyper` qui prend les mêmes arguments (et valeurs par défaut) que `get_page`. Cette méthode doit retourner un dictionnaire contenant les paires clé-valeur suivantes :

- **`page_size`** : La longueur de la page de données retournée.
- **`page`** : Le numéro de la page actuelle.
- **`data`** : La page de données (identique au retour de la tâche précédente).
- **`next_page`** : Le numéro de la page suivante, ou `None` s'il n'y a pas de page suivante.
- **`prev_page`** : Le numéro de la page précédente, ou `None` s'il n'y a pas de page précédente.
- **`total_pages`** : Le nombre total de pages dans le dataset sous forme d'entier.

Assurez-vous de réutiliser `get_page` dans votre implémentation. Vous pouvez utiliser le module `math` si nécessaire.

#### **Exemple d'utilisation :**

```bash
bob@dylan:~$ cat 2-main.py
#!/usr/bin/env python3
"""
Fichier principal
"""

Server = __import__('2-hypermedia_pagination').Server

server = Server()

print(server.get_hyper(1, 2))
print("---")
print(server.get_hyper(2, 2))
print("---")
print(server.get_hyper(100, 3))
print("---")
print(server.get_hyper(3000, 100))

bob@dylan:~$ ./2-main.py
{'page_size': 2, 'page': 1, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Olivia', '172', '1'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Chloe', '112', '2']], 'next_page': 2, 'prev_page': None, 'total_pages': 9709}
---
{'page_size': 2, 'page': 2, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Sophia', '104', '3'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emma', '99', '4']], 'next_page': 3, 'prev_page': 1, 'total_pages': 9709}
---
{'page_size': 3, 'page': 100, 'data': [['2016', 'FEMALE', 'BLACK NON HISPANIC', 'Londyn', '14', '39'], ['2016', 'FEMALE', 'BLACK NON HISPANIC', 'Amirah', '14', '39'], ['2016', 'FEMALE', 'BLACK NON HISPANIC', 'McKenzie', '14', '39']], 'next_page': 101, 'prev_page': 99, 'total_pages': 6473}
---
{'page_size': 0, 'page': 3000, 'data': [], 'next_page': None, 'prev_page': 2999, 'total_pages': 195}
bob@dylan:~$
```

**Dépôt :**  
GitHub repository: holbertonschool-web_back_end  
Directory: pagination  
File: 2-hypermedia_pagination.py  

---

### Explications détaillées

#### **Contexte de la tâche**
Cette tâche étend la pagination simple en ajoutant des métadonnées hypermédias (HATEOAS) pour permettre une navigation fluide entre les pages. L'objectif est de créer une méthode `get_hyper` qui retourne non seulement les données de la page actuelle, mais aussi des informations supplémentaires pour naviguer entre les pages.

#### **Objectif de la méthode `get_hyper`**
La méthode `get_hyper` retourne un dictionnaire contenant :
1. **`page_size`** : Le nombre d'éléments sur la page actuelle.
2. **`page`** : Le numéro de la page actuelle.
3. **`data`** : Les données de la page (identique à ce que retourne `get_page`).
4. **`next_page`** : Le numéro de la page suivante (ou `None` si on est à la dernière page).
5. **`prev_page`** : Le numéro de la page précédente (ou `None` si on est à la première page).
6. **`total_pages`** : Le nombre total de pages dans le dataset.

#### **Comment fonctionne la méthode ?**
1. **Réutilisation de `get_page` :**
   - La méthode `get_hyper` utilise `get_page` pour obtenir les données de la page actuelle.
2. **Calcul des métadonnées :**
   - **`next_page`** : `page + 1` si la page actuelle n'est pas la dernière.
   - **`prev_page`** : `page - 1` si la page actuelle n'est pas la première.
   - **`total_pages`** : Calculé en divisant la longueur totale du dataset par `page_size`, puis en arrondissant à l'entier supérieur avec `math.ceil`.

#### **Syntaxe de la méthode**
Voici comment implémenter la méthode `get_hyper` en Python :

```python
import math

def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
    """
    Retourne un dictionnaire contenant des métadonnées hypermédias pour la pagination.

    Args:
        page (int): Le numéro de la page (commence à 1).
        page_size (int): Le nombre d'éléments par page.

    Returns:
        Dict: Un dictionnaire contenant les métadonnées de pagination.
    """
    data = self.get_page(page, page_size)
    total_pages = math.ceil(len(self.dataset()) / page_size)
    return {
        "page_size": len(data),
        "page": page,
        "data": data,
        "next_page": page + 1 if page < total_pages else None,
        "prev_page": page - 1 if page > 1 else None,
        "total_pages": total_pages,
    }
```

#### **Explication de la syntaxe**
1. **Importation du module `math` :**
   - `import math` : Nécessaire pour utiliser `math.ceil` afin d'arrondir à l'entier supérieur.

2. **Calcul des métadonnées :**
   - **`data`** : Les données de la page actuelle, obtenues via `get_page`.
   - **`total_pages`** : Calculé en divisant la longueur totale du dataset par `page_size`, puis en arrondissant à l'entier supérieur.
   - **`next_page`** : `page + 1` si la page actuelle n'est pas la dernière.
   - **`prev_page`** : `page - 1` si la page actuelle n'est pas la première.

3. **Retour du résultat :**
   - Retourne un dictionnaire contenant toutes les métadonnées nécessaires.

#### **Exemples concrets**
1. **Page 1, taille de page 2 :**
   - Retourne les 2 premiers éléments.
   - Exemple de sortie :
     ```python
     {
         "page_size": 2,
         "page": 1,
         "data": [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Olivia', '172', '1'],
                  ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Chloe', '112', '2']],
         "next_page": 2,
         "prev_page": None,
         "total_pages": 9709
     }
     ```

2. **Page 100, taille de page 3 :**
   - Retourne les éléments 298 à 300.
   - Exemple de sortie :
     ```python
     {
         "page_size": 3,
         "page": 100,
         "data": [['2016', 'FEMALE', 'BLACK NON HISPANIC', 'Londyn', '14', '39'],
                  ['2016', 'FEMALE', 'BLACK NON HISPANIC', 'Amirah', '14', '39'],
                  ['2016', 'FEMALE', 'BLACK NON HISPANIC', 'McKenzie', '14', '39']],
         "next_page": 101,
         "prev_page": 99,
         "total_pages": 6473
     }
     ```

3. **Page 3000, taille de page 100 :**
   - Retourne une liste vide car les indices sont hors limites.
   - Exemple de sortie :
     ```python
     {
         "page_size": 0,
         "page": 3000,
         "data": [],
         "next_page": None,
         "prev_page": 2999,
         "total_pages": 195
     }
     ```

#### **Mots-clés à retenir**
| Terme               | Définition                                                                 |
|---------------------|----------------------------------------------------------------------------|
| **Hypermédia**       | Principe REST pour inclure des liens de navigation dans les réponses.      |
| **HATEOAS**          | Acronyme pour "Hypermedia as the Engine of Application State".             |
| **Math.ceil**        | Fonction pour arrondir à l'entier supérieur.                               |
| **Dict**             | Structure de données clé-valeur en Python.                                |

---

### **Résumé**
Cette tâche vous apprend à étendre la pagination simple en ajoutant des métadonnées hypermédias pour permettre une navigation fluide entre les pages. Ces compétences sont essentielles pour créer des API RESTful modernes et conviviales.