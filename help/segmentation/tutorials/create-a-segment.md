---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create a segment
topic: tutorial
---

# Create a segment 

This document provides a tutorial for developing, testing, previewing, and saving a segment definition using the [Real-time Customer Profile API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/real-time-customer-profile.yaml). 

For information on how to build segments using the user interface, please see the [Segment Builder guide](../ui/overview.md).

## Getting started

This tutorial requires a working understanding of the various Adobe Experience Platform services involved in creating audience segments. Before beginning this tutorial, please review the documentation for the following services:

- [Real-time Customer Profile](../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
- [Adobe Experience Platform Segmentation Service](../home.md): Allows you to build audience segments from Real-time Customer Profile data.
- [Experience Data Model (XDM)](../../xdm/home.md): The standardized framework by which Platform organizes customer experience data.

The following sections provide additional information that you will need to know in order to successfully make calls to the Platform APIs.

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

### Gather values for required headers

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{IMS_ORG}`

All resources in Experience Platform are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE] For more information on sandboxes in Platform, see the [sandbox overview documentation](../../sandboxes/home.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

- Content-Type: application/json

## Develop a segment definition

The first step in segmentation is to define a segment, represented in a construct called a **segment definition**. A segment definition is an object that encapsulates a query written in Profile Query Language (PQL). This object is also called a **PQL predicate**. PQL predicates define the rules for the segment based on conditions related to any record or time series data you supply to Real-time Customer Profile. See the [PQL guide](../pql/overview.md) for more information on writing PQL queries.

You can create a new segment definition by making a POST request to the `/segment/definitions` endpoint in the Real-time Customer Profile API. The following example outlines how to format a definition request, including what information is required in order for a segment to be defined successfully.

Segment definitions can be evaluated in two ways - batch segmentation and streaming segmentation. Batch segmentation evaluates segments based on a preset schedule or when evaluation is manually triggered, whereas streaming segmentation evaluates segments as soon as data is ingested in Platform. This tutorial will be using **batch segmentation**. For more information on streaming segmentation, please read the [overview on streaming segmentation](../ui/streaming-segmentation.md).

**API format**

```http
POST /segment/definitions
```

**Request**

The following request creates a new segment definition for a schema called "MyProfile".

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/segment/definitions \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "name": "My Sample Cart Abandons Segment Definition",
        "schema": {
            "name": "MyProfile",
        },
        "expression": {
            "type": "PQL",
            "format": "pql/text",
            "value": "xEvent.metrics.commerce.abandons.value > 0",
        },
        "mergePolicyId": "mpid1",
        "description": "This Segment represents those users who have abandoned a cart"
    }'
```

| Property | Description  |
| --------- | ------------ | 
| `name` | **Required.** A unique name by which to refer to the segment. |
| `schema` | **Required.** The schema associated with the entities in the segment. Consists of either an `id` or `name` field. | 
| `expression` | **Required.** An entity that contains fields information about the segment definition. |
| `expression.type` | Specifies the expression type. Currently, only "PQL" is supported. |
| `expression.format` | Indicates the structure of the expression in value. Currently, the following format is supported: <ul><li>`pql/text`: A textual representation of a segment definition, according to the published PQL grammar.  For example, `workAddress.stateProvince = homeAddress.stateProvince`.</li></ul> |
| `expression.value` | An expression that conforms to the type indicated in `expression.format`. |
| `mergePolicyId` | The identifier of the merge policy to use for the exported data. For more information, please read the [merge policy configuration document](../../profile/api/merge-policies.md). |
| `description` | A human readable description of the definition. |

**Response**

A successful response returns the details of the newly created segment definition, including its system-generated, read-only `id` which will be used later in this tutorial.

```json
{
    "id": "1234",
    "name": "My Sample Cart Abandons Segment Definition",
    "description": "This Segment represents those users who have abandoned a cart",
    "type": "PQL",
    "format": "pql/text",
    "expression": "xEvent.metrics.commerce.abandons.value > 0",
    "_links": {
        "self": {
            "href": "https://platform.adobe.io/data/core/ups/segment/definitions/1234"
        }
    }
}
```

## Estimate and preview an audience

As you develop your segment definition, you can use the estimate and preview tools within Real-time Customer Profile to view summary-level information to help ensure you are isolating the expected audience. Estimates provide statistical information on a segment definition, such as the projected audience size and confidence interval. Previews provide paginated lists of qualifying profiles for a segment definition, allowing you to compare the results against what you expect.

By estimating and previewing your audience, you can test and optimize your PQL predicates until they produce a desireable result, where they can then be used in an updated segment definition.

There are two required steps to preview or get an estimate of your segment:

1. [Create a preview job](#create-a-preview-job)
2. [View estimate or preview](#view-an-estimate-or-preview) using the ID of the preview job
  
### How estimates are generated

Data samples are used to evaluate segments and estimate the number of qualifying profiles. New data is loaded into memory each morning (between 12AM-2AM PT, which is 7-9AM UTC), and all segmentation queries are estimated using that day's sample data. Consequently, any new fields added or additional data collected will be reflected in estimates the following day.

The sample size depends on the overall number of entities in your profile store. These sample sizes are represented in the following table:

| Entities in profile store | Sample size |
| ------------------------- | ----------- |
| Less than 1 million | Full data set |
| 1 to 20 million | 1 million |
| Over 20 million | 5% of total |

Estimates generally run over 10-15 seconds, beginning with a rough estimate and refining as more records are read.

### Create a preview job

You can create a new preview job by making a POST request to the `/preview` endpoint.
 
**API format**

```http
POST /preview
```

**Request**

The following request creates a new preview job. The request body contains the query information related to the segment.

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/preview \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
  -d '{
        "predicateExpression": "xEvent.metrics.commerce.abandons.value > 0",
        "predicateType": "pql/text",
        "predicateModel": "_xdm.context.profile",
        "graphType": "simple",
        "mergeStrategy": "simple"
    }'
```

| Property | Description | 
| --------- | ----------- |
| `predicateExpression` | The PQL expression to query the data by. |
| `predicateModel` | The name of the XDM schema the Profile data is based on. |

**Response**

A successful response returns the details of the newly created preview job, including its ID and current processing state.

```json
{
   "state": "RUNNING",
   "previewQueryId": "4a45e853-ac91-4bb7-a426-150937b6af5c",
   "previewQueryStatus": "RUNNING",
   "previewId": "MDoyOjRhNDVlODUzLWFjOTEtNGJiNy1hNDI2LTE1MDkzN2I2YWY1Yzo0Mg",
   "previewExecutionId": 42
}
```

| Property | Description | 
| -------- | ----------- |
| `state` | The current state of the preview job. It will be in the "RUNNING" state until processing is complete, at which point it becomes "RESULT_READY" or "FAILED". |
| `previewId` | The ID of the preview job, to be used for lookup purposes when viewing an estimate or preview, as outlined in the following section. |

### View an estimate or preview

Estimate and preview processes are run asynchronously as different queries can take different lengths of time to complete. Once a query has been initiated, you can use API calls to retrieve (GET) the current state of the estimate or preview as it progresses.

Using the Real-time Customer Profile API, you can lookup a preview job's current state by its ID. If the state is "RESULT_READY", you can view the results. Depending on whether you want to view an estimate or a preview, each have their own endpoint in the API. Examples for both are provided below.

### View an estimate

**API format**

```http
GET /estimate/{PREVIEW_ID}
```

| Property | Description | 
| -------- | ----------- |
| `{PREVIEW_ID}` | The ID of the preview job you want to view. |

**Request**

The following request retrieves an estimate, using the `previewId` created in the previous step.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/estimate/MDoyOjRhNDVlODUzLWFjOTEtNGJiNy1hNDI2LTE1MDkzN2I2YWY1Yzo0Mg \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the details of the estimate.

```json
{
    "estimatedSize": 45,
    "state": "RESULT_READY",
    "profilesReadSoFar": 83834,
    "standardError": 0,
    "error": {
        "description": "",
        "traceback": ""
    },
    "profilesMatchedSoFar": 46,
    "totalRows": 82473,
    "confidenceInterval": "95%",
    "_links": {
        "preview": "https://platform.adobe.io/data/core/ups/preview?previewQueryId=f88bc056-ee48-40d5-9ddb-8865d7d6a0e0"
    }
}
```

| Property | Description | 
| -------- | ----------- |
| `state` | The current state of the preview job. Will be "RUNNING" until processing is complete, at which point it becomes "RESULT_READY" or "FAILED". |
| `_links.preview` | When the preview job's current state is "RESULT_READY", this attribute provides a URL to view the estimate. |

### View a preview**

**API format**

```http
GET /preview/{PREVIEW_ID}
```

| Property | Description | 
| -------- | ----------- |
| `{PREVIEW_ID}` | The ID of the preview job you want to view. |

**Request**

The following request retrieves a preview, using the `previewId` created in the previous step.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/preview/MDoyOjRhNDVlODUzLWFjOTEtNGJiNy1hNDI2LTE1MDkzN2I2YWY1Yzo0Mg \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns details of the preview.

```json
{
   "results": [{
         "XID_ADOBE-MARKETING-CLOUD-ID-1": {
            "_href": "https://platform.adobe.io/data/core/ups/models/profile/XID_ADOBE-MARKETING-CLOUD-ID-1",
            "endCustomerIds": {
               "XID_COOKIE_ID_1": {
                  "_href": "https://platform.adobe.io/data/core/ups/models/profile/XID_COOKIE_ID_1"
               },
               "XID_PROFILE_ID_1": {
                  "_href": "https://platform.adobe.io/data/core/ups/models/profile/XID_PROFILE_ID_1"
               }
            }
         }
      },
      {
         "XID_COOKIE-ID-2": {
            "_href": "https://platform.adobe.io/data/core/ups/models/profile/XID_COOKIE-ID-2",
            "endCustomerIds": {
               "XID_COOKIE_ID_2-1": {
                  "_href": "https://platform.adobe.io/data/core/ups/models/profile/XID_COOKIE_ID_2-1"

               },
               "XID_PROFILE_ID_2": {
                  "_href": "https://platform.adobe.io/data/core/ups/models/profile/XID_PROFILE_ID_2"
               }
            }
         },
         "XID_ADOBE-MARKETING-CLOUD-ID-3": {
            "_href": "https://platform.adobe.io/data/core/ups/models/profile/XID_ADOBE-MARKETING-CLOUD-ID-1000"
         },
         "state": "RESULT_READY",
         "links": {
            "_self": "https://platform.adobe.io/data/core/ups/preview?expression=<expr-1>&limit=1000",
            "next": "",
            "prev": ""
         }
      }
   ],
   "page": {
      "offset": 0,
      "size": 3
   }
}
```

## Next steps

Once you have developed, tested, and saved your segment definition, you can create a segment job to build an audience using the Real-time Customer Profile API. See the tutorial on [evaluating and accessing segment results](./evaluate-a-segment.md) for detailed steps on how to accomplish this.