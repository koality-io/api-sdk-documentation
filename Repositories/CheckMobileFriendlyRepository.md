[back to repository overview](../RepositoryOverviews.md)
# API endpoints for `CheckMobileFriendly` repository

## List of all available methods

| Method                                        | Description                                                            |
|:----------------------------------------------|:-----------------------------------------------------------------------|
| [`getResults`](#getresults) | Get the mobile friendly result for the given system. Returns a &quot;skipped&quot; status if the test never ran. |


## `getResults`

Get the mobile friendly result for the given system. Returns a &quot;skipped&quot; status if the test never ran.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/check/checks/{system}/mobilefriendly```|
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
$repository = $koalityEngineClient->getRepository('CheckMobileFriendly');
$result = $repository->getResults($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckMobileFriendly')
const result = await repository.getResults($system)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/check/checks/{system}/mobilefriendly
```

