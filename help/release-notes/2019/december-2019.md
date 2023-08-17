---
title: Adobe Experience Platform Release Notes December 2019
description: The December 2019 release notes for Adobe Experience Platform.
doc-type: release notes
last-update: December 12, 2019
author: ens71067
exl-id: 98d50b90-38ed-4cc2-ad48-78b712b453f7
---
# Adobe Experience Platform release notes 

**Release date: December 11, 2019**

Updates to existing features in Adobe Experience Platform:

* [[!DNL Segmentation Service]](#segmentation)
* [[!DNL Decisioning Service]](#decisioning)
* [[!DNL Sources]](#sources)
* [[!DNL Experience Data Model (XDM) System]](#xdm)

## [!DNL Segmentation Service] {#segmentation}

Adobe Experience Platform Segmentation Service provides a user interface and RESTful API that allows you to build segments and generate audiences from your [!DNL Real-Time Customer Profile] data. These segments are centrally configured and maintained on [!DNL Platform], making them readily accessible by any Adobe application.

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Segments can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New features**

|Feature | Description|
|--- | ---|
|Merged Audiences tab in [!DNL Segment Builder] | The [!UICONTROL Segments] and [!UICONTROL Audiences] tabs in the [!DNL Segment Builder] have been combined into a single [!UICONTROL Audiences] tab. This tab allows you to browse and search for existing audiences, which you can then drag and drop into the rule builder canvas to create a new segment definition. Referencing an audience can add one of the following sets of rule logic to the new segment definition: Audience membership as a rule, The full set of rule logic that defined the referenced audience.|
|New location for the merge policy selector | The location of the merge policy selector in the [!DNL Segment Builder] has been changed. To select a merge policy for a segment definition, select the gear icon on the **[!UICONTROL Fields]** tab, then use the **[!UICONTROL Merge Policy]** dropdown menu to select the merge policy that you wish to use.|

**Known issues**

* None

For more information, please see the [Segmentation Service overview](../../segmentation/home.md).

## [!DNL Decisioning Service] {#decisioning}

Adobe Experience Platform [!DNL Decisioning Service] provides the ability to programmatically and intelligently select the "Next Best Experience" from a set of available options for a given individual, deliver them to any channel or application, and perform reporting and analysis.

**New features**

| Feature    | Description  |
| -----------| ---------- |
| Ranking functions | Order of offers for profiles are now derived through a ranking function, rather than a fixed set of offers across all profiles. |

**Known issues**

* None.

## [!DNL Sources] {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe Solutions, cloud-based storage, third party software, and your CRM system.

[!DNL Experience Platform] provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to you authenticate to your storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New features**

| Feature    | Description  |
| ---------- | ------------ |
| Streaming connection | Streaming ingestion enables you to send data from client- and server-side devices to [!DNL Experience Platform] in real time. Release includes a new streaming connection user interface. |
| Connector support for [!DNL Google Cloud Store] | Support for collecting data from [!DNL Google Cloud Store]. |

**Known issues**

* None.

For more information about sources, see the [sources overview](../../sources/home.md).

## [!DNL Experience Data Model] (XDM) System {#xdm}

Standardization and interoperability are key concepts behind [!DNL Experience Platform]. [!DNL Experience Data Model] (XDM), driven by Adobe, is an effort to standardize customer experience data and define schemas for customer experience management.

XDM is a publicly documented specification designed to improve the power of digital experiences. It provides common structures and definitions for any application to communicate with services on Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation delivering insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**New features**

|Feature | Description|
|--- | ---|
|Improved schema validation| New checks to ensure that references resolve into additional fields as expected. Added additional checks to fields defined as an array of objects to make sure the objects are fully defined. Improved error messages to help identify and fix problems.|

**Bug fixes**

* Maintenance and improvements related to access control and sandboxes.
* Support for `eTag` for the `/descriptors` endpoint in the [!DNL Schema Registry] API.

**Known issues**

* None

To learn more about working with XDM using the [!DNL Schema Registry] API and [!DNL Schema Editor] user interface, please read the [XDM System documentation](../../xdm/home.md).
