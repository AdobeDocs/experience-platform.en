---
description: This page exemplifies the API call used to update an existing destination server configuration through Adobe Experience Platform Destination SDK.
title: Update a destination server configuration
exl-id: 579d2cc1-5110-4fba-9dcc-ff4b8d259827
---
# Update a destination server configuration

This page exemplifies the API request and payload that you can use to update an existing destination server configuration, using the `/authoring/destination-servers` API endpoint.

>[!TIP]
>
>Any update operation on productized/public destinations is visible only after you use the [publishing API](../../publishing-api/create-publishing-request.md) and submit the update for Adobe review.

For a detailed description of the capabilities that you can configure through this endpoint, read the following articles:

* [Server specs for destinations created with Destination SDK](../../../destination-sdk/functionality/destination-server/server-specs.md)
* [Templating specs for destinations created with Destination SDK](../../../destination-sdk/functionality/destination-server/templating-specs.md)
* [Message format](../../../destination-sdk/functionality/destination-server/message-format.md)
* [File formatting configuration](../../../destination-sdk/functionality/destination-server/file-formatting.md)

>[!IMPORTANT]
>
>All parameter names and values supported by Destination SDK are **case sensitive**. To avoid case sensitivity errors, please use the parameters names and values exactly as shown in the documentation.

## Getting started with destination server API operations {#get-started}

