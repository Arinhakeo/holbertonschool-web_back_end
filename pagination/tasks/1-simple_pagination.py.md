### Traduction en français

#### **Tâche 1 : Pagination simple**
**Obligatoire**  
**Score : 48,75 % (Vérifications terminées : 75,00 %)**  

Copiez la fonction `index_range` de la tâche précédente et implémentez une classe `Server` pour paginer une base de données de noms de bébés populaires à partir d'un fichier CSV.

#### **Détails**
- **Fichier CSV :** `Popular_Baby_Names.csv`.
- **Classe `Server` :**
  - Contient une méthode `dataset` pour charger et mettre en cache les données du fichier CSV.
  - Contient une méthode `get_page` pour paginer les données.
- **Méthode `get_page` :**
  - Prend deux arguments : `page` (par défaut 1) et `page_size` (par défaut 10).
  - Utilise `index_range` pour calculer les indices de début et de fin.
  - Retourne la liste des éléments correspondants à la page demandée.
  - Si les arguments sont hors limites, retourne une liste vide.
- **Validation :**
  - Utilise `assert` pour vérifier que `page` et `page_size` sont des entiers positifs.

#### **Exemple d'utilisation :**

```bash
bob@dylan:~$ cat 1-main.py
#!/usr/bin/env python3
"""
Fichier principal
"""

Server = __import__('1-simple_pagination').Server

server = Server()

try:
    should_err = server.get_page(-10, 2)
except AssertionError:
    print("AssertionError raised with negative values")

try:
    should_err = server.get_page(0, 0)
except AssertionError:
    print("AssertionError raised with 0")

try:
    should_err = server.get_page(2, 'Bob')
except AssertionError:
    print("AssertionError raised when page and/or page_size are not ints")

print(server.get_page(1, 3))
print(server.get_page(3, 2))
print(server.get_page(3000, 100))

bob@dylan:~$ ./1-main.py
AssertionError raised with negative values
AssertionError raised with 0
AssertionError raised when page and/or page_size are not ints
[['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Olivia', '172', '1'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Chloe', '112', '2'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Sophia', '104', '3']]
[['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emily', '99', '4'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Mia', '79', '5']]
[]
bob@dylan:~$
```

**Dépôt :**  
GitHub repository: holbertonschool-web_back_end  
Directory: pagination  
File: 1-simple_pagination.py  

---

### Explications détaillées

#### **Contexte de la tâche**
Cette tâche étend la fonction `index_range` en l'intégrant dans une classe `Server` qui charge et pagine des données à partir d'un fichier CSV. L'objectif est de créer une méthode `get_page` qui retourne les éléments correspondants à une page donnée.

#### **Objectif de la classe `Server`**
La classe `Server` a deux méthodes principales :
1. **`dataset`** : Charge les données du fichier CSV et les met en cache.
2. **`get_page`** : Pagine les données en utilisant la fonction `index_range`.

#### **Méthode `dataset`**
- **Fonctionnalité :**
  - Charge les données du fichier CSV `Popular_Baby_Names.csv`.
  - Ignore la première ligne (en-têtes) et stocke les données dans `self.__dataset`.
  - Met en cache les données pour éviter de recharger le fichier à chaque requête.
- **Syntaxe :**
  ```python
  def dataset(self) -> List[List]:
      if self.__dataset is None:
          with open(self.DATA_FILE) as f:
              reader = csv.reader(f)
              dataset = [row for row in reader]
          self.__dataset = dataset[1:]
      return self.__dataset
  ```

#### **Méthode `get_page`**
- **Fonctionnalité :**
  - Prend deux arguments : `page` (par défaut 1) et `page_size` (par défaut 10).
  - Utilise `index_range` pour calculer les indices de début et de fin.
  - Retourne les éléments correspondants à la page demandée.
  - Si les arguments sont hors limites, retourne une liste vide.
- **Validation :**
  - Utilise `assert` pour vérifier que `page` et `page_size` sont des entiers positifs.
- **Syntaxe :**
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

#### **Exemples concrets**
1. **Page 1, taille de page 3 :**
   - Retourne les 3 premiers éléments.
   - Exemple de sortie :
     ```python
     [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Olivia', '172', '1'],
      ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Chloe', '112', '2'],
      ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Sophia', '104', '3']]
     ```

2. **Page 3, taille de page 2 :**
   - Retourne les éléments 5 et 6.
   - Exemple de sortie :
     ```python
     [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emily', '99', '4'],
      ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Mia', '79', '5']]
     ```

3. **Page 3000, taille de page 100 :**
   - Retourne une liste vide car les indices sont hors limites.

#### **Mots-clés à retenir**
| Terme               | Définition                                                                 |
|---------------------|----------------------------------------------------------------------------|
| **CSV**             | Format de fichier pour stocker des données tabulaires.                     |
| **Assert**          | Instruction pour vérifier une condition (lève une erreur si faux).         |
| **Dataset**         | Ensemble de données chargé en mémoire.                                     |
| **Cache**           | Mécanisme pour stocker des données afin d'éviter des recalculs coûteux.    |

---

### **Résumé**
Cette tâche vous apprend à intégrer une fonction de pagination dans une classe qui charge des données à partir d'un fichier CSV. Vous apprenez également à valider les entrées utilisateur avec `assert` et à gérer les cas limites. Ces compétences sont essentielles pour créer des applications robustes et efficaces.