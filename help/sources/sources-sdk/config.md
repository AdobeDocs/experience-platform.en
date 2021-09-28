---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
solution: Experience Platform
title: Configuration options in Sources SDK
topic-legacy: overview
description: This document provides an overview of the configurations you need to prepare in order to use Sources SDK.
---
# Configuration options in Sources SDK

>[!IMPORTANT]
>
>Sources SDK is in beta. The feature and documentation are subject to change.

This document provides an overview of the configurations you need to prepare in order to use Sources SDK.

## Connection specification

Connection specifications return a source's connector properties, including authentication specifications related to creating the base and source connections and a fixed connection specification ID that is assigned to a particular source. Connection specifications are tenant and IMS Organization agnostic. A typical connection specification contains basic information on a given source, as well as three distinct sections: `authSpec`, `sourceSpec`, and `exploreSpec`.

| Specs | Description |
| --- | --- |
| `authSpec` | The `authSpec` array contains information on the authentication parameters required to connect a source to Platform. Any given source can support multiple different types of authentication. |
| `sourceSpec` | The `sourceSpec` array contains general information pertaining to a source, including information on attributes required to present the source in the UI, documentation link, and parameters regarding pagination, header, body, and scheduling. Furthermore, `sourceSpec` describes the schema of the parameters required to create a source connection from a base connection, and is necessary in order to create a source connection. |
| `exploreSpec` | The `exploreSpec` array defines the parameters required for exploring and inspecting objects contained in your source. The `exploreSpec` also defines the response format returned when objects are explored and inspected. |

{style="table-layout:auto"}

The following is an example of a connection specification that supports OAuth 2 refresh code authentication.

```json
{
  "id": "359dc4ef-d2e5-4d43-a343-6b0c38910bce",
  "name": "generic-source",
  "providerId": "0ed90a81-07f4-4586-8190-b40eccef1c5a",
  "version": "1.0",
  "attributes": {
    "category": "Cloud storage",
    "isSource": "True"
  "authSpec": [
    {
      "name": "oAuth2-refresh-code",
      "type": "oAuth2-refresh-code",
      "spec": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
        "description": "defines auth params required for connecting to rest service using authorization flow.",
        "links": [
          {
            "rel": "specificationLink",
            "href": "https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1"
          }
        ],
        "properties": {
          "clientId": {
            "description": "Client id of user app. Needed to generate accessToken post its expiry.",
            "type": "string"
          },
          "clientSecret": {
            "description": "Client secret of user app. Needed to generate accessToken post its expiry.",
            "type": "string",
            "format": "password"
          },
          "accessToken": {
            "description": "Access Token",
            "type": "string",
            "format": "password"
          },
          "refreshToken": {
            "description": "Refresh Token. Needed to generate accessToken once it expires.",
            "type": "string",
            "format": "password"
          },
          "expirationDate": {
            "description": "Date when accessToken will expire",
            "type": "string",
            "format": "date"
          },
          "refreshTokenUrl": {
            "description": "Refresh token url to fetch refresh token.",
            "type": "string"
          },
          "accessTokenUrl": {
            "description": "Access token url to fetch access token.",
            "type": "object"
          }
        },
        "required": [
          "accessToken"
        ]
      }
    },
  ],
  "sourceSpec": {
    "attributes": {
      "uiAttributes": {
        "documentationLink": "http://www.adobe.com/go/sources-generic-rest-connector",
        "isSource": true,
        "category": {
          "key": "cloudStorage"
        },
        "icon": {
          "key": "genericRestConnector"
        },
        "description": {
          "key": "genericRestConnectorDescription"
        },
        "label": {
          "key": "genericRestConnectorLabel"
        }
      }
    },
    "spec": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "description": "defines static and user input parameters to fetch resource values.",
      "properties": {
        "urlParams": {
          "type": "object",
          "properties": {
            "hostname": {
              "type": "string",
              "description": "enter resource url host path",
              "example": "https://us6.api.mailchimp.com"
            },
            "path": {
              "type": "string",
              "description": "enter resource path",
              "example": "/3.0/lists/list21/members"
            },
            "method": {
              "type": "string",
              "enum": ["GET", "POST"]
            },
            "queryParams": {
              "type": "string",
              "description": "query parameters."
            }
          }
        },
        "headerParams": {
          "type": "string",
          "description": "header parameters in comma separated or property based."
        },
        "bodyParams": {
          "type": "object",
          "description": "body parameters.",
          "properties": {
            "params": {
              "type": "object"
            }
          }
        },
        "contentPath": {
          "type": "string",
          "description": "path to main content"
        },
        "paginationParams": [
          {
            "name": "offset",
            "type": "offset",
            "spec": {
              "$schema": "http://json-schema.org/draft-07/schema#",
              "type": "object",
              "properties": {
                "limitName": {
                  "type": "string",
                  "description": "limit property name",
                  "example": "limit or count"
                },
                "limitValue": {
                  "type": "integer",
                  "description": "number of records per page to fetch.",
                  "example": "limit=10 or count=10"
                },
                "offsetName": {
                  "type": "string",
                  "description": "offset property name",
                  "example": "offset"
                }
              }
            }
          },
        ],
        "scheduleParams": {
          "name": "scheduling",
          "type": "scheduling",
          "spec": {
            "$schema": "http://json-schema.org/draft-07/schema#",
            "type": "object",
            "description": "defines scheduling parameters.",
            "properties": {
              "scheduleStartParamName": {
                "type": "string",
                "description": "order property name to get the order by date.",
                "example": "since"
              },
              "scheduleStartParamFormat": {
                "type": "string",
                "description": "order property name to get the order by date.",
                "example": "yyyy-MM-ddTHH:mm:ssZ"
              },
              "scheduleEndParamFormat": {
                "type": "string",
                "description": "order property name to get the order by date.",
                "example": "yyyy-MM-ddTHH:mm:ssZ"
              }
            }
          }
        }
      }
    }
  },
  "exploreSpec": {
    "name": "Resource",
    "type": "Resource",
    "requestSpec": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object"
    },
    "responseSpec": {
      "$schema": "http: //json-schema.org/draft-07/schema#",
      "type": "object",
      "properties": {
        "format": {
          "type": "string"
        },
        "schema": {
          "type": "object",
          "properties": {
            "columns": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "type": {
                    "type": "string"
                  }
                }
              }
            }
          }
        },
        "data": {
          "type": "array",
          "items": {
            "type": "object"
          }
        }
      }
    }
  }
}

```

