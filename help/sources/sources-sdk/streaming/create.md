---
title: Create a new connection specification for Streaming SDK using the Flow Service API
description: The following document provides steps on how to create a connection specification using the Flow Service API and integrate a new source through Self-Serve Sources.
exl-id: ad8f6004-4e82-49b5-aede-413d72a1482d
badge: Beta
---
# Create a new connection specification using the [!DNL Flow Service] API

>[!NOTE]
>
>Self-Serve Sources Streaming SDK is in beta. Please read the [sources overview](../../home.md#terms-and-conditions) for more information on using beta-labeled sources.

A connection specification represents the structure of a source. It contains information on a source's authentication requirements, defines how source data can be explored and inspected, and provides information on the attributes of a given source. The `/connectionSpecs` endpoint in the [!DNL Flow Service] API allows you to programmatically manage the connection specifications within your organization.

The following document provides steps on how to create a connection specification using the [!DNL Flow Service] API and integrate a new source through Self-Serve Sources (Streaming SDK).

## Getting started

Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Collect artifacts

In order to create a new streaming source using Self-Serve Sources, you must first coordinate with Adobe, request a private Git repository, and align with Adobe on the details regarding the label, description, category, and icon for your source.

Once provided, you must structure your private Git repository like so:

* Sources
  * {your_source}
    * Artifacts
      * {your_source}-category.txt
      * {your_source}-description.txt
      * {your_source}-icon.svg
      * {your_source}-label.txt
      * {your_source}-connectionSpec.json

| Artifacts (file names) | Description | Example |
| --- | --- | --- |
| {your_source} | The name of your source. This folder should contain all artifacts related to your source, within your private Git repository. | `medallia`|
| {your_source}-category.txt | The category to which your source belongs, formatted as a text file. **Note**: If you believe that your source does not fit in any of the above categories, please contact your Adobe representative to discuss. | `medallia-category.txt` Inside the file, please specify the category of your source, like: `streaming`. |
| {your_source}-description.txt | A brief description of your source. | [!DNL Medallia] is marketing automation source that you can use to bring [!DNL Medallia] data to Experience Platform. |
| {your_source}-icon.svg | The image to be used to represent your source in the Experience Platform sources catalog. This icon must be an SVG file. |
| {your_source}-label.txt | The name of your source as it should appear in the Experience Platform sources catalog. | Medallia | 
| {your_source}-connectionSpec.json | A JSON file that contains the connection specification of your source. This file is not initially required as you will be populating your connection specification as you complete this guide. | `medallia-connectionSpec.json` |

{style="table-layout:auto"}

>[!TIP]
>
>During the testing period of your connection specification, in place of key values, you can use `text` in the connection specification.

Once you have added the necessary files to your private Git repository, you must then create a pull request (PR) for Adobe to review. When your PR is approved and merged, you will be provided with an ID that can be used for your connection specification to refer to your source's label, description, and icon.

Next, follow the steps outlined below to configure your connection specification. For additional guidance on the different functionalities that you can add to your source, such as advanced scheduling, custom schema, or different pagination types, please review the guide on [configuring source specifications](../config/sourcespec.md).

## Copy connection specification template

Once you have gathered the required artifacts, copy and paste the connection specification template below to the text editor of your choice and then update the attributes in brackets `{}` with information relevant to your specific source. 

```json
{
  "name": "generic-streaming",
  "type": "generic-streaming",
  "description": "{DESCRIPTION}",
  "providerId": "521eee4d-8cbe-4906-bb48-fb6bd4450033",
  "version": "1.0",
  "attributes": {
    "category": "Streaming",
    "isSource": true,
    "documentationLink": "https://docs.adobe.com/content/help/en/platform-learn/tutorials/data-ingestion/understanding-streaming-ingestion.html",
    "uiAttributes": {
      "apiFeatures": {
        "updateSupported": false
      }
    }
  },
  "authSpec": [],
  "name": "generic-streaming",
  "permissionsInfo": {
    "view": [
      {
        "name": "StreamingSource",
        "@type": "lowLevel",
        "permissions": [
          "read"
        ]
      }
    ],
    "manage": [
      {
        "name": "StreamingSource",
        "@type": "lowLevel",
        "permissions": [
          "write"
        ]
      }
    ]
  },
  "providerId": "521eee4d-8cbe-4906-bb48-fb6bd4450033",
  "sourceSpec": {
    "attributes": {
      "authRequired": false,
      "uiAttributes": {
        "documentationLink": "http://www.adobe.com/go/understanding-data-streaming-ingestion-en",
        "isSource": true,
        "monitoringSupported": false,
        "category": {
          "key": "streaming"
        },
        "icon": {
          "key": "generic"
        },
        "description": {
          "text": "Generic Streaming For Authentication Testing 2"
        },
        "label": {
          "text": "Generic Streaming For Authentication Testing 2"
        },
        "frequency": {
          "text": "Generic Streaming"
        }
      }
    }
  },
  "exploreSpec": {
    "type": "StreamingConnection"
  }
}
```

## Create a connection specification {#create}

Once you have acquired the connection specification template, you can now start authoring a new connection specification by filling in the appropriate values that corresponds to your source. 

A connection specification can be divided into two distinct parts: the source specifications and the explore specifications. 

See the following documents for more information on the sections of a connection specification:

* [Configure your source specification](../config/sourcespec.md)
* [Configure your explore specification](../config/explorespec.md)

With your specification information updated, you can submit the new connection specification by making a POST request to the `/connectionSpecs` endpoint of the [!DNL Flow Service] API.

**API format**

```http
POST /connectionSpecs
```

**Request**

The following request is an example of a fully-authored connection specification for a streaming source:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connectionSpecs' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "generic-streaming",
      "type": "generic-streaming",
      "providerId": "521eee4d-8cbe-4906-bb48-fb6bd4450033",
      "version": "1.0",
      "attributes": {
          "category": "Streaming",
          "isSource": true,
          "documentationLink": "https://docs.adobe.com/content/help/en/platform-learn/tutorials/data-ingestion/understanding-streaming-ingestion.html",
          "uiAttributes": {
            "apiFeatures": {
              "updateSupported": false
            }
          }
        },
        "authSpec": [],
        "name": "generic-streaming",
        "permissionsInfo": {
          "view": [
            {
              "name": "StreamingSource",
              "@type": "lowLevel",
              "permissions": [
                "read"
              ]
            }
          ],
          "manage": [
            {
              "name": "StreamingSource",
              "@type": "lowLevel",
              "permissions": [
                "write"
              ]
            }
          ]
        },
        "providerId": "521eee4d-8cbe-4906-bb48-fb6bd4450033",
        "sourceSpec": {
          "attributes": {
            "uiAttributes": {
              "documentationLink": "http://www.adobe.com/go/understanding-data-streaming-ingestion-en",
              "isSource": true,
              "monitoringSupported": false,
              "category": {
                "key": "streaming"
              },
              "icon": {
                "key": "Generic-Streaming"
              },
              "description": {
                "text": "Generic Streaming Connector"
              },
              "label": {
                "text": "Generic"
              },
              "frequency": {
                "text": "streaming"
              }
            }
          }
        },
        "exploreSpec": {
          "type": "StreamingConnection"
          },
        "type": "generic-streaming",
        "version": "1.0"
      }'
