# API endpoints for `ClusterUser` repository


## `activate`

Activate an user account. The endpoint will return a valid access and refresh token so the user can be logged in without re-entering username and password.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/activate```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| activation_key  | `STRING` |  yes        |   |            |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `create`

This endpoint creates a new user. The given provider (url param) will be attached.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/{provider}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - provider

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| username  | `STRING` |  no        |   | The new users name.           |
| master_id  | `INTEGER` |  no        | -1  | The users id on the master server.           |
| suppress_activation  | `BOOLEAN` |  no        | false  | If true no activation mail will be send..           |
| activate  | `BOOLEAN` |  no        | true  | If true no activation mail will be send..           |
| email  | `STRING` |  yes        |   | The email address of the new user.           |
| preferred_language  | `STRING` |  no        |   | The users preferred interface language.           |
| company_id  | `INTEGER` |  no        |   | The companies numeric id of the new user.           |
| create_company  | `BOOLEAN` |  no        | false  | Create a new company if none exists.           |
| full_name  | `STRING` |  no        |   | The users full name.           |
| first_name  | `STRING` |  no        |   | The users first name.           |
| last_name  | `STRING` |  no        |   | The users last name.           |
| password  | `STRING` |  yes        |   |            |
| _attributes  | `LIST` |  no        |   | Additional attributes for the user           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `setPreferredLanguage`

Update the users preferred language.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/preferredLanguage/{user}```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| language  | `STRING` |  yes        |   | The users preferred interface language.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `connectOAuthAccount`

This endpoint connects an OAuth provider with the current user.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/oauth/{user}/connect```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| provider  | `MIXED` |  yes        |   | The OAuth provider.           |
| provider_user_id  | `STRING` |  yes        |   | The OAuth provider user id.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `changePassword`

Change the users password. This can only be done by the master server.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/{user}/password```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| password_new  | `STRING` |  yes        |   |            |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `exists`

This endpoint returns true if a user exists that matches the given search criteria.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/exists```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| query  | `LIST` |  yes        |   | The key value pairs for the search.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `find`

This endpoint returns a user that matches the given search criteria.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/find```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| query  | `LIST` |  yes        |   | The key value pairs for the search.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `delete`

Delete the given user and all owned projects.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/{user}```

*Method*: DELETE

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `isDeletable`

Checks if the user can be deleted.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/deletable/{user}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `deleteByEmail`

 the given user (by email) and all owned projects.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/delete/email```

*Method*: DELETE

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| email  | `STRING` |  yes        |   | The users email address           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `updateUser`

This endpoint updates an existing user.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/{user}```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| email  | `STRING` |  no        |   | The email address of the new user.           |
| preferred_language  | `STRING` |  no        |   | The users preferred interface language.           |
| company_id  | `INTEGER` |  no        |   | The companies numeric id of the new user.           |
| first_name  | `STRING` |  no        |   | The users first name.           |
| last_name  | `STRING` |  no        |   | The users last name.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `updateMasterId`

This endpoint updates an existing users master id.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/{user}/masterId```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| master_id  | `INTEGER` |  yes        |   | The users master id.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `requestPasswordReset`

Request password change e-mail.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/password/reset/request```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| email  | `STRING` |  yes        |   | The users email address           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `resetPassword`

Reset the password.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/password/reset/{user}```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| password  | `STRING` |  yes        |   | The new password           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `findAll`

Return a list of all users for the given company.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/users/find/all/{providerIdentifier}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - providerIdentifier

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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

