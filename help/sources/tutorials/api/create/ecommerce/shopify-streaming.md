---
title: Create A Streaming Source Connection and Dataflow For Shopify Data Using The Flow Service API
description: Learn how to create a streaming source connection and dataflow for Shopify data using the Flow Service API.
badge: Beta
hidefromtoc: y
hide: y
exl-id: d44414a1-48fb-41e2-8cec-23cad867ba7d
---
# Create a streaming source connection and dataflow for [!DNL Shopify] data using the Flow Service API

>[!NOTE]
>
>The [!DNL Shopify] streaming source is in beta. Please read the [sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled sources.

The following tutorial provides steps on how to create a streaming source connection and dataflow to stream data from [[!DNL Shopify]](https://www.shopify.com/) to Adobe Experience Platform using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started {#getting-started}

This guide requires a working understanding of the following components of Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes that partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Stream [!DNL Shopify] data to Platform using the Flow Service API

The following outlines the steps you need to make in order to create a source connection and a dataflow to stream your [!DNL Shopify] data to Platform.

### Create a source connection {#source-connection}

Create a source connection by making a POST request to the [!DNL Flow Service] API, while providing the connection spec ID of your source, details like name and description, and the format of your data.

**API format**

```https
POST /sourceConnections
```

**Request**

The following request creates a source connection for *YOURSOURCE*:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Shopify Streaming Source Connection",
      "providerId": "521eee4d-8cbe-4906-bb48-fb6bd4450033",
      "description": "Shopify Streaming Source Connection",
      "connectionSpec": {
          "id": "e77fd9d2-22a8-11ed-861d-0242ac120002",
          "version": "1.0"
      },
      "data": {
          "format": "json"
      }
    }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your source connection. Ensure that the name of your source connection is descriptive, as you can use this to look up information on your source connection. |
| `description` | An optional value that you can include to provide more information on your source connection. |
| `connectionSpec.id` | The connection specification ID that corresponds to your source. |
| `data.format` | The format of the [!DNL Shopify] data that you want to ingest. Currently, the only supported data format is `json`. |

**Response**

A successful response returns the unique identifier (`id`) of the newly created source connection. This ID is required in a later step to create a dataflow.

```json
{
     "id": "246d052c-da4a-494a-937f-a0d17b1c6cf5",
     "etag": "\"712a8c08-fda7-41c2-984b-187f823293d8\""
}
```

### Create a target XDM schema {#target-schema}

In order for the source data to be used in Platform, a target schema must be created to structure the source data according to your needs. The target schema is then used to create a Platform dataset in which the source data is contained.

A target XDM schema can be created by performing a POST request to the [Schema Registry API](https://www.adobe.io/experience-platform-apis/references/schema-registry/).

For detailed steps on how to create a target XDM schema, see the tutorial on [creating a schema using the API](../../../../../xdm/api/schemas.md).

### Create a target dataset {#target-dataset}

A target dataset can be created by performing a POST request to the [Catalog Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/catalog.yaml), providing the ID of the target schema within the payload.

For detailed steps on how to create a target dataset, see the tutorial on [creating a dataset using the API](../../../../../catalog/api/create-dataset.md).

### Create a target connection {#target-connection}

A target connection represents the connection to the destination where the ingested data is to be stored. To create a target connection, you must provide the fixed connection specification ID that corresponds to the data lake. This ID is: `c604ff05-7f1a-43c0-8e18-33bf874cb11c`.

You now have the unique identifiers, a target schema, a target dataset, and the connection spec ID to the data lake. Using these identifiers, you can create a target connection using the [!DNL Flow Service] API to specify the dataset that will contain the inbound source data.

**API format**

```https
POST /targetConnections
```

**Request**

The following request creates a target connection for [!DNL Shopify]:


```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/targetConnections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Shopify Streaming Target Connection",
      "description": "Shopify Streaming Target Connection",
      "connectionSpec": {
          "id": "c604ff05-7f1a-43c0-8e18-33bf874cb11c",
          "version": "1.0"
      },
      "data": {
          "format": "json",
          "schema": {
              "id": "{TARGET_XDM_SCHEMA}",
              "version": "application/vnd.adobe.xed-full+json;version=1"
          }
      },
      "params": {
          "dataSetId": "{TARGET_DATASET}"
      }
  }'
```


| Property | Description |
| -------- | ----------- |
| `name` | The name of your target connection. Ensure that the name of your target connection is descriptive, as you can use this to look up information on your target connection. |
| `description` | An optional value that you can include to provide more information on your target connection. |
| `connectionSpec.id` | The connection specification ID that corresponds to the data lake. This fixed ID is: `c604ff05-7f1a-43c0-8e18-33bf874cb11c`. |
| `data.format` | The format of the [!DNL Shopify] data that you want to bring to Platform. |
| `params.dataSetId` | The target dataset ID retrieved in a previous step. |


**Response**

A successful response returns the new target connection's unique identifier (`id`). This ID is required in later steps.

```json
{
     "id": "7c96c827-3ffd-460c-a573-e9558f72f263",
     "etag": "\"a196f685-f5e8-4c4c-bfbd-136141bb0c6d\""
}
```

### Create a mapping {#mapping}

In order for the source data to be ingested into a target dataset, it must first be mapped to the target schema that the target dataset adheres to. This is achieved by performing a POST request to [[!DNL Data Prep] API](https://www.adobe.io/experience-platform-apis/references/data-prep/) with data mappings defined within the request payload.

**API format**

```http
POST /conversion/mappingSets
```

**Request**

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/mappingSets' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "version": 0,
      "xdmSchema": "{TARGET_XDM_SCHEMA}",
      "xdmVersion": "1.0",
      "mappings": [
          {
              "destinationXdmPath": "person.name.firstName",
              "sourceAttribute": "firstName",
              "identity": false,
              "version": 0
          },
          {
              "destinationXdmPath": "person.name.lastName",
              "sourceAttribute": "lastName",
              "identity": false,
              "version": 0
          }
      ]
  }'
```

| Property | Description |
| --- | --- |
| `xdmSchema` | The ID of the [target XDM schema](#target-schema) generated in an earlier step. |
| `mappings.destinationXdmPath` | The destination XDM path where the source attribute is being mapped to. |
| `mappings.sourceAttribute` | The source attribute that needs to be mapped to a destination XDM path. |
| `mappings.identity` | A boolean value that designates whether the mapping set will be marked for [!DNL Identity Service]. |

**Response**

A successful response returns details of the newly created mapping including its unique identifier (`id`). This value is required in a later step to create a dataflow.

```json
{
    "id": "bf5286a9c1ad4266baca76ba3adc9366",
    "version": 0,
    "createdDate": 1597784069368,
    "modifiedDate": 1597784069368,
    "createdBy": "{CREATED_BY}",
    "modifiedBy": "{MODIFIED_BY}"
}
```

### Create a flow {#flow}

The last step towards bringing data from [!DNL Shopify] to Platform is to create a dataflow. By now, you have the following required values prepared:

* [Source connection ID](#source-connection)
* [Target connection ID](#target-connection)
* [Mapping ID](#mapping)

A dataflow is responsible for scheduling and collecting data from a source. You can create a dataflow by performing a POST request while providing the previously mentioned values within the payload.

**API format**

```http
POST /flows
```

**Request**

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/flows' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Shopify Streaming Dataflow",
      "description": "Shopify Streaming Dataflow",
      "flowSpec": {
          "id": "e77fde5a-22a8-11ed-861d-0242ac120002",
          "version": "1.0"
      },
      "sourceConnectionIds": [
          "246d052c-da4a-494a-937f-a0d17b1c6cf5"
      ],
      "targetConnectionIds": [
          "7c96c827-3ffd-460c-a573-e9558f72f263"
      ],
      "transformations": [
      {
        "name": "Mapping",
        "params": {
          "mappingId": "bf5286a9c1ad4266baca76ba3adc9366",
          "mappingVersion": 0
        }
      }
    ]
  }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your dataflow. Ensure that the name of your dataflow is descriptive, as you can use this to look up information on your dataflow. |
| `description` | An optional value that you can include to provide more information on your dataflow. |
| `flowSpec.id` | The flow specification ID required to create a dataflow. This fixed ID is: `e77fde5a-22a8-11ed-861d-0242ac120002`. |
| `flowSpec.version` | The corresponding version of the flow specification ID. This value defaults to `1.0`. |
| `sourceConnectionIds` | The [source connection ID](#source-connection) generated in an earlier step. |
| `targetConnectionIds` | The [target connection ID](#target-connection) generated in an earlier step. |
| `transformations` | This property contains the various transformations that are needed to be applied to your data. This property is required when bringing non-XDM-compliant data to Platform. |
| `transformations.name` | The name assigned to the transformation. |
| `transformations.params.mappingId` | The [mapping ID](#mapping) generated in an earlier step. |
| `transformations.params.mappingVersion` | The corresponding version of the mapping ID. This value defaults to `0`. |

**Response**

A successful response returns the ID (`id`) of the newly created dataflow. You can use this ID to monitor, update, or delete your dataflow.

```json
{
     "id": "993f908f-3342-4d9c-9f3c-5aa9a189ca1a",
     "etag": "\"510bb1d4-8453-4034-b991-ab942e11dd8a\""
}
```

### Get your streaming endpoint URL

With your dataflow created, you can now retrieve your streaming endpoint URL. You will use this endpoint URL to subscribe your source to a webhook, allowing your source to communicate with Experience Platform.

To retrieve your streaming endpoint URL, make a GET request to the `/flows` endpoint and provide the ID of your dataflow.

**API format**

```http
GET /flows/{FLOW_ID}
```

**Request**

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/flowservice/flows/993f908f-3342-4d9c-9f3c-5aa9a189ca1a' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns information on your dataflow, including your endpoint URL, marked as `inletUrl`.

```json
{
   "header":{
      "xactionId":"1658464615769:0062:161",
      "source":{
         "name":"shopify"
      },
      "sandboxId":"d537df80-c5d7-11e9-aafb-87c71c35cac8",
      "sandboxName":"prod",
      "originalTimestamp":1658464615770,
      "msgId":"1658464615769:0062:161",
      "msgVersion":"1.0",
      "traceContext":{
         "traceId":"ff3e7544618471eee6b934a4c5929d4e",
         "spanId":"74a759c5cc5f5a06",
         "isSampled":1.0
      },
      "_dcsMeta":{
         "inletId":"9d411a24aa3c0a3eded92bac6c64d0da986ee7a8212f87168c5fb42d9ddc3227",
         "authenticatedRequest":false,
         "debug":true
      }
   },
   "body":{
      "id":4135234371722,
      "admin_graphql_api_id":"gid://shopify/Order/4135234371722",
      "app_id":1354745,
      "browser_ip":null,
      "buyer_accepts_marketing":false,
      "cancel_reason":null,
      "cancelled_at":null,
      "cart_token":null,
      "checkout_id":21706716217482,
      "checkout_token":"b143503216124d50141fe0832fa3f4b0",
      "client_details":{
         "accept_language":null,
         "browser_height":null,
         "browser_ip":null,
         "browser_width":null,
         "session_hash":null,
         "user_agent":null
      },
      "closed_at":null,
      "confirmed":true,
      "contact_email":null,
      "created_at":"2022-07-22T00:36:48-04:00",
      "currency":"INR",
      "current_subtotal_price":"40000.00",
      "current_subtotal_price_set":{
         "shop_money":{
            "amount":"40000.00",
            "currency_code":"INR"
         },
         "presentment_money":{
            "amount":"40000.00",
            "currency_code":"INR"
         }
      },
      "current_total_discounts":"0.00",
      "current_total_discounts_set":{
         "shop_money":{
            "amount":"0.00",
            "currency_code":"INR"
         },
         "presentment_money":{
            "amount":"0.00",
            "currency_code":"INR"
         }
      },
      "current_total_duties_set":null,
      "current_total_price":"47200.00",
      "current_total_price_set":{
         "shop_money":{
            "amount":"47200.00",
            "currency_code":"INR"
         },
         "presentment_money":{
            "amount":"47200.00",
            "currency_code":"INR"
         }
      },
      "current_total_tax":"7200.00",
      "current_total_tax_set":{
         "shop_money":{
            "amount":"7200.00",
            "currency_code":"INR"
         },
         "presentment_money":{
            "amount":"7200.00",
            "currency_code":"INR"
         }
      },
      "customer_locale":null,
      "device_id":null,
      "discount_codes":[
          
      ],
      "email":"",
      "estimated_taxes":false,
      "financial_status":"paid",
      "fulfillment_status":null,
      "gateway":"manual",
      "landing_site":null,
      "landing_site_ref":null,
      "location_id":39129743498,
      "name":"#1005",
      "note":null,
      "note_attributes":[
          
      ],
      "number":5,
      "order_number":1005,
      "order_status_url":"https://connnectors-test.myshopify.com/31913214090/orders/ffd48198c78ef460177e44e22b19e6ab/authenticate?key=79a40d7da4b23d6a0beb2ba774f6ac83",
      "original_total_duties_set":null,
      "payment_gateway_names":[
         "manual"
      ],
      "phone":null,
      "presentment_currency":"INR",
      "processed_at":"2022-07-22T00:36:48-04:00",
      "processing_method":"manual",
      "reference":null,
      "referring_site":null,
      "source_identifier":null,
      "source_name":"shopify_draft_order",
      "source_url":null,
      "subtotal_price":"40000.00",
      "subtotal_price_set":{
         "shop_money":{
            "amount":"40000.00",
            "currency_code":"INR"
         },
         "presentment_money":{
            "amount":"40000.00",
            "currency_code":"INR"
         }
      },
      "tags":"",
      "tax_lines":[
         {
            "price":"7200.00",
            "rate":0.18,
            "title":"IGST",
            "price_set":{
               "shop_money":{
                  "amount":"7200.00",
                  "currency_code":"INR"
               },
               "presentment_money":{
                  "amount":"7200.00",
                  "currency_code":"INR"
               }
            },
            "channel_liable":false
         }
      ],
      "taxes_included":false,
      "test":false,
      "token":"ffd48198c78ef460177e44e22b19e6ab",
      "total_discounts":"0.00",
      "total_discounts_set":{
         "shop_money":{
            "amount":"0.00",
            "currency_code":"INR"
         },
         "presentment_money":{
            "amount":"0.00",
            "currency_code":"INR"
         }
      },
      "total_line_items_price":"40000.00",
      "total_line_items_price_set":{
         "shop_money":{
            "amount":"40000.00",
            "currency_code":"INR"
         },
         "presentment_money":{
            "amount":"40000.00",
            "currency_code":"INR"
         }
      },
      "total_outstanding":"0.00",
      "total_price":"47200.00",
      "total_price_set":{
         "shop_money":{
            "amount":"47200.00",
            "currency_code":"INR"
         },
         "presentment_money":{
            "amount":"47200.00",
            "currency_code":"INR"
         }
      },
      "total_price_usd":"589.95",
      "total_shipping_price_set":{
         "shop_money":{
            "amount":"0.00",
            "currency_code":"INR"
         },
         "presentment_money":{
            "amount":"0.00",
            "currency_code":"INR"
         }
      },
      "total_tax":"7200.00",
      "total_tax_set":{
         "shop_money":{
            "amount":"7200.00",
            "currency_code":"INR"
         },
         "presentment_money":{
            "amount":"7200.00",
            "currency_code":"INR"
         }
      },
      "total_tip_received":"0.00",
      "total_weight":800,
      "updated_at":"2022-07-22T00:36:49-04:00",
      "user_id":44968935562,
      "discount_applications":[
          
      ],
      "fulfillments":[
          
      ],
      "line_items":[
         {
            "id":10630730743946,
            "admin_graphql_api_id":"gid://shopify/LineItem/10630730743946",
            "fulfillable_quantity":1,
            "fulfillment_service":"manual",
            "fulfillment_status":null,
            "gift_card":false,
            "grams":800,
            "name":"Mobile Phones",
            "origin_location":{
               "id":3141069111434,
               "country_code":"IN",
               "province_code":"UP",
               "name":"Noida",
               "address1":"Noida",
               "address2":"",
               "city":"Noida",
               "zip":"201301"
            },
            "price":"40000.00",
            "price_set":{
               "shop_money":{
                  "amount":"40000.00",
                  "currency_code":"INR"
               },
               "presentment_money":{
                  "amount":"40000.00",
                  "currency_code":"INR"
               }
            },
            "product_exists":true,
            "product_id":4525859963018,
            "properties":[
                
            ],
            "quantity":1,
            "requires_shipping":true,
            "sku":"",
            "taxable":true,
            "title":"Mobile Phones",
            "total_discount":"0.00",
            "total_discount_set":{
               "shop_money":{
                  "amount":"0.00",
                  "currency_code":"INR"
               },
               "presentment_money":{
                  "amount":"0.00",
                  "currency_code":"INR"
               }
            },
            "variant_id":32045196640394,
            "variant_inventory_management":"shopify",
            "variant_title":"",
            "vendor":"Connnectors Test",
            "tax_lines":[
               {
                  "channel_liable":false,
                  "price":"7200.00",
                  "price_set":{
                     "shop_money":{
                        "amount":"7200.00",
                        "currency_code":"INR"
                     },
                     "presentment_money":{
                        "amount":"7200.00",
                        "currency_code":"INR"
                     }
                  },
                  "rate":0.18,
                  "title":"IGST"
               }
            ],
            "duties":[
                
            ],
            "discount_allocations":[
                
            ]
         }
      ],
      "payment_terms":null,
      "refunds":[
          
      ],
      "shipping_lines":[
          
      ]
   }
}
```

## Appendix 

The following section provides information on the steps you can take to monitor, update, and delete your dataflow.

### Monitor your dataflow

Once your dataflow has been created, you can monitor the data that is being ingested through it to see information on flow runs, completion status, and errors. For complete API examples, read the guide on [monitoring your sources dataflows using the API](https://experienceleague.adobe.com/docs/experience-platform/sources/api-tutorials/monitor.html).

### Update your dataflow

Update the details of your dataflow, such as its name and description, as well as its run schedule and associated mapping sets, by making a PATCH request to the `/flows` endpoint of the [!DNL Flow Service] API, while providing the ID of your dataflow. When making a PATCH request, you must provide your dataflow's unique `etag` in the `If-Match` header. For complete API examples, read the guide on [updating sources dataflows using the API](https://experienceleague.adobe.com/docs/experience-platform/sources/api-tutorials/update-dataflows.html)

### Update your account

Update the name, description, and credentials of your source account by performing a PATCH request to the [!DNL Flow Service] API while providing your base connection ID as a query parameter. When making a PATCH request, you must provide your source account's unique `etag` in the `If-Match` header. For complete API examples, read the guide on [updating your source account using the API](https://experienceleague.adobe.com/docs/experience-platform/sources/api-tutorials/update.html).

### Delete your dataflow

Delete your dataflow by performing a DELETE request to the [!DNL Flow Service] API while providing the ID of the dataflow you want to delete as part of the query parameter. For complete API examples, read the guide on [deleting your dataflows using the API](https://experienceleague.adobe.com/docs/experience-platform/sources/api-tutorials/delete-dataflows.html).

### Delete your account

Delete your account by performing a DELETE request to the [!DNL Flow Service] API while providing the base connection ID of the account you want to delete. For complete API examples, read the guide on [deleting your source account using the API](https://experienceleague.adobe.com/docs/experience-platform/sources/api-tutorials/delete.html).
