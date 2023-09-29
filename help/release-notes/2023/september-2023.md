---
title: Adobe Experience Platform Release Notes
description: The September 2023 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: September 28, 2023**

New features in Adobe Experience Platform:

- [Computed attributes](#computed-attributes)

Updates to existing features in Experience Platform:

- [Alerts](#alerts)
- [Data collection](#data-collection)
- [Destinations](#destinations)
- [Identity Service](#identity-service)
- [Segmentation Service](#segmentation)
- [Sources](#sources)

## Computed attributes {#computed-attributes}

Computed attributes enable capability to easily summarize event data into profile attributes via an intuitive UI for enhanced behavior-based segmentation, personalization, and activation. With this feature, you can create computed attributes in a self serve manner, manage them, and use them in segmentation, Real-Time CDP destinations, or Adobe Journey Optimizer. Additionally, computed attributes simplify segmentation and journey workflows to help you seamlessly deliver relevant experiences. To learn more about computed attributes, please read the [computed attributes overview](../../profile/computed-attributes/overview.md).

## Alerts {#alerts}

Experience Platform allows you to subscribe to event-based alerts for various Platform activities. You can subscribe to different alert rules through the [!UICONTROL Alerts] tab in the Platform user interface, and can choose to receive alert messages within the UI itself or through email notifications.

**New or updated features**

| Feature | Description |
| --- | --- |
| Alerts history tab | The Alerts [!UICONTROL History] tab will now include all events including delays, starts, success, and failures. Read the [alerts UI documentation](../../observability/alerts/ui.md) for more information about the history tab. |

{style="table-layout:auto"}

To learn more about alerts, please read the [[!DNL Observability Insights] overview](../../observability/home.md).

## Data collection {#data-collection}

Adobe Experience Platform provides a suite of technologies that allow you to collect client-side customer experience data and send it to the Adobe Experience Platform Edge Network where it can be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

**New or updated features**

| Type | Feature | Description |
| --- | --- | --- |
| Datastreams | Device lookup support | When configuring a datastream, you can now select the level of device lookup information to be collected. Device lookup information includes data about the device, hardware, operating system, and browser used to interact with your page. <br>  Device lookup information cannot be collected along with user agent and client hints. Choosing to collect device information will disable the collection of user agent and client hints, and vice versa. All device lookup information is stored in the `xdm:device` field group. Learn more from the documentation on [configuring datastreams](../../datastreams/configure.md#geolocation-device-lookup). |
| Extensions | [!DNL TikTok] web events API extension | The [[!DNL TikTok] Web Events API](https://exchange.adobe.com/apps/ec/109834/tiktok-web-events-api) extension allows you to leverage data captured in the Adobe Experience Platform Edge Network and send it to [!DNL TikTok] in the form of server-side events using the [!DNL TikTok] Web Events API. |

{style="table-layout:auto"}

To learn more about data collection, please read the [data collection overview](../../tags/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations** {#new-updated-destinations}

| Destination | New or Updated |Description |
| ----------- |----------------|----------- |
| [[!DNL LiveRamp - Distribution]](../../destinations/catalog/advertising/liveramp-distribution.md) | New | Activate audiences previously onboarded to [!DNL LiveRamp] to premium publishers across mobile, web, display, and connected TV mediums. <br> After onboarding audiences to your [!DNL LiveRamp] account through the [LiveRamp - Onboarding](../../destinations/catalog/advertising/liveramp-onboarding.md) connection, use the new [[!DNL LiveRamp - Distribution]](../../destinations/catalog/advertising/liveramp-distribution.md) connection to activate the audiences to downstream destinations.  |
| [[!DNL HubSpot]](../../destinations/catalog/crm/hubspot.md) | New | [[!DNL HubSpot]](https://www.hubspot.com) is a CRM platform with all the software, integrations, and resources you need to connect marketing, sales, content management, and customer service. It allows you to connect your data, teams, and customers on one CRM platform.|
| [[!DNL Microsoft Dynamics 365]](../../destinations/catalog/crm/microsoft-dynamics-365.md) | Updated | Added support for [!DNL Dynamics 365] custom field prefixes for custom fields which were not created within the default solution in [!DNL Dynamics 365]. A new input field, **[!UICONTROL Customization Prefix]**, has been added in the [Fill in destination details](#destination-details) step. |
| [[!DNL Experience Cloud Audiences]](../../destinations/catalog/adobe/experience-cloud-audiences.md) | Updated | The Experience Cloud Audiences destination is now generally available. Use this destination to activate audiences from Real-Time CDP to Audience Manager and Adobe Analytics. You need an Audience Manager license to send audiences to Adobe Analytics. |

{style="table-layout:auto"}

<!-- 

Add these to release notes as they go out

| [[!DNL Qualtrics]] | New | Use the aggregation of multiple sources of operational data in Adobe Experience Platform as an input in Qualtrics Experience ID to better understand your customers and enable targeted outreach to close the gap when it comes to understanding intent, emotion and experience drivers. | 


-->

**New or updated functionality** {#destinations-new-updated-functionality}

| Functionality | Description |
| ----------- | ----------- |
| Data exports in Real-Time CDP | The [dataset export](../../destinations/ui/export-datasets.md) functionality is now generally available. See [which datasets you can export based on the Experience Platform app](../../destinations/ui/export-datasets.md#datasets-to-export) you purchased, and check the [guardrails for exporting datasets](/help/destinations/guardrails.md#dataset-exports). |
| (Beta) Support for exporting array-type objects | Export arrays of primitive values (string, int, or boolean values) as flat schema files to cloud storage destinations. Read more about the functionality in the [documentation](../../destinations/ui/export-arrays-calculated-fields.md).|
| Dynamic dropdown selectors in Destination SDK | When creating a destination through Destination SDK, you can now use [dynamic dropdown selectors](../../destinations/destination-sdk/functionality/destination-configuration/customer-data-fields.md#dynamic-dropdown-selectors) to populate the fields of a dropdown selector with values retrieved from an API. |

**Fixes and enhancements** {#destinations-fixes-and-enhancements}

- Make use of [monitoring transparency](../../dataflows/ui/monitor-destinations.md#dataflow-runs-for-streaming-destinations) now available for enterprise destinations ([HTTP API](../../destinations/catalog/streaming/http-destination.md), [Amazon Kinesis](../../destinations/catalog/cloud-storage/amazon-kinesis.md) and [Azure Event Hubs](../../destinations/catalog/cloud-storage/azure-event-hubs.md)) at the dataflow run level to monitor activation metrics and status in the [dataflow detail view](../../dataflows/ui/monitor-destinations.md#dataflow-run-details-page), with additional information via error codes and messages for troubleshooting.
- When you update the name of audiences mapped to the [Google Ad Manager](../../destinations/catalog/advertising/google-ad-manager.md), [Google Display & Video 360](../../destinations/catalog/advertising/google-dv360.md), and other destinations which use [audience update templates](../../destinations/destination-sdk/metadata-api/update-audience-template.md), these name changes are now reflected downstream in the destination.

For more general information on destinations, refer to the [destinations overview](../../destinations/home.md).

## Identity Service {#identity-service}

Adobe Experience Platform Identity Service provides you with a comprehensive view of your customers and their behavior by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time.

**New or updated features**

| Feature | Description |
| --- | --- |
| Identity Service UI enhancements | Use the improved custom namespace creation tool in the Experience Platform UI to better manage your custom namespaces and their corresponding identity types. The enhanced Identity Service UI provides you with: <ul><li>Contextual Experience: Visual cues, clarity, and context to what an identity namespace is and identity types are.</li><li>Accuracy: Better error handling, with no more duplicate identity names.</li><li>Discoverability: Access to documentation from within an in-product dialog.</li></ul> For more information, read the guide on [creating custom namespaces](../../identity-service/namespaces.md#create-namespaces). |
| Changes to identity graph limits | The identity graph limit has changed from 150 identities to 50 identities. When a new identity is ingested into a full graph, the oldest identity based on the ingestion timestamp and identity type are deleted. Cookie identity types are prioritized for deletion. Please contact your Adobe Account Team to request a change in identity type if your production sandbox contains: <ul><li>a custom namespace where the person identifiers (such as CRM IDs) are configured as cookie/device identity type.</li><li>a custom namespace where cookie/device identifiers are configured as cross-device identity type.</li></ul> Adobe engineering will manually process these requests. For more information, read the [guardrails for Identity Service data](../../identity-service/guardrails.md). |

{style="table-layout:auto"}

To learn more about Identity Service, please read the [Identity Service overview](../../identity-service/home.md).

## Segmentation Service {#segmentation}

[!DNL Segmentation Service] allows you to segment data stored in [!DNL Experience Platform] that relates to individuals (such as customers, prospects, users, or organizations) into audiences. You can create audiences through segment definitions or other sources from your [!DNL Real-Time Customer Profile] data. These audiences are centrally configured and maintained on [!DNL Platform], and are readily accessible by any Adobe solution. 

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| Customizable columns | You can now customize the layout of Audience Portal with re-sizable columns. For more information on this feature, please read the [segmentation UI guide](../../segmentation/ui/overview.md#customize). |
| Update frequency breakdown | You can now view a breakdown of the update frequencies of the audiences in your organization. For more information on this feature, please read the [segmentation UI guide](../../segmentation/ui/overview.md#browse). |

To learn more about sources, please read the [sources overview](../../sources/home.md).

To learn more about Segmentation Service, please read the [Segmentation Service overview](../../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated features**

| Feature | Description |
| --- | --- |
| New parameters for `offset` pagination in Self-Serve Sources (Batch SDK) | You can now specify an `endConditionName` and `endConditionValue` for your source when using `offset` pagination. These parameters allow you to indicate the condition that will end the pagination loop in the next HTTP request. For more information, read the [pagination guide for Self-Serve Sources (Batch SDK)](../../sources/sources-sdk/config/sourcespec.md#pagination). |

{style="table-layout:auto"}

To learn more about sources, please read the [sources overview](../../sources/home.md).