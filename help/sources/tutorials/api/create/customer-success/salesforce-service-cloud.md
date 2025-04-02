---
title: Create a Salesforce Service Cloud Source Connection Using the Flow Service API
description: Learn how to connect Adobe Experience Platform to Salesforce Service Cloud using the Flow Service API.
exl-id: ed133bca-8e88-4c85-ae52-c3269b6bf3c9
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

The [!DNL Salesforce Service Cloud] source supports basic authentication and OAuth2 Client Credential.

>[!BEGINTABS]

>[!TAB Basic authentication]

To connect your [!DNL Salesforce Service Cloud] account to [!DNL Flow Service] using basic authentication, provide values for the following credentials:

| Credential | Description |
| --- | --- |
| `environmentUrl` | The URL of the [!DNL Salesforce Service Cloud] source instance. |
| `username` | The username for the [!DNL Salesforce Service Cloud] user account. |
| `password` | The password for the [!DNL Salesforce Service Cloud] user account. |
| `securityToken` | The security token for the [!DNL Salesforce Service Cloud] user account. |
| `apiVersion` | (Optional) The REST API version of the [!DNL Salesforce Service Cloud] instance that you are using. The value for the API version must be formatted with a decimal. For example, if you are using API version `52`, then you must input the value as `52.0`. If this field is left blank, Experience Platform will automatically use the latest available version. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Salesforce Service Cloud] is: `cfc0fee1-7dc0-40ef-b73e-d8b134c436f5`. |

For more information on getting started, visit [this Salesforce document](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_understanding_authentication.htm).

>[!TAB OAuth 2 Client Credential]

To connect your [!DNL Salesforce Service Cloud] account to [!DNL Flow Service] using OAuth 2 Client Credential, provide values for the following credentials:

| Credential | Description |
| --- | --- |
| `environmentUrl` | The URL of the [!DNL Salesforce Service Cloud] source instance. |
| `clientId` | The client ID is used in tandem with the client secret as part of OAuth2 authentication. Together, the client ID and client secret enable your application to operate on behalf of your account by identifying your application to [!DNL Salesforce Service Cloud]. |
| `clientSecret` | The client secret is used in tandem with the client ID as part of OAuth2 authentication. Together, the client ID and client secret enable your application to operate on behalf of your account by identifying your application to [!DNL Salesforce Service Cloud]. |
| `apiVersion` | The REST API version of the [!DNL Salesforce Service Cloud] instance that you are using. The value for the API version must be formatted with a decimal. For example, if you are using API version `52`, then you must input the value as `52.0`. If this field is left blank, Experience Platform will automatically use the latest available version. This value is mandatory for OAuth2 Client Credential authentication. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Salesforce Service Cloud] is: `cfc0fee1-7dc0-40ef-b73e-d8b134c436f5`. |

For more information on using OAuth for [!DNL Salesforce Service Cloud], read the [[!DNL Salesforce Service Cloud] guide on OAuth Authorization Flows](https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_flows.htm&type=5).

>[!ENDTABS]

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Salesforce Service Cloud] authentication credentials as part of the request parameters.

**API format**

```http
POST /connections
```

**Request**

>[!BEGINTABS]

>[!TAB Basic authentication]

The following request creates a base connection for [!DNL Salesforce Service Cloud] using basic authentication:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Salesforce Service Cloud account for ACME data (basic auth)",
      "description": "Salesforce Service Cloud account for ACME data (basic auth)",
      "auth": {
          "specName": "Basic Authentication",
          "params": {
            "environmentUrl": "https://acme-enterprise-3126.my.salesforce.com",
            "username": "acme-salesforce-service-cloud",
            "password": "xxxx",
            "securityToken": "xxxx"
        }
      },
      "connectionSpec": {
          "id": "cb66ab34-8619-49cb-96d1-39b37ede86ea",
          "version": "1.0"
      }
  }'
```

| Parameter | Description |
| ---| --- |
| `auth.params.environmentUrl` | The URL of your [!DNL Salesforce Service Cloud] instance. |
| `auth.params.username` | The username associated with your [!DNL Salesforce Service Cloud] account. |
| `auth.params.password` | The password associated with your [!DNL Salesforce Service Cloud] account. |
| `auth.params.securityToken` | The security token associated with your [!DNL Salesforce Service Cloud] account. |
| `connectionSpec.id` | The [!DNL Salesforce Service Cloud] connection specification ID: `cb66ab34-8619-49cb-96d1-39b37ede86ea` |

>[!TAB OAuth2 Client Credential]

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

>[!ENDTABS]

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
* [Create a dataflow to bring customer success data to Platform using the [!DNL Flow Service] API](../../collect/customer-success.md)
