[back to overview](../../readme.md)
# List of open incidents

This example shows how to use the API to list all open incidents for a given project. 

- All score specific methods can be found in the [incident repository](../../Repositories/IncidentRepository.md).
- Score search method [documentation](../../Repositories/IncidentRepository.md#search)

## PHP

```php
/** @var IncidentRepository $repo */
$repo = $client->getRepository('incident');
$result = $repo->search($input->getArgument('project'), []);
```
