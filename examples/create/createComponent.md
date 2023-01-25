[back to overview](../../readme.md)
# Create new component

- [Get component types example](../read/getComponentTypes.md)
- All system specific methods can be found in the [component repository](../../Repositories/ComponentRepository.md).
- The [create method](../../Repositories/ComponentRepository.md#createcomponent) in component repository

## SDK

### PHP

```php
/** @var ComponentRepository $repo */
$repo = $client->getRepository('component');

$componentDetails = [
    'url' => 'https://www.example.com/',
    'name' => 'Product Page',
    'device_id' => 1,
    'system_type_id' => 5, // coming from $componentRepo->showComponentTypes()
    'system' => 5521
];

$systemResult = $repo->createComponent($componentDetails);
```
