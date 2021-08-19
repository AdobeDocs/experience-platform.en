---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
solution: Experience Platform
title: Configuration options in Sources SDK
topic-legacy: overview
description:
---
# Configuration options in Sources SDK

>[!IMPORTANT]
>
>Sources SDK is in beta. The feature and documentation are subject to change.

This document provides an overview of the configurations you need to prepare in order to use Sources SDK.

## ConnectionSpecs

Connection specifications return a source's connector properties, including authentication specifications related to creating the base and source connections. Connection specifications are tenant and IMS Organization agnostic.

### Empty

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

### Generic rest connector connection spec example

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
| `sourceSpec` |
| `sourceSpec.attributes` |
| `sourceSpec.attributes.uiAttributes` |
| `sourceSpec.attributes.uiAttributes.documentationLink` |
| `sourceSpec.attributes.uiAttributes.isBeta` |
| `sourceSpec.attributes.uiAttributes.category` |
| `sourceSpec.attributes.uiAttributes.icon` |
| `sourceSpec.attributes.uiAttributes.label` |
| `sourceSpec.attributes.uiAttributes.description` |
| `sourceSpec.attributes.urlParams.hostName` |
| `sourceSpec.attributes.urlParams.path` |
| `sourceSpec.attributes.urlParams.method` |
| `sourceSpec.attributes.contentPath` |
| `sourceSpec.attributes.queryParams` |
| `sourceSpec.attributes.headerParams` |
| `sourceSpec.attributes.bodyParams` |
| `sourceSpec.attributes.paginationParams` |
| `sourceSpec.attributes.paginationParams` == `offsetType` |
| `sourceSpec.attributes.scheduleParams.scheduleStartParamName` |
| `sourceSpec.attributes.scheduleParams.scheduleEndParamName` |
| `sourceSpec.attributes.scheduleParams.scheduleStartParamFormat` |
| `sourceSpec.attributes.scheduleParams.scheduleEndParamFormat` |
| `sourceSpec.spec` |


## AuthSpecs

Authentication specifications define how Platform users can connect to your source.

### AuthSpecs for OAuth 2.0

Authentication specifications for OAuth 2.0 define how Platform users can connect to your source using OAuth 2.0

## ExploreSpecs

| Explore specifications | Description | Example |
| --- | --- | --- |
| `exploreSpec` |
| `exploreSpec.name` |