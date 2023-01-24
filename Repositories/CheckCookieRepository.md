# API endpoints for `CheckCookie` repository

## List of all available methods

| Method                                        | Description                                                            |
|:----------------------------------------------|:-----------------------------------------------------------------------|
| [`getDomains`](#getdomains) | This endpoint returns a list of domains that set cookies for the given system. As array elements it adds the components on that the domain sets the cookies. IMPORTANT: The leankoala worker is blocking some tracking integrations. So there will never be, for example, a Google Analytics cookie set. |


## `getDomains`

This endpoint returns a list of domains that set cookies for the given system. As array elements it adds the components on that the domain sets the cookies. IMPORTANT: The leankoala worker is blocking some tracking integrations. So there will never be, for example, a Google Analytics cookie set.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/check/checks/{system}/cookies/domains```|
| Method   | GET                                      |

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
$repository = $koalityEngineClient->getRepository('CheckCookie');
$result = $repository->getDomains($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckCookie')
const result = await repository.getDomains($system)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/check/checks/{system}/cookies/domains
```

