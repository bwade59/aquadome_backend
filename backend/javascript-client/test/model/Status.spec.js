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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Aquadome);
  }
}(this, function(expect, Aquadome) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Aquadome.Status();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Status', function() {
    it('should create an instance of Status', function() {
      // uncomment below and update the code to test Status
      //var instane = new Aquadome.Status();
      //expect(instance).to.be.a(Aquadome.Status);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Aquadome.Status();
      //expect(instance).to.be();
    });

    it('should have the property pump1 (base name: "pump1")', function() {
      // uncomment below and update the code to test the property pump1
      //var instane = new Aquadome.Status();
      //expect(instance).to.be();
    });

    it('should have the property pump2 (base name: "pump2")', function() {
      // uncomment below and update the code to test the property pump2
      //var instane = new Aquadome.Status();
      //expect(instance).to.be();
    });

    it('should have the property waterHeater (base name: "water_heater")', function() {
      // uncomment below and update the code to test the property waterHeater
      //var instane = new Aquadome.Status();
      //expect(instance).to.be();
    });

    it('should have the property fan (base name: "fan")', function() {
      // uncomment below and update the code to test the property fan
      //var instane = new Aquadome.Status();
      //expect(instance).to.be();
    });

    it('should have the property airTemp (base name: "air_temp")', function() {
      // uncomment below and update the code to test the property airTemp
      //var instane = new Aquadome.Status();
      //expect(instance).to.be();
    });

    it('should have the property airHeater (base name: "air_heater")', function() {
      // uncomment below and update the code to test the property airHeater
      //var instane = new Aquadome.Status();
      //expect(instance).to.be();
    });

    it('should have the property waterTemp (base name: "water_temp")', function() {
      // uncomment below and update the code to test the property waterTemp
      //var instane = new Aquadome.Status();
      //expect(instance).to.be();
    });

    it('should have the property waterPh (base name: "water_ph")', function() {
      // uncomment below and update the code to test the property waterPh
      //var instane = new Aquadome.Status();
      //expect(instance).to.be();
    });

    it('should have the property feeder (base name: "feeder")', function() {
      // uncomment below and update the code to test the property feeder
      //var instane = new Aquadome.Status();
      //expect(instance).to.be();
    });

    it('should have the property lastFeeding (base name: "last_feeding")', function() {
      // uncomment below and update the code to test the property lastFeeding
      //var instane = new Aquadome.Status();
      //expect(instance).to.be();
    });

  });

}));
