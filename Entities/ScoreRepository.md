# API endpoints for score repository


## getScoresByUser

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/score/scores/user/{user}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload
- scores - List of score names
- with_sub_scores - NOT IMPLEMENTED YET: If true detailed information about the score will be provided.
- filter_empty_projects - If true the only projects with systems are returned

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('score');
$result = $repository->getScoresByUser($user);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('score')
const result = await repository.getScoresByUser($user)
```


## getScore

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/score/scores/{system}/{scoreName}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system
 - scoreName

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('score');
$result = $repository->getScore($system, $scoreName);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('score')
const result = await repository.getScore($system, $scoreName)
```


## getScores

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/score/scores/{system}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload
- scores - list of score names

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('score');
$result = $repository->getScores($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('score')
const result = await repository.getScores($system)
```

