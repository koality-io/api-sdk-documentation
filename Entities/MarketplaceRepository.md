# API endpoints for marketplace repository


## getActiveProviderFeatures

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/features/provider/{providerIdentifier}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - providerIdentifier

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getActiveProviderFeatures($providerIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getActiveProviderFeatures($providerIdentifier)
```


## getActiveProjectFeatures

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/features/project/{project}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getActiveProjectFeatures($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getActiveProjectFeatures($project)
```


## getSystemPluginStatus

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/plugins/incidents/system/{system}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getSystemPluginStatus($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getSystemPluginStatus($system)
```


## getUserPluginStatus

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/plugins/incidents/user/{user}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getUserPluginStatus($user);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getUserPluginStatus($user)
```


## getComponents

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/features/components/{system}/{featureIdentifier}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system
 - featureIdentifier

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getComponents($system, $featureIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getComponents($system, $featureIdentifier)
```


## setComponent

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/features/components/{system}/{suggestionIdentifier}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system
 - suggestionIdentifier

#### Payload
- url - 

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->setComponent($system, $suggestionIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.setComponent($system, $suggestionIdentifier)
```


## getFeatures

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/marketplace/features/{providerIdentifier}/{company}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - providerIdentifier
 - company

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getFeatures($providerIdentifier, $company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getFeatures($providerIdentifier, $company)
```


## getAvailableFeatures

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/marketplace/feature/available/{project}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload
- status - 

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getAvailableFeatures($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getAvailableFeatures($project)
```


## getAllFeatures

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/marketplace/feature/all```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getAllFeatures();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getAllFeatures()
```


## getFavourites

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/marketplace/favourites```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getFavourites();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getFavourites()
```


## getActiveFeatures

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/marketplace/feature/active/{project}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getActiveFeatures($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getActiveFeatures($project)
```


## activateFeature

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/marketplace/feature/activate/{company}/{featureIdentifier}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company
 - featureIdentifier

#### Payload
- projects - 

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->activateFeature($company, $featureIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.activateFeature($company, $featureIdentifier)
```


## deactivateFeature

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/marketplace/feature/deactivate/{company}/{featureIdentifier}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company
 - featureIdentifier

#### Payload
- projects - 

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->deactivateFeature($company, $featureIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.deactivateFeature($company, $featureIdentifier)
```


## getBookingLog

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/log/company/{company}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getBookingLog($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getBookingLog($company)
```


## restProxy

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/proxy/{secret}/{url}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - secret
 - url

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->restProxy($secret, $url);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.restProxy($secret, $url)
```


## getHealthStatus

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/marketplace/features/status/{system}/{featureIdentifier}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system
 - featureIdentifier

#### Payload
- from - 
- time - 

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('marketplace');
$result = $repository->getHealthStatus($system, $featureIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('marketplace')
const result = await repository.getHealthStatus($system, $featureIdentifier)
```

