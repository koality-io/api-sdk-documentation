# API endpoints for ClusterCompany repository


## create

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/companies/{providerIdentifier}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - providerIdentifier

#### Payload
- name - The companies name
- master_id - The master id from the auth2 server

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterCompany');
$result = $repository->create($providerIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterCompany')
const result = await repository.create($providerIdentifier)
```


## connectUser

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/companies/connect/{company}/{user}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company
 - user

#### Payload
- user_role - The users company role

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterCompany');
$result = $repository->connectUser($company, $user);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterCompany')
const result = await repository.connectUser($company, $user)
```


## exists

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/companies/exists```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload
- company_name - The companies name

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterCompany');
$result = $repository->exists();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterCompany')
const result = await repository.exists()
```


## search

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/companies/search/{providerIdentifier}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - providerIdentifier

#### Payload
- company_name - The companies name

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterCompany');
$result = $repository->search($providerIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterCompany')
const result = await repository.search($providerIdentifier)
```


## findAll

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/companies/findall/{providerIdentifier}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - providerIdentifier

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterCompany');
$result = $repository->findAll($providerIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterCompany')
const result = await repository.findAll($providerIdentifier)
```


## updateMasterId

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/companies/{company}/masterId```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload
- master_id - The users master id.

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterCompany');
$result = $repository->updateMasterId($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterCompany')
const result = await repository.updateMasterId($company)
```

