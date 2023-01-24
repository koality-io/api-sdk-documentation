# API endpoints for `UserSubscription` repository

## Methods

| Method                                        | Description                                                            |
|:----------------------------------------------|:-----------------------------------------------------------------------|
| [`update`](#update) | Update the subscription for a given user. |


## `update`

Update the subscription for a given user.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/user/subscriptions/{user}```|
| Method   | PUT                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| system_count  | `INTEGER` |  yes        |   | The number of systems the user is allowed to create.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('UserSubscription');
$result = $repository->update($user);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('UserSubscription')
const result = await repository.update($user)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X PUT https://api.cluster1.koalityengine.com/user/subscriptions/{user}
```