| Source specifications | Description | Example |
| --- | --- | --- |
| `name` | The name of your source. | `mailchimp` |
| `providerId` | The ID of the provider. This value is auto-generated. | `0ed90a81-07f4-4586-8190-b40eccef1c5a` |
| `version` | The version of the queried connection specification. | `1.0` |
| `attributes` | A generic, searchable key-value pair map that contains more information regarding a source. |
| `attributes.category` | Defines the category of the source. | <ul><li>`advertising`</li><li>`cloud storage`</li><li>`crm`</li><li>`customer success`</li><li>`database`</li><li>`ecommerce`</li><li>`marketing automation`</li><li>`payments`</li><li>`protocols`</li><li>`streaming`</li></ul> |

{style="table-layout:auto"}

## Authentication specifications {#auth}

Authentication specifications define how Platform users can connect to your source.

The following is an example of OAuth 2 refreshCode authentication type:

```json
{
  "authSpec": [
    {
      "name": "oAuth2-refresh-code",
      "type": "oAuth2-refresh-code",
      "spec": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
        "description": "defines auth params required for connecting to rest service using authorization flow.",
        "links": [
          {
            "rel": "specificationLink",
            "href": "https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1"
          }
        ],
        "properties": {
          "clientId": {
            "description": "Client id of user app. Needed to generate accessToken post its expiry.",
            "type": "string"
          },
          "clientSecret": {
            "description": "Client secret of user app. Needed to generate accessToken post its expiry.",
            "type": "string",
            "format": "password"
          },
          "accessToken": {
            "description": "Access Token",
            "type": "string",
            "format": "password"
          },
          "refreshToken": {
            "description": "Refresh Token. Needed to generate accessToken once it expires.",
            "type": "string",
            "format": "password"
          },
          "expirationDate": {
            "description": "Date when accessToken will expire",
            "type": "string",
            "format": "date"
          },
          "refreshTokenUrl": {
            "description": "Refresh token url to fetch refresh token.",
            "type": "string"
          },
          "accessTokenUrl": {
            "description": "Access token url to fetch access token.",
            "type": "object"
          }
        },
        "required": [
          "accessToken"
        ]
      }
    },
  ],
}
```

| Authentication specifications | Description | Example |
| --- | --- | --- |
| `authSpec.name` | Displays the name of the supported authentication type. | `oAuth2-refresh-code` |
| `authSpec.type` | Defines the type of authentication supported by the source. | `oAuth2-refresh-code` |
| `authSpec.spec` | Contains information on the authentication's schema, data type, and properties. |
| `authSpec.spec.$schema` | Defines the schema used for the authentication. | `http://json-schema.org/draft-07/schema#` |
| `authSpec.spec.type` | Defines the data type of the schema. | `object` |
| `authSpec.spec.properties` | Contains information on the credentials used for the authentication. |
| `authSpec.spec.properties.description` | Displays a brief description on the credential. |
| `authSpec.spec.properties.type` | Defines the data type of the credential. | `string` |
| `authSpec.spec.properties.format` | Defines the format of the credential. | `format` |
| `authSpec.spec.required` | Displays the credentials required in order to authenticate. | `accessToken` |

