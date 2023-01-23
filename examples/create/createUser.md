[back to overview](../../readme.md)
# Create User

Creating a new user is done via the user repository. Every user is allowed to create new users. 

- Detailed information about the [create user method](../../Repositories/UserRepository.md#createUser)
- [The user repository](../../Repositories/UserRepository.md)

## PHP

```php
/** @var UserRepository $repo */
$repo = $client->getRepository('user');

$applicationId = 'koality';

$arguments = [
    'userName' => $username,
    'email' => $emailAdress,
    'password' => $password,
    'activate' => false
];

$result = $repo->createUser($applicationId, $arguments);

$userId = $result['user']['id'];
```
