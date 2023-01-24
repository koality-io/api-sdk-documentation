[back to repository overview](../RepositoryOverviews.md)
# API endpoints for `project` repository

## List of all available methods

| Method                                        | Description                                                            |
|:----------------------------------------------|:-----------------------------------------------------------------------|
| [`getStatus`](#getstatus) | This endpoint will return a detailed onboarding status. |
| [`search`](#search) | Return all projects and the user roles for a given user. |
| [`searchAll`](#searchall) | Return all projects and the user roles for a given user. |
| [`delete`](#delete) | Delete the given project. |
| [`update`](#update) | Update the given project. |
| [`getUsers`](#getusers) | Return all users for the given project. |
| [`removeUser`](#removeuser) | Remove a given user from the project. |


## `getStatus`

This endpoint will return a detailed onboarding status.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/project/{project}/onboarding/status```|
| Method   | POST                                      |

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
$repository = $koalityEngineClient->getRepository('project');
$result = $repository->getStatus($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('project')
const result = await repository.getStatus($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/project/{project}/onboarding/status
```


## `search`

Return all projects and the user roles for a given user.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/project/projects/search```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| user  | `INTEGER` |  yes        |   | The users id           |
| with_next_full_run  | `BOOLEAN` |  no        | false  | If true the next approximated hourly run will be returned; the value is the time in seconds till the next run           |
| with_onboarding_status  | `BOOLEAN` |  no        | false  | If true the projects onboarding status is added to the response.           |
| with_features  | `BOOLEAN` |  no        | false  | If true the projects marketplace features are added to the response.           |
| owned_by_user  | `BOOLEAN` |  no        | false  | If true the only projects owned by this user are returned.           |
| filter_empty_projects  | `BOOLEAN` |  no        | false  | If true the only projects with systems are returned           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('project');
$result = $repository->search();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('project')
const result = await repository.search()
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/project/projects/search
```


## `searchAll`

Return all projects and the user roles for a given user.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/project/{providerIdentifier}/all```|
| Method   | GET                                      |

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
$repository = $koalityEngineClient->getRepository('project');
$result = $repository->searchAll($providerIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('project')
const result = await repository.searchAll($providerIdentifier)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/project/{providerIdentifier}/all
```


## `delete`

Delete the given project.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/project/projects/{project}```|
| Method   | DELETE                                      |

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
$repository = $koalityEngineClient->getRepository('project');
$result = $repository->delete($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('project')
const result = await repository.delete($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X DELETE https://api.cluster1.koalityengine.com/project/projects/{project}
```


## `update`

Update the given project.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/project/projects/{project}```|
| Method   | PUT                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| name  | `STRING` |  yes        |   |            |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('project');
$result = $repository->update($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('project')
const result = await repository.update($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X PUT https://api.cluster1.koalityengine.com/project/projects/{project}
```


## `getUsers`

Return all users for the given project.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/project/users/{project}```|
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
$repository = $koalityEngineClient->getRepository('project');
$result = $repository->getUsers($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('project')
const result = await repository.getUsers($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/project/users/{project}
```


## `removeUser`

Remove a given user from the project.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/project/users/{project}/{user}```|
| Method   | DELETE                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - user

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('project');
$result = $repository->removeUser($project, $user);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('project')
const result = await repository.removeUser($project, $user)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X DELETE https://api.cluster1.koalityengine.com/project/users/{project}/{user}
```

