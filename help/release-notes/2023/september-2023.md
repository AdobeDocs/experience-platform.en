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
- [Identity Service](#identity-service)
- [Segmentation Service](#segmentation)
- [Sources](#sources)

## Computed attributes {#computed-attributes}

Computed attributes enable capability to easily summarize event data into profile attributes via an intuitive UI for enhanced behavior-based segmentation, personalization, and activation. With this feature, you can create computed attributes in a self serve manner, manage them, and use them in segmentation, Real-Time CDP destinations, or Adobe Journey Optimizer. Additionally, computed attributes simplify segmentation and journey workflows to help you seamlessly deliver relevant experiences. To learn more about computed attributes, please read the [computed attributes overview](../profile/computed-attributes/overview.md).

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
| Customizable columns | You can now customize the layout of Audience Portal with re-sizable columns. For more information on this feature, please read the [segmentation UI guide](../segmentation/ui/overview.md#customize). |
| Update frequency breakdown | You can now view a breakdown of the update frequencies of the audiences in your organization. For more information on this feature, please read the [segmentation UI guide](../segmentation/ui/overview.md#browse). |

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