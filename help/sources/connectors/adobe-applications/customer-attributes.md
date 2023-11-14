---
keywords: Experience Platform;home;popular topics;Customer Attributes connector
solution: Experience Platform
title: Customer Attributes Source Connector Overview
description: Learn how to connect Customer Attributes to Adobe Experience Platform using APIs or the user interface
exl-id: 63765ecd-ddb5-4992-a3de-d53f054bfb28
---
# Customer Attributes connector

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

[[!DNL Customer Attributes]](https://experienceleague.adobe.com/docs/core-services/interface/services/customer-attributes/attributes.html) in Experience Cloud enables you to upload your captured enterprise data from a customer relationship management (CRM) database. You can upload the data into a Customer Attribute data source in the Experience Cloud, then use the data in Adobe Analytics and Adobe Target.

Experience Platform provides support for ingesting [!DNL Customer Attributes] profile data into Adobe Experience Platform.

## Datasets and schemas

The [!DNL Customer Attributes] source automatically creates the dataset for data to land into. This auto-created dataset is fixed and cannot be manually selected. The source also auto-creates the schema for the dataset based on the input data source. This process also involves the auto-creation of the necessary mappings between the schema and the source data.

## Identities

The primary identity of a dataset is contained in the first column of the CSV file of the source data. The [!DNL Customer Attributes] source assumes that the identity is always mapped to the [`CORE` namespace](../../../identity-service/namespaces.md), a system-generated namespace that is supported by [[!DNL Identity Service]](../../../identity-service/home.md).

You cannot select an existing namespace for the identity when using [!DNL Customer Attributes] source because [!DNL Customer Attributes] assumes that the primary identity for the schema is always in the identity map. [!DNL Customer Attributes] then creates the mapping of the source ID to the identity map UUID in an automated manner.

For [!DNL Customer Attributes] data to tie to other [!DNL Profile] datasets, its data and identities must be able to be matched to an Experience Cloud ID.

You can establish the `CORE` namespace by setting the Experience Cloud ID for the visitor using [Web SDK](https://experienceleague.adobe.com/docs/experience-platform/edge/identity/overview.html), [Mobile SDK](https://developer.adobe.com/client-sdks/documentation/mobile-core/identity/), or the [Experience Cloud ID Service API](https://experienceleague.adobe.com/docs/id-service/using/intro/overview.html).

The [!DNL Customer Attributes] file does not further populate any other identity relationships. For example, if a [!DNL Customer Attributes] source dataset contains an **Email** and a **Loyalty ID** field, then those fields must be labelled as identity fields in the schema in order to be processed into [!DNL Identity Service].

See the tutorial on [creating a [!DNL Customer Attributes] source connection in the UI](../../tutorials/ui/create/adobe-applications/customer-attributes.md) for more information.
