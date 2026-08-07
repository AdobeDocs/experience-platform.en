---
description: Learn how to configure the audience metadata settings for destinations built with Destination SDK.
title: Audience metadata configuration
exl-id: ae71df4f-b753-4084-835f-03559b4986cb
TQID: https://experienceleague.adobe.com/r2KyabLauh5R9xkeJjjCJ6wh7UvDcpwoKF-eJfRGOxA
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
    internal-label: Metadata
---
# Audience metadata configuration

When exporting data from Experience Platform to your destination, you might need specific audience metadata, like audience names or audience IDs, to be shared between Experience Platform and your destination.

Destination SDK offers tools that you can use to programmatically create, update, or delete audiences in your destination platform.

To understand where this component fits into an integration created with Destination SDK, see the diagram in the [configuration options](../configuration-options.md) documentation or see the guide on how to [use Destination SDK to configure a streaming destination](../../guides/configure-destination-instructions.md#create-destination-configuration).

You can configure the audience metadata template via the `/authoring/audience-templates` endpoint. After creating your audience metadata configuration, you can use the `/authoring/destinations` endpoint to configure the `segmentMappingConfig` and `audienceMetadataConfig` sections. This section tells your destination what audience metadata it should map to your audience template.

See the following API reference pages for detailed API call examples where you can configure the components shown in this page.

* [Create a destination configuration](../../authoring-api/destination-configuration/create-destination-configuration.md)
* [Update a destination configuration](../../authoring-api/destination-configuration/update-destination-configuration.md)
* [Create an audience template](../../metadata-api/create-audience-template.md)
* [Update an audience template](../../metadata-api/update-audience-template.md)

>[!IMPORTANT]
>
>All parameter names and values supported by Destination SDK are **case sensitive**. To avoid case sensitivity errors, please use the parameters names and values exactly as shown in the documentation.

## Supported integration types {#supported-integration-types}

Refer to the table below for details on which types of integrations support the functionality described on this page.

|Integration type| Supports functionality |
|---|---|
| Real-time (streaming) integrations | Yes |
| File-based (batch) integrations | Yes |

## Supported parameters {#supported-parameters}

When creating your audience metadata configuration, you can use the parameters described in the table below to configure the audience mapping settings.

```json
"segmentMappingConfig": {
   "mapExperiencePlatformSegmentName":false,
   "mapExperiencePlatformSegmentId":false,
   "mapUserInput":false,
 },
"audienceMetadataConfig":{
   "audienceTemplateId":"YOUR_AUDIENCE_TEMPLATE_ID"
}
```

|Parameter | Type | Description|
|---------|----------|------|
|`mapExperiencePlatformSegmentName` | Boolean | Indicates whether the [[!UICONTROL Mapping ID]](../../../ui/activate-segment-streaming-destinations.md#scheduling) value in the destination activation workflow should be the Experience Platform audience name. |
|`mapExperiencePlatformSegmentId` | Boolean | Indicates whether the [[!UICONTROL Mapping ID]](../../../ui/activate-segment-streaming-destinations.md#scheduling) value in the destination activation workflow should be the Experience Platform audience ID. |
|`mapUserInput` | Boolean | Enables or disables user input for the [[!UICONTROL Mapping ID]](../../../ui/activate-segment-streaming-destinations.md#scheduling) value in the destination activation workflow. If set to `true`, `audienceTemplateId` cannot be present. |
|`audienceTemplateId` | String | The `instanceId` of the [audience metadata template](../../metadata-api/create-audience-template.md) used for your destination. |

{style="table-layout:auto"}

## Next steps {#next-steps}

After reading this article, you should have a better understanding of how you can configure audience metadata for your destination.

To learn more about the other destination components, see the following articles:

* [Customer authentication configuration](customer-authentication.md)
* [OAuth2 authorization](oauth2-authorization.md)
* [Customer data fields](customer-data-fields.md)
* [UI attributes](ui-attributes.md)
* [Schema configuration](schema-configuration.md)
* [Identity namespace configuration](identity-namespace-configuration.md)
* [Supported mapping configurations](supported-mapping-configurations.md)
* [Destination delivery](destination-delivery.md)
* [Aggregation policy](aggregation-policy.md)
* [Batch configuration](batch-configuration.md)
* [Historical profile qualifications](historical-profile-qualifications.md)
