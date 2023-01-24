[back to repository overview](../RepositoryOverviews.md)
# API endpoints for `ClusterCompany` repository

## List of all available methods

| Method                                        | Description                                                            |
|:----------------------------------------------|:-----------------------------------------------------------------------|
| [`create`](#create) | Create a new company |
| [`connectUser`](#connectuser) | Connect a given user to a company |
| [`exists`](#exists) | Check if the given company name already exists |
| [`search`](#search) | Search for a given company by provider and name |
| [`findAll`](#findall) | Return a list of all companies for the given provider. |
| [`updateMasterId`](#updatemasterid) | This endpoint updates an existing companies master id. |


## `create`

Create a new company

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/user/companies/{providerIdentifier}```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - providerIdentifier

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| name  | `STRING` |  yes        |   | The companies name           |
| master_id  | `INTEGER` |  yes        |   | The master id from the auth2 server           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterCompany');
$result = $repository->create($providerIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterCompany')
const result = await repository.create($providerIdentifier)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/user/companies/{providerIdentifier}
```

[top](#list-of-all-available-methods)


## `connectUser`

Connect a given user to a company

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/user/companies/connect/{company}/{user}```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company
 - user

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| user_role  | `INTEGER` |  no        | 1000  | The users company role           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterCompany');
$result = $repository->connectUser($company, $user);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterCompany')
const result = await repository.connectUser($company, $user)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/user/companies/connect/{company}/{user}
```

[top](#list-of-all-available-methods)


## `exists`

Check if the given company name already exists

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/user/companies/exists```|
| Method   | GET                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| company_name  | `STRING` |  yes        |   | The companies name           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterCompany');
$result = $repository->exists();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterCompany')
const result = await repository.exists()
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/user/companies/exists
```

[top](#list-of-all-available-methods)


## `search`

Search for a given company by provider and name

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/user/companies/search/{providerIdentifier}```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - providerIdentifier

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| company_name  | `STRING` |  yes        |   | The companies name           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterCompany');
$result = $repository->search($providerIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterCompany')
const result = await repository.search($providerIdentifier)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/user/companies/search/{providerIdentifier}
```

[top](#list-of-all-available-methods)


## `findAll`

Return a list of all companies for the given provider.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/user/companies/findall/{providerIdentifier}```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - providerIdentifier

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterCompany');
$result = $repository->findAll($providerIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterCompany')
const result = await repository.findAll($providerIdentifier)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/user/companies/findall/{providerIdentifier}
```

[top](#list-of-all-available-methods)


## `updateMasterId`

This endpoint updates an existing companies master id.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/user/companies/{company}/masterId```|
| Method   | PUT                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| master_id  | `INTEGER` |  yes        |   | The users master id.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('ClusterCompany');
$result = $repository->updateMasterId($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('ClusterCompany')
const result = await repository.updateMasterId($company)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X PUT https://api.cluster1.koalityengine.com/user/companies/{company}/masterId
```

[top](#list-of-all-available-methods)

