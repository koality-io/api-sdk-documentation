# API endpoints for metric repository


## findBySystem

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/metric/eventidentifier/{system}/search```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload
- tool - A single tool id or the identifier of a tool.
- tools - A list of tool ids. For every tool there will be a metric array returned.
- metric_type - The engine stores to kinds of metrics. Status and Value. The status is the ratio between successful checks and failed in percent, the value is the average value of the checks result.
- filter_trailing_nulls - Remove null values from the metric if they are at the beginning. Trailing nulls are used of the metric does not provide values for a given time spam.
- min_value - Replace all values that are smaller than the min value with the min value.

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('metric');
$result = $repository->findBySystem($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('metric')
const result = await repository.findBySystem($system)
```

