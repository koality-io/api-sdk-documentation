# API endpoints for CheckFileSize repository


## getResults

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/{system}/performance/big```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CheckFileSize');
$result = $repository->getResults($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckFileSize')
const result = await repository.getResults($system)
```


## ignorePattern

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/{system}/siteinfo/ignore```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload
- patterns - List of URLs (strings) that will be excluded from the dead link crawl

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CheckFileSize');
$result = $repository->ignorePattern($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckFileSize')
const result = await repository.ignorePattern($system)
```

