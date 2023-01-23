# API endpoints for `system` repository


## `createSystem`

Create a new system.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/systems/system```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| project  | `INTEGER` |  no        |   | The project the system should be part of. If the project is not set a new project will be created with the systems name.           |
| add_standard_alerting  | `BOOLEAN` |  no        | false  | If true add a standard channel and alerting policy for the owner.           |
| name  | `STRING` |  yes        |   | The shops name.           |
| base_url  | `URL` |  yes        |   | The shops base url with scheme, subdomain and domain.           |
| owner  | `INTEGER` |  yes        |   | The shops owner (id).           |
| system_type  | `INTEGER` |  yes        |   | The shops system type (id).           |
| add_checklist_checks  | `BOOLEAN` |  no        | true  | If true all checks of the checklist connected to the main system type are added.           |
| add_support_user  | `BOOLEAN` |  no        | true  | Add the support user for support requests           |

### SDK

We strongly recommend to use the SDK that are provided.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('system');
$result = $repository->createSystem();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('system')
const result = await repository.createSystem()
```


## `updateSystem`

Update an existing system.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/systems/system/{system}```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| name  | `STRING` |  no        |   | The shops name.           |
| base_url  | `URL` |  no        |   | The shops base url with scheme, subdomain and domain.           |

### SDK

We strongly recommend to use the SDK that are provided.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('system');
$result = $repository->updateSystem($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('system')
const result = await repository.updateSystem($system)
```


## `getComponents`

Return all components for the given system.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/systems/{system}/components```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('system');
$result = $repository->getComponents($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('system')
const result = await repository.getComponents($system)
```


## `getSystemTypes`

Return all system types for the given provider.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/systems/{providerIdentifier}/systemType```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - providerIdentifier

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('system');
$result = $repository->getSystemTypes($providerIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('system')
const result = await repository.getSystemTypes($providerIdentifier)
```


## `getComponentSuggestions`

Return all suggested component types for the given system.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/systems/{system}/suggestions```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('system');
$result = $repository->getComponentSuggestions($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('system')
const result = await repository.getComponentSuggestions($system)
```


## `changeLastFullRun`

Set the last full run timestamp on a system.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/systems/{system}/lastFullRun/{status}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system
 - status

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('system');
$result = $repository->changeLastFullRun($system, $status);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('system')
const result = await repository.changeLastFullRun($system, $status)
```


## `triggerComponentFinder`

Trigger the component finder for a given system.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/{project}/componentfinder/{system}/{user}/trigger```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - system
 - user

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('system');
$result = $repository->triggerComponentFinder($project, $system, $user);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('system')
const result = await repository.triggerComponentFinder($project, $system, $user)
```


## `getNextLastFullRun`

Return the approximated time in seconds when the next full check run is triggered.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/systems/{system}/nextFullRun```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('system');
$result = $repository->getNextLastFullRun($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('system')
const result = await repository.getNextLastFullRun($system)
```


## `getComponentLimit`

Return the maximum number of components that can be added to the given system.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/systems/{system}/component/limit```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('system');
$result = $repository->getComponentLimit($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('system')
const result = await repository.getComponentLimit($system)
```

