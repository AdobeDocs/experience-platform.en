---
title: Ingest payments data from your [!DNL Stripe] account to Experience Platform using APIs
description: Learn how to ingest payments data from your Stripe account to Experience Platform using the Flow Service API
badge: Beta
exl-id: a9cb3ef6-aab0-4a5b-894e-ce90b82f35a8
---
# Ingest payments data from your [!DNL Stripe] account to Experience Platform using APIs

>[!NOTE]
>
>The [!DNL Stripe] source is in beta. Read the [terms and conditions](../../../../home.md#terms-and-conditions) in the sources overview for more information on using beta-labeled sources.

Read the following tutorial to learn how to ingest your payments data from [!DNL Stripe] to Adobe Experience Platform using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Get started

This guide requires a working understanding of the following components of Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes that partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

### Authentication

Read the [[!DNL Stripe] overview](../../../../connectors/payments/stripe.md) for information on how to retrieve your authentication credentials.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Connect [!DNL Stripe] to Experience Platform

Follow the guide below to learn how to authenticate your [!DNL Stripe] source, create a source connection, and create a dataflow to bring your payments data to Experience Platform.

### Create a base connection {#base-connection}

A base connection retains information between your source and Experience Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. You can explore and navigate files from within your source using the base connection ID. Additionally, you can identify the specific items you wish to ingest, including details on the data types and formats of those items.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Stripe] authentication credentials as part of the request body.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Stripe]:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Stripe base connection",
      "description": "Authenticated base connection for Stripe",
      "connectionSpec": {
          "id": "cc2c31d6-7b8c-4581-b49f-5c8698aa3ab3",
          "version": "1.0"
      },
      "auth": {
          "specName": "OAuth2 Refresh Code",
          "params": {
            "accessToken": "{ACCESS_TOKEN}",
          }
      }
  }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your base connection. Ensure that the name of your base connection is descriptive as you can use this to look up information on your base connection. |
