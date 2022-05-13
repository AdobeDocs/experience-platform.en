---
keywords: Experience Platform;home;popular topics;Microsoft Dynamics;microsoft dynamics;dynamics;Dynamics
solution: Experience Platform
title: Create a Microsoft Dynamics Base Connection Using the Flow Service API
topic-legacy: overview
type: Tutorial
description: Learn how to connect Platform to a Microsoft Dynamics account using the Flow Service API.
exl-id: 423c6047-f183-4d92-8d2f-cc8cc26647ef
---
# Create a [!DNL Microsoft Dynamics] base connection using the [!DNL Flow Service] API

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL Microsoft Dynamics] (hereinafter referred to as "[!DNL Dynamics]") using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect Platform to a Dynamics account using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect to [!DNL Dynamics], you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `serviceUri` | The service URL of your [!DNL Dynamics] instance. |
| `username` | The user name for your [!DNL Dynamics] user account. |
| `password` | The password for your [!DNL Dynamics] account. |
| `servicePrincipalId` | The client ID of your [!DNL Dynamics] account. This ID is required when using service principal and key-based authentication. |
| `servicePrincipalKey` | The service principal secret key. This credential is required when using service principal and key-based authentication. |
| `connectionSpec.id` | The connection specification returns a source’s connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Dynamics] is: `38ad80fe-8b06-4938-94f4-d4ee80266b07`. |

For more information on getting started, visit [this [!DNL Dynamics] document](https://docs.microsoft.com/en-us/powerapps/developer/common-data-service/authenticate-oauth).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Dynamics] authentication credentials as part of the request parameters.

### Create a [!DNL Dynamics] base connection using basic authentication

To create a [!DNL Dynamics] base connection using basic authentication, make a POST request to the [!DNL Flow Service] API while providing values for your connection's `serviceUri`, `username`, and `password`.

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
        "name": "Dynamics connection",
        "description": "Dynamics connection using basic auth",
        "auth": {
            "specName": "Basic Authentication for Dynamics-Online",
            "params": {
                "serviceUri": "{SERVICE_URI}",
                "username": "{USERNAME}",
                "password": "{PASSWORD}"
            }
        },
        "connectionSpec": {
            "id": "38ad80fe-8b06-4938-94f4-d4ee80266b07",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.serviceUri` | The service URI associated with your [!DNL Dynamics] instance. |
| `auth.params.username` | The username associated with your [!DNL Dynamics] account. |
| `auth.params.password` | The password associated with your [!DNL Dynamics] account. |
| `connectionSpec.id` | The [!DNL Dynamics] connection specification ID: `38ad80fe-8b06-4938-94f4-d4ee80266b07` |

**Response**

A successful response returns the newly created connection, including its unique identifier (`id`). This ID is required to explore your CRM system in the next step.

```json
{
    "id": "4cb0c374-d3bb-4557-b139-5712880adc55",
    "etag": "\"9e0052a2-0000-0200-0000-5e35tb330000\""
}
```

### Create a [!DNL Dynamics] base connection using service principal key-based authentication

To create a [!DNL Dynamics] base connection using service principal key-based authentication, make a POST request to the [!DNL Flow Service] API while providing values for your connection's `serviceUri`, `servicePrincipalId`, and `servicePrincipalKey`.

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
        "name": "Dynamics connection",
        "description": "Dynamics connection using key-based authentication",
        "auth": {
            "specName": "Service Principal Key Based Authentication",
            "params": {
                "serviceUri": "{SERVICE_URI}",
                "servicePrincipalId": "{SERVICE_PRINCIPAL_ID}",
                "servicePrincipalKey": "{SERVICE_PRINCIPAL_KEY}"
            }
        },
        "connectionSpec": {
            "id": "38ad80fe-8b06-4938-94f4-d4ee80266b07",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.serviceUri` | The service URI associated with your [!DNL Dynamics] instance. |
| `auth.params.servicePrincipalId` | The client ID of your [!DNL Dynamics] account. This ID is required when using service principal and key-based authentication. |
| `auth.params.servicePrincipalKey` | The service principal secret key. This credential is required when using service principal and key-based authentication. |
| `connectionSpec.id` | The [!DNL Dynamics] connection specification ID: `38ad80fe-8b06-4938-94f4-d4ee80266b07` |

**Response**

A successful response returns the newly created connection, including its unique identifier (`id`). This ID is required to explore your CRM system in the next step.

```json
{
    "id": "4cb0c374-d3bb-4557-b139-5712880adc55",
    "etag": "\"9e0052a2-0000-0200-0000-5e35tb330000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL Microsoft Dynamics] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring CRM data to Platform using the [!DNL Flow Service] API](../../collect/crm.md)
