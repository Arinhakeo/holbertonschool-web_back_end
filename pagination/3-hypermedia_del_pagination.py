#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """ this function retrieves sorted data with index  """
        assert isinstance(index, int) and index > 0
        assert isinstance(page_size, int) and page_size > 0

        datas = self.indexed_dataset()
        data_keys = list(datas.keys())
        total_keys = len(data_keys)

        assert index < total_keys

        data = []
        next_index = index
        count = 0

        while count < page_size and next_index < total_keys:
            if next_index in datas:
                data.append(datas[next_index])
                count += 1
            next_index += 1

        return {
            'index': index,
            'data': data,
            'page_size': len(data),
            'next_index': next_index
        }
