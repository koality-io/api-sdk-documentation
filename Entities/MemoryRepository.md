# API endpoints for memory repository


## set

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/memory/{objectType}/{objectId}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - objectType
 - objectId

#### Payload
- key - 
- value - 

### SDK

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


## getAll

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/memory/{objectType}/{objectId}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - objectType
 - objectId

#### Payload

### SDK

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

