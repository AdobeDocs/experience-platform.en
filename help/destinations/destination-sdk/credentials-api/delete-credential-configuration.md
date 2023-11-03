---
description: This page exemplifies the API call used to delete a credential configuration Adobe Experience Platform Destination SDK.
title: Delete a credential configuration
exl-id: a540e349-043c-4f04-8ca8-f650b9943492
---
# Delete a credential configuration

>[!IMPORTANT]
>
>**API endpoint**: `platform.adobe.io/data/core/activation/authoring/credentials`

This page exemplifies the API request and payload that you can use to delete a credential configuration using the `/authoring/credentials` API endpoint.

## When to use the `/credentials` API endpoint {#when-to-use}

>[!IMPORTANT]
>
>In most cases, you ***do not*** need to use the `/credentials` API endpoint. Instead, you can configure the authentication information for your destination via the `customerAuthenticationConfigurations` parameters of the `/destinations` endpoint.
> 
>Read [Customer authentication configuration](../functionality/destination-configuration/customer-authentication.md) for detailed information on the supported authentication types.

Use this API endpoint to create a credential configuration only if there is a global authentication system between Adobe and your destination platform, and the [!DNL Platform] customer does not need to provide any authentication credentials to connect to your destination. In this case, you must create a credential configuration using the `/credentials` API endpoint.

When using a global authentication system, you must set `"authenticationRule":"PLATFORM_AUTHENTICATION"` in the [destination delivery](../functionality/destination-configuration/destination-delivery.md) configuration, when [creating a new destination configuration](../authoring-api/destination-configuration/create-destination-configuration.md).

>[!IMPORTANT]
>
>All parameter names and values supported by Destination SDK are **case sensitive**. To avoid case sensitivity errors, please use the parameters names and values exactly as shown in the documentation.

## Getting started with credentials API operations {#get-started}

Before continuing, please review the [getting started guide](../getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Delete a credential configuration {#delete}

You can delete an [existing](create-credential-configuration.md) credential configuration by making a `DELETE` request to the `/authoring/credentials` endpoint with the `{INSTANCE_ID}`of the credential configuration that you want to delete.

To obtain an existing destination configuration and its corresponding `{INSTANCE_ID}`, see the article about [retrieving a credential configuration](retrieve-credential-configuration.md).

**API format**

```http
DELETE /authoring/credentials/{INSTANCE_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{INSTANCE_ID}` | The `ID` of the credential configuration you want to delete. |

The following request deletes a credential configuration defined by the `{INSTANCE_ID}` parameter.

+++Request

```shell
curl -X DELETE https://platform.adobe.io/data/core/activation/authoring/credentials/{INSTANCE_ID} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

+++

+++Response

A successful response returns HTTP status 200 along with an empty HTTP response.

+++

## API error handling {#error-handling}

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.

## Next steps {#next-steps}

After reading this document, you now know how to delete a credential configuration using the `/authoring/credentials` API endpoint. Read [how to use Destination SDK to configure your destination](../guides/configure-destination-instructions.md) to understand where this step fits into the process of configuring your destination.
