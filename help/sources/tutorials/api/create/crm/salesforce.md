---
keywords: Experience Platform;home;popular topics;Salesforce;salesforce
solution: Experience Platform
title: Create a Salesforce connector using the Flow Service API
topic: overview
type: Tutorial
description: This tutorial uses the Flow Service API to walk you through the steps to connect Platform to a Salesforce account for collecting CRM data.
---

# Create a [!DNL Salesforce] connector using the [!DNL Flow Service] API

Flow Service is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the [!DNL Flow Service] API to walk you through the steps to connect [!DNL Platform] to a [!DNL Salesforce] account for collecting CRM data.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect [!DNL Platform] to a [!DNL Salesforce] account using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect to [!DNL Salesforce], you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `environmentUrl` | The URL of the [!DNL Salesforce] source instance. |
| `username` | The username for the [!DNL Salesforce] user account. |
| `password` | The password for the [!DNL Salesforce] user account. |
| `securityToken` | The security token for the [!DNL Salesforce] user account. |

For more information on getting started, visit [this Salesforce document](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_understanding_authentication.htm).

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

A connection specifies a source and contains your credentials for that source. Only one connection is required per [!DNL Salesforce] account as it can be used to create multiple source connectors to bring in different data.

**API format**

```http
POST /connections
```

**Request**

In order to create a [!DNL Salesforce] connection, its unique connection specification ID must be provided as part of the POST request. The connection specification ID for [!DNL Salesforce] is `cfc0fee1-7dc0-40ef-b73e-d8b134c436f5`.

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Salesforce Connection",
        "description": "Connection for Salesforce account",
        "auth": {
            "specName": "Basic Authentication",
            "params": {
                "username": "{USERNAME}",
                "password": "{PASSWORD}",
                "securityToken": "{SECURITY_TOKEN}"
            }
        },
        "connectionSpec": {
            "id": "cfc0fee1-7dc0-40ef-b73e-d8b134c436f5",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.username` | The username associated with your [!DNL Salesforce] account. |
| `auth.params.password` | The password associated with your [!DNL Salesforce] account. |
| `auth.params.securityToken` | The security token associated with your [!DNL Salesforce] account. |
| `connectionSpec.id` | The connection specification `id` of your [!DNL Salesforce] account retrieved in the previous step. |

**Response**

A successful response returns the newly created connection, including its unique identifier (`id`). This ID is required to explore your CRM system in the next step.

```json
{
    "id": "4cb0c374-d3bb-4557-b139-5712880adc55",
    "etag": "\"1700df7b-0000-0200-0000-5e3b424f0000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL Salesforce] connection using the [!DNL Flow Service] API and have obtained the connection's unique ID value. You can use this ID in the next tutorial as you learn how to  [explore CRM systems using the Flow Service API](../../explore/crm.md).