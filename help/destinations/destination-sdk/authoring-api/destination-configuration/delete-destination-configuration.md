---
description: This page exemplifies the API call used to delete an existing destination configuration through Adobe Experience Platform Destination SDK. 
title: Delete a destination configuration
---

# Delete a destination configuration

>[!IMPORTANT]
>
>**API endpoint**: `platform.adobe.io/data/core/activation/authoring/destinations`

This page exemplifies the API request and payload that you can use to delete an existing destination configuration, using the `/authoring/destinations` API endpoint.

For a detailed description of the capabilities that you can delete through this endpoint, read the following articles:

* [Customer authentication configuration](../../functionality/destination-configuration/customer-authentication.md)
* [OAuth2 authentication](../../functionality/destination-configuration/oauth2-authentication.md)
* [Customer data fields](../../functionality/destination-configuration/customer-data-fields.md)
* [UI attributes](../../functionality/destination-configuration/ui-attributes.md)
* [Schema configuration](../../functionality/destination-configuration/schema-configuration.md)
* [Identities and attributes](../../functionality/destination-configuration/identities-attributes.md)
* [Destination delivery](../../functionality/destination-configuration/destination-delivery.md)
* [Audience metadata configuration](../../functionality/destination-configuration/audience-metadata-configuration.md)
* [Aggregation policy](../../functionality/destination-configuration/aggregation-policy.md)
* [Batch configuration](../../functionality/destination-configuration/batch-configuration.md)
* [Historical profile qualifications](../../functionality/destination-configuration/historical-profile-qualifications.md)

## Getting started with destination configuration API operations {#get-started}

Before continuing, please review the [getting started guide](../../getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Delete a destination configuration {#delete}

You can delete an [existing](create-destination-configuration.md) destination server configuration by making a `DELETE` request to the `/authoring/destinations` endpoint with the `{INSTANCE_ID}`of the destination configuration that you want to delete.

To obtain an existing destination configuration and its corresponding `{INSTANCE_ID}`, see the article about [retrieving a destination configuration](retrieve-destination-configuration.md).

**API format**

```http
DELETE /authoring/destinations/{INSTANCE_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{INSTANCE_ID}` | The `ID` of the destination configuration you want to delete. |

**Request**

```shell
curl -X DELETE https://platform.adobe.io/data/core/activation/authoring/destinations/{INSTANCE_ID} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

A successful response returns HTTP status 200 along with an empty HTTP response.

## API error handling {#error-handling}

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.

## Next steps {#next-steps}

After reading this document, you now know how to delete a destination configuration using the `/authoring/destinations` API endpoint. Read [how to use Destination SDK to configure your destination](../../guides/configure-destination-instructions.md) to understand where this step fits into the process of configuring your destination.
