### Synthèse

---

#### **Introduction**
Ce projet porte sur la **pagination**, une technique essentielle pour gérer de grands ensembles de données dans les applications web et les API REST. Il est divisé en plusieurs tâches, chacune visant à approfondir vos compétences en pagination, depuis une fonction utilitaire simple jusqu'à une pagination résiliente aux suppressions.

---

### **Tâche 0 : Fonction d'aide simple**

#### **Objectif**
Écrire une fonction `index_range` qui calcule les indices de début et de fin pour une pagination basée sur deux paramètres : `page` (numéro de la page) et `page_size` (nombre d'éléments par page).

#### **Détails**
- **Paramètres :**
  - `page` : Numéro de la page (commence à 1).
  - `page_size` : Nombre d'éléments par page.
- **Retour :**
  - Un tuple `(start_index, end_index)` représentant la plage d'index à extraire.
- **Exemple :**
  - `index_range(1, 7)` retourne `(0, 7)`.
  - `index_range(3, 15)` retourne `(30, 45)`.

#### **Syntaxe**
```python
def index_range(page: int, page_size: int) -> tuple:
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
```

#### **Mots-clés à retenir**
| Terme               | Définition                                                                 |
|---------------------|----------------------------------------------------------------------------|
| **Pagination**       | Technique pour diviser un ensemble de données en pages plus petites.       |
| **1-indexed**        | Les pages commencent à 1 (au lieu de 0).                                   |
| **Tuple**            | Structure de données immuable en Python.                                   |

---

### **Tâche 1 : Pagination simple**

#### **Objectif**
Implémenter une méthode `get_page` dans une classe `Server` pour paginer un fichier CSV contenant des données sur les noms de bébés populaires.

#### **Détails**
- **Fichier CSV :** `Popular_Baby_Names.csv`.
- **Méthode `get_page` :**
  - Prend deux arguments : `page` (par défaut 1) et `page_size` (par défaut 10).
  - Utilise `index_range` pour calculer les indices.
  - Retourne la liste des éléments correspondants à la page demandée.
  - Si les arguments sont hors limites, retourne une liste vide.
- **Validation :**
  - Utilise `assert` pour vérifier que `page` et `page_size` sont des entiers positifs.

#### **Syntaxe**
```python
def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
    assert isinstance(page, int) and page > 0
    assert isinstance(page_size, int) and page_size > 0
    start, end = index_range(page, page_size)
    dataset = self.dataset()
    if start >= len(dataset):
        return []
    return dataset[start:end]
```

#### **Mots-clés à retenir**
| Terme               | Définition                                                                 |
|---------------------|----------------------------------------------------------------------------|
| **CSV**             | Format de fichier pour stocker des données tabulaires.                     |
| **Assert**          | Instruction pour vérifier une condition (lève une erreur si faux).         |
| **Dataset**         | Ensemble de données chargé en mémoire.                                     |

---

### **Tâche 2 : Pagination hypermédia**

#### **Objectif**
Étendre la pagination simple en ajoutant des métadonnées hypermédias (HATEOAS) pour permettre une navigation fluide entre les pages.

#### **Détails**
- **Méthode `get_hyper` :**
  - Retourne un dictionnaire contenant :
    - `page_size` : Nombre d'éléments sur la page actuelle.
    - `page` : Numéro de la page actuelle.
    - `data` : Les données de la page.
    - `next_page` : Numéro de la page suivante (ou `None`).
    - `prev_page` : Numéro de la page précédente (ou `None`).
    - `total_pages` : Nombre total de pages.
- **Calculs :**
  - `total_pages` est calculé avec `math.ceil(len(dataset) / page_size)`.

#### **Syntaxe**
```python
def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
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

#### **Mots-clés à retenir**
| Terme               | Définition                                                                 |
|---------------------|----------------------------------------------------------------------------|
| **HATEOAS**         | Principe REST pour inclure des liens hypermédias dans les réponses.        |
| **Dict**            | Structure de données clé-valeur en Python.                                |
| **Math.ceil**       | Fonction pour arrondir à l'entier supérieur.                               |

---

### **Tâche 3 : Pagination résiliente aux suppressions**

#### **Objectif**
Implémenter une pagination qui reste cohérente même si des éléments sont supprimés entre deux requêtes.

#### **Détails**
- **Méthode `get_hyper_index` :**
  - Prend deux arguments : `index` (par défaut `None`) et `page_size` (par défaut 10).
  - Retourne un dictionnaire contenant :
    - `index` : Index de départ de la page actuelle.
    - `next_index` : Index de départ de la page suivante.
    - `page_size` : Taille de la page.
    - `data` : Les données de la page.
- **Gestion des suppressions :**
  - Si des éléments sont supprimés, les indices sont ajustés pour éviter de sauter des données.

#### **Syntaxe**
```python
def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
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

#### **Mots-clés à retenir**
| Terme               | Définition                                                                 |
|---------------------|----------------------------------------------------------------------------|
| **Indexed Dataset** | Dataset indexé pour un accès rapide aux éléments.                          |
| **Resilient**       | Capacité à fonctionner correctement malgré des modifications (suppressions).|
| **Next Index**      | Index de départ pour la prochaine requête.                                 |

---

### **Conclusion**
Ce projet vous permet de maîtriser les concepts de pagination, depuis les bases jusqu'à des techniques avancées comme la pagination résiliente aux suppressions. Ces compétences sont essentielles pour créer des API REST performantes et robustes.