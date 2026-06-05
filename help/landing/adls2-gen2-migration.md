---
title: Data Lake Migration to Gen2
description: Learn about the new features provided by the migration of the Data Lake to Gen2 in Adobe Experience Platform.
exl-id: 56d9c77a-d7eb-498d-994f-b15d150dedb7
TQID: https://experienceleague.adobe.com/aIxIYwMSLKe28qlQfZucxqynk--7Nr8hPYzVoOCesmk
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
subfeature_v2:
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
---
# Adobe Experience Platform Data Lake migration to Gen2

Adobe Experience Platform is migrating to Gen2 Data Lake. This is a new generation of data lake which provides Experience Platform users benefits such as geo-region replication, finer role-based access controls (RBAC), and better scaling.

## User impact

While Adobe is migrating the Data Lake from Gen1 to Gen 2, users will be able to **read** from the Data Lake, but all capabilities that **write** into the Data Lake will be impacted. Below is a list of impacted capabilities:

- **Sources**: Data coming in from the sources and various data ingestion workflows will be delayed. Users will see their data once the migration is complete.
- **Query Service**: Users can perform queries but will not be able to write the output of the query into a dataset.
- **Real-Time Customer Profile**: Data ingested to the Profile store through **batch** ingestion will not be available during the migration. However, data ingested through **streaming** ingestion will be available during the migration. Additionally, Profile exports won't be available during the migration.
- **Data Science Workspace**: Writes from Data Science Workspace will fail.
- **Segmentation Service**: Audiences derived from **batch** segmentation cannot be activated during the migration. Audiences derived from **streaming** segmentation will not be affected.
- **Customer Journey Analytics**: Customer Journey Analytics reports data may be out of date and will not refresh during the migration, as batches are not being ingested into Data Lake.

## Communication to Experience Platform users

Adobe will be contacting System Administrators to discuss the impact of the migration in detail and to confirm the migration dates and times for specific organizations.
