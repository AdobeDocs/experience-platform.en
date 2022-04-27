---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
title: Configure source specifications for Sources SDK
topic-legacy: overview
description: This document provides an overview of the configurations you need to prepare in order to use Sources SDK.
hide: true
hidefromtoc: true
exl-id: f814c883-b529-4ecc-bedd-f638bf0014b5
---
# Configure source specification for Sources SDK

Source specifications contain information specific to a source, including attributes pertaining to a source's category, beta status, and catalog icon. They also contain useful information such as URL parameters, content, header, and schedule. Source specifications also describe the schema of the parameters required to create a source connection from a base connection. The schema is necessary in order to create a source connection.

See the [appendix](#source-spec) for an example of a fully-populated source specification.


```json
"sourceSpec": {
  "attributes": {
    "uiAttributes": {
      "isSource": true,
      "isPreview": true,
      "isBeta": true,
      "category": {
        "key": "protocols"
      },
      "icon": {
        "key": "genericRestIcon"
      },
      "description": {
        "key": "genericRestDescription"
      },
      "label": {
        "key": "genericRestLabel"
      }
    },
    "spec": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "description": "Defines static and user input parameters to fetch resource values.",
      "properties": {
        "urlParams": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string",
              "description": "Enter resource path",
              "example": "/3.0/reports/campaignId/email-activity"
            },
            "method": {
              "type": "string",
              "description": "HTTP method type.",
              "enum": [
                "GET",
                "POST"
              ]
            },
            "queryParams": {
              "type": "object",
              "description": "The query parameters in json format",
            }
          },
          "required": [
            "path",
            "method"
          ]
        },
        "headerParams": {
          "type": "object",
          "description": "The header parameters in json format",
        },
        "contentPath": {
          "type": "object",
          "description": "The parameters required for main collection content.",
          "properties": {
            "path": {
              "description": "The path to the main content.",
              "type": "string",
              "example": "$.emails"
            },
            "skipAttributes": {
              "type": "array",
              "description": "The list of attributes that needs to be skipped while fattening the array.",
              "example": "[total_items]",
              "items": {
                "type": "string"
              }
            },
            "keepAttributes": {
              "type": "array",
              "description": "The list of attributes that needs to be kept while fattening the array.",
              "example": "[total_items]",
              "items": {
                "type": "string"
              }
            },
            "overrideWrapperAttribute": {
              "type": "string",
              "description": "The new name to be used for the root content path node.",
              "example": "email"
            }
          },
          "required": [
            "path"
          ]
        },
        "explodeEntityPath": {
          "type": "object",
          "description": "The parameters required for the sub-array content.",
          "properties": {
            "path": {
              "description": "The path to the sub-array content.",
              "type": "string",
              "example": "$.email.activity"
            },
            "skipAttributes": {
              "type": "array",
              "description": "The list of attributes that needs to be skipped while fattening sub-array.",
              "example": "[total_items]",
              "items": {
                "type": "string"
              }
            },
            "keepAttributes": {
              "type": "array",
              "description": "The list of attributes that needs to be kept while fattening the sub-array.",
              "example": "[total_items]",
              "items": {
                "type": "string"
              }
            },
            "overrideWrapperAttribute": {
              "type": "string",
              "description": "The new name to be used for the  root content path node.",
              "example": "activity"
            }
          },
          "required": [
            "path"
          ]
        },
        "paginationParams": {
          "type": "object",
          "description": "The parameters required to fetch data using pagination.",
          "properties": {
            "type": {
              "description": "The pagination fetch type.",
              "type": "string",
              "enum": [
                "OFFSET",
                "POINTER"
              ]
            },
            "limitName": {
              "type": "string",
              "description": "The limit property name",
              "example": "limit or count"
            },
            "limitValue": {
              "type": "integer",
              "description": "The number of records to fetch per page.",
              "example": "limit=10 or count=10"
            },
            "offsetName": {
              "type": "string",
              "description": "The offset property name",
              "example": "offset"
            },
            "pointerPath": {
              "type": "string",
              "description": "The path to pointer property",
              "example": "$.paging.next"
            }
          },
          "required": [
            "type",
            "limitName",
            "limitValue"
          ]
        },
        "scheduleParams": {
          "type": "object",
          "description": "The parameters required to fetch data for batch schedule.",
          "properties": {
            "scheduleStartParamName": {
              "type": "string",
              "description": "The order property name to get the order by date."
            },
            "scheduleEndParamName": {
              "type": "string",
              "description": "The order property name to get the order by date."
            },
            "scheduleStartParamFormat": {
              "type": "string",
              "description": "The order property name to get the order by date.",
              "example": "yyyy-MM-ddTHH:mm:ssZ"
            },
            "scheduleEndParamFormat": {
              "type": "string",
              "description": "The order property name to get the order by date.",
              "example": "yyyy-MM-ddTHH:mm:ssZ"
            }
          },
          "required": [
            "scheduleStartParamName",
            "scheduleEndParamName"
          ]
        }
      },
      "required": [
        "urlParams",
        "contentPath",
        "paginationParams",
        "scheduleParams"
      ]
    }
  },
}
```

| Property | Description | Example |
| --- | --- | --- |
| `sourceSpec.attributes` | Contains information on the source specific to the UI or API. |
| `sourceSpec.attributes.uiAttributes` | Displays information on the source specific to the UI. |
| `sourceSpec.attributes.uiAttributes.isBeta` | A boolean attribute that indicates whether the source requires more feedback from customers to add to its functionality. | <ul><li>`true`</li><li>`false`</li></ul> |
| `sourceSpec.attributes.uiAttributes.category` | Defines the category of the source. | <ul><li>`advertising`</li><li>`crm`</li><li>`customer success`</li><li>`database`</li><li>`ecommerce`</li><li>`marketing automation`</li><li>`payments`</li><li>`protocols`</li></ul> |
| `sourceSpec.attributes.uiAttributes.icon` | Defines the icon used for the rendering of the source in the Platform UI. | `mailchimp-icon.svg` |
| `sourceSpec.attributes.uiAttributes.description` | Displays a brief description of the source. |
| `sourceSpec.attributes.uiAttributes.label` | Displays the label to be used for the rendering of the source in the Platform UI. |
| `sourceSpec.attributes.spec.properties.urlParams`| Contains information on the URL resource path, method, and supported query parameters. |
| `sourceSpec.attributes.spec.properties.urlParams.properties.path` | Defines the resource path from where to fetch the data from. | `/3.0/reports/${campaignId}/email-activity` |
| `sourceSpec.attributes.spec.properties.urlParams.properties.method` | Defines the HTTP method to be used to make the request to the resource to fetch data. | `GET`, `POST` |
| `sourceSpec.attributes.spec.properties.urlParams.properties.queryParams` | Defines the supported query parameters that can be used to append the source URL when making a request to fetch data. **Note**: Any user-provided parameter value must be formatted as a placeholder. For example: `${USER_PARAMETER}`. | `"queryParams" : {"key" : "value", "key1" : "value1"}` will be appended to the source URL as: `/?key=value&key1=value1` |
| `sourceSpec.attributes.spec.properties.spec.properties.headerParams` | Defines headers that need to be supplied in the HTTP request to source URL while fetching data. | `"headerParams" : {"Content-Type" : "application/json", "x-api-key" : "key"}` |
| `sourceSpec.attributes.spec.properties.contentPath` | Defines the node that contains the list of items required to be ingested to Platform. This attribute should follow valid JSON path syntax and must point to a particular array. | See the [appendix](#content-path) for an example of the resource contained within a content path. |
| `sourceSpec.attributes.spec.properties.contentPath.path` | The path that points to the collection records to be ingested to Platform. | `$.emails` |
| `sourceSpec.attributes.spec.properties.contentPath.skipAttributes` | This property allows you to identify specific items from the resource identified in the content path that are to be excluded from being ingested. | `[total_items]` |
| `sourceSpec.attributes.spec.properties.contentPath.keepAttributes` | This property allows you to explicitly specify the individual attributes that you want to keep. |  `[total_items]` |
| `sourceSpec.attributes.spec.properties.contentPath.overrideWrapperAttribute` | This property allows you to override the value of attribute name you specified in `contentPath`. | `email` |
| `sourceSpec.attributes.spec.properties.explodeEntityPath` | This property allows you to flatten two arrays and transform resource data to Platform resource. |
| `sourceSpec.attributes.spec.properties.explodeEntityPath.path` | The path that points to the collection records that you want to flatten. | `$.email.activity` |
| `sourceSpec.attributes.spec.properties.explodeEntityPath.skipAttributes` | This property allows you to identify specific items from the resource identified in the entity path that are to be excluded from being ingested. | `[total_items]` |
| `sourceSpec.attributes.spec.properties.explodeEntityPath.keepAttributes` | This property allows you to explicitly specify the individual attributes that you want to keep. | `[total_items]` |
| `sourceSpec.attributes.spec.properties.explodeEntityPath.overrideWrapperAttribute` | This property allows you to override the value of attribute name you specified in `explodeEntityPath`. | `activity` |
| `sourceSpec.attributes.spec.properties.paginationParams` | Defines the parameters or fields that must be supplied to get a link to the next page from the user's current page response, or while creating a next page URL. |
| `sourceSpec.attributes.spec.properties.paginationParams.type` | Displays the type of the supported pagination type for your source. | <ul><li>`offset`: This pagination type allows you to parse through results by specifying an index from where to start the resulting array, and a limit on how many results are returned.</li><li>`pointer`: This pagination type allows you to use a `pointer` variable to point to a particular item that needs to be sent with a request. The pointer type pagination requires path in payload that point to next page</li></ul> |
| `sourceSpec.attributes.spec.properties.paginationParams.limitName` | The name for the limit through which the API can specify the number of records to be fetched in a page. | `limit` or `count` |
| `sourceSpec.attributes.spec.properties.paginationParams.limitValue` | The number of records to be fetched in a page. | `limit=10` or `count=10` |
| `sourceSpec.attributes.spec.properties.paginationParams.offSetName` | The offset attribute name. This is required if pagination type is set to `offset`. | `offset` |
| `sourceSpec.attributes.spec.properties.paginationParams.pointerPath` | The pointer attribute name. This requires json path to the attribute that will point to next page. This is required if pagination type is set to `pointer`. | `pointer` |
| `sourceSpec.attributes.spec.properties.scheduleParams` | Contains parameters that define supported scheduling formats for your source. Schedule parameters include `startTime` and `endTime`, both of which allows you to set specific time intervals for batch runs, which then ensures that records fetched in a previous batch run are not fetched again. |
| `sourceSpec.attributes.spec.properties.scheduleParams.scheduleStartParamName` | Defines the start time parameter name | `since_last_changed` |
| `sourceSpec.attributes.spec.properties.scheduleParams.scheduleEndParamName` | Defines the end time parameter name | `before_last_changed` |
| `sourceSpec.attributes.spec.properties.scheduleParams.scheduleStartParamFormat` | Defines the supported format for the `scheduleStartParamName`. | `yyyy-MM-ddTHH:mm:ssZ` |
| `sourceSpec.attributes.spec.properties.scheduleParams.scheduleEndParamFormat` | Defines the supported format for the `scheduleEndParamName`.| `yyyy-MM-ddTHH:mm:ssZ` |
| `sourceSpec.spec.properties` | Defines the user-provided parameters to fetch resource values. | See the [appendix](#user-input) for an example user-inputted parameters for `spec.properties`. |

{style="table-layout:auto"}

## Appendix {#appendix}

### Content path example {#content-path}

The following is an example of the contents of the `contentPath` property in a [!DNL MailChimp Campaigns] connection specification.

```json
"contentPath": {
  "path": "$.members",
  "skipAttributes": [
    "_links",
    "total_items",
    "list_id"
  ],
  "overrideWrapperAttribute": "member"
}
```

### `spec.properties` user input example {#user-input}

The following is an example of a user-provided `spec.properties` using a [!DNL MailChimp Members] connection specification.

In this example, `listId` is provided as part of `urlParams.path`. If you need to retrieve `listId` from a customer, then you must also define it as part of `spec.properties`.


```json
"urlParams": {
        "path": "/3.0/lists/${listId}/members",
        "method": "GET"
      }
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
```

### Source specification example {#source-spec}

The following is a completed source specification using [!DNL MailChimp Members]:

```json
  "sourceSpec": {
    "attributes": {
      "uiAttributes": {
        "isSource": true,
        "isPreview": true,
        "isBeta": true,
        "category": {
          "key": "marketingAutomation"
        },
        "icon": {
          "key": "mailchimpMembersIcon"
        },
        "description": {
          "key": "mailchimpMembersDescription"
        },
        "label": {
          "key": "mailchimpMembersLabel"
        }
      },
      "urlParams": {
        "path": "/3.0/lists/${listId}/members",
        "method": "GET"
      },
      "contentPath": {
        "path": "$.members",
        "skipAttributes": [
          "_links",
          "total_items",
          "list_id"
        ],
        "overrideWrapperAttribute": "member"
      },
      "paginationParams": {
        "type": "OFFSET",
        "limitName": "count",
        "limitValue": "100",
        "offSetName": "offset"
      },
      "scheduleParams": {
        "scheduleStartParamName": "since_last_changed",
        "scheduleEndParamName": "before_last_changed",
        "scheduleStartParamFormat": "yyyy-MM-ddTHH:mm:ss:fffffffK",
        "scheduleEndParamFormat": "yyyy-MM-ddTHH:mm:ss:fffffffK"
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

## Next steps

With your source specifications populated, you can proceed to configure the explore specifications for the source that you want to integrate to Platform. See the the document on [configuring explore specifications](./explorespec.md) for more information.
