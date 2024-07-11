---
solution: Experience Platform
title: Edge Segmentation Guide
description: Learn how to use edge segmentation to evaluate audiences in Platform instantaneously on the edge, enabling same page and next page personalization use cases.
exl-id: eae948e6-741c-45ce-8e40-73d10d5a88f1
---
# Edge segmentation guide

Edge segmentation is the ability to evaluate segment definitions in Adobe Experience Platform instantaneously [on the edge](../../web-sdk/home.md), enabling same page and next page personalization use cases. 

>[!IMPORTANT]
>
> The edge data will be stored in an edge server location closest to where it was collected and may be stored in a location other than the one designated as the hub (or principal) Adobe Experience Platform data center.
>
> Additionally, the edge segmentation engine will only honor requests on the edge where there is **one** primary marked identity, which is consistent with non-edge-based primary identities.

## Edge segmentation query types {#query-types}

A query can be evaluated with edge segmentation if it meets any of the criteria outlined in the following table.

>[!NOTE]
>
>If the query matches any of the query types in the following table, it will automatically be evaluated using edge segmentation. The system determines this ability automatically based on the query expression.

| Query type | Details | Example | PQL example |
| ---------- | ------- | ------- | ----------- |
| Single event | Any segment definition that refers to a single incoming event with no time restriction. | People who have added an item to their cart. | `chain(xEvent, timestamp, [A: WHAT(eventType = "addToCart")])` |
| Single profile | Any segment definitions that refers to a single profile-only attribute | People who live in the USA. | `homeAddress.countryCode = "US"` |
| Single event that refers to a profile | Any segment definition that refers to one or more profile attributes and a single incoming event with no time restriction. | People who live in the USA that visited the homepage. | `homeAddress.countryCode = "US" and chain(xEvent, timestamp, [A: WHAT(eventType = "homePageView")])` |
| Negated single event with a profile attribute | Any segment definition that refers to a negated single incoming event and one or more profile attributes | People who live in the USA and have **not** visited the homepage. | `not(chain(xEvent, timestamp, [A: WHAT(eventType = "homePageView")]))` |
| Single event within a time window | Any segment definition that refers to a single incoming event within a set period of time. | People who visited the homepage in the last 24 hours. | `chain(xEvent, timestamp, [X: WHAT(eventType = "homePageView") WHEN(< 24 hours before now)])` |
| Single event with a profile attribute within a relative time window of less than 24 hours | Any segment definition that refers to a single incoming event, with one or more profile attributes, and occurs within a relative time window of less than 24 hours. | People who live in the USA that visited the homepage in the last 24 hours. | `homeAddress.countryCode = "US" and chain(xEvent, timestamp, [X: WHAT(eventType = "homePageView") WHEN(< 24 hours before now)])` |
| Negated single event with a profile attribute within a time window | Any segment definition that refers to one or more profile attributes and a negated single incoming event within a period of time. | People who live in the USA and have **not** visited the homepage in the last 24 hours. | `homeAddress.countryCode = "US" and not(chain(xEvent, timestamp, [X: WHAT(eventType = "homePageView") WHEN(< 24 hours before now)]))` | 
| Frequency event within a 24-hour time window | Any segment definition that refers to an event that takes place a certain number of times within a time window of 24 hours. | People who visited the homepage **at least** five times in the last 24 hours. | `chain(xEvent, timestamp, [A: WHAT(eventType = "homePageView") WHEN(< 24 hours before now) COUNT(5) ] )` |
| Frequency event with a profile attribute within a 24-hour time window | Any segment definition that refers to one or more profile attributes and an event that takes place a certain number of times within a time window of 24 hours. | People from the USA who visited the homepage **at least** five times in the last 24 hours. | `homeAddress.countryCode = "US" and chain(xEvent, timestamp, [A: WHAT(eventType = "homePageView") WHEN(< 24 hours before now) COUNT(5) ] )` |
| Negated frequency event with a profile within a 24-hour time window | Any segment definition that refers to one or more profile attributes and a negated event that takes place a certain number of times within a time window of 24 hours. | People who have not visited the homepage **more** than five times in the last 24 hours. | `not(chain(xEvent, timestamp, [A: WHAT(eventType = "homePageView") WHEN(< 24 hours before now) COUNT(5) ] ))` |
| Multiple incoming hits within a time profile of 24 hours | Any segment definition that refers to multiple events that occur within a time window of 24 hours. | People that visited the homepage **or** visited the checkout page within the last 24 hours. | `chain(xEvent, timestamp, [X: WHAT(eventType = "homePageView") WHEN(< 24 hours before now)]) and chain(xEvent, timestamp, [X: WHAT(eventType = "checkoutPageView") WHEN(< 24 hours before now)])` | 
| Multiple events with a profile within a 24-hour time window | Any segment definition that refers to one or more profile attributes and multiple events that occur within a time window of 24 hours. | People from the USA that visited the homepage **and** visited the checkout page within the last 24 hours. | `homeAddress.countryCode = "US" and chain(xEvent, timestamp, [X: WHAT(eventType = "homePageView") WHEN(< 24 hours before now)]) and chain(xEvent, timestamp, [X: WHAT(eventType = "checkoutPageView") WHEN(< 24 hours before now)])` |
| Segment of segments | Any segment definition that contains one or more batch or streaming segments. | People who live in the USA and are in the segment "existing segment". | `homeAddress.countryCode = "US" and inSegment("existing segment")` |
| Query that refers to a map | Any segment definition that refers to a map of properties. | People who have added to their cart based on external segment data. | `chain(xEvent, timestamp, [A: WHAT(eventType = "addToCart") WHERE(externalSegmentMapProperty.values().exists(stringProperty="active"))])` |

