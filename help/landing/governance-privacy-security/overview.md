---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Governance, Privacy, and Security Overview
topic-legacy: overview
description: Adobe Experience Platform provides several services and tools that allow you to confidently control your collected experience data in order to comply with your business practices, legal obligations, and development process.
exl-id: 1ab5a436-c5dd-4e7a-aba1-549f0613f224
---
# Governance, privacy, and security in Adobe Experience Platform

Adobe Experience Platform allows you to ingest, analyze, optimize and action your data to greatly enhance customer experiences. This data is vast, complex and incredibly valuable. Depending on the nature of your data operations, the legal jurisdictions your business operates under, and your organizational policies regarding data usage, you must carefully control and monitor the collection and use of customer experience data in order to protect your business interests.

Experience Platform provides several services and tools that allow you to confidently control your collected experience data in order to comply with your business practices, legal obligations, and development processes. The sections below provide an introduction to each of these services, along with links to documentation for further information.

The services can be categorized into three domains:

* [Data governance](#governance)
* [Privacy](#privacy)
* [Security](#security)

## Data governance {#governance}

Data governance is an essential concept that is intertwined with every capability in Experience Platform. Data governance represents your ability to control and comprehend your data throughout its journey through Platform. This involves maintaining data quality, data lineage, data cataloging, and more.

### Adobe Experience Platform Data Governance {#data-governance}

As a Platform service, Adobe Experience Platform Data Governance allows you to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data use. It plays a key role within Experience Platform at various levels, including data usage labeling, data usage policies, policy enforcement, and data lineage.

See the [Data Governance overview](../../data-governance/home.md) for more information.

### Catalog and datasets {#catalog}

Catalog Service is the system of record for data location and lineage within Platform. While all data that is ingested into Experience Platform is stored in the Data Lake as files and directories, Catalog holds the metadata and description of those files and directories for lookup and monitoring purposes.

Catalog organizes ingested data into datasets, with each dataset containing metadata that can be used to label and categorize the data it contains.

See the [Catalog Service overview](../../catalog/home.md) for more information on the service. To learn how to manage datasets in Experience Platform, see the [datasets overview](../../catalog/datasets/overview.md).

## Privacy {#privacy}

Privacy is a critical issue for your business, lawmakers, and your customers. Since personal data collected from your customers is at the heart of nearly all Experience Platform workflows, Platform provides services to support these initiatives.

### Adobe Experience Platform Privacy Service {#privacy-service}

Legal privacy regulations such as the European Union's General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA) grant citizens within their jurisdictions the right to access and delete the personal data you collect and store from them.

Adobe Experience Platform Privacy Service provides a RESTful API and user interface to help manage these requests. With Privacy Service, you can submit requests to access or delete private or personal customer data from Adobe Experience Cloud applications, facilitating automated compliance with legal and organizational privacy regulations.

See the [Privacy Service overview](../../privacy-service/home.md) for more information.

### Consent processing {#consent}

Many legal privacy regulations have introduced requirements for active and specific consent when it comes to data collection, personalization, and other marketing use cases. In order to meet these requirements, Experience Platform allows you to capture consent information in individual customer profiles and use those preferences as a determining factor in how each customer's data is used in downstream Platform workflows.

To learn how to process customer consent and preference data using the Adobe standard, see the overview on [consent processing in Experience Platform](./consent/adobe/overview.md).

For information on how process customer consent data in accordance with the IAB Transparency and Consent Framework (TCF) 2.0, see the overview on [IAB TCF 2.0 support in Platform](./consent/iab/overview.md).

## Security {#security}

The integrity and security of your data is indispensable for your business, and this risk requires industry-leading security capabilities. In order to meet this challenge, Platform provides several tools to help safeguard your data operations.

### Data encryption

All Platform data is encrypted in transit and at rest. See the document on [data encryption in Platform](./encryption.md) for more information.

### Access control {#access-control}

Experience Platform uses the Adobe Admin Console to provide role-based access control to various Platform capabilities. This functionality leverages product profiles in Admin Console, which link users with permissions and sandboxes.

See the [access control overview](../../access-control/home.md) for more information.

### Sandboxes {#sandboxes}

Experience Platform is built to enrich digital experience applications on a global scale. Companies often run multiple digital experience applications in parallel and need to cater for the development, testing, and deployment of these applications while ensuring operational compliance.

In order to address the need for development flexibility, Experience Platform provides sandboxes which partition a single Platform instance into separate virtual environments to help you evolve your digital experience applications based on your own development lifecycle.

See the [sandboxes overview](../../sandboxes/home.md) for more information.

## Next steps

This document provided an overview of the various Platform services and tools involved with data governance, privacy, and security. Refer to the documentation linked to throughout this guide to learn more about these capabilities.
