---
description: This page exemplifies the API call used to retrieve a credential configuration through Adobe Experience Platform Destination SDK. 
title: Retrieve a credential configuration
---

# Retrieve a credential configuration

>[!IMPORTANT]
>
>**API endpoint**: `platform.adobe.io/data/core/activation/authoring/credentials`

This page exemplifies the API request and payload that you can use to retrieve a credential configuration using the `/authoring/credentials` API endpoint.

## When to use the `/credentials` API endpoint {#when-to-use}

>[!IMPORTANT]
>
>In most cases, you ***do not*** need to use the `/credentials` API endpoint. Instead, you can configure the authentication information for your destination via the `customerAuthenticationConfigurations` parameters of the `/destinations` endpoint.
> 
>Read [Customer authentication configuration](../functionality/destination-configuration/customer-authentication.md) for detailed information on the supported authentication types.

Use this API endpoint to create a credential configuration only if there is a global authentication system between Adobe and your destination platform, and the [!DNL Platform] customer does not need to provide any authentication credentials to connect to your destination. In this case, you must create a credential configuration using the `/credentials` API endpoint.

When using a global authentication system, you must set `"authenticationRule":"PLATFORM_AUTHENTICATION"` in the [destination delivery](../functionality/destination-configuration/destination-delivery.md) configuration, when [creating a new destination configuration](../authoring-api/destination-configuration/create-destination-configuration.md).

## Getting started with credentials API operations {#get-started}

Before continuing, please review the [getting started guide](../getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Retrieve a credential configuration {#retrieve}

You can retrieve an [existing](create-credential-configuration.md) credential configuration by making a `GET` request to the `/authoring/credentials` endpoint.

**API format**

```http
GET /authoring/credentials
```

```http
GET /authoring/credentials/{INSTANCE_ID}
```

**Request**

The following two requests retrieve all credentials configurations for your IMS Organization, or a specific credential configuration, depending on whether you pass the `INSTANCE_ID` parameter in the request.

Select each tab below to view the corresponding payload.

>[!BEGINTABS]

>[!TAB Retrieve all credential configurations]

```shell
curl -X GET https://platform.adobe.io/data/core/activation/authoring/credentials \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

>[!TAB Retrieve specific credential configurations]

```shell
curl -X GET https://platform.adobe.io/data/core/activation/authoring/credentials/{INSTANCE_ID} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

| Parameter | Description |
| -------- | ----------- |
| `{INSTANCE_ID}` | The ID of the credential configuration you want to retrieve. |

>[!ENDTABS]

**Response**

A successful response returns HTTP status 200 with a list of credential configurations that you have access to, based on the [!DNL IMS Org ID] and sandbox name that you used. One `instanceId` corresponds to one credential configuration.

If you passed the `{INSTANCE_ID}` parameter in the API call, the response only includes the credential configuration corresponding to that `{INSTANCE_ID}`.


```json
{
   "instanceId":"n55affa0-3747-4030-895d-1d1236bb3680",
   "createdDate":"2021-06-07T06:41:48.641943Z",
   "lastModifiedDate":"2021-06-07T06:41:48.641943Z",
   "type":"s3Authentication",
   "name":"yourdestination",
   "s3Authentication":{
      "accessId":"string",
      "secretKey":"string"
   }
}

```

## API error handling {#error-handling}

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.

## Next steps {#next-steps}

After reading this document, you now know how to retrieve details about your credential configurations using the `/authoring/credentials` API endpoint. Read [how to use Destination SDK to configure your destination](../guides/configure-destination-instructions.md) to understand where this step fits into the process of configuring your destination.
