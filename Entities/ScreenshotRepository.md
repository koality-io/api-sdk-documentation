# API endpoints for Screenshot repository


## getSystemScreenshots

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/screenshots/{system}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('Screenshot');
$result = $repository->getSystemScreenshots($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('Screenshot')
const result = await repository.getSystemScreenshots($system)
```


## getScreenshot

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/screenshot/{system}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('Screenshot');
$result = $repository->getScreenshot($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('Screenshot')
const result = await repository.getScreenshot($system)
```

