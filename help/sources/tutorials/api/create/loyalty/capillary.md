---
title: Connect Capillary to Experience Platform using the Flow Service API
description: Learn how to connect Capillary to Experience Platform using APIs.
hide: true
hidefromtoc: true
exl-id: 763792d0-d5dc-40ac-b86a-6a0d26463b71
---
# Connect [!DNL Capillary Streaming Events] to Experience Platform using the [!DNL Flow Service] API

Read this guide to learn how to use the [!DNL Capillary Streaming Events] and the [[!DNL Flow Service] API](https://developer.adobe.com/experience-platform-apis/references/flow-service/) to stream data from your [!DNL Capillary] account to Adobe Experience Platform.

## Getting started

This guide requires a working understanding of the following components of Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Experience Platform instance into separate virtual environments to help develop and evolve digital experience applications.

### Gather required credentials

Read the [[!DNL Capillary Streaming Events] overview](../../../../connectors/loyalty/capillary.md) for information on authentication.

### Using Experience Platform APIs

Read the guide on [getting started with Experience Platform APIs](../../../../../landing/api-guide.md) for information on how to successfully make calls to Experience Platform APIs.

>[!BEGINSHADEBOX]

## Developer process checklist

1. Create or choose your target **Experience Data Model (XDM) schema** using the Schema Registry. Use this XDM schema to **create a dataset** in Catalog Service.
2. Create a **base connection** to store your [!DNL Capillary] credentials.
3. Create a **source connection** to bind to your `baseConnectionId`.
4. Create a **target connection** to ensure that your data lands in data lake.
5. Use Data Prep to create mappings that map your [!DNL Capillary] source fields to the correct XDM fields.
6. Create a dataflow using your `sourceConnectionId`, `targetConnectionId`, and `mappingID`
7. Test with single sample profile/transaction events to verify your dataflow.

>[!ENDSHADEBOX]

## Create a base connection {#base-connection}

A base connection retains credentials and connection details. To create a base connection for [!DNL Capillary], make a POST request to the `/connections` endpoint of the [!DNL Flow Service] API and provide your [!DNL Capillary] credentials in the request body.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Capillary]:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Capillary base connection",
    "description": "Base connection to authenticate the [!DNL Capillary] source.",
    "connectionSpec": {
      "id": "6360f136-5980-4111-8bdf-15d29eab3b5a",
      "version": "1.0"
    },
    "auth": {
      "specName": "OAuth generic-rest-connector",
      "params": {
        "clientId": "{CLIENT_ID}",
        "clientSecret": "{CLIENT_SECRET}",
        "accessToken": "{ACCESS_TOKEN}"
      }
    }
  }'
```

**Response**

```
A successful response returns the newly created base connection, including its unique connection identifier (id). This ID is required to explore your source's file structure and contents in the next step.

{
     "id": "70383d02-2777-4be7-a309-9dd6eea1b46d",
     "etag": "\"d64c8298-add4-4667-9a49-28195b2e2a84\""
}
```

### Create a source connection

To create a source connection, make a POST request to the `/sourceConnections` endpoint while providing your base connection ID.

**API format**

```http
POST /flowservice/sourceConnections
```

**Request**

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
      "name": "Capillary Streaming",
      "description": "Capillary Streaming",
      "baseConnectionId": "70383d02-2777-4be7-a309-9dd6eea1b46d",
      "connectionSpec": {
          "id": "6360f136-5980-4111-8bdf-15d29eab3b5a",
          "version": "1.0"
      }
    }'
```

**Response**

A successful response returns HTTP status 201 with detailed of the newly created source connection, including its unique identifier (`id`). 

```json
{
  "id": "34ece231-294d-416c-ad2a-5a5dfb2bc69f",
  "etag": "\"d505125b-0000-0200-0000-637eb7790000\""
}
```

### Schema configurations

>[!BEGINTABS]

>[!TAB Profile ingestion]

Profiles contain identity and loyalty attributes. View the following payload for an example based on the [!DNL Capillary] profile schema. You can configure and map this schema to an XDM Individual Profile.

**Request**

