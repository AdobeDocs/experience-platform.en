---
title: Create a source connection and dataflow for SugarCRM Accounts & Contacts using the Flow Service API
description: Learn how to connect Adobe Experience Platform to SugarCRM Accounts & Contacts using the Flow Service API.
---
# Create a source connection and dataflow for [!DNL SugarCRM Accounts & Contacts] using the Flow Service API

The following tutorial walks you through the steps to create a [!DNL SugarCRM Accounts & Contacts] source connection and create a dataflow to bring [[!DNL SugarCRM]](https://www.sugarcrm.com/) accounts and contacts data to Adobe Experience Platform using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL SugarCRM] using the [!DNL Flow Service] API.

### Gather required credentials

In order to connect [!DNL SugarCRM Accounts & Contacts] to Platform, you must provide values for the following connection properties:

| Credential | Description | Example |
| --- | --- | --- |
| `host` | The SugarCRM API endpoint the source connects to. | `developer.salesfusion.com` |
| `username` | Your SugarCRM developer account username. | `abc.def@example.com@sugarmarketdemo000.com` |
| `password` | Your SugarCRM developer account password. | `123456789` |

## Connect [!DNL SugarCRM Accounts & Contacts] to Platform using the [!DNL Flow Service] API

The following outlines the steps you need to make in order to authenticate your [!DNL SugarCRM] source, create a source connection, and create a dataflow to bring your accounts and contacts data to Experience Platform.

### Create a base connection {#base-connection}

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL SugarCRM Accounts & Contacts] authentication credentials as part of the request body.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL SugarCRM Accounts & Contacts]:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "SugarCRM Accounts & Contacts base connection",
        "description": "Create a live inbound connection to your SugarCRM Accounts & Contacts instance, to ingest both historic and scheduled data into Experience Platform",
        "connectionSpec": {
            "id": "59a4b493-a615-40f9-bd38-f823d0909a2b",
            "version": "1.0"
        },
        "auth": {
            "specName": "OAuth2 Refresh Code",
            "params": {
                "host": "developer.salesfusion.com",
                "username": "{SUGARCRM_DEVELOPER_ACCOUNT_USERNAME}",
                "password": "{SUGARCRM_DEVELOPER_ACCOUNT_PASSWORD}"
            }
        }
    }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your base connection. Ensure that the name of your base connection is descriptive as you can use this to look up information on your base connection. |
| `description` | An optional value that you can include to provide more information on your base connection. |
| `connectionSpec.id` | The connection specification ID of your source. This ID can be retrieved after your source is registered and approved through the [!DNL Flow Service] API. |
| `auth.specName` | The authentication type that you are using to authenticate your source to Platform. |
| `auth.params.host` | The SugarCRM API host *developer.salesfusion.com* |
| `auth.params.username` | Your SugarCRM developer account username. |
| `auth.params.password` | Your SugarCRM developer account password. |

**Response**

A successful response returns the newly created base connection, including its unique connection identifier (`id`). This ID is required to explore your source's file structure and contents in the next step.

```json
{
     "id": "f5421911-6f6c-41c7-aafa-5d9d2ce51535",
     "etag": "\"4d08164f-0000-0200-0000-6368b7bf0000\""
}
```

### Explore your source {#explore}

