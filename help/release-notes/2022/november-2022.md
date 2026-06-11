---
title: Adobe Experience Platform Release Notes November 2022
description: The November 2022 release notes for Adobe Experience Platform.
exl-id: 1048cfae-6e7a-4d05-a004-c5c095a17fc4
TQID: https://experienceleague.adobe.com/4-QrsXu0gw7qLUx0PR8vdvWFV2TojviqvqL6lFETKJs
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: abc02dd6-664f-446a-9aaa-675bc0f2fe4a
    internal-label: Sources
  - id: acc16deb-1d7f-4ec9-9ce3-6cdf355afde6
    internal-label: XDM
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
  - id: de9975b2-c43a-4287-9698-4f4cad92b83f
    internal-label: Schemas
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
---
# Adobe Experience Platform release notes 

**Release date: November 23, 2022**

Updates to existing features in Adobe Experience Platform:

- [Data collection](#data-collection)
- [Experience Data Model (XDM)](#xdm)
- [Sources](#sources)

## Data collection {#data-collection}

Adobe Experience Platform provides a suite of technologies that allow you to collect client-side customer experience data and send it to the Adobe Experience Platform Edge Network where it can be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

**New or updated features**

| Feature | Description |
| --- | --- |
| [!DNL AWS] extension for event forwarding | You can now send data to [!DNL Amazon Web Services] ([!DNL AWS]) using an [event forwarding](../../tags/ui/event-forwarding/overview.md) extension. See the [[!DNL AWS] extension overview](../../tags/extensions/server/aws/overview.md) for more information. |
| [!DNL Google Ads Enhanced Conversions] extension for event forwarding | You can now send conversion data to [!DNL Google Ads] using an [event forwarding](../../tags/ui/event-forwarding/overview.md) extension. See the [[!DNL Google Ads Enhanced Conversions] extension overview](../../tags/extensions/server/google-ads-enhanced-conversions/overview.md) for more information. |
| [!DNL Microsoft Azure] extension for event forwarding | You can now send data to [!DNL Microsoft Azure] using an [event forwarding](../../tags/ui/event-forwarding/overview.md) extension. See the [[!DNL Microsoft Azure] extension overview](../../tags/extensions/server/azure/overview.md) for more information. |

For more information on Experience Platform's data collection capabilities, see the [data collection overview](../../collection/home.md).

## Experience Data Model (XDM) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**New or updated features**

| Feature | Description |
| --- | --- |
| Assign fields to custom classes when adding directly to a schema | When [adding an individual field directly to a schema](../../xdm/ui/resources/schemas.md#add-individual-fields), previously you could only assign the field to a field group as its parent resource. Now, in addition to field groups, you can [assign the field to a custom class](../../xdm/ui/resources/schemas.md#add-to-class) as its parent resource instead. |

{style="table-layout:auto"}

For more information on XDM in Experience Platform, see the [XDM System overview](../../xdm/home.md).
