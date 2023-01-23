# API endpoints for project repository


## getStatus

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/{project}/onboarding/status```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('project');
$result = $repository->getStatus($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('project')
const result = await repository.getStatus($project)
```


## search

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/projects/search```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload
- user - The users id
- with_next_full_run - If true the next approximated hourly run will be returned; the value is the time in seconds till the next run
- with_onboarding_status - If true the projects onboarding status is added to the response.
- with_features - If true the projects marketplace features are added to the response.
- owned_by_user - If true the only projects owned by this user are returned.
- filter_empty_projects - If true the only projects with systems are returned

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('project');
$result = $repository->search();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('project')
const result = await repository.search()
```


## searchAll

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/{providerIdentifier}/all```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - providerIdentifier

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('project');
$result = $repository->searchAll($providerIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('project')
const result = await repository.searchAll($providerIdentifier)
```


## delete

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/projects/{project}```

*Method*: DELETE

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('project');
$result = $repository->delete($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('project')
const result = await repository.delete($project)
```


## update

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/projects/{project}```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload
- name - 

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('project');
$result = $repository->update($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('project')
const result = await repository.update($project)
```


## getUsers

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/users/{project}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('project');
$result = $repository->getUsers($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('project')
const result = await repository.getUsers($project)
```


## removeUser

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/users/{project}/{user}```

*Method*: DELETE

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - user

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('project');
$result = $repository->removeUser($project, $user);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('project')
const result = await repository.removeUser($project, $user)
```

