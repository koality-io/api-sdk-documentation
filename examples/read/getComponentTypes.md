[back to overview](../../readme.md)
# Get component types

When creating a new component it is important to select the matching component type. You can use the `showComponentTypes` endpoint to retrieve all types for the given project.

- All component specific methods can be found in the [component repository](../../Repositories/ComponentRepository.md).
- `showComponentTypes` API method [documentation](../../Repositories/ComponentRepository.md#showComponentTypes)

## PHP

```php
/** @var ComponentRepository $repo */
$repo = $client->getRepository('component');
$componentTypesResult = $repo->showComponentTypes($projectId, []);
$componentTypes = $componentTypesResult['system_types']);
```
