---
keywords: Experience Platform;home;popular topics;query service;api guide;connection parameters;Query service;
solution: Experience Platform
title: Query Service developer guide
topic: connection parameters
description: You can retrieve your connection parameters for using the interactive service by making a GET request to the /connection_parameters endpoint.
---

# Connection parameters

## Sample API calls

Now that you understand what headers to use, you are ready to begin making calls to the [!DNL Query Service] API. The following sections walk through the various API calls you can make using the [!DNL Query Service] API. Each call includes the general API format, a sample request showing required headers, and a sample response.

### Request connection parameters for the interactive service

You can retrieve your connection parameters for using the [interactive service](../creating-queries/writing-queries.md) by making a GET request to the `/connection_parameters` endpoint. For more information about clients that use connection parameters to connect via the interactive service, please read the documentation on [Query Service clients](../clients/overview.md).

**API format**

```http
GET /connection_parameters
```

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/query/connection_parameters
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with your connection parameters.

```json
{
    "username": "{USERNAME}",
    "dbName": "prod:all",
    "host": "{HOSTNAME}",
    "version": 1,
    "port": 80,
    "token": "{TOKEN}",
    "compressedToken": "{COMPRESSED_TOKEN}",
    "websocketHost": "{WEBSOCKET_HOSTNAME}"
}
```