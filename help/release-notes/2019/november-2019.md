---
title: Adobe Experience Platform Release Notes November 2019
description: The November 2019 release notes for Adobe Experience Platform.
doc-type: release notes
last-update: November 18, 2019
author: crhoades, ens28527
exl-id: 2c417c56-cc61-4788-b248-d98ea6cf89f0
---
# Adobe Experience Platform release notes 

**Release date: November 18, 2019**

New features in Adobe Experience Platform:  
* [[!DNL Real-Time Customer Data Platform]](#rtcdp)
* [[!DNL Destinations]](#destinations)
* [[!DNL Sources]](#sources)

Updates to existing features:
* [[!DNL Data Science Workspace]](#dsw)
* [[!DNL Experience Data Model (XDM) System]](#xdm)
* [[!DNL Real-time Customer Profile]](#profile) 
* [[!DNL Segmentation Service]](#segmentation)

## [!DNL Real-Time Customer Data Platform] {#rtcdp}

Built on Adobe Experience Platform, the Real-Time Customer Data Platform (Real-Time CDP) helps companies bring together known and unknown data to activate customer profiles with intelligent decisioning throughout the customer journey. Real-Time CDP combines multiple enterprise data sources to create unified profiles in real time that can be used to provide one-to-one personalized customer experiences across all channels and devices.

[!DNL Real-Time Customer Data Platform] includes tools for data governance, identity management, advanced segmentation, and data science so that you can build profiles and define audiences, as well as derive rich insights while being able to enforce strict data governance policies.

Adobe connects to a large ecosystem of partners, not to mention native integrations with Adobe Experience Cloud, so you can seamlessly activate these audiences and deliver great customer experiences across all channels, from on-site or in-app personalization to email, paid media, call centers, connected devices, and more.

With Real-Time CDP, you can:

* Achieve a single view of your customer with streaming collection of customer data from across the enterprise.
* Responsibly manage profiles with trusted governance and privacy controls for known and unknown identifiers.
* Generate actionable insights and scale audiences with AI and machine learning powered by Adobe Sensei and built for marketers.
* Deliver personalized experiences in realtime across all channels and destinations.

For more information, see the [Real-Time Customer Data Platform documentation](../../rtcdp/overview.md).

**Key features**

|Feature|Description|
|---|---|
|Destinations|Pre-built integrations with destination platforms supported by Adobe’s [!DNL Real-Time Customer Data Platform] that activate data to those partners in a seamless way. See [Destinations](#destinations) below for more information.|
|Home page metrics dashboard|The Real-Time Customer Data Platform (Real-Time CDP) home page includes a metrics dashboard that shows information about profiles and segments. The home page also contains links to learning materials. See the section on [Real-Time Customer Data Platform metrics](#real-time-customer-data-platform-metrics) below.|
|Sources|You can ingest data from a variety of sources such as Adobe Solutions, cloud-based storage, third party software, and your CRM. See the [Sources](#sources) section below to learn more.|

**[!DNL Real-Time Customer Data Platform] metrics**

The Real-Time Customer Data Platform (Real-Time CDP) home page, which includes a metrics dashboard, appears when you log in to Real-Time CDP.

The home page is only one of the places where metric cards appear. Real-Time CDP provides metric cards throughout your experience. These metrics inform you about the data, profile, and segment audiences in the system. 

If there is no data in the system when you log in to Real-Time CDP, the dashboard on the home page does not appear. In this case, the home page provides learning material for a first time user experience. As data is collected, the dashboard automatically updates to display information about that data. 

To learn more, see the [Real-Time Customer Data Platform metrics overview](../../rtcdp/home-page-dashboards.md)

## [!DNL Destinations] {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms supported by Adobe’s Real-Time Customer Data Platform that activate data to those partners in a seamless way. For more information, read the [Destinations overview](../../destinations/home.md) article.

**Available destinations**

With the November release, Adobe's Real-Time Customer Data Platform supports the following destinations:

* Advertising: [!DNL Google]
* Email marketing: Adobe Campaign, [!DNL Salesforce Marketing Cloud], [!DNL Responsys], [!DNL Oracle Eloqua]

See the [destination catalog](../../destinations/catalog/overview.md) for information about each of the destinations.

**Known limitations**

* The control to allow for custom activation schedules in the activation flow (Schedule step) is not available with the initial release. 
* There is currently no way to edit or delete a destination configuration. To work around this limitation, you can enable or disable the destination in the top right corner of the [destination details page](../../destinations/ui/destination-details-page.md). 
* No validation is currently in place for account details, path, or credentials when connecting to your destination or storage account. Make sure you are entering the right credentials and double-check for spelling errors or typos. 
* No credential renewals are in place with the initial release. Once an account is expired or needs refreshing, you must create a new destination connection and remap your previously mapped segments.

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe Solutions, cloud-based storage, third party software, and your CRM system.

[!DNL Experience Platform] provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to you authenticate to your storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Key features**

| Feature    | Description  |
| ---------- | ------------ |
| Sources UI | New user interface for creating, viewing, and managing source connections. |
| Revamped workflows for CRM connectors | New intuitive UI workflow for creating and managing [!DNL Microsoft Dynamics] and [!DNL Salesforce] connectors. |
| Connector support for cloud-based storages | Connectors can now access cloud-based storages. New sources include [!DNL Amazon S3], [!DNL Azure Blob], and FTP/SFTP servers. |

**Known issues**

*   Source connectors for cloud-based storages do not support the ingestion of compressed files.

For more information about sources, see [Sources overview](../../sources/home.md).

## [!DNL Data Science Workspace] {#dsw}

Adobe Experience Platform [!DNL Data Science Workspace] enables data scientists to seamlessly generate insights from data and content across Adobe applications and third-party systems by building and operationalizing Machine Learning Models. [!DNL Data Science Workspace] is tightly integrated with [!DNL Platform] and powers the end-to-end data science lifecycle, including exploration and preparation of XDM data, followed by the development and operationalization of Models to automatically enrich [!DNL Real-time Customer Profile] with Machine Learning Insights.

**New features**

| Feature    | Description  |
| -----------| ---------- |
| Data access using [!DNL Platform] SDK | Pre-built Recipes and launcher notebooks in [!DNL Python] now use [!DNL Platform] SDK for accessing data. |
| Support for sandboxes | Support for upcoming sandbox functionality (currently in beta), including the ability to isolate notebooks and Recipes into development or production sandboxes. See the [sandboxes overview](../../sandboxes/home.md) for more information. |

For more information, see the [Data Science Workspace overview](../../data-science-workspace/home.md).

## [!DNL Experience Data Model] (XDM) System {#xdm}

Standardization and interoperability are key concepts behind [!DNL Experience Platform]. [!DNL Experience Data Model] (XDM), driven by Adobe, is an effort to standardize customer experience data and define schemas for customer experience management.

XDM is a publicly documented specification designed to improve the power of digital experiences. It provides common structures and definitions for any application to communicate with services on Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation delivering insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**New features**

| Feature    | Description  |
| ---------- | ------------ |
| Notification schema | New schema that represents notification data sent during the data ingestion process. |
| Adobe AdCloud DSP schemas | Five new schemas have been added to represent Adobe Advertising Cloud demand-side platform (DSP) metadata: Placement, Campaign, Package, Advertiser, Account.|
| ExperienceEvent Implementation Details schema field groups | New ExperienceEvent field groups that adds a standard field to store information about the software used to collect the event. |
| [!DNL Profile Privacy] field groups | New profile field groups that adds fields to accept general out-out and sales/sharing opt-out signals for [!DNL Real-time Customer Profile]. |
| Format constraints for `xdm:alternateDisplayInfo` | The "Title" and "Description" fields for `xdm:alternateDisplayInfo` must both be strings to pass validation. |
| Name change: XDM [!DNL Individual Profile]  | The "title" of the "XDM [!DNL Profile]" class has been updated to "XDM [!DNL Individual Profile]". The formal `$id` of the class has not changed. |

**Known issues**

* None.

To learn more about working with XDM using the [!DNL Schema Registry] API and [!DNL Schema Editor] user interface, please read the [XDM System documentation](../../xdm/home.md).

## [!DNL Real-time Customer Profile] {#profile}

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With [!DNL Real-time Customer Profile], you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data. [!DNL Profile] allows you to consolidate your disparate customer data into a unified view offering an actionable, timestamped account of every customer interaction.

| Feature    | Description  |
| -----------| ---------- |
|Enhancements to [!DNL Profile] lookup| Users now have the ability to look up profiles using reference descriptors and related entities.|
| Clean up data for a given dataset| Users can now delete data for a given dataset or batch using the [!DNL Profile] System Jobs API.|
| Edge [!DNL Profile] query enhancements| Applications can now query Edge [!DNL Profile] by any of the identities of a given profile. |
|Configure merge policies per projection|Applications can now configure merge policies per projection in order to generate a view of the data as governed by a specific merge policy. |
|Computed Attributes| Computed attributes automatically compute the value of fields based on other values, calculations, and expressions. Computed attributes operate on the profile level to aggregate values such as "total purchase", "lifetime value", or "funnel status" based on an incoming event, an incoming event and profile data, or an incoming event, profile data, and historical events.|

**Bug fixes**

* Simplified list of available ID stitching strategies in merge policy creation workflow.

**Known issues**

* None.

For more information on [!DNL Real-time Customer Profile], including tutorials and best practices for working with [!DNL Profile] data, please read the [Real-time Customer Profile Overview](../../profile/home.md).

## [!DNL Segmentation Service] {#segmentation}

Adobe Experience Platform [!DNL Segmentation Service] provides a user interface and RESTful API that allows you to build segments and generate audiences from your [!DNL Real-time Customer Profile] data. These segments are centrally configured and maintained on [!DNL Platform], making them readily accessible by any Adobe application.

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Segments can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

| Feature    | Description  |
| -----------| ---------- |
| Scheduled segmentation | Users can now enable scheduled segment evaluation for all segments via the UI and API. Once enabled, all segments will be evaluated once per day. This does not affect on-demand segmentation capabilities which continue to work as they did previously.<br/><br/>Note: The scheduled segmentation feature cannot be used in sandboxes with more than five merge policies for [!DNL XDM Individual Profile].|
| Streaming segmentation | Support for continuous evaluation of segments (streaming segmentation) allows most segment rules to be evaluated as the data is passing into [!DNL Platform]. This feature means that segment membership will be up to date without the need to run scheduled segmentation jobs. Some exceptions apply, such as segments using multi-entity relationships or with enriched payloads.|
| Segments as building blocks | When creating segments using the Segment Builder UI, users can now use previously-defined segments as building blocks for additional segments. <ul><li>Reference current audience membership: updates as people move in and out of audiences.</li><li>Copy logic: take the selected segment definition and duplicate it in the new segment.</li></ul>|
|View segment membership by ID namespace|Segment membership can now be viewed by ID namespace (email, ECID, and total count).|
|RBAC support|Segment Builder now provides support for basic role-based access controls and permissions.|
|Enhanced support for external audience sharing between [!DNL Platform] and Adobe solutions |Users can now bring in external (non-[!DNL Experience Platform]) audience metadata in scenarios where the number of audiences is large or not known a priori. This release includes access to [!DNL Audience Manager] metadata for customers who have provisioned the solution connector. This audience metadata can be used within Segment Builder to create new [!DNL Experience Platform] segments. <br/><br/> Additionally, segments created in [!DNL Experience Platform] will now be available for use in integrated Adobe solutions, including [!DNL Audience Manager], [!DNL Target], and [!DNL Ad Cloud].|

**Bug fixes**

* Fixed an issue causing Multi-Entity Segmentation to return zero profiles in case of nested relationships.
* Fixed an issue where exclusion logic was returning misleading results.
* Improved readability for multi-entity folders. They now show the friendly name of the XDM class.
* Fixed an intermittent issue where multiple copies of the same XDM folder appeared.
* Messaging is now produced to inform a user if segment estimates are unavailable for the selected merge policy.

**Known issues**

* None.

To learn more about [!DNL Segmentation Service], please read the [Segmentation Service overview](../../segmentation/home.md).