Using the base connection ID you generated in the previous step, you can explore files and directories by performing GET requests.
Use the following calls to find the path of the file you wish to bring into [!DNL Platform]:

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=rest&object={OBJECT}&fileType={FILE_TYPE}&preview={PREVIEW}&sourceParams={SOURCE_PARAMS}
```

When performing GET requests to explore your source's file structure and contents, you must include the query parameters that are listed in the table below:


| Parameter | Description |
| --------- | ----------- |
| `{BASE_CONNECTION_ID}` | The base connection ID generated in the previous step. |
| `objectType=rest` | The type of object that you wish to explore. Currently, this value is always set to `rest`. |
| `{OBJECT}` | This parameter is required only when viewing a specific directory. Its value represents the path of the directory you wish to explore. For this source the value would be `json`. |
| `fileType=json` | The file type of the file you want to bring to Platform. Currently, `json` is the only supported file type. |
| `{PREVIEW}` | A boolean value that defines whether the contents of the connection supports preview. |
| `{SOURCE_PARAMS}` | Defines parameters for the source file you want to bring to Platform. To retrieve the accepted format-type for `{SOURCE_PARAMS}`, you must encode the entire string in base64. <br> [!DNL SugarCRM Accounts & Contacts] supports multiple APIs. Depending on which object type you are leveraging, pass one of the below : <ul><li>`accounts` : Companies with whom your organization has a relationship.</li><li>`contacts` : Individual people with whom your organization has an established relationship.</li></ul>|

The [!DNL SugarCRM Accounts & Contacts] supports multiple APIs. Depending on which object type you are leveraging the request to be sent is as below:

**Request**

>[!BEGIN TABS]

>[!TAB Accounts]

For [!DNL SugarCRM] Accounts API the value for `{SOURCE_PARAMS}` is passed as `{"object_type":"accounts"}`, encoded in base64 it equates to `eyJvYmplY3RfdHlwZSI6ImFjY291bnRzIn0=` as shown below.

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/connections/f5421911-6f6c-41c7-aafa-5d9d2ce51535/explore?objectType=rest&object=json&fileType=json&preview=true&sourceParams=eyJvYmplY3RfdHlwZSI6ImFjY291bnRzIn0=' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

>[!TAB Contacts]

For [!DNL SugarCRM] Contacts API the value for `{SOURCE_PARAMS}` is passed as `{"object_type":"contacts"}`, encoded in base64 it equates to `eyJvYmplY3RfdHlwZSI6ImNvbnRhY3RzIn0=` as shown below.

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/connections/f5421911-6f6c-41c7-aafa-5d9d2ce51535/explore?objectType=rest&object=json&fileType=json&preview=true&sourceParams=eyJvYmplY3RfdHlwZSI6ImNvbnRhY3RzIn0=' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

>[!ENDTABS]

**Response**

Similarly depending on which object type you are leveraging the response received is as below:
*Some records have been truncated to allow for a better presentation.*

>[!BEGIN TABS]

>[!TAB Accounts]

A successful response returns a structure as below. 

```json
{
    "format": "hierarchical",
    "schema": {
        "type": "object",
        "properties": {
            "next": {
                "type": "string"
            },
            "page_number": {
                "type": "integer",
                "minimum": -9007199254740992,
                "maximum": 9007199254740991
            },
            "previous": {},
            "total_count": {
                "type": "integer",
                "minimum": -9007199254740992,
                "maximum": 9007199254740991
            },
            "count": {
                "type": "integer",
                "minimum": -9007199254740992,
                "maximum": 9007199254740991
            },
            "results": {
                "type": "object",
                "properties": {
                    "owner": {
                        "type": "string"
                    },
                    "key_account": {
                        "type": "boolean"
                    },
                    "owner_id": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                    },
                    "custom_score_field": {
                        "type": "string"
                    },
                    "created_by": {
                        "type": "string"
                    },
                    "billing_city": {
                        "type": "string"
                    },
                    "account_id": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                    },
                    "phone": {
                        "type": "string"
                    },
                    "account_name": {
                        "type": "string"
                    },
                    "updated_by": {
                        "type": "string"
                    },
                    "updated_by_id": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                    },
                    "created_date": {
                        "type": "string"
                    },
                    "updated_date": {
                        "type": "string"
                    },
                    "created_by_id": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                    },
                    "account_score": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                    },
                    "account": {
                        "type": "string"
                    },
                    "contacts": {
                        "type": "string"
                    }
                }
            },
            "page_size": {
                "type": "integer",
                "minimum": -9007199254740992,
                "maximum": 9007199254740991
            }
        }
    },
    "data": [
        {
            "next": "https://developer.salesfusion.com/api/2.0/accounts/?date_field=updated_date&page=2",
            "page_number": 1,
            "total_count": 101148,
            "count": 101148,
            "results": {
                "account_id": 1,
                "account": "https://developer.salesfusion.com/api/2.0/accounts/1/",
                "account_name": "No Company",
                "owner_id": 1,
                "owner": "https://developer.salesfusion.com/api/2.0/users/1/",
                "created_date": "2022-06-22T23:35:00Z",
                "created_by": "https://developer.salesfusion.com/api/2.0/users/1/",
                "updated_date": "2019-08-29T15:18:00Z",
                "updated_by": "https://developer.salesfusion.com/api/2.0/users/1/",
                "contacts": "https://developer.salesfusion.com/api/2.0/accounts/1/contacts/",
                "created_by_id": 1,
                "updated_by_id": 1,
                "custom_score_field": "0",
                "account_score": 0,
                "key_account": false
            },
            "page_size": 100
        },
        {
            "next": "https://developer.salesfusion.com/api/2.0/accounts/?date_field=updated_date&page=2",
            "page_number": 1,
            "total_count": 101148,
            "count": 101148,
            "results": {
                "account_id": 2,
                "account": "https://developer.salesfusion.com/api/2.0/accounts/2/",
                "account_name": "360 Vacations",
                "owner_id": 45,
                "owner": "https://developer.salesfusion.com/api/2.0/users/45/",
                "phone": "+1 - 384 - 735 - 3844",
                "created_date": "2022-09-22T23:35:00Z",
                "created_by": "https://developer.salesfusion.com/api/2.0/users/45/",
                "updated_date": "2022-02-03T21:55:00Z",
                "updated_by": "https://developer.salesfusion.com/api/2.0/users/45/",
                "billing_city": "New York City",
                "contacts": "https://developer.salesfusion.com/api/2.0/accounts/2/contacts/",
                "created_by_id": 45,
                "updated_by_id": 45,
                "custom_score_field": "0",
                "account_score": 0,
                "key_account": false
            },
            "page_size": 100
        },
        {
            "next": "https://developer.salesfusion.com/api/2.0/accounts/?date_field=updated_date&page=2",
            "page_number": 1,
            "total_count": 101148,
            "count": 101148,
            "results": {
                "account_id": 50,
                "account": "https://developer.salesfusion.com/api/2.0/accounts/50/",
                "account_name": "Waverly Trading House",
                "owner_id": 40,
                "owner": "https://developer.salesfusion.com/api/2.0/users/40/",
                "phone": "+1 - 964 - 226 - 4552",
                "created_date": "2022-09-18T23:35:00Z",
                "created_by": "https://developer.salesfusion.com/api/2.0/users/40/",
                "updated_date": "2022-02-03T21:55:00Z",
                "updated_by": "https://developer.salesfusion.com/api/2.0/users/40/",
                "billing_city": "Minneapolis",
                "contacts": "https://developer.salesfusion.com/api/2.0/accounts/50/contacts/",
                "created_by_id": 40,
                "updated_by_id": 40,
                "custom_score_field": "0",
                "account_score": 0,
                "key_account": false
            },
            "page_size": 100
        }
    ]
}
```

>[!TAB Contacts]

A successful response returns a structure as below. 
*Some records have been truncated to allow for a better presentation.*

```json
{
    "format": "hierarchical",
    "schema": {
        "type": "object",
        "properties": {
            "next": {
                "type": "string"
            },
            "page_number": {
                "type": "integer",
                "minimum": -9007199254740992,
                "maximum": 9007199254740991
            },
            "previous": {},
            "total_count": {
                "type": "integer",
                "minimum": -9007199254740992,
                "maximum": 9007199254740991
            },
            "count": {
                "type": "integer",
                "minimum": -9007199254740992,
                "maximum": 9007199254740991
            },
            "results": {
                "type": "object",
                "properties": {
                    "opt_out": {
                        "type": "string"
                    },
                    "custom_score_field": {
                        "type": "string"
                    },
                    "contact_id": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                    },
                    "title": {
                        "type": "string"
                    },
                    "deleted_date": {},
                    "contact": {
                        "type": "string"
                    },
                    "account_name": {
                        "type": "string"
                    },
                    "first_name": {
                        "type": "string"
                    },
                    "del_date": {},
                    "email": {
                        "type": "string"
                    },
                    "delivered_date": {},
                    "owner": {
                        "type": "string"
                    },
                    "owner_name": {
                        "type": "string"
                    },
                    "last_name": {
                        "type": "string"
                    },
                    "created_by": {
                        "type": "string"
                    },
                    "account_id": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                    },
                    "opt_out_date": {},
                    "phone": {
                        "type": "string"
                    },
                    "crm_id": {
                        "type": "string"
                    },
                    "crm_type": {
                        "type": "string"
                    },
                    "updated_by": {
                        "type": "string"
                    },
                    "updated_by_id": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                    },
                    "deliverability_status": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                    },
                    "deliverability_message": {},
                    "created_date": {
                        "type": "string"
                    },
                    "updated_date": {
                        "type": "string"
                    },
                    "created_by_id": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                    },
                    "account": {
                        "type": "string"
                    },
                    "status": {
                        "type": "string"
                    }
                }
            },
            "page_size": {
                "type": "integer",
                "minimum": -9007199254740992,
                "maximum": 9007199254740991
            }
        }
    },
    "data": [
        {
            "next": "https://developer.salesfusion.com/api/2.0/contacts/?date_field=updated_date&page=2",
            "page_number": 1,
            "total_count": 135704,
            "count": 135704,
            "results": {
                "contact_id": 1,
                "contact": "https://developer.salesfusion.com/api/2.0/contacts/1/",
                "first_name": "Cynthia",
                "last_name": "Rose",
                "phone": "+1 - 000 - 000 - 000",
                "email": "test.user@hotmail.com",
                "account_id": 10,
                "account_name": "Sunyvale Reporting Ltd",
                "account": "https://developer.salesfusion.com/api/2.0/accounts/10/",
                "owner_name": "Sarah Smith",
                "owner": "https://developer.salesfusion.com/api/2.0/users/41/",
                "created_date": "2022-06-23T23:35:00Z",
                "created_by": "https://developer.salesfusion.com/api/2.0/users/41/",
                "updated_date": "2022-02-03T21:55:00Z",
                "updated_by": "https://developer.salesfusion.com/api/2.0/users/41/",
                "created_by_id": 41,
                "updated_by_id": 41,
                "crm_id": "f53c3982-84ea-11ec-874a-06a1e215b98e",
                "opt_out": "N",
                "crm_type": "Lead",
                "status": "Assigned",
                "title": "Director Operations",
                "custom_score_field": "0",
                "deliverability_status": 0
            },
            "page_size": 100
        },
        {
            "next": "https://developer.salesfusion.com/api/2.0/contacts/?date_field=updated_date&page=2",
            "page_number": 1,
            "total_count": 135704,
            "count": 135704,
            "results": {
                "contact_id": 2,
                "contact": "https://developer.salesfusion.com/api/2.0/contacts/2/",
                "email": "test.user@outlook.com",
                "created_date": "2022-06-21T23:35:00Z",
                "updated_date": "2022-02-03T21:55:00Z",
                "opt_out": "N",
                "crm_type": "Contact",
                "deliverability_status": 0
            },
            "page_size": 100
        },
        {
            "next": "https://developer.salesfusion.com/api/2.0/contacts/?date_field=updated_date&page=2",
            "page_number": 1,
            "total_count": 135704,
            "count": 135704,
            "results": {
                "contact_id": 3,
                "contact": "https://developer.salesfusion.com/api/2.0/contacts/3/",
                "first_name": "Jonathan",
                "last_name": "Ryan",
                "phone": "+1 - 000 - 000 - 0000",
                "email": "test.user@yahoo.com",
                "account_id": 52,
                "account_name": "Q3 ARVRO III PR",
                "account": "https://developer.salesfusion.com/api/2.0/accounts/52/",
                "owner_name": "Max Jensen",
                "owner": "https://developer.salesfusion.com/api/2.0/users/45/",
                "created_date": "2022-07-02T23:35:00Z",
                "created_by": "https://developer.salesfusion.com/api/2.0/users/45/",
                "updated_date": "2022-02-03T21:55:00Z",
                "updated_by": "https://developer.salesfusion.com/api/2.0/users/45/",
                "created_by_id": 45,
                "updated_by_id": 45,
                "crm_id": "f54a1840-84ea-11ec-9546-06a1e215b98e",
                "opt_out": "N",
                "crm_type": "Lead",
                "status": "New",
                "title": "Director Sales",
                "custom_score_field": "0",
                "deliverability_status": 0
            },
            "page_size": 100
    ]
}
```

>[!ENDTABS]

### Create a source connection {#source-connection}

You can create a source connection by making a POST request to the [!DNL Flow Service] API. A source connection consists of a connection ID, a path to the source data file, and a connection spec ID.

**API format**

```https
POST /sourceConnections
```

**Request**

The following request creates a source connection for [!DNL SugarCRM Accounts & Contacts]:

Depending on which object type you are leveraging, select from the tabs below:
>[!BEGIN TABS]

>[!TAB Accounts]

For [!DNL SugarCRM] Accounts API the `object_type` property value should be `accounts`.

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "SugarCRM Source Connection",
        "description": "SugarCRM Source Connection",
        "baseConnectionId": "f5421911-6f6c-41c7-aafa-5d9d2ce51535",
        "connectionSpec": {
            "id": "63d2b27b-69a5-45c9-a7fe-78148a25de3c",
            "version": "1.0"
        },
        "data": {
            "format": "json"
        },
        "params": {
            "object_type": "accounts",
            "path": "accounts"
        }
    }'
```

