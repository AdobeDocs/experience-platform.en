---
solution: Experience Platform
title: Edge Segmentation using the API 
description: This document contains examples on how to use edge segmentation with the Adobe Experience Platform Segmentation Service API.
role: Developer
exl-id: effce253-3d9b-43ab-b330-943fb196180f
---
# Edge segmentation

>[!NOTE]
>
>The following document states how to perform edge segmentation using the API. For information performing edge segmentation using the UI, please read the [edge segmentation UI guide](../ui/edge-segmentation.md). 
>
>Edge segmentation is now generally available to all Platform users. If you created edge segment definitions during the beta, these segment definitions will continue to be operational.

Edge segmentation is the ability to evaluate segment definitions in Adobe Experience Platform instantaneously on the edge, enabling same page and next page personalization use cases. 

>[!IMPORTANT]
>
> The edge data will be stored in an edge server location closest to where it was collected and may be stored in a location other than the one designated as the hub (or principal) Adobe Experience Platform data center.
>
> Additionally, the edge segmentation engine will only honor requests on the edge where there is **one** primary marked identity, which is consistent with non-edge-based primary identities.

## Getting started

This developer guide requires a working understanding of the various [!DNL Adobe Experience Platform] services involved with edge segmentation. Before beginning this tutorial, please review the documentation for the following services:

- [[!DNL Real-Time Customer Profile]](../../profile/home.md): Provides a unified consumer profile in real-time, based on aggregated data from multiple sources.
- [[!DNL Adobe Experience Platform Segmentation Service]](../home.md): Allows you to build audiences from [!DNL Real-Time Customer Profile] data.
- [[!DNL Experience Data Model (XDM)]](../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes customer experience data.

In order to successfully make calls to any Experience Platform API endpoints, please read the guide on [getting started with Platform APIs](../../landing/api-guide.md) to learn about required headers and how to read sample API calls.

## Edge segmentation query types {#query-types}

In order for a segment to be evaluated using edge segmentation, the query must conform to the following guidelines:

| Query type | Details |
| ---------- | ------- |
| Single event within a time window of less than 24 hours | Any segment definition that refers to a single incoming event within a time window of less than 24 hours. |
| Profile only | Any segment definition that refers to only a profile attribute. |
| Single event with a profile attribute within a relative time window of less than 24 hours | Any segment definition that refers to a single incoming event, with one or more profile attributes, and occurs within a relative time window of less than 24 hours. |
| Segment of segments | Any segment definition that contains one or more batch or streaming segment definitions. **Note:** If segment of segments is used with **batch** segment definitions, profile disqualification can take **up to 24 hours** to occur. If segment of segments is used with **streaming** segment definitions, profile disqualification will occur in a streaming manner. |
| Multiple events with a profile attribute | Any segment definition that refers to multiple non-sequential events **within the last 24 hours** and (optionally) has one or more profile attributes. |

Additionally, the segment **must** be tied to a merge policy that is active on edge. For more information about merge policies, please read the [merge policies guide](../../profile/api/merge-policies.md).

A segment definition will **not** be enabled for edge segmentation in the following scenarios:

- The segment definition includes a combination of a single event and an `inSegment` event.
  - However, if the segment contained in the `inSegment` event is profile only, the segment definition **will** be enabled for edge segmentation.
- The segment definition uses "Ignore year" as part of its time constraints.

## Retrieve all segments enabled for edge segmentation

You can retrieve a list of all segments that are enabled for edge segmentation within your organization by making a GET request to the `/segment/definitions` endpoint.

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

A successful response returns an array of segments in your organization that are enabled for edge segmentation. More detailed information about the segment definition returned can be found in the [segment definitions endpoint guide](./segment-definitions.md).

```json
{
    "segments": [
        {
            "id": "15063cb-2da8-4851-a2e2-bf59ddd2f004",
            "schema": {
                "name": "_xdm.context.profile"
            },
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

## Appendix

The following section lists frequently asked questions regarding edge segmentation:

### How long does it take for a segment to be available on the Edge Network?

It takes up to one hour for a segment to be available on the Edge Network.
