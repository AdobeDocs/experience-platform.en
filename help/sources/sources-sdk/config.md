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

## ConnectionSpecs

Connection specifications return a source's connector properties, including authentication specifications related to creating the base and source connections. Connection specifications are tenant and IMS Organization agnostic.

### Generic REST connector connection specification example

The following payload contains an example of a generic REST connection specification that supports five different authentication options.

```json
{
  "id": "359dc4ef-d2e5-4d43-a343-6b0c38910bce",
  "name": "generic-rest-connector",
  "providerId": "0ed90a81-07f4-4586-8190-b40eccef1c5a",
  "version": "1.0",
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
            "description": "Client id of user account.",
            "type": "string"
          },
          "clientSecret": {
            "description": "Client secret of user account.",
            "type": "string",
            "format": "password"
          },
          "accessToken": {
            "description": "Access Token",
            "type": "string",
            "format": "password"
          },
          "refreshToken": {
            "description": "Refresh Token",
            "type": "string",
            "format": "password"
          },
          "expirationDate": {
            "description": "Date when token will expire",
            "type": "string",
            "format": "date"
          },
          "refreshTokenUrl": {
            "description": "Access token url to fetch access token.",
            "type": "string"
          },
          "requestParameterOverride": {
            "description": "Access token url to fetch access token.",
            "type": "object"
          }
        },
        "required": [
          "accessToken"
        ]
      }
    },
    {
      "name": "OAuth Client Credentials",
      "type": "oAuth2.0-clientCredentials",
      "spec": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
        "description": "defines auth params required for connecting to rest service using client credential flow.",
        "links": [
          {
            "rel": "specificationLink",
            "href": "https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.4"
          }
        ],
        "properties": {
          "clientId": {
            "description": "Client id of user.",
            "type": "string"
          },
          "clientSecret": {
            "description": "Client secret of user.",
            "type": "string",
            "format": "password"
          },
          "accessTokenUrl": {
            "description": "Access token url to fetch access token.",
            "type": "string"
          }
        },
        "required": [
          "client_id",
          "client_secret",
          "accessTokenUrl"
        ]
      }
    },
    {
      "name": "OAuth Password Grant",
      "type": "oAuth2.0-passwordGrant",
      "spec": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
        "description": "defines auth params required for connecting to rest service password grant flow.",
        "links": [
          {
            "rel": "specificationLink",
            "href": "https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.3"
          }
        ],
        "properties": {
          "username": {
            "description": "Enter username.",
            "type": "string"
          },
          "password": {
            "description": "Enter password.",
            "type": "string",
            "format": "password"
          },
          "accessTokenUrl": {
            "description": "Access token url to fetch authorization token ",
            "type": "string"
          },
          "clientId": {
            "description": "Client id of user.",
            "type": "string"
          },
          "clientSecret": {
            "description": "Client secret of user.",
            "type": "string",
            "format": "password"
          }
        },
        "required": [
          "accessTokenUrl",
          "username",
          "password"
        ]
      }
    },
    {
      "name": "Basic Authentication",
      "type": "basicAuthentication",
      "spec": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
        "description": "defines auth params required for connecting to rest service.",
        "properties": {
          "username": {
            "description": "Enter username.",
            "type": "string"
          },
          "password": {
            "description": "Enter password.",
            "type": "string",
            "format": "password"
          }
        },
        "required": [
          "username",
          "password"
        ]
      }
    },
    {
      "name": "API Key Authentication",
      "type": "apiKey",
      "spec": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
        "description": "defines auth params required for connecting to rest service.",
        "properties": {
          "keyName": {
            "description": "apiKey name for authentication.",
            "type": "string",
            "default": "apiKey"
          },
          "value": {
            "description": "apiKey value for authentication.",
            "type": "string",
            "format": "password"
          },
          "addTo": {
            "type": "string",
            "enum": [
              "header",
              "query"
            ],
            "default": "query"
          }
        },
        "required": [
          "keyName",
          "password"
        ]
      }
    }
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
          {
            "name": "pointer",
            "type": "pointer",
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
                "pointerName": {
                  "type": "string",
                  "description": "pointer property name",
                  "example": "pointer"
                },
                "pointerValue": {
                  "type": "integer",
                  "description": "pointer next value.",
                  "example": "$.body.paging.next"
                }
              }
            }
          }
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

## SourceSpecs

Source specifications contain information specific to a source, including attributes pertaining to a source's category, beta status, and catalog icon. Source specifications also contain information regarding parameters for the URL, content, header, and schedule, among others.

| Source specifications | Description | Example |
| --- | --- | --- |
| `sourceSpec.attributes` | This attribute displays information on the source specific to the UI or API. |
| `sourceSpec.attributes.uiAttributes` | This attribute displays information on the source specific to the UI. |
| `sourceSpec.attributes.uiAttributes.documentationLink` | This attribute displays the documentation link where the usage of this source is documented. | `wwww.adobe.com/go/sources-mailchimp-en` |
| `sourceSpec.attributes.uiAttributes.isBeta` | This is a boolean attribute that indicates whether the source requires more feedback from customers to add to its functionality. | `true` / `false` |
| `sourceSpec.attributes.uiAttributes.category` | This attribute displays the category of  the source. | `advertising`, `crm`, `cloud storage`, `database`, `ecommerce`, `marketing automation`, `payments`, `protocols`, `streaming`. |
| `sourceSpec.attributes.uiAttributes.icon` | This attribute displays the icon used for the rendering of the source in the Platform UI. |
| `sourceSpec.attributes.uiAttributes.label` | This attribute displays the label to be used for the rendering of the source in the Platform UI. |
| `sourceSpec.attributes.uiAttributes.description` | This attribute displays a brief description of the source. |
| `sourceSpec.attributes.urlParams.hostName` | This attribute displays the `hostName` of the endpoint to fetch data from. If there are any params in this attribute that you need to acquire from the end user, you can specify it as a template enclosed in (`{{PARAMS}}`). | `https://{{HOST_NAME}}.api.mailchimp.com` |
| `sourceSpec.attributes.urlParams.path` | This attribute displays the resource path from where to fetch the data from. | `/3.0/lists/{{LIST_ID}}/members` |
| `sourceSpec.attributes.urlParams.method` | This attribute displays the HTTP method to be used to make the request to the source to fetch data. | `GET`, `POST` |
| `sourceSpec.attributes.contentPath` | This attribute displays the node that contains the list of items required to be ingested to Platform.  This attribute should follow JSON path syntax. | See the [appendix](#appendix) for a detailed example of the `$.members` attribute. |
| `sourceSpec.attributes.queryParams` | This attribute displays the supported query parameters that can be used to append the source URL when making a request to fetch data. These query parameters must be separated with an ampersand (`&`). | `excludes=id&foo=bar&userParam={{USER_PARAM_VALUE}}` |
| `sourceSpec.attributes.headerParams` | This attribute displays comma (`,`) separated headers that need to be supplied in the HTTP request to source URL while fetching data. | `Content-Type=application/json,foo=bar&userHeader={{USER_HEADER_VALUE}}` |
| `sourceSpec.attributes.paginationParams` | This attribute displays the parameters or fields that must be supplied to get a link to the next page from the user's current page response, or while creating a next page URL. |
| `sourceSpec.attributes.paginationParams` == `offsetType` | This pagination type requires the user to only specify the starting offset of records. | See the [appendix](#appendix) for a detailed example of the offset type of pagination. |
| `sourceSpec.attributes.scheduleParams.scheduleStartParamName` | | `since_last_changed` |
| `sourceSpec.attributes.scheduleParams.scheduleEndParamName` | | `before_last_changed` |
| `sourceSpec.attributes.scheduleParams.scheduleStartParamFormat` | This attribute displays the supported format for the `scheduleStartParamName`. | `yyyy-MM-ddTHH:mm:ssZ` |
| `sourceSpec.attributes.scheduleParams.scheduleEndParamFormat` | his attribute displays the supported format for the `scheduleEndParamName`.| `yyyy-MM-ddTHH:mm:ssZ` |


## AuthSpecs

Authentication specifications define how Platform users can connect to your source.

The following is an example of refreshCode authentication type:

```json
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
}
```

## Appendix {#appendix}

The following contains further information on the configuration preparation process for using Sources SDK.

### `$.members` response API example

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
