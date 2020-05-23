---
keywords: Experience Platform;home;intelligent services;popular topics
solution: Experience Platform
title: Prepare data for use in Intelligent Services
topic: Intelligent Services
---

# Prepare data for use in Intelligent Services

In order for Intelligent Services to discover insights from your marketing events data, the data must be semantically enriched and maintained in a standard structure. Intelligent Services leverage Experience Data Model (XDM) schemas in order to achieve this. Specifically, all datasets that are used in Intelligent Services must conform to the **Consumer ExperienceEvent (CEE)** XDM schema. 

This document provides general guidance on mapping your marketing events data from multiple channels to this schema, outlining information on important fields within the schema to help you determine how to effectively map your data to its structure.

## Understanding the CEE schema

The Consumer ExperienceEvent schema describes the behavior of an individual as it relates to digital marketing events (web or mobile) as well as online or offline commerce activity. The use of this schema is required for Intelligent Services because of its semantically well-defined fields (columns), avoiding any unknown names that would otherwise make the data less clear.

Intelligent Services utilize several key fields within this schema to generate insights from your marketing events data, all of which can be found at the root level and expanded to show their required subfields.

![](./images/data-preparation/schema-expansion.gif)

Like all XDM schemas, the CEE mixin is extensible. In other words, additional fields can be added to the CEE mixin, and different variations can be included in multiple schemas if required.

