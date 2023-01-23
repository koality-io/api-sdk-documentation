[back to overview](../../readme.md)
# Login into KoalityEngine example

The login via credentials is very easy. The client does everything automatically and also connects to the correct cluster that the given user is connected with. Without the client this has to be done manually. 

After the client is connected all actions can be performed be using the corresponding [repository](../../RepositoryOverviews.md).

## JavaScript

```javascript

import { LeankoalaClient } from '@webpros/360-api-client'

(async () => {
    const client = new LeankoalaClient()
    await client.connect({ username, password })
})()
```

## PHP

```php
$client = new Client();
$client->connect($username, $password, true);
```
