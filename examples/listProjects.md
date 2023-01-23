# List projects

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

- All project specific methods can be found in the [Project repository](../Repositories/ProjectRepository.md).

## JavaScript

```javascript

import { LeankoalaClient } from '@webpros/360-api-client'

(async () => {
    const client = new LeankoalaClient('stage')
    await client.connect({ username: 'demo', password: 'demo' })
    
    const user = client.getUser()
    
    const alerts = client
        .getRepositoryCollection()
        .getAlertingChannelRepository()
        
    const alertList = await alerts.list(3333)
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
