---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create a Google Ads connector using the Flow Service API
topic: overview
---

# Create a Google Ads connector using the Flow Service API

Flow Service is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the Flow Service API to walk you through the steps to connect Experience Platform to Google Ads.

## Getting Started

This guide requires a working understanding of the following components of Adobe Experience Platform:

*   [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
*   [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to Ad using the Flow Service API.

### Gather required credentials

In order for Flow Service to connect with Ads, you must provide values for the following connection properties:

| **Credential** | **Description** |
| -------------- | --------------- |
| Client Customer ID | The Client customer ID of the Ads account. |
| Developer Token | The developer token associated with the manager account. |
| Refresh Token | The refresh token obtained from Google for authorizing access to Ads. |
| Client ID | The client ID of the Google application used to acquire the refresh token. |
| Client secret | The client secret of the google application used to acquire the refresh token. |
| Connection specification ID | The unique identifier needed to create a connection. The connection specification ID for Google Ads is: `d771e9c1-4f26-40dc-8617-ce58c4b53702` |

For more information about these values, refer to this [Google Ads document](https://developers.google.com/adwords/api/docs/guides/authentication).

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

A connection specifies a source and contains your credentials for that source. Only one connection is required per Google Ads account as it can be used to create multiple source connectors to bring in different data.

#### API format

```https
POST /connections
```

#### Request

In order to create a Google Ads connection, its unique connection specification ID must be provided as part of the POST request. The connection specification ID for Google Ads is `221c7626-58f6-4eec-8ee2-042b0226f03b`.

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "google-ads connection",
        "description": "Connection for google-ads",
        "auth": {
            "specName": "Basic Authentication",
            "params": {
                "clientCustomerID": "{CLIENT_CUSTOMER_ID}",
                "developerToken": "{DEVELOPER_TOKEN}",
                "authenticationType": "{AUTHENTICATION_TYPE}"
                "clientId": "{CLIENT_ID}",
                "clientSecret": "{CLIENT_SECRET}",
                "refreshToken": "{REFRESH_TOKEN}"
            }
        },
        "connectionSpec": {
            "id": "d771e9c1-4f26-40dc-8617-ce58c4b53702",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| --------- | ----------- |
| `auth.params.clientCustomerID` | The client customer ID of your Ads account. |
| `auth.params.developerToken` | The developer token of your Ads account. |
| `auth.params.refreshToken` | The refresh token of your Ads account. |
| `auth.params.clientID` | The client ID of your Ads account. |
| `auth.params.clientSecret` | The client secret of your Ads account. |
| `connectionSpec.id` | The Google Ads connection specification ID: `d771e9c1-4f26-40dc-8617-ce58c4b53702`. |

#### Response

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "2484f2df-c057-4ab5-84f2-dfc0577ab592",
    "etag": "\"10033e77-0000-0200-0000-5e96785b0000\""
}
```

## Next steps

By following this tutorial, you have created a Google Ads connection using the Flow Service API and have obtained the connection's unique ID value. You can use this ID in the next tutorial as you learn how to [explore advertising systems using the Flow Service API](../../explore/advertising.md).
