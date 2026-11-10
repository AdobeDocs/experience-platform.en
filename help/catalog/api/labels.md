---
keywords: Experience Platform;home;popular topics;data usage labels;catalog service
solution: Experience Platform
title: Data Usage Labels in the Dataset Service API
description: The Dataset Service API provides endpoints to manage data usage labels for datasets.
exl-id: 2451e5b0-b117-4465-8e58-70fc341c0748
TQID: https://experienceleague.adobe.com/FcrS8dbN-wlcjTuUpo6VS7m8l1TmJYSE7ujqElp8DDM
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
    internal-label: Metadata
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
---
# Data usage labels in the Dataset Service API

Use the [!DNL Dataset Service] API to apply and manage data usage labels on datasets. These labels support data governance policies that control how data can be used. For instructions, see [Manage data usage labels using the API](../../data-governance/labels/dataset-api.md) in the Adobe Experience Platform Data Governance documentation.

>[!NOTE]
>
>To restrict access to an entire dataset, use `accessLabels` in the [!DNL Catalog Service] API instead. Data usage labels and `accessLabels` use the same core and custom label definitions, but serve different purposes: data usage labels govern how data can be used, while `accessLabels` control who can access the dataset. See [Update array fields](./update-object.md#array-fields) for instructions on setting `accessLabels`.

<!-- 
January safe OLAC for datasets note PLAT-294991
>[!NOTE]
>
>To restrict access to an entire dataset, use `accessLabels` in the [!DNL Catalog Service] API instead. Data usage labels and `accessLabels` use the same core and custom label definitions, but serve different purposes: data usage labels govern how data can be used, while `accessLabels` control who can access the dataset. See [Update array fields](./update-object.md#array-fields) for instructions on setting `accessLabels`.
-->
