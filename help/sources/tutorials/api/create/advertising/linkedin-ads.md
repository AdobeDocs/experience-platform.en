---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
solution: Experience Platform
title: Create a source connection and dataflow for LinkedIn Ads using the Flow Service API
topic-legacy: tutorial
description: Learn how to connect Adobe Experience Platform to LinkedIn Ads using the Flow Service API.
hide: true
hidefromtoc: true
---
# (Beta) Create a source connection and dataflow for [!DNL LinkedIn Ads] using the Flow Service API

>[!NOTE]
>
>The [!DNL LinkedIn Ads] source is in beta. See the [sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled sources.

[[!DNL LinkedIn Ads]](https://business.linkedin.com/marketing-solutions/ads) is a marketing solution by LinkedIn that can reach over 830 million professionals on the world's largest professional network. The LinkedIn Reporting & ROI APIs provide key insights on performance such as clicks, impressions, and ad spend, as well as demographic information like metrics by demographic values at the account, campaign, and creative levels.

This Adobe Experience Platform [source](https://experienceleague.adobe.com/docs/experience-platform/sources/home.html?lang=en) leverages the [LinkedIn Reporting & ROI APIs](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting) to retrieve your LinkedIn campaign data, along with all performance and metrics. You can then bring that data to Experience Platform, where you can execute analytics. The data is returned from a specified date within the six month default retention period for daily data. Refer to [guardrails](#guardrails) for details.

[!DNL LinkedIn Ads] uses bearer tokens as an authentication mechanism to communicate with the LinkedIn Reporting & ROI APIs.

## Prerequisites

The first step in creating a [!DNL LinkedIn Ads] source connection is to ensure that you have a LinkedIn developer account. If you do not have one already, see the [Login](https://www.linkedin.com/signup/cold-join?session_redirect=%2Fdevelopers%2FloginRedirect.html) page to register and create your account.

You should also have a [!DNL LinkedIn Developer application] as you will require its access token. If you have not created one, click [create a new application](https://www.linkedin.com/developer/apps/new) and create one. This step is part of the [!DNL LinkedIn] [Authorization Code Flow (3-legged OAuth)](https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow) process.

### Gather required credentials

In order to connect [!DNL LinkedIn Ads] to Platform, you must provide values for the following connection properties:

| Credential | Description | Example |
| --- | --- | --- |
| *`Host`* | LinkedIn API endpoint. | `https://api.linkedin.com` |
| *`Access Token`* | Assuming you have a LinkedIn Developer Application follow this [!DNL LinkedIn] tutorial [Authorization Code Flow (3-legged OAuth)](https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow) to generate the access token. | `AQV4FClIuE2BbDkQeDatkhMFs................qNAmFmlcr9A` |
| *`Account IDs`* | You can find guidance to obtain the Account ID [here](https://www.linkedin.com/help/lms/answer/a424270). | `508670032` |
| *`Campaign Group IDs`* | Campaign Group IDs can be obtained by navigating to the Campaign Groups page and selecting the desired CIDs. | `611138362` |
| *`Campaign IDs`* | You can find guidance to obtain the Campaign ID [here](https://www.linkedin.com/help/lms/answer/a424270). | `1991010101,1992020202` |

### Guardrails {#guardrails}

See the Retention, Restrictions, Delays and Accuracy sections on the [LinkedIn Reporting & ROI APIs](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting) page. 

>[!Note]
>
>[!DNL LinkedIn Ads] only allows data retrieval from active campaigns. The data is returned from a specified date within the six month default retention period for daily data.

## Connect LinkedIn Ads to Platform using the [!DNL Flow Service] API

The following tutorial walks you through the steps to create a [!DNL LinkedIn Ads] source connection and create a dataflow to bring [!DNL LinkedIn Ads] data to Platform using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

### Create a base connection {#base-connection}

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL LinkedIn Ads] authentication credentials as part of the request body.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL LinkedIn Ads]:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "LinkedIn Ads base connection",
        "description": "Create a live inbound connection to your LinkedIn instance, to ingest both historic and scheduled data into Experience Platform",
        "connectionSpec": {
            "id": "59a4b493-a615-40f9-bd38-f823d0909a2b",
            "version": "1.0"
        },
        "auth": {
            "specName": "OAuth2 Refresh Code",
            "params": {
                "host": "https://api.linkedin.com",
                "accessToken": "{LINKEDIN_ADS_ACCESS_TOKEN}"
            }
        }
    }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your base connection. Ensure that the name of your base connection is descriptive as you can use this to look up information on your base connection. |
| `description` | An optional value that you can include to provide more information on your base connection. |
| `connectionSpec.id` | The connection specification ID of your source. This ID can be retrieved after your source is registered and approved through the [!DNL Flow Service] API. |
| `auth.specName` | The authentication type that you are using to authenticate your source to Platform. |
| `auth.params.host` | The LinkedIn Ads API host *https://api.linkedin.com* |
| `auth.params.accessToken` | Your LinkedIn Ads access token. |

**Response**

A successful response returns the newly created base connection, including its unique connection identifier (`id`). This ID is required to explore your source's file structure and contents in the next step.

```json
{
     "id": "59a4b493-a615-40f9-bd38-f823d0909a2b",
     "etag": "\"00009b11-0000-0200-0000-62f334cd0000\""
}
```

### Explore your source {#explore}

Using the base connection ID you generated in the previous step, you can explore files and directories by performing GET requests.
Use the following calls to find the path of the file you wish to bring into [!DNL Platform]:

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=rest&object={OBJECT}&fileType={FILE_TYPE}&preview={PREVIEW}&sourceParams={SOURCE_PARAMS}
```

When performing GET requests to explore your source's file structure and contents, you must include the query parameters that are listed in the table below:


| Parameter | Description |
| --------- | ----------- |
| `{BASE_CONNECTION_ID}` | The base connection ID generated in the previous step. |
| `objectType=rest` | The type of object that you wish to explore. Currently, this value is always set to `rest`. |
| `{OBJECT}` | This parameter is required only when viewing a specific directory. Its value represents the path of the directory you wish to explore. For this source the value would be `json`. |
| `fileType=json` | The file type of the file you want to bring to Platform. Currently, `json` is the only supported file type. |
| `{PREVIEW}` | A boolean value that defines whether the contents of the connection supports preview. |
| `{SOURCE_PARAMS}` | Defines parameters for the source file you want to bring to Platform. To retrieve the accepted format-type for `{SOURCE_PARAMS}`, you must encode the entire `"{"host": "https://api.linkedin.com","accessToken": "{LINKEDIN_ADS_ACCESS_TOKEN}"}"` string in base64. <br/>In the example below, `"{"host": "https://api.linkedin.com","accessToken": "{LINKEDIN_ADS_ACCESS_TOKEN}"}"` encoded in base64 equates to `eyJob3N0IjogImh0dHBzOi8vYXBpLmxpbmtlZGluLmNvbSIsImFjY2Vzc1Rva2VuIjogIntMSU5LRURJTl9BRFNfQUNDRVNTX1RPS0VOfSJ9`. | 

**Request**

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/connections/59a4b493-a615-40f9-bd38-f823d0909a2b/explore?objectType=rest&object=json&fileType=json&preview=true&sourceParams=eyJob3N0IjogImh0dHBzOi8vYXBpLmxpbmtlZGluLmNvbSIsImFjY2Vzc1Rva2VuIjogIntMSU5LRURJTl9BRFNfQUNDRVNTX1RPS0VOfSJ9' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the structure of the queried file.

```json
{
  "format": "hierarchical",
  "schema": {
    "type": "object",
    "properties": {
      "element": {
        "type": "object",
        "properties": {
          "shares": {
            "type": "integer",
            "minimum": -9007199254740992,
            "maximum": 9007199254740991
          },
          "pivotValue": {
            "type": "string"
          },
          "comments": {
            "type": "integer",
            "minimum": -9007199254740992,
            "maximum": 9007199254740991
          },
          "externalWebsiteConversions": {
            "type": "integer",
            "minimum": -9007199254740992,
            "maximum": 9007199254740991
          },
          "dateRange": {
            "type": "object",
            "properties": {
              "start": {
                "type": "object",
                "properties": {
                  "month": {
                    "type": "integer",
                    "minimum": -9007199254740992,
                    "maximum": 9007199254740991
                  },
                  "year": {
                    "type": "integer",
                    "minimum": -9007199254740992,
                    "maximum": 9007199254740991
                  },
                  "day": {
                    "type": "integer",
                    "minimum": -9007199254740992,
                    "maximum": 9007199254740991
                  }
                }
              },
              "end": {
                "type": "object",
                "properties": {
                  "month": {
                    "type": "integer",
                    "minimum": -9007199254740992,
                    "maximum": 9007199254740991
                  },
                  "year": {
                    "type": "integer",
                    "minimum": -9007199254740992,
                    "maximum": 9007199254740991
                  },
                  "day": {
                    "type": "integer",
                    "minimum": -9007199254740992,
                    "maximum": 9007199254740991
                  }
                }
              }
            }
          },
          "landingPageClicks": {
            "type": "integer",
            "minimum": -9007199254740992,
            "maximum": 9007199254740991
          },
          "follows": {
            "type": "integer",
            "minimum": -9007199254740992,
            "maximum": 9007199254740991
          },
          "clicks": {
            "type": "integer",
            "minimum": -9007199254740992,
            "maximum": 9007199254740991
          },
          "totalEngagements": {
            "type": "integer",
            "minimum": -9007199254740992,
            "maximum": 9007199254740991
          },
          "impressions": {
            "type": "integer",
            "minimum": -9007199254740992,
            "maximum": 9007199254740991
          },
          "likes": {
            "type": "integer",
            "minimum": -9007199254740992,
            "maximum": 9007199254740991
          }
        }
      }
    }
  },
  "data": [
    {
      "element": {
        "shares": 0,
        "pivotValue": "urn:li:sponsoredAccount:507947502",
        "comments": 0,
        "externalWebsiteConversions": 0,
        "dateRange": {
          "start": {
            "month": 8,
            "day": 9,
            "year": 2022
          },
          "end": {
            "month": 8,
            "day": 9,
            "year": 2022
          }
        },
        "landingPageClicks": 54,
        "follows": 2,
        "clicks": 136,
        "totalEngagements": 139,
        "impressions": 18423,
        "likes": 5
      }
    },
    {
      "element": {
        "shares": 0,
        "pivotValue": "urn:li:sponsoredAccount:507947502",
        "comments": 0,
        "externalWebsiteConversions": 0,
        "dateRange": {
          "start": {
            "month": 8,
            "day": 4,
            "year": 2022
          },
          "end": {
            "month": 8,
            "day": 4,
            "year": 2022
          }
        },
        "landingPageClicks": 41,
        "follows": 4,
        "clicks": 142,
        "totalEngagements": 151,
        "impressions": 14584,
        "likes": 5
      }
    }
  ]
}
```

### Create a source connection {#source-connection}

You can create a source connection by making a POST request to the [!DNL Flow Service] API. A source connection consists of a connection ID, a path to the source data file, and a connection spec ID.

**API format**

```https
POST /sourceConnections
```

**Request**

The following request creates a source connection for LinkedIn Ads:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "LinkedIn Ads Source Connection",
        "description": "LinkedIn Ads Source Connection",
        "baseConnectionId": "70383d02-2777-4be7-a309-9dd6eea1b46d",
        "connectionSpec": {
            "id": "fd2c8ff3-1de0-4f6b-8fa8-4264784870eb",
            "version": "1.0"
        },
        "data": {
            "format": "json"
        },
        "params": {
            "accountIds": "{LINKEDIN_ADS_ACCOUNT_IDS}",
            "campaignGroupIds": "{LINKEDIN_ADS_CAMPAIGN_GROUP_IDS}",
            "campaignIds": "{LINKEDIN_ADS_CAMPAIGN_IDS}",
            "pivot": "{LINKEDIN_ADS_PIVOT_ENUM_ACCOUNT_OR_CAMPAIGN_GROUP_OR_CAMPAIGN_OR_CREATIVE}"
        }
    }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your source connection. Ensure that the name of your source connection is descriptive as you can use this to look up information on your source connection. |
| `description` | An optional value that you can include to provide more information on your source connection. |
| `baseConnectionId` | The base connection ID of LinkedIn Ads. This ID was generated in an earlier step. |
| `connectionSpec.id` | The connection specification ID that corresponds to your source. |
| `data.format` | The format of the LinkedIn Ads data that you want to ingest. Currently, the only supported data format is `json`. |
| `accountIds` | Your LinkedIn account IDs |
| `campaignGroupIds` | Your LinkedIn Campaign Group IDs. |
| `campaignIds` | Your LinkedIn Campaign IDs. |
| `pivot` | One of `ACCOUNT`, `CAMPAIGN GROUP`, `CAMPAIGN` or `CREATIVE`. Grouping by an element is known as a pivot. Specifying one of these options enables you to restrict export to the specified Account IDs, Campaign Group IDs or Campaign IDs. Refer to [LinkedIn Reporting & ROI API Query Parameters](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting) for further details on pivoting. |

**Response**

A successful response returns the unique identifier (`id`) of the newly created source connection. This ID is required in a later step to create a dataflow.

```json
{
    "id": "5fd07fb3-88ff-4fff-87d9-38cb2e8f47d7",
    "etag": "\"0000a9a9-0000-0200-0000-62f334da0000\""
}
```

### Create a target XDM schema {#target-schema}

In order for the source data to be used in Platform, a target schema must be created to structure the source data according to your needs. The target schema is then used to create a Platform dataset in which the source data is contained.

A target XDM schema can be created by performing a POST request to the [Schema Registry API](https://developer.adobe.com/experience-platform-apis/references/schema-registry/).

For detailed steps on how to create a target XDM schema, see the tutorial on [creating a schema using the API](https://experienceleague.adobe.com/docs/experience-platform/xdm/api/schemas.html?lang=en#create).

### Create a target dataset {#target-dataset}

A target dataset can be created by performing a POST request to the [Catalog Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/catalog.yaml), providing the ID of the target schema within the payload.

For detailed steps on how to create a target dataset, see the tutorial on [creating a dataset using the API](https://experienceleague.adobe.com/docs/experience-platform/catalog/api/create-dataset.html?lang=en).

### Create a target connection {#target-connection}

A target connection represents the connection to the destination where the ingested data is to be stored. To create a target connection, you must provide the fixed connection specification ID that corresponds to the [!DNL Data Lake]. This ID is: `c604ff05-7f1a-43c0-8e18-33bf874cb11c`.

You now have the unique identifiers a target schema a target dataset and the connection spec ID to the [!DNL Data Lake]. Using these identifiers, you can create a target connection using the [!DNL Flow Service] API to specify the dataset that will contain the inbound source data.

**API format**

```https
POST /targetConnections
```

**Request**

The following request creates a target connection for LinkedIn Ads:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/targetConnections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "LinkedIn Ads Target Connection",
        "description": "LinkedIn Ads Target Connection",
        "connectionSpec": {
            "id": "fd2c8ff3-1de0-4f6b-8fa8-4264784870eb",
            "version": "1.0"
        },
        "data": {
            "format": "json"
        },
        "params": {
            "dataSetId": "5ef4551c52e054191a61a99f"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `name` | The name of your target connection. Ensure that the name of your target connection is descriptive as you can use this to look up information on your target connection. |
| `description` | An optional value that you can include to provide more information on your target connection. |
| `connectionSpec.id` | The connection specification ID that corresponds to [!DNL Data Lake]. This fixed ID is: `fd2c8ff3-1de0-4f6b-8fa8-4264784870eb`. |
| `data.format` | The format of the LinkedIn Ads data that you want to ingest. Currently, the only supported data format is `json`. |
| `params.dataSetId` | The target dataset ID retrieved in a previous step. |

**Response**

A successful response returns the new target connection's unique identifier (`id`). This ID is required in later steps.

```json
{
    "id": "35670081-2db2-4f9f-ab62-6501997fd0c8",
    "etag": "\"a401bf8b-0000-0200-0000-62f3371a0000\""
}
```

### Create a mapping {#mapping}

In order for the source data to be ingested into a target dataset, it must first be mapped to the target schema that the target dataset adheres to. This is achieved by performing a POST request to [[!DNL Data Prep] API](https://www.adobe.io/experience-platform-apis/references/data-prep/) with data mappings defined within the request payload.

**API format**

```http
POST /conversion/mappingSets
```

**Request**

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/conversion/mappingSets' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "version": 0,
        "xdmSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/9005a845575fc7014a56f884c67892b7993f02df72df6f98",
        "xdmVersion": "1.0",
        "id": null,
        "mappings": [
            {
                "sourceType": "ATTRIBUTE",
                "source": "element.approximateUniqueImpressions",
                "destination": "_extconndev.approximateUniqueImpressions",
                "name": "approximateUniqueImpressions",
                "description": "LinkedIn Analytics"
            },
            {
                "sourceType": "ATTRIBUTE",
                "source": "element.clicks",
                "destination": "_extconndev.clicks"
            },
            {
                "sourceType": "ATTRIBUTE",
                "source": "element.comments",
                "destination": "_extconndev.comments"
            },
            {
                "sourceType": "ATTRIBUTE",
                "source": "element.externalWebsiteConversions",
                "destination": "_extconndev.externalWebsiteConversions"
            },
            {
                "sourceType": "ATTRIBUTE",
                "source": "element.follows",
                "destination": "_extconndev.follows"
            },
            {
                "sourceType": "ATTRIBUTE",
                "source": "element.impressions",
                "destination": "_extconndev.impressions"
            },
            {
                "sourceType": "ATTRIBUTE",
                "source": "element.landingPageClicks",
                "destination": "_extconndev.landingPageClicks"
            },
            {
                "sourceType": "ATTRIBUTE",
                "source": "element.likes",
                "destination": "_extconndev.likes"
            },
            {
                "sourceType": "ATTRIBUTE",
                "source": "element.pivotValue",
                "destination": "_extconndev.pivotValue"
            },
            {
                "sourceType": "ATTRIBUTE",
                "source": "element.shares",
                "destination": "_extconndev.shares"
            },
            {
                "sourceType": "ATTRIBUTE",
                "source": "element.totalEngagements",
                "destination": "_extconndev.totalEngagements"
            },
            {
                "sourceType": "ATTRIBUTE",
                "source": "element.dateRange.end.day",
                "destination": "_extconndev.dateRange.end.day"
            },
            {
                "sourceType": "ATTRIBUTE",
                "source": "element.dateRange.end.month",
                "destination": "_extconndev.dateRange.end.month"
            },
            {
                "sourceType": "ATTRIBUTE",
                "source": "element.dateRange.end.year",
                "destination": "_extconndev.dateRange.end.year"
            },
            {
                "sourceType": "ATTRIBUTE",
                "source": "element.dateRange.start.day",
                "destination": "_extconndev.dateRange.start.day"
            },
            {
                "sourceType": "ATTRIBUTE",
                "source": "element.dateRange.start.month",
                "destination": "_extconndev.dateRange.start.month"
            },
            {
                "sourceType": "ATTRIBUTE",
                "source": "element.dateRange.start.year",
                "destination": "_extconndev.dateRange.start.year"
            }
        ]
    }'
```

| Property | Description |
| --- | --- |
| `xdmSchema` | The ID of the [target XDM schema](#target-schema) generated in an earlier step. |
| `mappings.destinationXdmPath` | The destination XDM path where the source attribute is being mapped to. |
| `mappings.sourceAttribute` | The source attribute that needs to be mapped to a destination XDM path. |
| `mappings.identity` | A boolean value that designates whether the mapping set will be marked for [!DNL Identity Service]. |

**Response**

A successful response returns details of the newly created mapping including its unique identifier (`id`). This value is required in a later step to create a dataflow.

```json
{
    "id": "bf5286a9c1ad4266baca76ba3adc9366",
    "version": 0,
    "createdDate": 1597784069368,
    "modifiedDate": 1597784069368,
    "createdBy": "{CREATED_BY}",
    "modifiedBy": "{MODIFIED_BY}"
}
```

### Create a flow {#flow}

The last step towards bringing data from LinkedIn Ads to Platform is to create a dataflow. By now, you have the following required values prepared:

* [Source connection ID](#source-connection)
* [Target connection ID](#target-connection)
* [Mapping ID](#mapping)

A dataflow is responsible for scheduling and collecting data from a source. You can create a dataflow by performing a POST request while providing the previously mentioned values within the payload.

To schedule an ingestion, you must first set the start time value to epoch time in seconds. Then, you must set the frequency value to one of `hour` or `day`. The interval value designates the period between two consecutive ingestions. Interval value should be set as `1` or `24` depending on `scheduleParams.frequency` selection of either `hour` or `day`.

**API format**

```http
POST /flows
```

**Request**

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/flows' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "LinkedIn Ads dataflow",
        "description": "LinkedIn Ads dataflow",
        "flowSpec": {
            "id": "6499120c-0b15-42dc-936e-847ea3c24d72",
            "version": "1.0"
        },
        "sourceConnectionIds": [
            "246d052c-da4a-494a-937f-a0d17b1c6cf5"
        ],
        "targetConnectionIds": [
            "7c96c827-3ffd-460c-a573-e9558f72f263"
        ],
        "transformations": [
            {
                "name": "Mapping",
                "params": {
                    "mappingId": "bf5286a9c1ad4266baca76ba3adc9366",
                    "mappingVersion": "0"
                }
            }
        ],
        "scheduleParams": {
            "startTime": "1625040887",
            "frequency": "hour",
            "interval": 1
        }
    }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your dataflow. Ensure that the name of your dataflow is descriptive as you can use this to look up information on your dataflow. |
| `description` | An optional value that you can include to provide more information on your dataflow. |
| `flowSpec.id` | The flow specification ID required to create a dataflow. This fixed ID is: `6499120c-0b15-42dc-936e-847ea3c24d72`. |
| `flowSpec.version` | The corresponding version of the flow specification ID. This value defaults to `1.0`. |
| `sourceConnectionIds` | The [source connection ID](#source-connection) generated in an earlier step. |
| `targetConnectionIds` | The [target connection ID](#target-connection) generated in an earlier step. |
| `transformations` | This property contains the various transformations that are needed to be applied to your data. This property is required when bringing non-XDM-compliant data to Platform. |
| `transformations.name` | The name assigned to the transformation. |
| `transformations.params.mappingId` | The [mapping ID](#mapping) generated in an earlier step. |
| `transformations.params.mappingVersion` | The corresponding version of the mapping ID. This value defaults to `0`. |
| `scheduleParams.startTime` | This property contains information on the ingestion scheduling of the dataflow. |
| `scheduleParams.frequency` | The frequency at which the dataflow will collect data. Acceptable values include: `hour` or `day`. |
| `scheduleParams.interval` | The interval designates the period between two consecutive flow runs. The interval's value should be a non-zero integer. Interval value should be set as `1` or `24` depending on `scheduleParams.frequency` selection of either `hour` or `day`. |

**Response**

A successful response returns the ID (`id`) of the newly created dataflow. You can use this ID to monitor, update, or delete your dataflow.

```json
{
     "id": "993f908f-3342-4d9c-9f3c-5aa9a189ca1a",
     "etag": "\"510bb1d4-8453-4034-b991-ab942e11dd8a\""
}
```

### Monitor your dataflow

Once your dataflow has been created, you can monitor the data that is being ingested through it to see information on flow runs, completion status, and errors.

**API format**

```http
GET /runs?property=flowId=={FLOW_ID}
```

**Request**

The following request retrieves the specifications for an existing dataflow.

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/runs?property=flowId==993f908f-3342-4d9c-9f3c-5aa9a189ca1a' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns details regarding your flow run, including information about its creation date, source and target connections, as well as the flow run's unique identifier (`id`).

```json
{
    "items": [
        {
            "createdAt": 1596656079576,
            "updatedAt": 1596656113526,
            "createdBy": "{CREATED_BY}",
            "updatedBy": "{UPDATED_BY}",
            "createdClient": "{CREATED_CLIENT}",
            "updatedClient": "{UPDATED_CLIENT}",
            "sandboxId": "1bd86660-c5da-11e9-93d4-6d5fc3a66a8e",
            "sandboxName": "prod",
            "id": "9830305a-985f-47d0-b030-5a985fd7d004",
            "flowId": "993f908f-3342-4d9c-9f3c-5aa9a189ca1a",
            "etag": "\"510bb1d4-8453-4034-b991-ab942e11dd8a\"",
            "metrics": {
                "durationSummary": {
                    "startedAtUTC": 1596656058198,
                    "completedAtUTC": 1596656113306
                },
                "sizeSummary": {
                    "inputBytes": 24012,
                    "outputBytes": 17128
                },
                "recordSummary": {
                    "inputRecordCount": 100,
                    "outputRecordCount": 99,
                    "failedRecordCount": 1
                },
                "fileSummary": {
                    "inputFileCount": 1,
                    "outputFileCount": 1,
                    "activityRefs": [
                        "promotionActivity"
                    ]
                },
                "statusSummary": {
                    "status": "success",
                    "errors": [
                        {
                            "code": "CONNECTOR-2001-500",
                            "message": "Error occurred at promotion activity."
                        }
                    ],
                    "activityRefs": [
                        "promotionActivity"
                    ]
                }
            },
            "activities": [
                {
                    "id": "copyActivity",
                    "updatedAtUTC": 1596656095088,
                    "durationSummary": {
                        "startedAtUTC": 1596656058198,
                        "completedAtUTC": 1596656089650,
                        "extensions": {
                            "windowStart": 1596653708000,
                            "windowEnd": 1596655508000
                        }
                    },
                    "sizeSummary": {
                        "inputBytes": 24012,
                        "outputBytes": 24012
                    },
                    "recordSummary": {},
                    "fileSummary": {
                        "inputFileCount": 1,
                        "outputFileCount": 1
                    },
                    "statusSummary": {
                        "status": "success",
                        "extensions": {
                            "type": "one-time"
                        }
                    },
                    "sourceInfo": [
                        {
                            "id": "c0e18602-f9ea-44f9-a186-02f9ea64f9ac",
                            "type": "SourceConnection",
                            "reference": {
                                "type": "AdfRunId",
                                "ids": [
                                    "8a8eb0cc-e283-4605-ac70-65a5adb1baef"
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": "promotionActivity",
                    "updatedAtUTC": 1596656113485,
                    "durationSummary": {
                        "startedAtUTC": 1596656095333,
                        "completedAtUTC": 1596656113306
                    },
                    "sizeSummary": {
                        "inputBytes": 24012,
                        "outputBytes": 17128
                    },
                    "recordSummary": {
                        "inputRecordCount": 100,
                        "outputRecordCount": 99,
                        "failedRecordCount": 1
                    },
                    "fileSummary": {
                        "inputFileCount": 2,
                        "outputFileCount": 1,
                        "extensions": {
                            "manifest": {
                                "fileInfo": "https://platform.adobe.io/data/foundation/export/batches/01EF01X41KJD82Y9ZX6ET54PCZ/meta?path=input_files"
                            }
                        }
                    },
                    "statusSummary": {
                        "status": "success",
                        "errors": [
                            {
                                "code": "CONNECTOR-2001-500",
                                "message": "Error occurred at promotion activity."
                            }
                        ],
                        "extensions": {
                            "manifest": {
                                "failedRecords": "https://platform.adobe.io/data/foundation/export/batches/01EF01X41KJD82Y9ZX6ET54PCZ/meta?path=row_errors",
                                "sampleErrors": "https://platform.adobe.io/data/foundation/export/batches/01EF01X41KJD82Y9ZX6ET54PCZ/meta?path=row_error_samples.json"
                            },
                            "errors": [
                                {
                                    "code": "INGEST-1212-400",
                                    "message": "Encountered 1 errors in the data. Successfully ingested 99 rows. Review the associated diagnostic files for additional details."
                                },
                                {
                                    "code": "MAPPER-3700-400",
                                    "recordCount": 1,
                                    "message": "Mapper Transform Error"
                                }
                            ]
                        }
                    },
                    "targetInfo": [
                        {
                            "id": "47166b83-01c7-4b65-966b-8301c70b6562",
                            "type": "TargetConnection",
                            "reference": {
                                "type": "Batch",
                                "ids": [
                                    "01EF01X41KJD82Y9ZX6ET54PCZ"
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    ],
    "_links": {}
}
```

| Property | Description |
| -------- | ----------- |
| `items` | Contains a single payload of metadata associated with your specific flow run. |
| `metrics` | Defines characteristics of the data in the flow run. |
| `activities` | Defines how the data is transformed. |
| `durationSummary` | Defines the start and end time of the flow run. |
| `sizeSummary` | Defines the volume of the data in bytes. |
| `recordSummary` | Defines the record count of the data. |
| `fileSummary` | Defines the file count of the data. |
| `statusSummary` | Defines whether the flow run is a success or a failure. |

### Update your dataflow

To update your dataflow's run schedule, name, and description, perform a PATCH request to the [!DNL Flow Service] API while providing your flow ID, version, and the new schedule you want to use.

>[!IMPORTANT]
>
>The `If-Match` header is required when making a PATCH request. The value for this header is the unique etag of the dataflow you want to update. 

**API format**

```http
PATCH /flows/{FLOW_ID}
```

**Request**

The following request updates your flow run schedule, as well as your dataflow's name and description.

```shell
curl -X PATCH \
    'https://platform.adobe.io/data/foundation/flowservice/flows/993f908f-3342-4d9c-9f3c-5aa9a189ca1a' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
    -H 'If-Match: "1a0037e4-0000-0200-0000-602e06f60000"' \
    -d '[
            {
                "op": "replace",
                "path": "/scheduleParams/frequency",
                "value": "day"
            },
            {
                "op": "replace",
                "path": "/name",
                "value": "New dataflow name"
            },
            {
                "op": "replace",
                "path": "/description",
                "value": "Updated dataflow description"
            }
        ]'
```

| Parameter | Description |
| --------- | ----------- |
| `op` | The operation call used to define the action needed to update the dataflow. Operations include: `add`, `replace`, and `remove`. |
| `path` | The path of the parameter to be updated. |
| `value` | The new value you want to update your parameter with. |

**Response**

A successful response returns your flow ID and an updated etag. You can verify the update by making a GET request to the [!DNL Flow Service] API, while providing your flow ID.

```json
{
    "id": "5b1752ec-0261-4729-8a7d-959021676230",
    "etag": "\"00009b11-0000-0200-0000-62f334cd0000\""
}
```

### Delete your dataflow

With an existing flow ID, you can delete a dataflow by performing a DELETE request to the [!DNL Flow Service] API.

**API format**

```http
DELETE /flows/{FLOW_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{FLOW_ID}` | The unique `id` value for the dataflow you want to delete. |

**Request**

```shell
curl -X DELETE \
    'https://platform.adobe.io/data/foundation/flowservice/flows/993f908f-3342-4d9c-9f3c-5aa9a189ca1a' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 204 (No Content) and a blank body. You can confirm the deletion by attempting a lookup (GET) request to the dataflow. The API will return an HTTP 404 (Not Found) error, indicating that the dataflow has been deleted.

### Update your connection

To update your connection's name, description, and credentials, perform a PATCH request to the [!DNL Flow Service] API while providing your base connection ID, version, and the new information you want to use.

>[!IMPORTANT]
>
>The `If-Match` header is required when making a PATCH request. The value for this header is the unique version of the connection you want to update.

**API format**

```http
PATCH /connections/{BASE_CONNECTION_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{BASE_CONNECTION_ID}` | The unique `id` value for the connection you want to update. |

**Request**

The following request provides a new name and description, as well as a new set of credentials, to update your connection with.

```shell
curl -X PATCH \
    'https://platform.adobe.io/data/foundation/flowservice/connections/5b1752ec-0261-4729-8a7d-959021676230' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
    -H 'If-Match: 1400dd53-0000-0200-0000-5f3f23450000' \
    -d '[
        {
            "op": "replace",
            "path": "/auth/params",
            "value": {
                "username": "username",
                "password": "{NEW_PASSWORD}",
                "securityToken": "{NEW_SECURITY_TOKEN}"
            }
        },
        {
            "op": "replace",
            "path": "/name",
            "value": "Test connection"
        },
        {
            "op": "add",
            "path": "/description",
            "value": "A test connection"
        }
    ]'
```

| Parameter | Description |
| --------- | ----------- |
| `op` | The operation call used to define the action needed to update the connection. Operations include: `add`, `replace`, and `remove`. |
| `path` | The path of the parameter to be updated. |
| `value` | The new value you want to update your parameter with. |

**Response**

A successful response returns your base connection ID and an updated etag. You can verify the update by making a GET request to the [!DNL Flow Service] API, while providing your connection ID.

```json
{
    "id": "5b1752ec-0261-4729-8a7d-959021676230",
    "etag": "\"00009b11-0000-0200-0000-62f334cd0000\""
}
```

### Delete your connection

Once you have an existing base connection ID, perform a DELETE request to the [!DNL Flow Service] API.

**API format**

```http
DELETE /connections/{CONNECTION_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{BASE_CONNECTION_ID}` | The unique `id` value for the base connection you want to delete. |

**Request**

```shell
curl -X DELETE \
    'https://platform.adobe.io/data/foundation/flowservice/connections/dd3631cd-d0ea-4fea-b631-cdd0ea6fea21' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 204 (No Content) and a blank body.

You can confirm the deletion by attempting a lookup (GET) request to the connection.
