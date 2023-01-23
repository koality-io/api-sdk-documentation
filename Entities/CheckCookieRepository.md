# API endpoints for CheckCookie repository


## getDomains

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/{system}/cookies/domains```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CheckCookie');
$result = $repository->getDomains($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckCookie')
const result = await repository.getDomains($system)
```

