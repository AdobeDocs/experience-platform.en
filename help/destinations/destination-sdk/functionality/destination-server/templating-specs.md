---
description: Learn how to configure destination server templating specs in Adobe Experience Platform Destination SDK via the `/authoring/destination-servers` endpoint.
title: Templating specs for destinations created with Destination SDK
---

# Templating specs

The template spec allows you to configure how to format the exported message to your destination.

Adobe uses a templating language similar to [Jinja](https://jinja.palletsprojects.com/en/2.11.x/) to transform the fields from the XDM schema into a format supported by your destination.

![Template configuration highlighted](assets/template-configuration.png)

 For more information about the transformation, visit the links below:

* [Message format](message-format.md)
* [Using a templating language for the identity, attributes, and segment membership transformations ](message-format.md#using-templating)

>[!TIP]
>
>Adobe offers a [developer tool](./create-template.md) that helps you create and test a message transformation template. 

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
|`value` | String | *Required.* This string is the character-escaped version that transforms Platform customer data into the format expected by your destination. <br> For information on how to write the template, read the section on [using templating](message-format.md#using-templating). <br> For more information about character escaping, refer to the [RFC JSON standard, section seven](https://tools.ietf.org/html/rfc8259#section-7). <br> For an example of a simple transformation, refer to the [profile attributes](message-format.md#attributes) transformation. |
|`contentType` | String | *Required.* The content type that your server accepts. This value is most likely `application/json`. |

{style="table-layout:auto"}
