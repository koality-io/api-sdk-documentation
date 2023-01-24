# API endpoints for `AlertingPolicy` repository

## List of all available methods

| Method                                        | Description                                                            |
|:----------------------------------------------|:-----------------------------------------------------------------------|
| [`list`](#list) | List all policies for the given project |
| [`create`](#create) |  |
| [`update`](#update) |  |
| [`delete`](#delete) | Delete the given policy |


## `list`

List all policies for the given project

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/alerting/policies/{project}```|
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
$repository = $koalityEngineClient->getRepository('AlertingPolicy');
$result = $repository->list($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('AlertingPolicy')
const result = await repository.list($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/alerting/policies/{project}
```


## `create`



### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/alerting/policies/{project}```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| name  | `STRING` |  yes        |   |            |
| interval  | `STRING` |  no        | immediately  |            |
| severities  | `LIST` |  no        |   |            |
| channels  | `INTEGER` |  no        |   |            |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('AlertingPolicy');
$result = $repository->create($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('AlertingPolicy')
const result = await repository.create($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/alerting/policies/{project}
```


## `update`



### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/alerting/policies/{project}/{policy}```|
| Method   | PUT                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - policy

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| name  | `STRING` |  no        |   |            |
| interval  | `STRING` |  no        |   |            |
| severities  | `LIST` |  no        |   |            |
| channels  | `INTEGER` |  no        |   |            |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('AlertingPolicy');
$result = $repository->update($project, $policy);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('AlertingPolicy')
const result = await repository.update($project, $policy)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X PUT https://api.cluster1.koalityengine.com/alerting/policies/{project}/{policy}
```


## `delete`

Delete the given policy

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/alerting/policies/{project}/{policy}```|
| Method   | DELETE                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - policy

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('AlertingPolicy');
$result = $repository->delete($project, $policy);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('AlertingPolicy')
const result = await repository.delete($project, $policy)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X DELETE https://api.cluster1.koalityengine.com/alerting/policies/{project}/{policy}
```

