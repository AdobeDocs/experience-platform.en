---
title: Flow Service Error Messages For Sources
description: This document provides a catalog of error messages, descriptions, and suggested resolutions regarding Flow Service for Sources.
hide: true
hidefromtoc: true
---
# Flow Service error messages for sources

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Platform. The service provides a user interface and RESTful API that lets you set-up source connections to various data providers with ease. These source connections enable you to authenticate your third-party systems, set times for ingestion runs, and manage data ingestion throughput.

This document provides a catalog of error messages, descriptions, and suggested resolutions regarding Flow Service for sources.

| Error code | Title | Detailed message | Notes |
| --- | --- | --- | --- |
| `1100-400` | Invalid request | The request could not be processed. Error from flow provider: {MESSAGE}. |
| `1101-404` | Resource not found | The requested resource is not found. Error from flow provider: {MESSAGE}. |
| `1102-500` | Internal Error | An internal error has occurred. Please try again. If the problem persists, please contact customer support. |
| `1103-503` | Service Unavailable | The service is temporarily unavailable. Please try again. If the problem persists, please contact customer support. |
| `1104-504` | Gateway Timeout | A gateway timeout has occurred. Please try again. If the problem persists, please contact customer support. |
| `1400-500` | Internal Error | An internal error has occurred. Please try again. If the problem persists, please contact customer support. |
| `1401-400` | Invalid request | The limit and count parameters cannot be given together in the same request. Please provide either only the limit or the count parameter and try again. |
| `1402-400` | Invalid request | The action {ACTION} is supported for provider requests only. | 
| `1403-400` | Header is missing | The header {HEADER} is missing in the request. Please provide the header and try again. |
| `1404-412` | Version not matching | The supplied version {VERSION} does not match the current version on entity {ENTITY}. Please ensure that the supplied version matches the current version on entity and try again. |
| `1405-400` | Invalid request | The request body cannot be null or empty. Please provide a request body and try again. |
| `1406-400` | Invalid request | The sub operation {SUB-OPERATION} cannot be applied with other sub operations. Please update the sub operations list and try again. |
| `1407-400` | Invalid request | The status {STATUS} cannot be used with the `progress` sub operation. Please remove the `progress` subOp or use the status='inProgress' and try again. |
| `1408-400` | Invalid request | The percent-completed should be 100 for the completed or failed states. Please update the percent-completed and try again. |
| `1409-400` | Invalid request | The operation {OPERATION} cannot be applied on the current state {STATE}. Please update the operation and try again. |
| `1410-400` | Invalid request | `State` is not allowed in the create flow request. |
| `1411-400` | Invalid request | *The entity ID could not be retrieved because an invalid request was received with path {PATH}. Please update the request and try again.* | 
| `1412-400` | Invalid request | *The mapping version provided in the request is invalid. Please provide the correct mapping version and try again.* |
| `1413-400` | Invalid request | The spec ID provided is  invalid. Please provide a valid spec ID and try again. |
| `1414-400` | Invalid request | The connection spec of a connection cannot be updated. |
| `1415-400` | Invalid request | The auth spec {SPEC} could not be found for the connection spec ID {id}. |
| `1416-400` | Invalid request | *Requests for delete or update can only be applied to connections that have a state of enabled, disabled, or initializing.* |
| `1417-400` | Invalid request | *The request to delete or update connections with the state of `initializing` is not allowed with the user token.* |
| `1418-400` | Invalid request | The base connection with the ID {id} cannot be deleted because the base connection is being used in one or more flows. Please ensure that corresponding flows are deleted before deleting a base connection. |
| `1419-400` | Invalid request | *An error occurred while validating mapping with ID {id} and version {VERSION}. This could be because of inadequate permissions on mapped fields. Please check your mapped fields or contact your administrator to resolve permissions and try again.* |
| `1420-400` | Invalid request | The current state {state} cannot be updated. |
| `1421-400` | Invalid request | The current state {state} cannot be transitioned. |
| `1422-400` | Invalid request | The action {action} cannot be applied on the current state {state}. Please update the action and try again. |
| `1423-400` | Invalid request | An unhandled field {field} was provided in ConnectionSpecFiltering. Please update the field {field} and try again. |
| `1424-400` | Invalid request | *The `OrderBy` parameter is not supported with cross-sandbox query.* |
| `1425-400` | Invalid request | *An error occurred while matching the schema in the target dataset {DATASET_ID} with the schema in the mapping {MAPPING_ID}. The mapping and the target dataset schemas must use the same ID and version. Please update the request and try again.* |
| 1426-400` | Invalid request | The user token is unauthorized to create or updated the connection spec. Please ensure that the user token is authorized and try again. |
| `1427-400` | Invalid request | The user token is unauthorized to create or update flow runs. Please ensure that the user token is authorized and try again. |
| `1428-400` | Invalid request | *The predecessor flow run was not find with ID {id}.* |
| `1429-400` | Invalid request | *The predecessor flow was not found with ID {id}.* |
| `1430-400` | Invalid request | *The flow with ID {id} was not found. Please ensure that the flow with ID {id} exists and try again. |
| `1431-400` | Invalid request | 
| `1432-400` | Invalid request | *The sort order specified in the request is invalid. You must prepend a plus sign (`+`) for ascending order and a minus sign (`-`) for descending order in the field name.* |
| `1433-400` | Invalid request | *An incorrect field {FIELD} was passed in orderBy. Supported field examples include: [+name, -name, name].* |
| `1434-400` | Invalid request | Unsupported operation {OPERATION} received. Please use one of the supported operation types and try again. |
| `1435-400` | Invalid request | Unsupported sub action {SUB_ACTION} received. Please use one of the supported sub action types and try again. |
| `1436-400` | Invalid request | Unsupported sub operation {SUB_OPERATION} received for operation {OPERATION}. |
| `1437-400` | Invalid request | Unsupported status value {VALUE} received. Please update the status value and try again. |
| `1438-400` | Invalid request | Unsupported aggregate operation {OPERATION} received. |
| `1439-400` | Resource not found | The requested {TYPE} resource {id} is not found. Verify the resource ID before trying again. |
| `1440-400` | Invalid request | *Operator {OPERATOR} not implemented. Please add an operator and try again.* |
| `1441-400` | Invalid request | *Aggregate function {FUNCTION} not implemented. Please add an aggregate function and try again. |