{style="table-layout:auto"}

## Source specifications {#source}

Source specifications contain information specific to a source, including attributes pertaining to a source's category, beta status, and catalog icon. Source specifications also contain information regarding parameters for the URL, content, header, and schedule, among others. Source specifications also describes the schema of the parameters required to create a source connection from a base connection, and is necessary in order to create a source connection.

```json
{
  "sourceSpec": {
    "attributes": {
      "uiAttributes": {
        "documentationLink": "http://www.adobe.com/go/sources-generic-rest-connector",
        "isSource": true,
        "category": {
          "key": "cloudStorage"
        },
        "icon": {
          "key": "genericRestConnector"
        },
        "description": {
          "key": "genericRestConnectorDescription"
        },
        "label": {
          "key": "genericRestConnectorLabel"
        }
      }
    },
    "spec": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "description": "defines static and user input parameters to fetch resource values.",
      "properties": {
        "urlParams": {
          "type": "object",
          "properties": {
            "hostname": {
              "type": "string",
              "description": "enter resource url host path",
              "example": "https://us6.api.mailchimp.com"
            },
            "path": {
              "type": "string",
              "description": "enter resource path",
              "example": "/3.0/lists/list21/members"
            },
            "method": {
              "type": "string",
              "enum": ["GET", "POST"]
            },
            "queryParams": {
              "type": "string",
              "description": "query parameters."
            }
          }
        },
        "headerParams": {
          "type": "string",
          "description": "header parameters in comma separated or property based."
        },
        "bodyParams": {
          "type": "object",
          "description": "body parameters.",
          "properties": {
            "params": {
              "type": "object"
            }
          }
        },
        "contentPath": {
          "type": "string",
          "description": "path to main content"
        },
        "paginationParams": [
          {
            "name": "offset",
            "type": "offset",
            "spec": {
              "$schema": "http://json-schema.org/draft-07/schema#",
              "type": "object",
              "properties": {
                "limitName": {
                  "type": "string",
                  "description": "limit property name",
                  "example": "limit or count"
                },
                "limitValue": {
                  "type": "integer",
                  "description": "number of records per page to fetch.",
                  "example": "limit=10 or count=10"
                },
                "offsetName": {
                  "type": "string",
                  "description": "offset property name",
                  "example": "offset"
                }
              }
            }
          },
        ],
        "scheduleParams": {
          "name": "scheduling",
          "type": "scheduling",
          "spec": {
            "$schema": "http://json-schema.org/draft-07/schema#",
            "type": "object",
            "description": "defines scheduling parameters.",
            "properties": {
              "scheduleStartParamName": {
                "type": "string",
                "description": "order property name to get the order by date.",
                "example": "since"
              },
              "scheduleStartParamFormat": {
                "type": "string",
                "description": "order property name to get the order by date.",
                "example": "yyyy-MM-ddTHH:mm:ssZ"
              },
              "scheduleEndParamFormat": {
                "type": "string",
                "description": "order property name to get the order by date.",
                "example": "yyyy-MM-ddTHH:mm:ssZ"
              }
            }
          }
        }
      }
    }
  },  
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
| `sourceSpec.attributes.paginationParams` == `offsetType` | This pagination type requires the user to only specify the starting offset of records. | See the [appendix](#appendix) for a detailed example of the offset type of pagination. |
| `sourceSpec.attributes.scheduleParams.scheduleStartParamName` | | `since_last_changed` |
| `sourceSpec.attributes.scheduleParams.scheduleEndParamName` | | `before_last_changed` |
| `sourceSpec.attributes.scheduleParams.scheduleStartParamFormat` | Defines the supported format for the `scheduleStartParamName`. | `yyyy-MM-ddTHH:mm:ssZ` |
| `sourceSpec.attributes.scheduleParams.scheduleEndParamFormat` | Defines the supported format for the `scheduleEndParamName`.| `yyyy-MM-ddTHH:mm:ssZ` |

{style="table-layout:auto"}

## Explore specifications

Explore specifications defines the parameters required for exploring and inspecting objects contained in your source. Explore specifications also defines the response format returned when objects are explored and inspected.

```json
{
  "exploreSpec": {
    "name": "Resource",
    "type": "Resource",
    "requestSpec": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object"
    },
    "responseSpec": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "properties": {
        "format": {
          "type": "string"
        },
        "schema": {
          "type": "object",
          "properties": {
            "columns": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "type": {
                    "type": "string"
                  }
                }
              }
            }
          }
        },
        "data": {
          "type": "array",
          "items": {
            "type": "object"
          }
        }
      }
    }
  }
}
```

| Explore specifications | Description | Example |
| --- | --- | --- |
| `name` | Defines the name or identifier of the explore specification. | `Resource` |
| `type` | Defines the type of the explore specification. | `Resource` |
| `requestSpec` | Contains the parameters required to explore objects in the connection. |
| `requestSpec.$schema` | Defines the schema used for the request specification. | `http://json-schema.org/draft-07/schema#` |
| `requestSpec.type` | Defines the data type of the request specification. | `object` |
| `responseSpec` | Contains the parameters that define the format of the response message returned against an explore call. |
| `responseSpec.$schema` | Defines the schema used for the response specification. | `http://json-schema.org/draft-07/schema#` |
| `responseSpec.type` | Defines the data type of the response specification. | `object` |
| `responseSpec.properties` | Contains information pertaining to how the response message is formatted. |
| `responseSpec.properties.format` | Defines the formatting of the response schema. | `object` |
| `responseSpec.properties.format.type` | Defines the data type of properties. | `string` |
| `responseSpec.schema` | Contains information pertaining to how the response schema is formatted. |
| `responseSpec.schema.type`  | Defines the data type of the schema. | `object` |
| `responseSpec.schema.properties` | Contains information on the columns, type, and items held within a schema. |
| `responseSpec.schema.properties.columns.items.properties.name` | Displays the name of the file. |
| `responseSpec.schema.properties.columns.items.properties.name.type` | Defines the data type of the file name. | `string` |

