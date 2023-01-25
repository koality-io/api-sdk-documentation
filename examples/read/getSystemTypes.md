[back to overview](../../readme.md)
# Get system types

When creating a new system it is important to select the matching system type. Depending on the type other component types later are suggested. 

If users should have full flexibility we recommend to take `custom project` as system type.

- All project specific methods can be found in the [System repository](../../Repositories/SystemRepository.md).
- `getSystemType` API method [documentation](../../Repositories/SystemRepository.md#getSystemType)

## PHP

```php
$repo = $client->getRepository('system');
$systemResult = $repo->getSystemTypes('koality', []);

$systemTypes = $systemResult['main_system_types'];
```
