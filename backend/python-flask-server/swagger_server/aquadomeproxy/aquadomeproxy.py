#!/usr/bin/python

from airheater import AirHeater
from fishtank import FishTank
from sumptank import SumpTank
from growbed import GrowBed
from pymongo import MongoClient


class AquadomeProxy:
    def _init_(self):
        self.airheater = AirHeater()
        self.fishtank = FishTank()
        self.sumptank = SumpTank()
        self.growbed = GrowBed()
        self.dbclient = MongoClient()

    def setstatus(self, status):
        pass

    def getstatus(self):
        pass
