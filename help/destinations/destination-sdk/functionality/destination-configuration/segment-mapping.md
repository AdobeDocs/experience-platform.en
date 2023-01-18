---
description: Learn how to configure the segment mapping settings for destinations built with Destination SDK.
title: Segment mapping configuration
---

# Segment mapping configuration

This section of the destination configuration relates to how segment metadata like segment names or IDs should be shared between Experience Platform and your destination.

![Segment mapping configuration section](assets/segment-mapping-configuration.png)

|Parameter|Type|Description|
|---|---|---|
|`mapExperiencePlatformSegmentName` | Boolean | Controls whether the segment mapping ID in the destination activation workflow is the Experience Platform segment name. |
|`mapExperiencePlatformSegmentId` | Boolean | Controls whether the segment mapping ID in the destination activation workflow is the Experience Platform segment ID. |
|`mapUserInput` | Boolean | Controls whether the segment mapping ID in the destination activation workflow is input by user. |
|`audienceTemplateId` | Boolean | The `instanceId` of the [audience metadata template](../../metadata-api/create-audience-template.md) used for this destination. Through the `audienceTemplateId`, this section also ties together this configuration with the [audience metadata configuration](../audience-metadata-management.md).|

