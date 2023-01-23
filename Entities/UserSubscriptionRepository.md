# API endpoints for UserSubscription repository


## update

### Endpoint

*Url*: ```https://api.cluster1.koalityengine.com/user/subscriptions/{user}```

*Method*: PUT

Be aware that the cluster ID (e.g. `cluster1`) depends on the user you are logged in with.

### Parameters

#### URL parameters
 - user

#### Payload
- system_count - The number of systems the user is allowed to create.

### SDK

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

