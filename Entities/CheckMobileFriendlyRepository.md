# API endpoints for CheckMobileFriendly repository


## getResults

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/{system}/mobilefriendly```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CheckMobileFriendly');
$result = $repository->getResults($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckMobileFriendly')
const result = await repository.getResults($system)
```

