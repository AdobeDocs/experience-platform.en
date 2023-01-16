---
description: This page exemplifies the API call used to update an existing destination server configuration through Adobe Experience Platform Destination SDK. 
title: Update a destination server configuration
---

# Update a destination server configuration

>[!IMPORTANT]
>
>**API endpoint**: `platform.adobe.io/data/core/activation/authoring/destination-servers`

This page exemplifies the API request and payload that you can use to update an existing destination server configuration, using the `/authoring/destination-servers` API endpoint.

For a detailed description of the capabilities that you can configure through this endpoint, read the following articles:

* [Server specs for destinations created with Destination SDK](../../../destination-sdk/functionality/destination-server/server-specs.md)
* [Templating specs for destinations created with Destination SDK](../../../destination-sdk/functionality/destination-server/templating-specs.md)
* [Message format](../../../destination-sdk/functionality/destination-server/message-format.md)
* [File formatting configuration](../../../destination-sdk/functionality/destination-server/file-formatting.md)

## Getting started with destination server API operations {#get-started}

Before continuing, please review the [getting started guide](../../getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Update a destination server configuration {#update}

You can update an [existing](create-destination-server.md) destination server configuration by making a `PUT` request to the `/authoring/destination-servers` endpoint with the updated payload.

To obtain an existing destination server configuration and its corresponding `{INSTANCE_ID}`, see the article about [retrieving a destination server configuration](retrieve-destination-server.md).

**API format**

```http
PUT /authoring/destination-servers/{INSTANCE_ID}
```

| Parameter | Description |
| -------- | ----------- |
| `{INSTANCE_ID}` | The ID of the destination server configuration that you want to update. To obtain an existing destination server configuration and its corresponding `{INSTANCE_ID}`, see [Retrieve a destination server configuration](retrieve-destination-server.md).|

**Request**

The following request updates an existing destination server configuration, configured by the parameters provided in the payload.

```shell

curl -X PUT https://platform.adobe.io/data/core/activation/authoring/destination-servers/bd4ec8f0-e98f-4b6a-8064-dd7adbfffec9 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
   "name":"Moviestar destination server",
   "destinationServerType":"URL_BASED",
   "urlBasedDestination":{
      "url":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"https://api.moviestar.com/data/{{customerData.region}}/items"
      }
   },
   "httpTemplate":{
      "httpMethod":"POST",
      "requestBody":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{ \"attributes\": [ {% for ns in [\"external_id\", \"yourdestination_id\"] %} {% if input.profile.identityMap[ns] is not empty and first_namespace_encountered %} , {% endif %} {% set first_namespace_encountered = true %} {% for identity in input.profile.identityMap[ns]%} { \"{{ ns }}\": \"{{ identity.id }}\" {% if input.profile.segmentMembership.ups is not empty %} , \"AEPSegments\": { \"add\": [ {% for segment in input.profile.segmentMembership.ups %} {% if segment.value.status == \"realized\" or segment.value.status == \"existing\" %} {% if added_segment_found %} , {% endif %} {% set added_segment_found = true %} \"{{ destination.segmentAliases[segment.key] }}\" {% endif %} {% endfor %} ], \"remove\": [ {% for segment in input.profile.segmentMembership.ups %} {% if segment.value.status == \"exited\" %} {% if removed_segment_found %} , {% endif %} {% set removed_segment_found = true %} \"{{ destination.segmentAliases[segment.key] }}\" {% endif %} {% endfor %} ] } {% set removed_segment_found = false %} {% set added_segment_found = false %} {% endif %} {% if input.profile.attributes is not empty %} , {% endif %} {% for attribute in input.profile.attributes %} \"{{ attribute.key }}\": {% if attribute.value is empty %} null {% else %} \"{{ attribute.value.value }}\" {% endif %} {% if not loop.last%} , {% endif %} {% endfor %} } {% if not loop.last %} , {% endif %} {% endfor %} {% endfor %} ] }"
      },
      "contentType":"application/json"
   }
}

```

**Response**

A successful response returns HTTP status 200 with the details of your updated destination server configuration.

## API error handling {#error-handling}

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.

## Next steps {#next-steps}

After reading this document, you now know how to update a destination server configuration using the `/authoring/destination-servers` API endpoint. Read [how to use Destination SDK to configure your destination](../../guides/configure-destination-instructions.md) to understand where this step fits into the process of configuring your destination.