# API endpoints for CheckBrokenResource repository


## getBrokenResources

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/{system}/brokenresources```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CheckBrokenResource');
$result = $repository->getBrokenResources($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckBrokenResource')
const result = await repository.getBrokenResources($system)
```