| `description` | An optional value that you can include to provide more information on your base connection. |
| `connectionSpec.id` | The source's connection spec ID. The connection spec ID for [!DNL Stripe] is `cc2c31d6-7b8c-4581-b49f-5c8698aa3ab3`, and this ID is fixed. |
| `auth.specName` | The authentication type that you are using to authenticate your source to Experience Platform. |
| `auth.params.accessToken` | The access token of your [!DNL Stripe] account. Read the [[!DNL Stripe] authentication guide](../../../../connectors/payments/stripe.md#prerequisites) for steps on how to retrieve your access token. |

**Response**

A successful response returns the newly created base connection, including its unique connection identifier (`id`). This ID is required to explore your source's file structure and contents in the next step.

```json
{
  "id": "a9950001-a386-4642-a0cd-5eaac6db5556",
  "etag": "\"dc01244d-0000-0200-0000-65ea4e500000\""
}
```

### Explore your source {#explore}

Once you have your base connection ID, you can now explore the content and structure of your source data by performing a GET request to the `/connections` endpoint while providing your base connection ID as a query parameter.

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=rest&object={OBJECT}&fileType={FILE_TYPE}&preview={PREVIEW}&sourceParams={SOURCE_PARAMS}
```

**Request**

When performing GET requests to explore your source's file structure and contents, you must include the query parameters that are listed in the table below:

| Parameter | Description |
| --------- | ----------- |
| `{BASE_CONNECTION_ID}` | The base connection ID generated in the previous step. |
| `objectType=rest` | The type of object you wish to explore. This value is always set to `rest`. |
| `{OBJECT}` | This parameter is required only when viewing a specific directory. Its value represents the path of the directory you wish to explore. For this source the value would be `json`. |
| `fileType=json` | The file type of the file you want to bring to Platform. Currently, `json` is the only supported file type. |
| `{PREVIEW}` | A boolean value that defines whether the contents of the connection supports preview. |
| `{SOURCE_PARAMS}` | A [!DNL Base64-]encoded string that points to the resource path you want to explore. Your resource path needs to be encoded in [!DNL Base64] in order to obtain the approved format for `{SOURCE_PARAMS}`. For example, `{"resourcePath":"charges"}` is encoded as `eyJyZXNvdXJjZVBhdGgiOiJjaGFyZ2VzIn0%3D`. The list of available resource paths include: <ul><li>`charges`</li><li>`subscriptions`</li><li>`refunds`</li><li>`balance_transactions`</li><li>`customers`</li><li>`prices`</li></ul> |

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/flowservice/connections/a9950001-a386-4642-a0cd-5eaac6db5556/explore?objectType=rest&object=json&fileType=json&preview=false&sourceParams=eyJyZXNvdXJjZVBhdGgiOiJjaGFyZ2VzIn0%3D' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a JSON structure like the following: 

+++Select to view the JSON payload

```json
{
  "format": "hierarchical",
  "schema": {
    "type": "object",
    "properties": {
      "data": {
        "type": "object",
        "properties": {
          "balance_transaction": {},
          "billing_details": {
            "type": "object",
            "properties": {
              "address": {
                "type": "object",
                "properties": {
                  "country": {},
                  "city": {},
                  "state": {},
                  "postal_code": {},
                  "line2": {},
                  "line1": {}
                }
              },
              "phone": {},
              "name": {},
              "email": {}
            }
          },
          "metadata": {
            "type": "object",
            "properties": {}
          },
          "livemode": {
            "type": "boolean"
          },
          "radar_options": {
            "type": "object",
            "properties": {}
          },
          "destination": {},
          "description": {
            "type": "string"
          },
          "failure_message": {},
          "fraud_details": {
            "type": "object",
            "properties": {}
          },
          "source": {},
          "amount_refunded": {
            "type": "integer",
            "minimum": -9007199254740992,
            "maximum": 9007199254740991
          },
          "statement_descriptor": {
            "type": "string"
          },
          "transfer_data": {},
          "receipt_url": {
            "type": "string"
          },
          "shipping": {},
          "review": {},
          "captured": {
            "type": "boolean"
          },
          "calculated_statement_descriptor": {
            "type": "string"
          },
          "currency": {
            "type": "string"
          },
          "refunded": {
            "type": "boolean"
          },
          "id": {
            "type": "string"
          },
          "outcome": {
            "type": "object",
            "properties": {
              "reason": {},
              "risk_level": {
                "type": "string"
              },
              "risk_score": {
                "type": "integer",
                "minimum": -9007199254740992,
                "maximum": 9007199254740991
              },
              "seller_message": {
                "type": "string"
              },
              "network_status": {
                "type": "string"
              },
              "type": {
                "type": "string"
              }
            }
          },
          "payment_method": {
            "type": "string"
          },
          "order": {},
          "dispute": {},
          "amount": {
            "type": "integer",
            "minimum": -9007199254740992,
            "maximum": 9007199254740991
          },
          "disputed": {
            "type": "boolean"
          },
          "failure_code": {},
          "transfer_group": {},
          "on_behalf_of": {},
          "created": {
            "type": "integer",
            "minimum": -9007199254740992,
            "maximum": 9007199254740991
          },
          "payment_method_details": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              },
              "card": {
                "type": "object",
                "properties": {
                  "country": {
                    "type": "string"
                  },
                  "last4": {
                    "type": "string"
                  },
                  "funding": {
                    "type": "string"
                  },
                  "mandate": {},
                  "wallet": {},
                  "exp_month": {
                    "type": "integer",
                    "minimum": -9007199254740992,
                    "maximum": 9007199254740991
                  },
                  "exp_year": {
                    "type": "integer",
                    "minimum": -9007199254740992,
                    "maximum": 9007199254740991
                  },
                  "overcapture": {
                    "type": "object",
                    "properties": {
                      "maximum_amount_capturable": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                      },
                      "status": {
                        "type": "string"
                      }
                    }
                  },
                  "amount_authorized": {
                    "type": "integer",
                    "minimum": -9007199254740992,
                    "maximum": 9007199254740991
                  },
                  "network": {
                    "type": "string"
                  },
                  "network_token": {
                    "type": "object",
                    "properties": {
                      "used": {
                        "type": "boolean"
                      }
                    }
                  },
                  "incremental_authorization": {
                    "type": "object",
                    "properties": {
                      "status": {
                        "type": "string"
                      }
                    }
                  },
                  "checks": {
                    "type": "object",
                    "properties": {
                      "cvc_check": {
                        "type": "string"
                      },
                      "address_line1_check": {},
                      "address_postal_code_check": {}
                    }
                  },
                  "extended_authorization": {
                    "type": "object",
                    "properties": {
                      "status": {
                        "type": "string"
                      }
                    }
                  },
                  "installments": {},
                  "capture_before": {
                    "type": "integer",
                    "minimum": -9007199254740992,
                    "maximum": 9007199254740991
                  },
                  "fingerprint": {
                    "type": "string"
                  },
                  "three_d_secure": {},
                  "brand": {
                    "type": "string"
                  },
                  "multicapture": {
                    "type": "object",
                    "properties": {
                      "status": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            }
          },
          "amount_captured": {
            "type": "integer",
            "minimum": -9007199254740992,
            "maximum": 9007199254740991
          },
          "source_transfer": {},
          "failure_balance_transaction": {},
          "receipt_number": {},
          "application": {},
          "receipt_email": {},
          "paid": {
            "type": "boolean"
          },
          "application_fee": {},
          "payment_intent": {
            "type": "string"
          },
          "invoice": {},
          "statement_descriptor_suffix": {},
          "application_fee_amount": {},
          "object": {
            "type": "string"
          },
          "customer": {
            "type": "string"
          },
          "status": {
            "type": "string"
          }
        }
      }
    }
  }
}
```

+++

### Create a source connection {#source-connection}

You can create a source connection by making a POST request to the `/sourceConnections` endpoint of the [!DNL Flow Service] API. A source connection consists of a connection ID, a path to the source data file, and a connection spec ID.

**API format**

```https
POST /sourceConnections
```

**Request**

The following request creates a source connection for [!DNL Stripe].

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Stripe Source Connection For Charges Data",
      "description": "Stripe source connection for charges data",
      "baseConnectionId": "a9950001-a386-4642-a0cd-5eaac6db5556",
      "connectionSpec": {
        "id": "cc2c31d6-7b8c-4581-b49f-5c8698aa3ab3",
        "version": "1.0"
      },
      "data": {
        "format": "json"
      },
      "params": {
        "resourcePath": "charges"
      },
  }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your source connection. Ensure that the name of your source connection is descriptive, as you can use this to look up information on your source connection. |
| `description` | An optional value that you can include to provide more information on your source connection. |
| `baseConnectionId` | The base connection ID of [!DNL Stripe]. This ID was generated in an earlier step. |
| `connectionSpec.id` | The connection spec ID that corresponds to your source. |
| `data.format` | The format of the [!DNL Stripe] data that you want to ingest. Currently, the only supported data format is `json`. |

A successful response returns the unique identifier (`id`) of the newly created source connection. This ID is required in a later step to create a dataflow.

```json
{
  "id": "abbfac4e-202c-4e04-902d-6f73e9041068",
  "etag": "\"0a033818-0000-0200-0000-65ea5a770000\""
}
```

### Create a target XDM schema {#target-schema}

In order for the source data to be used in Experience Platform, a target schema must be created to structure the source data according to your needs. The target schema is then used to create a Platform dataset in which the source data is contained.

A target XDM schema can be created by performing a POST request to the [Schema Registry API](https://developer.adobe.com/experience-platform-apis/references/schema-registry/).

For detailed steps on how to create a target XDM schema, see the tutorial on [creating a schema using the API](../../../../../xdm/api/schemas.md#create-a-schema).

### Create a target dataset {#target-dataset}

A target dataset can be created by performing a POST request to the [Catalog Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/catalog.yaml), providing the ID of the target schema within the payload.

For detailed steps on how to create a target dataset, see the tutorial on [creating a dataset using the API](../../../../../catalog/api/create-dataset.md).

### Create a target connection {#target-connection}

A target connection represents the connection to the destination where the ingested data is to be stored. To create a target connection, you must provide the fixed connection spec ID that corresponds to the data lake. This ID is: `c604ff05-7f1a-43c0-8e18-33bf874cb11c`.

You now have the unique identifiers a target schema a target dataset and the connection spec ID to the data lake. Using these identifiers, you can create a target connection using the [!DNL Flow Service] API to specify the dataset that will contain the inbound source data.

**API format**

```https
POST /targetConnections
```

**Request**

The following request creates a target connection for [!DNL Stripe]:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/targetConnections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Stripe Target Connection For Charges Data",
      "description": "Stripe target connection for charges data",
      "connectionSpec": {
          "id": "c604ff05-7f1a-43c0-8e18-33bf874cb11c",
          "version": "1.0"
      },
      "data": {
          "format": "parquet_xdm",
          "schema": {
              "id": "https://ns.adobe.com/{ORG_ID}/schemas/5f76be8c4e4b847fdac13ca42aa6b596a89a5b91dea48b16",
              "version": "application/vnd.adobe.xed-full+json;version=1.3"
          }
      },
      "params": {
          "dataSetId": "65e622315f78042c9e8166e8"
      }
  }'
```

| Property | Description |
| -------- | ----------- |
| `name` | The name of your target connection. Ensure that the name of your target connection is descriptive as you can use this to look up information on your target connection. |
| `description` | An optional value that you can include to provide more information on your target connection. |
| `connectionSpec.id` | The connection specification ID that corresponds to data lake. This fixed ID is: `c604ff05-7f1a-43c0-8e18-33bf874cb11c`. |
| `data.format` | The format of the [!DNL Stripe] data that you want to ingest. |
| `params.dataSetId` | The ID of your target dataset. This ID is generated by [creating a target dataset](#target-dataset). |

**Response**

A successful response returns the new target connection's unique identifier (`id`). This ID is required in later steps.

```json
{
  "id": "69879751-ba43-48df-8cd0-39d2bb76a5b8",
  "etag": "\"4b02ef5b-0000-0200-0000-65ea5f730000\""
}
```

### Create a mapping {#mapping}

In order for the source data to be ingested into a target dataset, it must first be mapped to the target schema that the target dataset adheres to. This is achieved by performing a POST request to the [[!DNL Data Prep] API](https://www.adobe.io/experience-platform-apis/references/data-prep/) with data mappings defined within the request payload.

**API format**

```http
POST /conversion/mappingSets
```

The following request creates a mapping for [!DNL Stripe].

+++Select to view request example

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/conversion/mappingSets' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "version": 0,
      "xdmSchema": "https://ns.adobe.com/exchangesandboxcharlie/schemas/5f76be8c4e4b847fdac13ca42aa6b596a89a5b91dea48b16",
      "xdmVersion": "1.0",
      },
      "mappings":[
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.id",
            "sourceAttribute":"data.id",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.refunded",
            "sourceAttribute":"data.refunded",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.disputed",
            "sourceAttribute":"data.disputed",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.payment_method_details.card.last4",
            "sourceAttribute":"data.payment_method_details.card.last4",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.livemode",
            "sourceAttribute":"data.livemode",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.status",
            "sourceAttribute":"data.status",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.payment_method_details.card.overcapture.maximum_amount_capturable",
            "sourceAttribute":"data.payment_method_details.card.overcapture.maximum_amount_capturable",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.receipt_url",
            "sourceAttribute":"data.receipt_url",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.payment_method_details.card.fingerprint",
            "sourceAttribute":"data.payment_method_details.card.fingerprint",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.payment_intent",
            "sourceAttribute":"data.payment_intent",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.payment_method_details.card.overcapture.status",
            "sourceAttribute":"data.payment_method_details.card.overcapture.status",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.payment_method_details.card.network_token.used",
            "sourceAttribute":"data.payment_method_details.card.network_token.used",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.payment_method_details.card.funding",
            "sourceAttribute":"data.payment_method_details.card.funding",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.amount",
            "sourceAttribute":"data.amount",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.customer",
            "sourceAttribute":"data.customer",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.payment_method_details.card.incremental_authorization.status",
            "sourceAttribute":"data.payment_method_details.card.incremental_authorization.status",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.payment_method_details.card.multicapture.status",
            "sourceAttribute":"data.payment_method_details.card.multicapture.status",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.amount_captured",
            "sourceAttribute":"data.amount_captured",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.payment_method",
            "sourceAttribute":"data.payment_method",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.object",
            "sourceAttribute":"data.object",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.captured",
            "sourceAttribute":"data.captured",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.created",
            "sourceAttribute":"data.created",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.paid",
            "sourceAttribute":"data.paid",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.amount_refunded",
            "sourceAttribute":"data.amount_refunded",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.currency",
            "sourceAttribute":"data.currency",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.payment_method_details.card.country",
            "sourceAttribute":"data.payment_method_details.card.country",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.payment_method_details.card.exp_year",
            "sourceAttribute":"data.payment_method_details.card.exp_year",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.payment_method_details.card.amount_authorized",
            "sourceAttribute":"data.payment_method_details.card.amount_authorized",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.payment_method_details.card.network",
            "sourceAttribute":"data.payment_method_details.card.network",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.payment_method_details",
            "sourceAttribute":"data.payment_method_details",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.payment_method_details.card.exp_month",
            "sourceAttribute":"data.payment_method_details.card.exp_month",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.calculated_statement_descriptor",
            "sourceAttribute":"data.calculated_statement_descriptor",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.payment_method_details.card.brand",
            "sourceAttribute":"data.payment_method_details.card.brand",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.balance_transaction",
            "sourceAttribute":"data.balance_transaction",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.payment_method_details.card.extended_authorization.status",
            "sourceAttribute":"data.payment_method_details.card.extended_authorization.status",
            "identity":false,
            "version":0
        },
        {
            "destinationXdmPath":"_{ORG_ID}.charges_data.outcome",
            "sourceAttribute":"data.outcome",
            "identity":false,
            "version":0
        }
      ]
}
```


| Property | Description |
| --- | --- |
| `xdmSchema` | The ID of your target XDM schema. This ID is generated by creating a [target XDM schema](#target-schema). |
| `destinationXdmPath` | The XDM field that the source attribute is being mapped to. |
| `sourceAttribute` | The source data field that is being mapped. |
| `identity` | A boolean value that defines whether the field will be persisted in [Identity Service](../../../../../identity-service/home.md). |
| `version` | The mapping version that you are using. |

+++

**Response**

A successful response returns details of the newly created mapping including its unique identifier (`id`). This value is required in a later step to create a dataflow.

```json
{
  "id": "f4aad280fdec4770b7e33066945919d8",
  "version": 0,
  "createdDate": 1709860257007,
  "modifiedDate": 1709860257007,
  "createdBy": "{CREATED_BY}",
  "modifiedBy": "{MODIFIED_BY}"
}
```

### Create a flow {#flow}

The last step towards bringing data from [!DNL Stripe] to Platform is to create a dataflow. By now, you have the following required values prepared:

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
    "name": "Stripe Connector Flow Generic Rest",
    "description": "Stripe Connector Description Flow Generic Rest",
    "flowSpec": {
        "id": "6499120c-0b15-42dc-936e-847ea3c24d72",
        "version": "1.0"
    },
    "sourceConnectionIds": [
        "abbfac4e-202c-4e04-902d-6f73e9041068"
    ],
    "targetConnectionIds": [
        "69879751-ba43-48df-8cd0-39d2bb76a5b8"
    ],
    "transformations": [
        {
            "name": "Mapping",
            "params": {
                "mappingId": "f4aad280fdec4770b7e33066945919d8",
                "mappingVersion": 0
            }
        }
    ],
    "scheduleParams": {
        "startTime": "1710267858",
        "frequency": "minute",
        "interval": {{interval}}
    }
}'
```

