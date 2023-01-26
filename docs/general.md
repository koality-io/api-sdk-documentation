# General Information

## Clusters / Data Sharding

## Error handling

API responses from the API will always be in JSON format and will contain a `status` field. If the value of the field is `error` there will be a detailed message that describes the actual problem.

### Example

```json
{
    "status": "error",
    "message": "No route found for \u0022POST \/kapi\/project\/screenshots\/system\u0022"
}
```
