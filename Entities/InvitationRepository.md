# API endpoints for Invitation repository


## invite

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/invitation/invite/{project}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload
- email - The invitations e-mail address
- user_name - The users company name.
- user_role - The projects role of the newly added user.

### SDK

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


## abort

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/invitation/abort/{invitation}```

*Method*: DELETE

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - invitation

#### Payload

### SDK

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


## getOpenInvitations

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/invitation/open/{project}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload

### SDK

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

