# API endpoints for `subscription` repository


## `getCompanySubscription`

Get the companies subscription information.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/company/{company}/```

*Method*: GET

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
$repository = $koalityEngineClient->getRepository('subscription');
$result = $repository->getCompanySubscription($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('subscription')
const result = await repository.getCompanySubscription($company)
```


## `setCompanyCreditCardPlans`

Set the companies credit card plans.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/company/{company}/plans/creditcard```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| quantity  | `INTEGER` |  yes        |   | The number of packets to be used           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `setCompanyFreePlans`

Set the companies free plans.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/company/{company}/plans/free```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| quantity  | `INTEGER` |  yes        |   | The number of packets to be used           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `setCompanyFreePlansByUser`

Set the companies free plans by user.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/user/{user}/plans/free```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| quantity  | `INTEGER` |  yes        |   | The number of packets to be used           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `setCreditCard`

Set the companies credit card.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/company/{company}/creditcard```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| stripe_cc_source  | `MIXED` |  yes        |   | The stripe credit card id           |
| last_digits  | `STRING` |  yes        |   | The last 4 digits of the credit card           |
| brand  | `STRING` |  yes        |   | The credit cards brand           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `setBillingAddress`

Set the billing address information for the given company.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/company/{company}/billingaddress```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - company

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| company_name  | `STRING` |  yes        |   | The companies name.           |
| country  | `STRING` |  yes        |   | The companies billing address country.           |
| postal_code  | `STRING` |  yes        |   | The companies billing address postal code.           |
| city  | `STRING` |  yes        |   | The companies billing address city.           |
| street  | `STRING` |  yes        |   | The companies billing address street.           |
| usident  | `STRING` |  no        |   | The companies &quot;Umsatzsteuer-Identifikationsnummer&quot;.           |
| email  | `STRING` |  no        |   | The email address the invoice information gets send to.           |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `getBillingAddress`

Get the billing address information for the given company.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/company/{company}/billingaddress```

*Method*: GET

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
$repository = $koalityEngineClient->getRepository('subscription');
$result = $repository->getBillingAddress($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('subscription')
const result = await repository.getBillingAddress($company)
```


## `getSubscribedFeatures`

Get a list of features that are active.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/company/{company}/features```

*Method*: GET

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
$repository = $koalityEngineClient->getRepository('subscription');
$result = $repository->getSubscribedFeatures($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('subscription')
const result = await repository.getSubscribedFeatures($company)
```


## `getCompanyInvoices`

Get a list invoices for the given company.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/company/{company}/invoices```

*Method*: GET

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
$repository = $koalityEngineClient->getRepository('subscription');
$result = $repository->getCompanyInvoices($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('subscription')
const result = await repository.getCompanyInvoices($company)
```


## `setSubscriptionPlan`

Set the subscription plan of the given user.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/user/{user}/plan```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.

| Name                    | Type  | Required  | Default   | Desciption   |
|:----|:------|:----------|:-------------|:-------------|
| identifier  | `STRING` |  yes        |   |            |

### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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


## `getQuota`

Get current quota for the company.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/company/{company}/quota```

*Method*: GET

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
$repository = $koalityEngineClient->getRepository('subscription');
$result = $repository->getQuota($company);
```

#### JavaScript

```javascript
const repository = koalityEngineClient.getRepository('subscription')
const result = await repository.getQuota($company)
```


## `endTrials`

End all trials.

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/subscription/trial/{providerIdentifier}/end```

*Method*: POST

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - providerIdentifier

#### Payload parameters

All payload parameters have to be encrypted as a JSON body in the request.


### SDK

We strongly recommend to use the SDK that are provided. At the moment JavaScript and PHP SDKs are available.

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

