# API endpoints for CheckSitemap repository


## getResults

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/{system}/sitemap```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CheckSitemap');
$result = $repository->getResults($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckSitemap')
const result = await repository.getResults($system)
```

