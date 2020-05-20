---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create an Azure Blob connector using the Flow Service API
topic: overview
---

# Create an Azure Blob connector using the Flow Service API

Flow Service is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the Flow Service API to walk you through the steps to connect Experience Platform to an Azure Blob (hereinafter referred to as "Blob") storage.

If you would prefer to use the user interface in Experience Platform, the [Azure Blob or Amazon S3 source connector UI tutorial](../../../ui/create/cloud-storage/blob-s3.md) provides step-by-step instructions for performing similar actions.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

*   [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
*   [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to an Blob storage using the Flow Service API.

### Gather required credentials

In order for Flow Service to connect with your Blob storage, you must provide values for the following connection property:

| Credential | Description |
| ---------- | ----------- |
| `connectionString` | The connection string required to access data in your Blob storage. The Blob connection string pattern is: `DefaultEndpointsProtocol=https;AccountName=<accountname>;AccountKey=<accountkey>`. |

For more information on getting started, visit [this Azure Blob document](https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string).

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

### Gather values for required headers

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](../../../../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

*   Authorization: Bearer `{ACCESS_TOKEN}`
*   x-api-key: `{API_KEY}`
*   x-gw-ims-org-id: `{IMS_ORG}`

All resources in Experience Platform, including those belonging to the Flow Service, are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

*   x-sandbox-name: `{SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

*   Content-Type: `application/json`

## Create a connection

A connection specifies a source and contains your credentials for that source. Only one connection is required per Blob account as it can be used to create multiple source connectors to bring in different data.

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
        "name": "Blob Connection",
        "description": "Cnnection for an Azure Blob account",
        "auth": {
            "specName": "ConnectionString",
            "params": {
                "connectionString": "{CONNECTION_STRING}"
            }
        },
        "connectionSpec": {
            "id": "4c10e202-c428-4796-9208-5f1f5732b1cf",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
|   `auth.params.connectionString` | The connection string for your Blob storage. |
|   `connectionSpec.id` | The Blob storage connection specification ID: `4c10e202-c428-4796-9208-5f1f5732b1cf` |

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your storage in the next tutorial.

```json
{
    "id": "4cb0c374-d3bb-4557-b139-5712880adc55",
    "etag": "\"1700c57b-0000-0200-0000-5e3b3f440000\""
}
```

## Next steps

By following this tutorial, you have created a Blob connection using APIs and a unique ID was obtained as part of the response body. You can use this connection ID to [explore cloud storages using the Flow Service API](../../explore/cloud-storage.md) or [ingest parquet data using the Flow Service API](../../cloud-storage-parquet.md).