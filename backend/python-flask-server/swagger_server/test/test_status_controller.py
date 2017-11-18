# coding: utf-8

from __future__ import absolute_import

from swagger_server.models.error import Error
from swagger_server.models.status import Status
from . import BaseTestCase
from six import BytesIO
from flask import json


class TestStatusController(BaseTestCase):
    """ StatusController integration test stubs """

    def test_status_get(self):
        """
        Test case for status_get

        Status
        """
        query_string = [('pump1', true),
                        ('pump2', true),
                        ('air_heater', true),
                        ('fan', true),
                        ('water_heater', true),
                        ('feeder', true)]
        response = self.client.open('/v1/status',
                                    method='GET',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
