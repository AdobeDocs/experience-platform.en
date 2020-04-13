---
title: Adobe Experience Platform Release Notes
description: Experience Platform release notes April 8, 2020
doc-type: release notes
last-update: April 7, 2020
author: ens71067
---

# Adobe Experience Platform release notes 

## Release date: April 8, 2020

## Data Governance

Adobe Experience Platform Data Governance is a series of strategies and technologies used to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data usage. It plays a key role within Experience Platform at various levels, including cataloging, data lineage, data usage labeling, data access policies, and access control on data for marketing actions.

Getting started with data governance requires a thorough understanding of the regulations, contractual obligations, and corporate policies that apply to your customer data. From there, data can be classified by applying the appropriate data usage labels, and its use can be controlled through the definition of data usage policies.

The DULE framework simplifies and streamlines the process of categorizing data and creating data usage policies through the Experience Platform user interface and DULE Policy Service API. 

### New features

| Feature    | Description  |
| -----------| ---------- |
| Manage data usage policies in the UI  | Data usage policies can now be managed within the _Policies_ workspace in the Experience Platform UI. See the [policy user guide](../../data-governance/policies/user-guide.md) for more information.|

**Known issues**

* None.

For more information, please see the [Data Governance overview](../../data-governance/home.md).


## Destinations

In [Adobe Real-time Customer Data Platform](../../rtcdp/overview.md), destinations are pre-built integrations with destination platforms that activate data to those partners in a seamless way.

### New destinations

Adobe Real-time CDP now supports data activation to over fifty Experience Cloud Launch extensions, enabling analytics, personalization, and other use cases. See below for details:

|Documentation | Description|
|--- | ---|
|[Destination types and categories](/help/rtcdp/destinations/destination-types.md) | This article explains the difference between connections and extensions in the Adobe Real-time CDP interface and recommends when to use each of these destinations.|
|[Experience Platform Launch extensions](/help/rtcdp/destinations/experience-platform-launch-extensions.md) | This page explains what Launch extensions are, lists use cases for using them, and links to documentation for each Launch extension in Adobe Real-time CDP.|

## Intelligent Services

Intelligent Services empower marketing analysts and practitioners to leverage the power of artificial intelligence and machine learning in customer experience use cases. This allows for marketing analysts to set up predictions specific to a company's needs using business-level configurations without the need for data science expertise. Additionally, marketing practitioners can activate predictions in Adobe Experience Cloud, Adobe Experience Platform, and 3rd party applications.

**Key features**

|Feature|Description|
|---|---|
| Customer AI | Customer AI provides marketers with the power to generate customer predictions at the individual level with explanations. With the help of influential factors, Customer AI can tell you what a customer is likely to do and why. Additionally, marketers can benefit from Customer AI predictions and insights to personalize customer experiences by serving the most appropriate offers and messaging. |
| Attribution AI | Attribution AI is a multi-channel, algorithmic attribution service that calculates the influence and incremental impact of customer interactions against specified outcomes. With Attribution AI, marketers can measure and optimize marketing and advertising spend by understanding the impact of every individual customer interaction across each phase of the customers’ journeys.|

**Known issues**

* No known issues currently.

For more information on Intelligent Services and what it has to offer, see the [Intelligent Services overview](../../intelligent-services/home.md). 

## Privacy Service

New legal and organizational regulations are giving users the right to access or delete their personal data from your data stores upon request. Adobe Experience Platform Privacy Service provides a RESTful API and user interface to help you manage these data requests from your customers. With Privacy Service, you can submit requests to access and delete private or personal customer data from Adobe Experience Cloud applications, facilitating automated compliance with legal and organizational privacy regulations.

**New features**

| Feature | Description |
| --- | --- |
| PDPA support | Privacy requests can now be created and tracked under the Personal Data Protection Act (PDPA) in Thailand. When making privacy requests in the API, the `regulation` array accepts the value "pdpa_tha". |
| Namespace types in the UI | You can now specify different namespace types in the Request Builder in the Privacy Service UI. See the [user guide](../../privacy-service/ui/user-guide.md) for more information. |
| Old endpoint deprecation | The old API endpoint (`data/privacy/gdpr`) has been deprecated. |

Known issues

* None

For more information about Privacy Service, please start by reading the [Privacy Service overview](../../privacy-service/home.md).

## Sources

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

### New features

| Feature | Description |
| ------- | ----------- |
| API and UI support for databases | New source connectors for Apache Spark (on HDInsights), Azure Synapse Analytics, Azure Table Storage, Hive (on HDInsights), and Phoenix. |
| API and UI support for payments-based applications| New source connectors for PayPal. |
| API and UI support for protocols-based applications | New source connectors for Generic OData. |

### Known issues

* None

For more information about sources, see the [sources overview](../../source-connectors/home.md).