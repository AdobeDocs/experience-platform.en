---
title: Adobe Experience Platform Release Notes
description: Experience Platform release notes for February 24, 2021.
doc-type: release notes
last-update: February 24, 2021
author: ens70167
---

# Adobe Experience Platform release notes 

**Release date: February 24, 2021**

Updates to existing features in Adobe Experience Platform:

- [Dataflows](#dataflows)
- [Experience Data Model (XDM) System](#xdm)
- [Identity Service](#identity)
- [Sources](#sources)

## Dataflows {#dataflows}

In Adobe Experience Platform, data is ingested from a wide variety of sources, analyzed within Experience Platform, and activated to a wide variety of destinations. Platform makes the process of tracking this potentially non-linear flow of data easier by providing transparency with dataflows.

Dataflows are a representation of data jobs that move data across Platform. These dataflows are configured across different services, helping move data from source connectors to target datasets, where it is then utilized by [!DNL Identity Service] and [!DNL Real-time Customer Profile] before ultimately being activated to [!DNL Destinations].

**New features**

| Feature | Description |
| --- | --- |
| New monitoring dashboard | You can now use the monitoring dashboard for cross-service transparency and actionable insights for source data ingestions. The new monitoring dashboard provides a comprehensive view of data processed from [!DNL Data Lake] to [!DNL Identity Service] and to [!DNL Profile], while also allowing you to monitor ingestion rates, successes, and failures. See the tutorial on [monitoring source dataflows in the UI](../../dataflows/ui/monitor-sources.md) for more information. |

For more general information on dataflows, refer to the [dataflows overview](../../dataflows/home.md).

## Experience Data Model (XDM) System {#xdm}

Standardization and interoperability are key concepts behind [!DNL Experience Platform]. [!DNL Experience Data Model] (XDM), driven by Adobe, is an effort to standardize customer experience data and define schemas for customer experience management.

XDM is a publicly documented specification designed to improve the power of digital experiences. It provides common structures and definitions for any application to communicate with services on Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation delivering insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**New features**

| Feature | Description |
| --- | --- |
| Upgraded search UI | Improved search capabilities are now available in the [!UICONTROL Browse] tab in the [!UICONTROL Schemas] workspace and the mixin selection dialog in the [!DNL Schema Editor].<br><br>When searching for a term previously, results would only include XDM resources whose name matches the search query. Now, in addition to resources whose name match the query, resources containing individual attributes that match the term will also be included. This allows you to search for XDM resources based on the attributes they contain rather than by resource name.<br><br>See the documents on [exploring XDM resources](../../xdm/ui/explore.md) and [managing schemas](../../xdm/ui/resources/schemas.md) in the UI for more information. |

For more general information on XDM, refer to the [XDM System overview](../../xdm/home.md).

## Identity Service {#identity}

Delivering relevant digital experiences requires having a complete understanding of your customer. This is made more difficult when your customer data is fragmented across disparate systems, causing each individual customer to appear to have multiple "identities".

Adobe Experience Platform [!DNL Identity Service] helps you to gain a better view of your customer and their behavior by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real-time.

**New features**

| Feature | Description |
| --- | --- |
| Identity graph viewer | You can now use the identity graph viewer in the UI to verify and see identities that are stitched together, allowing for improved troubleshooting, transparency, and visualization. See the [identity graph viewer document](../../identity-service/ui/identity-graph-viewer.md) for more information. |

For more general information on [!DNL Identity Service], refer to the [Identity Service overview](../../identity-service/home.md)
## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New sources**

| Feature | Description |
| --- | --- |
| [!DNL Google PubSub] | You can now connect [!DNL Google PubSub] to [!DNL Experience Platform] using the [!DNL Flow Service] API or the UI. See the [[!DNL Google PubSub] connector overview](../../sources/connectors/cloud-storage/google-pubsub.md) for more information. |
| [!DNL Oracle Object Storage] | You can now connect [!DNL Oracle Object Storage] to [!DNL Experience Platform] using the [!DNL Flow Service] API or the UI. See the [[!DNL Oracle Object Storage] connector overview](../../sources/connectors/cloud-storage/oracle-object-storage.md) for more information. |

For more general information on sources, refer to the [sources overview](../../sources/home.md).
