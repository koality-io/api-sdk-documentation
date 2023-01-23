# API endpoints for Invitation repository


## `invite`

This endpoint invites a new user to the project.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/invitation/invite/{project}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload parameters

| Name                  | Type  | Required  | Desciption   |
|-----------------------|-------|-----------|--------------|
| email  | `STRING` |  yes        | The invitations e-mail address           |
| user_name  | `STRING` |  no        | The users company name.           |
| user_role  | `INTEGER` |  no        | The projects role of the newly added user.           |

### SDK

We strongly recommend to use the SDK that are provided.

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


## `abort`

This endpoint aborts a given invitation.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/invitation/abort/{invitation}```

*Method*: DELETE

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - invitation

#### Payload parameters


### SDK

We strongly recommend to use the SDK that are provided.

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


## `getOpenInvitations`

This endpoint returns a list of all open invitations for the given project.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/invitation/open/{project}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload parameters


### SDK

We strongly recommend to use the SDK that are provided.

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

