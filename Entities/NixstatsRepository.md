# API endpoints for Nixstats repository


## createWebsiteMonitor

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/nixtstats/{company}/monitor/website```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload
- url - 

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('Nixstats');
$result = $repository->createWebsiteMonitor($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('Nixstats')
const result = await repository.createWebsiteMonitor($company)
```

