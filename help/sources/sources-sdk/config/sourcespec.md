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
        "key": "{CATEGORY_OF_CONNECTOR_KEY}"
      },
      "icon": {
        "key": "{ICON_TO_BE_USED_BY_CONNECTOR_KEY}"
      },
      "description": {
        "key": "{CONNECTOR_DESCRIPTION_KEY}"
      },
      "label": {
        "key": "{LABEL_DISPLAYED_FOR_CONNECTOR_KEY}"
      }
    },
    "urlParams": {
      "path": "{RESOURCE_PATH}",
      "method": "{GET or POST}",
      "queryParams": "{QUERY_PARAMS}"
    },
    "headerParams": "{HEADER_VALUES}",
    "bodyParams": "{BODY_PART_INCASE_METHOD_IS_POST}",
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
      "type": "{OFFSET OR POINTER}",
      "limitName": "{NUMBER OF RECORDS ATTRIBUTE NAME}",
      "limitValue": "{NUMBER OF RECORDS PER PAGE}",
      "offSetName": "{OFFSET ATTRIBUTE NAME REQUIRED IN CASE OF OFFSET BASED PAGINATION}",
      "pointerName": "{POINTER_PATH REQUIRED IN CASE OF POINTER BASED PAGINATION}"
    },
    "scheduleParams": {
      "scheduleStartParamName": "{START TIME PARAMETER NAME}",
      "scheduleEndParamName": "{END TIME PARAMETER NAME}",
      "scheduleStartParamFormat": "{DATE TIME FORMAT FOR START TIME}",
      "scheduleEndParamFormat": "{END TIME FORMAT FOR START TIME}"
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

| Source specifications | Description | Example |
| --- | --- | --- |
| `sourceSpec.attributes` | Contains information on the source specific to the UI or API. |
| `sourceSpec.attributes.uiAttributes` | Displays information on the source specific to the UI. |
| `sourceSpec.attributes.uiAttributes.documentationLink` | Displays the documentation link where the usage of this source is documented. | `wwww.adobe.com/go/sources-mailchimp-en` |
| `sourceSpec.attributes.uiAttributes.isBeta` | A boolean attribute that indicates whether the source requires more feedback from customers to add to its functionality. | <ul><li>`true`</li><li>`false`</li></ul> |
| `sourceSpec.attributes.uiAttributes.category` | Defines the category of the source. | <ul><li>`advertising`</li><li>`cloud storage`</li><li>`crm`</li><li>`customer success`</li><li>`database`</li><li>`ecommerce`</li><li>`marketing automation`</li><li>`payments`</li><li>`protocols`</li><li>`streaming`</li></ul> |
| `sourceSpec.attributes.uiAttributes.icon` | Defines the icon used for the rendering of the source in the Platform UI. | `mailchimp-icon.svg` |
| `sourceSpec.attributes.uiAttributes.label` | Displays the label to be used for the rendering of the source in the Platform UI. |
| `sourceSpec.attributes.uiAttributes.description` | Displays a brief description of the source. |
| `sourceSpec.attributes.urlParams.hostName` | Defines the `hostName` of the endpoint to fetch data from. If there are any params in this attribute that you need to acquire from the end user, you can specify it as a template enclosed in (`{{PARAMS}}`). | `https://{{HOST_NAME}}.api.mailchimp.com` |
| `sourceSpec.attributes.urlParams.path` | Defines the resource path from where to fetch the data from. | `/3.0/lists/{{LIST_ID}}/members` |
| `sourceSpec.attributes.urlParams.method` | Defines the HTTP method to be used to make the request to the source to fetch data. | `GET`, `POST` |
| `sourceSpec.attributes.contentPath` | Defines the node that contains the list of items required to be ingested to Platform. This attribute should follow JSON path syntax. | See the [appendix](#appendix) for a detailed example of the `$.members` attribute. |
| `sourceSpec.attributes.queryParams` | Defines the supported query parameters that can be used to append the source URL when making a request to fetch data. These query parameters must be separated with an ampersand (`&`). | `excludes=id&foo=bar&userParam={{USER_PARAM_VALUE}}` |
| `sourceSpec.attributes.headerParams` | Defines the comma (`,`) separated headers that need to be supplied in the HTTP request to source URL while fetching data. | `Content-Type=application/json,foo=bar&userHeader={{USER_HEADER_VALUE}}` |
| `sourceSpec.attributes.paginationParams` | Defines the parameters or fields that must be supplied to get a link to the next page from the user's current page response, or while creating a next page URL. |
| `sourceSpec.attributes.paginationParams.name` | Displays the name of the supported pagination type for your source. | <ul><li>`offset`: This pagination type allows you to parse through results by specifying an index from where to start the resulting array, and a limit on how many results are returned. See the [appendix](#appendix) for a detailed example of the offset type of pagination.</li><li>`pointer`: This pagination type allows you to use a `pointer` variable to point to a particular item that needs to be sent with a request.</li></ul> |
| `sourceSpec.attributes.paginationParams.type` | Displays the type of the supported pagination type for your source. | <ul><li>`offset`: This pagination type allows you to parse through results by specifying an index from where to start the resulting array, and a limit on how many results are returned. See the [appendix](#appendix) for a detailed example of the offset type of pagination.</li><li>`pointer`: This pagination type allows you to use a `pointer` variable to point to a particular item that needs to be sent with a request.</li></ul> |
| `sourceSpec.attributes.scheduleParams` | Contains parameters that define supported scheduling formats for your source. |
| `sourceSpec.attributes.scheduleParams.scheduleStartParamName` | | `since_last_changed` |
| `sourceSpec.attributes.scheduleParams.scheduleEndParamName` | | `before_last_changed` |
| `sourceSpec.attributes.scheduleParams.scheduleStartParamFormat` | Defines the supported format for the `scheduleStartParamName`. | `yyyy-MM-ddTHH:mm:ssZ` |
| `sourceSpec.attributes.scheduleParams.scheduleEndParamFormat` | Defines the supported format for the `scheduleEndParamName`.| `yyyy-MM-ddTHH:mm:ssZ` |
