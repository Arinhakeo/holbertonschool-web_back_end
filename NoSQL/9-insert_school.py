#!/usr/bin/env python3
""" this module contains a function """


def insert_school(mongo_collection, **kwargs):
    """  inserts a new document in a collection based on kwargs: """
    x = mongo_collection.insert_one(kwargs)
    return x.inserted_id
