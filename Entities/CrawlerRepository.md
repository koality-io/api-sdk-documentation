# API endpoints for crawler repository


## runCompanyCrawl

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/crawler/crawl/company/{company}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload
- user - The user (id) that starts the crawl and gets informed when the crawl finishes
- checklist_name - The check lists name
- collections - The additional collections
- name - The crawls name
- depth - Number of URLs to be crawled
- path - The URL the crawler starts to crawl
- parallel_requests - Number of parallel requests that can be done

### SDK

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


## runCrawl

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/crawler/crawl/{project}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload
- user - The user (id) that starts the crawl and gets informed when the crawl finishes
- checklist_name - The check lists name
- collections - The additional collections
- name - The crawls name
- system - The systems id
- depth - Number of URLs to be crawled
- path - The URL the crawler starts to crawl
- parallel_requests - Number of parallel requests that can be done

### SDK

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


## getCrawlableCollections

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/crawler/collections```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload

### SDK

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


## abortCrawl

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/crawler/crawl/{project}/{crawl}```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project
 - crawl

#### Payload

### SDK

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


## listCrawls

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/crawler/crawl/{project}/crawls```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload
- checklist_name - The check lists name
- system - The systems id

### SDK

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


## listCompanyCrawls

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/crawler/crawl/company/{company}/crawls```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload
- pagination_start - 
- pagination_size - 
- include_collections - 
- crawl_schedule - Only show results for given crawl schedule

### SDK

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


## getCrawlCsv

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/crawler/crawl/detail/csv/{crawl}/{downloadSecret}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - crawl
 - downloadSecret

#### Payload

### SDK

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


## getCrawl

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/crawler/crawl/detail/{crawl}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - crawl

#### Payload

### SDK

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


## getCrawlerStatus

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/crawler/status/{project}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - project

#### Payload

### SDK

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


## getCompanyCrawlerStatus

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/crawler/status/company/{company}```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload

### SDK

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


## setCheckStatus

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/crawler/company/{company}/check/status```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload
- check_type - The check type (DeadLink)
- check_status - The status that should be set
- url - The url that status is valid for

### SDK

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


## deleteCheckStatus

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/crawler/company/{company}/check/status/{crawlUrlStatus}```

*Method*: DELETE

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company
 - crawlUrlStatus

#### Payload

### SDK

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


## listCheckStatus

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/crawler/company/{company}/check/status```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload

### SDK

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


## listCrawlSchedules

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/crawler/company/{company}/schedules```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload

### SDK

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


## showCrawlSchedule

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/crawler/company/{company}/schedules/{crawlSchedule}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company
 - crawlSchedule

#### Payload

### SDK

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


## createCrawlSchedule

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/crawler/company/{company}/schedules```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload
- path - The URL the crawler starts to crawl
- depth - Number of URLs to be crawled
- parallel_requests - Number of parallel requests that can be done
- interval - Interval at which a crawl is started
- timeslot - Time window in which a crawl is started
- day_of_month_or_week - Day of month or week on which a crawl is started if interval is weekly or monthly
- collections - The additional collections
- timezone - The time zone for which the timeslot applies

### SDK

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


## updateCrawlSchedule

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/crawler/company/{company}/schedules/{crawlSchedule}```

*Method*: PATCH

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company
 - crawlSchedule

#### Payload
- path - The URL the crawler starts to crawl
- depth - Number of URLs to be crawled
- parallel_requests - Number of parallel requests that can be done
- interval - Interval at which a crawl is started
- timeslot - Time window in which a crawl is started
- day_of_month_or_week - Day of month or week on which a crawl is started if interval is weekly or monthly
- collections - The additional collections
- enabled - Enable or disable the schedule
- timezone - The time zone for which the timeslot applies

### SDK

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


## deleteCrawlSchedule

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/crawler/company/{company}/schedules/{crawlSchedule}```

*Method*: DELETE

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company
 - crawlSchedule

#### Payload

### SDK

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


## runScheduledCrawl

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/crawler/company/{company}/schedules/{crawlSchedule}/crawl```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company
 - crawlSchedule

#### Payload

### SDK

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

