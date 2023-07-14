---
description: Learn how to format the HTTP requests sent to your endpoint. Use the /authoring/destination-servers endpoint to configure destination server templating specs in Adobe Experience Platform Destination SDK.
title: Templating specs for destinations created with Destination SDK
---

# Template specs for destinations created with Destination SDK

Use the template spec part of the destination server configuration to configure how to format the HTTP requests sent to your destination.

In a template spec you can define how to transform profile attribute fields between the XDM schema and the format that your platform supports.

Template specs are part of the destination server configuration for real-time (streaming) destinations. 

To understand where this component fits into an integration created with Destination SDK, see the diagram in the [configuration options](../configuration-options.md) documentation or see the the guide on how to [use Destination SDK to configure a streaming destination](../../guides/configure-destination-instructions.md#create-server-template-configuration).

You can configure the template specs for your destination via the `/authoring/destination-servers` endpoint. See the following API reference pages for detailed API call examples where you can configure the components shown in this page.

* [Create a destination server configuration](../../authoring-api/destination-server/create-destination-server.md)
* [Update a destination server configuration](../../authoring-api/destination-server/update-destination-server.md)

>[!IMPORTANT]
>
>All parameter names and values supported by Destination SDK are **case sensitive**. To avoid case sensitivity errors, please use the parameters names and values exactly as shown in the documentation.

## Supported integration types {#supported-integration-types}

Refer to the table below for details on which types of integrations support the functionality described on this page.

|Integration type| Supports functionality |
|---|---|
| Real-time (streaming) integrations | Yes |
| File-based (batch) integrations | No |

## Configure a template spec {#configure-template-spec}

Adobe uses a templating language similar to [Jinja](https://jinja.palletsprojects.com/en/2.11.x/) to transform the fields from the XDM schema into a format supported by your destination.

![Template configuration highlighted](../../assets/functionality/destination-server/template-configuration.png)

For more information about the transformation, visit the links below:

* [Message format](message-format.md)
* [Using a templating language for the identity, attributes, and audience membership transformations ](message-format.md#using-templating)

>[!TIP]
>
>Adobe offers a [developer tool](../../testing-api/streaming-destinations/create-template.md) that helps you create and test a message transformation template. 

See below an example of an HTTP request template, together with descriptions of each individual parameter.

```json

{
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

|Parameter | Type | Description|
|---|---|---|
|`httpMethod` | String | *Required.* The method that Adobe will use in calls to your server. Supported methods: `GET`, `PUT`, `POST`, `DELETE`, `PATCH`. |
|`templatingStrategy` | String | *Required.* Use `PEBBLE_V1`. |
|`value` | String | *Required.* This string is the character-escaped version of the template that formats the HTTP requests sent by Platform into the format expected by your destination. <br> For information on how to write the template, read the section on [using templating](message-format.md#using-templating). <br> For more information about character escaping, refer to the [RFC JSON standard, section seven](https://tools.ietf.org/html/rfc8259#section-7). <br> For an example of a simple transformation, refer to the [profile attributes](message-format.md#attributes) transformation. |
|`contentType` | String | *Required.* The content type that your server accepts. Depending on what type of output your transformation template produces, this can be any of the supported [HTTP application content types](https://www.iana.org/assignments/media-types/media-types.xhtml#application). In most cases, this value should be set to `application/json`. |

{style="table-layout:auto"}

## Next steps {#next-steps}

After reading this article, you should have a better understanding of what a template spec is, and how you can configure it.

To learn more about the other destination server components, see the following articles:

* [Server specs for destinations created with Destination SDK](server-specs.md)
* [Message format](message-format.md)
* [File formatting configuration](file-formatting.md)