# API endpoints for CheckDeadLinks repository


## `getResults`

Return a list of dead links for every component attached to the given system.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/{system}/deadlinks```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload parameters


### SDK

We strongly recommend to use the SDK that are provided.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CheckDeadLinks');
$result = $repository->getResults($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckDeadLinks')
const result = await repository.getResults($system)
```


## `getResultsByCompany`

Return a list of dead links for every component in every project owned by the company.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/company/{company}/deadlinks```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload parameters


### SDK

We strongly recommend to use the SDK that are provided.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CheckDeadLinks');
$result = $repository->getResultsByCompany($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckDeadLinks')
const result = await repository.getResultsByCompany($company)
```


## `getConfiguration`

Return the dead link check configuration for the given system.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/{system}/deadlinks/config```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload parameters


### SDK

We strongly recommend to use the SDK that are provided.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CheckDeadLinks');
$result = $repository->getConfiguration($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckDeadLinks')
const result = await repository.getConfiguration($system)
```


## `ignorePattern`

Add a new ignore pattern to the configuration.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/{system}/deadlinks/ignore```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload parameters

| Name                  | Type  | Required  | Desciption   |
|-----------------------|-------|-----------|--------------|
| patterns  | `LIST` |  yes        | List of URLs (strings) that will be excluded from the dead link crawl           |

### SDK

We strongly recommend to use the SDK that are provided.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CheckDeadLinks');
$result = $repository->ignorePattern($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckDeadLinks')
const result = await repository.ignorePattern($system)
```


## `unignorePattern`

Remove an ignore pattern from the configuration.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/{system}/deadlinks/unignore```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload parameters

| Name                  | Type  | Required  | Desciption   |
|-----------------------|-------|-----------|--------------|
| pattern_id  | `INTEGER` |  yes        | Single URL that will not be excluded anymore in the dead link crawl           |

### SDK

We strongly recommend to use the SDK that are provided.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CheckDeadLinks');
$result = $repository->unignorePattern($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckDeadLinks')
const result = await repository.unignorePattern($system)
```


## `getBlockedPatterns`

Return a list patterns that should be blocked in the dead link checker.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/deadlinks/blocked```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters


### SDK

We strongly recommend to use the SDK that are provided.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CheckDeadLinks');
$result = $repository->getBlockedPatterns();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckDeadLinks')
const result = await repository.getBlockedPatterns()
```

