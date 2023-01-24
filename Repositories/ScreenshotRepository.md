# API endpoints for `Screenshot` repository

## List of all available methods

| Method                                        | Description                                                            |
|:----------------------------------------------|:-----------------------------------------------------------------------|
| [`getSystemScreenshots`](#getsystemscreenshots) | Return the screenshots for all components in the given project. |
| [`getScreenshot`](#getscreenshot) | Return the screenshots for a single component. |


## `getSystemScreenshots`

Return the screenshots for all components in the given project.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/project/screenshots/{system}```|
| Method   | POST                                      |

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
$repository = $koalityEngineClient->getRepository('Screenshot');
$result = $repository->getSystemScreenshots($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('Screenshot')
const result = await repository.getSystemScreenshots($system)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/project/screenshots/{system}
```


## `getScreenshot`

Return the screenshots for a single component.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/project/screenshot/{system}```|
| Method   | POST                                      |

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
$repository = $koalityEngineClient->getRepository('Screenshot');
$result = $repository->getScreenshot($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('Screenshot')
const result = await repository.getScreenshot($system)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/project/screenshot/{system}
```

