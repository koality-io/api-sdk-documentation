# API endpoints for system repository


## createSystem

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/systems/system```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload
- project - The project the system should be part of. If the project is not set a new project will be created with the systems name.
- add_standard_alerting - If true add a standard channel and alerting policy for the owner.
- name - The shops name.
- base_url - The shops base url with scheme, subdomain and domain.
- owner - The shops owner (id).
- system_type - The shops system type (id).
- add_checklist_checks - If true all checks of the checklist connected to the main system type are added.
- add_support_user - Add the support user for support requests

### SDK

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


## updateSystem

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/systems/system/{system}```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload
- name - The shops name.
- base_url - The shops base url with scheme, subdomain and domain.

### SDK

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


## getComponents

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/systems/{system}/components```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload

### SDK

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


## getSystemTypes

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/systems/{providerIdentifier}/systemType```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - providerIdentifier

#### Payload

### SDK

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


## getComponentSuggestions

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/systems/{system}/suggestions```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload

### SDK

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


## changeLastFullRun

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/systems/{system}/lastFullRun/{status}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system
 - status

#### Payload

### SDK

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


## triggerComponentFinder

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/{project}/componentfinder/{system}/{user}/trigger```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - system
 - user

#### Payload

### SDK

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


## getNextLastFullRun

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/systems/{system}/nextFullRun```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload

### SDK

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


## getComponentLimit

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/systems/{system}/component/limit```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload

### SDK

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

