# API endpoints for CheckLighthouse repository


## getResults

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/{system}/lighthouse/results/{category}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system
 - category

#### Payload
- targetGroup - The target group. It can be either an integer or a string.
- use_cache - Use the cache for json document fetch

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CheckLighthouse');
$result = $repository->getResults($system, $category);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckLighthouse')
const result = await repository.getResults($system, $category)
```

