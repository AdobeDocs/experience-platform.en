---
title: Create a Salesforce Base Connection Using the Flow Service API
description: Learn how to connect Adobe Experience Platform to a Salesforce account using the Flow Service API.
exl-id: 43dd9ee5-4b87-4c8a-ac76-01b83c1226f6
---
# Create a [!DNL Salesforce] base connection using the [!DNL Flow Service] API

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL Salesforce] using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect [!DNL Platform] to a [!DNL Salesforce] account using the [!DNL Flow Service] API.

### Gather required credentials 

The [!DNL Salesforce] source supports basic authentication and OAuth2 Client Credential.

>[!BEGINTABS]

>[!TAB Basic authentication]

To connect your [!DNL Salesforce] account to [!DNL Flow Service] using basic authentication, provide values for the following credentials:

| Credential | Description |
| --- | --- |
| `environmentUrl` | The URL of the [!DNL Salesforce] source instance. The format for `environmentUrl` is `https://[domain].my.salesforce.com`. |
| `username` | The username for the [!DNL Salesforce] user account. |
| `password` | The password for the [!DNL Salesforce] user account. |
| `securityToken` | The security token for the [!DNL Salesforce] user account. |
| `apiVersion` | Optional) The REST API version of the [!DNL Salesforce] instance that you are using. The value for the API version must be formatted with a decimal. For example, if you are using API version `52`, then you must input the value as `52.0`. If this field is left blank, then Experience Platform will automatically use the latest available version. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Salesforce] is: `cfc0fee1-7dc0-40ef-b73e-d8b134c436f5`. |

For more information on getting started, visit [this Salesforce document](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_understanding_authentication.htm).

>[!TAB OAuth 2 Client Credential]

To connect your [!DNL Salesforce] account to [!DNL Flow Service] using OAuth 2 Client Credential, provide values for the following credentials:

| Credential | Description |
| --- | --- |
| `environmentUrl` | The URL of the [!DNL Salesforce] source instance. The format for `environmentUrl` is `https://[domain].my.salesforce.com` |
| `clientId` | The client ID is used in tandem with the client secret as part of OAuth2 authentication. Together, the client ID and client secret enable your application to operate on behalf of your account by identifying your application to [!DNL Salesforce]. |
| `clientSecret` | The client secret is used in tandem with the client ID as part of OAuth2 authentication. Together, the client ID and client secret enable your application to operate on behalf of your account by identifying your application to [!DNL Salesforce]. |
| `apiVersion` | The REST API version of the [!DNL Salesforce] instance that you are using. The value for the API version must be formatted with a decimal. For example, if you are using API version `52`, then you must input the value as `52.0`. If this field is left blank, then Experience Platform will automatically use the latest available version. This value is mandatory for OAuth2 Client Credential authentication. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Salesforce] is: `cfc0fee1-7dc0-40ef-b73e-d8b134c436f5`. |

For more information on using OAuth for [!DNL Salesforce], read the [[!DNL Salesforce] guide on OAuth Authorization Flows](https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_flows.htm&type=5).

>[!ENDTABS]

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint and provide your [!DNL Salesforce] authentication credentials in the request body.

**API format**

```http
POST /connections
```

**Request**

>[!BEGINTABS]

>[!TAB Basic authentication]

The following request creates a base connection for [!DNL Salesforce] using basic authentication:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "ACME Salesforce account",
      "description": "Salesforce account using basic authentication",
      "auth": {
          "specName": "Basic Authentication",
          "params":
            "environmentUrl": "https://acme-enterprise-3126.my.salesforce.com",
            "username": "acme-salesforce",
            "password": "xxxx",
            "securityToken": "xxxx"
        }
      },
      "connectionSpec": {
          "id": "cfc0fee1-7dc0-40ef-b73e-d8b134c436f5",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| --- | --- |
| `auth.params.environmentUrl` | The URL of your [!DNL Salesforce] instance. |
| `auth.params.username` | The username associated with your [!DNL Salesforce] account. |
| `auth.params.password` | The password associated with your [!DNL Salesforce] account. |
| `auth.params.securityToken` | The security token associated with your [!DNL Salesforce] account. |
| `connectionSpec.id` |  The [!DNL Salesforce] connection specification ID: `cfc0fee1-7dc0-40ef-b73e-d8b134c436f5`. |

>[!TAB OAuth 2 Client Credential]

The following request creates a base connection for [!DNL Salesforce] using OAuth 2 Client Credential:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "ACME Salesforce account",
      "description": "Salesforce account using OAuth 2",
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
          "id": "cfc0fee1-7dc0-40ef-b73e-d8b134c436f5",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| --- | --- |
| `auth.params.environmentUrl` | The URL of your [!DNL Salesforce] instance. |
| `auth.params.clientId` | The client ID associated with your [!DNL Salesforce] account. |
| `auth.params.clientSecret` | The client secret associated with your [!DNL Salesforce] account. |
| `auth.params.apiVersion` | The REST API version of the [!DNL Salesforce] instance that you are using. |
| `connectionSpec.id` |  The [!DNL Salesforce] connection specification ID: `cfc0fee1-7dc0-40ef-b73e-d8b134c436f5`. |

>[!ENDTABS]

**Response**

A successful response returns your newly created base connection along with its unique ID.

```json
{
    "id": "4cb0c374-d3bb-4557-b139-5712880adc55",
    "etag": "\"1700df7b-0000-0200-0000-5e3b424f0000\""
}
```

## Create a base connection for [!DNL Salesforce] in Experience Platform on Amazon Web Services

>[!AVAILABILITY]
>
>This section applies to implementations of Experience Platform running on Amazon Web Services (AWS). Experience Platform running on AWS is currently available to a limited number of customers. To learn more about the supported Experience Platform infrastructure, see the [Experience Platform multi-cloud overview](../../../../../landing/multi-cloud.md).

To create a base connection and connect your [!DNL Salesforce] account to Experience Platform on AWS, make a POST request to the `/connections` endpoint and provide the appropriate values for your credentials.

**API format**

```http
POST /connections
```

**Request**

The following request creates a base connection for the [!DNL Salesforce] source in Experience Platform on AWS.

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "ACME Salesforce account on AWS",
      "description": "ACME Salesforce account on AWS",
      "auth": {
          "specName": "OAuth2 JWT Token Credential",
          "params":
            "jwtToken": "{JWT_TOKEN},
            "clientId": "xxxx",
            "clientSecret": "xxxx",
            "instanceUrl": "https://acme-enterprise-3126.my.salesforce.com"
        }
      },
      "connectionSpec": {
          "id": "cfc0fee1-7dc0-40ef-b73e-d8b134c436f5",
          "version": "1.0"
      }
  }'
