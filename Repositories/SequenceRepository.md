[back to repository overview](../RepositoryOverviews.md)
# API endpoints for `sequence` repository

## List of all available methods

| Method                                        | Description                                                            |
|:----------------------------------------------|:-----------------------------------------------------------------------|
| [`getCommands`](#getcommands) | Get a list of possible commands |
| [`getSequences`](#getsequences) | Get a list of possible commands |
| [`createSequence`](#createsequence) | Create a new sequence. |
| [`updateSequence`](#updatesequence) | Update an existing sequence |
| [`activateSequence`](#activatesequence) | Activate an existing sequence. |
| [`deactivateSequence`](#deactivatesequence) | Deactivate an existing sequence. |
| [`getRecentRuns`](#getrecentruns) | Return a list of recent runs. |


## `getCommands`

Get a list of possible commands

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/sequences/{project}/commands```|
| Method   | GET                                      |

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
$repository = $koalityEngineClient->getRepository('sequence');
$result = $repository->getCommands($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('sequence')
const result = await repository.getCommands($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/sequences/{project}/commands
```

[top](#list-of-all-available-methods)


## `getSequences`

Get a list of possible commands

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/sequences/{project}/sequences```|
| Method   | GET                                      |

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
$repository = $koalityEngineClient->getRepository('sequence');
$result = $repository->getSequences($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('sequence')
const result = await repository.getSequences($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/sequences/{project}/sequences
```

[top](#list-of-all-available-methods)


## `createSequence`

Create a new sequence.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/sequences/{project}/sequence```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| name  | `STRING` |  yes        |   | The human readable name of the sequence.           |
| startUrl  | `STRING` |  yes        |   | The url the sequence starts at.           |
| steps  | `LIST` |  no        |   | List of steps of the sequence.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('sequence');
$result = $repository->createSequence($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('sequence')
const result = await repository.createSequence($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/sequences/{project}/sequence
```

[top](#list-of-all-available-methods)


## `updateSequence`

Update an existing sequence

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/sequences/{project}/sequence```|
| Method   | PUT                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| name  | `STRING` |  no        |   | The human readable name of the sequence.           |
| startUrl  | `STRING` |  no        |   | The url the sequence starts at.           |
| steps  | `LIST` |  no        |   | List of steps of the sequence.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('sequence');
$result = $repository->updateSequence($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('sequence')
const result = await repository.updateSequence($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X PUT https://api.cluster1.koalityengine.com/sequences/{project}/sequence
```

[top](#list-of-all-available-methods)


## `activateSequence`

Activate an existing sequence.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/sequences/{sequence}/activate```|
| Method   | PUT                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - sequence

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('sequence');
$result = $repository->activateSequence($sequence);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('sequence')
const result = await repository.activateSequence($sequence)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X PUT https://api.cluster1.koalityengine.com/sequences/{sequence}/activate
```

[top](#list-of-all-available-methods)


## `deactivateSequence`

Deactivate an existing sequence.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/sequences/{sequence}/deactivate```|
| Method   | PUT                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - sequence

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('sequence');
$result = $repository->deactivateSequence($sequence);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('sequence')
const result = await repository.deactivateSequence($sequence)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X PUT https://api.cluster1.koalityengine.com/sequences/{sequence}/deactivate
```

[top](#list-of-all-available-methods)


## `getRecentRuns`

Return a list of recent runs.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/sequences/{sequence}/recent```|
| Method   | GET                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - sequence

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('sequence');
$result = $repository->getRecentRuns($sequence);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('sequence')
const result = await repository.getRecentRuns($sequence)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/sequences/{sequence}/recent
```

[top](#list-of-all-available-methods)

