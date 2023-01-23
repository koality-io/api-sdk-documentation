# API endpoints for CustomerMehrwertsteuercheck repository


## runMwstCrawl

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/customers/mehrwertsteuer/crawl```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### Payload
- email_address - The email address the crawl result is send to.
- start_url - The url the crawler should start with.

### SDK

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


## showCrawlResult

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/customers/mehrwertsteuer/crawl/{crawlIdentifier}```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - crawlIdentifier

#### Payload

### SDK

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

