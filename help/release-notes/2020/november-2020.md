---
title: Adobe Experience Platform Release Notes
description: Experience Platform release notes November, 2020
doc-type: release notes
last-update: November, 2020
author: crhoades, ens28527
---

# Adobe Experience Platform release notes 

**Release date: November 2020**

New features in Adobe Experience Platform:

- [[!DNL Access control]](#access-control)
- [[!DNL Sandboxes]](#sandboxes)
- [[!DNL Sources]](#sources)

## [!DNL Access control] {#access-control}

[!DNL Experience Platform] leverages [Adobe Admin Console](https://adminconsole.adobe.com) product profiles to link users with permissions and sandboxes. Permissions control access to a variety of Platform capabilities, including data modeling, profile management, and sandbox administration.

**Key features**

|Feature | Description|
|--- | ---|
|Permissions | In the [!DNL Admin Console], the  tab within a [!DNL Platform] product profile allows you customize which [!DNL Platform] capabilities are available for the users attached to that profile. Available permission categories include: [!UICONTROL Data Modeling], [!UICONTROL Data Management], [!UICONTROL Profile Management], [!UICONTROL Identities], [!UICONTROL Data Monitoring], [!UICONTROL Sandbox Administration], [!UICONTROL Destinations], [!UICONTROL Sources].|
|Access to sandboxes | The **[!UICONTROL Permissions]** tab within a [!DNL Platform] product profile can grant users access to specific sandboxes. See the section on [sandboxes](#sandboxes) below for more information.|

For more information, please see the [access control overview](../../access-control/home.md).

## [!DNL Sandboxes] {#sandboxes}

[!DNL Experience Platform] is built to enrich digital experience applications on a global scale. Companies often run multiple digital experience applications in parallel and need to cater for the development, testing, and deployment of these applications while ensuring operational compliance. In order to address this need, [!DNL Experience Platform] provides sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

**Key features**

|Feature | Description|
|--- | ---|
|Production sandbox | [!DNL Experience Platform] provides a single production sandbox, which cannot be deleted or reset.|
|Non-production sandboxes | Multiple non-production sandboxes can be created for a single [!DNL Platform] instance, allowing you to test features, run experiments, and make custom configurations without impacting your production sandbox.|
|Sandbox switcher | In the [!DNL Experience Platform] user interface, the sandbox switcher in the top-left corner of the screen allows you to switch between available sandboxes through a dropdown menu.|
|`x-sandbox-name` header | All calls to [!DNL Experience Platform] APIs must now include the new `x-sandbox-name` header, whose value references the `name` attribute of the sandbox the operation will take place in.|

For more information, please see the [sandboxes overview](../../sandboxes/home.md).

## [!DNL Sources] {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third party software, and your CRM system.

[!DNL Experience Platform] provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New features**

| Feature | Description |
| ------- | ----------- |
| API support for updating connections | You can now update the names, descriptions, and credentials of existing batch or streaming connections using the [!DNL Flow Service] API. See the tutorial on [updating connections](../../sources/tutorials/api/update.md) for more information. |
| API support for deleting connections | Batch or streaming connections that contain errors or have become unnecessary can now be deleted using the [!DNL Flow Service] API. See the tutorial on [deleting connections](../../sources/tutorials/api/delete.md) for more information. |
| UI support for deleting accounts |  Accounts that were made with errors or have become unnecessary can now be deleted through the UI. See the tutorial on [deleting accounts](../../sources/tutorials/ui/delete-accounts.md) for more information. |
| API and UI support for eCommerce systems | New source connector for [!DNL Shopify]. |
| API support for flow run monitoring for streaming connectors | You can now monitor all flow runs and see a detailed view of each run, including completion status, run duration, list of files processed, errors, and metrics, using the [!DNL Flow Service API]. |
| Support for custom delimiters in delimited files in cloud storage Connectors | You can now ingest flat files in any format by specifying the column delimiter. You can use any single column delimeter such as a tab, comma, pipe, semicolons, or hash. The value defaults to a comma if unprovided. |
 
To learn more about sources, see the [sources overview](../../sources/home.md).