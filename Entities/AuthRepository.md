# API endpoints for auth repository


## createTokenByCredentials

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/auth/tokens/access```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload
- username - 
- password - 
- expire - 
- with_memories - If true all Memory entities will be attached in the answer.

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('auth');
$result = $repository->createTokenByCredentials();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('auth')
const result = await repository.createTokenByCredentials()
```


## createTokenByRefreshToken

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/auth/tokens/refresh/{user}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload
- with_memories - If true all Memory entities will be attached in the answer.

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('auth');
$result = $repository->createTokenByRefreshToken($user);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('auth')
const result = await repository.createTokenByRefreshToken($user)
```

