### Traduction en français

#### **Tâche 0 : Fonction d'aide simple**
**Obligatoire**  
**Score : 43,33 % (Vérifications terminées : 66,67 %)**  

Écrivez une fonction nommée `index_range` qui prend deux arguments entiers : `page` et `page_size`.

La fonction doit retourner un tuple de taille deux contenant un index de début et un index de fin correspondant à la plage d'index à retourner dans une liste pour ces paramètres de pagination spécifiques.

Les numéros de page sont indexés à partir de 1, c'est-à-dire que la première page est la page 1.

**Exemple d'utilisation :**

```bash
bob@dylan:~$ cat 0-main.py
#!/usr/bin/env python3
"""
Fichier principal
"""

index_range = __import__('0-simple_helper_function').index_range

res = index_range(1, 7)
print(type(res))
print(res)

res = index_range(page=3, page_size=15)
print(type(res))
print(res)

bob@dylan:~$ ./0-main.py
<class 'tuple'>
(0, 7)
<class 'tuple'>
(30, 45)
bob@dylan:~$
```

**Dépôt :**  
GitHub repository: holbertonschool-web_back_end  
Directory: pagination  
File: 0-simple_helper_function.py  

---

### Explications détaillées

#### **Contexte de la tâche**
Cette tâche consiste à écrire une fonction utilitaire nommée `index_range` qui calcule les indices de début et de fin pour une pagination simple. Cette fonction est essentielle pour diviser un grand ensemble de données en "pages" plus petites, ce qui est une pratique courante dans les applications web et les API REST.

#### **Objectif de la fonction**
La fonction `index_range` prend deux paramètres :
1. **`page`** : Le numéro de la page (commençant à 1).
2. **`page_size`** : Le nombre d'éléments à afficher par page.

Elle retourne un tuple contenant deux valeurs :
- **`start_index`** : L'index de début (inclus) pour la page demandée.
- **`end_index`** : L'index de fin (exclus) pour la page demandée.

#### **Pourquoi cette fonction est-elle utile ?**
Cette fonction permet de déterminer facilement quels éléments d'une liste doivent être affichés pour une page donnée. Par exemple, si vous avez une liste de 100 éléments et que vous voulez afficher 10 éléments par page, cette fonction vous dira quels éléments afficher pour la page 1, la page 2, etc.

#### **Exemples concrets**
1. **Page 1, taille de page 7 :**
   - `index_range(1, 7)` retourne `(0, 7)`.
   - Cela signifie que vous devez afficher les éléments de l'index 0 à l'index 6 (7 éléments au total).

2. **Page 3, taille de page 15 :**
   - `index_range(3, 15)` retourne `(30, 45)`.
   - Cela signifie que vous devez afficher les éléments de l'index 30 à l'index 44 (15 éléments au total).

#### **Comment fonctionne le calcul ?**
- **`start_index`** est calculé comme suit :  
  `(page - 1) * page_size`  
  - Pour la page 1 : `(1 - 1) * 7 = 0`.  
  - Pour la page 3 : `(3 - 1) * 15 = 30`.

- **`end_index`** est simplement :  
  `start_index + page_size`  
  - Pour la page 1 : `0 + 7 = 7`.  
  - Pour la page 3 : `30 + 15 = 45`.

#### **Pourquoi les pages sont-elles indexées à partir de 1 ?**
- C'est une convention courante dans les interfaces utilisateur. Les utilisateurs s'attendent à ce que la première page soit la page 1, pas la page 0. Cela rend l'expérience plus intuitive.

#### **Tests fournis**
Le fichier `0-main.py` contient des tests pour vérifier que la fonction fonctionne correctement. Il affiche le type de retour (qui doit être un tuple) et les valeurs calculées pour deux cas :
1. Page 1, taille de page 7.
2. Page 3, taille de page 15.

#### **Syntaxe de la fonction**
Voici comment implémenter la fonction `index_range` en Python :

```python
def index_range(page: int, page_size: int) -> tuple:
    """
    Calcule les indices de début et de fin pour une pagination simple.

    Args:
        page (int): Le numéro de la page (commence à 1).
        page_size (int): Le nombre d'éléments par page.

    Returns:
        tuple: Un tuple contenant l'index de début et l'index de fin.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
```

#### **Explication de la syntaxe**
1. **Définition de la fonction :**
   - `def index_range(page: int, page_size: int) -> tuple:`  
     - `page` et `page_size` sont des arguments de type `int`.  
     - La fonction retourne un `tuple`.

2. **Calcul des indices :**
   - `start_index = (page - 1) * page_size`  
     - Calcule l'index de départ en fonction de la page et de la taille de la page.
   - `end_index = start_index + page_size`  
     - Calcule l'index de fin en ajoutant la taille de la page à l'index de départ.

3. **Retour du résultat :**
   - `return (start_index, end_index)`  
     - Retourne un tuple contenant les deux indices.

#### **Mots-clés à retenir**
| Terme               | Définition                                                                 |
|---------------------|----------------------------------------------------------------------------|
| **Pagination**       | Technique pour diviser un ensemble de données en pages plus petites.       |
| **1-indexed**        | Les pages commencent à 1 (au lieu de 0).                                   |
| **Tuple**            | Structure de données immuable en Python.                                   |
| **Index**            | Position d'un élément dans une liste ou un tableau.                        |

---

### **Résumé**
Cette tâche vous apprend à créer une fonction utilitaire simple mais puissante pour la pagination. Elle est essentielle pour manipuler de grands ensembles de données et améliorer les performances des applications. En comprenant ce concept, vous serez prêt à aborder des défis plus complexes liés à la pagination dans les API REST.