---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create an Apache Hive on Azure HDInsights connector using the Flow Service API
topic: overview
---

# Create an Apache Hive on Azure HDInsights connector using the Flow Service API

Flow Service is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the Flow Service API to walk you through the steps to connect Apache Hive on Azure HDInsights to Experience Platform.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

*   [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
*   [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to Hive using the Flow Service API.

### Gather required credentials

In order for Flow Service to connect with Hive, you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `host` | IP address or host name of the Hive server. |
| `username` | The username that you use to access Hive server.|
| `password` | The password corresponding to the user. |
| `connectionSpec.id` | The unique identifier needed to create a connection. The connection specification ID for Hive is: `aac9bbd4-6c01-46ce-b47e-51c6f0f6db3f` |

For more information about getting started refer to [this Hive document](https://cwiki.apache.org/confluence/display/Hive/Tutorial#Tutorial-GettingStarted).

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

A connection specifies a source and contains your credentials for that source. Only one connection is required per Hive account as it can be used to create multiple source connectors to bring in different data.

**API format**

```http
POST /connections
```

**Request**

In order to create a Hive connection, its unique connection specification ID must be provided as part of the POST request. The connection specification ID for Hive is `aac9bbd4-6c01-46ce-b47e-51c6f0f6db3f`.

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Apache Hive test connection",
        "description": "A test connection for Apache Hive",
        "auth": {
            "specName": "HDInsights Basic Authentication",
            "params": {
                "connectionString": "{CONNECTION_STRING}"
            }
        },
        "connectionSpec": {
            "id": "aac9bbd4-6c01-46ce-b47e-51c6f0f6db3f",
            "version": "1.0"
        }
    }'
```

| Parameter | Description |
| --------- | ----------- |
| `auth.params.connectionString` | The connection string associated with your Hive account. |
| `connectionSpec.id` | The Hive connection specification ID: `aac9bbd4-6c01-46ce-b47e-51c6f0f6db3f`. |

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "9f6e4311-e032-4c00-ae43-11e032bc00c7",
    "etag": "\"f4004fb7-0000-0200-0000-5e865c1e0000\""
}
```

## Next steps

By following this tutorial, you have created a Hive connection using the Flow Service API and have obtained the connection's unique ID value. You can use this ID in the next tutorial as you learn how to [explore databases using the Flow Service API](../../explore/database-nosql.md).
