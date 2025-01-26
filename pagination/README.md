# Pagination Project

## Original File Structure
```
pagination/
│
├── 0-simple_helper_function.py
├── 1-simple_pagination.py
├── 2-hypermedia_pagination.py
├── 3-hypermedia_del_pagination.py
└── README.md
```

## Task 0: Simple helper function
### File: 0-simple_helper_function.py
```python
#!/usr/bin/env python3
"""
Simple helper function for pagination
"""
from typing import Tuple

def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Return a tuple of size two containing a start index and an end index
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
```

**Synthèse détaillée:**
- **Objectif**: Créer une fonction qui calcule les indices de pagination
- **Paramètres**:
  - `page`: Le numéro de la page (commence à 1)
  - `page_size`: Nombre d'éléments par page
- **Retour**: Tuple (start_index, end_index)
- **Formule**:
  - start_index = (page - 1) * page_size
  - end_index = start_index + page_size
- **Exemple**: 
  - Pour page=3, page_size=15:
  - start_index = (3-1) * 15 = 30
  - end_index = 30 + 15 = 45

## Task 1: Simple pagination
### File: 1-simple_pagination.py
```python
#!/usr/bin/env python3
"""
Simple pagination
"""
import csv
import math
from typing import List, Tuple

def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Return a tuple of size two containing a start index and an end index
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)

class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Return the appropriate page of the dataset
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        
        start, end = index_range(page, page_size)
        dataset = self.dataset()
        
        if start >= len(dataset):
            return []
            
        return dataset[start:end]
```

**Synthèse détaillée:**
- **Objectif**: Implémenter une pagination simple pour un fichier CSV
- **Composants clés**:
  1. Cache du dataset dans `__dataset`
  2. Vérifications avec assert
  3. Utilisation de la fonction index_range
  4. Gestion des cas hors limites
- **Méthodes**:
  - `dataset()`: charge et met en cache le fichier CSV
  - `get_page()`: retourne la page demandée
- **Validation**:
  - Page et page_size doivent être des entiers positifs
  - Retourne une liste vide si hors limites
- **Utilisation pratique**:
  - Lecture optimisée avec cache
  - Gestion mémoire efficace


#!/usr/bin/env python3
"""
Simple helper function for pagination
"""
from typing import Tuple

def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calculate start and end indexes for pagination
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)