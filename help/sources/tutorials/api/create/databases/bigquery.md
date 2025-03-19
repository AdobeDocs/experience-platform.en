---
title: Connect Google BigQuery To Experience Platform Using The Flow Service API
description: Learn how to connect Adobe Experience Platform to Google BigQuery using the Flow Service API.
badgeUltimate: label="Ultimate" type="Positive"
exl-id: 51f90366-7a0e-49f1-bd57-b540fa1d15af
---
# Connect [!DNL Google BigQuery] to Experience Platform using the [!DNL Flow Service] API

>[!IMPORTANT]
>
>The [!DNL Google BigQuery] source is available in the sources catalog to users who have purchased Real-Time Customer Data Platform Ultimate.

Read this guide to learn how to connect your [!DNL Google BigQuery] database to Adobe Experience Platform using the [[!DNL Flow Service] API](https://developer.adobe.com/experience-platform-apis/references/flow-service/).

## Get started

This guide requires a working understanding of the following components of Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

### Gather required credentials

Read the [[!DNL Google BigQuery] authentication guide](../../../../connectors/databases/bigquery.md#generate-your-google-bigquery-credentials) for detailed steps on gathering your required credentials.

## Connect [!DNL Google BigQuery] to Experience Platform on Azure {#azure}

Read the steps below for information on how to connect your [!DNL Google BigQuery] source to Experience Platform on Azure.

### Create a base connection for [!DNL Google BigQuery] on Experience Platform on Azure {#azure-base}

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Google BigQuery] authentication credentials as part of the request parameters.

**API format**

```https
POST /connections
```

>[!BEGINTABS]

>[!TAB Use basic authentication]

+++Request

The following request creates a base connection for [!DNL Google BigQuery] using basic authentication:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Google BigQuery connection with basic authentication",
        "description": "Google BigQuery connection with basic authentication",
        "auth": {
            "specName": "Basic Authentication",
            "type": "OAuth2.0",
            "params": {
                    "project": "{PROJECT}",
                    "clientId": "{CLIENT_ID},
                    "clientSecret": "{CLIENT_SECRET}",
                    "refreshToken": "{REFRESH_TOKEN}"
                }
        },
        "connectionSpec": {
            "id": "3c9b37f8-13a6-43d8-bad3-b863b941fedd",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| --------- | ----------- |
| `auth.params.project` | The project ID of the default [!DNL Google BigQuery] project to query. against. |
| `auth.params.clientId` | The ID value used to generate the refresh token. |
| `auth.params.clientSecret` | The client value used to generate the refresh token. |
| `auth.params.refreshToken` | The refresh token obtained from [!DNL Google] used to authorize access to [!DNL Google BigQuery]. |
| `connectionSpec.id` | The [!DNL Google BigQuery] connection specification ID: `3c9b37f8-13a6-43d8-bad3-b863b941fedd`. |

+++

+++Response

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "6990abad-977d-41b9-a85d-17ea8cf1c0e4",
    "etag": "\"ca00acbf-0000-0200-0000-60149e1e0000\""
}

```

+++

>[!TAB Use service authentication]


+++Request

The following request creates a base connection for [!DNL Google BigQuery] using service authentication:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Google BigQuery base connection with service account",
      "description": "Google BigQuery connection with service account",
      "auth": {
          "specName": "Service Authentication",
          "params": {
                  "projectId": "{PROJECT_ID}",
                  "keyFileContent": "{KEY_FILE_CONTENT},
                  "largeResultsDataSetId": "{LARGE_RESULTS_DATASET_ID}"
              }
      },
      "connectionSpec": {
          "id": "3c9b37f8-13a6-43d8-bad3-b863b941fedd",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| --------- | ----------- |
| `auth.params.projectId` | The project ID of the default [!DNL Google BigQuery] project to query. against. |
| `auth.params.keyFileContent` | The key file that is used to authenticate the service account. You must encode the key file content in [!DNL Base64]. |
| `auth.params.largeResultsDataSetId` | (Optional) The pre-created  [!DNL Google BigQuery] dataset ID that is required in order to enable support for large result sets. |

+++

+++Response

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "6990abad-977d-41b9-a85d-17ea8cf1c0e4",
    "etag": "\"ca00acbf-0000-0200-0000-60149e1e0000\""
}
```

+++

>[!ENDTABS]

## Connect [!DNL Google BigQuery] to Experience Platform on Amazon Web Services (AWS) {#aws}

Read the steps below for information on how to connect your [!DNL Google BigQuery] database to Experience Platform on AWS.

### Create a base connection for [!DNL Google BigQuery] on Experience Platform on AWS

>[!AVAILABILITY]
>
>This section applies to implementations of Experience Platform running on Amazon Web Services (AWS). Experience Platform running on AWS is currently available to a limited number of customers. To learn more about the supported Experience Platform infrastructure, see the [Experience Platform multi-cloud overview](../../../../../landing/multi-cloud.md).

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection to connect [!DNL Google BigQuery] to Experience Platform on AWS.

+++Select to view example

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Google BigQuery base connection on AWS",
      "description": "Google BigQuery base connection on AWS",
      "auth": {
          "specName": "Service Authentication",
          "params": {
                  "projectId": "{PROJECT_ID}",
                  "keyFileContent": "{KEY_FILE_CONTENT}
      },
      "connectionSpec": {
          "id": "3c9b37f8-13a6-43d8-bad3-b863b941fedd",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| --------- | ----------- |
| `auth.params.projectId` | The project ID of the default [!DNL Google BigQuery] project to query. against. |
| `auth.params.keyFileContent` | The key file that is used to authenticate the service account. You must encode the key file content in [!DNL Base64]. |

+++

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your storage in the next tutorial.

+++Select to view example

```json
{
    "id": "6990abad-977d-41b9-a85d-17ea8cf1c0e4",
    "etag": "\"ca00acbf-0000-0200-0000-60149e1e0000\""
}
```
+++

## Next steps

By following this tutorial, you have created a [!DNL Google BigQuery] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring database data to Platform using the [!DNL Flow Service] API](../../collect/database-nosql.md)
