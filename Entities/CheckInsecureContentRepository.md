# API endpoints for `CheckInsecureContent` repository


## `getInsecureElements`

Return all insecure elements for all components of a system.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/{system}/insecure```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CheckInsecureContent');
$result = $repository->getInsecureElements($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckInsecureContent')
const result = await repository.getInsecureElements($system)
```

