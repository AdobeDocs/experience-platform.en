---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;Segmentation Service;edge segmentation;Edge segmentation;streaming edge;
solution: Experience Platform
title: Edge Segmentation using the API 
topic-legacy: developer guide
description: This document contains examples on how to use edge segmentation with the Adobe Experience Platform Segmentation Service API.
exl-id: effce253-3d9b-43ab-b330-943fb196180f
---
# Edge segmentation

>[!NOTE]
>
>The following document states how to perform edge segmentation using the API. For information performing edge segmentation using the UI, please read the [edge segmentation UI guide](../ui/edge-segmentation.md). 
>
>Edge segmentation is now generally available to all Platform users. If you created edge segments during the beta, these segments will continue to be operational.

Edge segmentation is the ability to evaluate segments in Adobe Experience Platform instantaneously on the edge, enabling same page and next page personalization use cases. 

>[!IMPORTANT]
>
> The edge data will be stored in an edge server location closest to where it was collected and may be stored in a location other than the one designated as the hub (or principal) Adobe Experience Platform data center.
>
> Additionally, the edge segmentation engine will only honor requests on the edge where there is **one** primary marked identity, which is consistent with non-edge-based primary identities.

## Getting started

This developer guide requires a working understanding of the various [!DNL Adobe Experience Platform] services involved with edge segmentation. Before beginning this tutorial, please review the documentation for the following services:

- [[!DNL Real-time Customer Profile]](../../profile/home.md): Provides a unified consumer profile in real-time, based on aggregated data from multiple sources.
- [[!DNL Segmentation]](../home.md): Provides the ability to create segments and audiences from your [!DNL Real-time Customer Profile] data.
- [[!DNL Experience Data Model (XDM)]](../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes customer experience data.

In order to successfully make calls to any Experience Platform API endpoints, please read the guide on [getting started with Platform APIs](../../landing/api-guide.md) to learn about required headers and how to read sample API calls.

## Edge segmentation query types {#query-types}

In order for a segment to be evaluated using edge segmentation, the query must conform to the following guidelines:

| Query type | Details | Example | PQL example |
| ---------- | ------- | ------- | ----------- |
| Single event | Any segment definition that refers to a single incoming event with no time restriction. | People who have added an item to their cart. | `chain(xEvent, timestamp, [A: WHAT(eventType = "addToCart")])` |
| Single profile | Any segment definitions that refers to a single profile-only attribute | People who live in the USA. | `homeAddress.countryCode = "US"` |
| Single event that refers to a profile | Any segment definition that refers to one or more profile attributes and a single incoming event with no time restriction. | People who live in the USA that visited the homepage. | `homeAddress.countryCode = "US" and chain(xEvent, timestamp, [A: WHAT(eventType = "addToCart")])` |
| Negated single event with a profile attribute | Any segment definition that refers to a negated single incoming event and one or more profile attributes | People who live in the USA and have **not** visited the homepage. | `not(chain(xEvent, timestamp, [A: WHAT(eventType = "homePageView")]))` |
| Single event within a time window | Any segment definition that refers to a single incoming event within a set period of time. | People who visited the homepage in the last 24 hours. | `chain(xEvent, timestamp, [X: WHAT(eventType = "addToCart") WHEN(< 8 days before now)])` |
| Single event with a profile attribute within a time window | Any segment definition that refers to one or more profile attributes and a single incoming event within a set period of time. | People who live in the USA that visited the homepage in the last 24 hours. | `homeAddress.countryCode = "US" and chain(xEvent, timestamp, [X: WHAT(eventType = "addToCart") WHEN(< 8 days before now)])` |
| Negated single event with a profile attribute within a time window | Any segment definition that refers to one or more profile attributes and a negated single incoming event within a period of time. | People who live in the USA and have **not** visited the homepage in the last 24 hours. | `homeAddress.countryCode = "US" and not(chain(xEvent, timestamp, [X: WHAT(eventType = "addToCart") WHEN(< 8 days before now)]))` | 
| Frequency event within a 24-hour time window | Any segment definition that refers to an event that takes place a certain number of times within a time window of 24 hours. | People who visited the homepage **at least** five times in the last 24 hours. | `chain(xEvent, timestamp, [A: WHAT(eventType = "homePageView") WHEN(< 24 hours before now) COUNT(5) ] )` |
| Frequency event with a profile attribute within a 24-hour time window | Any segment definition that refers to one or more profile attributes and an event that takes place a certain number of times within a time window of 24 hours. | People from the USA who visited the homepage **at least** five times in the last 24 hours. | `homeAddress.countryCode = "US" and chain(xEvent, timestamp, [A: WHAT(eventType = "homePageView") WHEN(< 24 hours before now) COUNT(5) ] )` |
| Negated frequency event with a profile within a 24-hour time window | Any segment definition that refers to one or more profile attributes and a negated event that takes place a certain number of times within a time window of 24 hours. | People who have not visited the homepage **more** than five times in the last 24 hours. | `not(chain(xEvent, timestamp, [A: WHAT(eventType = "homePageView") WHEN(< 24 hours before now) COUNT(5) ] ))` |
| Multiple incoming hits within a time profile of 24 hours | Any segment definition that refers to multiple events that occur within a time window of 24 hours. | People that visited the homepage **or** visited the checkout page within the last 24 hours. | `chain(xEvent, timestamp, [X: WHAT(eventType = "homePageView") WHEN(< 24 hours before now)]) and chain(xEvent, timestamp, [X: WHAT(eventType = "checkoutPageView") WHEN(< 24 hours before now)])` | 
| Multiple events with a profile within a 24-hour time window | Any segment definition that refers to one or more profile attributes and multiple events that occur within a time window of 24 hours. | People from the USA that visited the homepage **and** visited the checkout page within the last 24 hours. | `homeAddress.countryCode = "US" and chain(xEvent, timestamp, [X: WHAT(eventType = "homePageView") WHEN(< 24 hours before now)]) and chain(xEvent, timestamp, [X: WHAT(eventType = "checkoutPageView") WHEN(< 24 hours before now)])` |
| Segment of segments | Any segment definition that contains one or more batch or streaming segments. | People who live in the USA and are in the segment "existing segment". | `homeAddress.countryCode = "US" and inSegment("existing segment")` |
| Query that refers to a map | Any segment definition that refers to a map of properties. | People who have added to their cart based on external segment data. | `chain(xEvent, timestamp, [A: WHAT(eventType = "addToCart") WHERE(externalSegmentMapProperty.values().exists(stringProperty="active"))])` |

Additionally, the segment **must** be tied to a merge policy that is active on edge. For more information about merge policies, please read the [merge policies guide](../../profile/api/merge-policies.md).

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
  -H 'x-gw-ims-org-id: {ORG_ID}' \
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
            "imsOrgId": "{ORG_ID}",
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
            "imsOrgId": "{ORG_ID}",
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

You can create a segment that is enabled for edge segmentation by making a POST request to the `/segment/definitions` endpoint that matches one of the [edge segmentation query types listed above](#query-types).

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
  -H 'x-gw-ims-org-id: {ORG_ID}' \
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
    }
}'
```

**Response**

A successful response returns the details of the newly created segment definition that is enabled for edge segmentation.

```json
{
    "id": "f15063cb-2da8-4851-a2e2-bf59ddd2f004",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "ttlInDays": 30,
    "imsOrgId": "{ORG_ID}",
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
        "value": "chain(xEvent, timestamp, [X: WHAT(var1._experience.analytics.endUser.firstWeb.webPageDetails.isHomePage = "true")])"
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
