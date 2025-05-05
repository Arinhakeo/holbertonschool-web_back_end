#!/usr/bin/env python3
""" this module contains a function """
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """ function that returns a random float  """
    return [x async for x in async_generator()]
