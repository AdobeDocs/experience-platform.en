---
description: Learn about the historical profile qualifications supported by destinations built with Destination SDK.
title: Historical profile qualifications
exl-id: 8880cff9-865b-4d45-a24d-a78e77419670
TQID: https://experienceleague.adobe.com/fGio46bLdwSi3bpV2Jz6awGO8-rDEsIxS437AHUb41g
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
# Historical profile qualifications

All destinations created through [!DNL Destination SDK] support historical profile qualifications by default. The first time you set up an activation dataflow to your destination, the first export contains every member of the audience that has ever qualified for that audience.

This behavior is defined by the `"backfillHistoricalProfileData":true` parameter in the destination configuration.

>[!IMPORTANT]
>
>Historical profile qualifications are enabled for all destinations created through [!DNL Destination SDK] and the `backfillHistoricalProfileData` parameter is not user configurable.

## Supported integration types {#supported-integration-types}

Refer to the table below for details on which types of integrations support the functionality described on this page.

|Integration type| Supports functionality |
|---|---|
| Real-time (streaming) integrations | Yes  |
| File-based (batch) integrations | Yes |

## Next steps {#next-steps}

[!DNL Experience Platform] automatically exports every profile that has ever qualified for an activated audience the first time you export that audience to a destination. This behavior is not configurable in [!DNL Destination SDK] or in the [!DNL Experience Platform] UI.

To learn more about the other destination components, see the following articles:

* [Customer authentication](customer-authentication.md)
* [OAuth2 authorization](oauth2-authorization.md)
* [Customer data fields](customer-data-fields.md)
* [UI attributes](ui-attributes.md)
* [Schema configuration](schema-configuration.md)
* [Identity namespace configuration](identity-namespace-configuration.md)
* [Supported mapping configurations](supported-mapping-configurations.md)
* [Destination delivery](destination-delivery.md)
* [Audience metadata configuration](audience-metadata-configuration.md)
* [Aggregation policy](aggregation-policy.md)
* [Batch configuration](batch-configuration.md)
