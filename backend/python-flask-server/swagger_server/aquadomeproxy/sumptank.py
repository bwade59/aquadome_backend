#!/usr/bin/python

from waterheater import WaterHeater
from waterpump import WaterPump


class SumpTank:
    def __init__(self):
        self.waterheater = WaterHeater()
        self.pump1 = WaterPump()
        self.pump2 = WaterPump()
