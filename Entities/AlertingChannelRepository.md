# API endpoints for AlertingChannel repository


## list

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/alerting/channels/{project}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('AlertingChannel');
$result = $repository->list($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('AlertingChannel')
const result = await repository.list($project)
```


## create

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/alerting/channels/{project}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload
- name - The name of the alert channel
- type - 
- options - 
- language - The language the alert should be send in. If not value is set the default provider language is taken.

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('AlertingChannel');
$result = $repository->create($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('AlertingChannel')
const result = await repository.create($project)
```


## update

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/alerting/channels/{project}/{channel}```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - channel

#### Payload
- name - 
- type - 
- options - 
- language - The language the alert should be send in

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('AlertingChannel');
$result = $repository->update($project, $channel);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('AlertingChannel')
const result = await repository.update($project, $channel)
```


## delete

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/alerting/channels/{project}/{channel}```

*Method*: DELETE

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - channel

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('AlertingChannel');
$result = $repository->delete($project, $channel);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('AlertingChannel')
const result = await repository.delete($project, $channel)
```