>[!TAB Contacts]

For [!DNL SugarCRM] Contacts API the `object_type` property value should be `contacts`.

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "SugarCRM Source Connection",
        "description": "SugarCRM Source Connection",
        "baseConnectionId": "f5421911-6f6c-41c7-aafa-5d9d2ce51535",
        "connectionSpec": {
            "id": "63d2b27b-69a5-45c9-a7fe-78148a25de3c",
            "version": "1.0"
        },
        "data": {
            "format": "json"
        },
        "params": {
            "object_type": "contacts",
            "path": "contacts"
        }
    }'
```

>[!ENDTABS]

| Property | Description |
| --- | --- |
| `name` | The name of your source connection. Ensure that the name of your source connection is descriptive as you can use this to look up information on your source connection. |
| `description` | An optional value that you can include to provide more information on your source connection. |
| `baseConnectionId` | The base connection ID of [!DNL SugarCRM Accounts & Contacts]. This ID was generated in an earlier step. |
| `connectionSpec.id` | The connection specification ID that corresponds to your source. |
| `data.format` | The format of the [!DNL SugarCRM Accounts & Contacts] data that you want to ingest. Currently, the only supported data format is `json`. |
| `object_type` | [!DNL SugarCRM Accounts & Contacts] supports multiple APIs. Depending on which object type you are leveraging, pass one of the below : <ul><li>`accounts` : Companies with whom your organization has a relationship.</li><li>`contacts` : Individual people with whom your organization has an established relationship.</li></ul> |
| `path` | This will have the same value which you select for *`object_type`*. |

**Response**

A successful response returns the unique identifier (`id`) of the newly created source connection. This ID is required in a later step to create a dataflow.

```json
{
    "id": "8f1fc72a-f562-4a1d-8597-85b5ca1b1cd3",
    "etag": "\"ed05f1e1-0000-0200-0000-6368b8710000\""
}
```

### Create a target XDM schema {#target-schema}

In order for the source data to be used in Platform, a target schema must be created to structure the source data according to your needs. The target schema is then used to create a Platform dataset in which the source data is contained.

A target XDM schema can be created by performing a POST request to the [Schema Registry API](https://developer.adobe.com/experience-platform-apis/references/schema-registry/).

For detailed steps on how to create a target XDM schema, see the tutorial on [creating a schema using the API](https://experienceleague.adobe.com/docs/experience-platform/xdm/api/schemas.html?lang=en#create).

### Create a target dataset {#target-dataset}

A target dataset can be created by performing a POST request to the [Catalog Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/catalog.yaml), providing the ID of the target schema within the payload.

For detailed steps on how to create a target dataset, see the tutorial on [creating a dataset using the API](https://experienceleague.adobe.com/docs/experience-platform/catalog/api/create-dataset.html?lang=en).

### Create a target connection {#target-connection}

A target connection represents the connection to the destination where the ingested data is to be stored. To create a target connection, you must provide the fixed connection specification ID that corresponds to the [!DNL Data Lake]. This ID is: `c604ff05-7f1a-43c0-8e18-33bf874cb11c`.

You now have the unique identifiers a target schema a target dataset and the connection spec ID to the [!DNL Data Lake]. Using these identifiers, you can create a target connection using the [!DNL Flow Service] API to specify the dataset that will contain the inbound source data.

**API format**

```https
POST /targetConnections
```

**Request**

The following request creates a target connection for [!DNL SugarCRM Accounts & Contacts]:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/targetConnections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "SugarCRM Target Connection Generic Rest",
        "description": "SugarCRM Target Connection Generic Rest",
        "connectionSpec": {
            "id": "63d2b27b-69a5-45c9-a7fe-78148a25de3c",
            "version": "1.0"
        },
        "data": {
            "format": "parquet_xdm",
            "schema": {
                "id": "https://ns.adobe.com/{TENANT_ID}/schemas/b156e6f818f923e048199173c45e55e20fd2487f5eb03d22",
                "version": "1.22"
            }
        },
        "params": {
            "dataSetId": "6365389d1d37d01c077a81da"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `name` | The name of your target connection. Ensure that the name of your target connection is descriptive as you can use this to look up information on your target connection. |
| `description` | An optional value that you can include to provide more information on your target connection. |
| `connectionSpec.id` | The connection specification ID that corresponds to [!DNL Data Lake]. This fixed ID is: `6b137bf6-d2a0-48c8-914b-d50f4942eb85`. |
| `data.format` | The format of the [!DNL SugarCRM Accounts & Contacts] data that you want to ingest. |
| `params.dataSetId` | The target dataset ID retrieved in a previous step. |

**Response**

A successful response returns the new target connection's unique identifier (`id`). This ID is required in later steps.

```json
{
    "id": "6b137bf6-d2a0-48c8-914b-d50f4942eb85",
    "etag": "\"8405a268-0000-0200-0000-6368b8c30000\""
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
    'https://platform.adobe.io/data/foundation/conversion/mappingSets' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "outputSchema": {
            "schemaRef": {
                "id": "https://ns.adobe.com/{TENANT_ID}/schemas/b156e6f818f923e048199173c45e55e20fd2487f5eb03d22",
                "contentType": "application/vnd.adobe.xed-full+json;version=1"
            }
        },
        "mappings": [
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.account",
            "destination": "_extconndev.account"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.account_id",
            "destination": "_extconndev.account_id"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.acount_name",
            "destination": "_extconndev.account_name"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.account_score",
            "destination": "_extconndev.account_score"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.billing_city",
            "destination": "_extconndev.billing_city"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.contacts",
            "destination": "_extconndev.contacts"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.created_by",
            "destination": "_extconndev.created_by"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.created_by_id",
            "destination": "_extconndev.created_by_id"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.created_date",
            "destination": "_extconndev.created_date"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.custom_score_field",
            "destination": "_extconndev.custom_score_field"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.key_account",
            "destination": "_extconndev.key_account"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.owner",
            "destination": "_extconndev.owner"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.owner_id",
            "destination": "_extconndev.owner_id"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.phone",
            "destination": "_extconndev.phone_no"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.updated_by",
            "destination": "_extconndev.updated_by"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.updated_by_id",
            "destination": "_extconndev.updated_by_id"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "results.updated_date",
            "destination": "_extconndev.updated_date"
        }
        ]
    }'
