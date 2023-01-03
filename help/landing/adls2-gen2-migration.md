---
title: Data Lake Migration to Gen2
description: Learn about the new features provided by the migration of the Data Lake to Gen2 in Adobe Experience Platform.
exl-id: 56d9c77a-d7eb-498d-994f-b15d150dedb7
---
# Adobe Experience Platform Data Lake migration to Gen2

Adobe Experience Platform is migrating to Gen2 Data Lake. This is a new generation of data lake which provides Platform users benefits such as geo-region replication, finer role-based access controls (RBAC), and better scaling.

## User impact

While Adobe is migrating the Data Lake from Gen1 to Gen 2, users will be able to **read** from the Data Lake, but all capabilities that **write** into the Data Lake will be impacted. Below is a list of impacted capabilities:

- **Sources**: Data coming in from the sources and various data ingestion workflows will be delayed. Users will see their data once the migration is complete.
- **Query Service**: Users can perform queries but will not be able to write the output of the query into a dataset.
- **Real-Time Customer Profile**: Data ingested to the Profile store through **batch** ingestion will not be available during the migration. However, data ingested through **streaming** ingestion will be available during the migration. Additionally, Profile exports won't be available during the migration.
- **Data Science Workspace**: Writes from Data Science Workspace will fail.
- **Segmentation Service**: Audiences derived from **batch** segmentation cannot be activated during the migration. Audiences derived from **streaming** segmentation will not be affected.
- **Customer Journey Analytics**: Customer Journey Analytics reports data may be out of date and will not refresh during the migration, as batches are not being ingested into Data Lake.

## Communication to Platform users

Adobe will be contacting System Administrators to discuss the impact of the migration in detail and to confirm the migration dates and times for specific IMS Organizations.
