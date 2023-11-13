---
title: Create an Azure Event Hubs Source Connection Using the Flow Service API
description: Learn how to connect Adobe Experience Platform to an Azure Event Hubs account using the Flow Service API.
badgeUltimate: label="Ultimate" type="Positive"
exl-id: a4d0662d-06e3-44f3-8cb7-4a829c44f4d9
---
# Create an [!DNL Azure Event Hubs] source connection using the [!DNL Flow Service] API

>[!IMPORTANT]
>
>The [!DNL Azure Event Hubs] source is available in the sources catalog to users who have purchased Real-Time Customer Data Platform Ultimate.

This tutorial provides steps to create a [!DNL Azure Event Hubs] (hereinafter referred to as "[!DNL Event Hubs]") to Experience Platform, using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

- [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
- [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect [!DNL Event Hubs] to Platform using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with your [!DNL Event Hubs] account, you must provide values for the following connection properties:

>[!BEGINTABS]

>[!TAB Standard authentication]

| Credential | Description |
| --- | --- |
| `sasKeyName` | The name of the authorization rule, which is also known as the SAS key name. |
| `sasKey` | The primary key of the [!DNL Event Hubs] namespace. The `sasPolicy` that the `sasKey` corresponds to must have `manage` rights configured in order for the [!DNL Event Hubs] list to be populated. |
| `namespace` | The namespace of the [!DNL Event Hubs] you are accessing. An [!DNL Event Hubs] namespace provides a unique scoping container, in which you can create one or more [!DNL Event Hubs]. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The [!DNL Event Hubs] connection specification ID is: `bf9f5905-92b7-48bf-bf20-455bc6b60a4e`. |

>[!TAB SAS authentication]

| Credential | Description |
| --- | --- |
| `sasKeyName` | The name of the authorization rule, which is also known as the SAS key name. |
| `sasKey` | The primary key of the [!DNL Event Hubs] namespace. The `sasPolicy` that the `sasKey` corresponds to must have `manage` rights configured in order for the [!DNL Event Hubs] list to be populated. |
| `namespace` | The namespace of the [!DNL Event Hubs] you are accessing. An [!DNL Event Hubs] namespace provides a unique scoping container, in which you can create one or more [!DNL Event Hubs]. |
| `eventHubName` | The name for your [!DNL Event Hubs] source. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The [!DNL Event Hubs] connection specification ID is: `bf9f5905-92b7-48bf-bf20-455bc6b60a4e`. |

>[!ENDTABS]

For more information about these values, refer to [this Event Hubs document](https://docs.microsoft.com/en-us/azure/event-hubs/authenticate-shared-access-signature).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

>[!TIP]
>
>Once created, you cannot change the authentication type of an [!DNL Event Hubs] base connection. To change the authentication type, you must create a new base connection.

The first step in creating a source connection is to authenticate your [!DNL Event Hubs] source and generate a base connection ID. A base connection ID allows you to explore and navigate files from within your source and identify specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Event Hubs] authentication credentials as part of the request parameters.

**API format**

```http
POST /connections
```

>[!BEGINTABS]

>[!TAB Standard authentication]

To create an account using standard authentication, make a POST request to the `/connections` endpoint while providing values for your `sasKeyName`, `sasKey`, and `namespace`.

+++Request

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Azure Event Hubs connection",
      "description": "Connector for Azure Event Hubs",
      "auth": {
          "specName": "Azure EventHub authentication credentials",
          "params": {
              "sasKeyName": "{SAS_KEY_NAME}",
              "sasKey": "{SAS_KEY}",
              "namespace": "{NAMESPACE}"
          }
      },
      "connectionSpec": {
          "id": "bf9f5905-92b7-48bf-bf20-455bc6b60a4e",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.sasKeyName` | The name of the authorization rule, which is also known as the SAS key name. |
| `auth.params.sasKey` | The generated shared access signature. |
| `auth.params.namespace` | The namespace of the [!DNL Event Hubs] you are accessing. |
| `connectionSpec.id` | The [!DNL Event Hubs] connection specification ID is: `bf9f5905-92b7-48bf-bf20-455bc6b60a4e` |

+++

+++Response

A successful response returns details of the newly created base connection, including its unique identifier (`id`). This connection ID is required in the next step to create a source connection.

```json
{
    "id": "4cdbb15c-fb1e-46ee-8049-0f55b53378fe",
    "etag": "\"6507cfd8-0000-0200-0000-5e18fc600000\""
}
```

+++

>[!TAB SAS authentication]

To create an account using SAS authentication, make a POST request to the `/connections` endpoint while providing values for your `sasKeyName`, `sasKey`,`namespace`, and `eventHubName`.

+++Request

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Azure Event Hubs connection",
      "description": "Connector for Azure Event Hubs",
      "auth": {
          "specName": "Azure EventHub authentication credentials",
          "params": {
              "sasKeyName": "{SAS_KEY_NAME}",
              "sasKey": "{SAS_KEY}",
              "namespace": "{NAMESPACE}",
              "eventHubName": "{EVENT_HUB_NAME} 
          }
      },
      "connectionSpec": {
          "id": "bf9f5905-92b7-48bf-bf20-455bc6b60a4e",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.sasKeyName` | The name of the authorization rule, which is also known as the SAS key name. |
| `auth.params.sasKey` | The generated shared access signature. |
| `auth.params.namespace` | The namespace of the [!DNL Event Hubs] you are accessing. |
| `params.eventHubName` | The name for your [!DNL Event Hubs] source. |
| `connectionSpec.id` | The [!DNL Event Hubs] connection specification ID is: `bf9f5905-92b7-48bf-bf20-455bc6b60a4e` |

+++

+++Response

A successful response returns details of the newly created base connection, including its unique identifier (`id`). This connection ID is required in the next step to create a source connection.

```json
{
    "id": "4cdbb15c-fb1e-46ee-8049-0f55b53378fe",
    "etag": "\"6507cfd8-0000-0200-0000-5e18fc600000\""
}
```

+++

>[!ENDTABS]

## Create a source connection

>[!TIP]
>
>An [!DNL Event Hubs] consumer group can only be used for a single flow at a given time.

A source connection creates and manages the connection to the external source from where data is ingested. A source connection consists of information like data source, data format, and a source connection ID needed to create a dataflow. A source connection instance is specific to a tenant and organization.

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
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
      "name": "Azure Event Hubs source connection",
      "description": "A source connection for Azure Event Hubs",
      "baseConnectionId": "4cdbb15c-fb1e-46ee-8049-0f55b53378fe",
      "connectionSpec": {
          "id": "bf9f5905-92b7-48bf-bf20-455bc6b60a4e",
          "version": "1.0"
      },
      "data": {
          "format": "json"
      },
      "params": {
          "eventHubName": "{EVENT_HUB_NAME}",
          "dataType": "raw",
          "reset": "latest",
          "consumerGroup": "{CONSUMER_GROUP}"
      }
  }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your source connection. Ensure that the name of your source connection is descriptive as you can use this to look up information on your source connection. |
| `description` | An optional value that you can provide to include more information on your source connection. |
| `baseConnectionId` | The connection ID of your [!DNL Event Hubs] source that was generated in the previous step. |
| `connectionSpec.id` | The fixed connection specification ID for [!DNL Event Hubs]. This ID is: `bf9f5905-92b7-48bf-bf20-455bc6b60a4e`. |
| `data.format` | The format of the [!DNL Event Hubs] data that you want to ingest. Currently, the only supported data format is `json`. |
| `params.eventHubName` | The name for your [!DNL Event Hubs] source. |
| `params.dataType` | This parameter defines the type of the data that is being ingested. Supported data types include: `raw` and `xdm`. |
| `params.reset` | This parameter defines how the data will be read. Use `latest` to start reading from the most recent data, and use `earliest` to start reading from the first available data in the stream. This parameter is optional and defaults to `earliest` if unprovided. |
| `params.consumerGroup` | The publish or subscription mechanism to be used for [!DNL Event Hubs]. This parameter is optional and defaults to `$Default` if unprovided. Refer to this [[!DNL Event Hubs] guide on event consumers](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-features#event-consumers) for more information. **Note**: An [!DNL Event Hubs] consumer group can only be used for a single flow at a given time.  |

## Next steps

By following this tutorial, you have created an [!DNL Event Hubs] source connection using the [!DNL Flow Service] API. You can use this source connection ID in the next tutorial to [create a streaming dataflow using the [!DNL Flow Service] API](../../collect/streaming.md).
