#!/usr/bin/env python3
""" this mofule contain a coroutine function """
import asyncio
from typing import List
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """ a coroutine function using gather """
    start = time.time()
    tasks = [async_comprehension() for _ in range(4)]
    await asyncio.gather(*tasks)
    end = time.time()
    time_total = end - start
    return time_total
