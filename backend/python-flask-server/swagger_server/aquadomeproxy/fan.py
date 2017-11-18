#!/usr/bin/python


class Fan:
    def __init__(self):
        self.state = False

    def setfanstate(self, newstate):
        self.state = newstate

    def getfanstate(self):
        return self.state

