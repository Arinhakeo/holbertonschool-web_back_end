#!/usr/bin/env python3
"""
Simple helper function for pagination
"""
# Cette fonction est une petite aide pour gérer la pagination.
from typing import Tuple  # On importe Tuple pour indiquer que la fonction renverra un tuple.

def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Retourne un tuple contenant un indice de début et un indice de fin
    en fonction de la page et de la taille des éléments par page.
    """
    # On calcule le premier indice (start_index) basé sur la page actuelle et la taille par page.
    start_index = (page - 1) * page_size
    # L'indice de fin (end_index) correspond au dernier élément de la page.
    end_index = start_index + page_size
    # On retourne un tuple (start_index, end_index).
    return (start_index, end_index)
