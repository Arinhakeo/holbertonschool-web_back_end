#!/usr/bin/env python3
""" this module contains a function  coroutine"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """ async function coroutine random float return """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
