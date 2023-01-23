# API endpoints for `AlertingChannel` repository


## `list`

List all channels for the given project.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/alerting/channels/{project}```

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
$repository = $koalityEngineClient->getRepository('AlertingChannel');
$result = $repository->list($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('AlertingChannel')
const result = await repository.list($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/alerting/channels/{project}
```


## `create`

Create a new notification channel. At the moment only e-mail is provided.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/alerting/channels/{project}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| name  | `STRING` |  yes        |   | The name of the alert channel           |
| type  | `MIXED` |  yes        |   |            |
| options  | `LIST` |  yes        |   |            |
| language  | `STRING` |  no        |   | The language the alert should be send in. If not value is set the default provider language is taken.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('AlertingChannel');
$result = $repository->create($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('AlertingChannel')
const result = await repository.create($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/alerting/channels/{project}
```


## `update`

Update an existing notification channel.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/alerting/channels/{project}/{channel}```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - channel

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| name  | `STRING` |  no        |   |            |
| type  | `MIXED` |  yes        |   |            |
| options  | `LIST` |  no        |   |            |
| language  | `STRING` |  no        |   | The language the alert should be send in           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('AlertingChannel');
$result = $repository->update($project, $channel);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('AlertingChannel')
const result = await repository.update($project, $channel)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X PUT https://api.cluster1.koalityengine.com/alerting/channels/{project}/{channel}
```


## `delete`

Delete the given channel.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/alerting/channels/{project}/{channel}```

*Method*: DELETE

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - channel

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('AlertingChannel');
$result = $repository->delete($project, $channel);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('AlertingChannel')
const result = await repository.delete($project, $channel)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X DELETE https://api.cluster1.koalityengine.com/alerting/channels/{project}/{channel}
```

