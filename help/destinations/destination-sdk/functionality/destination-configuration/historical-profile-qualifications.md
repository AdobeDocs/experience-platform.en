---
description: Learn how to configure the historical profile qualification settings for destinations built with Destination SDK.
title: Historical profile qualifications
---

# Historical profile qualifications

The `backfillHistoricalProfileData` parameter in the destinations configuration determines if historical profile qualifications should be exported to your destination.

```json
   "backfillHistoricalProfileData":true
```

This parameter is currently always enabled and cannot be set to `false`.

<!-- 
|Parameter | Type | Description|
|---------|----------|------|
|`backfillHistoricalProfileData` | Boolean | Controls whether historical profile data is exported when segments are activated to the destination. <br> <ul><li> `true`: [!DNL Platform] sends the historical user profiles that qualified for the segment before the segment is activated. </li><li> `false`: [!DNL Platform] only includes user profiles that qualify for the segment after the segment is activated. </li></ul> |

{style="table-layout:auto"} -->