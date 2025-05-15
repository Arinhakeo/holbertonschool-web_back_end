#!/usr/bin/env python3
""" this module contains """
from pymongo import MongoClient
import pymongo


def list_all(mongo_collection):
    """ this functio, lists all documents """
    return list(mongo_collection.find())
