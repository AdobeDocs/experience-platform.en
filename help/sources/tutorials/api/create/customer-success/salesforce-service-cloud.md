---
title: Create a Salesforce Service Cloud Source Connection Using the Flow Service API
description: Learn how to connect Adobe Experience Platform to Salesforce Service Cloud using the Flow Service API.
exl-id: ed133bca-8e88-4c85-ae52-c3269b6bf3c9
TQID: https://experienceleague.adobe.com/wQObLlPjITd2k-cm6CzSmFX-IQDxhfG0q5I1OmffcQo
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
---
# Create a [!DNL Salesforce Service Cloud] source connection using the [!DNL Flow Service] API

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

Read this tutorial to learn how to create a base connection for [!DNL Salesforce Service Cloud] using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Experience Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single [!DNL Experience Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL Salesforce Service Cloud] using the [!DNL Flow Service] API.

### Gather required credentials

Read the [authentication guide](../../../../connectors/customer-success/salesforce-service-cloud.md#credentials) for more information on retrieving your credentials.

### Using Experience Platform APIs

For information on how to successfully make calls to Experience Platform APIs, see the guide on [getting started with Experience Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Experience Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Salesforce Service Cloud] authentication credentials as part of the request parameters.

**API format**

```http
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Salesforce Service Cloud] using OAuth 2 Client Credential:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Salesforce Service Cloud account for ACME data (OAuth2)",
      "description": "Salesforce Service Cloud account for ACME data (OAuth2)",
      "auth": {
          "specName": "OAuth2 Client Credential",
          "params":
            "environmentUrl": "https://acme-enterprise-3126.my.salesforce.com",
            "clientId": "xxxx",
            "clientSecret": "xxxx",
            "apiVersion": "60.0"
        }
      },
      "connectionSpec": {
          "id": "cb66ab34-8619-49cb-96d1-39b37ede86ea",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| --- | --- |
| `auth.params.environmentUrl` | The URL of your [!DNL Salesforce Service Cloud] instance. |
| `auth.params.clientId` | The client ID associated with your [!DNL Salesforce Service Cloud] account. |
| `auth.params.clientSecret` | The client secret associated with your [!DNL Salesforce Service Cloud] account. |
| `auth.params.apiVersion` | The REST API version of the [!DNL Salesforce Service Cloud] instance that you are using. |
| `connectionSpec.id` |  The [!DNL Salesforce Service Cloud] connection specification ID: `cb66ab34-8619-49cb-96d1-39b37ede86ea`. |

**Response**

A successful response returns your newly created base connection along with its unique ID.

```json
{
    "id": "4267c2ab-2104-474f-a7c2-ab2104d74f86",
    "etag": "\"0200f1c5-0000-0200-0000-5e4352bf0000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL Salesforce Service Cloud] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring customer success data to Experience Platform using the [!DNL Flow Service] API](../../collect/customer-success.md)
