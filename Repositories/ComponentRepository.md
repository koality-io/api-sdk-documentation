[back to repository overview](../RepositoryOverviews.md)
# API endpoints for `Component` repository

## List of all available methods

| Method                                        | Description                                                            |
|:----------------------------------------------|:-----------------------------------------------------------------------|
| [`showComponents`](#showcomponents) | Get all information about the given component. |
| [`createComponent`](#createcomponent) | Create a new component. |
| [`createComponents`](#createcomponents) | Create a set of new components for a given system. |
| [`updateComponent`](#updatecomponent) | Update the given component. |
| [`deleteComponent`](#deletecomponent) | Mark the given component as deleted. |
| [`showComponentTypes`](#showcomponenttypes) | Show all existing component types. |


## `showComponents`

Get all information about the given component.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/project/components/{component}```|
| Method   | GET                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - component

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('Component');
$result = $repository->showComponents($component);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('Component')
const result = await repository.showComponents($component)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/project/components/{component}
```

[top](#list-of-all-available-methods)


## `createComponent`

Create a new component.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/project/components```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| system  | `INTEGER` |  yes        |   | The id of the system the component should be added to.           |
| enableToolsBySystem  | `BOOLEAN` |  no        | true  | If true, the most important checks for that system and system_type are already added. This is recommended.           |
| url  | `STRING` |  yes        |   | The URL of the component. It must be the same main domain as the system.           |
| name  | `STRING` |  yes        |   | The name of the component that is used to identify it.           |
| device_id  | `INTEGER` |  yes        |   | The id of the device that is used to make the checks. It changes viewport and user agent.           |
| system_type_id  | `INTEGER` |  yes        |   | The id of the system type that was chosen for the compoent.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('Component');
$result = $repository->createComponent();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('Component')
const result = await repository.createComponent()
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/project/components
```

[top](#list-of-all-available-methods)


## `createComponents`

Create a set of new components for a given system.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/project/components/many```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| system  | `INTEGER` |  yes        |   | The system the components are part of,           |
| enableToolsBySystem  | `BOOLEAN` |  no        | true  | If true all checks from the parent system are inherited.           |
| updateIfComponentSuggestionExists  | `BOOLEAN` |  no        | false  | If true and a component with the same suggestion id already exists it will be updated.           |
| components  | `LIST` |  yes        |   | List of components that should be created/updated.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('Component');
$result = $repository->createComponents();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('Component')
const result = await repository.createComponents()
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/project/components/many
```

[top](#list-of-all-available-methods)


## `updateComponent`

Update the given component.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/project/components/{component}```|
| Method   | PUT                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - component

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('Component');
$result = $repository->updateComponent($component);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('Component')
const result = await repository.updateComponent($component)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X PUT https://api.cluster1.koalityengine.com/project/components/{component}
```

[top](#list-of-all-available-methods)


## `deleteComponent`

Mark the given component as deleted.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/project/components/{component}```|
| Method   | DELETE                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - component

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('Component');
$result = $repository->deleteComponent($component);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('Component')
const result = await repository.deleteComponent($component)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X DELETE https://api.cluster1.koalityengine.com/project/components/{component}
```

[top](#list-of-all-available-methods)


## `showComponentTypes`

Show all existing component types.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/project/components/componenttypes/{project}```|
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
$repository = $koalityEngineClient->getRepository('Component');
$result = $repository->showComponentTypes($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('Component')
const result = await repository.showComponentTypes($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/project/components/componenttypes/{project}
```

[top](#list-of-all-available-methods)

