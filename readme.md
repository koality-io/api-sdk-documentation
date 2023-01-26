> **Warning**
> This API documentation is work in progress and only ALPHA. Please do not use it at the moment.

# KoalityEngine API documentation

> **Note**
> We highly recommend not to use the plain HTTP API endpoints. The KoalityEngine provided different [SDKs](#sdk) that should be used instead. 

This is the official API documentation for the KoalityEngine. It can be used automate workflows in koality.io or even to create a new products or integrate data and functionalities into other products.

This documentation is a living document. If something is missing please contact out support team (support@koality.io).

- [General information](docs/general.md)

## Applications

When using the KoalityEngine API you will often see the `Application` as a concept. If you just want to use the API to manage your koality.io accounts the application id will be `koality`, if you create your own independent application you will get your own application id from our team.

## Standard Workflows

We provide a list of standard workflows that should be part of every application that is build on the shoulders of the KoalityEngine. 

### Create systems

- [Create a new user](examples/create/createUser.md)
- [Login with username and password](examples/create/login.md)
- [Create a new system](examples/create/createSystem.md)
  - [Get all system types](examples/read/getSystemTypes.md)
- [Add new component (url) to project](examples/create/createComponent.md)
  - [Get all component types](examples/read/getComponentTypes.md)

### Retrieve data

- [List all projects](examples/read/listProjects.md)
- [Get scores by user](examples/read/listScores.md)
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

### CLI Client (beta)

- [Go to CLI client GitHub Repository](https://github.com/koality-io/KoalityEngineCli)
