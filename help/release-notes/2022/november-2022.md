---
title: Adobe Experience Platform Release Notes November 2022
description: The November 2022 release notes for Adobe Experience Platform.
exl-id: 1048cfae-6e7a-4d05-a004-c5c095a17fc4
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
