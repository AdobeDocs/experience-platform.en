---
description: Learn how to configure the segment mapping settings for destinations built with Destination SDK.
title: Segment mapping configuration
---

# Audience metadata configuration

<!-- section was renamed to audienceMetadataConfig, per Rafaat -->

This section of the destination configuration relates to how segment metadata like segment names or IDs should be shared between Experience Platform and your destination.


## Supported integration types {#supported-integration-types}

Refer to the table below for details on what type of destinations support the functionality described in this page.

|Integration type| Supports functionality |
|---|---|
| Real-time (streaming) integrations | Yes |
| File-based (batch) integrations | Yes |

## Supported parameters {#supported-parameters}

![Segment mapping configuration section](../../assets/functionality/destination-configuration/segment-mapping-configuration.png)

|Parameter|Type|Description|
|---|---|---|
|`mapExperiencePlatformSegmentName` | Boolean | Controls whether the segment mapping ID in the destination activation workflow is the Experience Platform segment name. |
|`mapExperiencePlatformSegmentId` | Boolean | Controls whether the segment mapping ID in the destination activation workflow is the Experience Platform segment ID. |
|`mapUserInput` | Boolean | Controls whether the segment mapping ID in the destination activation workflow is input by user. |
|`audienceTemplateId` | Boolean | The `instanceId` of the [audience metadata template](../../metadata-api/create-audience-template.md) used for this destination. Through the `audienceTemplateId`, this section also ties together this configuration with the [audience metadata configuration](../audience-metadata-management.md).|

