---
solution: Experience Platform
title: Retail Industry Data Model
topic-legacy: overview
description: View a standardized data model for the retail industry, compatible with Experience Data Model (XDM) for use in Adobe Experience Platform.
exl-id: 40cbb243-668b-4280-815f-1f94a06b6b87
---
# [!UICONTROL Retail] industry data model

The following entity relationship diagram (ERD) represents a standardized data model for the retail industry.

>[!NOTE]
>
>For more information on industry data models and how to interpret this ERD, please refer to the [industry data model overview](./overview.md).

![](../../images/industries/retail.png)

## [!UICONTROL Retail] use cases

The following table outlines the recommended classes and schema field groups for several common retail use cases.

| Use case | Recommended classes and field groups |
| --- | --- |
| Combine online and offline data sources and resolve cross-device and online/offline identity to provide holistic cross-channel and cross device attribution reporting. | <ul><li>**[XDM ExperienceEvent](../../classes/experienceevent.md)**:<ul><li>[Commerce Details](../../field-groups/event/commerce-details.md)</li><li>[Web Details](../../field-groups/event/web-details.md)</li></ul></li><li>**Product** (custom class)\*:<ul><li>Product (custom field group)\*</li></ul></li></ul> |
| Provide targeted and personalized experiences for various segments to increase revenue and help augment the platform in omnichannel orchestration. | <ul><li>**[XDM ExperienceEvent](../../classes/experienceevent.md)**:<ul><li>[Campaign Marketing Details](../../field-groups/event/campaign-marketing-details.md)</li><li>[Channel Details](../../field-groups/event/channel-details.md)</li><li>[Commerce Details](../../field-groups/event/commerce-details.md)</li><li>[Environment Details](../../field-groups/event/environment-details.md)</li><li>[Web Details](../../field-groups/event/web-details.md)</li></ul></li><li>**[XDM Individual Profile](../../classes/individual-profile.md)**:<ul><li>[Demographic Details](../../field-groups/profile/demographic-details.md)</li><li>[Personal Contact Details](../../field-groups/profile/personal-contact-details.md)</li><li>[Work Contact Details](../../field-groups/profile/work-contact-details.md)</li></ul></li></ul> |
| Analyze multi-touch attribution to improve marketing efficiency. | <ul><li>**[XDM ExperienceEvent](../../classes/experienceevent.md)**:<ul><li>[Campaign Marketing Details](../../field-groups/event/campaign-marketing-details.md)</li><li>[Channel Details](../../field-groups/event/channel-details.md)</li><li>[Commerce Details](../../field-groups/event/commerce-details.md)</li></ul></li><li>**[XDM Individual Profile](../../classes/individual-profile.md)**:<ul><li>[Demographic Details](../../field-groups/profile/demographic-details.md)</li></ul></li></ul> |
| Improve email relevance through improved men & women's segmentation. | <ul><li>**[XDM ExperienceEvent](../../classes/experienceevent.md)**:<ul><li>[Commerce Details](../../field-groups/event/commerce-details.md)</li></ul></li><li>**[XDM Individual Profile](../../classes/individual-profile.md)**:<ul><li>[Demographic Details](../../field-groups/profile/demographic-details.md)</li></ul></li><li>**Product** (custom class)\*:<ul><li>Product (custom field group)\*</li></ul></li></ul> |
| Ingest loyalty (partner) data to increase relevant product information across web, email, and digital marketing channels. | <ul><li>**[XDM ExperienceEvent](../../classes/experienceevent.md)**:<ul><li>[Web Details](../../field-groups/event/web-details.md)</li></ul></li><li>**[XDM Individual Profile](../../classes/individual-profile.md)**:<ul><li>[Demographic Details](../../field-groups/profile/demographic-details.md)</li><li>[Loyalty Details](../../field-groups/profile/loyalty-details.md)</li></ul></li><li>**Product** (custom class)\*:<ul><li>Product (custom field group)\*</li></ul></li></ul> |
| Retarget cart abandoners through automated and personalized emails. | <ul><li>**[XDM ExperienceEvent](../../classes/experienceevent.md)**:<ul><li>[Commerce Details](../../field-groups/event/commerce-details.md)</li><li>[Web Details](../../field-groups/event/web-details.md)</li></ul></li><li>**Product** (custom class)\*:<ul><li>Product (custom field group)\*</li></ul></li></ul> |

{style="table-layout:auto"}

*\*While a standard product class is planned for a future release, product schemas must currently be built using a custom class instead. You must therefore manually build the structure of the schema's class, as well as that of any field groups you add to it. See the section on [creating a custom class](../../ui/resources/classes.md#create) in the XDM UI guide for more information.*