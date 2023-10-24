---
title: Adobe Experience Platform Release Notes
description: The October 2023 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: October 25, 2023**

Updates to existing features in Experience Platform:

- [Sources](#sources) 

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated features**

| Feature | Description |
| --- | --- |
| Updated authentication for Data Landing Zone | You can now see the designated expiry date of your Data Landing Zone when viewing your credentials. You must refresh your token before the expiry date in order to continue using it in your application. If you do not manually refresh your token before the stated expiry date, then it will automatically refresh and provide a new token the next time you retrieve your credentials. For more information, read the documentation on [using the Data Landing Zone](../../sources/tutorials/ui/create/cloud-storage/data-landing-zone.md). |

{style="table-layout:auto"}

To learn more about sources, please read the [sources overview](../../sources/home.md).
