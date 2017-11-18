#!/usr/bin/python

from fan import Fan


class AirHeater:
    def __init__(self):
        self.fan = Fan()

    def setheatstate(self, newstate):
        self.fan.setfanstate(newstate)

    def getheatstate(self):
        return self.fan.getfanstate()
