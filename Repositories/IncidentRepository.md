# API endpoints for `incident` repository

## Methods

| Method                                        | Description                                                            |
|:----------------------------------------------|:-----------------------------------------------------------------------|
| [`search`](#search) | Find all open incidents for the given project. Optionally it can be filtered by system. |
| [`since`](#since) | Find all incidents that where open in the last days. |
| [`find`](#find) | Find a single incident by id |
| [`findByCompany`](#findbycompany) | Find all open incidents for the given company. |
| [`getConfig`](#getconfig) | This endpoint returns the the configuration (errors_in_a_row, success_in_a_row) of all tools in the given project. It also handles tool inheritance. |


## `search`

Find all open incidents for the given project. Optionally it can be filtered by system.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/incident/incidents/{project}/search```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| system  | `INTEGER` |  no        |   | the system filter           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('incident');
$result = $repository->search($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('incident')
const result = await repository.search($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/incident/incidents/{project}/search
```


## `since`

Find all incidents that where open in the last days.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/incident/incidents/{project}/since```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| days  | `INTEGER` |  yes        |   | The number of days the incidents can old           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('incident');
$result = $repository->since($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('incident')
const result = await repository.since($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/incident/incidents/{project}/since
```


## `find`

Find a single incident by id

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/incident/incidents/{project}/{incident}```|
| Method   | GET                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - incident

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('incident');
$result = $repository->find($project, $incident);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('incident')
const result = await repository.find($project, $incident)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/incident/incidents/{project}/{incident}
```


## `findByCompany`

Find all open incidents for the given company.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/incident/incidents/company/{company}/search```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('incident');
$result = $repository->findByCompany($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('incident')
const result = await repository.findByCompany($company)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/incident/incidents/company/{company}/search
```


## `getConfig`

This endpoint returns the the configuration (errors_in_a_row, success_in_a_row) of all tools in the given project. It also handles tool inheritance.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/incident/tools/{project}```|
| Method   | GET                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('incident');
$result = $repository->getConfig($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('incident')
const result = await repository.getConfig($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/incident/tools/{project}
```