```

**Response**

A successful response returns the newly created connection specification, including its unique `id`.

```json
{
  "items": [
    {
      "id": "bdb5b792-451b-42de-acf8-15f3195821de",
      "createdAt": 1667536504101,
      "updatedAt": 1667536504101,
      "createdBy": "{CREATED_BY}",
      "updatedBy": "{UPDATED_BY}",
      "createdClient": "{CREATED_CLIENT}",
      "updatedClient": "{CREATED_CLIENT}",
      "sandboxId": "d537df80-c5d7-11e9-aafb-87c71c35cac8",
      "sandboxName": "prod",
      "imsOrgId": "{ORG_ID}",
      "name": "generic-streaming",
      "providerId": "521eee4d-8cbe-4906-bb48-fb6bd4450033",
      "version": "1.0",
      "type": "generic-streaming",
      "sourceSpec": {
        "attributes": {
          "authRequired": false,
          "uiAttributes": {
            "documentationLink": "http://www.adobe.com/go/understanding-data-streaming-ingestion-en",
            "isSource": true,
            "monitoringSupported": false,
            "category": {
              "key": "streaming"
            },
            "icon": {
              "key": "Generic-Streaming"
            },
            "description": {
              "text": "Generic Streaming Connector"
            },
            "label": {
              "text": "Generic"
            },
            "frequency": {
              "text": "streaming"
            }
          }
        }
      },
      "exploreSpec": {
        "type": "StreamingConnection"
      },
      "attributes": {
        "category": "Streaming",
        "isSource": true,
        "documentationLink": "https://docs.adobe.com/content/help/en/platform-learn/tutorials/data-ingestion/understanding-streaming-ingestion.html",
        "uiAttributes": {
          "apiFeatures": {
            "updateSupported": false
          }
        }
      },
      "permissionsInfo": {
        "view": [
          {
            "@type": "lowLevel",
            "name": "StreamingSource",
            "permissions": [
              "read"
            ]
          }
        ],
        "manage": [
          {
            "@type": "lowLevel",
            "name": "StreamingSource",
            "permissions": [
              "write"
            ]
          }
        ]
      }
    }
  ]
}
```

## Next steps

Now that you have created a new connection specification, you must add its corresponding connection specification ID to an existing flow specification. See the tutorial on [updating flow specifications](./update-flow-specs.md) for more information.

To make modifications to the connection specification that you created, see the tutorial on [updating connection specifications](./update-connection-specs.md).
