---
title: Adobe Experience Platform Release Notes December 2020
description: The December 2020 release notes for Adobe Experience Platform.
doc-type: release notes
last-update: December 9, 2020
author: ens60013 & ens72471
exl-id: 89d631f1-1b11-4a18-98e1-08e1d5bd8b0d
TQID: https://experienceleague.adobe.com/wZMYmmvmDDv9GEP9kp3rArFgpIgbqG6Y7YgouKYUG5s
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
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
  - id: bbbea26f-9621-49eb-9ab8-e06fb3bbce8c
    internal-label: Artificial intelligence
  - id: bcc5edb5-84c3-4940-9f84-ed88b6c16274
    internal-label: Experimentation
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: eb30f47f-d87a-400f-8f78-63ce7979ff56
    internal-label: Machine learning
---
# Adobe Experience Platform release notes 

**Release date: December 9, 2020**

New features in Adobe Experience Platform:

- [[!DNL Dataflows]](#dataflows)

Updates to existing features in Adobe Experience Platform:

- [[!DNL Data Science Workspace]](#dsw)
- [[!DNL Sources]](#sources)

## [!DNL Dataflows] {#dataflows}

Dataflows are a representation of data jobs that move data across Experience Platform. These dataflows are configured across different services, helping move data from source connectors to target datasets, to Identity and Profile Service, and to destinations. 

**Key feature**

| Feature | Description |
| ------- | ----------- |
| Transparency for dataflows | You can monitor dataflows for sources and destinations. For more information, please read the [tutorial on monitoring sources](../../dataflows/ui/monitor-sources.md) or the [tutorial on monitoring destinations](../../dataflows/ui/monitor-destinations.md). |

To learn more about dataflows, please read the [dataflows overview](../../dataflows/home.md).

## [!DNL Data Science Workspace] {#dsw}

Data Science Workspace uses machine learning and artificial intelligence to create insights from your data. Integrated into Adobe Experience Platform, Data Science Workspace helps you make predictions using your content and data assets across Adobe solutions.

**Key features**

| Feature | Description|
| --- | ---|
| Adobe Experience Platform Intelligence package addon | The Adobe Experience Platform Intelligence package addon is a Data Science Workspace upgrade that unlocks additional key features such as: <li> UI driven model experimentation and evaluation.</li><li> Ability to deploy and operationalize models with scheduled training and inferencing jobs.</li><li> Support for deep learning in Tensorflow models (GPU Compute).</li><li> Spark-based distributed compute to train and score against large datasets (10MM + rows).</li><li>And more</li>|

To learn more about the Adobe Experience Platform Intelligence package addon, please see the documentation on [Data Science Workspace access and features](../../data-science-workspace/access-features-dsw.md).

## [!DNL Sources] {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using [!DNL Experience Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third party software, and your CRM system.

[!DNL Experience Platform] provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Key features**

| Feature | Description |
| ------- | ----------- |
| Update account and connection details for streaming sources | You can now update the names, descriptions, and credentials of existing streaming connections using the [!DNL Flow Service] API and the UI. For more information, see the tutorial on [updating connections using the API](../../sources/tutorials/api/update.md) and [editing account details using the UI](../../sources/tutorials/ui/monitor.md). |
| Delete dataflows | Streaming dataflows that contain errors or have become unnecessary can now be deleted using the [!DNL Flow Service] API and the UI. For more information, see the tutorial on [deleting dataflows using the API](../../sources/tutorials/api/delete-dataflows.md) and [deleting dataflows using the UI](../../sources/tutorials/ui/delete.md). |

To learn more about sources, see the [sources overview](../../sources/home.md).
