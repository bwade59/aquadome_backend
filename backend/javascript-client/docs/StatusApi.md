# Aquadome.StatusApi

All URIs are relative to *https://www.diamondtech.org/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statusGet**](StatusApi.md#statusGet) | **GET** /status | Status


<a name="statusGet"></a>
# **statusGet**
> [Status] statusGet(pump1, pump2, airHeater, fan, waterHeater, feeder)

Status

The overall health of the system. 

### Example
```javascript
var Aquadome = require('aquadome');

var apiInstance = new Aquadome.StatusApi();

var pump1 = true; // Boolean | Pump 1 operation status.

var pump2 = true; // Boolean | Pump 2 operation status.

var airHeater = true; // Boolean | Ambient heater operation.

var fan = true; // Boolean | Fan operation.

var waterHeater = true; // Boolean | Water heater operation.

var feeder = true; // Boolean | Feeder operation.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.statusGet(pump1, pump2, airHeater, fan, waterHeater, feeder, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pump1** | **Boolean**| Pump 1 operation status. | 
 **pump2** | **Boolean**| Pump 2 operation status. | 
 **airHeater** | **Boolean**| Ambient heater operation. | 
 **fan** | **Boolean**| Fan operation. | 
 **waterHeater** | **Boolean**| Water heater operation. | 
 **feeder** | **Boolean**| Feeder operation. | 

### Return type

[**[Status]**](Status.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

