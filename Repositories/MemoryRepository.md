# API endpoints for `memory` repository

## Methods

| Method                                        | Description                                                            |
|:----------------------------------------------|:-----------------------------------------------------------------------|
| [`set`](#set) |  |
| [`getAll`](#getall) |  |


## `set`



### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/memory/{objectType}/{objectId}```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - objectType
 - objectId

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| key  | `STRING` |  yes        |   |            |
| value  | `STRING` |  yes        |   |            |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('memory');
$result = $repository->set($objectType, $objectId);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('memory')
const result = await repository.set($objectType, $objectId)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/memory/{objectType}/{objectId}
```


## `getAll`



### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/memory/{objectType}/{objectId}```|
| Method   | GET                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - objectType
 - objectId

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('memory');
$result = $repository->getAll($objectType, $objectId);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('memory')
const result = await repository.getAll($objectType, $objectId)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/memory/{objectType}/{objectId}
```

