# API endpoints for `Nixstats` repository

## Methods

| Method                                        | Description                                                            |
|:----------------------------------------------|:-----------------------------------------------------------------------|
| [`createWebsiteMonitor`](#createwebsitemonitor) | Create a new 360 website monitor. |


## `createWebsiteMonitor`

Create a new 360 website monitor.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/check/nixtstats/{company}/monitor/website```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| url  | `STRING` |  yes        |   |            |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('Nixstats');
$result = $repository->createWebsiteMonitor($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('Nixstats')
const result = await repository.createWebsiteMonitor($company)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/check/nixtstats/{company}/monitor/website
```

