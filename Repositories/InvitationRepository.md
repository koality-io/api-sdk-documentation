# API endpoints for `Invitation` repository

## Methods

| Method                                        | Description                                                            |
|:----------------------------------------------|:-----------------------------------------------------------------------|
| [`invite`](#invite) | This endpoint invites a new user to the project. |
| [`abort`](#abort) | This endpoint aborts a given invitation. |
| [`getOpenInvitations`](#getopeninvitations) | This endpoint returns a list of all open invitations for the given project. |


## `invite`

This endpoint invites a new user to the project.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/user/invitation/invite/{project}```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| email  | `STRING` |  yes        |   | The invitations e-mail address           |
| user_name  | `STRING` |  no        |   | The users company name.           |
| user_role  | `INTEGER` |  no        | 200  | The projects role of the newly added user.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('Invitation');
$result = $repository->invite($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('Invitation')
const result = await repository.invite($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/user/invitation/invite/{project}
```


## `abort`

This endpoint aborts a given invitation.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/user/invitation/abort/{invitation}```|
| Method   | DELETE                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - invitation

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('Invitation');
$result = $repository->abort($invitation);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('Invitation')
const result = await repository.abort($invitation)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X DELETE https://api.cluster1.koalityengine.com/user/invitation/abort/{invitation}
```


## `getOpenInvitations`

This endpoint returns a list of all open invitations for the given project.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/user/invitation/open/{project}```|
| Method   | GET                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('Invitation');
$result = $repository->getOpenInvitations($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('Invitation')
const result = await repository.getOpenInvitations($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/user/invitation/open/{project}
```

