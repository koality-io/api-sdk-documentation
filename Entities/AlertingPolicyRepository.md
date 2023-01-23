# API endpoints for AlertingPolicy repository


## `list`

List all policies for the given project

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/alerting/policies/{project}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload parameters


### SDK

We strongly recommend to use the SDK that are provided.

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


## `create`



### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/alerting/policies/{project}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload parameters

| Name                  | Type  | Required  | Desciption   |
|-----------------------|-------|-----------|--------------|
| name  | `STRING` |  yes        |            |
| interval  | `STRING` |  no        |            |
| severities  | `LIST` |  no        |            |
| channels  | `INTEGER` |  no        |            |

### SDK

We strongly recommend to use the SDK that are provided.

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


## `update`



### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/alerting/policies/{project}/{policy}```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - policy

#### Payload parameters

| Name                  | Type  | Required  | Desciption   |
|-----------------------|-------|-----------|--------------|
| name  | `STRING` |  no        |            |
| interval  | `STRING` |  no        |            |
| severities  | `LIST` |  no        |            |
| channels  | `INTEGER` |  no        |            |

### SDK

We strongly recommend to use the SDK that are provided.

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


## `delete`

Delete the given policy

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/alerting/policies/{project}/{policy}```

*Method*: DELETE

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - policy

#### Payload parameters


### SDK

We strongly recommend to use the SDK that are provided.

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

