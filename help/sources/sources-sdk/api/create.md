---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
solution: Experience Platform
title: Create a New Source
topic-legacy: tutorial
description: Learn how to create a new source using Sources SDK.
---
# Create a new source

>[!IMPORTANT]
>
>Sources SDK is in beta. The feature and documentation are subject to change.

The following document provides steps on how to create a new source using Sources SDK.

## Getting started

Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Collect artifacts

The first step in creating a new source is to collect artifacts for the source. These items, which include an **icon**, a **description**, a **label**, and the appropriate **category** for your source, must be coordinated with the Adobe product team.

If you do not have these artifacts coordinated, please contact your Adobe representative before attempting to do this tutorial.

## Create a new connection specification

Once your artifacts are ready, you can begin the process of creating a new connection specification.

### Retrieve a generic REST connection specification

To create a new connection specification, you must first retrieve a generic REST connection specification using the [!DNL Flow Service] API. To get an example, make a GET request to the `/connectionSpecs` endpoint of the [!DNL Flow Service] API.

**API format**

```http
GET /connectionSpecs
```

**Request**

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/connectionSpecs  /' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
```

**Response**

The following response is an example of an empty generic REST connector connection specification that you must fill out to create a new source.

```json
{
  "name": "{NAME}",
  "type": "{TYPE}",
  "providerId": "{PROVIDER_ID}",
  "version": "{VERSION}",
  "attributes": {
    "category": "{CATEGORY}",
    "isSource": "{IS_SOURCE}"
  },
  "authSpec": [
    {
      "name": "{NAME}",
      "type": "{TYPE}",
      "spec": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
        "properties": {
          "accessToken": {
            "description": "Access Token",
            "type": "string",
            "format": "password"
          }
        },
        "required": [
          "accessToken"
        ]
      }
    },
    {
      "name": "API Key Authentication",
      "type": "apiKey",
      "attributes": {
        "authParams": {
          "addTo": "header"
        }
      },
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
          }
        },
        "required": [
          "keyName",
          "value"
        ]
      }
    }
  ],
  "sourceSpec": {
    "attributes": {
      "uiAttributes": {
        "documentationLink": "{DOCUMENTATION_LINK}",
        "isSource": true,
        "category": {
          "key": "{CATEGORY_KEY}"
        },
        "icon": {
          "key": "{ICON_KEY}"
        },
        "description": {
          "key": "{DESCRIPTION_KEY}"
        },
        "label": {
          "key": "{LABEL_KEY}"
        }
      },
      "urlParams": {
        "hostname": "{HOST_NAME}",
        "path": "{PATH}",
        "method": "{METHOD}"
      },
      "contentPath": "{CONTENT_PATH}",
      "queryParams": "{QUERY_PARAMS}",
      "headerParams": "{HEADER_PARAMS}",
      "bodyParams": "{BODY_PARAMS}",
      "paginationParams": {
        "paginationType": "{PAGINATION_TYPE}",
        "limitName": "{LIMIT_NAME}",
        "limitValue": "{LIMIT_VALUE}",
        "offSetName": "{OFFSET_NAME}"
      },
      "scheduleParams": {
        "scheduleStartParamName": "{SCHEDULE_START_PARAM_NAME}",
        "scheduleEndParamName": "{SCHEDULE_END_PARAM_NAME}",
        "scheduleStartParamFormat": "{SCHEDULE_START_PARAM_FORMAT}",
        "scheduleEndParamFormat": "{SCHEDULE_END_PARAM_FORMAT}"
      }
    },
    "spec": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "description": "defines static and user input parameters to fetch resource values.",
      "properties": {
        "domain": {
          "type": "string",
          "description": "domain name of client server."
        },
        "listId": {
          "type": "string",
          "description": "listId for which members need to fetch."
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
| `type` | 
| `providerId` |
| `version` |
| `attributes.category` |
| `attributes.isSource` |
| `authSpec` |
| `authSpec.name` |
| `authSpec.type` |
| `authSpec.spec.$schema` |
| `authSpec.spec.type` |
| `authSpec.spec.properties` | This authentication specification property contains information on the authentication values required in order to utilize the source. |
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

### Author your generic connection specification

Once you have retrieved a generic REST connection specification, copy and paste the payload to the text editor of your choice and then fill out or replace the values with information relevant to your specific source. For more information on connection specifications, see the documentation on [preparing your configurations](../config.md).

The following payload is an example of a connection specification authored with information specific to a [!DNL MailChimp] source:

```json
{
  "id": "6360f136-5980-4111-8bdf-15d29eab3b5a",
  "name": "mailChimpConnector",
  "type": "generic-rest-connector",
  "providerId": "0ed90a81-07f4-4586-8190-b40eccef1c5a",
  "version": "1.0",
  "attributes": {
    "category": "Cloud Storage",
    "isSource": true
  },
  "authSpec": [
    {
      "name": "oAuth2-refresh-code",
      "type": "oAuth2-refresh-code",
      "spec": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
        "properties": {
          "accessToken": {
            "description": "Access Token",
            "type": "string",
            "format": "password"
          }
        },
        "required": [
          "accessToken"
        ]
      }
    },
    {
      "name": "API Key Authentication",
      "type": "apiKey",
      "attributes": {
        "authParams": {
          "addTo": "header"
        }
      },
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
          }
        },
        "required": [
          "keyName",
          "value"
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
      },
      "urlParams": {
        "hostname": "https://{{domain}}.api.mailchimp.com",
        "path": "/3.0/lists/{{listId}}/members",
        "method": "GET"
      },
      "contentPath": "$.members",
      "queryParams": "excludes=id",
      "headerParams": "",
      "bodyParams": "",
      "paginationParams": {
        "paginationType": "offset",
        "limitName": "count",
        "limitValue": "100",
        "offSetName": "offset"
      },
      "scheduleParams": {
        "scheduleStartParamName": "since_last_changed",
        "scheduleEndParamName": "before_last_changed",
        "scheduleStartParamFormat": "yyyy-MM-ddTHH:mm:ssZ",
        "scheduleEndParamFormat": "yyyy-MM-ddTHH:mm:ssZ"
      }
    },
    "spec": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "description": "defines static and user input parameters to fetch resource values.",
      "properties": {
        "domain": {
          "type": "string",
          "description": "domain name of client server."
        },
        "listId": {
          "type": "string",
          "description": "listId for which memebers need to fetch."
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

## Next steps

With a fully-authored connection specification ready, you can now submit your connection specification to a specific sandbox of your choice through the [!DNL Flow Service] API for testing. See the tutorial on [testing your new source](./test.md) for more information.