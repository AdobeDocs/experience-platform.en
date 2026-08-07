---
title: Snowflake Overview
description: Learn about Snowflake for event forwarding in Adobe Experience Platform.
last-substantial-update: 2023-06-21T00:00:00.000Z
exl-id: abddf0c4-3d4c-4f66-a6e0-c10b54ea3430
TQID: https://experienceleague.adobe.com/uPDEUwZFSzJyLEiZDSGwpSzSgJl-2Zv3cwba-1-hJso
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# [!DNL Snowflake] overview

[[!DNL Snowflake]](https://www.snowflake.com/en/) is a cloud data warehouse that can store and analyze all your data records in one place. It can be used for data warehousing, data lakes, data engineering, data science, data application development, and secure sharing and consumption of real-time or shared data.

[!DNL Snowflake] is built on top of the Amazon Web Services (AWS), Microsoft Azure (Azure), and Google Cloud Platform (GCP).  

![A diagram showing the [!DNL Snowflake] data architecture.](../../../images/extensions/server/snowflake/snowflake.png)

## Our Snowflake Integration

A Snowflake account can be hosted on any of the following cloud platforms:

- [Amazon Web Services ([!DNL AWS])](https://aws.amazon.com/) - [!DNL AWS] is a cloud computing platform that offers a wide variety of services such as distributed computing, database storage, content delivery, and software-as-a-service (SaaS) integration services for customer relationship management (CRM) and enterprise resource planning (ERP). 

Refer to the [[!DNL AWS] overview](../aws/overview.md) for more information on installing the extension and configuring event forwarding rules. 

- [Microsoft Azure ([!DNL Azure])](https://azure.microsoft.com/en-us/products/event-hubs/#overview) - [!DNL Azure] is a cloud computing platform and an online portal that allows you to access and manage cloud services and resources provided by Microsoft. 

Refer to the [[!DNL Azure] overview](../azure/overview.md) for more information on installing the extension and configuring event forwarding rules. 

- [[!DNL Google Cloud Platform]](https://cloud.google.com/) - [!DNL Google Cloud Platform] is a cloud computing platform that offers a wide variety of services such as distributed computing, database storage, content delivery, and software-as-a-service (SaaS) integration services for customer relationship management (CRM) and enterprise resource planning (ERP).

Refer to the [[!DNL Google Cloud Platform] overview](../google-cloud-platform/overview.md) for more information on installing the extension and configuring event forwarding rules. 

Our native [[!DNL AWS]](../aws/overview.md), [[!DNL Azure]](../azure/overview.md), and [[!DNL Google Cloud Platform]](../google-cloud-platform/overview.md) event forwarding extensions enable customers to collect, enrich, and forward their event data server-side in real time to their cloud services to be consumed by [!DNL Snowflake]. See below:

![The [!DNL Snowflake] reporting diagram showing the link between [!DNL AWS] and [!DNL Azure].](../../../images/extensions/server/snowflake/snowflake-workflow.png)

## Next Steps

This guide provided an overview of [!DNL Snowflake] and the use of [!DNL AWS] and [!DNL Azure] event forwarding extensions. 

For more information on the [!DNL AWS] and [!DNL Azure] event forwarding capabilities in Experience Platform, refer to the [[!DNL AWS] extension overview](../aws/overview.md) and the [[!DNL Azure] extension overview](../azure/overview.md).
