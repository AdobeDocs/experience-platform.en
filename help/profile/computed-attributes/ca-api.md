---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
title: Computed Attributes API Endpoint
topic-legacy: guide
type: Documentation
description: In Adobe Experience Platform, computed attributes are functions used to aggregate event-level data into profile-level attributes. These functions are automatically computed so that they can be used across segmentation, activation, and personalization. This guide shows how to create, view, update, and delete computed attributes using the Real-time Customer Profile API.
exl-id: 6b35ff63-590b-4ef5-ab39-c36c39ab1d58
---
# (Alpha) Computed attributes API endpoint

>[!IMPORTANT]
>
>The computed attribute functionality outlined in this document is currently in alpha and is not available to all users. The documentation and the functionality are subject to change.

Computed attributes are functions used to aggregate event-level data into profile-level attributes. These functions are automatically computed so that they can be used across segmentation, activation, and personalization. This guide includes sample API calls for performing basic CRUD operations using the `/computedAttributes` endpoint. 

To learn more about computed attributes, please begin by reading the [computed attributes overview](overview.md).

## Getting started

The API endpoint used in this guide is part of the [Real-time Customer Profile API](https://www.adobe.com/go/profile-apis-en). 

Before continuing, please review the [Profile API getting started guide](../api/getting-started.md) for links to recommended documentation, a guide to reading the sample API calls that appear in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Configure a computed attribute field

In order to create a computed attribute, you first need to identify the field in a schema that will hold the computed attribute value. 

Please refer to the documentation on [configuring a computed attribute](configure-api.md) for a complete end-to-end guide to creating a computed attribute field in a schema.

>[!WARNING]
>
>In order to proceed with the API guide you must have a computed attribute field configured.

## Create a computed attribute {#create-a-computed-attribute}

With your computed attribute field defined in your Profile enabled schema, you can now configure a computed attribute. If you have not done this already, please follow the workflow outlined in the [configuring a computed attribute](configure-api.md) documentation.

To create a computed attribute, begin by making a POST request to the `/config/computedAttributes` endpoint with a request body containing the details of the computed attribute that you wish to create.

**API format**

```http
POST /config/computedAttributes
```

**Request**

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/config/computedAttributes \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}'\
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "name": "birthdayCurrentMonth",
        "path": "_{TENANT_ID}",
        "description": "Computed attribute to capture if the customer birthday is in the current month.",
        "expression": {
            "type": "PQL", 
            "format": "pql/text", 
            "value": "person.birthDate.getMonth() = currentMonth()"
        },
        "schema": 
          {
            "name":"_xdm.context.profile"
          }
          
      }'
