# API endpoints for CheckCookie repository


## `getDomains`

This endpoint returns a list of domains that set cookies for the given system. As array elements it adds the components on that the domain sets the cookies. IMPORTANT: The leankoala worker is blocking some tracking integrations. So there will never be, for example, a Google Analytics cookie set.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/{system}/cookies/domains```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload parameters


### SDK

We strongly recommend to use the SDK that are provided.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CheckCookie');
$result = $repository->getDomains($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckCookie')
const result = await repository.getDomains($system)
```

