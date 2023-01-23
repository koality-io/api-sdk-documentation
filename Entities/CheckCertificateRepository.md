# API endpoints for `CheckCertificate` repository


## `getExpirationResults`



### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/{system}/certificate```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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

