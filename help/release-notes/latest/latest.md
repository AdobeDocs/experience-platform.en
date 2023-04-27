---
title: Adobe Experience Platform Release Notes
description: The April 2023 release notes for Adobe Experience Platform.
exl-id: f854f9e5-71be-4d56-a598-cfeb036716cb
---
# Adobe Experience Platform release notes 

**Release date: April 26, 2023**

Updates to existing features in Adobe Experience Platform:

- [Dashboards](#dashboards)
- [Data Prep](#data-prep)
- [Data Collection](#data-collection)
- [Destinations](#destinations)
- [Experience Data Model](#xdm)
- [Real-Time Customer Profile](#profile)
- [Sources](#sources)

## Dashboards {#dashboards}

Adobe Experience Platform provides multiple dashboards through which you can view important insights about your organization's data, as captured during daily snapshots. 

**New or updated features** {#dashboards-new-updated-features}

| Feature | Description |
| --- | --- |
|User-defined dashboards| You can now **filter historical data** from your widget insights, and use either recent data or a custom analysis period.<br>You can also now **duplicate your existing widgets**. By customizing a duplicate and editing their attributes, you can avoid restarting from the beginning when creating a new, unique widget. |

{style="table-layout:auto"}

For more information on dashboards, including how to grant access permissions and create custom widgets, begin by reading the [dashboards overview](../../dashboards/home.md).

## Data Prep {#data-prep}

Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**Updated features**

| Feature | Description |
| --- | --- |
| Updates to backfill period for Adobe Analytics in non-production sandboxes | The backfill period for Adobe Analytics in non-production sandboxes has been reduced to three months. Backfill for production sandboxes remain the same at 13 months. This change only applies to new flows and will not affect existing flows. For more information, read the [Adobe Analytics overview](../../sources/connectors/adobe-applications/analytics.md). |
| New mapper function to convert FPID strings to ECID | Use the `fpid_to_ecid` function to convert FPID strings into ECID for use in Experience Platform and Experience Cloud applications. For more information, read the [Data Prep functions guide](../../data-prep/functions.md). |

{style="table-layout:auto"}

For more information on Data Prep, please read the [Data Prep overview](../../data-prep/home.md).

## Data Collection {#data-collection}

Adobe Experience Platform provides a suite of technologies that allow you to collect client-side customer experience data and send it to the Adobe Experience Platform Edge Network where it can be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

**New or updated features**

| Feature | Description |
| --- | --- |
| IP address obfuscation for datastreams | You can now define partial or full datastream-level IP obfuscation options in the [datastream configuration UI](../../edge/datastreams/configure.md). <br><br>The datastream-level IP obfuscation setting takes precedence over any IP obfuscation configured in Adobe Target and Audience Manager. <br><br>Data sent to Adobe Analytics is not impacted by the datastream-level [!UICONTROL IP Obfuscation] setting. Adobe Analytics currently receives unobfuscated IP addresses. For Analytics to receive obfuscated IP addresses, you must configure IP obfuscation separately, in Adobe Analytics. This behavior will be updated in future releases.<br><br> For more details about IP obfuscation and instructions on how to configure it, see the [datastream configuration documentation](../../edge/datastreams/configure.md#advanced-options). |
| Datastream configuration overrides | You can now define additional configuration options for datastreams, which you can use to override specific settings, such as event datasets, Target property tokens, ID sync containers, and Analytics report suites. <br><br>Overriding datastream configurations is a two step process. First, you must define your datastream configuration overrides in the datastreams UI. Then, you must send the overrides to the Edge Network via a Web SDK command. |

{style="table-layout:auto"}

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New destinations** {#new-destinations}

| Destination | Description |
| ----------- | ----------- |
| [[!DNL Salesforce Marketing Cloud Account Engagement] connection](../../destinations/catalog/email-marketing/salesforce-marketing-cloud-account-engagement.md) | Use the Salesforce Marketing Cloud Account Engagement (formerly known as Pardot) destination to capture, track, score and grade leads. Use this destination for B2B use cases involving multiple departments and decision makers which require longer sales and decision cycles. |

{style="table-layout:auto"}

**New or updated functionality** {#destinations-new-updated-functionality}

| Functionality | Description |
| ----------- | ----------- |
| Dataflow monitoring for [!DNL Custom Personalization] and [!DNL Adobe Commerce] destinations | <p> You can now see activation metrics for the [Adobe Commerce](/help/destinations/catalog/personalization/adobe-commerce.md), [Custom Personalization](../../destinations/catalog/personalization/custom-personalization.md) and the [Custom Personalization With Attributes](../../destinations/catalog/personalization/custom-personalization.md) connections. </p> <p>![Adobe Commerce image](/help/destinations/assets/common/adobe-commerce-metrics.png "Adobe Commerce metrics"){width="100" zoomable="yes"}</p>  See [Monitor dataflows in the Destinations workspace](../../dataflows/ui/monitor-destinations.md#monitor-dataflows-in-the-destinations-workspace) for more details. |
| New **[!UICONTROL Append segment ID to segment name]** field for the [!DNL Google Ad Manager] and [!DNL Google Ad Manager 360] destinations | You can now have the segment name in [[!DNL Google Ad Manager]](/help/destinations/catalog/advertising/google-ad-manager.md#parameters) and [[!DNL Google Ad Manager 360]](/help/destinations/catalog/advertising/google-ad-manager-360-connection.md#destination-details) include the segment ID from Experience Platform, like this: `Segment Name (Segment ID)`. |

{style="table-layout:auto"}

<!--

| New **[!UICONTROL Append segment ID to segment name]** field for the [!DNL Google Ad Manager] and [!DNL Google Ad Manager 360] destinations | You can now have the segment name in [[!DNL Google Ad Manager]](/help/destinations/catalog/advertising/google-ad-manager.md#parameters) and [[!DNL Google Ad Manager 360]](/help/destinations/catalog/advertising/google-ad-manager-360-connection.md#destination-details) include the segment ID from Experience Platform, like this: `Segment Name (Segment ID)`. |
| Scheduled audience backfills | <p>For the [!DNL Google Display & Video 360] destination, the activation of audience backfills to the destination is scheduled to occur 24-48 hours after a segment is first mapped to a destination connection. This update is in response to Google's policy to wait 24 hours until ingesting data and will improve match rates between Real-time CDP and [!DNL Google Display & Video 360].</p> <p>Note that this is a backend configuration applicable to this destination only and that is unrelated to any customer-configurable scheduling options in the UI.</p> |

-->


**Fixes and enhancements** {#destinations-fixes-and-enhancements}

- We have fixed an issue in the **Identities excluded** reporting metrics for file-based destination exports. Customers were receiving all the exported IDs from the activated export as expected. However, the **Identities excluded** reporting metric in the UI was incorrectly displaying high numbers of excluded identities due to incorrectly counting identities that were never supposed to be exported. (PLAT-149774)
- We have fixed an issue in the Scheduling step of the activation workflow. For destinations that require a mapping ID, customers were not able to add a mapping ID for segments added to existing destination connections. (PLAT-148808)

<!--
- We have fixed an issue with the beta SFTP destination where the port number was previously hardcoded to 22. The port is now configurable for this destination. 

-->

For more general information on destinations, refer to the [destinations overview](../../destinations/home.md).

## Experience Data Model (XDM) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**Updated features**

| Feature | Description |
| --- | --- |
| Display names toggle | The Schema Editor now provides a toggle to change between the original field names and the more human-readable display names. This flexibility allows for improved field discoverability and editing of your schemas. The display names for standard field groups are system generated but can also be customized through the UI if required. |

{style="table-layout:auto"}

For more information on XDM in Platform, read the [XDM System overview](../../xdm/home.md).

## Real-Time Customer Profile {#profile}

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With Real-Time Customer Profile, you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data. Profile allows you to consolidate customer data into a unified view offering an actionable, timestamped account of every customer interaction.

**Updated features**

| Feature | Description |
| ------- | ----------- |
| Pseudonymous profile data expiry | Pseudonymous profile data expiry is now generally available! This release will continuously remove stale pseudonymous profiles from your Experience Platform instance once enabled. To learn more about this feature and Pseudonymous Profiles, please read the [Pseudonymous Profile data expiration guide](../../profile/pseudonymous-profiles.md). |

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources and allows you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Updated features**

| Feature | Description |
| --- | --- |
| API support for filtering row-level data for Microsoft Dynamics, Salesforce CRM, and Salesforce Marketing Cloud | Use logical and comparison operators to filter row-level data for the Microsoft Dynamics, Salesforce CRM, and Salesforce Marketing Cloud sources. Read the guide on [filtering data for a source using the API](../../sources/tutorials/api/filter.md) for more information. |
| Beta availability of Shopify Streaming | The [Shopify Streaming source](../../sources/connectors/ecommerce/shopify-streaming.md) is now available in beta. Use the Shopify Streaming source to stream data from your Shopify partners account to Experience Platform. |
| General availability of OneTrust Integration | The [OneTrust Integration source](../../sources/connectors/consent-and-preferences/onetrust.md) is now GA. Use the OneTrust Integration source to bring consent and preferences data from your OneTrust Integration account to Experience Platform. |
| General availability of Oracle Service Cloud | The [Oracle Service Cloud source](../../sources/connectors/customer-success/oracle-service-cloud.md) is now GA. Use the Oracle Service Cloud source to bring your Oracle Service Cloud data to Experience Platform. |

{style="table-layout:auto"}

To learn more about sources, read the [sources overview](../../sources/home.md).