| Property | Description |
| --- | --- |
| `name` | The name of your dataflow. Ensure that the name of your dataflow is descriptive as you can use this to look up information on your dataflow. |
| `description` | An optional value that you can include to provide more information on your dataflow. |
| `flowSpec.id` | The flow specification ID required to create a dataflow. This fixed ID is: `6499120c-0b15-42dc-936e-847ea3c24d72`. |
| `flowSpec.version` | The corresponding version of the flow specification ID. This value defaults to `1.0`. |
| `sourceConnectionIds` | The [source connection ID](#source-connection) generated in an earlier step. |
| `targetConnectionIds` | The [target connection ID](#target-connection) generated in an earlier step. |
| `transformations` | This property contains the various transformations that are needed to be applied to your data. This property is required when bringing non-XDM-compliant data to Experience Platform. |
| `transformations.name` | The name assigned to the transformation. |
| `transformations.params.mappingId` | The [mapping ID](#mapping) generated in an earlier step. |
| `transformations.params.mappingVersion` | The corresponding version of the mapping ID. This value defaults to `0`. |
| `scheduleParams.startTime` | The time at which your dataflow will begin. You must provide the start time value in the format of a Unix timestamp.  |
| `scheduleParams.frequency` | The frequency at which the dataflow will collect data. You can configure the ingestion frequency to:  <ul><li>**Once**: Set your frequency to `once` to create a one-time ingestion. Configurations for interval and backfill are unavailable when creating a one-time ingestion dataflow. By default, the scheduling frequency is set to once.</li><li>**Minute**: Set your frequency to `minute` to schedule your dataflow to ingest data on a per-minute basis.</li><li>**Hour**:Set your frequency to `hour` to schedule your dataflow to ingest data on a per-hour basis.</li><li>**Day**: Set your frequency to `day` to schedule your dataflow to ingest data on a per-day basis.</li><li>**Week**: Set your frequency to `week` to schedule your dataflow to ingest data on a per-week basis.</li></ul> |
| `scheduleParams.interval` | The interval designates the period between two consecutive flow runs. For example, if you set your frequency to day and configure the interval to 15, then your dataflow will run every 15 days. The interval value should be a non-zero integer.|

**Response**

A successful response returns the ID (`id`) of the newly created dataflow. You can use this ID to monitor, update, or delete your dataflow.

```json
{
     "id": "84c64142-1741-4b0b-95a9-65644eba0cf6",
     "etag": "\"3901770b-0000-0200-0000-655708970000\""
}
```

## Appendix 

The following section provides information on the steps you can take to monitor, update, and delete your dataflow.

### Monitor your dataflow

Once your dataflow has been created, you can monitor the data that is being ingested through it to see information on flow runs, completion status, and errors. For complete API examples, read the guide on [monitoring your sources dataflows using the API](../../monitor.md).

### Update your dataflow

Update the details of your dataflow, such as its name and description, as well as its run schedule and associated mapping sets, by making a PATCH request to the /flows endpoint of the [!DNL Flow Service] API while providing the ID of your dataflow. When making a PATCH request, you must provide your dataflow's unique `etag` in the `If-Match` header. For complete API examples, read the guide on [updating sources dataflows using the API](../../update-dataflows.md).

### Update your account

Update the name, description, and credentials of your source account by performing a PATCH request to the [!DNL Flow Service] API while providing your base connection ID as a query parameter. When making a PATCH request, you must provide your source account's unique `etag` in the `If-Match` header. For complete API examples, read the guide on [updating your source account using the API](../../update.md).

### Delete your dataflow

Delete your dataflow by performing a DELETE request to the [!DNL Flow Service] API while providing the ID of the dataflow you want to delete as part of the query parameter. For complete API examples, read the guide on [deleting your dataflows using the API](../../delete-dataflows.md).

### Delete your account

Delete your account by performing a DELETE request to the [!DNL Flow Service] API while providing the base connection ID of the account you want to delete. For complete API examples, read the guide on [deleting your source account using the API](../../delete.md).
