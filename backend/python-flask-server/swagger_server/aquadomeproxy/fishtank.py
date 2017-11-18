#!/usr/bin/python

from feeder import Feeder


class FishTank:
    def __init__(self):
        self.ph = 0.0
        self.temp = 0.0
        self.feeder = Feeder()

    def feed(self, duration):
        self.feeder.feed(duration)

    def settemp(self, newtemp):
        self.temp = newtemp

    def gettemp(self):
        return self.temp

    def setph(self, newph):
        self.ph = newph

    def getph(self):
        return self.ph


