[back to overview](../../readme.md)
# Create System

The creation of a new system is very easy as a lot of depending actions are done in the backend already. 

A system always needs to have a system type. The list of types can be fetched via the API as well. Use the [`getSystemTypes`](../../Repositories/SystemRepository.md#getsystemtypes) endpoint for that. 

- All system specific methods can be found in the [System repository](../../Repositories/SystemRepository.md).
- The [create method](../../Repositories/SystemRepository.md#createsystem) in system repository
- [getSystemType example](../read/getSystemTypes.md)

## PHP

```php
/** @var SystemRepository $repo */
$repo = $client->getRepository('system');

$user = $client->getClusterUser();

$systemdTypeId = 1;

$systemDetails = [
    'name' => 'My new project',
    'base_url' => 'https://www.example.com',
    'owner' => $user['id'],
    'system_type' => $systemdTypeId,
    'add_standard_alerting' => true
];

$systemResult = $repo->createSystem($systemDetails);
```
