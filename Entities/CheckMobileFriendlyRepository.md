# API endpoints for `CheckMobileFriendly` repository


## `getResults`

Get the mobile friendly result for the given system. Returns a &quot;skipped&quot; status if the test never ran.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/{system}/mobilefriendly```

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
$repository = $koalityEngineClient->getRepository('CheckMobileFriendly');
$result = $repository->getResults($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckMobileFriendly')
const result = await repository.getResults($system)
```

