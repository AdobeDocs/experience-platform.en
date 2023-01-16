---
description: This page exemplifies the API call used to delete an existing audience template through Adobe Experience Platform Destination SDK. 
title: Delete an audience template
---

# Delete an audience template

>[!IMPORTANT]
>
>**API endpoint**: `platform.adobe.io/data/core/activation/authoring/audience-templates`

This page exemplifies the API request and payload that you can use to delete an audience template, using the `/authoring/audience-templates` API endpoint.

For a detailed description of the capabilities that you can configure through this endpoint, see [audience metadata management](../functionality/audience-metadata-management.md).

## Getting started with audience template API operations {#get-started}

Before continuing, please review the [getting started guide](../getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Delete an audience template {#delete}

You can delete an [existing](create-audience-template.md) audience template by making a `DELETE` request to the `/authoring/audience-templates` endpoint with the `{INSTANCE_ID}`of the audience template that you want to delete.

To obtain an existing audience template and its corresponding `{INSTANCE_ID}`, see the article about [retrieving an audience template](retrieve-audience-template.md).

**API format**

```http
DELETE /authoring/audience-templates/{INSTANCE_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{INSTANCE_ID}` | The `ID` of the audience template you want to delete. |

**Request**

```shell
curl -X DELETE https://platform.adobe.io/data/core/activation/authoring/audience-templates/{INSTANCE_ID} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

A successful response returns HTTP status 200 along with an empty HTTP response.

## API error handling {#error-handling}

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.

## Next steps {#next-steps}

After reading this document, you now know how to delete an audience template using the `/authoring/audience-templates` API endpoint. Read [how to use Destination SDK to configure your destination](../guides/configure-destination-instructions.md) to understand where this step fits into the process of configuring your destination.
