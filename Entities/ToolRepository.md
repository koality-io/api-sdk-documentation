# API endpoints for Tool repository


## getChangedConfiguration

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/tools/changed```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload
- newerThan - 
- minifyOutput - 

### SDK

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


## findByProject

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/tools/{project}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload

### SDK

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


## overwrite

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/tools/{project}/{toolIdentifier}```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - toolIdentifier

#### Payload
- errors_in_a_row - Number of errors in a row before marked as failure
- success_in_a_row - Number of successes in a row before marked as passed

### SDK

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


## getConfiguration

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/tools/{project}/{toolIdentifier}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - toolIdentifier

#### Payload

### SDK

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

