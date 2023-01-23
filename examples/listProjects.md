[back to overview](../readme.md)
# List projects

This example shows how to use the API to list all projects of a given user. The projects ids 

- All project specific methods can be found in the [Project repository](../Repositories/ProjectRepository.md).
- Project list method [documentation](../Repositories/ProjectRepository.md#search)
- [How to log in](login.md) example

## JavaScript

```javascript

import { LeankoalaClient } from '@webpros/360-api-client'

(async () => {
    const client = new LeankoalaClient()
    await client.connect({ username, password })
    
    const user = client.getUser()
    
    const repo = client
        .getRepositoryCollection()
        .getProjectRepository()
        
    const projects = await repo.search([userId])
})()
```

## PHP

```php
$client = new Client();
$client->connect($username, $password, true);

/** @var ProjectRepository $repo */
$repo = $client->getRepository('project');

$userId = $client->getClusterUser()['id'];
$projects = $repo->search(['user' => $userId]);
```
