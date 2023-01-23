# API endpoints for websocket repository


## getRooms

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/websockets/rooms```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload

### SDK

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


## getAllRooms

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/websockets/rooms/all```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload

### SDK

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

