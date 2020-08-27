---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: XDM schemas and descriptors
topic: tutorial
---

# Work with [!DNL Experience Data Model] (XDM) schemas and relationship descriptors

Standardization and interoperability are key concepts behind Adobe Experience Platform. [!DNL Experience Data Model] (XDM), driven by Adobe, is an effort to standardize customer experience data and define schemas for customer experience management. Schemas are the standard way of describing data in [!DNL Experience Platform], allowing all data that conforms to schemas to be reusable without conflicts across an organization and even to be sharable between multiple organizations. To learn more about XDM schemas, start by reading the [XDM System overview](../xdm/home.md).

## Create a schema using the Schema Registry

The Schema Registry provides a user interface and RESTful API from which you can view and manage all resources in the Adobe Experience Platform Schema Library. The Schema Library contains resources made available to you by Adobe, [!DNL Experience Platform] partners, and vendors whose applications you use, as well as resources that you define and save to the Schema Registry. To learn how to create schemas for your organization, follow the tutorials for [creating a schema using the Schema Registry API](../xdm/tutorials/create-schema-api.md) or [creating a schema using the Schema Editor user interface](../xdm/tutorials/create-schema-ui.md).

## Define a relationship between two schemas

The ability to understand the relationships between your customers and their interactions with your brand across various channels is an important part of Adobe Experience Platform. Defining these relationships within the structure of your [!DNL Experience Data Model] (XDM) schemas allows you to gain complex insights into your customer data. These relationship descriptors can be defined using the Schema Registry API and the Schema Editor UI. For more information, see the tutorials for defining relationships between two schemas [using the API](../xdm/tutorials/relationship-api.md) or [using the UI](../xdm/tutorials/relationship-ui.md).

## Create an ad-hoc schema

In specific circumstances, it may be necessary to create an [!DNL Experience Data Model] (XDM) schema with fields that are namespaced for usage only by a single dataset. This is referred to as an "ad-hoc" schema. Ad-hoc schemas are used in various [data ingestion](../ingestion/home.md) workflows for [!DNL Experience Platform], including ingesting CSV files and creating certain kinds of [source connections](../sources/home.md). Creating an ad-hoc schema is done using the Schema Registry API and is intended to be used in conjunction with other [!DNL Experience Platform] tutorials that require creating an ad-hoc schema as part of their workflow. To begin creating an ad-hoc schema, see the tutorial for [creating an ad-hoc schema using the API](../xdm/tutorials/ad-hoc.md).

## Next Steps

Once you have defined schemas for your organization, you can begin creating datasets into which data can be ingested. To get started, see the following documentation:

* [Datasets overview](../catalog/datasets/overview.md)  
* [Data Ingestion overview](../ingestion/home.md)