```json
{
  "identityMap": {
    "email": [
      {
        "authenticatedState": "ambiguous",
        "id": "john.doe@capillarytech.com",
        "primary": true
      }
    ]
  },
  "loyalty": {
    "tier": "gold",
    "points": 1250,
    "lifetimePoints": 122,
    "expiredPoints": 12,
    "pointsRedeemed": 500,
    "program": "loyalty program name",
    "status": "active"
  }
}
```

**Response**

```json
{
  "id": "8c19f1c3-4b91-47cd-8cb5-b152a93f7349",
  "status": "success",
  "message": "Profile record ingested successfully"
}
```

>[!TAB Transaction ingestion]

Transactions capture commerce activities. View the following payload for an example based on the [!DNL Capillary] events schema. You can configure and map this schema to an XDM Experience Event.

**Request**

```json
{
  "_id": "T0001",
  "timestamp": "2025-07-14T12:00:00-06:00",
  "identityMap": {
    "email": [
      {
        "authenticatedState": "ambiguous",
        "id": "john@capillarytech.com",
        "primary": true
      }
    ]
  },
  "commerce": {
    "commerceScope": {
      "storeCode": "HSR"
    },
    "order": {
      "priceTotal": 90
    }
  },
  "productLineItems": [
    {
      "SKU": "sku_01",
      "quantity": 1,
      "priceTotal": 100,
      "name": "Kitkat",
      "discountAmount": 10
    }
  ]
}
```

**Response**

```json
{
  "id": "T0001",
  "status": "success",
  "message": "Transaction event ingested successfully"
}
```

>[!ENDTABS]

<!--### Supported Events

The [!DNL Capillary] source supports the following events:

* `pointsIssued`
* `tierDowngraded`
* `tierUpgraded`
* `pointsExpiryChange`
* `pointsExpired`
* `transactionUpdated`
* `customerAdded`
* `tierDowngradeReminder`
* `promotionEarned`
* `pointsExpiryReminder`
* `pointsRedeemed`
* `transactionAdded`
* `tierRenewed`
* `customerUpdated`-->

### Historical data migration

You can bring your historical loyalty and transaction data into Experience Platform. Simply export your data as structured CSV files from [!DNL Capillary], transfer them securely using [!DNL SFTP], and ingest them into your Experience Platform datasets. After the initial migration, your data will stay up to date in real time through the event-driven connector.

### Create a target XDM schema {#target-schema}

An Experience Data Model (XDM) schema provides a standardized way to organize and describe customer experience data within Experience Platform. To ingest your source data into Experience Platform, you must first create a target XDM schema that defines the structure and types of data you want to ingest. This schema serves as the blueprint for the Experience Platform dataset where your ingested data will reside.

