import connexion
from swagger_server.models.error import Error
from swagger_server.models.status import Status
from datetime import date, datetime
from typing import List, Dict
from six import iteritems
from ..util import deserialize_date, deserialize_datetime
from aquadomeproxy import AquadomeProxy
from pymongo import MongoClient


def status_get(pump1, pump2, air_heater, fan, water_heater, feeder):
    """
    Status
    The overall health of the system. 
    :param pump1: Pump 1 operation status.
    :type pump1: bool
    :param pump2: Pump 2 operation status.
    :type pump2: bool
    :param air_heater: Ambient heater operation.
    :type air_heater: bool
    :param fan: Fan operation.
    :type fan: bool
    :param water_heater: Water heater operation.
    :type water_heater: bool
    :param feeder: Feeder operation.
    :type feeder: bool

    :rtype: List[Status]
    """
    return 'do some magic!'
