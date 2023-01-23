# API endpoints for Component repository


## showComponents

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/components/{component}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - component

#### Payload

### SDK

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


## createComponent

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/components```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload
- system - 
- enableToolsBySystem - 

### SDK

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


## createComponents

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/components/many```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload
- system - The system the components are part of,
- enableToolsBySystem - If true all checks from the parent system are inherited.
- updateIfComponentSuggestionExists - If true and a component with the same suggestion id already exists it will be updated.
- components - List of components that should be created/updated.

### SDK

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


## updateComponent

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/components/{component}```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - component

#### Payload

### SDK

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


## deleteComponent

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/components/{component}```

*Method*: DELETE

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - component

#### Payload

### SDK

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


## showComponentTypes

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/project/components/componenttypes/{project}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload

### SDK

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

