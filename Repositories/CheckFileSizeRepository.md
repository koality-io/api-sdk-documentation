# API endpoints for `CheckFileSize` repository

## Methods

| Method                                        | Description                                                            |
|:----------------------------------------------|:-----------------------------------------------------------------------|
| [`getResults`](#getresults) |  |
| [`ignorePattern`](#ignorepattern) | Add a new ignore pattern to the configuration. |


## `getResults`



### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/check/checks/{system}/performance/big```|
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
$repository = $koalityEngineClient->getRepository('CheckFileSize');
$result = $repository->getResults($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckFileSize')
const result = await repository.getResults($system)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/check/checks/{system}/performance/big
```


## `ignorePattern`

Add a new ignore pattern to the configuration.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/check/checks/{system}/siteinfo/ignore```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| patterns  | `LIST` |  yes        |   | List of URLs (strings) that will be excluded from the dead link crawl           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/check/checks/{system}/siteinfo/ignore
```

