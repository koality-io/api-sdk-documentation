[back to repository overview](../RepositoryOverviews.md)
# API endpoints for `CheckDeadLinks` repository

## List of all available methods

| Method                                        | Description                                                            |
|:----------------------------------------------|:-----------------------------------------------------------------------|
| [`getResults`](#getresults) | Return a list of dead links for every component attached to the given system. |
| [`getResultsByCompany`](#getresultsbycompany) | Return a list of dead links for every component in every project owned by the company. |
| [`getConfiguration`](#getconfiguration) | Return the dead link check configuration for the given system. |
| [`ignorePattern`](#ignorepattern) | Add a new ignore pattern to the configuration. |
| [`unignorePattern`](#unignorepattern) | Remove an ignore pattern from the configuration. |
| [`getBlockedPatterns`](#getblockedpatterns) | Return a list patterns that should be blocked in the dead link checker. |


## `getResults`

Return a list of dead links for every component attached to the given system.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/check/checks/{system}/deadlinks```|
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
$repository = $koalityEngineClient->getRepository('CheckDeadLinks');
$result = $repository->getResults($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckDeadLinks')
const result = await repository.getResults($system)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/check/checks/{system}/deadlinks
```

[top](#list-of-all-available-methods)


## `getResultsByCompany`

Return a list of dead links for every component in every project owned by the company.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/check/checks/company/{company}/deadlinks```|
| Method   | GET                                      |

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
$repository = $koalityEngineClient->getRepository('CheckDeadLinks');
$result = $repository->getResultsByCompany($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckDeadLinks')
const result = await repository.getResultsByCompany($company)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/check/checks/company/{company}/deadlinks
```

[top](#list-of-all-available-methods)


## `getConfiguration`

Return the dead link check configuration for the given system.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/check/checks/{system}/deadlinks/config```|
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
$repository = $koalityEngineClient->getRepository('CheckDeadLinks');
$result = $repository->getConfiguration($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckDeadLinks')
const result = await repository.getConfiguration($system)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/check/checks/{system}/deadlinks/config
```

[top](#list-of-all-available-methods)


## `ignorePattern`

Add a new ignore pattern to the configuration.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/check/checks/{system}/deadlinks/ignore```|
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
$repository = $koalityEngineClient->getRepository('CheckDeadLinks');
$result = $repository->ignorePattern($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckDeadLinks')
const result = await repository.ignorePattern($system)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/check/checks/{system}/deadlinks/ignore
```

[top](#list-of-all-available-methods)


## `unignorePattern`

Remove an ignore pattern from the configuration.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/check/checks/{system}/deadlinks/unignore```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| pattern_id  | `INTEGER` |  yes        |   | Single URL that will not be excluded anymore in the dead link crawl           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CheckDeadLinks');
$result = $repository->unignorePattern($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckDeadLinks')
const result = await repository.unignorePattern($system)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/check/checks/{system}/deadlinks/unignore
```

[top](#list-of-all-available-methods)


## `getBlockedPatterns`

Return a list patterns that should be blocked in the dead link checker.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/check/checks/deadlinks/blocked```|
| Method   | GET                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CheckDeadLinks');
$result = $repository->getBlockedPatterns();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckDeadLinks')
const result = await repository.getBlockedPatterns()
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/check/checks/deadlinks/blocked
```

[top](#list-of-all-available-methods)

