---
description: This page exemplifies the API call used to create a credential configuration Adobe Experience Platform Destination SDK. 
title: Create a credential configuration
---

# Create a credential configuration

>[!IMPORTANT]
>
>**API endpoint**: `platform.adobe.io/data/core/activation/authoring/credentials`

This page exemplifies the API request and payload that you can use to create a credential configuration using the `/authoring/credentials` API endpoint.

## When to use the `/credentials` API endpoint {#when-to-use}

>[!IMPORTANT]
>
>In most cases, you ***do not*** need to use the `/credentials` API endpoint. Instead, you can configure the authentication information for your destination via the `customerAuthenticationConfigurations` parameters of the `/destinations` endpoint.
> 
>Read [Customer authentication configuration](../functionality/destination-configuration/customer-authentication.md) for detailed information on the supported authentication types.

Use this API endpoint to create a credential configuration only if there is a global authentication system between Adobe and your destination platform, and the [!DNL Platform] customer does not need to provide any authentication credentials to connect to your destination. In this case, you must create a credential configuration using the `/credentials` API endpoint.

When using a global authentication system, you must set `"authenticationRule":"PLATFORM_AUTHENTICATION"` in the [destination delivery](../functionality/destination-configuration/destination-delivery.md) configuration, when [creating a new destination configuration](../authoring-api/destination-configuration/create-destination-configuration.md).

## Getting started with credentials API operations {#get-started}

Before continuing, please review the [getting started guide](../../getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Create a credentials configuration {#create}

You can create a new credentials configuration by making a `POST` request to the `/authoring/credentials` endpoint.

**API format**

```http
POST /authoring/credentials
```

**Request**

The following requests create new credential configurations, defined by the parameters provided in the payload.

Select each tab below to view the corresponding payload.

>[!BEGINTABS]

>[!TAB Basic]

```shell
curl -X POST https://platform.adobe.io/data/core/activation/authoring/credentials \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
    "basicAuthentication":{
      "url":"string",
      "username":"string",
      "password":"string"
   }
}
```

| Parameter | Type | Description |
| -------- | ----------- | ----------- |
|`url` | String | URL of authorization provider |
|`username` | String | Credentials configuration login username |
|`password` | String | Credentials configuration login password |

{style="table-layout:auto"}

>[!TAB Amazon S3]

```shell
curl -X POST https://platform.adobe.io/data/core/activation/authoring/credentials \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
   "s3Authentication":{
      "accessId":"string",
      "secretKey":"string"
   }
}
```

| Parameter | Type | Description |
| -------- | ----------- | ----------- |
|`accessId`|String|Amazon S3 access ID|
|`secretKey`|String|Amazon S3 secret key|

{style="table-layout:auto"}

>[!TAB SSH]

```shell
curl -X POST https://platform.adobe.io/data/core/activation/authoring/credentials \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
    "sshAuthentication":{
      "username":"string",
      "sshKey":"string"
   }
}
```

| Parameter | Type | Description |
| -------- | ----------- | ----------- |
|`username` | String | Credentials configuration login username |
|`sshKey`|String|SSH key for SFTP with SSH authentication|

{style="table-layout:auto"}


>[!TAB Azure Data Lake Storage]

```shell
curl -X POST https://platform.adobe.io/data/core/activation/authoring/credentials \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
    "azureAuthentication":{
      "url":"string",
      "tenant":"string",
      "servicePrincipalId":"string",
      "servicePrincipalKey":"string"
   }
}
```

| Parameter | Type | Description |
| -------- | ----------- | ----------- |
|`url` | String | URL of authorization provider |
|`tenant`|String|Azure Data Lake Storage tenant|
|`servicePrincipalId`|String|Azure Service Principal ID for Azure Data Lake Storage|
|`servicePrincipalKey`|String|Azure Service Principal Key for Azure Data Lake Storage|

{style="table-layout:auto"}


>[!TAB Azure Blob Storage]

```shell
curl -X POST https://platform.adobe.io/data/core/activation/authoring/credentials \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
    "azureConnectionStringAuthentication":{
      "connectionString":"string"
   }
}
```

| Parameter | Type | Description |
| -------- | ----------- | ----------- |
|`connectionString`|String|Azure Blob Storage connection string|

{style="table-layout:auto"}

>[!ENDTABS]

**Response**

A successful response returns HTTP status 200 with details of your newly created credentials configuration.

## API error handling {#error-handling}

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.

## Next steps {#next-steps}

After reading this document, you now know when to use the credentials endpoint and how to set up a credentials configuration using the `/authoring/credentials` API endpoint  Read [how to use Destination SDK to configure your destination](../guides/configure-destination-instructions.md) to understand where this step fits into the process of configuring your destination.