```

**Response**

A successful response returns your newly created base connection along with its unique ID.

```json
{
    "id": "3e908d3f-c390-482b-9f44-43d3d4f2eb82",
    "etag": "\"1700df7b-0000-0200-0000-5e3b424f0000\""
}
```

### Verify your connection status

To verify your connection status, make a GET request to the `/connections` endpoint and provide the base connection ID that was generated in the creation step.

**API format**

```http
GET /connections
```

**Request**

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/flowservice/connections/3e908d3f-c390-482b-9f44-43d3d4f2eb82' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
```

**Response**

>[!BEGINTABS]

>[!TAB Initializing]

```json
{
  "items": [
    {
      "id": "3e908d3f-c390-482b-9f44-43d3d4f2eb82",
      "createdAt": 1736506325115,
      "updatedAt": 1736506325717,
      "createdBy": "1F1B1D4F66A918B10A495CCB@techacct.adobe.com",
      "updatedBy": "1F1B1D4F66A918B10A495CCB@techacct.adobe.com",
      "createdClient": "2b08c726a19d4795a0cf9adf2941b85c",
      "updatedClient": "2b08c726a19d4795a0cf9adf2941b85c",
      "sandboxId": "0f4ae261-59da-4e79-8ae2-6159dafe79a8",
      "sandboxName": "prod",
      "imsOrgId": "E5391D6F669E86C00A495F94@AdobeOrg",
      "name": "JWT Token Auth Authentication E2E-1736506322",
      "description": "Base Connection for salesforce E2E",
      "connectionSpec": {
        "id": "cfc0fee1-7dc0-40ef-b73e-d8b134c436f5",
        "version": "1.0"
      },
      "state": "initializing",
      "auth": {
        "specName": "OAuth2 JWT Token Credential",
        "params": {
          "jwtToken": "arn:aws:secretsmanager:us-east-1:471112644566:secret:acp_security/74fb5788-62d2-4d87-b36e-5cf5dea4726e-GH7St7",
          "clientId": "3MVG9GCMQoQ6rpzS9G2wBKFe5scFdYC5MV7vrmKHnX5x5yRe6erZPwOr4WvnOcHI8hqZfIk5yhCyryhmFCtSD",
          "clientSecret": "arn:aws:secretsmanager:us-east-1:471112644566:secret:acp_security/2d21ed70-f75a-4421-bba4-4c9a2e51715e-UMuOtZ",
          "instanceUrl": "https://adb8-dev-ed.develop.my.salesforce.com"
        }
      }
    }
  }
]
```

>[!TAB Enabled]

```json
{
  "items": [
      {
        "id": "3e908d3f-c390-482b-9f44-43d3d4f2eb82",
        "createdAt": 1736506325115,
        "updatedAt": 1736506413299,
        "createdBy": "1F1B1D4F66A918B10A495CCB@techacct.adobe.com",
        "updatedBy": "acp_foundation_connectors@AdobeID",
        "createdClient": "2b08c726a19d4795a0cf9adf2941b85c",
        "updatedClient": "acp_foundation_connectors",
        "sandboxId": "0f4ae261-59da-4e79-8ae2-6159dafe79a8",
        "sandboxName": "prod",
        "imsOrgId": "E5391D6F669E86C00A495F94@AdobeOrg",
        "name": "JWT Token Auth Authentication E2E-1736506322",
        "description": "Base Connection for salesforce E2E",
        "connectionSpec": {
          "id": "cfc0fee1-7dc0-40ef-b73e-d8b134c436f5",
          "version": "1.0"
        },
        "state": "enabled",
        "auth": {
          "specName": "OAuth2 JWT Token Credential",
          "params": {
            "jwtToken": "arn:aws:secretsmanager:us-east-1:471112644566:secret:acp_security/74fb5788-62d2-4d87-b36e-5cf5dea4726e-GH7St7",
            "clientId": "3MVG9GCMQoQ6rpzS9G2wBKFe5scFdYC5MV7vrmKHnX5x5yRe6erZPwOr4WvnOcHI8hqZfIk5yhCyryhmFCtSD",
            "clientSecret": "arn:aws:secretsmanager:us-east-1:471112644566:secret:acp_security/2d21ed70-f75a-4421-bba4-4c9a2e51715e-UMuOtZ",
            "instanceUrl": "https://adb8-dev-ed.develop.my.salesforce.com",
            "orgId": "00DdL000001iPRxUAM"
          }
        },
        "version": "\"6d27f305-40be-41c3-97d4-a701827c34df\"",
        "etag": "\"6d27f305-40be-41c3-97d4-a701827c34df\""
    }
  ]
}
```

>[!ENDTABS]

## Next steps

By following this tutorial, you have created a [!DNL Salesforce] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring CRM data to Platform using the [!DNL Flow Service] API](../../collect/crm.md)
