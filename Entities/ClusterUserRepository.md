# API endpoints for ClusterUser repository


## activate

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/activate```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload
- activation_key - 

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterUser');
$result = $repository->activate();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterUser')
const result = await repository.activate()
```


## create

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/{provider}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - provider

#### Payload
- username - The new users name.
- master_id - The users id on the master server.
- suppress_activation - If true no activation mail will be send..
- activate - If true no activation mail will be send..
- email - The email address of the new user.
- preferred_language - The users preferred interface language.
- company_id - The companies numeric id of the new user.
- create_company - Create a new company if none exists.
- full_name - The users full name.
- first_name - The users first name.
- last_name - The users last name.
- password - 
- _attributes - Additional attributes for the user

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterUser');
$result = $repository->create($provider);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterUser')
const result = await repository.create($provider)
```


## setPreferredLanguage

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/preferredLanguage/{user}```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload
- language - The users preferred interface language.

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterUser');
$result = $repository->setPreferredLanguage($user);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterUser')
const result = await repository.setPreferredLanguage($user)
```


## connectOAuthAccount

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/oauth/{user}/connect```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload
- provider - The OAuth provider.
- provider_user_id - The OAuth provider user id.

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterUser');
$result = $repository->connectOAuthAccount($user);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterUser')
const result = await repository.connectOAuthAccount($user)
```


## changePassword

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/{user}/password```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload
- password_new - 

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterUser');
$result = $repository->changePassword($user);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterUser')
const result = await repository.changePassword($user)
```


## exists

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/exists```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload
- query - The key value pairs for the search.

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterUser');
$result = $repository->exists();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterUser')
const result = await repository.exists()
```


## find

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/find```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload
- query - The key value pairs for the search.

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterUser');
$result = $repository->find();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterUser')
const result = await repository.find()
```


## delete

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/{user}```

*Method*: DELETE

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterUser');
$result = $repository->delete($user);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterUser')
const result = await repository.delete($user)
```


## isDeletable

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/deletable/{user}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterUser');
$result = $repository->isDeletable($user);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterUser')
const result = await repository.isDeletable($user)
```


## deleteByEmail

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/delete/email```

*Method*: DELETE

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload
- email - The users email address

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterUser');
$result = $repository->deleteByEmail();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterUser')
const result = await repository.deleteByEmail()
```


## updateUser

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/{user}```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload
- email - The email address of the new user.
- preferred_language - The users preferred interface language.
- company_id - The companies numeric id of the new user.
- first_name - The users first name.
- last_name - The users last name.

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterUser');
$result = $repository->updateUser($user);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterUser')
const result = await repository.updateUser($user)
```


## updateMasterId

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/{user}/masterId```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload
- master_id - The users master id.

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterUser');
$result = $repository->updateMasterId($user);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterUser')
const result = await repository.updateMasterId($user)
```


## requestPasswordReset

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/password/reset/request```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload
- email - The users email address

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterUser');
$result = $repository->requestPasswordReset();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterUser')
const result = await repository.requestPasswordReset()
```


## resetPassword

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/password/reset/{user}```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload
- password - The new password

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterUser');
$result = $repository->resetPassword($user);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterUser')
const result = await repository.resetPassword($user)
```


## findAll

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/find/all/{providerIdentifier}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - providerIdentifier

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterUser');
$result = $repository->findAll($providerIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterUser')
const result = await repository.findAll($providerIdentifier)
```

