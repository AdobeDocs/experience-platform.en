---
keywords: Experience Platform;home;popular topics;catalog;data protection;encryption data lake
title: Data Encryption in Adobe Experience Platform
topic-legacy: data protection
description: All data persisted in the Data Lake is encrypted, stored, and managed in an isolated Microsoft Azure Data Lake Storage account that is unique to your organization. The following process flow diagram illustrates how data is ingested, processed, encrypted, and persisted by Experience Platform.
exl-id: 184b2b2d-8cd7-4299-83f8-f992f585c336
---
# Data encryption in Adobe Experience Platform

Adobe Experience Platform is a powerful and extensible system that centralizes and standardizes customer experience data across your enterprise. As such, the security of your digital experience data is of the upmost importance. To meet the latest security needs demanded by the industry, Experience Platform provides deep security procedures and approaches to keep your data protected. This document describes these security measures at a high level.

The following process flow diagram illustrates how data is ingested, processed, encrypted, and persisted by [!DNL Experience Platform]:

![](../images/governance-privacy-security/encryption/flow.png)

## Data in transit

In general, data is brought into Platform in three ways:

* [Data collection](../collection/home.md) capabilities allow websites and mobile applications to send data to the Platform Edge Network for staging and preparation for ingestion.
* [Source connectors](../sources/home.md) stream data directly to Platform from Adobe Experience Cloud applications and other enterprise data sources.
* Non-Adobe ETL (extract, transform, load) tools send data to the [batch ingestion API](../ingestion/batch-ingestion/overview.md) for consumption.

After data has been brought into the system and enriched by Platform services, it can be sent to authenticated [destinations](../../destinations/home.md) which include Adobe applications, partner applications, and native Platform applications such as Adobe Customer Journey Analytics and Adobe Journey Optimizer.

Regardless of the method(s) used to move data in and out of Experience Platform, all data in transit between Platform and any external component is conducted over secure, encrypted connections using HTTPS [TLS v1.2](https://datatracker.ietf.org/doc/html/rfc5246).

## Data at rest

Data that is ingested and used by Platform is stored in the data lake, a highly granular data store containing all data managed by the system, regardless of origin or file format. All data persisted in the data lake is encrypted, stored, and managed in an isolated [!DNL Microsoft Azure Data Lake] Storage instance that is unique to your organization.

For details on how data at rest is encrypted in Azure Data Lake Storage and Cosmos DB, see the [data encryption overview](https://docs.microsoft.com/en-us/azure/data-lake-store/data-lake-store-encryption) in the official Azure documentation.

## Encryption keys

Your data lake instance in Platform stores encryption keys in a secure [Azure Key Vault](https://docs.microsoft.com/en-us/azure/key-vault/general/overview). These keys are maintained by Adobe on your behalf. In a future release, you will be able to provide your own encryption keys for even greater control over the security of your data.

## Next steps

This document provided a high-level overview of how data is encrypted in Platform. For more information on security procedures in Platform, see the overview on [governance, privacy, and security](./overview.md) on Experience League, or take a look at the [Platform security whitepaper](https://www.adobe.com/content/dam/cc/en/security/pdfs/AEP_SecurityOverview.pdf).
