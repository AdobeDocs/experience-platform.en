---
description: Learn how to configure the audience metadata settings for destinations built with Destination SDK.
title: Audience metadata configuration
---

# Audience metadata configuration

This section of the destination configuration relates to how segment metadata like segment names or IDs should be shared between Experience Platform and your destination.

## Supported integration types {#supported-integration-types}

Refer to the table below for details on what type of destinations support the functionality described in this page.

|Integration type| Supports functionality |
|---|---|
| Real-time (streaming) integrations | :white_check_mark: |
| File-based (batch) integrations | :white_check_mark: |


Through the `audienceTemplateId`, this section also ties together this configuration with the [audience metadata configuration](../audience-metadata-management.md).

```json
   "audienceMetadataConfig":{
       "mapExperiencePlatformSegmentName":false,
       "mapExperiencePlatformSegmentId":false,
       "mapUserInput":false,
       "audienceTemplateId":"cbf90a70-96b4-437b-86be-522fbdaabe9c"
   }
```

|Parameter | Type | Description|
|---------|----------|------|
|`mapExperiencePlatformSegmentName` | Boolean | Controls whether the segment mapping ID in the destination activation workflow is the Experience Platform segment name. |
|`mapExperiencePlatformSegmentId` | Boolean | Controls whether the segment mapping ID in the destination activation workflow is the Experience Platform segment ID. |
|`mapUserInput` | Boolean | Controls whether the segment mapping ID in the destination activation workflow is input by user. |
|`audienceTemplateId` | Boolean | The `instanceId` of the [audience metadata template](../../functionality/audience-metadata-management.md) used for this destination. To set up an audience metadata template, read the [audience metadata API reference](../../metadata-api/create-audience-template.md).|