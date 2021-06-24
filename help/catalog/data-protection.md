---
keywords: Experience Platform;home;popular topics;catalog;data protection;encryption data lake
solution: Experience Platform
title: Data Protection in Adobe Experience Platform
topic-legacy: data protection
description: All data persisted in the Data Lake is encrypted, stored, and managed in an isolated Microsoft Azure Data Lake Storage account that is unique to your organization. The following process flow diagram illustrates how data is ingested, processed, encrypted, and persisted by Experience Platform.
exl-id: 184b2b2d-8cd7-4299-83f8-f992f585c336
---
# Data protection in Adobe Experience Platform

All data that is ingested and used by Adobe Experience Platform is stored in the [!DNL Data Lake], a highly granular data store containing all data managed by [!DNL Platform], regardless of origin or file format. All data persisted in the [!DNL Data Lake] is encrypted, stored, and managed in an isolated [!DNL Microsoft Azure Data Lake] Storage account that is unique to your organization.

The following process flow diagram illustrates how data is ingested, processed, encrypted, and persisted by [!DNL Experience Platform]:

![](images/data-protection/flow.png)

For details on how data at rest is encrypted in [!DNL Data Lake Storage], see the document on [data encryption in Azure Data Lake Storage](https://docs.microsoft.com/en-us/azure/data-lake-store/data-lake-store-encryption). For information on how data at rest is encrypted in [!DNL Cosmos DB], see the document on [data encryption in Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/database-encryption-at-rest).
