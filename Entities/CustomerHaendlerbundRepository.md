# API endpoints for CustomerHaendlerbund repository


## createShop

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/customers/haendlerbund/shops```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload
- name - The shops name.
- base_url - The shops base url with scheme, subdomain and domain.
- owner - The shops owner (id).
- size - The shop size. It determines if the checks are done on a daily or hourly base.

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CustomerHaendlerbund');
$result = $repository->createShop();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CustomerHaendlerbund')
const result = await repository.createShop()
```


## updateShop

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/customers/haendlerbund/shops/{system}```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload
- name - The shops name.
- base_url - The shops base url with scheme, subdomain and domain. When changing the base url all shop pages will change their base as well.

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CustomerHaendlerbund');
$result = $repository->updateShop($system);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CustomerHaendlerbund')
const result = await repository.updateShop($system)
```

