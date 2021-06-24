---
keywords: Experience Platform;home;popular topics;Apache Hadoop Distributed File System;Apache hadoop;hdfs;HDFS
solution: Experience Platform
title: Create an Apache HDFS Source Connection Using the Flow Service API
topic-legacy: overview
type: Tutorial
description: Learn how to connect an Apache Hadoop Distributed File System to Adobe Experience Platform using the Flow Service API.
exl-id: 04fa65db-073c-48e1-b981-425185ae08aa
---
# Create an [!DNL Apache] HDFS source connection using the [!DNL Flow Service] API

>[!NOTE]
>
>The Apache HDFS connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources to bring into Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the [!DNL Flow Service] API to walk you through the steps to connect an Apache Hadoop Distributed File System (hereinafter referred to as "HDFS") to [!DNL Experience Platform].

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to HDFS using the [!DNL Flow Service] API.

### Gather required credentials

| Credential | Description |
| ---------- | ----------- |
| `url` | The URL defines auth params required for connecting to HDFS anonymously. For more information on how to obtain this value, refer to [this HDFS document](https://hadoop.apache.org/docs/r1.2.1/HttpAuthentication.html). |
| `connectionSpec.id` | The identifier needed to create a connection. The fixed connection spec ID for HDFS is `54e221aa-d342-4707-bcff-7a4bceef0001`. |

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {IMS_ORG}`

All resources in [!DNL Experience Platform], including those belonging to [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

* `x-sandbox-name: {SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

* `Content-Type: application/json`

## Create a connection

A connection specifies a source and contains your credentials for that source. Only one connection is required per HDFS account as it can be used to create multiple source connectors to bring in different data.

**API format**

```http
POST /connections
```

**Request**

The following request creates a new HDFS connection, configured by the properties provided in the payload:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "HDFS test connection",
        "description": "A test connection for an HDFS source",
        "auth": {
            "specName": "Anonymous Authentication",
            "params": {
                "url": "{URL}"
                }
        },
        "connectionSpec": {
            "id": "54e221aa-d342-4707-bcff-7a4bceef0001",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| --------- | ----------- |
| `auth.params.url` | The URL that defines auth params required for connecting to HDFS anonymously |
| `connectionSpec.id` | The HDFS connection specification ID: `54e221aa-d342-4707-bcff-7a4bceef0001`. |

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "6a6a880a-2b15-4051-aa88-0a2b1570516d",
    "etag": "\"1801bb7d-0000-0200-0000-5ed6ad580000\""
}
```

## Next steps

By following this tutorial, you have created an HDFS connection using the [!DNL Flow Service] API and have obtained the connection's unique ID value. You can use this ID in the next tutorial as you learn how to [explore a third-party cloud storage using the Flow Service API](../../explore/cloud-storage.md).
