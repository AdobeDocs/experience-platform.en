---
keywords: Experience Platform;home;popular topics;Kinesis;kinesis;Amazon Kinesis;amazon kinesis
solution: Experience Platform
title: Create an Amazon Kinesis Source Connection Using the Flow Service API
topic-legacy: overview
type: Tutorial
description: Learn how to connect Adobe Experience Platform to an Amazon Kinesis source using the Flow Service API.
exl-id: 64da8894-12ac-45a0-b03e-fe9b6aa435d3
---
# Create an [!DNL Amazon Kinesis] source connection using the Flow Service API

This tutorial walks you through the steps to connect an [!DNL Amazon Kinesis] (hereinafter referred to as "[!DNL Kinesis]") source to Experience Platform, using the [[!DNL Flow Service] API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/flow-service.yaml).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect [!DNL Kinesis] to Platform using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with your [!DNL Amazon Kinesis] account, you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `accessKeyId` | The access key ID for your [!DNL Kinesis] account. |
| `secretKey` | The secret access key for your [!DNL Kinesis] account. |
| `region` | The region for your [!DNL Kinesis] account. |
| `connectionSpec.id` | The [!DNL Kinesis] connection specification ID: `86043421-563b-46ec-8e6c-e23184711bf6` |

For more information about these values, refer to [this Kinesis document](https://docs.aws.amazon.com/streams/latest/dev/getting-started.html).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a connection

The first step in creating a source connection is to authenticate your [!DNL Kinesis] source and generate a connection ID. A connection ID allows you to explore and navigate files from within your source and identify specific items that you want to ingest, including information regarding their data types and formats.

To create a connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Kinesis] authentication credentials as part of the request parameters.

**API format**

```http
POST /connections
```

**Request**

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Amazon Kinesis connection",
        "description": "Connector for Amazon Kinesis",
        "auth": {
            "specName": "Aws Kinesis authentication credentials",
            "params": {
                "accessKeyId": "{ACCESS_KEY_ID}",
                "secretKey": "{SECRET_KEY}",
                "region": "{REGION}"
            }
        },
        "connectionSpec": {
            "id": "86043421-563b-46ec-8e6c-e23184711bf6",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.accessKeyId` | The access key ID for your [!DNL Kinesis] account. |
| `auth.params.secretKey` | The secret access key for your [!DNL Kinesis] account. |
| `auth.params.region` | The region for your [!DNL Kinesis] account. For more information on regions, see the document on [IP address allow list](../../../../ip-address-allow-list.md). |
| `connectionSpec.id` | The [!DNL Kinesis] connection specification ID: `86043421-563b-46ec-8e6c-e23184711bf6` |

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This connection ID is required in the next step to create a source connection.

```json
{
    "id": "4cb0c374-d3bb-4557-b139-5712880adc55",
    "etag": "\"6507cfd8-0000-0200-0000-5e18fc600000\""
}
```

## Create a source connection {#source}

A source connection creates and manages the connection to the external source from where data is ingested. A source connection consists of information like data source, data format, and a source connection ID needed to create a dataflow. A source connection instance is specific to a tenant and IMS Organization.

To create a source connection, make a POST request to the `/sourceConnections` endpoint of the [!DNL Flow Service] API.

**API format**

```http
POST /sourceConnections
```

**Request**

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "AWS Kinesis source connection",
        "description": "A source connection for AWS Kinesis",
        "baseConnectionId": "4cb0c374-d3bb-4557-b139-5712880adc55",
        "connectionSpec": {
            "id": "86043421-563b-46ec-8e6c-e23184711bf6",
            "version": "1.0"
        },
        "data": {
            "format": "json"
        },
        "params": {
            "stream": "{STREAM}",
            "dataType": "raw",
            "reset": "latest"
        }
    }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your source connection. Ensure that the name of your source connection is descriptive as you can use this to look up information on your source connection. |
| `description` | An optional value that you can provide to include more information on your source connection. |
| `baseConnectionId` | The base connection ID of your [!DNL Kinesis] source that was generated in the previous step. |
| `connectionSpec.id` | The fixed connection specification ID for [!DNL Kinesis]. This ID is : `86043421-563b-46ec-8e6c-e23184711bf6` |
| `data.format` | The format of the [!DNL Kinesis] data that you want to ingest. Supported data formats include: `json`, `parquet`, and `delimited`. |
| `params.stream` |
| `params.dataType` | This parameter defines the type of the data that is being ingested. Supported data types include: `raw`. |
| `params.reset` |

**Response**

A successful response returns the unique identifier (`id`) of the newly created source connection. This ID is required in the next tutorial to create a dataflow.

```json
{
    "id": "e96d6135-4b50-446e-922c-6dd66672b6b2",
    "etag": "\"66013508-0000-0200-0000-5f6e2ae70000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL Kinesis] source connection using the [!DNL Flow Service] API. You can use this source connection ID in the next tutorial to [create a streaming dataflow using the [!DNL Flow Service] API](../../collect/streaming.md).
