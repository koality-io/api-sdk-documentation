[back to repository overview](../RepositoryOverviews.md)
# API endpoints for `crawler` repository

## List of all available methods

| Method                                        | Description                                                            |
|:----------------------------------------------|:-----------------------------------------------------------------------|
| [`runCompanyCrawl`](#runcompanycrawl) | Run a crawl for a given checklist |
| [`runCrawl`](#runcrawl) | Run a crawl for a given checklist |
| [`getCrawlableCollections`](#getcrawlablecollections) | Get all collections that can be crawled. |
| [`abortCrawl`](#abortcrawl) | Abort a running crawl. The effect can take up to 5 minutes. |
| [`listCrawls`](#listcrawls) | Return all crawl by the given parameters |
| [`listCompanyCrawls`](#listcompanycrawls) | Return all crawl of the given company |
| [`getCrawlCsv`](#getcrawlcsv) | Return the detailed information for a given crawl with all results (as CSV). |
| [`getCrawl`](#getcrawl) | Return the detailed information for a given crawl with all results. |
| [`getCrawlerStatus`](#getcrawlerstatus) | Return the crawler status for a given project. |
| [`getCompanyCrawlerStatus`](#getcompanycrawlerstatus) | Return the crawler status for a given company. |
| [`setCheckStatus`](#setcheckstatus) | Set check status for a single url |
| [`deleteCheckStatus`](#deletecheckstatus) | Delete check status by id |
| [`listCheckStatus`](#listcheckstatus) | List check status by company |
| [`listCrawlSchedules`](#listcrawlschedules) | List scheduled crawls by company |
| [`showCrawlSchedule`](#showcrawlschedule) | Show scheduled crawl by id |
| [`createCrawlSchedule`](#createcrawlschedule) | Create a crawl schedule |
| [`updateCrawlSchedule`](#updatecrawlschedule) | Update a crawl schedule by id |
| [`deleteCrawlSchedule`](#deletecrawlschedule) | Delete crawl schedule by id |
| [`runScheduledCrawl`](#runscheduledcrawl) | Run a scheduled crawl immediately |


## `runCompanyCrawl`

Run a crawl for a given checklist

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/crawler/crawl/company/{company}```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| user  | `INTEGER` |  yes        |   | The user (id) that starts the crawl and gets informed when the crawl finishes           |
| checklist_name  | `STRING` |  no        |   | The check lists name           |
| collections  | `LIST` |  no        |   | The additional collections           |
| name  | `STRING` |  yes        |   | The crawls name           |
| depth  | `INTEGER` |  no        | 50  | Number of URLs to be crawled           |
| path  | `STRING` |  yes        |   | The URL the crawler starts to crawl           |
| parallel_requests  | `INTEGER` |  no        | 8  | Number of parallel requests that can be done           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('crawler');
$result = $repository->runCompanyCrawl($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('crawler')
const result = await repository.runCompanyCrawl($company)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/crawler/crawl/company/{company}
```

[top](#list-of-all-available-methods)


## `runCrawl`

Run a crawl for a given checklist

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/crawler/crawl/{project}```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| user  | `INTEGER` |  yes        |   | The user (id) that starts the crawl and gets informed when the crawl finishes           |
| checklist_name  | `STRING` |  no        |   | The check lists name           |
| collections  | `LIST` |  no        |   | The additional collections           |
| name  | `STRING` |  yes        |   | The crawls name           |
| system  | `INTEGER` |  yes        |   | The systems id           |
| depth  | `INTEGER` |  no        | 5  | Number of URLs to be crawled           |
| path  | `STRING` |  no        | /  | The URL the crawler starts to crawl           |
| parallel_requests  | `INTEGER` |  no        | 8  | Number of parallel requests that can be done           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('crawler');
$result = $repository->runCrawl($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('crawler')
const result = await repository.runCrawl($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/crawler/crawl/{project}
```

[top](#list-of-all-available-methods)


## `getCrawlableCollections`

Get all collections that can be crawled.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/crawler/collections```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('crawler');
$result = $repository->getCrawlableCollections();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('crawler')
const result = await repository.getCrawlableCollections()
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/crawler/collections
```

[top](#list-of-all-available-methods)


## `abortCrawl`

Abort a running crawl. The effect can take up to 5 minutes.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/crawler/crawl/{project}/{crawl}```|
| Method   | PUT                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - crawl

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('crawler');
$result = $repository->abortCrawl($project, $crawl);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('crawler')
const result = await repository.abortCrawl($project, $crawl)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X PUT https://api.cluster1.koalityengine.com/crawler/crawl/{project}/{crawl}
```

[top](#list-of-all-available-methods)


## `listCrawls`

Return all crawl by the given parameters

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/crawler/crawl/{project}/crawls```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| checklist_name  | `STRING` |  no        |   | The check lists name           |
| system  | `INTEGER` |  yes        |   | The systems id           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('crawler');
$result = $repository->listCrawls($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('crawler')
const result = await repository.listCrawls($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/crawler/crawl/{project}/crawls
```

[top](#list-of-all-available-methods)


## `listCompanyCrawls`

Return all crawl of the given company

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/crawler/crawl/company/{company}/crawls```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| pagination_start  | `INTEGER` |  no        |   |            |
| pagination_size  | `INTEGER` |  no        | 25  |            |
| include_collections  | `BOOLEAN` |  no        | false  |            |
| crawl_schedule  | `INTEGER` |  no        |   | Only show results for given crawl schedule           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('crawler');
$result = $repository->listCompanyCrawls($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('crawler')
const result = await repository.listCompanyCrawls($company)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/crawler/crawl/company/{company}/crawls
```

[top](#list-of-all-available-methods)


## `getCrawlCsv`

Return the detailed information for a given crawl with all results (as CSV).

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/crawler/crawl/detail/csv/{crawl}/{downloadSecret}```|
| Method   | GET                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - crawl
 - downloadSecret

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('crawler');
$result = $repository->getCrawlCsv($crawl, $downloadSecret);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('crawler')
const result = await repository.getCrawlCsv($crawl, $downloadSecret)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/crawler/crawl/detail/csv/{crawl}/{downloadSecret}
```

[top](#list-of-all-available-methods)


## `getCrawl`

Return the detailed information for a given crawl with all results.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/crawler/crawl/detail/{crawl}```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - crawl

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('crawler');
$result = $repository->getCrawl($crawl);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('crawler')
const result = await repository.getCrawl($crawl)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/crawler/crawl/detail/{crawl}
```

[top](#list-of-all-available-methods)


## `getCrawlerStatus`

Return the crawler status for a given project.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/crawler/status/{project}```|
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
$repository = $koalityEngineClient->getRepository('crawler');
$result = $repository->getCrawlerStatus($project);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('crawler')
const result = await repository.getCrawlerStatus($project)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/crawler/status/{project}
```

[top](#list-of-all-available-methods)


## `getCompanyCrawlerStatus`

Return the crawler status for a given company.

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/crawler/status/company/{company}```|
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
$repository = $koalityEngineClient->getRepository('crawler');
$result = $repository->getCompanyCrawlerStatus($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('crawler')
const result = await repository.getCompanyCrawlerStatus($company)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/crawler/status/company/{company}
```

[top](#list-of-all-available-methods)


## `setCheckStatus`

Set check status for a single url

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/crawler/company/{company}/check/status```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| check_type  | `MIXED` |  yes        |   | The check type (DeadLink)           |
| check_status  | `MIXED` |  yes        |   | The status that should be set           |
| url  | `STRING` |  yes        |   | The url that status is valid for           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('crawler');
$result = $repository->setCheckStatus($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('crawler')
const result = await repository.setCheckStatus($company)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/crawler/company/{company}/check/status
```

[top](#list-of-all-available-methods)


## `deleteCheckStatus`

Delete check status by id

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/crawler/company/{company}/check/status/{crawlUrlStatus}```|
| Method   | DELETE                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company
 - crawlUrlStatus

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('crawler');
$result = $repository->deleteCheckStatus($company, $crawlUrlStatus);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('crawler')
const result = await repository.deleteCheckStatus($company, $crawlUrlStatus)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X DELETE https://api.cluster1.koalityengine.com/crawler/company/{company}/check/status/{crawlUrlStatus}
```

[top](#list-of-all-available-methods)


## `listCheckStatus`

List check status by company

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/crawler/company/{company}/check/status```|
| Method   | GET                                      |

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
$repository = $koalityEngineClient->getRepository('crawler');
$result = $repository->listCheckStatus($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('crawler')
const result = await repository.listCheckStatus($company)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/crawler/company/{company}/check/status
```

[top](#list-of-all-available-methods)


## `listCrawlSchedules`

List scheduled crawls by company

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/crawler/company/{company}/schedules```|
| Method   | GET                                      |

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
$repository = $koalityEngineClient->getRepository('crawler');
$result = $repository->listCrawlSchedules($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('crawler')
const result = await repository.listCrawlSchedules($company)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/crawler/company/{company}/schedules
```

[top](#list-of-all-available-methods)


## `showCrawlSchedule`

Show scheduled crawl by id

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/crawler/company/{company}/schedules/{crawlSchedule}```|
| Method   | GET                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company
 - crawlSchedule

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('crawler');
$result = $repository->showCrawlSchedule($company, $crawlSchedule);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('crawler')
const result = await repository.showCrawlSchedule($company, $crawlSchedule)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X GET https://api.cluster1.koalityengine.com/crawler/company/{company}/schedules/{crawlSchedule}
```

[top](#list-of-all-available-methods)


## `createCrawlSchedule`

Create a crawl schedule

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/crawler/company/{company}/schedules```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| path  | `STRING` |  yes        |   | The URL the crawler starts to crawl           |
| depth  | `INTEGER` |  no        | 50  | Number of URLs to be crawled           |
| parallel_requests  | `INTEGER` |  no        | 8  | Number of parallel requests that can be done           |
| interval  | `MIXED` |  yes        |   | Interval at which a crawl is started           |
| timeslot  | `MIXED` |  yes        |   | Time window in which a crawl is started           |
| day_of_month_or_week  | `INTEGER` |  no        |   | Day of month or week on which a crawl is started if interval is weekly or monthly           |
| collections  | `LIST` |  yes        |   | The additional collections           |
| timezone  | `STRING` |  yes        |   | The time zone for which the timeslot applies           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('crawler');
$result = $repository->createCrawlSchedule($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('crawler')
const result = await repository.createCrawlSchedule($company)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/crawler/company/{company}/schedules
```

[top](#list-of-all-available-methods)


## `updateCrawlSchedule`

Update a crawl schedule by id

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/crawler/company/{company}/schedules/{crawlSchedule}```|
| Method   | PATCH                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company
 - crawlSchedule

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| path  | `STRING` |  no        |   | The URL the crawler starts to crawl           |
| depth  | `INTEGER` |  no        | 50  | Number of URLs to be crawled           |
| parallel_requests  | `INTEGER` |  no        | 8  | Number of parallel requests that can be done           |
| interval  | `MIXED` |  no        |   | Interval at which a crawl is started           |
| timeslot  | `MIXED` |  no        |   | Time window in which a crawl is started           |
| day_of_month_or_week  | `INTEGER` |  no        |   | Day of month or week on which a crawl is started if interval is weekly or monthly           |
| collections  | `LIST` |  no        |   | The additional collections           |
| enabled  | `BOOLEAN` |  no        |   | Enable or disable the schedule           |
| timezone  | `STRING` |  no        |   | The time zone for which the timeslot applies           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('crawler');
$result = $repository->updateCrawlSchedule($company, $crawlSchedule);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('crawler')
const result = await repository.updateCrawlSchedule($company, $crawlSchedule)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X PATCH https://api.cluster1.koalityengine.com/crawler/company/{company}/schedules/{crawlSchedule}
```

[top](#list-of-all-available-methods)


## `deleteCrawlSchedule`

Delete crawl schedule by id

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/crawler/company/{company}/schedules/{crawlSchedule}```|
| Method   | DELETE                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company
 - crawlSchedule

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('crawler');
$result = $repository->deleteCrawlSchedule($company, $crawlSchedule);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('crawler')
const result = await repository.deleteCrawlSchedule($company, $crawlSchedule)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X DELETE https://api.cluster1.koalityengine.com/crawler/company/{company}/schedules/{crawlSchedule}
```

[top](#list-of-all-available-methods)


## `runScheduledCrawl`

Run a scheduled crawl immediately

### Endpoint
| Endpoint |                                                                       |
|:---------|:----------------------------------------------------------------------|
| Url      | ```https://api.cluster1.koalityengine.com/crawler/company/{company}/schedules/{crawlSchedule}/crawl```|
| Method   | POST                                      |

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company
 - crawlSchedule

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('crawler');
$result = $repository->runScheduledCrawl($company, $crawlSchedule);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('crawler')
const result = await repository.runScheduledCrawl($company, $crawlSchedule)
```

#### curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST https://api.cluster1.koalityengine.com/crawler/company/{company}/schedules/{crawlSchedule}/crawl
```

[top](#list-of-all-available-methods)