Before continuing, please review the [getting started guide](../../getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Update a destination server configuration {#update}

You can update an [existing](create-destination-server.md) destination server configuration by making a `PUT` request to the `/authoring/destination-servers` endpoint with the updated payload.

>[!TIP]
>
>**API endpoint**: `platform.adobe.io/data/core/activation/authoring/destination-servers`

To obtain an existing destination server configuration and its corresponding `{INSTANCE_ID}`, see the article about [retrieving a destination server configuration](retrieve-destination-server.md).

**API format**

```http
PUT /authoring/destination-servers/{INSTANCE_ID}
```

| Parameter | Description |
| -------- | ----------- |
| `{INSTANCE_ID}` | The ID of the destination server configuration that you want to update. To obtain an existing destination server configuration and its corresponding `{INSTANCE_ID}`, see [Retrieve a destination server configuration](retrieve-destination-server.md).|

The following requests update an existing destination server configuration, configured by the parameters provided in the payload.

Select each tab below to view the corresponding payload.

>[!BEGINTABS]

>[!TAB Real-time (streaming)]

+++Request

```shell
curl -X PUT https://platform.adobe.io/data/core/activation/authoring/destination-servers\{INSTANCE_ID} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
   "name":"Moviestar destination server",
   "destinationServerType":"URL_BASED",
   "urlBasedDestination":{
      "url":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"https://api.moviestar.com/data/{{customerData.region}}/items"
      }
   },
   "httpTemplate":{
      "httpMethod":"PUT",
      "requestBody":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{ \"attributes\": [ {% for ns in [\"external_id\", \"yourdestination_id\"] %} {% if input.profile.identityMap[ns] is not empty and first_namespace_encountered %} , {% endif %} {% set first_namespace_encountered = true %} {% for identity in input.profile.identityMap[ns]%} { \"{{ ns }}\": \"{{ identity.id }}\" {% if input.profile.segmentMembership.ups is not empty %} , \"AEPSegments\": { \"add\": [ {% for segment in input.profile.segmentMembership.ups %} {% if segment.value.status == \"realized\" or segment.value.status == \"existing\" %} {% if added_segment_found %} , {% endif %} {% set added_segment_found = true %} \"{{ destination.segmentAliases[segment.key] }}\" {% endif %} {% endfor %} ], \"remove\": [ {% for segment in input.profile.segmentMembership.ups %} {% if segment.value.status == \"exited\" %} {% if removed_segment_found %} , {% endif %} {% set removed_segment_found = true %} \"{{ destination.segmentAliases[segment.key] }}\" {% endif %} {% endfor %} ] } {% set removed_segment_found = false %} {% set added_segment_found = false %} {% endif %} {% if input.profile.attributes is not empty %} , {% endif %} {% for attribute in input.profile.attributes %} \"{{ attribute.key }}\": {% if attribute.value is empty %} null {% else %} \"{{ attribute.value.value }}\" {% endif %} {% if not loop.last%} , {% endif %} {% endfor %} } {% if not loop.last %} , {% endif %} {% endfor %} {% endfor %} ] }"
      },
      "contentType":"application/json"
   }
}
```

| Parameter | Type | Description |
| -------- | ----------- | ----------- |
|`name` | String | *Required.* Represents a friendly name of your server, visible only to Adobe. This name is not visible to partners or customers. Example `Moviestar destination server`.  |
|`destinationServerType` | String | *Required.* Set to `URL_BASED` for real-time (streaming) destinations. |
|`urlBasedDestination.url.templatingStrategy` | String | *Required.* <ul><li>Use `PEBBLE_V1` if Adobe needs to transform the URL in the `value` field below. Use this option if you have an endpoint like: `https://api.moviestar.com/data/{{customerData.region}}/items`. </li><li> Use `NONE` if no transformation is needed on the Adobe side, for example if you have an endpoint like: `https://api.moviestar.com/data/items`.</li></ul>  |
|`urlBasedDestination.url.value` | String | *Required.* Fill in the address of the API endpoint that Experience Platform should connect to. |
|`httpTemplate.httpMethod` | String | *Required.* The method that Adobe will use in calls to your server. Options are `GET`, `PUT`, `PUT`, `DELETE`, `PATCH`. |
|`httpTemplate.requestBody.templatingStrategy` | String | *Required.* Use `PEBBLE_V1`. |
|`httpTemplate.requestBody.value` | String | *Required.* This string is the character-escaped version that transforms the data of Platform customers to the format your service expects. <br> <ul><li> For information on how to write the template, read the [Using templating section](../../functionality/destination-server/message-format.md#using-templating). </li><li> For more information about character escaping, refer to the [RFC JSON standard, section seven](https://tools.ietf.org/html/rfc8259#section-7). </li><li> For an example of a simple transformation, refer to the [Profile Attributes](../../functionality/destination-server/message-format.md#attributes) transformation. </li></ul> |
|`httpTemplate.contentType` | String | *Required.* The content type that your server accepts. This value is most likely `application/json`. |

{style="table-layout:auto"}

+++

+++Response

A successful response returns HTTP status 200 with the details of your updated destination server configuration.

+++

>[!TAB Amazon S3]

+++Request

```shell
curl -X PUT https://platform.adobe.io/data/core/activation/authoring/destination-servers\{INSTANCE_ID} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
    "name": "S3 destination",
    "destinationServerType": "FILE_BASED_S3",
    "fileBasedS3Destination": {
        "bucket": {
            "templatingStrategy": "PEBBLE_V1",
            "value": "{{customerData.bucket}}"
        },
        "path": {
            "templatingStrategy": "PEBBLE_V1",
            "value": "{{customerData.path}}"
        }
    },
    "fileConfigurations": {
        "compression": {
            "templatingStrategy": "PEBBLE_V1",
            "value": "{{customerData.compression}}"
        },
        "fileType": {
            "templatingStrategy": "PEBBLE_V1",
            "value": "{{customerData.fileType}}"
        },
        "csvOptions": {
            "quote": {
                "templatingStrategy": "NONE",
                "value": "\""
            },
            "quoteAll": {
                "templatingStrategy": "NONE",
                "value": "false"
            },
            "escape": {
                "templatingStrategy": "NONE",
                "value": "\\"
            },
            "escapeQuotes": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "header": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "ignoreLeadingWhiteSpace": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "ignoreTrailingWhiteSpace": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "nullValue": {
                "templatingStrategy": "NONE",
                "value": ""
            },
            "dateFormat": {
                "templatingStrategy": "NONE",
                "value": "yyyy-MM-dd"
            },
            "timestampFormat": {
                "templatingStrategy": "NONE",
                "value": "yyyy-MM-dd'T':mm:ss[.SSS][XXX]"
            },
            "charToEscapeQuoteEscaping": {
                "templatingStrategy": "NONE",
                "value": "\\"
            },
            "emptyValue": {
                "templatingStrategy": "NONE",
                "value": ""
            }
        }
    }
}
```

|Parameter|Type|Description|
|---|---|---|
|`name`|String|The name of your destination connection.|
|`destinationServerType`|String|Set this value according to your destination platform. For [!DNL Amazon S3], set this to `FILE_BASED_S3`.|
|`fileBasedS3Destination.bucket.templatingStrategy`| String|*Required.* Use `PEBBLE_V1`.|
|`fileBasedS3Destination.bucket.value`|String|The name of the [!DNL Amazon S3] bucket to be used by this destination.|
|`fileBasedS3Destination.path.templatingStrategy`|String| *Required.* Use `PEBBLE_V1`.|
|`fileBasedS3Destination.path.value`|String|The path to the destination folder that will host the exported files.|
|`fileConfigurations`|N/A|See [file formatting configuration](../../functionality/destination-server/file-formatting.md) for detailed information on how to configure these settings.|

{style="table-layout:auto"}

+++

+++Response

A successful response returns HTTP status 200 with the details of your updated destination server configuration.

+++

>[!TAB SFTP]

+++Request

```shell
curl -X PUT https://platform.adobe.io/data/core/activation/authoring/destination-servers/{INSTANCE_ID} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
   "name":"File-based SFTP destination server",
   "destinationServerType":"FILE_BASED_SFTP",
   "fileBasedSFTPDestination":{
      "rootDirectory":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.rootDirectory}}"
      }, 
      "port": 22,
      "encryptionMode" : "PGP"
   },
    "fileConfigurations": {
        "compression": {
            "templatingStrategy": "PEBBLE_V1",
            "value": "{{customerData.compression}}"
        },
        "fileType": {
            "templatingStrategy": "PEBBLE_V1",
            "value": "{{customerData.fileType}}"
        },
        "csvOptions": {
            "quote": {
                "templatingStrategy": "NONE",
                "value": "\""
            },
            "quoteAll": {
                "templatingStrategy": "NONE",
                "value": "false"
            },
            "escape": {
                "templatingStrategy": "NONE",
                "value": "\\"
            },
            "escapeQuotes": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "header": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "ignoreLeadingWhiteSpace": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "ignoreTrailingWhiteSpace": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "nullValue": {
                "templatingStrategy": "NONE",
                "value": ""
            },
            "dateFormat": {
                "templatingStrategy": "NONE",
                "value": "yyyy-MM-dd"
            },
            "timestampFormat": {
                "templatingStrategy": "NONE",
                "value": "yyyy-MM-dd'T':mm:ss[.SSS][XXX]"
            },
            "charToEscapeQuoteEscaping": {
                "templatingStrategy": "NONE",
                "value": "\\"
            },
            "emptyValue": {
                "templatingStrategy": "NONE",
                "value": ""
            }
        }
    }
}
```

|Parameter|Type|Description|
|---|---|---|
|`name`|String|The name of your destination connection.|
|`destinationServerType`|String|Set this value according to your destination platform. For [!DNL SFTP] destinations, set this to `FILE_BASED_SFTP`.|
|`fileBasedSFTPDestination.rootDirectory.templatingStrategy`|String| *Required.* Use `PEBBLE_V1`.|
|`fileBasedSFTPDestination.rootDirectory.value`|String|The root directory of the destination storage.|
|`fileBasedSFTPDestination.hostName.templatingStrategy`|String| *Required.* Use `PEBBLE_V1`.|
|`fileBasedSFTPDestination.hostName.value`|String|The host name of the destination storage.|
|`port`|Integer|The SFTP file server port.|
|`encryptionMode`|String|Indicates whether to use file encryption. Supported values: <ul><li>PGP</li><li>None</li></ul>|
|`fileConfigurations`|N/A|See [file formatting configuration](../../functionality/destination-server/file-formatting.md) for detailed information on how to configure these settings.|

{style="table-layout:auto"}

+++

+++Response

A successful response returns HTTP status 200 with the details of your updated destination server configuration.

+++

>[!TAB Azure Data Lake Storage]

+++Request

```shell
curl -X PUT https://platform.adobe.io/data/core/activation/authoring/destination-servers/{INSTANCE_ID} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
   "name":"ADLS destination server",
   "destinationServerType":"FILE_BASED_ADLS_GEN2",
   "fileBasedAdlsGen2Destination":{
      "path":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.path}}"
      }
   },
  "fileConfigurations": {
        "compression": {
            "templatingStrategy": "PEBBLE_V1",
            "value": "{{customerData.compression}}"
        },
        "fileType": {
            "templatingStrategy": "PEBBLE_V1",
            "value": "{{customerData.fileType}}"
        },
        "csvOptions": {
            "quote": {
                "templatingStrategy": "NONE",
                "value": "\""
            },
            "quoteAll": {
                "templatingStrategy": "NONE",
                "value": "false"
            },
            "escape": {
                "templatingStrategy": "NONE",
                "value": "\\"
            },
            "escapeQuotes": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "header": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "ignoreLeadingWhiteSpace": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "ignoreTrailingWhiteSpace": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "nullValue": {
                "templatingStrategy": "NONE",
                "value": ""
            },
            "dateFormat": {
                "templatingStrategy": "NONE",
                "value": "yyyy-MM-dd"
            },
            "timestampFormat": {
                "templatingStrategy": "NONE",
                "value": "yyyy-MM-dd'T':mm:ss[.SSS][XXX]"
            },
            "charToEscapeQuoteEscaping": {
                "templatingStrategy": "NONE",
                "value": "\\"
            },
            "emptyValue": {
                "templatingStrategy": "NONE",
                "value": ""
            }
        }
    }
}
```

|Parameter|Type|Description|
|---|---|---|
|`name`|String|The name of your destination connection.|
|`destinationServerType`|String|Set this value according to your destination platform. For [!DNL Azure Data Lake Storage] destinations, set this to `FILE_BASED_ADLS_GEN2`.|
|`fileBasedAdlsGen2Destination.path.templatingStrategy`|String| *Required.* Use `PEBBLE_V1`.|
|`fileBasedAdlsGen2Destination.path.value`|String|The path to the destination folder that will host the exported files.|
|`fileConfigurations`|N/A|See [file formatting configuration](../../functionality/destination-server/file-formatting.md) for detailed information on how to configure these settings.|

{style="table-layout:auto"}

+++

+++Response

A successful response returns HTTP status 200 with the details of your updated destination server configuration.

+++

>[!TAB Azure Blob Storage]

+++Request

```shell
curl -X PUT https://platform.adobe.io/data/core/activation/authoring/destination-servers/{INSTANCE_D} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
   "name":"Blob destination server",
   "destinationServerType":"FILE_BASED_AZURE_BLOB",
   "fileBasedAzureBlobDestination":{
      "path":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.path}}"
      },
      "container":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.container}}"
      }
   },
  "fileConfigurations": {
        "compression": {
            "templatingStrategy": "PEBBLE_V1",
            "value": "{{customerData.compression}}"
        },
        "fileType": {
            "templatingStrategy": "PEBBLE_V1",
            "value": "{{customerData.fileType}}"
        },
        "csvOptions": {
            "quote": {
                "templatingStrategy": "NONE",
                "value": "\""
            },
            "quoteAll": {
                "templatingStrategy": "NONE",
                "value": "false"
            },
            "escape": {
                "templatingStrategy": "NONE",
                "value": "\\"
            },
            "escapeQuotes": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "header": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "ignoreLeadingWhiteSpace": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "ignoreTrailingWhiteSpace": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "nullValue": {
                "templatingStrategy": "NONE",
                "value": ""
            },
            "dateFormat": {
                "templatingStrategy": "NONE",
                "value": "yyyy-MM-dd"
            },
            "timestampFormat": {
                "templatingStrategy": "NONE",
                "value": "yyyy-MM-dd'T':mm:ss[.SSS][XXX]"
            },
            "charToEscapeQuoteEscaping": {
                "templatingStrategy": "NONE",
                "value": "\\"
            },
            "emptyValue": {
                "templatingStrategy": "NONE",
                "value": ""
            }
        }
    }
}
```

|Parameter|Type|Description|
|---|---|---|
|`name`|String|The name of your destination connection.|
|`destinationServerType`|String|Set this value according to your destination platform. For [!DNL Azure Blob Storage] destinations, set this to `FILE_BASED_AZURE_BLOB`.|
|`fileBasedAzureBlobDestination.path.templatingStrategy`|String| *Required.* Use `PEBBLE_V1`.|
|`fileBasedAzureBlobDestination.path.value`|String|The path to the destination folder that will host the exported files.|
|`fileBasedAzureBlobDestination.container.templatingStrategy`|String| *Required.* Use `PEBBLE_V1`.|
|`fileBasedAzureBlobDestination.container.value`|String|The name of the [!DNL Azure Blob Storage] container to be used by this destination.|
|`fileConfigurations`|N/A|See [file formatting configuration](../../functionality/destination-server/file-formatting.md) for detailed information on how to configure these settings.|

{style="table-layout:auto"}

+++

+++Response

A successful response returns HTTP status 200 with the details of your updated destination server configuration.

+++

>[!TAB Data Landing Zone (DLZ)]

+++Request

```shell
curl -X PUT https://platform.adobe.io/data/core/activation/authoring/destination-servers/{INSTANCE_ID} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
   "name":"DLZ destination server",
   "destinationServerType":"FILE_BASED_DLZ",
   "fileBasedDlzDestination":{
      "path":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.path}}"
      },
      "useCase": "Your use case"
   },
   "fileConfigurations": {
        "compression": {
            "templatingStrategy": "PEBBLE_V1",
            "value": "{{customerData.compression}}"
        },
        "fileType": {
            "templatingStrategy": "PEBBLE_V1",
            "value": "{{customerData.fileType}}"
        },
        "csvOptions": {
            "quote": {
                "templatingStrategy": "NONE",
                "value": "\""
            },
            "quoteAll": {
                "templatingStrategy": "NONE",
                "value": "false"
            },
            "escape": {
                "templatingStrategy": "NONE",
                "value": "\\"
            },
            "escapeQuotes": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "header": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "ignoreLeadingWhiteSpace": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "ignoreTrailingWhiteSpace": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "nullValue": {
                "templatingStrategy": "NONE",
                "value": ""
            },
            "dateFormat": {
                "templatingStrategy": "NONE",
                "value": "yyyy-MM-dd"
            },
            "timestampFormat": {
                "templatingStrategy": "NONE",
                "value": "yyyy-MM-dd'T':mm:ss[.SSS][XXX]"
            },
            "charToEscapeQuoteEscaping": {
                "templatingStrategy": "NONE",
                "value": "\\"
            },
            "emptyValue": {
                "templatingStrategy": "NONE",
                "value": ""
            }
        }
    }
}
```

|Parameter|Type|Description|
|---|---|---|
|`name`|String|The name of your destination connection.|
|`destinationServerType`|String|Set this value according to your destination platform. For [!DNL Data Landing Zone] destinations, set this to `FILE_BASED_DLZ`.|
|`fileBasedDlzDestination.path.templatingStrategy`|String| *Required.*  Use `PEBBLE_V1`.|
|`fileBasedDlzDestination.path.value`|String|The path to the destination folder that will host the exported files.|
|`fileConfigurations`|N/A|See [file formatting configuration](../../functionality/destination-server/file-formatting.md) for detailed information on how to configure these settings.|

{style="table-layout:auto"}

+++

+++Response

A successful response returns HTTP status 200 with the details of your updated destination server configuration.

+++

>[!TAB Google Cloud Storage]

+++Request

```shell
curl -X PUT https://platform.adobe.io/data/core/activation/authoring/destination-servers/{INSTANCE_ID} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
   "name":"Google Cloud Storage Server",
   "destinationServerType":"FILE_BASED_GOOGLE_CLOUD",
   "fileBasedGoogleCloudStorageDestination":{
      "bucket":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.bucket}}"
      },
      "path":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.path}}"
      }
   },
  "fileConfigurations": {
        "compression": {
            "templatingStrategy": "PEBBLE_V1",
            "value": "{{customerData.compression}}"
        },
        "fileType": {
            "templatingStrategy": "PEBBLE_V1",
            "value": "{{customerData.fileType}}"
        },
        "csvOptions": {
            "quote": {
                "templatingStrategy": "NONE",
                "value": "\""
            },
            "quoteAll": {
                "templatingStrategy": "NONE",
                "value": "false"
            },
            "escape": {
                "templatingStrategy": "NONE",
                "value": "\\"
            },
            "escapeQuotes": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "header": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "ignoreLeadingWhiteSpace": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "ignoreTrailingWhiteSpace": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "nullValue": {
                "templatingStrategy": "NONE",
                "value": ""
            },
            "dateFormat": {
                "templatingStrategy": "NONE",
                "value": "yyyy-MM-dd"
            },
            "timestampFormat": {
                "templatingStrategy": "NONE",
                "value": "yyyy-MM-dd'T':mm:ss[.SSS][XXX]"
            },
            "charToEscapeQuoteEscaping": {
                "templatingStrategy": "NONE",
                "value": "\\"
            },
            "emptyValue": {
                "templatingStrategy": "NONE",
                "value": ""
            }
        }
    }
}
```

|Parameter|Type|Description|
|---|---|---|
|`name`|String|The name of your destination connection.|
|`destinationServerType`|String|Set this value according to your destination platform. For [!DNL Google Cloud Storage] destinations, set this to `FILE_BASED_GOOGLE_CLOUD`.|
|`fileBasedGoogleCloudStorageDestination.bucket.templatingStrategy`|String| *Required.*  Use `PEBBLE_V1`.|
|`fileBasedGoogleCloudStorageDestination.bucket.value`|String|The name of the [!DNL Google Cloud Storage] bucket to be used by this destination.|
|`fileBasedGoogleCloudStorageDestination.path.templatingStrategy`|String| *Required.* Use `PEBBLE_V1`.|
|`fileBasedGoogleCloudStorageDestination.path.value`|String|The path to the destination folder that will host the exported files.|
|`fileConfigurations`|N/A|See [file formatting configuration](../../functionality/destination-server/file-formatting.md) for detailed information on how to configure these settings.|

{style="table-layout:auto"}

+++

+++Response

A successful response returns HTTP status 200 with the details of your updated destination server configuration.

+++

>[!ENDTABS]

## API error handling {#error-handling}

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.

## Next steps {#next-steps}

After reading this document, you now know how to update a destination server configuration through the Destination SDK `/authoring/destination-servers` API endpoint.

To learn more about what you can do with this endpoint, see the following articles:

* [Create a destination server configuration](create-destination-server.md)
* [Retrieve a destination server configuration](retrieve-destination-server.md)
* [Update a destination server configuration](update-destination-server.md)