Additionally, the segment **must** be tied to a merge policy that is active on edge. For more information about merge policies, please read the [merge policies guide](../../profile/api/merge-policies.md).

A segment definition will **not** be eligible for edge segmentation in the following scenario:

- The segment definition includes a combination of a single event and an `inSegment` event.
  - However, if the segment definition contained in the `inSegment` event is profile only, the segment definition **will** be enabled for edge segmentation.
- The segment definition uses "Ignore year" as part of its time constraints.

## Retrieve audiences evaluated using edge segmentation {#retrieve-audiences}

You can retrieve all audiences that are enabled for edge segmentation using either the Segmentation Service API or through Audience Portal in the UI.

>[!BEGINTABS]

>[!TAB Segmentation Service API]

You can retrieve a list of all segment definitions that are enabled for edge segmentation within your organization by making a GET request to the `/segment/definitions` endpoint.

**API format**

To retrieve segment definitions enabled for edge segmentation, you must include the query parameter `evaluationInfo.synchronous.enabled=true` in the request path.

```http
GET /segment/definitions?evaluationInfo.synchronous.enabled=true
```

**Request**

+++ A sample request to list all the edge-enabled segment definitions

```shell
curl -X GET \
  'https://platform.adobe.io/data/core/ups/segment/definitions?evaluationInfo.synchronous.enabled=true' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status 200 with an array of segment definitions in your organization that are enabled for edge segmentation. 

+++ A sample response that contains a list of all edge-segmentation-enabled segment definitions in your organization

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

More detailed information about the segment definition returned can be found in the [segment definitions endpoint guide](./segment-definitions.md).

+++

>[!TAB Audience Portal]

You can retrieve all the audiences that are enabled for edge segmentation within your organization by using filters in Audience Portal.

Within the available filters, go to **Update frequency** and select "Edge". 

IMAGE

Using this filter displays all audiences in your organization that are evaluated using edge segmentation.

IMAGE

To learn more about viewing audiences in Platform, please read the [Audience Portal guide](../ui/audience-portal.md).

>[!ENDTABS]

## Next steps

This guide explains how to enable a segment definitions to be evaluated using edge segmentation on Adobe Experience Platform. To learn more about using the Experience Platform user interface, please read the [Segmentation user guide](./overview.md). To learn how to perform similar actions and work with segment definitions using Experience Platform APIs, please visit the [edge segmentation API guide](../api/edge-segmentation.md).

## Appendix

The following section lists frequently asked questions regarding edge segmentation:

### How long does it take for a segment definition to be available on the Edge Network?

It takes up to one hour for a segment definition to be available on the Edge Network.
