---
keywords: Experience Platform;home;popular topics;Customer Attributes connector
solution: Experience Platform
title: Customer Attributes Source Connector Overview
topic-legacy: overview
description: Learn how to connect Customer Attributes to Adobe Experience Platform using APIs or the user interface
exl-id: 63765ecd-ddb5-4992-a3de-d53f054bfb28
---
# Customer Attributes connector

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

[[!DNL Customer Attributes]](https://experienceleague.adobe.com/docs/core-services/interface/services/customer-attributes/attributes.html?lang=en) in Experience Cloud enables you to upload your captured enterprise data from a customer relationship management (CRM) database. You can upload the data into a Customer Attribute data source in the Experience Cloud, then use the data in Adobe Analytics and Adobe Target.

Experience Platform provides support for ingesting [!DNL Customer Attributes] profile data into Adobe Experience Platform.

## Datasets and schemas

The [!DNL Customer Attributes] source auto-creates the dataset for data to land into. This auto-created dataset is fixed and cannot be manually selected. The source also auto-creates the schema for the dataset based on the input data source. This process also involves the auto-creation of the necessary mappings between the schema and the source data.

## Identities

The primary identity of a dataset is contained in the first column of the CSV file of the source data. The [!DNL Customer Attributes] source assumes that the identity is always mapped to the UUID namespace. This UUID namespace is a system-generated namespace that is supported by UID. You cannot select an existing namespace for the identity when using the [!DNL Customer Attributes] source. Furthermore, the [!DNL Customer Attributes] source assumes that the primary identity for the schema is always in the identity map and then creates the mapping of the source ID to the identity map UUID in an automated manner.

The documentation below provides information on how to connect [!DNL Customer Attributes] to Adobe Experience Platform using APIs or the user interface:

## Connect [!DNL Customer Attributes] to Platform using the UI

- [Create a [!DNL Customer Attributes] source connection in the UI](../../tutorials/ui/create/adobe-applications/customer-attributes.md)
