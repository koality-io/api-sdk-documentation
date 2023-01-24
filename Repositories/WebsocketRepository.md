[back to repository overview](../RepositoryOverviews.md)
# API endpoints for `websocket` repository

## List of all available methods

| Method                                        | Description                                                            |
|:----------------------------------------------|:-----------------------------------------------------------------------|
| [`getRooms`](#getrooms) | Return a websocket server with the room names for the given user. |
| [`getAllRooms`](#getallrooms) | Return all websocket server with the room names. |


## `getRooms`

Return a websocket server with the room names for the given user.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/websockets/rooms```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('websocket');
$result = $repository->getRooms();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('websocket')
const result = await repository.getRooms()
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/websockets/rooms
```


## `getAllRooms`

Return all websocket server with the room names.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/websockets/rooms/all```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('websocket');
$result = $repository->getAllRooms();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('websocket')
const result = await repository.getAllRooms()
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/websockets/rooms/all
```

