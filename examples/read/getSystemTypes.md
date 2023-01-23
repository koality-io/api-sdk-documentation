[back to overview](../../readme.md)
# Get system types

- All project specific methods can be found in the [System repository](../../Repositories/SystemRepository.md).
- `getSystemType` API method [documentation](../../Repositories/ProjectRepository.md#search)

## PHP

```php
$repo = $client->getRepository('system');
$systemResult = $repo->getSystemTypes('koality', []);

$systemTypes = $systemResult['main_system_types'];
```
