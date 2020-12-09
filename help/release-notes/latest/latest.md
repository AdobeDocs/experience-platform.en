---
title: Adobe Experience Platform Release Notes
description: Experience Platform release notes December 9, 2020
doc-type: release notes
last-update: December 9, 2020
author: ens60013 & ens72471
---

# Adobe Experience Platform release notes 

**Release date: December 9, 2020**

Updates to existing features in Adobe Experience Platform:

- [[!DNL Sources]](#sources)
- [[!DNL Data Science Workspace]](#dsw)

## [!DNL Sources] {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third party software, and your CRM system.

[!DNL Experience Platform] provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Key features**

| Feature | Description |
| ------- | ----------- |
| Update account and connection details for streaming sources | You can now update the names, descriptions, and credentials of existing streaming connections using the [!DNL Flow Service] API and the UI. For more information, see the tutorial on [updating connections using the API](../../sources/tutorials/api/update.md) and [editing account details using the UI](../../sources/tutorials/ui/monitor.md). |
| Delete dataflows | Streaming dataflows that contain errors or have become unnecessary can now be deleted using the [!DNL Flow Service] API and the UI. For more information, see the tutorial on [deleting dataflows using the API](../../sources/tutorials/api/delete-dataflows.md) and [deleting dataflows using the UI](../../sources/tutorials/ui/delete.md). |

To learn more about sources, see the [sources overview](../../sources/home.md).

## [!DNL Data Science Workspace] {#dsw}

Data Science Workspace uses machine learning and artificial intelligence to create insights from your data. Integrated into Adobe Experience Platform, Data Science Workspace helps you make predictions using your content and data assets across Adobe solutions.

### Key features

|Feature | Description|
|--- | ---|
| Adobe Experience Platform Intelligence package addon | The Adobe Experience Platform Intelligence package addon is a Data Science Workspace upgrade that unlocks additional key features such as: <li> UI driven model experimentation and evaluation.</li><li> Ability to deploy and operationalize models with scheduled training and inferencing jobs.</li><li> Support for deep learning in Tensorflow models (GPU Compute).</li><li> Spark based distributed compute to train and score against large datasets (10MM + rows).</li><li>And more</li>|

To learn more about the Adobe Experience Platform Intelligence package addon, please see the documentation on [Data Science Workspace access and features](../../data-science-workspace/access-features-dsw.md).