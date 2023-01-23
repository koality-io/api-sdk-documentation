> **Warning**
> This API documentation is work in progress and only ALPHA. Please do not use it at the moment.

# KoalityEngine API documentation

> **Note**
> We highly recommend not to use the plain HTTP API endpoints. The KoalityEngine provided different SDK that should be used instead. 

This is the official API documentation for the KoalityEngine. It can be used automate workflows in koality.io or even to create a new products or integrate data and functionalities into other products.

This documentation is a living document. If something is missing please contact out support team (support@koality.io).

## Standard Workflows

We provide a list of standard workflows that should be part of every application that is build on the shoulders of the KoalityEngine. 

### Create systems

- [Login with username and password](examples/create/login.md)
- [Create a new system](examples/create/createSystem.md)
  - [Get all system types](examples/read/getSystemTypes.md)
- [Add new component (url) to project](examples/create/newComponent.md)

### Retrieve data

- [List all projects](examples/read/listProjects.md)
- Get scores
- Get get historical data

## API Endpoints

- [List of API endpoints](RepositoryOverviews.md)

## SDK

We automatically generate SDKs for the KoalityEngine API that are updated everytime something at the official API changes. Please be sure to use those SDKs.

The koality.io team is also using those SDKs so you can be sure those are always working.

### PHP SDK

- [Go to PHP GitHub Repository](https://github.com/leankoala-gmbh/leankoala-client-php)

### TypeScript SDKs

- [Go to JavaScript GitHub Repository](https://github.com/leankoala-gmbh/leankoala-client-typescript)

### JavaScript SDKs

- [Go to JavaScript GitHub Repository](https://github.com/leankoala-gmbh/leankoala-client-javascript)



