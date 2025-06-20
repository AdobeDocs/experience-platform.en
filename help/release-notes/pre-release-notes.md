---
title: Experience Platform Pre-Release Notes
description: A preview of the latest release notes for Adobe Experience Platform.
hide: true
hidefromtoc: true
exl-id: f2c41dc8-9255-4570-b459-4f9fc28ee58b
---
# Adobe Experience Platform pre-release notes

>[!IMPORTANT]
>
>This document is intended as a **preview** of the release notes for the current month. Release items are subject to change, and may be added or removed in the final release.

>[!TIP]
>
>Refer to the following documentation for release notes of other Adobe Experience Platform applications:
>
>- [Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/whats-new/release-notes)
>- [Adobe Journey Optimizer B2B](https://experienceleague.adobe.com/en/docs/journey-optimizer-b2b/user/release-notes)
>- [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/releases/pre-release-notes)
>- [Federated Audience Composition](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/e-release-notes)
>- [Real-Time CDP Collaboration](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/latest)

**Release date: June 18, 2025**

New features and updates to existing features in Adobe Experience Platform:

- [Access control](#access-control)
- [Advanced data lifecycle management](#advanced-data-lifecycle-management)
- [Dashboards](#dashboards)
- [Data Governance](#data-governance)
- [Destinations](#destinations)
- [Federated Audience Composition](#fac)
- [Privacy Service](#privacy-service)
- [Sandboxes](#sandboxes)
- [Sources](#sources)

## Access control {#access-control}

Experience Platform leverages [Adobe Admin Console](https://adminconsole.adobe.com) product profiles to link users with permissions and sandboxes. Permissions control access to a variety of Experience Platform capabilities, including data modeling, profile management, and sandbox administration.

**Key features**

| Feature | Description |
| ------- | ----------- |
| Export Dashboard Data permission | The **[!UICONTROL Download CSV]** and **[!UICONTROL Send as email]** options in dashboards now require the **[!UICONTROL Export Dashboard Data]** permission. This permission ensures that only authorized users can export tabulated insight data, supporting tighter governance and data access control policies. |

For more information, please see the [access control overview](../access-control/home.md). 

## Advanced data lifecycle management {#advanced-data-lifecycle-management}

Experience Platform provides a suite of data hygiene capabilities that allow you to manage your stored data through programmatic deletions of consumer records and datasets. Using either the Data Lifecycle workspace in the UI or through calls to the Data Hygiene API, you can effectively manage your data stores. Use these capabilities to ensure that information is used as expected, is updated when incorrect data needs fixing, and is deleted when organizational policies deem it necessary.

**New documentation**

| New documentation | Description |
| --- | --- |
| Record Delete General Availability | You can now delete individual records based on identity fields using the UI or API. This feature helps reduce storage, enforce governance, and improve data hygiene by allowing deletions from a single dataset or across all datasets. Volume limits and entitlement requirements apply. |

For more information, read the [advanced data lifecycle management overview](../hygiene/home.md).

## Dashboards {#dashboards}

Experience Platform provides multiple dashboards through which you can view important insights about your organization's data, as captured during daily snapshots.

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| Send as Email Export Option | You can now export up to 10,000 records from Query Pro mode dashboards by selecting **[!UICONTROL Send as email]** from the **[!UICONTROL View more]** menu. This option securely sends a download link to your Adobe-associated email for larger exports. |

For more information on dashboards, including how to grant access permissions and create custom widgets, begin by reading the [dashboards overview](../dashboards/home.md).

## Data Governance {#data-governance}

Adobe Experience Platform Data Governance is a series of strategies and technologies used to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data usage. It plays a key role within [!DNL Experience Platform] at various levels, including cataloging, data lineage, data usage labeling, data access policies, and access control on data for marketing actions.

**New features**

| Feature | Description |
| --- | --- |
| Azure CMK Alerts and IP Allowlist Configuration | You can now allowlist Adobe's static IP address in Azure Key Vault to ensure continued access when network restrictions are enabled. This helps prevent disruptions to Platform services due to restricted key access. |
| CMK Configuration Alerts and Resolutions  | Experience Platform now triggers alerts when Adobe services lose access to your Azure Key Vault (for example, due to removed IP allowlist entries or disabled keys). A new guide helps you understand each alert and take corrective action. |

For more information, read the [data governance overview](../data-governance/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New destinations**

| Destination | Description |
| --- | --- |
| Algolia User Segments | The Algolia User Segments destination enables marketing professionals to deliver consistent personalization across sites from home page to search. Build rich audiences from multiple data sources and share them across various channels for improved targeting strategies and campaign personalization. |

**New or updated functionality**

| Feature | Description |
| --- | --- |
| LinkedIn account expiration information | Account expiration information for LinkedIn destinations is now available directly in the [!UICONTROL Browse] and [!UICONTROL Accounts] views. Previously, this information was only available in documentation. This enhancement provides better visibility into LinkedIn authentication status and credential management. |
| Google Customer Match + DV360 general availability and enhancement | The Google Customer Match + DV360 destination is now available for all Experience Platform users. The documentation now includes detailed guidance for account linking between Adobe and Google advertising accounts. |
| Data Landing Zone (DLZ) destination encryption support | Added encryption support for the Data Landing Zone destination. You can now attach RSA-formatted public keys to add encryption to your exported files. |
| Audience-level monitoring for enterprise destinations | Audience-level monitoring is now available for the following enterprise destinations: [[!DNL Azure Event Hubs]](/help/destinations/catalog/cloud-storage/azure-event-hubs.md), [[!DNL HTTP API]](/help/destinations/catalog/streaming/http-destination.md), [[!DNL Amazon Kinesis]](/help/destinations/catalog/cloud-storage/amazon-kinesis.md).|

{style="table-layout:auto"}

For more information, read the [Destinations overview](../destinations/home.md).

## Federated Audience Composition {#fac}

Federated Audience Composition allows enterprises to compose data for better application across various use cases. With this new approach, as an Adobe Real-Time Customer Data Platform and/or Adobe Journey Optimizer user, you can federate datasets directly from your existing data warehouse to create and enrich Adobe Experience Platform audiences and attributes all in one system.

| New feature | Description |
| ----------- | ----------- |
| HIPAA readiness | Federated Audience Composition is now HIPAA compliant. For more information on Federated Audience Composition's privacy and security measures, read the [privacy and security in Federated Audience Composition overview](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/start/privacy-security). For more information on HIPAA compliance for Experience Platform products in general, read the [HIPAA and Adobe Products and Services overview](https://www.adobe.com/trust/compliance/hipaa-ready.html). |

For more information, read the [Federated Audience Composition documentation](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/home).

## [!DNL Privacy Service] {#privacy}

Several legal and organizational regulations give users the right to access or delete their personal data from your data stores upon request. Adobe Experience Platform [!DNL Privacy Service] provides a RESTful API and user interface to help you manage these data requests from your customers. With [!DNL Privacy Service], you can submit requests to access and delete private or personal customer data from Adobe Experience Cloud applications, facilitating automated compliance with legal and organizational privacy regulations.

**New features**

|Feature | Description|
|--- | ---|
| Support for Tennessee and Minnesota Privacy Laws | Privacy Service now supports the Tennessee Information Protection Act (`tipa_tn_usa`) and the Minnesota Consumer Data Privacy Act (`mcdpa_mn_usa`). You can process access and delete requests in compliance with these new state-level regulations. See the [Regulations overview](https://experienceleague.adobe.com/en/docs/experience-platform/privacy/regulations/overview) for more details. |

See the [Privacy Service overview](../privacy-service/home.md) for more information on the service.

## Sandboxes {#sandboxes}

Adobe Experience Platform is built to enrich digital experience applications on a global scale. Companies often run multiple digital experience applications in parallel and need to cater for the development, testing, and deployment of these applications while ensuring operational compliance.

**New or updated features**

| Feature | Description |
| --- | --- |
| Object configuration updates migration | You can now migrate iterative object configuration updates across sandboxes after the initial replication. This enhancement supports development workflows where configurations need to be updated and propagated across environments without recreating the entire sandbox setup. |

{style="table-layout:auto"}

For more information on sandboxes, read the [sandboxes overview](../sandboxes/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Updated features**

| Feature | Description |
| --- | --- |
| Support for new authentication type for [!DNL Azure Synapse Analytics] | The [!DNL Azure Synapse Analytics] will now also support service principal authentication, in addition to the existing connection string authentication. |

**Important authentication updates**

| Update | Description |
| --- | --- |
| [!DNL Salesforce] Basic Authentication deprecation | Basic Authentication for Salesforce CRM and Salesforce Service Cloud will be deprecated by January 2026. Customers must migrate to OAuth 2.0 authentication to maintain connectivity. This change affects both source connectors and ensures improved security and compliance with Salesforce's authentication standards. |

{style="table-layout:auto"}

For more information, read the [sources overview](../sources/home.md).
