---
title: Adobe Experience Platform Release Notes
description: The latest release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: April 27, 2022**

Updates to existing features in Adobe Experience Platform:

- [[!DNL Data Prep]](#data-prep)
- [Real-time Customer Data Platform B2B Edition](#B2B)
- [Sources](#sources)

## [!DNL Data Prep] {#data-prep}

[!DNL Data Prep] allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**Updated features**

| Feature | Description |
| --- | --- |
| Support for Adobe Analytics source | The Adobe Analytics source now supports Data Prep features, allowing you to map your Analytics report-suite data to a target XDM schema when creating a dataflow. See the tutorial on [creating an Analytics source connection](../../sources/tutorials/ui/create/adobe-applications/analytics.md) for more information. |
| Support for importing existing mapping rules | You can now import mapping rules from an existing dataflow to accelerate your dataflow configurations and limit errors. See the tutorial on [importing existing mapping rules](../../data-prep/ui/mapping.md) for more information. |

For more information on [!DNL Data Prep], please see the [[!DNL Data Prep] overview](../../data-prep/home.md).

### Real-time Customer Data Platform B2B Edition {#B2B}

Built on Real-time Customer Data Platform (Real-time CDP), Real-time CDP B2B Edition is purpose-built for marketers operating in a business-to-business service model. It brings together data from multiple sources and combines it into a single view of people and account profiles. This unified data allows marketers to precisely target specific audiences and engage those audiences across all available channels.

**Updated features**

| Feature | Description |
| --- | --- |
| Support for `isDeleted` functionality | All [!DNL Marketo] datasets except `Activities` now support the `isDeleted` mapping. The new mapping is automatically added to your existing B2B dataflows. See the [[!DNL Marketo] mapping fields guide](../../sources/connectors/adobe-applications/mapping/marketo.md) for more information on `isDeleted`. |


## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Updated features**

| Feature | Description |
| --- | --- |
| Support for [!DNL OneTrust Integration] | You can now use the [!DNL OneTrust Integration] source to ingest consent and preferences data from your [!DNL OneTrust] account to Platform. See the documentation on [creating a [!DNL OneTrust Integration] source connection](../../sources/connectors/consent-and-preferences/onetrust.md) for more information. |
| Support for [!DNL Square] | You can now use the [!DNL Square] source to ingest payments data from your [!DNL Square] account to Platform. |
| Support for deleting Customer Attributes dataflows | You can now delete dataflows created with the Customer Attributes source connector. |

To learn more about sources, see the [sources overview](../../sources/home.md).