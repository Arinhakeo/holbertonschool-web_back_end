#!/usr/bin/env python3
"""Module for basic async syntax - wait_random  & wait_n coroutine"""
import asyncio
import random
from typing import List


async def wait_random(max_delay: int = 10) -> float:
    """Wait for a random delay between 0 """
    """and max_delay and return it."""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay


async def wait_n(n: int, max_delay: int) -> List[float]:
    """ Spawn wait_random n times and return"""
    """and return list of delays in ascending order."""
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    delays = []

    for completed in asyncio.as_completed(tasks):
        result = await completed
        delays.append(result)

    return delays