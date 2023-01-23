# API endpoints for subscription repository


## getCompanySubscription

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/company/{company}/```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('subscription');
$result = $repository->getCompanySubscription($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('subscription')
const result = await repository.getCompanySubscription($company)
```


## setCompanyCreditCardPlans

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/company/{company}/plans/creditcard```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload
- quantity - The number of packets to be used

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('subscription');
$result = $repository->setCompanyCreditCardPlans($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('subscription')
const result = await repository.setCompanyCreditCardPlans($company)
```


## setCompanyFreePlans

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/company/{company}/plans/free```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload
- quantity - The number of packets to be used

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('subscription');
$result = $repository->setCompanyFreePlans($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('subscription')
const result = await repository.setCompanyFreePlans($company)
```


## setCompanyFreePlansByUser

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/user/{user}/plans/free```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload
- quantity - The number of packets to be used

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('subscription');
$result = $repository->setCompanyFreePlansByUser($user);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('subscription')
const result = await repository.setCompanyFreePlansByUser($user)
```


## setCreditCard

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/company/{company}/creditcard```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload
- stripe_cc_source - The stripe credit card id
- last_digits - The last 4 digits of the credit card
- brand - The credit cards brand

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('subscription');
$result = $repository->setCreditCard($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('subscription')
const result = await repository.setCreditCard($company)
```


## setBillingAddress

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/company/{company}/billingaddress```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload
- company_name - The companies name.
- country - The companies billing address country.
- postal_code - The companies billing address postal code.
- city - The companies billing address city.
- street - The companies billing address street.
- usident - The companies &quot;Umsatzsteuer-Identifikationsnummer&quot;.
- email - The email address the invoice information gets send to.

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('subscription');
$result = $repository->setBillingAddress($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('subscription')
const result = await repository.setBillingAddress($company)
```


## getBillingAddress

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/company/{company}/billingaddress```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('subscription');
$result = $repository->getBillingAddress($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('subscription')
const result = await repository.getBillingAddress($company)
```


## getSubscribedFeatures

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/company/{company}/features```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('subscription');
$result = $repository->getSubscribedFeatures($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('subscription')
const result = await repository.getSubscribedFeatures($company)
```


## getCompanyInvoices

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/company/{company}/invoices```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('subscription');
$result = $repository->getCompanyInvoices($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('subscription')
const result = await repository.getCompanyInvoices($company)
```


## setSubscriptionPlan

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/user/{user}/plan```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload
- identifier - 

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('subscription');
$result = $repository->setSubscriptionPlan($user);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('subscription')
const result = await repository.setSubscriptionPlan($user)
```


## getQuota

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/company/{company}/quota```

*Method*: GET

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('subscription');
$result = $repository->getQuota($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('subscription')
const result = await repository.getQuota($company)
```


## endTrials

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/trial/{providerIdentifier}/end```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - providerIdentifier

#### Payload

### SDK

#### PHP
```php
$repository = $koalityEngineClient->getRepository('subscription');
$result = $repository->endTrials($providerIdentifier);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('subscription')
const result = await repository.endTrials($providerIdentifier)
```

