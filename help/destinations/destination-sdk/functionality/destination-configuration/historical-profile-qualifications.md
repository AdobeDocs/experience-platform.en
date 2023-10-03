---
description: Learn about the historical profile qualifications supported by destinations built with Destination SDK.
title: Historical profile qualifications
exl-id: 8880cff9-865b-4d45-a24d-a78e77419670
---
# Historical profile qualifications

All destinations created through Destination SDK support historical profile qualifications by default. This means that when users first set up an activation dataflow to your destinations, the first export contains all members of the audience that have ever qualified for that segment.

This behavior is defined by the `"backfillHistoricalProfileData":true` parameter in the destination configuration.

>[!IMPORTANT]
>
>Historical profile qualifications are enabled for all destinations created through Destination SDK and the `backfillHistoricalProfileData` parameter is not user configurable.

## Supported integration types {#supported-integration-types}

Refer to the table below for details on which types of integrations support the functionality described on this page.

|Integration type| Supports functionality |
|---|---|
| Real-time (streaming) integrations | Yes  |
| File-based (batch) integrations | Yes |



<!-- 
|Parameter | Type | Description|
|---------|----------|------|
|`backfillHistoricalProfileData` | Boolean | Controls whether historical profile data is exported when audiences are activated to the destination. <br> <ul><li> `true`: [!DNL Platform] sends the historical user profiles that qualified for the audience before the audience is activated. </li><li> `false`: [!DNL Platform] only includes user profiles that qualify for the audience after the audience is activated. </li></ul> |

{style="table-layout:auto"} -->


## Next steps {#next-steps}

After reading this article, you should know that Experience Platform automatically exports a historical population of all profiles that have ever qualified for an activated audience when the audience is first exported to the destination. This option is not configurable in Destination SDK or in the Experience Platform UI.

To learn more about the other destination components, see the following articles:

* [Customer authentication](customer-authentication.md)
* [OAuth2 authentication](oauth2-authentication.md)
* [Customer data fields](customer-data-fields.md)
* [UI attributes](ui-attributes.md)
* [Schema configuration](schema-configuration.md)
* [Identity namespace configuration](identity-namespace-configuration.md)
* [Supported mapping configurations](supported-mapping-configurations.md)
* [Destination delivery](destination-delivery.md)
* [Audience metadata configuration](audience-metadata-configuration.md)
* [Aggregation policy](aggregation-policy.md)
* [Batch configuration](batch-configuration.md)
