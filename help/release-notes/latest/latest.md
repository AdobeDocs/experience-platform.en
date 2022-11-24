---
title: Adobe Experience Platform Release Notes
description: The latest release notes for Adobe Experience Platform.
exl-id: f854f9e5-71be-4d56-a598-cfeb036716cb
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
| [!DNL AWS] extension for event forwarding | You can now send data to [!DNL Amazon Web Services] ([!DNL AWS]) using an [event forwarding](../../tags/ui/event-forwarding/overview.md) extension. See the [[!DNL AWS] extension overview](../../tags/extensions/web/aws/overview.md) for more information. |
| [!DNL Google Ads Enhanced Conversions] extension for event forwarding | You can now send conversion data to [!DNL Google Ads] using an [event forwarding](../../tags/ui/event-forwarding/overview.md) extension. See the [[!DNL Google Ads Enhanced Conversions] extension overview](../../tags/extensions/web/google-ads-enhanced-conversions/overview.md) for more information. |
| [!DNL Microsoft Azure] extension for event forwarding | You can now send data to [!DNL Microsoft Azure] using an [event forwarding](../../tags/ui/event-forwarding/overview.md) extension. See the [[!DNL Microsoft Azure] extension overview](../../tags/extensions/web/azure/overview.md) for more information. |

For more information on Platform's data collection capabilities, see the [data collection overview](../../collection/home.md).

## Experience Data Model (XDM) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**New or updated features**

| Feature | Description |
| --- | --- |
| Assign fields to custom classes when adding directly to a schema | When [adding an individual field directly to a schema](../../xdm/ui/resources/schemas.md#add-individual-fields), previously you could only assign the field to a field group as its parent resource. Now, in addition to field groups, you can [assign the field to a custom class](../../xdm/ui/resources/schemas.md#add-to-class) as its parent resource instead. |

{style="table-layout:auto"}

For more information on XDM in Platform, see the [XDM System overview](../../xdm/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Updated features**

| Feature | Description |
| --- | --- | 
| Beta availability of Oracle Service Cloud source | Use the Oracle Service Cloud source to ingest data from your Oracle Service Cloud account to Experience Platform. For more information, read the documentation on the [Oracle Service Cloud source](../../sources/connectors/customer-success/oracle-service-cloud.md). |

To learn more about sources, read the [sources overview](../../sources/home.md).