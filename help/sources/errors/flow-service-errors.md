---
title: Flow Service Error Messages
description: Learn about the error messages that you may encounter when using Flow Service for sources.
exl-id: af79c547-25d0-459a-8de7-eb14206a8694
---
# Flow Service error messages

Flow Service is used to collect and centralize customer data from various disparate sources within Platform. The service provides a user interface and RESTful API that lets you set-up source connections to various data providers with ease. These source connections enable you to authenticate your third-party systems, set times for ingestion runs, and manage data ingestion throughput.

This document provides a catalog of error messages, descriptions, and suggested resolutions regarding Flow Service.

## Internal validation errors in Flow Service

The following table outlines errors regarding internal validation in Flow Service.

| Error code | Title | Detailed message |
| --- | --- | --- |
| `1100-400` | Invalid request | The request could not be processed. Error from flow provider: Not entitled to this operation. |
| `1101-404` | Resource not found | The requested resource is not found. Error from flow provider: Resource with given id does not exist. |
| `1102-500` | Internal Error | An internal error has occurred. Please try again. If the problem persists, please contact customer support. |
| `1103-503` | Service Unavailable | The service is temporarily unavailable. Please try again. If the problem persists, please contact customer support. |
| `1104-504` | Gateway Timeout | A gateway timeout has occurred. Please try again. If the problem persists, please contact customer support. |
| `1400-500` | Internal Error | An internal error has occurred. Please try again. If the problem persists, please contact customer support. |
| `1401-400` | Invalid request | The limit and count parameters cannot be given together in the same request. Please provide either only the limit or the count parameter and try again. |
| `1402-400` | Invalid request | The action 'finalize' is supported for provider requests only. | 
| `1403-400` | Header is missing | The header 'If-Match' is missing in the request. Please provide the header and try again. |
| `1404-412` | Version not matching | The supplied version 'v1' does not match the current version on entity 'cc01fc2c-0000-0200'. Please ensure that the supplied version matches the current version on entity and try again. |
| `1405-400` | Invalid request | The request body cannot be null or empty. Please provide a request body and try again. |
| `1406-400` | Invalid request | The sub operation 'progress' cannot be applied with other sub operations. Please update the sub operations list and try again. |
| `1407-400` | Invalid request | The status failed cannot be used with the `progress` subOp. Please remove the `progress` subOp or use the status='inProgress' and try again. |
| `1408-400` | Invalid request | The percent-completed should be 100 for the completed or failed states. Please update the percent-completed and try again. |
| `1409-400` | Invalid request | The operation 'finalize' cannot be applied on the current state enabled-finalizing. Please update the operation and try again. |
| `1410-400` | Invalid request | `State` is not allowed in the create flow request. |
| `1411-400` | Invalid request | Unable to retrieve entityId. Invalid request received with path 'baseConnections/123'. | 
| `1412-400` | Invalid request | Invalid Mapping Version in request. Please provide correct mapping version. |
| `1413-400` | Invalid request | The spec ID provided is  invalid. Please provide a valid spec ID and try again. |
| `1414-400` | Invalid request | The connection spec of a connection cannot be updated. |
| `1415-400` | Invalid request | The auth spec 'authConnection' could not be found for the connection spec ID ba6e206f-f233-ab16. |
| `1416-400` | Invalid request | Delete or Update can only be applied on connection with enabled, disabled or initializing state. |
| `1417-400` | Invalid request | Delete or Update on Connections in `initializing` state are not allowed with UserToken. |
| `1418-400` | Invalid request | The base connection with the ID 35dcaad3-122a-4278 cannot be deleted because the base connection is being used in one or more flows. Please ensure that corresponding flows are deleted before deleting a base connection. |
| `1419-400` | Invalid request | Error while validating mapping with id 45d90285d2d249acb87a72a2f12f7401, version 0. This could be because of inadequate permissions on mapped fields. Please check your mapping or contact your admin. |
| `1420-400` | Invalid request | The current state disabling cannot be updated. |
| `1421-400` | Invalid request | The current state updating cannot be transitioned. |
| `1422-400` | Invalid request | The action disable cannot be applied on the current state {state}. Please update the action and try again. |
| `1423-400` | Invalid request | An unhandled field baseSpec was provided in ConnectionSpecFiltering. Please update the field {field} and try again. |
| `1424-400` | Invalid request | OrderBy is not supported with cross sandbox query. |
| `1425-400` | Invalid request | Error while matching schema in target dataset 64ef1a3c0ef with schema in mapping 91ac5a2c0eb. Schema with same id and version must be used in both mapping and target dataset. |
| `1426-400` | Invalid request | The user token is unauthorized to create/update the connection spec. Please ensure that the user token is authorized and try again.|
| `1427-400` | Invalid request | The user token is unauthorized to create/update flow runs. Please ensure that the user token is authorized and try again. |
| `1428-400` | Invalid request | Predecessor flow run not found with id aa6a206f-f233-4c2d. |
| `1429-400` | Invalid request | Predecessor flow not found with id aa6a206f-f233-4c2d. |
| `1430-400` | Invalid request | Flow not found with id aa6a206f-f233-4c2d. |
| `1431-400` | Invalid request | Empty array 'fields' is not allowed in policy. |
| `1432-400` | Invalid request | Sort order specified is not correct, prepend + for ascending order and - for descending order in the fieldName. |
| `1433-400` | Invalid request | Incorrect field= #id passed in orderBy, example are +name, -name, name. |
| `1434-400` | Invalid request | Unsupported operation 'move' received. Please use one of the supported operation types and try again. |
| `1435-400` | Invalid request | Unsupported sub action 'reverse' received. Please use one of the supported sub action types and try again. |
| `1436-400` | Invalid request | Unsupported sub operation PROGRESS received for operation enable. |
| `1437-400` | Invalid request | Unsupported status value 'started' received. Please update the status value and try again. |
| `1438-400` | Invalid request | Unsupported aggregate operation 'average' received. |
| `1439-400` | Resource not found | The requested flows resource 3f4ae131-b384-4e73 is not found. Verify the resource ID before trying again. |
| `1440-400` | Invalid request | Operator '~' not implemented. |
| `1441-400` | Invalid request | Aggregate function 'average' not implemented. |
| `1442-400` | Invalid request | Aggregation not allowed on field id. |
| `1443-400` | Invalid request | Operator '<=' is not allowed for multiple values. |
| `1444-400` | Invalid request | Flow 3f4ae131-b384-4e73 is not in expected state pending. |
| `1445-400` | Invalid request | PATCH Connection Feature not enabled. |
| `1446-400` | Invalid request | The flow ID cannot be null or empty. Please update the flow ID and try again. |
| `1447-400` | Invalid request | Found active flows containing id aa6a206f-f233-4c2d. |
| `1448-400` | Invalid request | Operator >= not supported for field id. |
| `1449-400` | Invalid request | Invalid field connections in filter params. |
| `1450-400` | Invalid request | Invalid operator !> in filter params. |
| `1451-400` | Invalid request | Invalid params testParam provided in query params. |
| `1452-400` | Invalid request | Invalid value 1676643256,1676643210 for field createdAt. |
| `1453-400` | Invalid request | Invalid query value createdAt== provided in query param. |
| `1454-400` | Invalid request | Unhandled Filter Value Type provided. |
| `1455-400` | Invalid request | An error has occurred while validating patch instructions: Missing field "keyWhichDoesNotExist". |
| `1456-400` | Invalid request | State delete-finalizing is not a valid value. Allowed values are [enabled, disabled, initializing]. |
| `1457-400` | Invalid request | Operation update cannot be applied in state delete-finalizing. |
| `1458-400` | Invalid request | Operation delete cannot be applied in state delete-finalizing. |

