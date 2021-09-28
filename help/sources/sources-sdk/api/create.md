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

### Retrieve a REST API-based connection specification

To create a new connection specification, you must first retrieve REST API-based connection specification using the [!DNL Flow Service] API. To get an example, make a GET request to the `/connectionSpecs` endpoint of the [!DNL Flow Service] API.

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
  "name": "The name of your source",
  "type": "The type of your source.",
  "providerId": "The Provider ID of your source",
  "version": "Define the corresponding corresponding of your connection specification.",
  "attributes": {
    "category": "Define the category of your source.",
    "isSource": true,
  },
  "authSpec": [
    {
      "name": "The name of the authentication type supported by your source.",
      "type": "The type of authentication supported by your source",
      "spec": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
        "properties": {
          "accessToken": {
            "description": "The credential required to authenticate your source. In this example, it's an Access Token",
            "type": "string",
            "format": "password"
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
        "documentationLink": "The link to the documentation, where more information on your source can be found.",
        "isSource": true,
        "category": {
          "key": "The category of your source"
        },
        "icon": {
          "key": "An SVG file that represents the icon displayed with your source."
        },
        "description": {
          "key": "A short description about your source."
        },
        "label": {
          "key": "A short label to accompany your source."
        }
      },
      "urlParams": {
        "hostname": "The host domain, where the API call to your source is being made to.",
        "path": "The resource path from where to fetch the data.",
        "method": "The HTTP method to be used to make the request to the source, to fetch the data."
      },
      "contentPath": "The node that contains the list of items required to be ingested to Platform.  This attribute should follow JSON path syntax.",
      "queryParams": "The supported query parameters that can be used to append the source URL when making a request to fetch data. These query parameters must be separated with an ampersand (&).",
      "headerParams": "The comma (,) separated headers that need to be supplied in the HTTP request to source URL while fetching data.",
      "bodyParams": "Defines any parameters required to be provided to the request body.",
      "paginationParams": {
        "paginationType": "Defines the pagination parameters and/or fields that need to be supplied to get a link tto traverse pages of a response or while creating a next page url. ",
        "limitName": "The parameter name for limit.",
        "limitValue": "An integer that defines the limit",
        "offSetName": "The offset name. Currently, offset is the only supported pagination type."
      },
      "scheduleParams": {
        "scheduleStartParamName": "Defines the starting point for when data reading begins. ",
        "scheduleEndParamName": "Defines the point for when the data reading ends.",
        "scheduleStartParamFormat": "Defines the supported format for scheduleStartParamName.",
        "scheduleEndParamFormat": "Defines the supported format for scheduleEndParamName"
      }
    },
    "spec": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "description": "Defines static and user input parameters to fetch resource values.",
      "properties": {
        "domain": {
          "type": "string",
          "description": "The domain name of client server."
        },
        "listId": {
          "type": "string",
          "description": "The listId for which members need to fetch."
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

### Author your connection specification

Once you have retrieved a generic REST connection specification, copy and paste the payload to the text editor of your choice and then fill out or replace the values with information relevant to your specific source. For more information on connection specifications, including details particular to its several arrays, see the documentation on [preparing your configurations](../config.md).

The following payload is an example of a connection specification authored with information specific to a [!DNL MailChimp] source:

```json
{
  "name": "MailChimp",
  "type": "generic-rest",
  "providerId": "0ed90a81-07f4-4586-8190-b40eccef1c5a",
  "version": "1.0",
  "attributes": {
    "category": "cloudStorage",
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


## Next steps

With a fully-authored connection specification ready, you can now submit your connection specification to a specific sandbox of your choice through the [!DNL Flow Service] API for testing. See the tutorial on [promoting your new source](./promote.md) for more information.