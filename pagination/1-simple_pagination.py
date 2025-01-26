#!/usr/bin/env python3
"""
Pagination simple pour des données sous forme de tableau.
"""
import csv
import math
from typing import List, Tuple

def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Retourne un tuple contenant l'indice de début et de fin pour paginer les données.
    
    Arguments :
        - page (int) : le numéro de la page (commence à 1).
        - page_size (int) : le nombre d'éléments par page.

    Retour :
        - Tuple[int, int] : (start_index, end_index), les indices de début et de fin.
    """
    start_index = (page - 1) * page_size  # Calcul de l'indice de début.
    end_index = start_index + page_size  # Calcul de l'indice de fin.
    return (start_index, end_index)

class Server:
    """
    Classe Server permettant de paginer une base de données contenant les noms populaires de bébés.
    """
    DATA_FILE = "Popular_Baby_Names.csv"  # Fichier contenant les données.

    def __init__(self):
        """
        Initialisation de la classe Server.
        - self.__dataset : attribut privé pour stocker les données en cache.
        """
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        Retourne les données mises en cache (les charge à partir du fichier si nécessaire).

        Retour :
            - List[List] : une liste de listes, chaque sous-liste représentant une ligne du fichier.
        """
        if self.__dataset is None:  # Si les données ne sont pas encore chargées...
            with open(self.DATA_FILE) as f:  # Ouvre le fichier de données.
                reader = csv.reader(f)  # Lit le fichier CSV.
                dataset = [row for row in reader]  # Stocke toutes les lignes dans une liste.
            self.__dataset = dataset[1:]  # Ignore l'en-tête (première ligne).

        return self.__dataset  # Retourne les données mises en cache.

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Retourne une page de données en fonction du numéro de page et de la taille des pages.

        Arguments :
            - page (int) : le numéro de la page (à partir de 1).
            - page_size (int) : le nombre d'éléments par page.

        Retour :
            - List[List] : les données correspondant à la page demandée.
        """
        # Vérifications des entrées (doivent être des entiers positifs).
        assert isinstance(page, int) and page > 0, "Le numéro de page doit être un entier positif."
        assert isinstance(page_size, int) and page_size > 0, "La taille des pages doit être un entier positif."

        # Calcul des indices de début et de fin.
        start, end = index_range(page, page_size)
        dataset = self.dataset()  # Récupération des données depuis le cache.

        # Si l'indice de début est en dehors des données, retourne une liste vide.
        if start >= len(dataset):
            return []

        # Retourne la portion de données correspondant aux indices calculés.
        return dataset[start:end]
