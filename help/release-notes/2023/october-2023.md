---
title: Adobe Experience Platform Release Notes
description: The October 2023 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: October 25, 2023**

Updates to existing features in Experience Platform:

- [Segmentation Service](#segmentation)
- [Sources](#sources)

## Segmentation Service {#segmentation}

[!DNL Segmentation Service] allows you to segment data stored in [!DNL Experience Platform] that relates to individuals (such as customers, prospects, users, or organizations) into audiences. You can create audiences through segment definitions or other sources from your [!DNL Real-Time Customer Profile] data. These audiences are centrally configured and maintained on [!DNL Platform], and are readily accessible by any Adobe solution. 

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| Account audiences (Limited GA) | In Real-Time Customer Data Platform B2B Edition, you can now use account segmentation to bring the full ease and sophistication of the marketing segmentation experience from people-based audiences to account-based audiences. For more information about this feature, please read the [account audiences overview](../../segmentation/ui/account-audiences.md). |

To learn more about Segmentation Service, please read the [Segmentation Service overview](../../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated features**

| Feature | Description |
| --- | --- |
| Updated authentication for Data Landing Zone | You can now see the designated expiry date of your Data Landing Zone when viewing your credentials. You must refresh your token before the expiry date in order to continue using it in your application. If you do not manually refresh your token before the stated expiry date, then it will automatically refresh and provide a new token the next time you retrieve your credentials. For more information, read the documentation on [using the Data Landing Zone](../../sources/tutorials/ui/create/cloud-storage/data-landing-zone.md). |

{style="table-layout:auto"}

To learn more about sources, please read the [sources overview](../../sources/home.md).