{style="table-layout:auto"}


## Verification errors of user token for authorization

The following table outlines errors regarding verification of the user token for authorization

| Error code | Title | Detailed message |
| --- | --- | --- |
| `2000-401` | Invalid authorization token | The authorization token does not have access to this organization or the organization does not exist. Please ensure that the organization exists or contact your administrator to gain access. |
| `2001-401` | Header is missing or empty | The header x-gw-ims-org-id is either missing or empty. Please update the header value and try again. |
| `2002-401` | Header is missing | The header x-gw-ims-org-id is missing in the request. Please update the header value and try again. |
| `2100-404` | Sandbox not found | The sandbox with the name 'dev' could not be found. Please ensure that the sandbox name is correct and try again. |
| `2101-404` | Sandbox not found | The sandbox with the name 'dev' could not be found. Error from Sandbox Management API: Sandbox with name 'dev' not present. Please check if resource exists. |
| `2102-500` | Get sandbox by name error | There was a problem retrieving a sandbox with the name 'dev'. Error from Sandbox Management API: Something went wrong. Please try again. | 
| `2103-404` | Sandbox not found | The sandbox with ID 8da3ef09-b469-404a and name dev could not be found. Please ensure that the ID and sandbox name values are correct and try again. |
| `2104-500` | Get sandbox by identifier error | There was a problem retrieving a sandbox with id '8da3ef09-b469-404a' and name 'dev'. Error from Sandbox Management API: Something went wrong. Please try again. |
| `2105-400` | Header is missing | The header x-sandbox-name is missing in the request. Please add the header in the request and try again. |
| `2106-404` | Get default sandbox error | The default sandbox information could not be found. |
| `2107-500` | Get default sandbox error | There was a problem retrieving a default sandbox. Error from Sandbox Management API: Something went wrong. Please try again. |
| `2108-500` | Get active sandboxes error | There was a problem retrieving an active sandbox. Error from Sandbox Management API: Something went wrong. Please try again. |
| `2110-400` | Headers not allowed | The header x-sandbox-id is not allowed with the user token. Please update the header and try again. |
| `2111-403` | Headers with value restricted | The header x-sandbox-name with value * is restricted with the user token. Please update the header and value and try again. |
| `2112-400` | Headers with different value not allowed | The headers x-sandbox-name and x-sandbox-id both must have the value * for cross sandbox query. Please update the headers and try again. |
| `2113-400` | Headers with value not allowed | The headers x-sandbox-id and x-sandbox-name with value * are not allowed for the request. Please update the headers and try again. |
| `2114-400` | Empty token | Empty token provided. Please provide a token and try again. |
| `2115-400` | Invalid token | Invalid token provided. Please provide a valid token and try again. | 
| `2116-500` | Internal Error | An internal error has occurred during offline decoding of bearer token for scope resolution. |
| `2117-500` | Internal Error | An internal error has occurred while checking permissions for user. Please try again. If the problem persists, please contact customer support. |
| `2118-403` | Missing permission | The permission write is missing. Please contact your administrator to resolve permissions and try again. |
| `2119-400` | Query parameter missing | The request context does not contain the required query parameter specId. Please provide the missing query parameter and try again. |
| `2120-403` | Forbidden | You do not have sufficient permissions to perform the operation. Please contact your administrator to resolve permissions and try again. |
| `2121-403` | Forbidden | The permission manage is denied on resource Enterprise Source. Please contact your administrator to resolve permissions and try again. |
| `2200-500` | External service request error | There was a problem while calling the Catalog service for validating schema. |
| `2250-500` | External service request error | There was a problem while calling the Data Prep service for validating mapping. |

{style="table-layout:auto"}
