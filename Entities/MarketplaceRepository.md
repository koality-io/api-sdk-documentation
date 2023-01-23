# API endpoints for `marketplace` repository


## `getActiveProviderFeatures`

Return all features that are active for the given provider.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/features/provider/{providerIdentifier}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - providerIdentifier

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getActiveProviderFeatures($providerIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getActiveProviderFeatures($providerIdentifier)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/marketplace/features/provider/{providerIdentifier}
```


## `getActiveProjectFeatures`

Return all features that are active for the given project.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/features/project/{project}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getActiveProjectFeatures($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getActiveProjectFeatures($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/marketplace/features/project/{project}
```


## `getSystemPluginStatus`

Return all the status of the health checks of the systems components.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/plugins/incidents/system/{system}```

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
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getSystemPluginStatus($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getSystemPluginStatus($system)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/marketplace/plugins/incidents/system/{system}
```


## `getUserPluginStatus`

Return all the status of the health checks of the systems components.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/plugins/incidents/user/{user}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getUserPluginStatus($user);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getUserPluginStatus($user)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/marketplace/plugins/incidents/user/{user}
```


## `getComponents`

Return all component suggestions that are enabled by the active features.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/features/components/{system}/{featureIdentifier}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system
 - featureIdentifier

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getComponents($system, $featureIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getComponents($system, $featureIdentifier)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/marketplace/features/components/{system}/{featureIdentifier}
```


## `setComponent`

Set a component using a given suggestion as template.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/features/components/{system}/{suggestionIdentifier}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system
 - suggestionIdentifier

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| url  | `STRING` |  yes        |   |            |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->setComponent($system, $suggestionIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.setComponent($system, $suggestionIdentifier)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/marketplace/features/components/{system}/{suggestionIdentifier}
```


## `getFeatures`

Return all features that can be activated for the given company and provider.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/marketplace/features/{providerIdentifier}/{company}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - providerIdentifier
 - company

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getFeatures($providerIdentifier, $company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getFeatures($providerIdentifier, $company)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/marketplace/marketplace/features/{providerIdentifier}/{company}
```


## `getAvailableFeatures`

Return all features that are activated for the given project.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/marketplace/feature/available/{project}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| status  | `INTEGER` |  no        | 400  |            |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getAvailableFeatures($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getAvailableFeatures($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/marketplace/marketplace/feature/available/{project}
```


## `getAllFeatures`

Return all features that exists.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/marketplace/feature/all```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getAllFeatures();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getAllFeatures()
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/marketplace/marketplace/feature/all
```


## `getFavourites`

Return a list of features that where marked as favourites.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/marketplace/favourites```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getFavourites();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getFavourites()
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/marketplace/marketplace/favourites
```


## `getActiveFeatures`

Return all features that are activated for the given project.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/marketplace/feature/active/{project}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getActiveFeatures($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getActiveFeatures($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/marketplace/marketplace/feature/active/{project}
```


## `activateFeature`

Activate the given feature for the given projects.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/marketplace/feature/activate/{company}/{featureIdentifier}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company
 - featureIdentifier

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| projects  | `LIST` |  yes        |   |            |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->activateFeature($company, $featureIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.activateFeature($company, $featureIdentifier)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/marketplace/marketplace/feature/activate/{company}/{featureIdentifier}
```


## `deactivateFeature`

Deactivate the given feature for the given projects.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/marketplace/feature/deactivate/{company}/{featureIdentifier}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company
 - featureIdentifier

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| projects  | `LIST` |  yes        |   |            |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->deactivateFeature($company, $featureIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.deactivateFeature($company, $featureIdentifier)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/marketplace/marketplace/feature/deactivate/{company}/{featureIdentifier}
```


## `getBookingLog`

Show the booking logs for the company.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/log/company/{company}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getBookingLog($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getBookingLog($company)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/marketplace/log/company/{company}
```


## `restProxy`

Proxy a REST request 

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/proxy/{secret}/{url}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - secret
 - url

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->restProxy($secret, $url);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.restProxy($secret, $url)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/marketplace/proxy/{secret}/{url}
```


## `getHealthStatus`

Return all the status of the health checks of the systems components.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/features/status/{system}/{featureIdentifier}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system
 - featureIdentifier

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| from  | `STRING` |  no        | -1day  |            |
| time  | `STRING` |  no        | 1h  |            |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getHealthStatus($system, $featureIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getHealthStatus($system, $featureIdentifier)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/marketplace/features/status/{system}/{featureIdentifier}
```

