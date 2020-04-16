---
keywords: Experience Platform;home;intelligent services;popular topics
solution: Experience Platform
title: Prepare data for use in Intelligent Services
topic: Intelligent Services
---

# Prepare data for use in Intelligent Services

In order for Intelligent Services to discover insights from your marketing events data, the data must be semantically enriched and maintained in a standard structure. Intelligent Services leverage Experience Data Model (XDM) schemas in order to achieve this. Specifically, all datasets that are used in Intelligent Services must conform to the **Consumer Experience Events (CEE)** XDM schema. 

This document provides general guidance on mapping your marketing events data from multiple channels to this schema, outlining information on important fields within the schema to help you determine how to effectively map your data to its structure.

## Understanding the CEE schema

The Consumer ExperienceEvent schema describes the behavior of an individual as it relates to digital marketing events (web or mobile) as well as online or offline commerce activity. The use of this schema is required for Intelligent Services because of its semantically well-defined fields (columns), avoiding any unknown names that would otherwise make the data less clear. 

Like all XDM schemas, the CEE mixin is extensible. In other words, additional fields can be added to the CEE mixin, and different variations can be included in multiple schemas if required.

A complete example of the mixin can be found in the [public XDM repository](https://github.com/adobe/xdm/blob/797cf4930d5a80799a095256302675b1362c9a15/docs/reference/context/experienceevent-consumer.schema.md), and should be used as a reference for the key fields outlined in the section below.

### Key fields

The table below highlights the key fields within the CEE mixin which should be utilized in order for Intelligent Services to generate useful insights, including descriptions and links to reference documentation for further examples.

| XDM field | Description | Reference |
| --- | --- | --- |
| `xdm:channel` | The marketing channel related to the ExperienceEvent. The field includes information about the channel type, media type, and location type. **This field _must_ be provided in order for Attribution AI to work with your data**. See the [table below](#example-channels) for some example mappings. | [Experience channel schema](https://github.com/adobe/xdm/blob/797cf4930d5a80799a095256302675b1362c9a15/docs/reference/channels/channel.schema.md) |
| `xdm:productListItems` | An array of items which represent products selected by a customer, including the product SKU, name, price, and quantity. | [Commerce details schema](https://github.com/adobe/xdm/blob/797cf4930d5a80799a095256302675b1362c9a15/docs/reference/context/experienceevent-commerce.schema.md) |
| `xdm:commerce` | Contains commerce-specific information about the ExperienceEvent, including the purchase order number and payment information. | [Commerce details schema](https://github.com/adobe/xdm/blob/797cf4930d5a80799a095256302675b1362c9a15/docs/reference/context/experienceevent-commerce.schema.md) |
| `xdm:web` | Represents web details relating to the ExperienceEvent, such as the interaction, page details, and referrer. | [ExperienceEvent web details schema](https://github.com/adobe/xdm/blob/797cf4930d5a80799a095256302675b1362c9a15/docs/reference/context/experienceevent-web.schema.md) |

### Example channels {#example-channels}

The `xdm:channel` field represents the marketing channel related to the ExperienceEvent. The following table provides some examples of marketing channels mapped to XDM:

| Channel | `channel.mediaType` | `channel._type` | `channel.mediaAction` |
| --- | --- | --- | --- |
| Paid Search | PAID | SEARCH | CLICK |
| Social - Marketing | EARNED | SOCIAL | CLICK |
| Display | PAID | DISPLAY | CLICK |
| Email | PAID | EMAIL | CLICK |
| Internal Referrer | OWNED | DIRECT | CLICK |
| Display ViewThrough | PAID | DISPLAY | IMPRESSION |
| QR Code Redirect | OWNED | DIRECT | CLICK |
| SMS Text Message | OWNED | SMS | CLICK |
| Mobile | OWNED | MOBILE | CLICK |

## Mapping and ingesting data

Once you have determined whether your time-series data can be mapped to the CEE schema, you can start the process of bringing your data into Intelligent Services. Contact Adobe Consulting Services to help map your data to the schema and ingest it into the service.

If you have an Adobe Experience Platform subscription and want to map and ingest the data yourself, follow the steps outlined in the section below.

### Using Adobe Experience Platform

>[!NOTE] The steps below require a subscription to Experience Platform. If you do not have access to Platform, skip ahead to the [next steps](#next-steps) section.

This section outlines the workflow for mapping and ingesting data into Experience Platform for use in Intelligent Services, including links to tutorials for detailed steps.

#### Create a CEE schema and dataset

When you are ready to start preparing your data for ingestion, the first step is to create a new XDM schema that employs the CEE mixin. The following tutorials walk through the process of creating a new schema in the UI or API:

* [Create a schema in the UI](../xdm/tutorials/create-schema-ui.md)
* [Create a schema in the API](../xdm/tutorials/create-schema-api.md)

>[!IMPORTANT] The tutorials above follow a generic workflow for creating a schema. When choosing a class for the schema, you must use the **XDM ExperienceEvent class**. Once this class has been chosen, you can then add the CEE mixin to the schema.

After adding the CEE mixin to the schema, you can add other mixins as required for additional fields within your data.

Once you have created and saved the schema, you can create a new dataset based on that schema. The following tutorials walk through the process of creating a new dataset in the UI or API:

* [Create a dataset in the UI](../catalog/datasets/user-guide.md#create) (Follow the workflow for using an existing schema)
* [Create a dataset in the API](../catalog/datasets/create.md)

#### Map and ingest data

After creating a CEE schema and dataset, you can start mapping your data tables to the schema and ingest that data into Platform. See the tutorial on [mapping a CSV file to an XDM schema](../ingestion/tutorials/map-a-csv-file.md) for steps on how to perform this in the UI. Once a dataset has been populated, the same dataset can be used to ingest additional data files.

## Next steps {#next-steps}

This document provided general guidance on preparing your data for use in Intelligent Services. If you require additional consulting based on your use case, please contact Adobe Consulting Support.

Once you have successfully populated a dataset with your customer experience data, you can use Intelligent Services to generate insights. Refer to the following documents to get started:

* [Attribution AI overview](./attribution-ai/overview.md)
* [Customer AI overview](./customer-ai/overview.md)
