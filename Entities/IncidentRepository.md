# API endpoints for incident repository


## search

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/incident/incidents/{project}/search```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload
- system - the system filter

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('incident');
$result = $repository->search($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('incident')
const result = await repository.search($project)
```


## since

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/incident/incidents/{project}/since```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload
- days - The number of days the incidents can old

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('incident');
$result = $repository->since($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('incident')
const result = await repository.since($project)
```


## find

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/incident/incidents/{project}/{incident}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - incident

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('incident');
$result = $repository->find($project, $incident);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('incident')
const result = await repository.find($project, $incident)
```


## findByCompany

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/incident/incidents/company/{company}/search```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('incident');
$result = $repository->findByCompany($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('incident')
const result = await repository.findByCompany($company)
```


## getConfig

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/incident/tools/{project}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('incident');
$result = $repository->getConfig($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('incident')
const result = await repository.getConfig($project)
```

