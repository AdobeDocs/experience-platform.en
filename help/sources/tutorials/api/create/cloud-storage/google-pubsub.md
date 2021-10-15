---
keywords: Experience Platform;home;popular topics;Google PubSub;google pubsub
solution: Experience Platform
title: Create a Google PubSub Source Connection Using the Flow Service API
topic-legacy: overview
type: Tutorial
description: Learn how to connect Adobe Experience Platform to a Google PubSub account using the Flow Service API.
exl-id: f5b8f9bf-8a6f-4222-8eb2-928503edb24f
---
# Create a [!DNL Google PubSub] Source Connection Using the Flow Service API

>[!NOTE]
>
>The [!DNL Google PubSub] connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

This tutorial walks you through the steps to connect [!DNL Google PubSub] (hereinafter referred to as "[!DNL PubSub]") to Experience Platform, using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect [!DNL PubSub] to Platform using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect to [!DNL PubSub], you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `projectId` | The project ID required to authenticate [!DNL PubSub]. |
| `credentials` | The credential or key required to authenticate [!DNL PubSub]. |
| `connectionSpec.id` | The connection specification returns a source’s connector properties, including authentication specifications related to creating the base and source target connections. The [!DNL PubSub] connection specification ID is: `70116022-a743-464a-bbfe-e226a7f8210c`. |

For more information about these values, see this [[!DNL PubSub] authentication](https://cloud.google.com/pubsub/docs/authentication) document. To use service account-based authentication, see this [[!DNL PubSub] guide on creating service accounts](https://cloud.google.com/docs/authentication/production#create_service_account) for steps on how to generate your credentials.

>[!TIP]
>
>If you are using service account-based authentication, ensure that you have granted sufficient user access to your service account and that there are no extra white spaces in the JSON, when copying and pasting your credentials.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

The first step in creating a source connection is to authenticate your [!DNL PubSub] source and generate a base connection ID. A base connection ID allows you to explore and navigate files from within your source and identify specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL PubSub] authentication credentials as part of the request parameters.

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
        "name": "Google PubSub connection",
        "description": "Google PubSub connection",
        "auth": {
            "specName": "Google PubSub authentication credentials",
            "params": {
                "projectId": "{PROJECT_ID}",
                "credentials": "{CREDENTIALS}"
            }
        },
        "connectionSpec": {
            "id": "70116022-a743-464a-bbfe-e226a7f8210c",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.projectId` | The project ID required to authenticate [!DNL PubSub]. |
| `auth.params.credentials` | The credential or key required to authenticate [!DNL PubSub]. |
| `connectionSpec.id` | The [!DNL PubSub] connection spec ID: `70116022-a743-464a-bbfe-e226a7f8210c`. |

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This base connection ID is required in the next step to create a source connection.

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
    -H 'authorization: Bearer {ACCESS_TOKEN}' \
    -H 'content-type: application/json' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_Org}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -d '{
        "name": "Google PubSub source connection",
        "description": "A source connection for Google PubSub",
        "baseConnectionId": "4cb0c374-d3bb-4557-b139-5712880adc55",
        "connectionSpec": {
            "id": "70116022-a743-464a-bbfe-e226a7f8210c",
            "version": "1.0"
        },
        "data": {
            "format": "json"
        },
        "params": {
            "topicId": "{TOPIC_ID}",
            "subscriptionId": "{SUBSCRIPTION_ID}",
            "dataType": "raw"
        }
    }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your source connection. Ensure that the name of your source connection is descriptive as you can use this to look up information on your source connection. |
| `description` | An optional value that you can provide to include more information on your source connection. |
| `baseConnectionId` | The base connection ID of your [!DNL PubSub] source that was generated in the previous step. |
| `connectionSpec.id` | The fixed connection specification ID for [!DNL PubSub]. This ID is : `70116022-a743-464a-bbfe-e226a7f8210c` |
| `data.format` | The format of the [!DNL PubSub] data that you want to ingest. Currently, the only supported data format is `json`. |
| `params.topicId` | The topic ID defines the specific named resource which messages are sent by publishers |
| `params.subscriptionId` | The subscription ID defines the specific named resource representing the stream of messages from a single, specific topic, to be delivered to the subscribing application. |
| `params.dataType` | This parameter defines the type of the data that is being ingested. Supported data types include: `raw` and `xdm`. |

**Response**

A successful response returns the unique identifier (`id`) of the newly created source connection. This ID is required in the next tutorial to create a dataflow.

```json
{
    "id": "e96d6135-4b50-446e-922c-6dd66672b6b2",
    "etag": "\"66013508-0000-0200-0000-5f6e2ae70000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL PubSub] source connection using the [!DNL Flow Service] API. You can use this source connection ID in the next tutorial to [create a streaming dataflow using the [!DNL Flow Service] API](../../collect/streaming.md).
