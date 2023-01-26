[back to overview](../../readme.md)
# List scores for all systems of a user

This example shows how to use the API to list all systems scores of a given user. 

- All score specific methods can be found in the [score repository](../../Repositories/ScoreRepository.md).
- Score getScoresByUser method [documentation](../../Repositories/ScoreRepository.md#getScoresByUser)
- 
## PHP

```php
/** @var ScoreRepository $repo */
$repo = $client->getRepository('score');

$currentUser = $client->getClusterUser();

$result = $repo->getScoresByUser($currentUser['id'], [
    "scores" => [
        "basic-uptime",
        "basic-performance",
        "basic-seo",
        "basic-content",
        "basic-tech",
        "basic-security"
    ]
]);
```
