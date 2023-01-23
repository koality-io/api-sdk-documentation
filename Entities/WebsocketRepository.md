# API endpoints for websocket repository


## `getRooms`

Return a websocket server with the room names for the given user.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/websockets/rooms```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters


### SDK

We strongly recommend to use the SDK that are provided.

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


## `getAllRooms`

Return all websocket server with the room names.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/websockets/rooms/all```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters


### SDK

We strongly recommend to use the SDK that are provided.

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

