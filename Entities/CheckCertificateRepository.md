# API endpoints for CheckCertificate repository


## getExpirationResults

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/{system}/certificate```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CheckCertificate');
$result = $repository->getExpirationResults($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckCertificate')
const result = await repository.getExpirationResults($system)
```

