---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
solution: Experience Platform
title: Submit Your Source
topic-legacy: developer guide
description:
---
# Submit your source

>[!IMPORTANT]
>
>Sources SDK is in beta. The feature and documentation are subject to change.

## Getting started

Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Register your connection specification

Once you have filled in the necessary values for your connection specification, you can now register the specification and promote it to a sandbox. To submit your new connection specification, make a POST request to the `/connectionSpecs` endpoint of the [!DNL Flow Service] API, while providing the connection specification in the request body.

**API format**

```http
POST /flowService/connectionSpecs
```

**Request**

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connectionSpecs' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' 
  -d '{
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
    }'
```

**Response**

A successful response returns the connection specification details of your new source, including its unique `connectionSpec.id`.

```json
{
  "id": "965eaf03-2141-41f9-8afc-4c339ac1344b",
  "createdAt": 1632758913186,
  "updatedAt": 1632759088289,
  "createdBy": "{CREATED_BY}",
  "updatedBy": "{UPDATED_BY}",
  "createdClient": "{CREATED_CLIENT}",
  "updatedClient": "{UPDATED_CLIENT}",
  "sandboxId": "{SANDBOX_ID}",
  "sandboxName": "{SANDBOX_NAME}",
  "imsOrgId": "{IMS_ORG}",
  "name": "Testing spec for dynamics online update 1",
  "providerId": "0ed90a81-07f4-4586-8190-b40eccef1c5a",
  "version": "1.0",
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
    },
  "permissionsInfo": {
      "manage": [
          {
              "@type": "lowLevel",
              "name": "EnterpriseSource",
              "permissions": [
                  "write"
              ]
          }
      ],
      "view": [
          {
              "@type": "lowLevel",
              "name": "EnterpriseSource",
              "permissions": [
                  "read"
              ]
          }
      ]
  }
}
```