A target XDM schema can be created by performing a POST request to the [Schema Registry API](https://developer.adobe.com/experience-platform-apis/references/schema-registry/). For detailed steps on how to create a target XDM schema, read the following guides:

* [Create a schema using the API](../../../../../xdm/api/schemas.md).
* [Create a schema using the UI](../../../../../xdm/tutorials/create-schema-ui.md). 

Once created, the target XDM schema `$id` will be required later for your target dataset and mapping.

## Create a target dataset {#target-dataset}

A dataset is a storage and management construct for a collection of data, typically structured like a table with columns (schema) and rows (fields). Data that is successfully ingested into Experience Platform is stored within the data lake as datasets. During this step, you can either create a new dataset or use an existing one.

You can create a target dataset by making a POST request to the [Catalog Service API](https://developer.adobe.com/experience-platform-apis/references/catalog/), while providing the ID of the target schema within the payload. For detailed steps on how to create a target dataset, read the guide on [creating a dataset using the API](../../../../../catalog/api/create-dataset.md).


## Create a target connection {#target}

A target connection represents the connection to the destination where the ingested data lands in. To create a target connection, you must provide the fixed connection specification ID associated to the data lake. This connection specification ID is: `c604ff05-7f1a-43c0-8e18-33bf874cb11c`.

**API format**

```http
POST /targetConnections
```

**Request**

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/targetConnections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Capillary Target Connection",
      "description": "Capillary Target Connection",
      "data": {
          "schema": {
              "id": "https://ns.adobe.com/{TENANT_ID}/schemas/52b59140414aa6a370ef5e21155fd7a686744b8739ecc168",
              "version": "application/vnd.adobe.xed-full+json;version=1"
          }
      },
      "params": {
          "dataSetId": "6889f4f89b982b2b90bc1207"
      },
      "connectionSpec": {
          "id": "c604ff05-7f1a-43c0-8e18-33bf874cb11c",
          "version": "1.0"
      }
    }'
```

### Create a mapping {#mapping}

Next, map your source data to the target schema that your target dataset adheres to. To create a mapping, make a POST request to the `mappingSets` endpoint of the [[!DNL Data Prep] API](https://developer.adobe.com/experience-platform-apis/references/data-prep/). Include your target XDM schema ID and the details of the mapping sets you want to create.

Map the Capillary fields to the corresponding XDM schema fields as follows:

| Source schema                | Target schema                  |
|------------------------------|-------------------------------|
| `identityMap.email.id`       | `xdm:identityMap.email[0].id`       |
| `loyalty.points`             | `xdm:loyalty.points`           |
| `loyalty.tier`               | `xdm:loyalty.tier`             |
| `commerce.order.priceTotal`  | `xdm:commerce.order.priceTotal`|
| `productLineItems.SKU`       | `xdm:productListItems.SKU`    |

### Create a dataflow {#flow}

After you have created the source connection, mapping, and target connection, you can configure a dataflow to move data from [!DNL Capillary] into Experience Platform.

Typical dataflows include:

* **Profile dataflow**: Ingests [!DNL Capillary] profile data into an XDM Individual Profile dataset.
* **Transaction dataflow**: Ingests [!DNL Capillary] transaction data into an XDM ExperienceEvent dataset.

**Request**

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/flows' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Capillary dataflow",
    "description": "Capillary → Experience Platform dataflow",
    "flowSpec": {
      "id": "6499120c-0b15-42dc-936e-847ea3c24d72",
      "version": "1.0"
    },
    "sourceConnectionIds": "{SOURCE_CONNECTION_ID}",
    "targetConnectionIds": "{TARGET_CONNECTION_ID}",
    "transformations": [
      {
        "name": "Mapping",
        "params": {
          "mappingId": "{MAPPING_ID}",
          "mappingVersion": "0"
        }
      }
    ],
    "scheduleParams": {
      "startTime": "1625040887",
      "frequency": "minute",
      "interval": 15
    }
  }'
```

>[!NOTE]
>
>`startTime` is in UNIX epoch seconds.

**Response**

A successful response returns your dataflow with its corresponding dataflow ID.

```json
{
  "id": "92f11b8c-0a9f-45a9-8239-60b4e8430a88",
  "status": "enabled",
  "message": "Dataflow created successfully"
}
```

## Error handling

The connector includes robust error handling for the following scenarios:

* **Authentication errors**: Automatically refreshes Adobe credentials when authentication fails.
* **Rate limit errors**: Implements retries with exponential backoff when API rate limits are reached.
* **Network errors**: Logs and retries failed network requests.
* **Data validation errors**: Logs invalid payloads for manual review and resolution.

All errors are logged with details such as error type, timestamp, request payload, and Adobe API response to facilitate troubleshooting and debugging.

## Test your connection

Follow the steps below to learn steps you can take to test your connection:

* Make a GET request to `/connections/{BASE_CONNECTION_ID}` and provide your base connection ID to verify that your base connection exists. During this step, you can also verify that the status of your base connection is set to `active`.
* Make a GET request to `/flowservice/sourceConnections/{SOURCE_CONNECTION_ID}` and provide your source connection ID to verify your source connection.
* Use your streaming endpoint URL to send a sample profile payload (use the Profile ingestion JSON).
* Navigate to your dataset in Experience Platform UI and run a query on the dataset to confirm your records.
* Use the Data Prep logs to inspect for errors.
* If you must open a support ticket, ensure that you have the following:
  * Request payload
  * Response body
  * Request-id
  * timestamp
  * Resource IDs.
  
## Appendix

Visit the following documentation for guides on additional operations

* [Monitor dataflows](../../../../../dataflows/ui/monitor-sources.md)
* [Update dataflows](../../../ui/update-dataflows.md)
* [Delete dataflows](../../../ui/delete.md)
* [Update source account](../../../ui/update.md)
