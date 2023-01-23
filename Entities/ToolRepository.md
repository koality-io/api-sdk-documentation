# API endpoints for `Tool` repository


## `getChangedConfiguration`

Get the tool configurations for all tools that changed.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/tools/changed```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| newerThan  | `INTEGER` |  yes        |   |            |
| minifyOutput  | `BOOLEAN` |  no        | false  |            |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('Tool');
$result = $repository->getChangedConfiguration();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('Tool')
const result = await repository.getChangedConfiguration()
```


## `findByProject`

Return all tools for the given project.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/tools/{project}```

*Method*: POST

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
$repository = $koalityEngineClient->getRepository('Tool');
$result = $repository->findByProject($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('Tool')
const result = await repository.findByProject($project)
```


## `overwrite`

Overwrite tool configuration.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/tools/{project}/{toolIdentifier}```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - toolIdentifier

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| errors_in_a_row  | `INTEGER` |  no        |   | Number of errors in a row before marked as failure           |
| success_in_a_row  | `INTEGER` |  no        |   | Number of successes in a row before marked as passed           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('Tool');
$result = $repository->overwrite($project, $toolIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('Tool')
const result = await repository.overwrite($project, $toolIdentifier)
```


## `getConfiguration`

Get the tool configuration.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/tools/{project}/{toolIdentifier}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - toolIdentifier

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('Tool');
$result = $repository->getConfiguration($project, $toolIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('Tool')
const result = await repository.getConfiguration($project, $toolIdentifier)
```