```

|Property|Description|
|---|---|
|`name`|The name of the computed attribute field, as a string.|
|`path`|The path to the field containing the computed attribute. This path is found within the `properties` attribute of the schema and should NOT include the field name in the path. When writing the path, omit the multiple levels of `properties` attributes.|
|`{TENANT_ID}`|If you are unfamiliar with your tenant ID, please refer to the steps for finding your tenant ID in the [Schema Registry developer guide](../../xdm/api/getting-started.md#know-your-tenant_id).|
|`description`|A description of the computed attribute. This is especially useful once multiple computed attributes have been defined as it will help others within your IMS Organization to determine the correct computed attribute to use.|
|`expression.value`|A valid [!DNL Profile Query Language] (PQL) expression. Computed attributes currently support the following functions: sum, count, min, max, and boolean. For a list of sample expressions, refer to the [sample PQL expressions](expressions.md) documentation.|
|`schema.name`|The class upon which the schema containing the computed attribute field is based. Example: `_xdm.context.experienceevent` for a schema based on the XDM ExperienceEvent class.|

**Response**

A successfully created computed attribute returns HTTP Status 200 (OK) and a response body containing the details of the newly created computed attribute. These details include a unique, read-only, system-generated `id` that can be used for referencing the computed attribute during other API operations.

```json
{
    "id": "2afcf410-450e-4a39-984d-2de99ab58877",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "{SANDBOX_ID}",
        "sandboxName": "prod",
        "type": "production",
        "default": true
    },
    "name": "birthdayCurrentMonth",
    "path": "_{TENANT_ID}",
    "positionPath": [
        "_{TENANT_ID}"
    ],
    "description": "Computed attribute to capture if the customer birthday is in the current month.",
    "expression": {
        "type": "PQL",
        "format": "pql/text",
        "value": "person.birthDate.getMonth() = currentMonth()"
    },
    "schema": {
        "name": "_xdm.context.profile"
    },
    "returnSchema": {
        "meta:xdmType": "string"
    },
    "definedOn": [
        {
            "meta:resourceType": "unions",
            "meta:containerId": "tenant",
            "$ref": "https://ns.adobe.com/xdm/context/profile__union"
        }
    ],
    "encodedDefinedOn":"?\b?VR)JMS?R?())(????+?KL?OJ?K???H??O??+I?(?/(?O??I??/????S?8{?E:",
    "dependencies": [],
    "dependents": [],
    "active": true,
    "type": "ComputedAttribute",
    "createEpoch": 1572555223,
    "updateEpoch": 1572555225
}
```

|Property|Description|
|---|---|
|`id`|A unique, read-only, system-generated ID that can be used for referencing the computed attribute during other API operations.|
|`imsOrgId`| The IMS Organization related to the computed attribute, should match the value sent in the request.|
|`sandbox`|The sandbox object contains details of the sandbox within which the computed attribute was configured. This information is drawn from the sandbox header sent in the request. For more information, please see the [sandboxes overview](../../sandboxes/home.md).|
|`positionPath`|An array containing the deconstructed `path` to the field that was sent in the request.|
|`returnSchema.meta:xdmType`|The type of the field where the computed attribute will be stored.|
|`definedOn`|An array showing the union schemas upon which the computed attribute has been defined. Contains one object per union schema, meaning there may be multiple objects within the array if the computed attribute has been added to multiple schemas based on different classes.|
|`active`|A boolean value displaying whether or not the computed attribute is currently active. By default the value is `true`.|
|`type`|The type of resource created, in this case "ComputedAttribute" is the default value.|
|`createEpoch` and `updateEpoch`|The time at which the computed attribute was created and last updated, respectively.|

## Create a computed attribute that references existing computed attributes

It is also possible to create a computed attribute that references existing computed attributes. To do so, begin by making a POST request to the `/config/computedAttributes` endpoint. The request body will contain references to the computed attributes in the `expression.value` field as shown in the example that follows. 

**API format**

```http
POST /config/computedAttributes
```

**Request**

In this example, two computed attributes have already been created and will be used to define a third. The existing computed attributes are:

* **`totalSpend`:** Captures the total dollar amount that a customer has spent.
* **`countPurchases`:** Counts the number of purchases that a customer has made.

The request below references the two existing computed attributes, using valid PQL to divide in order to calculate the new `averageSpend` computed attribute.

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/config/computedAttributes \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}'\
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "name": "averageSpend",
        "path": "_{TENANT_ID}.purchaseSummary",
        "description": "Computed attribute to capture the average dollar amount that a customer spends on each purchase.",
        "expression": {
            "type": "PQL", 
            "format": "pql/text", 
            "value": "_{TENANT_ID}.purchaseSummary.totalSpend/_{TENANT_ID}.purchaseSummary.countPurchases"
        },
        "schema": 
          {
            "name":"_xdm.context.profile"
          }
          
      }'
```

