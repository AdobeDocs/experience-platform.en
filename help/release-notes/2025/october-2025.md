---
title: Adobe Experience Platform Release Notes October 2025
description: The October 2025 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes
>[!TIP]

>
>Refer to the following documentation for release notes of other Adobe Experience Platform applications:
>
>- [Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/whats-new/release-notes)
>- [Adobe Journey Optimizer B2B](https://experienceleague.adobe.com/en/docs/journey-optimizer-b2b/user/release-notes)
>- [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/releases/pre-release-notes)
>- [Federated Audience Composition](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/e-release-notes)
>- [Real-Time CDP Collaboration](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/latest)

**Release date: October 22, 2025**

New features and updates to existing features in Adobe Experience Platform:

- [Sources](#sources)

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated features**

| Feature | Description |
| --- | --- |
| Dataset creation change for Adobe Analytics source | As part of the dataflow creation process between Adobe Analytics and Experience Platform, a dataset is created via Catalog Service. This dataset serves as a container for the data to land in. Currently, this process involves a DataSource ID that is pulled from the Analytics report suite, sent to Catalog Service, and then is associated with the newly created dataset. After the change, the option to provide the DataSource ID will no longer be available during dataset creation. Therefore, new datasets created by the Analytics source will no longer have a DataSource ID associated with it in Catalog Service. This change applies only to the metadata and does not change the storage of data in the dataset in any way. However, it is important to know that the DataSource ID provided by Catalog Service will no longer be available in newly created datasets for Adobe Analytics. Read the [Adobe Analytics source documentation](../../sources/connectors/adobe-applications/analytics.md) for more information on the Adobe Analytics source connector. |