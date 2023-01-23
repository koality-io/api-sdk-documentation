# API endpoints for CheckLighthouse repository


## `getResults`

Return all current lighthouse results for the given systems components.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/check/checks/{system}/lighthouse/results/{category}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system
 - category

#### Payload parameters

| Name                  | Type  | Required  | Desciption   |
|-----------------------|-------|-----------|--------------|
| targetGroup  | `MIXED` |  no        | The target group. It can be either an integer or a string.           |
| use_cache  | `BOOLEAN` |  no        | Use the cache for json document fetch           |

### SDK

We strongly recommend to use the SDK that are provided.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CheckLighthouse');
$result = $repository->getResults($system, $category);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CheckLighthouse')
const result = await repository.getResults($system, $category)
```

