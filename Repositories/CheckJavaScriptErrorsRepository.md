[back to repository overview](../RepositoryOverviews.md)
# API endpoints for `CheckJavaScriptErrors` repository

## List of all available methods

| Method                                        | Description                                                            |
|:----------------------------------------------|:-----------------------------------------------------------------------|
| [`getResults`](#getresults) |  |


## `getResults`



### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/check/checks/{system}/jserrors```|
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
$repository = $koalityEngineClient->getRepository('CheckJavaScriptErrors');
$result = $repository->getResults($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckJavaScriptErrors')
const result = await repository.getResults($system)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/check/checks/{system}/jserrors
```

