# API endpoints for CheckA11y repository


## getResults

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/{system}/a11y/results```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CheckA11y');
$result = $repository->getResults($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckA11y')
const result = await repository.getResults($system)
```

