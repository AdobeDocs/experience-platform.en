---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
title: Configure authentication specifications for Sources SDK
topic-legacy: overview
description: This document provides an overview of the configurations you need to prepare in order to use Sources SDK.
---

# Configure source specification for Sources SDK

Source specifications contain information specific to a source, including attributes pertaining to a source's category, beta status, and catalog icon. Source specifications also contain information regarding parameters for the URL, content, header, and schedule, among others. Source specifications also describes the schema of the parameters required to create a source connection from a base connection, and is necessary in order to create a source connection.


```json
"sourceSpec": {
  "attributes": {
    "uiAttributes": {
      "isSource": true,
      "isPreview": true,
      "isBeta": true,
      "category": {
        "key": "{CATEGORY}"
      },
      "icon": {
        "key": "{ICON}"
      },
      "description": {
        "key": "{DESCRIPTION}"
      },
      "label": {
        "key": "{LABEL}"
      }
    },
    "urlParams": {
      "path": "{RESOURCE_PATH}",
      "method": "{GET_or_POST}",
      "queryParams": "{QUERY_PARAMS}"
    },
    "headerParams": "{HEADER_VALUES}",
    "bodyParams": "{BODY_PARAMS_USED_IF_METHOD_IS_POST}",
    "contentPath": {
      "path": "{PATH_SHOULD_POINT_TO_COLLECTION_OF_RECORDS}",
      "skipAttributes": [],
      "overrideWrapperAttribute": "{OVERRIDE_ATTRIBUTES}"
    },
    "explodeEntityPath": {
      "path": "{PATH_SHOULD_POINT_TO_COLLECTION_OF_RECORDS}",
      "skipAttributes": [],
      "overrideWrapperAttribute": "{OVERRIDE_ATTRIBUTES}"
    },
    "paginationParams": {
      "type": "{OFFSET_OR_POINTER}",
      "limitName": "{NUMBER_OF_RECORDS_ATTRIBUTE_NAME}",
      "limitValue": "{NUMBER_OF_RECORDS_PER_PAGE}",
      "offSetName": "{OFFSET_ATTRIBUTE_NAME_REQUIRED_IN_CASE_OF_OFFSET BASED_PAGINATION}",
      "pointerName": "{POINTER_PATH_REQUIRED_IN__CASE_OF_POINTER BASED_PAGINATION}"
    },
    "scheduleParams": {
      "scheduleStartParamName": "{START_TIME_PARAMETER_NAME}",
      "scheduleEndParamName": "{END_TIME_PARAMETER_NAME}",
      "scheduleStartParamFormat": "{DATE_TIME_FORMAT_FOR_START_TIME}",
      "scheduleEndParamFormat": "{END_TIME_FORMAT_FOR_START_TIME}"
    }
  },
  "spec": {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "description": "Define user input parameters to fetch resource values.",
    "properties": {
      "listId": {
        "type": "string",
        "description": "listId for which members need to fetch."
      }
    }
  }
}
```

