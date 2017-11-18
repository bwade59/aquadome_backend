#!/usr/bin/python


class WaterPump:
    def __init__(self):
        self.state = False

    def setstate(self, newstate):
        self.state = newstate

    def getstate(self):
        return self.state
