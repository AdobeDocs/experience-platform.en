---
description: Learn how to configure destination server specs in Adobe Experience Platform Destination SDK via the `/authoring/destination-servers` endpoint.
title: Server specs for destinations created with Destination SDK
---

# Server specs for destinations created with Destination SDK

Destination server specs define the type of destination server your integration will use.

To understand where this component fits into an integration created with Destination SDK, see the diagram in the [configuration options](../configuration-options.md) documentation or see the following destination configuration overview pages:

* [Use Destination SDK to configure a streaming destination](../../guides/configure-destination-instructions.md#create-server-template-configuratiom)
* [Use Destination SDK to configure a file-based destination](../../guides/configure-file-based-destination-instructions.md#create-server-file-configuration)

You can configure the destination server specs via the `/authoring/destination-servers` endpoint. See the following API reference pages for detailed API call examples where you can configure the components shown in this page. 

* [Create a destination server configuration](../../authoring-api/destination-server/create-destination-server.md)
* [Update a destination server configuration](../../authoring-api/destination-server/update-destination-server.md)

This page shows all the destination server types supported by Destination SDK, with all their configuration parameters. When creating your destination, replace the parameter values with your own.

## Supported integration types {#supported-integration-types}

Refer to the table below for details on what type of destinations support the functionality described in this page.

|Integration type| Supports functionality |
|---|---|
| Real-time (streaming) integrations | :white_check_mark: |
| File-based (batch) integrations | :white_check_mark: |

When [creating](../../authoring-api/destination-server/create-destination-server.md) or [updating](../../authoring-api/destination-server/update-destination-server.md) a destination server], use one of the server type configurations described below, depending on your integration requirements, and update their configuration parameters accordingly.

## URL-based (streaming) destination server {#url-destination-server}

This destination server allows you export data from Adobe Experience Platform to your destination via HTTP exports. The server configuration contains information about the server receiving the messages (the server on your side).

This process delivers user data as a series of HTTP messages to your destination platform. The parameters below form the HTTP server specs template.

The sample below shows an example of a destination server configuration for a URL-based destination.

```json
{
   "name":"Your destination server name",
   "destinationServerType":"URL_BASED",
   "urlBasedDestination":{
      "url":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{YOUR_API_ENDPOINT}"
      }
   }
}
```

|Parameter | Type | Description|
|---|---|---|
|`name` | String | *Required.* Represents a friendly name of your server, visible only to Adobe. This name is not visible to partners or customers. Example: `Moviestar destination server`. |
|`destinationServerType` | String | *Required.* Set this to `URL_BASED` for streaming destinations.|
|`templatingStrategy` | String | *Required.* <ul><li>Use `PEBBLE_V1` if you are using a macro instead of a hard-coded value in the `value` field. Use this option if you have an endpoint like: `https://api.moviestar.com/data/{{customerData.region}}/items` </li><li> Use `NONE` if no macro transformation is needed on the Adobe side, for example if you have an endpoint like: `https://api.moviestar.com/data/items` </li></ul>  |
|`value` | String | *Required.* Fill in the address of the API endpoint that Experience Platform should connect to. |

{style="table-layout:auto"}

## [!DNL Amazon S3] destination server {#s3-example}

This destination server allows you to export files containing Adobe Experience Platform data to your Amazon S3 storage.

The sample below shows an example of a destination server configuration for an Amazon S3 destination.

```json
{
   "name":"Amazon S3 destination",
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
|`name`|String|The name of your destination server.|
|`destinationServerType`|String|Set this value according to your destination platform. To export files to an [!DNL Amazon S3] bucket, set this to `FILE_BASED_S3`.|
|`fileBasedS3Destination.bucket.templatingStrategy`| String|*Required*. Set this value according to the type of value used in the `bucket.value` field.<ul><li>If you want your users to input their own bucket name in the Experience Platform UI, set this value to `PEBBLE_V1`. In this case, you must set the `value` field to use a macro which will read the value from the [customer data fields](../destination-configuration/customer-data-fields.md) filled in by the user. This use case is shown in the example above.</li><li>If you are using a hard-coded bucket name for your integration, such as `"bucket.value":"MyBucket"`, then set this value to `NONE`.</li></ul>|
|`fileBasedS3Destination.bucket.value`|String|The name of the [!DNL Amazon S3] bucket to be used by this destination. This can either be a macro which will read the value from the [customer data fields](../destination-configuration/customer-data-fields.md) filled in by the user (as shown in the example above), or a hard-coded value, such as `"value":"MyBucket"`. |
|`fileBasedS3Destination.path.templatingStrategy`|String| *Required*. Set this value according to the type of value used in the `path.value` field.<ul><li>If you want your users to input their own path in the Experience Platform UI, set this value to `PEBBLE_V1`. In this case, you must set the `path.value` field to use a macro which will read the value from the [customer data fields](../destination-configuration/customer-data-fields.md) filled in by the user. This use case is shown in the example above.</li><li>If you are using a hard-coded path for your integration, such as `"bucket.value":"/path/to/MyBucket"`, then set this value to `NONE`.</li></ul>|
|`fileBasedS3Destination.path.value`|String|The path to the [!DNL Amazon S3] bucket to be used by this destination. This can either be a macro which will read the value from the [customer data fields](../destination-configuration/customer-data-fields.md) filled in by the user (as shown in the example above), or a hard-coded value, such as `"value":"/path/to/MyBucket"`.|

{style="table-layout:auto"}

## [!DNL SFTP] destination server {#sftp-example}

This destination server allows you to export files containing Adobe Experience Platform data to your [!DNL SFTP] storage server.

The sample below shows an example of a destination server configuration for an SFTP destination.

```json
{
   "name":"File-based SFTP destination server",
   "destinationServerType":"FILE_BASED_SFTP",
   "fileBasedSFTPDestination":{
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
|`name`|String|The name of your destination server.|
|`destinationServerType`|String|Set this value according to your destination platform. To export files to an [!DNL SFTP] destination, set this to `FILE_BASED_SFTP`.|
|`fileBasedSFTPDestination.rootDirectory.templatingStrategy`|String|*Required*. Set this value according to the type of value used in the `rootDirectory.value` field.<ul><li>If you want your users to input their own root directory path in the Experience Platform UI, set this value to `PEBBLE_V1`. In this case, you must set the `rootDirectory.value` field to use a macro which will read the value from the [customer data fields](../destination-configuration/customer-data-fields.md) filled in by the user. This use case is shown in the example above.</li><li>If you are using a hard-coded root directory path for your integration, such as `"rootDirectory.value":"Storage/MyDirectory"`, then set this value to `NONE`.</li></ul>|
|`fileBasedSFTPDestination.rootDirectory.value`|String|The path to the directory that will host the exported files. This can either be a macro which will read the value from the [customer data fields](../destination-configuration/customer-data-fields.md) filled in by the user (as shown in the example above), or a hard-coded value, such as `"value":"Storage/MyDirectory"` |
|`fileBasedSFTPDestination.hostName.templatingStrategy`|String|*Required*. Set this value according to the type of value used in the `hostName.value` field.<ul><li>If you want your users to input their own host name in the Experience Platform UI, set this value to `PEBBLE_V1`. In this case, you must set the `hostName.value` field to use a macro which will read the value from the [customer data fields](../destination-configuration/customer-data-fields.md) filled in by the user. This use case is shown in the example above.</li><li>If you are using a hard-coded host name for your integration, such as `"hostName.value":"my.hostname.com"`, then set this value to `NONE`.</li></ul>|
|`fileBasedSFTPDestination.hostName.value`|String|The host name of your SFTP server. This can either be a macro which will read the value from the [customer data fields](../destination-configuration/customer-data-fields.md) filled in by the user (as shown in the example above), or a hard-coded value, such as `"hostName.value":"my.hostname.com"`.|
|`port`|Integer|The SFTP file server port.|
|`encryptionMode`|String|Indicates whether to use file encryption. Supported values: <ul><li>PGP</li><li>None</li></ul>|

{style="table-layout:auto"}

## [!DNL Azure Data Lake Storage] ([!DNL ADLS]) destination server {#adls-example}

This destination server allows you to export files containing Adobe Experience Platform data to your [!DNL Azure Data Lake Storage] account.

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
|`fileBasedAdlsGen2Destination.path.templatingStrategy`|String|*Required*. Set this value according to the type of value used in the `path.value` field.<ul><li>If you want your users to input their [!DNL ADLS] folder path in the Experience Platform UI, set this value to `PEBBLE_V1`. In this case, you must set the `path.value` field to use a macro which will read the value from the [customer data fields](../destination-configuration/customer-data-fields.md) filled in by the user. This use case is shown in the example above.</li><li>If you are using a hard-coded path for your integration, such as `"abfs://<file_system>@<account_name>.dfs.core.windows.net/<path>/"`, then set this value to `NONE`.</li></ul>|
|`fileBasedAdlsGen2Destination.path.value`|String|The path to your [!DNL ADLS] storage folder. This can either be a macro which will read the value from the [customer data fields](../destination-configuration/customer-data-fields.md) filled in by the user (as shown in the example above), or a hard-coded value, such as `abfs://<file_system>@<account_name>.dfs.core.windows.net/<path>/`.|

{style="table-layout:auto"}

## [!DNL Azure Blob Storage] destination server {#blob-example}

This destination server allows you to export files containing Adobe Experience Platform data to your [!DNL Azure Blob Storage] container.

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
|`fileBasedAzureBlobDestination.path.templatingStrategy`|String|*Required*. Set this value according to the type of value used in the `path.value` field.<ul><li>If you want your users to input their own [!DNL Azure Blob] [storage account URI](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction) in the Experience Platform UI, set this value to `PEBBLE_V1`. In this case, you must set the `path.value` field to use a macro which will read the value from the [customer data fields](../destination-configuration/customer-data-fields.md) filled in by the user. This use case is shown in the example above.</li><li>If you are using a hard-coded path for your integration, such as `"path.value": "https://myaccount.blob.core.windows.net/"`, then set this value to `NONE`.|
|`fileBasedAzureBlobDestination.path.value`|String|The path to your [!DNL Azure Blob] storage. This can either be a macro which will read the value from the [customer data fields](../destination-configuration/customer-data-fields.md) filled in by the user (as shown in the example above), or a hard-coded value, such as `https://myaccount.blob.core.windows.net/`.|
|`fileBasedAzureBlobDestination.container.templatingStrategy`|String|*Required*. Set this value according to the type of value used in the `container.value` field.<ul><li>If you want your users to input their own [!DNL Azure Blob] [container name](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction) in the Experience Platform UI, set this value to `PEBBLE_V1`. In this case, you must set the `container.value` field to use a macro which will read the value from the [customer data fields](../destination-configuration/customer-data-fields.md) filled in by the user. This use case is shown in the example above.</li><li>If you are using a hard-coded container name for your integration, such as `"path.value: myContainer"`, then set this value to `NONE`.|
|`fileBasedAzureBlobDestination.container.value`|String|The name of the Azure Blob Storage container to be used for this destination. This can either be a macro which will read the value from the [customer data fields](../destination-configuration/customer-data-fields.md) filled in by the user (as shown in the example above), or a hard-coded value, such as `myContainer`.|

{style="table-layout:auto"}

## [!DNL Data Landing Zone] ([!DNL DLZ]) destination server {#dlz-example}

This destination server allows you to export files containing Platform data to a [[!DNL Data Landing Zone]](../../../catalog/cloud-storage/data-landing-zone.md) storage.

The sample below shows an example of a destination server configuration for a [!DNL Data Landing Zone] ([!DNL DLZ]) destination.

```json
{
   "name":"Data Landing Zone destination server",
   "destinationServerType":"FILE_BASED_DLZ",
   "fileBasedDlzDestination":{
      "path":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.path}}"
      },
      "container":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.container}}"
      }
      "useCase": "Your use case"
   }
}
```

|Parameter|Type|Description|
|---|---|---|
|`name`|String|The name of your destination connection.|
|`destinationServerType`|String|Set this value according to your destination platform. For [!DNL Data Landing Zone] destinations, set this to `FILE_BASED_DLZ`.|
|`fileBasedDlzDestination.path.templatingStrategy`|String|*Required*. Set this value according to the type of value used in the `path.value` field.<ul><li>If you want your users to input their own [!DNL Data Landing Zone] account in the Experience Platform UI, set this value to `PEBBLE_V1`. In this case, you must set the `path.value` field to use a macro which will read the value from the [customer data fields](../destination-configuration/customer-data-fields.md) filled in by the user. This use case is shown in the example above.</li><li>If you are using a hard-coded path for your integration, such as `"path.value": "https://myaccount.blob.core.windows.net/"`, then set this value to `NONE`.|
|`fileBasedDlzDestination.path.value`|String|The path to the destination folder that will host the exported files.|

{style="table-layout:auto"}

## File-based [!DNL Google Cloud Storage] destination server {#gcs-example}

This destination server allows you to export files containing Platform data to your [!DNL Google Cloud Storage] account.

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
|`fileBasedGoogleCloudStorageDestination.bucket.templatingStrategy`|String|*Required*. Set this value according to the type of value used in the `bucket.value` field.<ul><li>If you want your users to input their own [!DNL Google Cloud Storage] bucket name in the Experience Platform UI, set this value to `PEBBLE_V1`. In this case, you must set the `bucket.value` field to use a macro which will read the value from the [customer data fields](../destination-configuration/customer-data-fields.md) filled in by the user. This use case is shown in the example above.</li><li>If you are using a hard-coded bucket name for your integration, such as `"bucket.value": "my-bucket"`, then set this value to `NONE`.|
|`fileBasedGoogleCloudStorageDestination.bucket.value`|String|The name of the [!DNL Google Cloud Storage] bucket to be used by this destination. This can either be a macro which will read the value from the [customer data fields](../destination-configuration/customer-data-fields.md) filled in by the user (as shown in the example above), or a hard-coded value, such as `"value": "my-bucket"`.|
|`fileBasedGoogleCloudStorageDestination.path.templatingStrategy`|String| *Required*. Set this value according to the type of value used in the `path.value` field.<ul><li>If you want your users to input their own [!DNL Google Cloud Storage] bucket path in the Experience Platform UI, set this value to `PEBBLE_V1`. In this case, you must set the `path.value` field to use a macro which will read the value from the [customer data fields](../destination-configuration/customer-data-fields.md) filled in by the user. This use case is shown in the example above.</li><li>If you are using a hard-coded path for your integration, such as `"path.value": "/path/to/my-bucket"`, then set this value to `NONE`.</li></ul>|
|`fileBasedGoogleCloudStorageDestination.path.value`|String|The path to the [!DNL Google Cloud Storage] folder to be used by this destination. This can either be a macro which will read the value from the [customer data fields](../destination-configuration/customer-data-fields.md) filled in by the user (as shown in the example above), or a hard-coded value, such as `"value": "/path/to/my-bucket"`.|

{style="table-layout:auto"}

## Next steps {#next-steps}

After reading this article, you should have a better understanding of what a destination server spec is, and how you can configure it.

To learn more about the other destination server components, see the following articles:

* [Templating specs](templating-specs.md)
* [Message format](message-format.md)
* [File formatting configuration](file-formatting.md)
