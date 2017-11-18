/**
 * Aquadome
 * Control and monitoring of aquaponics system.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/Status'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Status'));
  } else {
    // Browser globals (root is window)
    if (!root.Aquadome) {
      root.Aquadome = {};
    }
    root.Aquadome.StatusApi = factory(root.Aquadome.ApiClient, root.Aquadome.Error, root.Aquadome.Status);
  }
}(this, function(ApiClient, Error, Status) {
  'use strict';

  /**
   * Status service.
   * @module api/StatusApi
   * @version 1.0.0
   */

  /**
   * Constructs a new StatusApi. 
   * @alias module:api/StatusApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the statusGet operation.
     * @callback module:api/StatusApi~statusGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Status>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Status
     * The overall health of the system. 
     * @param {Boolean} pump1 Pump 1 operation status.
     * @param {Boolean} pump2 Pump 2 operation status.
     * @param {Boolean} airHeater Ambient heater operation.
     * @param {Boolean} fan Fan operation.
     * @param {Boolean} waterHeater Water heater operation.
     * @param {Boolean} feeder Feeder operation.
     * @param {module:api/StatusApi~statusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Status>}
     */
    this.statusGet = function(pump1, pump2, airHeater, fan, waterHeater, feeder, callback) {
      var postBody = null;

      // verify the required parameter 'pump1' is set
      if (pump1 === undefined || pump1 === null) {
        throw new Error("Missing the required parameter 'pump1' when calling statusGet");
      }

      // verify the required parameter 'pump2' is set
      if (pump2 === undefined || pump2 === null) {
        throw new Error("Missing the required parameter 'pump2' when calling statusGet");
      }

      // verify the required parameter 'airHeater' is set
      if (airHeater === undefined || airHeater === null) {
        throw new Error("Missing the required parameter 'airHeater' when calling statusGet");
      }

      // verify the required parameter 'fan' is set
      if (fan === undefined || fan === null) {
        throw new Error("Missing the required parameter 'fan' when calling statusGet");
      }

      // verify the required parameter 'waterHeater' is set
      if (waterHeater === undefined || waterHeater === null) {
        throw new Error("Missing the required parameter 'waterHeater' when calling statusGet");
      }

      // verify the required parameter 'feeder' is set
      if (feeder === undefined || feeder === null) {
        throw new Error("Missing the required parameter 'feeder' when calling statusGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'pump1': pump1,
        'pump2': pump2,
        'air_heater': airHeater,
        'fan': fan,
        'water_heater': waterHeater,
        'feeder': feeder
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Status];

      return this.apiClient.callApi(
        '/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));