---
solution: Experience Platform
title: Streaming Segmentation Guide
description: Learn about streaming segmentation including what it is, how to create an audience evaluated using streaming segmentation, and how to view your audiences created using streaming segmentation.
exl-id: cb9b32ce-7c0f-4477-8c49-7de0fa310b97
---
# Streaming segmentation guide

Streaming segmentation is the ability to evaluate audiences in Adobe Experience Platform in near real-time while focusing on data richness.

With streaming segmentation, audience qualification now happens as streaming data lands into Platform, alleviating the need to schedule and run segmentation jobs. This allows you to evaluate data as its passed into Platform, letting audience membership be automatically kept up-to-date.

## Eligible query types {#query-types}

A query will be eligible for streaming segmentation if it meets any of the criteria outlined in the following table.

>[!NOTE]
>
>In order for streaming segmentation to work, you will need to enable scheduled segmentation for the organization. For details on enabling scheduled segmentation, please refer to [the Audience Portal overview](../ui/audience-portal.md#scheduled-segmentation).

| Query type | Details | Example |
| ---------- | ------- | ------- |
| Single event within a time window of less than 24 hours | Any segment definition that refers to a single incoming event within a time window of less than 24 hours. | ![An example of a single event within a relative time window is shown.](../images/methods/streaming/single-event.png) |
| Profile only | Any segment definition that refers to only a profile attribute. | ![An example of a profile attribute shown.](../images/methods/streaming/profile-attribute.png) |
| Single event with a profile attribute within a relative time window of less than 24 hours | Any segment definition that refers to a single incoming event, with one or more profile attributes, and occurs within a relative time window of less than 24 hours. | ![An example of a single event with a profile attribute within a relative time window is shown.](../images/methods/streaming/single-event-with-profile-attribute.png) |
| Segment of segments | Any segment definition that contains one or more batch or streaming segments. **Note:** If a segment of segments is used, profile disqualification will happen **every 24 hours**. | ![An example of a segment of segments is shown.](../images/methods/streaming/segment-of-segments.png) |
| Multiple events with a profile attribute | Any segment definition that refers to multiple events **within the last 24 hours** and (optionally) has one or more profile attributes. | ![An example of multiple events with a profile attribute is shown.](../images/methods/streaming/multiple-events-with-profile-attribute.png) |

A segment definition will **not** be eligible for streaming segmentation in the following scenarios:

- The segment definition includes Adobe Audience Manager (AAM) segments or traits.
- The segment definition includes multiple entities (multi-entity queries).
- The segment definition includes a combination of a single event and an `inSegment` event.
  - However, if the segment definition contained in the `inSegment` event is profile only, the segment definition **will** be enabled for streaming segmentation.
- The segment definition uses "Ignore year" as part of its time constraints.

Please note the following guidelines that apply to streaming segmentation queries:

| Query type | Guideline |
| ---------- | -------- |
| Single event query | There are no limits to the lookback window. |
| Query with event history | <ul><li>The lookback window is limited to **one day**.</li><li>A strict time-ordering condition **must** exist between the events.</li><li>Queries with at least one negated event are supported. However, the entire event **cannot** be a negation.</li></ul>|

If a segment definition is modified so it no longer meets the criteria for streaming segmentation, the segment definition will automatically switch from "Streaming" to "Batch".

Additionally, segment unqualification, similarly to segment qualification, happens in real-time. As a result, if an audience no longer qualifies for a segment, it will be immediately unqualified. For example, if the segment definition asks for "All users who bought red shoes in the last three hours", after three hours, all the profiles that initially qualified for the segment definition will be unqualified.

## Retrieve audiences {#retrieve-audiences}

You can retrieve all audiences that are evaluated using streaming segmentation using either the Segmentation Service API or through Audience Portal in the UI.

>[!BEGINTABS]

>[!TAB Segmentation Service API]

Retrieve a list of all segment definitions that are evaluated using streaming segmentation within your organization by making a GET request to the `/segment/definitions` endpoint.

**API format**

You must include the query parameter `evaluationInfo.synchronous.enabled=true` in the request path to retrieve segment definitions evaluated using streaming segmentation.

```http
GET /segment/definitions?evaluationInfo.continuous.enabled=true
```

**Request**

+++ A sample request to list all the streaming-enabled segment definitions

```shell
curl -X GET \
  'https://platform.adobe.io/data/core/ups/segment/definitions?evaluationInfo.continuous.enabled=true' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status 200 with an array of segment definitions in your organization that are enabled for streaming segmentation. 

+++A sample response that contains a list of all the streaming-segmentation-enabled segment definitions in your organization

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
                    "enabled": true
                },
                "synchronous": {
                    "enabled": false
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
                    "enabled": true
                },
                "continuous": {
                    "enabled": true
                },
                "synchronous": {
                    "enabled": false
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

More detailed information about the segment definition returned can be found in the [segment definitions endpoint guide](../api/segment-definitions.md).

+++

>[!TAB Audience Portal]

You can retrieve all the audiences that are enabled for streaming segmentation within your organization by using filters in Audience Portal. Select the ![filter icon](../../images/icons/filter.png) icon to display the list of filters.

![The filter icon is highlighted in Audience Portal.](../images/methods/filter-audiences.png)

Within the available filters, go to **[!UICONTROL Update frequency]** and select "[!UICONTROL Streaming]". Using this filter displays all audiences in your organization that are evaluated using streaming segmentation.

![The Streaming update frequency is selected, displaying all audiences in the organization that are evaluated using streaming segmentation.](../images/methods/streaming/filter-streaming.png)

To learn more about viewing audiences in Platform, please read the [Audience Portal guide](../ui/audience-portal.md).

>[!ENDTABS]

## Audience details {#audience-details}

You can view details

INFO

## Next steps

This guide explains how streaming-enabled segment definitions work on Adobe Experience Platform and how to monitor streaming-enabled segment definitions. 

To learn more about using the Adobe Experience Platform user interface, please read the [Segmentation user guide](./overview.md).

For frequently asked questions about streaming segmentation, please read the [streaming segmentation section of the FAQ](../faq.md#streaming-segmentation).
