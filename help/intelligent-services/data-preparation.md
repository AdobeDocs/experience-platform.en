---
keywords: Experience Platform;home;intelligent services;popular topics
solution: Experience Platform
title: Prepare data for use in Intelligent Services
topic: Intelligent Services
---

# Prepare data for use in Intelligent Services

In order for Intelligent Services to discover insights from your customer experience data, the data must be semantically enriched and maintained in a standard structure. As with all other Adobe Experience Platform services, all data must be mapped to a predefined Experience Data Model (XDM) schema before being ingested into Platform's data stores.

All datasets that are used in Intelligent Services must conform to the Consumer Experience Events (CEE) XDM schema. This document provides general guidance on mapping your customer experience data to this schema, including information on important fields within the schema itself as well as links to tutorials for mapping and ingesting your data.

>[!IMPORTANT] While you can follow this guide to prepare the data yourself, if you feel that you require additional consulting, please contact Adobe Consulting Support for further guidance.

## Getting started

This guide requires a general understanding of the following Platform services:

* [Experience Data Model (XDM)](../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
* [Catalog Service](../catalog/home.md): The system of record for data location and lineage within Experience Platform. Provides an API that can be used to create datasets and manage metadata.
    * [Datasets](../catalog/datasets/overview.md): All successfully ingested data in Platform is persisted within the Data Lake as datasets. 
* [Data Ingestion](../ingestion/home.md): The methods by which data can be sent to Experience Platform.

## Understanding the CEE mixin

The Consumer ExperienceEvent mixin describes the behavior of an individual as it relates to digital content consumption (web or mobile) as well as online or offline purchases. The use of this schema is required for Intelligent Services because of its semantically well-defined fields (columns), avoiding any evars or unknown names that would otherwise make the data less clear. 

Like all XDM schemas, the CEE mixin is extensible. In other words, the CEE mixin can be included in multiple schemas, and any schema that employs the CEE mixin can include any number of additional fields.

A complete example of the mixin can be found in the [public XDM repository](https://github.com/adobe/xdm/blob/797cf4930d5a80799a095256302675b1362c9a15/docs/reference/context/experienceevent-consumer.schema.md), and should be used as a reference for the key fields outlined in the section below.

### Key fields

The table below highlights the key fields within the CEE mixin which should be utilized in order for Intelligent Services to generate useful insights, including descriptions and links to reference documentation for further examples.

| XDM field | Description | Reference |
| --- | --- | --- |
| `xdm:channel` | The marketing channel related to the ExperienceEvent. The field includes information about the channel type, media type, and location type. **This field _must_ be provided in order for Attribution AI to work with your data.** | [Experience channel schema](https://github.com/adobe/xdm/blob/797cf4930d5a80799a095256302675b1362c9a15/docs/reference/channels/channel.schema.md) |
| `xdm:productListItems` | An array of items which represent products selected by a customer, including the product SKU, name, price, and quantity. | [Commerce details schema](https://github.com/adobe/xdm/blob/797cf4930d5a80799a095256302675b1362c9a15/docs/reference/context/experienceevent-commerce.schema.md) |
| `xdm:commerce` | Contains commerce-specific information about the ExperienceEvent, including the purchase order number and payment information. | [Commerce details schema](https://github.com/adobe/xdm/blob/797cf4930d5a80799a095256302675b1362c9a15/docs/reference/context/experienceevent-commerce.schema.md) |
| `xdm:web` | Represents web details relating to the ExperienceEvent, such as the interaction, page details, and referrer. | [ExperienceEvent web details schema](https://github.com/adobe/xdm/blob/797cf4930d5a80799a095256302675b1362c9a15/docs/reference/context/experienceevent-web.schema.md) |

## Create a CEE schema and dataset

When you are ready to start preparing your data for ingestion, the first step is to create a new XDM schema that employs the CEE mixin. The following tutorials walk through the process of creating a new schema in the API or UI:

* [Create a schema in the API](../xdm/tutorials/create-schema-api.md)
* [Create a schema in the UI](../xdm/tutorials/create-schema-ui.md)

>[!IMPORTANT] The tutorials above follow a generic workflow for creating a schema. When choosing a class for the schema, you must use the **XDM ExperienceEvent class**. Once this class has been chosen, you can then add the CEE mixin to the schema.

After adding the CEE mixin to the schema, you can add other mixins as required for additional fields within your data.

Once you have created and saved the schema, you can create a new dataset based on that schema. The following tutorials walk through the process of creating a new dataset in the API or UI:

* [Create a dataset in the API](../catalog/datasets/create.md)
* [Create a dataset in the UI](../catalog/datasets/user-guide.md#create) (Follow the workflow for using an existing schema)

## Map and ingest data

After creating a CEE schema and dataset, you can start mapping your data tables to the schema and ingest that data into Platform. See the tutorial on [mapping a CSV file to an XDM schema](../ingestion/tutorials/map-a-csv-file.md) for steps on how to perform this in the UI. Once a dataset has been populated, the same dataset can be used to ingest additional data files.

## Next steps

This document provided general guidance on preparing your data for use in Intelligent Services. If you require additional consulting based on your use case, please contact Adobe Consulting Support.

Once you have successfully populated a dataset with your customer experience data, you can use Intelligent Services to generate insights. Refer to the following documents to get started:

* [Attribution AI overview](./attribution-ai/overview.md)
* [Customer AI overview](./customer-ai/overview.md)