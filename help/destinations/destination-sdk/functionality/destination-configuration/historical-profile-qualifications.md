---
description: Learn how to configure the historical profile qualification settings for destinations built with Destination SDK.
title: Historical profile qualifications
---

# Historical profile qualifications

All destinations created through Destination SDK support historical profile qualifications by default. This means that profile qualifications are automatically exported to your destination.

This behavior is defined by the `"backfillHistoricalProfileData":true` parameter in the destination configuration.

>[!IMPORTANT]
>
>Historical profile qualifications are enabled for all destinations created through Destination SDK and the `backfillHistoricalProfileData` parameter is not user configurable.

## Supported integration types {#supported-integration-types}

Refer to the table below for details on what type of destinations support the functionality described in this page.

|Integration type| Supports functionality |
|---|---|
| Real-time (streaming) integrations | :white_check_mark:  |
| File-based (batch) integrations | :white_check_mark: |



<!-- 
|Parameter | Type | Description|
|---------|----------|------|
|`backfillHistoricalProfileData` | Boolean | Controls whether historical profile data is exported when segments are activated to the destination. <br> <ul><li> `true`: [!DNL Platform] sends the historical user profiles that qualified for the segment before the segment is activated. </li><li> `false`: [!DNL Platform] only includes user profiles that qualify for the segment after the segment is activated. </li></ul> |

{style="table-layout:auto"} -->