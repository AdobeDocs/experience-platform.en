---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
solution: Experience Platform
title: Configure authentication specifications for Sources SDK
topic-legacy: overview
description: This document provides an overview of the configurations you need to prepare in order to use Sources SDK.
---

# Configure source specification for Sources SDK

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