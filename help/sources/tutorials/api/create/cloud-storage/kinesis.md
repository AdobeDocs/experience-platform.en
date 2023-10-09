---
title: Create an Amazon Kinesis Source Connection Using the Flow Service API
description: Learn how to connect Adobe Experience Platform to an Amazon Kinesis source using the Flow Service API.
badgeUltimate: label="Ultimate" type="Positive"
exl-id: 64da8894-12ac-45a0-b03e-fe9b6aa435d3
---
# Create an [!DNL Amazon Kinesis] source connection using the Flow Service API

>[!IMPORTANT]
>
>The [!DNL Amazon Kinesis] source is available in the sources catalog to users who have purchased Real-Time Customer Data Platform Ultimate.

This tutorial walks you through the steps to connect [!DNL Amazon Kinesis] (hereinafter referred to as "[!DNL Kinesis]") to Experience Platform, using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect [!DNL Kinesis] to Platform using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with your [!DNL Amazon Kinesis] account, you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `accessKeyId` | The access key ID is one half of the access key pair used to authenticate your [!DNL Kinesis] account to Platform. |
| `secretKey` | The secret access key is the other half of the access key pair used to authenticate your [!DNL Kinesis] account to Platform. |
| `region` | The region for your [!DNL Kinesis] account. See the guide on [adding IP addresses to your allow list](../../../../ip-address-allow-list.md) for more information on regions. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The [!DNL Kinesis] connection specification ID is: `86043421-563b-46ec-8e6c-e23184711bf6`. |

For more information on [!DNL Kinesis] access keys and how to generate them, refer to this [[!DNL AWS] guide on managing access keys for IAM users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

The first step in creating a source connection is to authenticate your [!DNL Kinesis] source and generate a base connection ID. A base connection ID allows you to explore and navigate files from within your source and identify specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Kinesis] authentication credentials as part of the request parameters.

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
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Amazon Kinesis connection",
        "description": "Connector for Amazon Kinesis",
        "providerId": "521eee4d-8cbe-4906-bb48-fb6bd4450033",
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
| `auth.params.region` | The region for your [!DNL Kinesis] account. |
| `connectionSpec.id` | The [!DNL Kinesis] connection specification ID: `86043421-563b-46ec-8e6c-e23184711bf6` |

**Response**

A successful response returns details of the newly created base connection, including its unique identifier (`id`). This ID is required in the next step to create a source connection.

```json
{
    "id": "4cb0c374-d3bb-4557-b139-5712880adc55",
    "etag": "\"6507cfd8-0000-0200-0000-5e18fc600000\""
}
```

## Create a source connection {#source}

A source connection creates and manages the connection to the external source from where data is ingested. A source connection consists of information like data source, data format, and the source connection ID needed to create a dataflow. A source connection instance is specific to a tenant and organization.

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
    -H 'x-gw-ims-org-id: {ORG_ID}' \
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
| `connectionSpec.id` | The fixed connection specification ID for [!DNL Kinesis]. This ID is: `86043421-563b-46ec-8e6c-e23184711bf6` |
| `data.format` | The format of the [!DNL Kinesis] data that you want to ingest. Currently, the only supported data format is `json`. |
| `params.stream` | The name of the data stream to pull records from. |
| `params.dataType` | This parameter defines the type of the data that is being ingested. Supported data types include: `raw` and `xdm`. |
| `params.reset` | This parameter defines how the data will be read. Use `latest` to start reading from the most recent data, and use `earliest` to start reading from the first available data in the stream. |

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