|Property|Description|
|---|---|
|`name`|The name of the computed attribute field, as a string.|
|`path`|The path to the field containing the computed attribute. This path is found within the `properties` attribute of the schema and should NOT include the field name in the path. When writing the path, omit the multiple levels of `properties` attributes.|
|`{TENANT_ID}`|If you are unfamiliar with your tenant ID, please refer to the steps for finding your tenant ID in the [Schema Registry developer guide](../../xdm/api/getting-started.md#know-your-tenant_id).|
|`description`|A description of the computed attribute. This is especially useful once multiple computed attributes have been defined as it will help others within your IMS Organization to determine the correct computed attribute to use.|
|`expression.value`|A valid PQL expression. Computed attributes currently support the following functions: sum, count, min, max, and boolean. For a list of sample expressions, refer to the [sample PQL expressions](expressions.md) documentation.<br/><br/>In this example, the expression references two existing computed attributes. The attributes are referenced using the `path` and the `name` of the computed attribute as they appear in the schema in which the computed attributes were defined. For example, the `path` of the first referenced computed attribute is `_{TENANT_ID}.purchaseSummary` and the `name` is `totalSpend`.|
|`schema.name`|The class upon which the schema containing the computed attribute field is based. Example: `_xdm.context.experienceevent` for a schema based on the XDM ExperienceEvent class.|

**Response**

A successfully created computed attribute returns HTTP Status 200 (OK) and a response body containing the details of the newly created computed attribute. These details include a unique, read-only, system-generated `id` that can be used for referencing the computed attribute during other API operations.

```json
{
    "id": "2afcf410-450e-4a39-984d-2de99ab58877",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "{SANDBOX_ID}",
        "sandboxName": "{SANDBOX_NAME}",
        "type": "production",
        "default": true
    },
    "name": "averageSpend",
    "path": "_{TENANT_ID}.purchaseSummary",
    "positionPath": [
        "_{TENANT_ID}",
        "purchaseSummary"
    ],
    "description": "Computed attribute to capture the average dollar amount that a customer spends on each purchase.",
    "expression": {
            "type": "PQL", 
            "format": "pql/text", 
            "value":  "_{TENANT_ID}.purchaseSummary.totalSpend/_{TENANT_ID}.purchaseSummary.countPurchases"
    },
    "schema": {
        "name": "_xdm.context.profile"
    },
    "returnSchema": {
        "meta:xdmType": "number"
    },
    "definedOn": [
        {
          "meta:resourceType": "unions",
          "meta:containerId": "tenant",
          "$ref": "https://ns.adobe.com/xdm/context/profile__union"
        }
    ],
    "encodedDefinedOn":"\bVR)JMSR())(+KLOJKկHO+I(/(OI/S8{E:",
    "dependencies": [
        "c08a92f3-2418-4a3d-89d0-96f15fda3e5d",
        "4ed9e3aa-57ae-4705-9e8a-7fba9a6a7010"
    ],
    "dependents": [],
    "active": true,
    "evaluationInfo": {
        "batch": {
          "enabled": false
        },
        "continuous": {
          "enabled": true
        },
        "synchronous": {
          "enabled": false
        }
      },
    "type": "ComputedAttribute",
    "createEpoch": 1613696592,
    "updateEpoch": 1613696593
}
```

|Property|Description|
|---|---|
|`id`|A unique, read-only, system-generated ID that can be used for referencing the computed attribute during other API operations.|
|`imsOrgId`| The IMS Organization related to the computed attribute, should match the value sent in the request.|
|`sandbox`|The sandbox object contains details of the sandbox within which the computed attribute was configured. This information is drawn from the sandbox header sent in the request. For more information, please see the [sandboxes overview](../../sandboxes/home.md).|
|`positionPath`|An array containing the deconstructed `path` to the field that was sent in the request.|
|`returnSchema.meta:xdmType`|The type of the field where the computed attribute will be stored.|
|`definedOn`|An array showing the union schemas upon which the computed attribute has been defined. Contains one object per union schema, meaning there may be multiple objects within the array if the computed attribute has been added to multiple schemas based on different classes.|
|`active`|A boolean value displaying whether or not the computed attribute is currently active. By default the value is `true`.|
|`type`|The type of resource created, in this case "ComputedAttribute" is the default value.|
|`createEpoch` and `updateEpoch`|The time at which the computed attribute was created and last updated, respectively.|

## Access computed attributes

When working with computed attributes using the API, there are two options for accessing computed attributes that have been defined by your organization. The first is to list all computed attributes, the second is to view a specific computed attribute by its unique `id`.

Steps for both access patterns are outlined in this document. Select one of the following to begin:

* **[List all existing computed attributes](#list-all-computed-attributes):** Return a list of all existing computed attributes that your organization has created.
* **[View a specific computed attribute](#view-a-computed-attribute):** Return the details of a single computed attribute by specifying its ID during the request.

### List all computed attributes {#list-all-computed-attributes}

Your IMS Organization may create multiple computed attributes, and performing a GET request to the `/config/computedAttributes` endpoint allows you list all existing computed attributes for your organization.

**API format**

```http
GET /config/computedAttributes
```

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/config/computedAttributes/ \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \ 
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

A successful response includes a `_page` attribute providing the total number of computed attributes (`totalCount`) and the number of computed attributes on the page (`pageSize`). 

The response also includes a `children` array composed of one or more objects, each containing the details of one computed attribute. If your organization does not have any computed attributes, the `totalCount` and `pageSize` will be 0 (zero) and the `children` array will be empty.

```json
{
    "_page": {
        "totalCount": 2,
        "pageSize": 2
    },
    "children": [
        {
            "id": "2afcf410-450e-4a39-984d-2de99ab58877",
            "imsOrgId": "{ORG_ID}",
            "sandbox": {
                "sandboxId": "ff0f6870-c46d-11e9-8ca3-036939a64204",
                "sandboxName": "prod",
                "type": "production",
                "default": true
            },
            "name": "birthdayCurrentMonth",
            "path": "person._{TENANT_ID}",
            "positionPath": [
                "person",
                "_{TENANT_ID}"
            ],
            "description": "Computed attribute to capture if the customer birthday is in the current month.",
            "expression": {
                "type": "PQL",
                "format": "pql/text",
                "value": "person.birthDate.getMonth() = currentMonth()"
            },
            "schema": {
                "name": "_xdm.context.profile"
            },
            "returnSchema": {
                "meta:xdmType": "string"
            },
            "definedOn": [
                {
                    "meta:resourceType": "unions",
                    "meta:containerId": "tenant",
                    "$ref": "https://ns.adobe.com/xdm/context/profile__union"
                }
            ],
            "encodedDefinedOn":"?\b?VR)JMS?R?())(????+?KL?OJ?K???H??O??+I?(?/(?O??I??/????S?8{?E:",
            "dependencies": [],
            "dependents": [],
            "active": true,
            "type": "ComputedAttribute",
            "createEpoch": 1572555223,
            "updateEpoch": 1572555225
        },
        {
            "id": "ae0c6552-cf49-4725-8979-116366e8e8d3",
            "imsOrgId": "{ORG_ID}",
            "sandbox": {
                "sandboxId": "",
                "sandboxName": "",
                "type": "production",
                "default": true
            },
            "name": "productDownloads",
            "path": "_{TENANT_ID}",
            "positionPath": [
                "_{TENANT_ID}"
            ],
            "description": "Calculate total product downloads.",
            "expression": {
                "type": "PQL", 
                "format": "pql/text", 
                "value":  "let Y = xEvent[_coresvc.event.subType = \"DOWNLOAD\"].groupBy(_coresvc.attributes[name = \"product\"].value).map({
                  \"downloaded\": this.head()._coresvc.attributes[name = \"product\"].head().value,
                  \"downloadsSum\": this.count(),
                  \"downloadsToday\": this[timestamp occurs today].count(),
                  \"downloadsPast30Days\": this[timestamp occurs < 30 days before now].count(),
                  \"downloadsPast60Days\": this[timestamp occurs < 60 days before now].count(),
                  \"downloadsPast90Days\": this[timestamp occurs < 90 days before now].count() }) in { \"uniqueProductDownloadSum\": Y.count(), \"products\": Y }"
            },
            "returnSchema": {
                "meta:xdmType": "string"
            },
            "definedOn": [
                {
                    "meta:resourceType": "unions",
                    "meta:containerId": "tenant",
                    "$ref": "https://ns.adobe.com/xdm/context/profile__union"
                }
            ],
            "schema": {
                "name": "_xdm.context.profile"
            },
            "encodedDefinedOn": "\u001f?\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000?VR)JMS?R?())(????+?KL?OJ?K???H??O??+I?(?/(?O??I??/????S?\u0005\u00008{?E:\u0000\u0000\u0000",
            "dependencies": [],
            "dependents": [],
            "active": true,
            "type": "ComputedAttribute",
            "createEpoch": 1571945277,
            "updateEpoch": 1571945280
        }
    ],
    "_links": {
        "next": {}
    }
}
```

|Property|Description|
|---|---|
|`_page.totalCount`|The total number of computed attributes defined by your IMS Organization.|
|`_page.pageSize`|The number of computed attributes returned on this page of results. If `pageSize` is equal to `totalCount`, this means that there is only one page of results and all computed attributes have been returned. If they are not equal, there are additional pages of results that can be accessed. See `_links.next` for details.|
|`children`|An array composed of one or more objects, each containing the details of a single computed attribute. If no computed attributes have been defined, the `children` array is empty.|
|`id`|A unique, read-only, system-generated value assigned automatically to a computed attribute when it is created. For more information on the components of a computed attribute object, please see the section on [creating a computed attribute](#create-a-computed-attribute) earlier in this tutorial.|
|`_links.next`|If a single page of computed attributes is returned, `_links.next` is an empty object, as shown in the sample response above. If your organization has many computed attributes, they will be returned on multiple pages that you can access by make a GET request to the `_links.next` value.|

### View a computed attribute {#view-a-computed-attribute}

You can view a specific computed attribute by making a GET request to the `/config/computedAttributes` endpoint and including the computed attribute ID in the request path.

**API format**

```http
GET /config/computedAttributes/{ATTRIBUTE_ID}
```

|Parameter|Description|
|---|---|
|`{ATTRIBUTE_ID}`|The ID of the computed attribute that you wish to view.|

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/config/computedAttributes/2afcf410-450e-4a39-984d-2de99ab58877 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \ 
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

```json
{
    "id": "2afcf410-450e-4a39-984d-2de99ab58877",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "ff0f6870-c46d-11e9-8ca3-036939a64204",
        "sandboxName": "prod",
        "type": "production",
        "default": true
    },
    "name": "birthdayCurrentMonth",
    "path": "_{TENANT_ID}",
    "positionPath": [
        "_{TENANT_ID}"
    ],
    "description": "Computed attribute to capture if the customer birthday is in the current month.",
    "expression": {
        "type": "PQL",
        "format": "pql/text",
        "value": "person.birthDate.getMonth() = currentMonth()"
    },
    "schema": {
        "name": "_xdm.context.profile"
    },
    "returnSchema": {
        "meta:xdmType": "string"
    },
    "definedOn": [
        {
            "meta:resourceType": "unions",
            "meta:containerId": "tenant",
            "$ref": "https://ns.adobe.com/xdm/context/profile__union"
        }
    ],
    "encodedDefinedOn":"?\b?VR)JMS?R?())(????+?KL?OJ?K???H??O??+I?(?/(?O??I??/????S?8{?E:",
    "dependencies": [],
    "dependents": [],
    "active": true,
    "type": "ComputedAttribute",
    "createEpoch": 1572555223,
    "updateEpoch": 1572555225
}
```

## Update a computed attribute

Should you find that you need to update an existing computed attribute, this can be done by making a PATCH request to the `/config/computedAttributes` endpoint and including the ID of the computed attributed that you wish to update in the request path.

**API format**

```http
PATCH /config/computedAttributes/{ATTRIBUTE_ID}
```

|Parameter|Description|
|---|---|
|`{ATTRIBUTE_ID}`|The ID of the computed attribute that you wish to update.|

**Request**

This request uses [JSON Patch formatting](https://datatracker.ietf.org/doc/html/rfc6902) to update the "value" of the "expression" field.

```shell
curl -X PATCH \
  https://platform.adobe.io/data/core/ups/config/computedAttributes/ae0c6552-cf49-4725-8979-116366e8e8d3 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}'\
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \  
  -d '[
        {
          "op": "add",
          "path": "/expression",
          "value": 
          {
            "type": "PQL", 
            "format": "pql/text", 
            "value":  "{NEW_EXPRESSION_VALUE}"
          }
        }
      ]'
```

|Property|Description|
|---|---|
|`{NEW_EXPRESSION_VALUE}`|A valid [!DNL Profile Query Language] (PQL) expression. Computed attributes currently support the following functions: sum, count, min, max, and boolean. For a list of sample expressions, refer to the [sample PQL expressions](expressions.md) documentation.|

**Response**

A successful update returns HTTP Status 204 (No Content) and an empty response body. If you wish to confirm the update was successful, you can perform a GET request to view the computed attribute by its ID.

## Delete a computed attribute

It is also possible to delete a computed attribute using the API. This is done by making a DELETE request to the `/config/computedAttributes` endpoint and including the ID of the computed attribute that you wish to delete in the request path.

>[!NOTE]
>
>Please use caution when deleting a computed attribute as it may be in use in more than one schema and the DELETE operation cannot be undone.

**API format**

```http
DELETE /config/computedAttributes/{ATTRIBUTE_ID}
```

|Parameter|Description|
|---|---|
|`{ATTRIBUTE_ID}`|The ID of the computed attribute that you wish to delete.|

**Request**

```shell
curl -X DELETE \
  https://platform.adobe.io/data/core/ups/config/computedAttributes/ae0c6552-cf49-4725-8979-116366e8e8d3 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}'
  -H 'x-sandbox-name: {SANDBOX_NAME}' \ 
```

**Response**

A successful delete request returns HTTP Status 200 (OK) and an empty response body. To confirm the deletion was successful, you can perform a GET request to lookup the computed attribute by its ID. If the attribute was deleted, you will receive an HTTP Status 404 (Not Found) error.

## Create a segment definition referencing a computed attribute

Adobe Experience Platform allows you to create segments that define a group of specific attributes or behaviors from a group of profiles. A segment definition includes an expression that encapsulates a query written in PQL. These expressions can also reference computed attributes.

The following example creates a segment definition that references an existing computed attribute. To learn more about segment definitions, and how to work with them in the Segmentation Service API, please refer to the [segment definitions API endpoint guide](../../segmentation/api/segment-definitions.md).

To begin, make a POST request to the `/segment/definitions` endpoint, providing the computed attribute in the request body.

**API format**

```http
POST /segment/definitions
```

**Request**

```shell 
curl -X POST https://platform.adobe.io/data/core/ups/segment/definitions
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
        "name": "downloadedInLast7Days",
        "description": "Has product been downloaded in last 7 days?",
        "schema": {
            "name": "_xdm.context.profile"
        },
        "ttlInDays": 30,
        "expression": {
            "type": "PQL",
            "format": "pql/text",
            "value": "_{TENANT_ID}.downloadsLast7Days > 0",
            "meta": "m"
        },
        "dataGovernancePolicy": {
            "excludeOptOut": true
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `name` | A unique name for the segment, as a string. |
| `description` | A human-readable description of the definition. |
|`schema.name`|The schema associated with the entities in the segment. Consists of either an `id` or `name` field. |
| `expression` | An object containing fields with information about the segment definition. |
| `expression.type` | Specifies the expression type. Currently, only "PQL" is supported. |
| `expression.format` | Indicates the structure of the expression in value. Currently, only `pql/text` is supported.|
| `expression.value` | A valid PQL expression, in this example it includes a reference to an existing computed attribute. |

For more information on schema definition attributes, please refer to the examples provided in the [segment definitions API endpoint guide](../../segmentation/api/segment-definitions.md).

**Response**

A successful response returns HTTP status 200 with details of your newly created segment definition. To learn more about segment definition response objects, refer to the [segment definitions API endpoint guide](../../segmentation/api/segment-definitions.md).

```json

{
    "id": "add3933f-ac5c-4240-8259-3a4528ee4885",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "ttlInDays": 60,
    "id": "119835c3-5fab-4c18-ae01-4ccab328fc5c",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "{SANDBOX_ID}",
        "sandboxName": "{SANDBOX_NAME}",
        "type": "production",
        "default": true
    },
    "name": "segment-downloadedInLast7Days",
    "description": "Has product been downloaded in last 7 days?",
    "expression": {
        "type": "PQL",
        "format": "pql/text",
        "value": "_{TENANT_ID}.downloadsLast7Days > 0",
        "meta": "m"
    },
    "evaluationInfo": {
        "batch": {
            "enabled": false
        },
        "continuous": {
            "enabled": true
        },
        "synchronous": {
            "enabled": false
        }
    },
    "dataGovernancePolicy": {
        "excludeOptOut": true
    },
    "creationTime": 1602016581000,
    "updateEpoch": 1610609459,
    "updateTime": 1610609459000,
    "createEpoch": 1602016554,
    "_etag": "\"8b01611a-0000-0200-0000-5ffff3330000\"",
    "dependents": [
        "023d46c9-a27c-4ea9-a887-2c91ba83f2d1"
    ],
    "definedOn": [
        {
            "meta:resourceType": "unions",
            "meta:containerId": "tenant",
            "$ref": "https://ns.adobe.com/xdm/context/profile__union"
        }
    ],
    "dependencies": [
    "103d46c9-a27c-4ea9-a887-2c91ba83f2d1"
    ],
    "type": "SegmentDefinition"
}

```

## Next steps

Now that you have learned the basics of computed attributes, you are ready to begin defining them for your organization.
