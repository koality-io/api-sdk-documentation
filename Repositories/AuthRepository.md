# API endpoints for `auth` repository


## `createTokenByCredentials`

This function creates an access token with all the permissions for the given user. The returned token has to be in the payload for every later request.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/auth/tokens/access```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| username  | `STRING` |  yes        |   | The username you want to log in with.           |
| password  | `STRING` |  yes        |   | The users password.           |
| expire  | `BOOLEAN` |  no        | true  | If true the token will not expire (only available for admin users).           |
| with_memories  | `BOOLEAN` |  no        | false  | If true all memory entities will be attached in the answer.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/auth/tokens/access
```


## `createTokenByRefreshToken`



### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/auth/tokens/refresh/{user}```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| with_memories  | `BOOLEAN` |  no        | false  | If true all Memory entities will be attached in the answer.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/auth/tokens/refresh/{user}
```

