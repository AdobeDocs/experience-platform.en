---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;Segmentation Service;edge segmentation;Edge segmentation;streaming edge;
solution: Experience Platform
title: Edge Segmentation using the API 
topic: developer guide
description: This document contains examples on how to use edge segmentation with the Adobe Experience Platform Segmentation Service API.
---

# Edge segmentation 

>[!NOTE]
>
>The following document states how to perform edge segmentation using the API. For information on using edge segmentation using the UI, please read the [edge segmentation UI guide](../ui/edge-segmentation.md).

Edge segmentation is the ability to evaluate segments in Adobe Experience Platform instantaneously on the edge, enabling same page and next page personalization use cases. 

## Getting started

This developer guide requires a working understanding of the various [!DNL Adobe Experience Platform] services involved with edge segmentation. Before beginning this tutorial, please review the documentation for the following services:

- [[!DNL Real-time Customer Profile]](../../profile/home.md): Provides a unified consumer profile in real-time, based on aggregated data from multiple sources.
- [[!DNL Segmentation]](../home.md): Provides the ability to create segments and audiences from your [!DNL Real-time Customer Profile] data.
- [[!DNL Experience Data Model (XDM)]](../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes customer experience data.

In order to successfully make calls to [!DNL Data Prep] API endpoints, please read the guide on [getting started with Platform APIs](../../landing/api-guide.md) to learn about required headers and how to read sample API calls.

## Edge segmentation query types {#query-types}

In order for a segment to be evaluated using edge segmentation, the query must conform to the following guidelines:

| Query type | Details |
| ---------- | ------- |
| Incoming hit | Any segment definition that refers to a single incoming event with no time restriction. |
| Incoming hit that refers to a profile | Any segment definition that refers to a single incoming event, with no time restriction, and one or more profile attributes. |
| Frequency query | Any segment definition that refers to an event happening a certain number of times. |
| Frequency query that refers to a profile | Any segment definition that refers to an event happening a certain number of times and has one or more profile attributes. |

{style="table-layout:auto"}

The following query types are **not** currently supported by edge segmentation:

| Query type | Details |
| ---------- | ------- |
| Relative-time window | If a query refers to a time window, it cannot be evaluated using edge segmentation. |
| Negation | If a query contains a negation, or a `not` event, it cannot be evaluated using edge segmentation. | 
| Multiple events | If a query contains more than one event, it cannot be evaluated using edge segmentation. |

{style="table-layout:auto"}

## Retrieve all segments enabled for edge segmentation

You can retrieve a list of all segments that are enabled for edge segmentation within your IMS Organization by making a GET request to the `/segment/definitions` endpoint.

**API format**

To retrieve segments enabled for edge segmentation, you must include the query parameter `evaluationInfo.synchronous.enabled=true` in the request path.

```http
GET /segment/definitions?evaluationInfo.synchronous.enabled=true
```

**Request**

```shell
curl -X GET \
  'https://platform.adobe.io/data/core/ups/segment/definitions?evaluationInfo.synchronous.enabled=true' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns an array of segments in your IMS Organization that are enabled for edge segmentation. More detailed information about the segment definition returned can be found in the [segment definitions endpoint guide](./segment-definitions.md).

```json
{
    "segments": [
        {
            "id": "15063cb-2da8-4851-a2e2-bf59ddd2f004",
            "schema": {
                "name": "_xdm.context.profile"
            },
            "ttlInDays": 30,
            "imsOrgId": "{IMS_ORG_ID}",
            "sandbox": {
                "sandboxId": "",
                "sandboxName": "",
                "type": "production",
                "default": true
            },
            "name": " People who are NOT on their homepage ",
            "expression": {
                "type": "PQL",
                "format": "pql/text",
                "value": "select var1 from xEvent where var1._experience.analytics.endUser.firstWeb.webPageDetails.isHomePage = false"
            },
            "evaluationInfo": {
                "batch": {
                    "enabled": false
                },
                "continuous": {
                    "enabled": false
                },
                "synchronous": {
                    "enabled": true
                }
            },
            "creationTime": 1572029711000,
            "updateEpoch": 1572029712000,
            "updateTime": 1572029712000
        },
        {
            "id": "f15063cb-2da8-4851-a2e2-bf59ddd2f004",
            "schema": {
                "name": "_xdm.context.profile"
            },
            "ttlInDays": 30,
            "imsOrgId": "{IMS_ORG_ID}",
            "sandbox": {
                "sandboxId": "",
                "sandboxName": "",
                "type": "production",
                "default": true
            },
            "name": "Homepage_continuous",
            "description": "People who are on their homepage - continuous",
            "expression": {
                "type": "PQL",
                "format": "pql/text",
                "value": "select var1 from xEvent where var1._experience.analytics.endUser.firstWeb.webPageDetails.isHomePage = true"
            },
            "evaluationInfo": {
                "batch": {
                    "enabled": false
                },
                "continuous": {
                    "enabled": false
                },
                "synchronous": {
                    "enabled": true
                }
            },
            "creationTime": 1572021085000,
            "updateEpoch": 1572021086000,
            "updateTime": 1572021086000
        }
    ],
    "page": {
        "totalCount": 2,
        "totalPages": 1,
        "sortField": "creationTime",
        "sort": "desc",
        "pageSize": 2,
        "limit": 100
    },
    "link": {}
}
```

## Create a segment that is enabled for edge segmentation

You can create a segment that is enabled for edge segmentation by making a POST request to the `/segment/definitions` endpoint. In addition to matching one of the [edge segmentation query types listed above](#query-types), you must set the `evaluationInfo.synchronous.enabled` flag in the payload to true.

**API format**

```http
POST /segment/definitions
```

**Request**

>[!NOTE]
>
>The example below is a standard request to create a segment. For more information about creating a segment definition, please read the tutorial on [creating a segment](../tutorials/create-a-segment.md).

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/segment/definitions \
  -H 'Authorization: Bearer {ACCESS_TOKEN}'  \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "schema": {
        "name": "_xdm.context.profile"
    },
    "ttlInDays": 30,
    "name": "Homepage_continuous",
    "description": "People who are on their homepage - continuous",
    "expression": {
        "type": "PQL",
        "format": "pql/text",
        "value": "select var1 from xEvent where var1._experience.analytics.endUser.firstWeb.webPageDetails.isHomePage = true"
    },
    "evaluationInfo": {
        "synchronous": {
            "enabled": true
        }
    }
}'
```

| Property | Description |
| -------- | ----------- |
| `evaluationInfo.synchronous.enabled` | The `evaluationInfo` object determines the type of evaluation the segment definition will undergo. To use edge segmentation, set `evaluationInfo.synchronous.enabled` with a value of `true`. |

**Response**

A successful response returns the details of the newly created segment definition that is enabled for edge segmentation.

```json
{
    "id": "f15063cb-2da8-4851-a2e2-bf59ddd2f004",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "ttlInDays": 30,
    "imsOrgId": "{IMS_ORG}",
    "sandbox": {
        "sandboxId": "{SANDBOX_ID}",
        "sandboxName": "{SANDBOX_NAME}",
        "type": "production",
        "default": true
    },
    "name": "Homepage_continuous",
    "description": "People who are on their homepage - continuous",
    "expression": {
        "type": "PQL",
        "format": "pql/text",
        "value": "select var1 from xEvent where var1._experience.analytics.endUser.firstWeb.webPageDetails.isHomePage = true"
    },
    "evaluationInfo": {
        "batch": {
            "enabled": false
        },
        "continuous": {
            "enabled": false
        },
        "synchronous": {
            "enabled": true
        }
    },
    "creationTime": 1572021085000,
    "updateEpoch": 1572021086000,
    "updateTime": 1572021086000
}
```

## Next steps

Now that you know how to create edge-segmentation-enabled segments, you can use them to enable same-page and next-page personalization use cases. 

To learn how to perform similar actions and work with segments using the Adobe Experience Platform user interface, please visit the [Segment Builder user guide](../ui/segment-builder.md).