A complete example of the mixin can be found in the [public XDM repository](https://github.com/adobe/xdm/blob/797cf4930d5a80799a095256302675b1362c9a15/docs/reference/context/experienceevent-consumer.schema.md), and should be used as a reference for the key fields outlined in the section below.

## Key fields

The sections below highlight the key fields within the CEE mixin which should be utilized in order for Intelligent Services to generate useful insights, including descriptions and links to reference documentation for further examples.

>[!IMPORTANT] The `xdm:channel` field (explained in the first section below) is **required** in order for Attribution AI to work with your data, while Customer AI does not have any mandatory fields. All other key fields are strongly recommended, but not mandatory.

### xdm:channel

This field represents the marketing channel related to the ExperienceEvent. The field includes information about the channel type, media type, and location type. **This field _must_ be provided in order for Attribution AI to work with your data**.

![](./images/data-preparation/channel.png)

**Example schema**

```json
{
  "@id": "https://ns.adobe.com/xdm/channels/facebook-feed",
  "@type": "https://ns.adobe.com/xdm/channel-types/social",
  "xdm:mediaType": "earned",
  "xdm:mediaAction": "clicks"
}
```

For complete information regarding each of the required sub-fields for `xdm:channel`, please refer to the [experience channel schema](https://github.com/adobe/xdm/blob/797cf4930d5a80799a095256302675b1362c9a15/docs/reference/channels/channel.schema.md) spec. For some example mappings, see the [table below](#example-channels).

#### Example channel mappings {#example-channels}

The following table provides some examples of marketing channels mapped to the `xdm:channel` schema:

| Channel | `@type` | `mediaType` | `mediaAction` |
| --- | --- | --- | --- |
| Paid Search | https:/<span>/ns.adobe.com/xdm/channel-types/search | paid | clicks |
| Social - Marketing | https:/<span>/ns.adobe.com/xdm/channel-types/social | earned | clicks |
| Display | https:/<span>/ns.adobe.com/xdm/channel-types/display | paid | clicks |
| Email | https:/<span>/ns.adobe.com/xdm/channel-types/email | paid | clicks |
| Internal Referrer | https:/<span>/ns.adobe.com/xdm/channel-types/direct | owned | clicks |
| Display ViewThrough | https:/<span>/ns.adobe.com/xdm/channel-types/display | paid | impressions |
| QR Code Redirect | https:/<span>/ns.adobe.com/xdm/channel-types/direct | owned | clicks |
| Mobile | https:/<span>/ns.adobe.com/xdm/channel-types/mobile | owned | clicks |

### xdm:productListItems

This field is an array of items which represent products selected by a customer, including the product SKU, name, price, and quantity.

![](./images/data-preparation/productListItems.png)

**Example schema**

```json
[
  {
    "xdm:SKU": "1002352692",
    "xdm:name": "24-Watt 8-Light Chrome Integrated LED Bath Light",
    "xdm:currencyCode": "USD",
    "xdm:quantity": 1,
    "xdm:priceTotal": 159.45
  },
  {
    "xdm:SKU": "3398033623",
    "xdm:name": "16ft RGB LED Strips",
    "xdm:currencyCode": "USD",
    "xdm:quantity": 1,
    "xdm:priceTotal": 79.99
  }
]
```

For complete information regarding each of the required sub-fields for `xdm:productListItems`, please refer to the [commerce details schema](https://github.com/adobe/xdm/blob/797cf4930d5a80799a095256302675b1362c9a15/docs/reference/context/experienceevent-commerce.schema.md) spec.

### xdm:commerce

This field contains commerce-specific information about the ExperienceEvent, including the purchase order number and payment information.

![](./images/data-preparation/commerce.png)

**Example schema**

```json
{
    "xdm:order": {
      "xdm:purchaseID": "a8g784hjq1mnp3",
      "xdm:purchaseOrderNumber": "123456",
      "xdm:payments": [
        {
          "xdm:transactionID": "transactid-a111",
          "xdm:paymentAmount": 59,
          "xdm:paymentType": "credit_card",
          "xdm:currencyCode": "USD"
        },
        {
          "xdm:transactionId": "transactid-a222",
          "xdm:paymentAmount": 100,
          "xdm:paymentType": "gift_card",
          "xdm:currencyCode": "USD"
        }
      ],
      "xdm:currencyCode": "USD",
      "xdm:priceTotal": 159
    },
    "xdm:purchases": {
      "xdm:value": 1
    }
  }
```

For complete information regarding each of the required sub-fields for `xdm:commerce`, please refer to the [commerce details schema](https://github.com/adobe/xdm/blob/797cf4930d5a80799a095256302675b1362c9a15/docs/reference/context/experienceevent-commerce.schema.md) spec.

### xdm:web

This field represents web details relating to the ExperienceEvent, such as the interaction, page details, and referrer.

![](./images/data-preparation/web.png)

**Example schema**

```json
{
  "xdm:webPageDetails": {
    "xdm:siteSection": "Shopping Cart",
    "xdm:server": "example.com",
    "xdm:name": "Purchase Confirmation",
    "xdm:URL": "https://www.example.com/orderConf",
    "xdm:errorPage": false,
    "xdm:homePage": false,
    "xdm:pageViews": {
      "xdm:value": 1
    }
  },
  "xdm:webReferrer": {
    "xdm:URL": "https://www.example.com/checkout",
    "xdm:referrerType": "internal"
  }
}
```

For complete information regarding each of the required sub-fields for `xdm:productListItems`, please refer to the [ExperienceEvent web details schema](https://github.com/adobe/xdm/blob/797cf4930d5a80799a095256302675b1362c9a15/docs/reference/context/experienceevent-web.schema.md) spec.

### xdm:marketing

This field contains information related to marketing activities that are active with the touchpoint.

![](./images/data-preparation/marketing.png)

**Example schema**

```json
{
  "xdm:trackingCode": "marketingcampaign111",
  "xdm:campaignGroup": "50%_DISCOUNT",
  "xdm:campaignName": "50%_DISCOUNT_USA"
}
```

For complete information regarding each of the required sub-fields for `xdm:productListItems`, please refer to the [marketing sechma](https://github.com/adobe/xdm/blob/797cf4930d5a80799a095256302675b1362c9a15/docs/reference/context/marketing.schema.md) spec.

## Mapping and ingesting data

Once you have determined whether your marketing events data can be mapped to the CEE schema, the next step is to determine which data you to bring into Intelligent Services. All historical data used in Intelligent Services must fall within the minimum time window of four months of data, plus the number of days intended as a lookback period.

After deciding the range of data you want to send, contact Adobe Consulting Services to help map your data to the schema and ingest it into the service.

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

#### Add a primary identity namespace tag to the dataset

If you are bringing in data from Adobe Audience Manager, Adobe Analytics, or another external source, then you must add a `primaryIdentityNameSpace` tag to the dataset. This can be done by making a PATCH request to the Catalog Service API.

If you are ingesting data from a local CSV file, you can skip ahead to the next section on [mapping and ingesting data](#ingest).

Before following along with the example API call below, see the [getting started section](../catalog/api/getting-started.md) in the Catalog developer guide for important information regarding required headers.

**API format**

```http
PATCH /dataSets/{DATASET_ID}
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | The ID of the dataset you created previously. |

**Request**

Depending on which source you are ingesting data from, you must provide appropriate `primaryIdentityNamespace` and `sourceConnectorId` tag values in the request payload.

The following request adds the appropriate tag values for Audience Manager:

```shell
curl -X PATCH \
  https://platform.adobe.io/data/foundation/catalog/dataSets/5ba9452f7de80400007fc52a \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
        "tags": {
          "primaryIdentityNameSpace": ["mcid"],
          "sourceConnectorId": ["audiencemanager"],
        }
      }'
```

The following request adds the appropriate tag values for Analytics:

```shell
curl -X PATCH \
  https://platform.adobe.io/data/foundation/catalog/dataSets/5ba9452f7de80400007fc52a \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
        "tags": {
          "primaryIdentityNameSpace": ["aaid"],
          "sourceConnectorId": ["analytics"],
        }
      }'
```

>[!NOTE] For more information on working with identity namespaces in Platform, see the [identity namespace overview](../identity-service/namespaces.md).

**Response**

A successful response returns an array containing ID of the updated dataset. This ID should match the one sent in the PATCH request.

```json
[
    "@/dataSets/5ba9452f7de80400007fc52a"
]
```

#### Map and ingest data {#ingest}

After creating a CEE schema and dataset, you can start mapping your data tables to the schema and ingest that data into Platform. See the tutorial on [mapping a CSV file to an XDM schema](../ingestion/tutorials/map-a-csv-file.md) for steps on how to perform this in the UI. Once a dataset has been populated, the same dataset can be used to ingest additional data files.

If your data is stored in a supported third-party application, you can also choose to create a [source connector](../sources/home.md) to ingest your marketing events data into Platform in real time.

## Next steps {#next-steps}

This document provided general guidance on preparing your data for use in Intelligent Services. If you require additional consulting based on your use case, please contact Adobe Consulting Support.

Once you have successfully populated a dataset with your customer experience data, you can use Intelligent Services to generate insights. Refer to the following documents to get started:

* [Attribution AI overview](./attribution-ai/overview.md)
* [Customer AI overview](./customer-ai/overview.md)
