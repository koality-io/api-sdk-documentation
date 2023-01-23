# API endpoints for `score` repository


## `getScoresByUser`

Return a list of scores by the given score names for all projects and systems the user is part of.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/score/scores/user/{user}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| scores  | `LIST` |  yes        |   | List of score names           |
| with_sub_scores  | `BOOLEAN` |  no        | false  | NOT IMPLEMENTED YET: If true detailed information about the score will be provided.           |
| filter_empty_projects  | `BOOLEAN` |  no        | false  | If true the only projects with systems are returned           |

### SDK

We strongly recommend to use the SDK that are provided.

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


## `getScore`

Return the score for a given score name.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/score/scores/{system}/{scoreName}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system
 - scoreName

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided.

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


## `getScores`

Return a list of scores by the given score names.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/score/scores/{system}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| scores  | `LIST` |  yes        |   | list of score names           |

### SDK

We strongly recommend to use the SDK that are provided.

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

