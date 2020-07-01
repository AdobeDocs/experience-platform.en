---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create an Azure Data Lake Storage Gen2 connector using the Flow Service API
topic: overview
---

# Create an [!DNL Azure] Data Lake Storage Gen2 connector using the [!DNL Flow Service] API

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the [!DNL Flow Service] API to walk you through the steps to connect [!DNL Experience Platform] to [!DNL Azure] Data Lake Storage Gen2 (hereinafter referred to as "ADLS Gen2").

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

*   [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
*   [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully create an ADLS Gen2 source connector using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect to ADLS Gen2, you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `url` | The address URL. |
| `servicePrincipalId` | The application's client ID. |
| `servicePrincipalKey` | The application's key. |
| `tenant` | The tenant information that contains your application. |

For more information about these values, refer to [this ADLS Gen2 document](https://docs.microsoft.com/en-us/azure/data-factory/connector-azure-data-lake-storage).

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](../../../../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

*   Authorization: Bearer `{ACCESS_TOKEN}`
*   x-api-key: `{API_KEY}`
*   x-gw-ims-org-id: `{IMS_ORG}`

All resources in [!DNL Experience Platform], including those belonging to [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

*   x-sandbox-name: `{SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

*   Content-Type: `application/json`
  
## Create a connection

A connection specifies a source and contains your credentials for that source. Only one connection is required per ADLS Gen2 account as it can be used to create multiple source connectors to bring in different data.

**API format**

```http
POST /connections
```

**Request**

```shell
curl -X POST \
    'http://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "adls-gen2",
        "description": "Connection for adls-gen2",
        "auth": {
            "specName": "Basic Authentication for adls-gen2",
            "params": {
                "url": "{URL}",
                "servicePrincipalId": "{SERVICE_PRINCIPAL_ID}",
                "servicePrincipalKey": "{SERVICE_PRINCIPAL_KEY}",
                "tenant": "{TENANT}"
            }
        },
        "connectionSpec": {
            "id": "0ed90a81-07f4-4586-8190-b40eccef1c5a",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.url` | The URL endpoint for your ADLS Gen2 account. |
| `auth.params.servicePrincipalId` | The service principal ID of your ADLS Gen2 account. |
| `auth.params.servicePrincipalKey` | The service principal key of your ADLS Gen2 account. |
| `auth.params.tenant` | The tenant information of your ADLS Gen2 account. |
| `connectionSpec.id` | The ADLS Gen2 connection specification ID: `0ed90a81-07f4-4586-8190-b40eccef1c5a1`. |

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your cloud storage in the next step.

```json
{
    "id": "7497ad71-6d32-4973-97ad-716d32797304",
    "etag": "\"23005f80-0000-0200-0000-5e1d00a20000\""
}
```

## Next steps

By following this tutorial, you have created an ADLS Gen2 connection using APIs and a unique ID was obtained as part of the response body. You can use this connection ID to [explore cloud storages using the Flow Service API](../../explore/cloud-storage.md) or [ingest parquet data using the Flow Service API](../../cloud-storage-parquet.md).
