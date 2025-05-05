#!/usr/bin/env python3
""" this module contains a function index_range """
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple:
    """ function to return page indexs start and end """
    x = (page - 1) * page_size
    y = page * page_size
    return (x, y)
