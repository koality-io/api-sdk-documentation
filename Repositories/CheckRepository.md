# API endpoints for `check` repository


## `addByRecipe`



### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/check/checks/cookbook```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| component  | `INTEGER` |  yes        |   |            |
| cookbook  | `INTEGER` |  yes        |   |            |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('check');
$result = $repository->addByRecipe();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('check')
const result = await repository.addByRecipe()
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/check/checks/cookbook
```


## `addByChecklist`



### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/check/checks/{system}/checklist```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| checklist  | `MIXED` |  yes        |   |            |
| clear_before  | `BOOLEAN` |  no        | true  |            |
| activate_checks  | `BOOLEAN` |  no        | false  |            |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('check');
$result = $repository->addByChecklist($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('check')
const result = await repository.addByChecklist($system)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/check/checks/{system}/checklist
```


## `runChecksForSystem`

Run checks defined by tool identifier for all components within this system.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/check/checks/run/{system}/{toolIdentifier}```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system
 - toolIdentifier

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('check');
$result = $repository->runChecksForSystem($system, $toolIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('check')
const result = await repository.runChecksForSystem($system, $toolIdentifier)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/check/checks/run/{system}/{toolIdentifier}
```


## `showCollections`

Return a list of collections for the given project.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/check/collections/{project}/{toolIdentifier}```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - toolIdentifier

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| group  | `STRING` |  no        |   | The collection group. It is used to specify the collections.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('check');
$result = $repository->showCollections($project, $toolIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('check')
const result = await repository.showCollections($project, $toolIdentifier)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/check/collections/{project}/{toolIdentifier}
```


## `showActiveCollections`

Return a list of active collections for the given system.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/check/collections/system/active/{system}/{toolIdentifier}```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system
 - toolIdentifier

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| group  | `STRING` |  no        |   | The collection group. It is used to specify the collections.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('check');
$result = $repository->showActiveCollections($system, $toolIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('check')
const result = await repository.showActiveCollections($system, $toolIdentifier)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/check/collections/system/active/{system}/{toolIdentifier}
```


## `updateCollections`

Update the collections. WARNING: will delete the current collection connections and create new.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/check/collections/system/{system}```|
| Method   | PUT                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| collections  | `LIST` |  no        |   |            |
| group  | `STRING` |  no        |   | The collection group. It is used to specify the collections.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('check');
$result = $repository->updateCollections($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('check')
const result = await repository.updateCollections($system)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X PUT https://api.cluster1.koalityengine.com/check/collections/system/{system}
```

