---
keywords: Experience Platform;home;popular topics;Apache Spark;apache spark;Azure HDInsights
solution: Experience Platform
title: Create an Apache Spark on Azure HDInsights Base Connection Using the Flow Service API
topic-legacy: overview
type: Tutorial
description: Learn how to connect Apache Spark on Azure HDInsights to Adobe Experience Platform using the Flow Service API.
exl-id: 1f7ca86e-32f4-45f7-92c2-f87c5c0c4ea4
---
# Create an [!DNL Apache Spark] on [!DNL Azure] HDInsights base connection using the [!DNL Flow Service] API

>[!NOTE]
>
>The [!DNL Apache Spark] on [!DNL Azure HDInsights] connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL Apache Spark] on [!DNL Azure HDInsights] (hereinafter referred to as "[!DNL Spark]") using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL Spark] using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL Spark], you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `host` | The IP address or host name of the [!DNL Spark] server. |
| `username` | The user name that you use to access [!DNL Spark] Server. |
| `password` | The password corresponding to the user. |
| `connectionSpec.id` | The connection specification returns a source’s connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Spark] is: `6a8d82bc-1caf-45d1-908d-cadabc9d63a6` |

For more information about getting started refer to [this Spark document](https://docs.microsoft.com/en-us/azure/hdinsight/spark/apache-spark-overview).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Spark] authentication credentials as part of the request parameters.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Spark]:


```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Spark test connection",
        "description": "A Spark test connection",
        "auth": {
            "specName": "HDInsights Basic Authentication",
        "params": {
            "host":  "{HOST}",
            "username": "{USERNAME}",
            "password":"{PASSWORD}"
            }
        },
        "connectionSpec": {
            "id": "6a8d82bc-1caf-45d1-908d-cadabc9d63a6",
            "version": "1.0"
        }
    }'
```

| Parameter | Description |
| --------- | ----------- |
| `auth.params.host` | The host of the [!DNL Spark] server. |
| `auth.params.username` | The username associated with your [!DNL Spark] connection. |
| `auth.params.password` | The password associated with your [!DNL Spark] connection. |
| `connectionSpec.id` | The [!DNL Spark] connection specification ID: `6a8d82bc-1caf-45d1-908d-cadabc9d63a6`. |

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "a45f2f58-e3a2-46ba-9f2f-58e3a2b6baf2",
    "etag": "\"900009d6-0000-0200-0000-5e8500010000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL Spark] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring database data to Platform using the [!DNL Flow Service] API](../../collect/database-nosql.md)
