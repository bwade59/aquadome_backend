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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Aquadome) {
      root.Aquadome = {};
    }
    root.Aquadome.Status = factory(root.Aquadome.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Status model module.
   * @module model/Status
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Status</code>.
   * @alias module:model/Status
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>Status</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Status} obj Optional instance to populate.
   * @return {module:model/Status} The populated <code>Status</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('pump1')) {
        obj['pump1'] = ApiClient.convertToType(data['pump1'], 'Boolean');
      }
      if (data.hasOwnProperty('pump2')) {
        obj['pump2'] = ApiClient.convertToType(data['pump2'], 'Boolean');
      }
      if (data.hasOwnProperty('water_heater')) {
        obj['water_heater'] = ApiClient.convertToType(data['water_heater'], 'Boolean');
      }
      if (data.hasOwnProperty('fan')) {
        obj['fan'] = ApiClient.convertToType(data['fan'], 'Boolean');
      }
      if (data.hasOwnProperty('air_temp')) {
        obj['air_temp'] = ApiClient.convertToType(data['air_temp'], 'Number');
      }
      if (data.hasOwnProperty('air_heater')) {
        obj['air_heater'] = ApiClient.convertToType(data['air_heater'], 'Boolean');
      }
      if (data.hasOwnProperty('water_temp')) {
        obj['water_temp'] = ApiClient.convertToType(data['water_temp'], 'Number');
      }
      if (data.hasOwnProperty('water_ph')) {
        obj['water_ph'] = ApiClient.convertToType(data['water_ph'], 'Number');
      }
      if (data.hasOwnProperty('feeder')) {
        obj['feeder'] = ApiClient.convertToType(data['feeder'], 'Boolean');
      }
      if (data.hasOwnProperty('last_feeding')) {
        obj['last_feeding'] = ApiClient.convertToType(data['last_feeding'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Boolean} pump1
   */
  exports.prototype['pump1'] = undefined;
  /**
   * @member {Boolean} pump2
   */
  exports.prototype['pump2'] = undefined;
  /**
   * @member {Boolean} water_heater
   */
  exports.prototype['water_heater'] = undefined;
  /**
   * @member {Boolean} fan
   */
  exports.prototype['fan'] = undefined;
  /**
   * @member {Number} air_temp
   */
  exports.prototype['air_temp'] = undefined;
  /**
   * @member {Boolean} air_heater
   */
  exports.prototype['air_heater'] = undefined;
  /**
   * @member {Number} water_temp
   */
  exports.prototype['water_temp'] = undefined;
  /**
   * @member {Number} water_ph
   */
  exports.prototype['water_ph'] = undefined;
  /**
   * @member {Boolean} feeder
   */
  exports.prototype['feeder'] = undefined;
  /**
   * @member {String} last_feeding
   */
  exports.prototype['last_feeding'] = undefined;



  return exports;
}));


