---
description: This page describes all the API operations that you can perform using the `/authoring/credentials` API endpoint.
title: Credentials endpoint API operations
exl-id: 89957f38-e7f4-452d-abc0-0940472103fe
---
# Credentials endpoint API operations {#credentials}

>[!IMPORTANT]
>
>**API endpoint**: `platform.adobe.io/data/core/activation/authoring/credentials`

This page lists and describes all the API operations that you can perform using the `/authoring/credentials` API endpoint.

For a description of the functionality supported by this endpoint, read:

* [Streaming destination configuration](destination-configuration.md) for the functionality you can configure for streaming destinations.
* [File-based destination configuration](file-based-destination-configuration.md) for the functionality you can configure for file-based destinations.

## When to use the `/credentials` API endpoint {#when-to-use}

>[!IMPORTANT]
>
>In most cases, you *do not* need to use the `/credentials` API endpoint. Instead, you can configure the authentication information for your destination via the `customerAuthenticationConfigurations` parameters of the `/destinations` endpoint. Read [Authentication configuration](./authentication-configuration.md#when-to-use) for more information.

Use this API endpoint and select `PLATFORM_AUTHENTICATION` in the [destination configuration](./destination-configuration.md#destination-delivery) if there is a global authentication system between Adobe and your destination and the [!DNL Platform] customer does not need to provide any authentication credentials to connect to your destination. In this case, you must create a credentials object using the `/credentials` API endpoint.

## Getting started with credentials configuration API operations {#get-started}

Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Create a credentials configuration {#create}

You can create a new credentials configuration by making a POST request to the `/authoring/credentials` endpoint.

**API format**

```http
POST /authoring/credentials
```

**Request**

The following request creates a new credentials configuration, configured by the parameters provided in the payload. The payload below includes all parameters accepted by the `/authoring/credentials` endpoint. Note that you do not have to add all parameters on the call and that the template is customizable, according to your API requirements.

```shell
curl -X POST https://platform.adobe.io/data/core/activation/authoring/credentials \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
   "oauth2UserAuthentication":{
      "url":"string",
      "clientId":"string",
      "clientSecret":"string",
      "username":"string",
      "password":"string",
      "header":"string"
   },
   "oauth2ClientAuthentication":{
      "url":"string",
      "clientId":"string",
      "clientSecret":"string",
      "header":"string",
      "developerToken":"string"
   },
   "oauth2AccessTokenAuthentication":{
      "accessToken":"string",
      "expiration":"string",
      "username":"string",
      "userId":"string",
      "url":"string",
      "header":"string"
   },
   "oauth2RefreshTokenAuthentication":{
      "refreshToken":"string",
      "expiration":"string",
      "clientId":"string",
      "clientSecret":"string",
      "url":"string",
      "header":"string"
   },
   "s3Authentication":{
      "accessId":"string",
      "secretKey":"string"
   },
   "sshAuthentication":{
      "username":"string",
      "sshKey":"string"
   },
   "azureAuthentication":{
      "url":"string",
      "tenant":"string",
      "servicePrincipalId":"string",
      "servicePrincipalKey":"string"
   },
   "azureConnectionStringAuthentication":{
      "connectionString":"string"
   },
   "basicAuthentication":{
      "url":"string",
      "username":"string",
      "password":"string"
   }
}
```

| Parameter | Type | Description |
| -------- | ----------- | ----------- |
|`username` | String | Credentials configuration login username |
|`password` | String | Credentials configuration login password |
|`url` | String | URL of authorization provider |
|`clientId` | String | Client ID of Client/Application credential |
|`clientSecret` | String | Client secret of Client/Application credential |
|`accessToken` | String | Access token provided by the authorization provider |
|`expiration` | String | The time-to-live for the access token |
|`refreshToken` | String | Refresh token provided by the authorization provider |
|`header` | String | Any header required for authorization |
|`accessId`|String|Amazon S3 access ID|
|`secretKey`|String|Amazon S3 secret key|
|`sshKey`|String|SSH key for SFTP with SSH authentication|
|`tenant`|String|Azure Data Lake Storage tenant|
|`servicePrincipalId`|String|Azure Service Principal ID for Azure Data Lake Storage|
|`servicePrincipalKey`|String|Azure Service Principal Key for Azure Data Lake Storage|
|`connectionString`|String|Azure Blob Storage connection string|

{style="table-layout:auto"}

**Response**

A successful response returns HTTP status 200 with details of your newly created credentials configuration.

## List credentials configurations {#retrieve-list}

You can retrieve a list of all credentials configurations for your IMS Organization by making a GET request to the `/authoring/credentials` endpoint.

**API format**


```http
GET /authoring/credentials
```

**Request**

The following request will retrieve the list of credentials configurations that you have access to, based on IMS Organization and sandbox configuration.

```shell
curl -X GET https://platform.adobe.io/data/core/activation/authoring/credentials \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

The following response returns HTTP status 200 with a list of credentials configurations that you have access to, based on the IMS Organization ID and sandbox name that you used. One `instanceId` corresponds to the template for one credentials configuration. The response is truncated for brevity.

```json

{
   "items":[
      {
         "instanceId":"n55affa0-3747-4030-895d-1d1236bb3680",
         "createdDate":"2021-06-07T06:41:48.641943Z",
         "lastModifiedDate":"2021-06-07T06:41:48.641943Z",
         "type":"OAUTH2_USER_CREDENTIAL",
         "name":"yourdestination",
         "oauth2UserAuthentication":{
            "url":"ABCD",
            "clientId":"ABCDEFGHIJKL",
            "clientSecret":"clientsecret",
            "username":"username",
            "password":"password",
            "header":"header"
         }
      }
   ]
}
    
```

## Update an existing credentials configuration {#update}

You can update an existing credentials configuration by making a PUT request to the `/authoring/credentials` endpoint and providing the instance ID of the credentials configuration you want to update. In the body of the call, provide the updated credentials configuration.

**API format**


```http
PUT /authoring/credentials/{INSTANCE_ID}
```

| Parameter | Description |
| -------- | ----------- |
| `{INSTANCE_ID}` | The ID of the credentials configuration that you want to update. |

**Request**

The following request updates an existing credentials configuration, configured by the parameters provided in the payload.

```shell

curl -X PUT https://platform.adobe.io/data/core/activation/authoring/credentials/n55affa0-3747-4030-895d-1d1236bb3680 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
   "instanceId":"n55affa0-3747-4030-895d-1d1236bb3680",
   "createdDate":"2021-06-07T06:41:48.641943Z",
   "lastModifiedDate":"2021-06-07T06:41:48.641943Z",
   "type":"OAUTH2_USER_CREDENTIAL",
   "name":"yourdestination",
   "oauth2UserAuthentication":{
      "url":"ABCD",
      "clientId":"ABCDEFGHIJKL",
      "clientSecret":"clientsecret",
      "username":"username",
      "password":"password",
      "header":"header"
   }
}

```

## Retrieve a specific credentials configuration {#get}

You can retrieve detailed information about a specific credentials configuration by making a GET request to the `/authoring/credentials` endpoint and providing the instance ID of the credentials configuration you want to update.

**API format**

```http
GET /authoring/credentials/{INSTANCE_ID}
```

| Parameter | Description |
| -------- | ----------- |
| `{INSTANCE_ID}` | The ID of the credentials configuration you want to retrieve. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/core/activation/authoring/credentials/n55affa0-3747-4030-895d-1d1236bb3680 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with detailed information about the specified credentials configuration.

```json
{
   "instanceId":"n55affa0-3747-4030-895d-1d1236bb3680",
   "createdDate":"2021-06-07T06:41:48.641943Z",
   "lastModifiedDate":"2021-06-07T06:41:48.641943Z",
   "type":"OAUTH2_USER_CREDENTIAL",
   "name":"yourdestination",
   "oauth2UserAuthentication":{
      "url":"ABCD",
      "clientId":"ABCDEFGHIJKL",
      "clientSecret":"clientsecret",
      "username":"username",
      "password":"password",
      "header":"header"
   }
}
```

## Delete a specific credentials configuration {#delete}

You can delete the specified credentials configuration by making a DELETE request to the `/authoring/credentials` endpoint and providing the ID of the credentials configuration you wish to delete in the request path.

**API format**

```http
DELETE /authoring/credentials/{INSTANCE_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{INSTANCE_ID}` | The `id` of the credentials configuration you want to delete. |

**Request**

```shell
curl -X DELETE https://platform.adobe.io/data/core/activation/authoring/credentials/n55affa0-3747-4030-895d-1d1236bb3680 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

A successful response returns HTTP status 200 along with an empty HTTP response.

## API error handling

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide. 

## Next steps

After reading this document, you now know when to use the credentials endpoint and how to set up a credentials configuration using the `/authoring/credentials` API endpoint or the `/authoring/destinations` endpoint. Read [how to use Destination SDK to configure your destination](./configure-destination-instructions.md) to understand where this step fits into the process of configuring your destination.
