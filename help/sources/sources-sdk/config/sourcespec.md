---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
title: Configure source specifications for Self-Serve Sources (Batch SDK)
description: This document provides an overview of the configurations you need to prepare in order to use Self-Serve Sources (Batch SDK).
exl-id: f814c883-b529-4ecc-bedd-f638bf0014b5
---
# Configure source specification for Self-Serve Sources (Batch SDK)

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
            "host": {
              "type": "string",
              "description": "Enter resource url host path.",
              "example": "https://{domain}.api.mailchimp.com"
            },
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
            "host",
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
| `sourceSpec.attributes.spec.properties.bodyParams` | This attribute can be configured to send HTTP body through a POST request. |
| `sourceSpec.attributes.spec.properties.contentPath` | Defines the node that contains the list of items required to be ingested to Platform. This attribute should follow valid JSON path syntax and must point to a particular array. | View the [additional resources section](#content-path) for an example of the resource contained within a content path. |
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
| `sourceSpec.attributes.spec.properties.paginationParams.type` | Displays the type of the supported pagination type for your source. | <ul><li>`OFFSET`: This pagination type allows you to parse through results by specifying an index from where to start the resulting array, and a limit on how many results are returned.</li><li>`POINTER`: This pagination type allows you to use a `pointer` variable to point to a particular item that needs to be sent with a request. The pointer type pagination requires path in payload that point to next page.</li><li>`CONTINUATION_TOKEN`: This pagination type allows you to append your query or header parameters with a continuation token to retrieve remaining return data from your source, that was not initially returned due to a pre-determined maximum.</li><li>`PAGE`: This pagination type allows you to append your query parameter with a paging parameter to traverse through return data by pages, starting from page zero.</li><li>`NONE`: This pagination type can be used for sources that do not support any of the available pagination types. Pagination type `NONE` returns the entire response data after a request.</li></ul> |
| `sourceSpec.attributes.spec.properties.paginationParams.limitName` | The name for the limit through which the API can specify the number of records to be fetched in a page. | `limit` or `count` |
| `sourceSpec.attributes.spec.properties.paginationParams.limitValue` | The number of records to be fetched in a page. | `limit=10` or `count=10` |
| `sourceSpec.attributes.spec.properties.paginationParams.offSetName` | The offset attribute name. This is required if pagination type is set to `offset`. | `offset` |
| `sourceSpec.attributes.spec.properties.paginationParams.pointerPath` | The pointer attribute name. This requires json path to the attribute that will point to next page. This is required if pagination type is set to `pointer`. | `pointer` |
| `sourceSpec.attributes.spec.properties.scheduleParams` | Contains parameters that define supported scheduling formats for your source. Schedule parameters include `startTime` and `endTime`, both of which allows you to set specific time intervals for batch runs, which then ensures that records fetched in a previous batch run are not fetched again. |
| `sourceSpec.attributes.spec.properties.scheduleParams.scheduleStartParamName` | Defines the start time parameter name | `since_last_changed` |
| `sourceSpec.attributes.spec.properties.scheduleParams.scheduleEndParamName` | Defines the end time parameter name | `before_last_changed` |
| `sourceSpec.attributes.spec.properties.scheduleParams.scheduleStartParamFormat` | Defines the supported format for the `scheduleStartParamName`. | `yyyy-MM-ddTHH:mm:ssZ` |
| `sourceSpec.attributes.spec.properties.scheduleParams.scheduleEndParamFormat` | Defines the supported format for the `scheduleEndParamName`.| `yyyy-MM-ddTHH:mm:ssZ` |
| `sourceSpec.spec.properties` | Defines the user-provided parameters to fetch resource values. | See the [additional resources](#user-input) for an example user-inputted parameters for `spec.properties`. |

{style="table-layout:auto"}

## Additional resources {#appendix}

The following sections provides information on additional configurations you can make to your `sourceSpec`, including advanced scheduling and custom schemas. 

### Content path example {#content-path}

The following is an example of the contents of the `contentPath` property in a [!DNL MailChimp Members] connection specification.

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
        "host": "https://{domain}.api.mailchimp.com",
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

### Configure different pagination types for your source {#pagination}

The following are examples of other pagination types supported by Self-Serve Sources (Batch SDK):

#### `CONTINUATION_TOKEN`

A continuation token type of pagination returns a string token that signifies the existence of more items that could not be returned, due to a pre-determined maximum number of items that can be returned in a single response.

A source that supports continuation token type of pagination may have a pagination parameter similar to:

```json
"paginationParams": {
  "type": "CONTINUATION_TOKEN",
  "continuationTokenPath": "$.meta.after_cursor",
  "parameterType": "QUERYPARAM",
  "parameterName": "page[after]",
  "delayRequestMillis": "850"
}
```

| Property | Description |
| --- | --- |
| `type` | The type of pagination used to return data. |
| `continuationTokenPath` | The value that must be appended to the query params in order to move to the next page of the returned results. |
| `parameterType` | The `parameterType` property defines where the `parameterName` must be added. The `QUERYPARAM` type allows you to append your query with the `parameterName`. The `HEADERPARAM` allows you to add your `parameterName` to your header request. |
| `parameterName` | The name of the parameter used to incorporate the continuation token. The format is as follows: `{PARAMETER_NAME}={CONTINUATION_TOKEN}`. | 
| `delayRequestMillis` | The `delayRequestMillis` property in pagination allows you to control the rate of requests made to your source. Some sources can have a limit to the number of requests you can make per minute. For example, [!DNL Zendesk] has a limit of 100 requests per minute and defining  `delayRequestMillis` to `850` allows you to configure the source to make calls at just around 80 requests per minute, well under the 100 request per minute threshold. |

The following is an example of a response returned using continuation token type of pagination:

```json
{
  "results": [
    {
      "id": 5624716025745,
      "url": "https://dev.zendesk.com/api/v2/users/5624716025745.json",
      "name": "newinctest@zenaep.com",
      "email": "newinctest@zenaep.com",
      "created_at": "2022-04-22T10:27:30Z",
      
    }
  ],
  "facets": null,
  "meta": {
    "has_more": false,
    "after_cursor": "eyJmaWVsZCI6ImNyZWF0ZWRfYXQiLCJk",
    "before_cursor": null
  },
  "links": {
    "prev": null,
    "next": "https://dev.zendesk.com/api/v2/search/export.json?filter%5Btype%5D=user&page%5Bafter%5D=eyJmaWVsZCI6"
  }
}
```

#### `PAGE`

The `PAGE` type of pagination allows you to traverse through return data by number of pages starting from zero. When using `PAGE` type pagination, you must provide the number of records given in a single page.

```json
"paginationParams": {
  "type": "PAGE",
  "limitName": "pageSize",
  "limitValue": 100,
  "initialPageIndex": 1,
  "endPageIndex": "headers.x-pagecount",
  "pageParamName": "pageNumber",
  "maximumRequest": 10000
}
```

| Property | Description |
| --- | --- |
| `type` | The type of pagination used to return data. |
| `limitName` | The name for the limit through which the API can specify the number of records to be fetched in a page. |
| `limitValue` | The number of records to be fetched in a page. |
| `initialPageIndex` | (Optional) The initial page index defines the page number from which pagination will start. This field can be used for sources where pagination doesn't start from 0. If unprovided, the initial page index will default to 0. This field expects an integer. |
| `endPageIndex` | (Optional) The end page index allows you to establish an end condition and stop pagination. This field can be used when default end conditions to stop pagination are unavailable. This field can also be used if the number of pages to be ingested or the last page number is provided through the response header, which is common when using `PAGE` type pagination. The value for the end page index can either be the last page number or a string-type expression value from the response header. For example, you can use `headers.x-pagecount` to assign end page index to the `x-pagecount` value from the response headers. **Note**: `x-pagecount` is a mandatory response header for some sources and holds the value number of pages to be ingested. |
| `pageParamName` | The name of the parameter that you must append to query parameters in order to traverse through different pages of the return data. For example, `https://abc.com?pageIndex=1` would return the second page of an API's return payload. |
| `maximumRequest` | The maximum number of requests a source can make for a given incremental run. The current default limit is 10000. |

{style="table-layout:auto"}


#### `NONE`

The `NONE` pagination type can be used for sources that don't support any of the available pagination types. Sources that use the pagination type of `NONE` simply return all retrievable records when a GET request is made.

```json
"paginationParams": {
  "type": "NONE"
}
```

### Advanced scheduling for Self-Serve Sources (Batch SDK)

Configure your source's incremental and backfill schedule using advanced scheduling. The `incremental` property allows you to configure a schedule in which your source will ingest only new or modified records, while the `backfill` property allows you to create a schedule to ingest historical data.

With advanced scheduling, you can use expressions and functions specific to your source to configure incremental and backfill schedules. In the example below, the [!DNL Zendesk] source requires the incremental schedule to be formatted as `type:user updated > {START_TIME} updated < {END_TIME}` and backfill as `type:user updated < {END_TIME}`. 

```json
"scheduleParams": {
        "type": "ADVANCE",
        "paramFormat": "yyyy-MM-ddTHH:mm:ssK",
        "incremental": "type:user updated > {START_TIME} updated < {END_TIME}",
        "backfill": "type:user updated < {END_TIME}"
      }
```

| Property | Description |
| --- | --- |
| `scheduleParams.type` | The type of scheduling your source will use. Set this value to `ADVANCE` to use the advanced scheduling type. |
| `scheduleParams.paramFormat` | The defined format of your scheduling parameter. This value can be the same as your source's `scheduleStartParamFormat` and `scheduleEndParamFormat` values.  |
| `scheduleParams.incremental` | The incremental query of your source. Incremental refers to an ingestion method where only new or modified data is ingested. |
| `scheduleParams.backfill` | The backfill query of your source. Backfill refer to an ingestion method where historical data is ingested. |

Once you configure your advanced scheduling, you must then refer to your `scheduleParams` in the URL, body, or header params section, depending on what your particular source supports. In the example below, `{SCHEDULE_QUERY}` is a placeholder used to specify where the incremental and backfill scheduling expressions will be used. In the case of a [!DNL Zendesk] source, `query` is used in the `queryParams` to specify advanced scheduling.

```json
"urlParams": {
        "path": "/api/v2/search/export@{if(empty(coalesce(pipeline()?.parameters?.ingestionStart,'')),'?query=type:user&filter[type]=user&','')}",
        "method": "GET",
        "queryParams": {
          "query": "{SCHEDULE_QUERY}",
          "filter[type]": "user"
        }
      }
```

### Add a custom schema to define your source's dynamic attributes

You can include a custom schema to your `sourceSpec` to define all attributes required for your source, including any dynamic attributes that you might need. You can update your source's corresponding connection specification by making a PUT request to the `/connectionSpecs` endpoint of the [!DNL Flow Service] API, while providing your custom schema in the `sourceSpec` section of your connection specification.

The following is an example of a custom schema that you can add to your source's connection specification:

```json
      "schema": {
        "type": "object",
        "properties": {
          "results": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "organization_id": {
                  "type": "integer",
                  "minimum": -9007199254740992,
                  "maximum": 9007199254740991
                }
                "active": {
                  "type": "boolean"
                },
                "created_at": {
                  "type": "string"
                },
                "email": {
                  "type": "string"
                },
                "iana_time_zone": {
                  "type": "string"
                },
                "id": {
                  "type": "integer"
                },
                "locale": {
                  "type": "string"
                },
                "locale_id": {
                  "type": "integer"
                },
                "moderator": {
                  "type": "boolean"
                },
                "name": {
                  "type": "string"
                },
                "only_private_comments": {
                  "type": "boolean"
                },
                "report_csv": {
                  "type": "boolean"
                },
                "restricted_agent": {
                  "type": "boolean"
                },
                "result_type": {
                  "type": "string"
                },
                "role": {
                  "type": "integer"
                },
                "shared": {
                  "type": "boolean"
                },
                "shared_agent": {
                  "type": "boolean"
                },
                "suspended": {
                  "type": "boolean"
                },
                "ticket_restriction": {
                  "type": "string"
                },
                "time_zone": {
                  "type": "string"
                },
                "two_factor_auth_enabled": {
                  "type": "boolean"
                },
                "updated_at": {
                  "type": "string"
                },
                "url": {
                  "type": "string"
                },
                "verified": {
                  "type": "boolean"
                },
                "tags": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      }
```


## Next steps

With your source specifications populated, you can proceed to configure the explore specifications for the source that you want to integrate to Platform. See the the document on [configuring explore specifications](./explorespec.md) for more information.
