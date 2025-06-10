---
title: Experience Platform Release Notes (Preview)
description: A preview of the latest release notes for Adobe Experience Platform.
hide: true
hidefromtoc: true
---

# Adobe Experience Platform release notes

>[!TIP]
>
>Refer to the following documentation for release notes of other Adobe Experience Platform applications:
>
>- [Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/whats-new/release-notes)
>- [Adobe Journey Optimizer B2B](https://experienceleague.adobe.com/en/docs/journey-optimizer-b2b/user/release-notes)
>- [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/releases/latest)
>- [Federated Audience Composition](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/release-notes)
>- [Real-Time CDP Collaboration](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/latest)

**Release date: June 17, 2025**

New features and updates to existing features in Adobe Experience Platform:

- [Destinations](#destinations)
- [Federated Audience Composition]{#fac}
- [Query Service](#query-service)
- [Sandboxes](#sandboxes)
- [Sources](#sources)

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New destinations**

| Destination | Description |
| --- | --- |
| [Algolia User Segments](../../destinations/catalog/personalization/algolia.md) | The Algolia User Segments destination enables marketing professionals to deliver consistent personalization across sites from home page to search. Build rich audiences from multiple data sources and share them across various channels for improved targeting strategies and campaign personalization. |

**New or updated functionality**

| Feature | Description |
| --- | --- |
| LinkedIn account expiration information | Account expiration information for LinkedIn destinations is now available directly in the Browse and Accounts views. Previously, this information was only available in documentation. This enhancement provides better visibility into LinkedIn authentication status and credential management. |
| Google Customer Match + Display & Video 360 enhancements | Enhanced documentation and contextual help for account linking between Adobe and Google advertising accounts. Added in-workflow guidance for the destination connection process and removed beta label from the destination. |
| Marketo destination card consolidation | Consolidated Marketo V2 and V3 destination cards into a unified experience. This enhancement streamlines destination management and provides migration guidance for existing users. |
| Data Lake Zone (DLZ) encryption support | Added encryption support for the Data Lake Zone destination, consistent with other cloud storage destinations. You can now attach RSA-formatted public keys to add encryption to your exported files. |
| Enhanced destinations monitoring | Segment-level reporting is now available for all SSD streaming real-time destinations in the destinations monitoring UI. This provides enhanced visibility into destination performance at the audience segment level. |
| Facebook account expiration visibility | Facebook destination connections now display account token expiration dates in the Browse and Accounts views for improved account management. |

{style="table-layout:auto"}

For more information, read the [Destinations overview](../../destinations/home.md).

## Federated Audience Composition {#fac}

Federated Audience Composition allows enterprises to compose data for better application across various use cases. With this new approach, as an Adobe Real-Time Customer Data Platform and/or Adobe Journey Optimizer user, you can federate datasets directly from your existing data warehouse to create and enrich Adobe Experience Platform audiences and attributes all in one system.

| New feature | Description |
| ----------- | ----------- |
| HIPAA readiness | Federated Audience Composition is now HIPAA compliant. For more information on Federated Audience Composition's privacy and security measures, read the [privacy and security in Federated Audience Composition overview](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/start/privacy-security). For more information on HIPAA compliance for Experience Platform products in general, read the [HIPAA and Adobe Products and Services overview](https://www.adobe.com/trust/compliance/hipaa-ready.html). |

For more information, read the [Federated Audience Composition documentation](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/home).

## Query Service {#query-service}

Query data in the Adobe Experience Platform data lake using standard SQL with Query Service. Seamlessly combine datasets and generate new ones from your query results to power reporting, enable data science workflows, or facilitate ingestion into Real-Time Customer Profile.

**New features**

| Feature | Description |
| --- | --- |
| Advanced statistical functions | **Theta sketch intersection**: New function for computing set intersections using theta sketches for approximate distinct counting and set operations. **KLL histograms**: Enhanced histogram capabilities using KLL (Kth smallest, L largest, Large items) sketches for quantile estimation and distribution analysis. These functions are available for Data Distiller customers. |
| SQL Template Library | A comprehensive library of SQL templates for common use cases is now available. This feature accelerates query development by providing best practice templates for frequent analytical patterns, helping Data Distiller customers implement complex analytics more efficiently. |

**Updated features**

| Feature | Description |
| --- | --- |
| RFM modeling example | Added a comprehensive Recency, Frequency, Monetary (RFM) modeling example for Data Distiller customers. This includes detailed documentation and implementation guides for customer segmentation and value analysis using RFM techniques. |

{style="table-layout:auto"}

For more information on [!DNL Query Service], please see the [[!DNL Query Service] overview](../../query-service/home.md).

## Sandboxes {#sandboxes}

Adobe Experience Platform is built to enrich digital experience applications on a global scale. Companies often run multiple digital experience applications in parallel and need to cater for the development, testing, and deployment of these applications while ensuring operational compliance.

**New or updated features**

| Feature | Description |
| --- | --- |
| Object configuration updates migration | You can now migrate iterative object configuration updates across sandboxes after the initial replication. This enhancement supports development workflows where configurations need to be updated and propagated across environments without recreating the entire sandbox setup. |

{style="table-layout:auto"}

For more information on sandboxes, read the [sandboxes overview](../../sandboxes/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Updated features**

| Feature | Description |
| --- | --- |
| [!DNL Salesforce] soft deleted records support | Added support for soft deleted records in Salesforce CRM and Service Cloud connectors. A new optional parameter `includeDeletedObjects` is available in OAuth2 Client Credential authentication. When set to true, this parameter allows you to include soft deleted records in Salesforce queries, providing access to previously deleted data from your Salesforce account. This functionality is available in both API and UI configurations. |
| Support for new authentication type for [!DNL Azure Synapse Analytics] | The [!DNL Azure Synapse Analytics] will now also support service principal authentication, in addition to the existing connection string authentication. |

**Important authentication updates**

| Update | Description |
| --- | --- |
| [!DNL Salesforce] Basic Authentication deprecation | Basic Authentication for Salesforce CRM and Salesforce Service Cloud will be deprecated by January 2026. Customers must migrate to OAuth 2.0 authentication to maintain connectivity. This change affects both source connectors and ensures improved security and compliance with Salesforce's authentication standards. |

{style="table-layout:auto"}

For more information, read the [sources overview](../../sources/home.md).