| Property | Description | Example |
| --- | --- | --- |
| `sourceSpec.attributes` | Contains information on the source specific to the UI or API. |
| `sourceSpec.attributes.uiAttributes` | Displays information on the source specific to the UI. |
| `sourceSpec.attributes.uiAttributes.isSource` |
| `sourceSpec.attributes.uiAttributes.isPreview` |
| `sourceSpec.attributes.uiAttributes.isBeta` | A boolean attribute that indicates whether the source requires more feedback from customers to add to its functionality. | <ul><li>`true`</li><li>`false`</li></ul> |
| `sourceSpec.attributes.uiAttributes.category` | Defines the category of the source. | <ul><li>`advertising`</li><li>`cloud storage`</li><li>`crm`</li><li>`customer success`</li><li>`database`</li><li>`ecommerce`</li><li>`marketing automation`</li><li>`payments`</li><li>`protocols`</li><li>`streaming`</li></ul> |
| `sourceSpec.attributes.uiAttributes.icon` | Defines the icon used for the rendering of the source in the Platform UI. | `mailchimp-icon.svg` |
| `sourceSpec.attributes.uiAttributes.description` | Displays a brief description of the source. |
| `sourceSpec.attributes.uiAttributes.label` | Displays the label to be used for the rendering of the source in the Platform UI. |
| `sourceSpec.attributes.urlParams`|
| `sourceSpec.attributes.urlParams.path` | Defines the resource path from where to fetch the data from. | `/3.0/reports/${campaignId}/email-activity` |
| `sourceSpec.attributes.urlParams.method` | Defines the HTTP method to be used to make the request to the resource to fetch data. | `GET`, `POST` |
| `sourceSpec.attributes.urlParams.queryParams` | Defines the supported query parameters that can be used to append the source URL when making a request to fetch data. Query parameters must be comma (`,`) separated key-value pairs. **Note**: Any user-provided parameter value must be formatted as a placeholder. For example: `${USER_PARAMETER}`. | `exclude_fields=emails._links,id=${id}` |
| `sourceSpec.attributes.headerParams` | Defines the comma (`,`) separated headers that need to be supplied in the HTTP request to source URL while fetching data. | `Content-Type=application/json,foo=bar&userHeader={{USER_HEADER_VALUE}}` |
| `sourceSpec.attributes.bodyParams` | Defines the required body parameters. This property is only used if `urlParams.method` is set to `POST`. | 
| `sourceSpec.attributes.contentPath` | Defines the node that contains the list of items required to be ingested to Platform. This attribute should follow valid JSON path syntax and must point to a particular array. | See the [appendix](#appendix) for an example of the resource contained within a content path. |
| `sourceSpec.attributes.contentPath.path` | The path that points to the collection records to be ingested to Platform. | `$.emails` |
| `sourceSpec.attributes.contentPath.skipAttributes` | This property allows you to identify specific items from the resource identified in the content path that are to be excluded from being ingested. |
| `sourceSpec.attributes.contentPath.overrideWrapperAttribute` |
| `sourceSpec.attributes.explodeEntityPath` | This property allows you to flatten two arrays and transform resource data to Platform resource. |
| `sourceSpec.attributes.explodeEntityPath.path` | The path that points to the collection records that you want to flatten. | `$.email.activity` |
| `sourceSpec.attributes.explodeEntityPath.skipAttributes` | This property allows you to identify specific items from the resource identified in the entity path that are to be excluded from being ingested. |
| `sourceSpec.attributes.explodeEntityPath.overrideWrapperAttribute` |
| `sourceSpec.attributes.paginationParams` | Defines the parameters or fields that must be supplied to get a link to the next page from the user's current page response, or while creating a next page URL. |
| `sourceSpec.attributes.paginationParams.type` | Displays the type of the supported pagination type for your source. | <ul><li>`offset`: This pagination type allows you to parse through results by specifying an index from where to start the resulting array, and a limit on how many results are returned.</li><li>`pointer`: This pagination type allows you to use a `pointer` variable to point to a particular item that needs to be sent with a request.</li></ul> |
| `sourceSpec.attributes.paginationParams.limitName` | The name for the limit through which the API can specify the number of records to be fetched in a page. | `count` |
| `sourceSpec.attributes.paginationParams.limitValue` | The number of records to be fetched in a page. | `100` |
| `sourceSpec.attributes.paginationParams.offSetName` | The offset attribute name. This is required if pagination type is set to `offset`. | `offset` |
| `sourceSpec.attributes.paginationParams.pointerName` | The pointer attribute name. This is required if pagination type is set to `pointer`. | `pointer` |
| `sourceSpec.attributes.scheduleParams` | Contains parameters that define supported scheduling formats for your source. |
| `sourceSpec.attributes.scheduleParams.scheduleStartParamName` | Defines the start time parameter name | `since_last_changed` |
| `sourceSpec.attributes.scheduleParams.scheduleEndParamName` | Defines the end time parameter name | `before_last_changed` |
| `sourceSpec.attributes.scheduleParams.scheduleStartParamFormat` | Defines the supported format for the `scheduleStartParamName`. | `yyyy-MM-ddTHH:mm:ssZ` |
| `sourceSpec.attributes.scheduleParams.scheduleEndParamFormat` | Defines the supported format for the `scheduleEndParamName`.| `yyyy-MM-ddTHH:mm:ssZ` |

{style="table-layout:auto"}

## Appendix {#appendix}

The following contains further information on `contentPath`

```json
{
  "emails": [
    {
      "campaign_id": "c66a200cda",
      "list_id": "10c097ca71",
      "list_is_active": true,
      "email_id": "cff65fb4c5f5828666ad846443720efd",
      "email_address": "kendall2134@gmail.com",
      "activity": [
        {
          "action": "bounce",
          "type": "hard",
          "timestamp": "2021-09-27T09:26:17+00:00"
        }
      ]
    },
    {
      "campaign_id": "c66a200cda",
      "list_id": "10c097ca71",
      "list_is_active": true,
      "email_id": "7af33ff174dc1547754c77d9152d4673",
      "email_address": "kendall3235@gmail.com",
      "activity": [
        {
          "action": "bounce",
          "type": "hard",
          "timestamp": "2021-09-27T09:26:17+00:00"
        },
        {
          "action": "bounce",
          "type": "hard",
          "timestamp": "2021-09-27T09:26:17+00:00"
        }
      ]
    }
  ],
  "campaign_id": "c66a200cda",
  "total_items": 26
}
```

