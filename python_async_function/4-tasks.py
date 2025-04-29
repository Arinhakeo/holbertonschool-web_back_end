#!/usr/bin/env python3
"""Module for task_wait_n - task_wait_n"""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """ Spawn task_wait_random n times and return"""
    """ and return list of delays in ascending order."""
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = []

    for completed in asyncio.as_completed(tasks):
        result = await completed
        delays.append(result)

    return delays