# API endpoints for `CustomerMehrwertsteuercheck` repository


## `runMwstCrawl`

Mehrwertsteuer Check only: Start a new crawl for the given start page. Max. 100 urls are crawled with 4 parallel requests.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/customers/mehrwertsteuer/crawl```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| email_address  | `STRING` |  yes        |   | The email address the crawl result is send to.           |
| start_url  | `URL` |  yes        |   | The url the crawler should start with.           |

### SDK

We strongly recommend to use the SDK that are provided.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CustomerMehrwertsteuercheck');
$result = $repository->runMwstCrawl();
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CustomerMehrwertsteuercheck')
const result = await repository.runMwstCrawl()
```


## `showCrawlResult`

Mehrwertsteuer Check only: get the status and check result of the crawl with the given unique identifier

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/customers/mehrwertsteuer/crawl/{crawlIdentifier}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - crawlIdentifier

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided.

#### PHP
```php
$repository = $koalityEngineClient->getRepository('CustomerMehrwertsteuercheck');
$result = $repository->showCrawlResult($crawlIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('CustomerMehrwertsteuercheck')
const result = await repository.showCrawlResult($crawlIdentifier)
```

