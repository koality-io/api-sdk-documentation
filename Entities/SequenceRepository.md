# API endpoints for sequence repository


## getCommands

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/sequences/{project}/commands```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload

### SDK

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


## getSequences

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/sequences/{project}/sequences```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload

### SDK

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


## createSequence

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/sequences/{project}/sequence```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload
- name - The human readable name of the sequence.
- startUrl - The url the sequence starts at.
- steps - List of steps of the sequence.

### SDK

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


## updateSequence

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/sequences/{project}/sequence```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload
- name - The human readable name of the sequence.
- startUrl - The url the sequence starts at.
- steps - List of steps of the sequence.

### SDK

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


## activateSequence

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/sequences/{sequence}/activate```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - sequence

#### Payload

### SDK

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


## deactivateSequence

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/sequences/{sequence}/deactivate```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - sequence

#### Payload

### SDK

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


## getRecentRuns

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/sequences/{sequence}/recent```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - sequence

#### Payload

### SDK

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

