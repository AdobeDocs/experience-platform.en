---
description: Learn how to configure the audience metadata settings for destinations built with Destination SDK.
title: Audience metadata configuration
---

# Audience metadata configuration

When exporting data from Experience Platform to your destination, you might need specific audience metadata, like segment names or segment IDs, to be shared between Experience Platform and your destination.

Destination SDK offers tools that you can use to programmatically create, update, or delete audiences in your destination platform.

To understand where this component fits into an integration created with Destination SDK, see the diagram in the [configuration options](../configuration-options.md) documentation or see the the guide on how to [use Destination SDK to configure a streaming destination](../../guides/configure-destination-instructions.md#create-destination-configuration).

You can configure the audience metadata template via the `/authoring/audience-templates` endpoint. After creating your audience metadata configuration, you can use the `/authoring/destinations` endpoint to configure the `audienceMetadataConfig` section. This section tells your destination what segment metadata it should map to your audience template.

See the following API reference pages for detailed API call examples where you can configure the components shown in this page.

* [Create a destination configuration](../../authoring-api/destination-configuration/create-destination-configuration.md)
* [Update a destination configuration](../../authoring-api/destination-configuration/update-destination-configuration.md)
* [Create an audience template](../../metadata-api/create-audience-template.md)
* [Update an audience template](../../metadata-api/update-audience-template.md)

## Supported integration types {#supported-integration-types}

Refer to the table below for details on what type of destinations support the functionality described in this page.

|Integration type| Supports functionality |
|---|---|
| Real-time (streaming) integrations | Yes |
| File-based (batch) integrations | Yes |

## Supported parameters {#supported-parameters}

When creating your audience metadata configuration, you can use the parameters described in the table below to configure the segment mapping settings.

```json
  "audienceMetadataConfig":{
   "mapExperiencePlatformSegmentName":false,
   "mapExperiencePlatformSegmentId":false,
   "mapUserInput":false,
   "audienceTemplateId":"YOUR_AUDIENCE_TEMPLATE_ID"
}
```

|Parameter | Type | Description|
|---------|----------|------|
|`mapExperiencePlatformSegmentName` | Boolean | Indicates whether the [[!UICONTROL Mapping ID]](../../../ui/activate-segment-streaming-destinations.md#scheduling) value in the destination activation workflow should be the Experience Platform segment name. |
|`mapExperiencePlatformSegmentId` | Boolean | Indicates whether the [[!UICONTROL Mapping ID]](../../../ui/activate-segment-streaming-destinations.md#scheduling) value in the destination activation workflow should be the Experience Platform segment ID. |
|`mapUserInput` | Boolean | Enables or disables user input for the [[!UICONTROL Mapping ID]](../../../ui/activate-segment-streaming-destinations.md#scheduling) value in the destination activation workflow. If set to `true`, `audienceTemplateId` cannot be present. |
|`audienceTemplateId` | Boolean | The `instanceId` of the [audience metadata template](../../metadata-api/create-audience-template.md) used for your destination. |

## Next steps {#next-steps}

After reading this article, you should have a better understanding of how you can configure audience metadata for your destination.

To learn more about the other destination components, see the following articles:

* [Customer authentication configuration](customer-authentication.md)
* [OAuth2 authentication](oauth2-authentication.md)
* [Customer data fields](customer-data-fields.md)
* [UI attributes](ui-attributes.md)
* [Schema configuration](schema-configuration.md)
* [Identity namespace configuration](identity-namespace-configuration.md)
* [Destination delivery](destination-delivery.md)
* [Aggregation policy](aggregation-policy.md)
* [Batch configuration](batch-configuration.md)
* [Historical profile qualifications](historical-profile-qualifications.md)