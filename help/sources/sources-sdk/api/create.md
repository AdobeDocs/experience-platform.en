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

To create a new connection specification, you must first retrieve a generic REST connection specification using the [!DNL Flow Service] API. To get the payload, make a GET request to the `/connectionSpecs` endpoint of the [!DNL Flow Service] API.

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

The following response is an example of an empty generic REST connector  connection specification that you must fill out to create a new source.

```json
{
  "name": "generic-rest-connector",
  "providerId": "0ed90a81-07f4-4586-8190-b40eccef1c5a",
  "version": "1.0",
  "authSpec": [], //TO BE SPECIFIED
  "sourceSpec": {
    "attributes": {
      "uiAttributes": {
        "documentationLink": "", //TO BE SPECIFIED
        "isSource": true,
        "isBeta": "", //TO BE SPECIFIED
        "category": {
          "key": "" //TO BE SPECIFIED
        },
        "icon": {
          "key": "" //TO BE SPECIFIED
        },
        "description": {
          "key": "" //TO BE SPECIFIED
        },
        "label": {
          "key": "" //TO BE SPECIFIED
        }
      },
      "urlParams": {
        "hostname": "", //TO BE SPECIFIED
        "path": "",  //TO BE SPECIFIED
        "method": ""  //TO BE SPECIFIED
      },
      "contentPath": "",  //TO BE SPECIFIED
      "queryParams": "",  //TO BE SPECIFIED
      "headerParams": "", //TO BE SPECIFIED
      "bodyParams": "",  //TO BE SPECIFIED
      "paginationParams": {},  //TO BE SPECIFIED
      "scheduleParams": {
        "scheduleStartParamName": "", //TO BE SPECIFIED
        "scheduleEndParamName": "", //TO BE SPECIFIED
        "scheduleStartParamFormat": "", //TO BE SPECIFIED
        "scheduleEndParamFormat": "" //TO BE SPECIFIED
      }
    },
    "spec": {
       //TO BE SPECIFIED
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

### Author your generic connection specification

Once you have retrieved a generic REST connection specification, copy and paste the payload to the text editor of your choice and then fill out or replace the values with information relevant to your specific source. For more information on connection specifications, see the documentation on [preparing your configurations](../config.md).

The following payload is an example of a generic REST connection specification authored with information specific to a [!DNL Mailchimp] source:

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

With a fully-authored connection specification ready, you can now submit your connection specification to a specific sandbox of your choice through the [!DNL Flow Service] API for testing. See the tutorial on [testing your new source](./test.md) for more information.