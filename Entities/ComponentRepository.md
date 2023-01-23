# API endpoints for `Component` repository


## `showComponents`

Get all information about the given component.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/components/{component}```

*Method*: GET

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


## `createComponent`

Create a new component.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/components```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| system  | `INTEGER` |  yes        |   |            |
| enableToolsBySystem  | `BOOLEAN` |  no        | true  |            |

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


## `createComponents`

Create a set of new components for a given system.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/components/many```

*Method*: POST

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


## `updateComponent`

Update the given component.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/components/{component}```

*Method*: PUT

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


## `deleteComponent`

Mark the given component as deleted.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/components/{component}```

*Method*: DELETE

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


## `showComponentTypes`

Show all existing component types.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/components/componenttypes/{project}```

*Method*: GET

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

