# API endpoints for `CustomerHaendlerbundMetric` repository

## List of all available methods

| Method                                        | Description                                                            |
|:----------------------------------------------|:-----------------------------------------------------------------------|
| [`findBySystem`](#findbysystem) | Search for the metrics for all eventIdentifiers in the given projects that are defined by the given tool. |


## `findBySystem`

Search for the metrics for all eventIdentifiers in the given projects that are defined by the given tool.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/customers/haendlerbund/metrics/{system}```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| tool  | `MIXED` |  no        |   | A single tool id or the identifier of a tool.           |
| tools  | `LIST` |  no        |   | A list of tool ids. For every tool there will be a metric array returned.           |
| metric_type  | `MIXED` |  no        | value  | The engine stores to kinds of metrics. Status and Value. The status is the ratio between successful checks and failed in percent, the value is the average value of the checks result.           |
| filter_trailing_nulls  | `BOOLEAN` |  no        | true  | Remove null values from the metric if they are at the beginning. Trailing nulls are used of the metric does not provide values for a given time spam.           |
| min_value  | `INTEGER` |  no        |   | Replace all values that are smaller than the min value with the min value.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CustomerHaendlerbundMetric');
$result = $repository->findBySystem($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CustomerHaendlerbundMetric')
const result = await repository.findBySystem($system)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/customers/haendlerbund/metrics/{system}
```

