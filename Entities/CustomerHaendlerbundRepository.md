# API endpoints for `CustomerHaendlerbund` repository


## `createShop`

Händlerbund only: the function is used to create a shop.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/customers/haendlerbund/shops```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| name  | `STRING` |  yes        |   | The shops name.           |
| base_url  | `URL` |  yes        |   | The shops base url with scheme, subdomain and domain.           |
| owner  | `INTEGER` |  yes        |   | The shops owner (id).           |
| size  | `MIXED` |  no        | large  | The shop size. It determines if the checks are done on a daily or hourly base.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `updateShop`

Händlerbund only: the function is used to update a shop.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/customers/haendlerbund/shops/{system}```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - system

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| name  | `STRING` |  no        |   | The shops name.           |
| base_url  | `URL` |  no        |   | The shops base url with scheme, subdomain and domain. When changing the base url all shop pages will change their base as well.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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

