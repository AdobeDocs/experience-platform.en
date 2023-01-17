---
description: Learn how to configure destination server specs in Adobe Experience Platform Destination SDK via the `/authoring/destination-servers` endpoint.
title: Server specs for destinations created with Destination SDK
---

# Server specs for destinations created with Destination SDK

When creating a new destination, you can configure the destination server specs via the `/authoring/destination-servers` endpoint.

Destination SDK supports multiple destination server types. When [creating a new destination server](../../authoring-api/destination-server/create-destination-server.md), use one of the server type configurations described below, depending on your integration requirements.

## URL-based destination server {#url-destination-server}

URL-based destination servers allow you to activate data from Adobe Experience Platform to your destination via HTTP exports. The server configuration contains information about the server receiving the messages (the server on your side).

This process delivers user data as a series of HTTP messages to your destination platform. The parameters below form the HTTP server specs template.

The sample below shows an example of a destination server configuration for a URL-based destination.

```json
{
   "name":"Example URL-based destination server name",
   "destinationServerType":"URL_BASED",
   "urlBasedDestination":{
      "url":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"https://api.example.com/data/{{customerData.endpointRegion}}/items"
      }
   }
}
```

|Parameter | Type | Description|
|---|---|---|
|`name` | String | *Required.* Represents a friendly name of your server, visible only to Adobe. This name is not visible to partners or customers. Example: `Moviestar destination server`. |
|`destinationServerType` | String | *Required.* Set to `URL_BASED` for streaming destinations.|
|`templatingStrategy` | String | *Required.* <ul><li>Use `PEBBLE_V1` if you are using a macro instead of a fixed value in the `value` field. Use this option if you have an endpoint like: `https://api.moviestar.com/data/{{customerData.region}}/items` </li><li> Use `NONE` if no transformation is needed on the Adobe side, for example if you have an endpoint like: `https://api.moviestar.com/data/items` </li></ul>  |
|`value` | String | *Required.* Fill in the address of the API endpoint that Experience Platform should connect to. |

{style="table-layout:auto"}

## File-based Amazon S3 destination server {#s3-example}

File-based destination servers allow you to activate data from Adobe Experience Platform to your destination via file exports.

The sample below shows an example of a destination server configuration for an Amazon S3 destination.

```json
{
   "name":"S3 destination",
   "destinationServerType":"FILE_BASED_S3",
   "fileBasedS3Destination":{
      "bucket":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.bucket}}"
      },
      "path":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.path}}"
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

{style="table-layout:auto"}

## File-based SFTP destination server {#sftp-example}

File-based destination servers allow you to activate data from Adobe Experience Platform to your destination via file exports.

The sample below shows an example of a destination server configuration for an SFTP destination.

```json
{
   "name":"File-based SFTP destination server",
   "destinationServerType":"FILE_BASED_SFTP",
   "fileBasedSftpDestination":{
      "rootDirectory":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.rootDirectory}}"
      },
      "hostName":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.hostName}}"
      },
      "port":22,
      "encryptionMode":"PGP"
   }
}
```

|Parameter|Type|Description|
|---|---|---|
|`name`|String|The name of your destination connection.|
|`destinationServerType`|String|Set this value according to your destination platform. For [!DNL SFTP] destinations, set this to `FILE_BASED_SFTP`.|
|`fileBasedSftpDestination.rootDirectory.templatingStrategy`|String| *Required.* Use `PEBBLE_V1`.|
|`fileBasedSftpDestination.rootDirectory.value`|String|The root directory of the destination storage.|
|`fileBasedSftpDestination.hostName.templatingStrategy`|String| *Required.* Use `PEBBLE_V1`.|
|`fileBasedSftpDestination.hostName.value`|String|The host name of the destination storage.|
|`port`|Integer|The SFTP file server port.|
|`encryptionMode`|String|Indicates whether to use file encryption. Supported values: <ul><li>PGP</li><li>None</li></ul>|

{style="table-layout:auto"}

## File-based [!DNL Azure Data Lake Storage] ([!DNL ADLS]) destination server {#adls-example}

File-based destination servers allow you to activate data from Adobe Experience Platform to your destination via file exports.

The sample below shows an example of a destination server configuration for an [!DNL Azure Data Lake Storage] destination.

```json
{
   "name":"ADLS destination server",
   "destinationServerType":"FILE_BASED_ADLS_GEN2",
   "fileBasedAdlsGen2Destination":{
      "path":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.path}}"
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

{style="table-layout:auto"}

## File-based [!DNL Azure Blob Storage] destination server {#blob-example}

File-based destination servers allow you to activate data from Adobe Experience Platform to your destination via file exports.

The sample below shows an example of a destination server configuration for an [!DNL Azure Blob Storage] destination.

```json
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

{style="table-layout:auto"}

## File-based [!DNL Data Landing Zone] ([!DNL DLZ]) destination server {#dlz-example}

File-based destination servers allow you to activate data from Adobe Experience Platform to your destination via file exports.

The sample below shows an example of a destination server configuration for a [!DNL Data Landing Zone] ([!DNL DLZ]) destination.

```json
{
   "name":"DLZ destination server",
   "destinationServerType":"FILE_BASED_DLZ",
   "fileBasedDlzDestination":{
      "path":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.path}}"
      },
      "useCase": "Your use case"
   }
}
```

|Parameter|Type|Description|
|---|---|---|
|`name`|String|The name of your destination connection.|
|`destinationServerType`|String|Set this value according to your destination platform. For [!DNL Data Landing Zone] destinations, set this to `FILE_BASED_DLZ`.|
|`fileBasedDlzDestination.path.templatingStrategy`|String| *Required.*  Use `PEBBLE_V1`.|
|`fileBasedDlzDestination.path.value`|String|The path to the destination folder that will host the exported files.|

{style="table-layout:auto"}

## File-based [!DNL Google Cloud Storage] destination server {#gcs-example}

File-based destination servers allow you to activate data from Adobe Experience Platform to your destination via file exports.

The sample below shows an example of a destination server configuration for a [!DNL Google Cloud Storage] destination.

```json
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

{style="table-layout:auto"}