---
title: Adobe Experience Platform Release Notes April 2020
description: The April 2020 release notes for Adobe Experience Platform.
doc-type: release notes
last-update: April 13, 2020
author: ens71067
keywords: release notes;
exl-id: 0f68c71e-3c9d-453b-a953-1cd1b6ca2e35
---
# Adobe Experience Platform release notes 

**Release date: April 8, 2020**

New features in Adobe Experience Platform:
* [[!DNL Intelligent Services]](#intelligent)

Updates to existing features:
* [[!DNL Experience Data Model (XDM)]](#xdm)
* [Data Governance](#governance)
* [[!DNL Destinations]](#destinations)
* [[!DNL Privacy Service]](#privacy)
* [[!DNL Sources]](#sources)

## [!DNL Intelligent Services] {#intelligent}

[!DNL Intelligent Services] empower marketing analysts and practitioners to leverage the power of artificial intelligence and machine learning in customer experience use cases. This allows for marketing analysts to set up predictions specific to a company's needs using business-level configurations without the need for data science expertise. Additionally, marketing practitioners can activate predictions in Adobe Experience Cloud, Adobe Experience Platform, and 3rd party applications.

**Key features**

|Feature|Description|
|---|---|
| [!DNL Customer AI] | [!DNL Customer AI] provides marketers with the power to generate customer predictions at the individual level with explanations. With the help of influential factors, [!DNL Customer AI] can tell you what a customer is likely to do and why. Additionally, marketers can benefit from [!DNL Customer AI] predictions and insights to personalize customer experiences by serving the most appropriate offers and messaging. |
| [!DNL Attribution AI] | [!DNL Attribution AI] is a multi-channel, algorithmic attribution service that calculates the influence and incremental impact of customer interactions against specified outcomes. With [!DNL Attribution AI], marketers can measure and optimize marketing and advertising spend by understanding the impact of every individual customer interaction across each phase of the customers’ journeys.|

**Known issues**

* No known issues currently.

For more information on [!DNL Intelligent Services] and what it has to offer, see the [Intelligent Services overview](../../intelligent-services/home.md). 

## [!DNL Experience Data Model] (XDM) System {#xdm}

Standardization and interoperability are key concepts behind [!DNL Experience Platform]. [!DNL Experience Data Model] (XDM), driven by Adobe, is an effort to standardize customer experience data and define schemas for customer experience management.

XDM is a publicly documented specification designed to improve the power of digital experiences. It provides common structures and definitions for any application to communicate with services on Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation delivering insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**New features**

| Feature | Description |
| --- | --- |
| Automatic alternate display info | The [!DNL Schema Registry] automatically applies the customized title and description values configured in the `alternateDisplayInfo` descriptor. |
| Scalar field restrictions | The [!DNL Schema Registry] does not allow more than 6000 scalar fields in a single schema. |
| Performance overhaul | The [!DNL Schema Registry] has been overhauled to perform and meet the demands of [!DNL Experience Platform] better. |

**Bug fixes**

* Updated XDM to XED converted to support a cleaner XED format for nested URI fields in standard XDM.

**Known issues**

* Known

## Data Governance {#governance}

Adobe Experience Platform Data Governance is a series of strategies and technologies used to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data usage. It plays a key role within [!DNL Experience Platform] at various levels, including cataloging, data lineage, data usage labeling, data access policies, and access control on data for marketing actions.

Getting started with data governance requires a thorough understanding of the regulations, contractual obligations, and corporate policies that apply to your customer data. From there, data can be classified by applying the appropriate data usage labels, and its use can be controlled through the definition of data usage policies.

The Data Governance framework simplifies and streamlines the process of categorizing data and creating data usage policies through the [!DNL Experience Platform] user interface and [!DNL Policy Service] API. 

**New features**

| Feature    | Description  |
| -----------| ---------- |
| Manage data usage policies in the UI  | Data usage policies can now be managed within the **Policies** workspace in the [!DNL Experience Platform] UI. See the [policy user guide](../../data-governance/policies/user-guide.md) for more information.|

**Known issues**

* None.

For more information, please see the [Data Governance overview](../../data-governance/home.md).


## Destinations {#destinations}

In [Real-Time Customer Data Platform](../../rtcdp/overview.md), destinations are pre-built integrations with destination platforms that activate data to those partners in a seamless way.

**New destinations**

Real-Time CDP now supports data activation to over fifty [!DNL Experience Cloud Launch] extensions, enabling analytics, personalization, and other use cases. See below for details:

|Documentation | Description|
|--- | ---|
|[Destination types and categories](../../destinations/destination-types.md) | This article explains the difference between connections and extensions in the Real-Time CDP interface and recommends when to use each of these destinations.|
|[Experience Platform Launch extensions](../../destinations/catalog/launch-extensions/overview.md) | This page explains what [!DNL Launch] extensions are, lists use cases for using them, and links to documentation for each [!DNL Launch] extension in Real-Time CDP.|

For more information, please see the [Destinations overview](../../destinations/home.md).

## [!DNL Privacy Service] {#privacy}

New legal and organizational regulations are giving users the right to access or delete their personal data from your data stores upon request. Adobe Experience Platform [!DNL Privacy Service] provides a RESTful API and user interface to help you manage these data requests from your customers. With [!DNL Privacy Service], you can submit requests to access and delete private or personal customer data from Adobe Experience Cloud applications, facilitating automated compliance with legal and organizational privacy regulations.

**New features**

| Feature | Description |
| --- | --- |
| PDPA support | Privacy requests can now be created and tracked under the Personal Data Protection Act (PDPA) in Thailand. When making privacy requests in the API, the `regulation` array accepts the value "pdpa_tha". |
| Namespace types in the UI | You can now specify different namespace types in the Request Builder in the [!DNL Privacy Service] UI. See the [user guide](../../privacy-service/ui/user-guide.md) for more information. |
| Old endpoint deprecation | The old API endpoint (`data/privacy/gdpr`) has been deprecated. |

Known issues

* None

For more information about [!DNL Privacy Service], please start by reading the [Privacy Service overview](../../privacy-service/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third party software, and your CRM system.

[!DNL Experience Platform] provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New features**

| Feature | Description |
| ------- | ----------- |
| API and UI support for databases | New source connectors for [!DNL Apache Spark] (on HDInsights), [!DNL Azure Synapse Analytics], [!DNL Azure Table Storage], [!DNL Hive] (on HDInsights), and [!DNL Phoenix]. |
| API and UI support for payments-based applications| New source connectors for [!DNL PayPal]. |
| API and UI support for protocols-based applications | New source connectors for [!DNL Generic OData]. |

**Known issues**

* None

To learn more about sources, see the [sources overview](../../sources/home.md).