{style="table-layout:auto"}

## Appendix {#appendix}

The following contains further information on the configuration preparation process for using Sources SDK.

### `$.members` response API example

The following is an example of the contents of `contentPath`, which can be defined as `$.members`.

```json
{
  "members": [
    {
      "id": "string",
      "email_address": "string",
      "unique_email_id": "string",
      "full_name": "string",
      "web_id": 0,
      "email_type": "string",
      "status": "subscribed",
      "unsubscribe_reason": "string",
      "merge_fields": {
        "property1": null,
        "property2": null
      },
      "interests": {
        "property1": true,
        "property2": true
      },
      "stats": {
        "avg_open_rate": 0,
        "avg_click_rate": 0,
        "ecommerce_data": {
          "total_revenue": 0,
          "number_of_orders": 0,
          "currency_code": "USD"
        }
      },
      "ip_signup": "string",
      "timestamp_signup": "2019-08-24T14:15:22Z",
      "ip_opt": "string",
      "timestamp_opt": "2019-08-24T14:15:22Z",
      "member_rating": 0,
      "last_changed": "2019-08-24T14:15:22Z",
      "language": "string",
      "vip": true,
      "email_client": "string",
      "location": {
        "latitude": 0,
        "longitude": 0,
        "gmtoff": 0,
        "dstoff": 0,
        "country_code": "string",
        "timezone": "string"
      },
      "marketing_permissions": [
        {
          "marketing_permission_id": "string",
          "text": "string",
          "enabled": true
        }
      ],
      "last_note": {
        "note_id": 0,
        "created_at": "2019-08-24T14:15:22Z",
        "created_by": "string",
        "note": "string"
      },
      "source": "string",
      "tags_count": 0,
      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "list_id": "string",
      "_links": [
        {
          "rel": "string",
          "href": "string",
          "method": "GET",
          "targetSchema": "string",
          "schema": "string"
        }
      ]
    }
  ],
  "list_id": "string",
  "total_items": 0,
  "_links": [
    {
      "rel": "string",
      "href": "string",
      "method": "GET",
      "targetSchema": "string",
      "schema": "string"
    }
  ]
}
```

### Offset type of pagination

The following is an example of pagination set to `"paginationType" = "offset"`.

```json

{
  "paginationType": "offset",
  "limitName": "{LIMIT_NAME}",
  "limitValue": "{LIMIT_VALUE}",
  "offSetName": "{OFFSET_NAME}"
}
```

| Parameter | Description | Example |
| --- | --- | --- |
| `limitName` | The name for limit through which the API can specify the number of records to be fetched in a page. | `count` |
| `limitValue` | The number of records to be fetched in a page. | `100` |
| `offsetName` | The name for offset | `offset` |