```

| Property | Description |
| --- | --- |
| `outputSchema.schemaRef.id` | The ID of the [target XDM schema](#target-schema) generated in an earlier step. |
| `mappings.sourceType` | The source attribute type that is being mapped. |
| `mappings.source` | The source attribute that needs to be mapped to a destination XDM path. |
| `mappings.destination` | The destination XDM path where the source attribute is being mapped to. |

**Response**

A successful response returns details of the newly created mapping including its unique identifier (`id`). This value is required in a later step to create a dataflow.

```json
{
    "id": "059c69f7207b4d7e9b48c47e2fd966a6",
    "version": 0,
    "createdDate": 1597784069368,
    "modifiedDate": 1597784069368,
    "createdBy": "{CREATED_BY}",
    "modifiedBy": "{MODIFIED_BY}"
}
```

### Create a flow {#flow}

The last step towards bringing data from [!DNL SugarCRM Accounts & Contacts] to Platform is to create a dataflow. By now, you have the following required values prepared:

* [Source connection ID](#source-connection)
* [Target connection ID](#target-connection)
* [Mapping ID](#mapping)

A dataflow is responsible for scheduling and collecting data from a source. You can create a dataflow by performing a POST request while providing the previously mentioned values within the payload.

To schedule an ingestion, you must first set the start time value to epoch time in seconds. Then, you must set the frequency value to one of `hour` or `day`. The interval value designates the period between two consecutive ingestions. Interval value should be set as `1` or `24` depending on `scheduleParams.frequency` selection of either `hour` or `day`.

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
        "name": "SugarCRM Connector Description Flow Generic Rest",
        "description": "SugarCRM Connector Description Flow Generic Rest",
        "flowSpec": {
            "id": "6499120c-0b15-42dc-936e-847ea3c24d72",
            "version": "1.0"
        },
        "sourceConnectionIds": [
            "8f1fc72a-f562-4a1d-8597-85b5ca1b1cd3"
        ],
        "targetConnectionIds": [
            "6b137bf6-d2a0-48c8-914b-d50f4942eb85"
        ],
        "transformations": [
            {
                "name": "Mapping",
                "params": {
                    "mappingId": "059c69f7207b4d7e9b48c47e2fd966a6",
                    "mappingVersion": "0"
                }
            }
        ],
        "scheduleParams": {
            "startTime": "1625040887",
            "frequency": "hour",
            "interval": 1
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
| `transformations` | This property contains the various transformations that are needed to be applied to your data. This property is required when bringing non-XDM-compliant data to Platform. |
| `transformations.name` | The name assigned to the transformation. |
| `transformations.params.mappingId` | The [mapping ID](#mapping) generated in an earlier step. |
| `transformations.params.mappingVersion` | The corresponding version of the mapping ID. This value defaults to `0`. |
| `scheduleParams.startTime` | This property contains information on the ingestion scheduling of the dataflow. |
| `scheduleParams.frequency` | The frequency at which the dataflow will collect data. Acceptable values include: `hour` or `day`. |
| `scheduleParams.interval` | The interval designates the period between two consecutive flow runs. The interval's value should be a non-zero integer. Interval value should be set as `1` or `24` depending on `scheduleParams.frequency` selection of either `hour` or `day`. |

**Response**

A successful response returns the ID (`id`) of the newly created dataflow. You can use this ID to monitor, update, or delete your dataflow.

```json
{
     "id": "fcd16140-81b4-422a-8f9a-eaa92796c4f4",
     "etag": "\"9200a171-0000-0200-0000-6368c1da0000\""
}
```

## Appendix 

The following section provides information on the steps you can to monitor, update, and delete your dataflow.

### Monitor your dataflow

Once your dataflow has been created, you can monitor the data that is being ingested through it to see information on flow runs, completion status, and errors. For complete API examples, read the guide on [monitoring your sources dataflows using the API](https://experienceleague.adobe.com/docs/experience-platform/sources/api-tutorials/monitor.html).

### Update your dataflow

Update the details of your dataflow, such as its name and description, as well as its run schedule and associated mapping sets by making a PATCH request to the `/flows` endpoint of [!DNL Flow Service] API, while providing the ID of your dataflow. When making a PATCH request, you must provide your dataflow's unique `etag` in the `If-Match` header. For complete API examples, read the guide on [updating sources dataflows using the API](https://experienceleague.adobe.com/docs/experience-platform/sources/api-tutorials/update-dataflows.html)

### Update your account

Update the name, description, and credentials of your source account by performing a PATCH request to the [!DNL Flow Service] API while providing your base connection ID as a query parameter. When making a PATCH request, you must provide your source account's unique `etag` in the `If-Match` header. For complete API examples, read the guide on [updating your source account using the API](https://experienceleague.adobe.com/docs/experience-platform/sources/api-tutorials/update.html).

### Delete your dataflow

Delete your dataflow by performing a DELETE request to the [!DNL Flow Service] API while providing the ID of the dataflow you want to delete as part of the query parameter. For complete API examples, read the guide on [deleting your dataflows using the API](https://experienceleague.adobe.com/docs/experience-platform/sources/api-tutorials/delete-dataflows.html).

### Delete your account

Delete your account by performing a DELETE request to the [!DNL Flow Service] API while providing the base connection ID of the account you want to delete. For complete API examples, read the guide on [deleting your source account using the API](https://experienceleague.adobe.com/docs/experience-platform/sources/api-tutorials/delete.html).