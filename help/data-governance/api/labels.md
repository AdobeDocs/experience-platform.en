---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Labels API Endpoint
description: Learn how to manage data usage labels in Experience Platform using the Policy Service API.
exl-id: 9a01f65c-01f1-4298-bdcf-b7e00ccfe9f2
---
# Labels endpoint

Data usage labels allow you to categorize data according to usage policies that may apply to that data. The `/labels` endpoint in the [!DNL Policy Service API] allows you to programmatically manage data usage labels within your experience application.

>[!NOTE]
>
>The `/labels` endpoint is only used to retrieve, create, and update data usage labels. For steps on how to add labels to datasets and fields using API calls, refer to the guide on [managing dataset labels](../labels/dataset-api.md).

## Getting started

The API endpoint used in this guide is part of the [[!DNL Policy Service API]](https://www.adobe.io/experience-platform-apis/references/policy-service/). Before continuing, please review the [getting started guide](getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any [!DNL Experience Platform] API.

## Retrieve a list of labels {#list}

You can list all `core` or `custom` labels by making a GET request to `/labels/core` or `/labels/custom`, respectively.

**API format**

```http
GET /labels/core
GET /labels/custom
```

**Request**

The following request lists all custom labels created under your organization.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/dulepolicy/labels/custom' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a list of custom labels retrieved from the system. Since the example request above was made to `/labels/custom`, the response below only shows custom labels.

```json
{
    "_page": {
        "count": 2
    },
    "_links": {
        "page": {
            "href": "https://platform.adobe.io:443/data/foundation/dulepolicy/labels/custom?{?limit,start,property}",
            "templated": true
        }
    },
    "children": [
        {
            "name": "L1",
            "category": "Custom",
            "friendlyName": "Banking Information",
            "description": "Data containing banking information for a customer.",
            "imsOrg": "{ORG_ID}",
            "sandboxName": "{SANDBOX_NAME}",
            "created": 1594396718731,
            "createdClient": "{CLIENT_ID}",
            "createdUser": "{USER_ID}",
            "updated": 1594396718731,
            "updatedClient": "{CLIENT_ID}",
            "updatedUser": "{USER_ID}",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io:443/data/foundation/dulepolicy/labels/custom/L1"
                }
            }
        },
        {
            "name": "L2",
            "category": "Custom",
            "friendlyName": "Purchase History Data",
            "description": "Data containing information on past transactions",
            "imsOrg": "{ORG_ID}",
            "sandboxName": "{SANDBOX_NAME}",
            "created": 1594397415663,
            "createdClient": "{CLIENT_ID}",
            "createdUser": "{USER_ID}",
            "updated": 1594397728708,
            "updatedClient": "{CLIENT_ID}",
            "updatedUser": "{USER_ID}",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io:443/data/foundation/dulepolicy/labels/custom/L2"
                }
            }
        }
    ]
}
```

## Look up a label {#look-up}

You can look up a specific label by including that label's `name` property in the path of a GET request to the [!DNL Policy Service] API.

**API format**

```http
GET /labels/core/{LABEL_NAME}
GET /labels/custom/{LABEL_NAME}
```

| Parameter | Description |
| --- | --- |
| `{LABEL_NAME}` | The `name` property of the custom label you want to look up. |

**Request**

The following request retrieves the custom label `L2`, as indicated in the path.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/dulepolicy/labels/custom/L2' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the details of the custom label.

```json
{
    "name": "L2",
    "category": "Custom",
    "friendlyName": "Purchase History Data",
    "description": "Data containing information on past transactions",
    "imsOrg": "{ORG_ID}",
    "sandboxName": "{SANDBOX_NAME}",
    "created": 1594397415663,
    "createdClient": "{CLIENT_ID}",
    "createdUser": "{USER_ID}",
    "updated": 1594397728708,
    "updatedClient": "{CLIENT_ID}",
    "updatedUser": "{USER_ID}",
    "_links": {
        "self": {
            "href": "https://platform.adobe.io:443/data/foundation/dulepolicy/labels/custom/L2"
        }
    }
}
```

## Create or update a custom label {#create-update}

To create or update a custom label, you must make a PUT request to the [!DNL Policy Service] API.

**API format**

```http
PUT /labels/custom/{LABEL_NAME}
```

| Parameter | Description |
| --- | --- |
| `{LABEL_NAME}` | The `name` property of a custom label. If a custom label with this name does not exist, a new label will be created. If one does exist, that label will be updated. |

**Request**

The following request creates a new label, `L3`, which aims to describe data that contains information relating to customers' selected payment plans.

```shell
curl -X PUT \
  'https://platform.adobe.io/data/foundation/dulepolicy/labels/custom/L3' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "name": "L3",
        "category": "Custom",
        "friendlyName": "Payment Plan",
        "description": "Data containing information on selected payment plans."
      }'
```

| Property | Description |
| --- | --- |
| `name` | A unique string identifier for the label. This value is used for lookup purposes and applying the label to datasets and fields, and thus it is recommended that it be short and concise. |
| `category` | The category of the label. While you can create your own categories for custom labels, it is strongly recommended that you use `Custom` if you want the label to appear in the UI. |
| `friendlyName` | A friendly name for the label, used for display purposes. |
| `description` | (Optional) A description of the label to provide further context. |

**Response**

A successful response returns the details of custom label, with HTTP code 200 (OK) if an existing label was updated, or 201 (Created) if a new label was created.

```json
{
  "name": "L3",
  "category": "Custom",
  "friendlyName": "Payment Plan",
  "description": "Data containing information on selected payment plans.",
  "imsOrg": "{ORG_ID}",
  "sandboxName": "{SANDBOX_NAME}",
  "created": 1529696681413,
  "createdClient": "{CLIENT_ID}",
  "createdUser": "{USER_ID}",
  "updated": 1529697651972,
  "updatedClient": "{CLIENT_ID}",
  "updatedUser": "{USER_ID}",
  "_links": {
    "self": {
      "href": "https://platform.adobe.io:443/data/foundation/dulepolicy/labels/custom/L3"
    }
  }
}
```

## Next steps

This guide covered the use of the `/labels` endpoint in the Policy Service API. For steps on how to apply labels to datasets and fields, refer to the [dataset labels API guide](../labels/dataset-api.md).
