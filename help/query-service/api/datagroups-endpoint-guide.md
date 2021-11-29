---
title: Query Service API Datagroups Endpoint
description: The following sections explain calls you can make using the /datagroups endpoint in the Query Service API.
---

# Query Service API Datagroups Endpoint

This developer guide provides steps for performing various operations using the Adobe Experience Platform Query Service API Datagroups endpoint.

## Getting started

This guide requires an understandig of how to make API calls using the Query Serrvice API. Before continuing with this guide please ensure you have read the [Query Serrvice API guide](./queries.md).

## Sample API Calls

The following sections exemplify calls you can make using the `/datagroups` endpoint in the Query Service API. Each call includes the general API format, a sample request showing required headers, and a sample response.

### Retrieve a list of datagroups

You can retrieve a list of all datagroups for your IMS Organization by making a GET request to the `/datagroups` endpoint.

**API format**

```http
GET /datagroups
GET /datagroups?{QUERY_PARAMETERS}
```

- `{QUERY_PARAMETERS}`: (*Optional*) Parameters added to the request path which configure the results returned in the response. Multiple parameters can be included, separated by ampersands (`&`). The available parameters are listed below.

**Query parameters**

The following is a list of available query parameters for listing queries. All of these parameters are optional. Making a call to this endpoint with no parameters will retrieve all queries available for your organization.

| Parameter | Description |
| --------- | ----------- |
| `name` | The string name of a particular database requested. |
| `parentId` | The ID of the datagroup requested. |
| `references` |  |
| `type` | For example database. |

**Request**

The following request retrieves the latest datagroup created for your IMS organization that is of database type.

```shell
curl -X GET https://platform.adobe.io/data/foundation/query/datagroups?type=database&limit=1 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with a list of datagroups for the specified IMS Organization as JSON. The following response returns the latest query created for your IMS organization.

```json

```
