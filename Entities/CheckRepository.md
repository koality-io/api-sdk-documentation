# API endpoints for check repository


## addByRecipe

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/cookbook```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload
- component - 
- cookbook - 

### SDK

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


## addByChecklist

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/{system}/checklist```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload
- checklist - 
- clear_before - 
- activate_checks - 

### SDK

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


## runChecksForSystem

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/run/{system}/{toolIdentifier}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system
 - toolIdentifier

#### Payload

### SDK

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


## showCollections

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/collections/{project}/{toolIdentifier}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - toolIdentifier

#### Payload
- group - The collection group. It is used to specify the collections.

### SDK

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


## showActiveCollections

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/collections/system/active/{system}/{toolIdentifier}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system
 - toolIdentifier

#### Payload
- group - The collection group. It is used to specify the collections.

### SDK

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


## updateCollections

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/collections/system/{system}```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload
- collections - 
- group - The collection group. It is used to specify the collections.

### SDK

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

