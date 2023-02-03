---
description: This configuration allows you to indicate essential information for your file-based destination, like your destination name, category, description, and more. The settings in this configuration also determine how Experience Platform users authenticate to your destination, how it appears in the Experience Platform user interface and the identities that can be exported to your destination.
title: File-based destination configuration options for Destination SDK
exl-id: 6b0a0398-6392-470a-bb27-5b34b0062793
---
# File-based destination configuration {#destination-configuration}

## Overview {#overview}

This configuration allows you to indicate essential information for your file-based destination, like your destination name, category, description, and more. The settings in this configuration also determine how Experience Platform users authenticate to your destination, how it appears in the Experience Platform user interface and the identities that can be exported to your destination. You can also use this configuration to display options related to the file type, file format, or compression settings of your exported files.

This configuration also connects the other configurations required for your destination to work - destination server and audience metadata - to this one. Read how you can reference the two configurations in a [section further below](./file-based-destination-configuration.md#connecting-all-configurations).

You can configure the functionality described in this document by using the `/authoring/destinations` API endpoint. Read [Destinations API endpoint operations](./destination-configuration-api.md) for a complete list of operations you can perform on the endpoint.

## Amazon S3 destination configuration example {#batch-example-configuration}

Below is an example of a private custom Amazon S3 destination created through the `/destinations` configuration endpoint.

```json
{
   "name":"S3 Destination with CSV Options",
   "description":"S3 Destination with CSV Options",
   "status":"TEST",
   "maxProfileAttributes":"2000",
   "maxIdentityAttributes":"10",
   "customerAuthenticationConfigurations":[
      {
         "authType":"S3"
      }
   ],
   "customerEncryptionConfigurations":[
      
   ],
   "customerDataFields":[
      {
         "name":"bucket",
         "title":"Amazon S3 bucket name",
         "description":"Enter your Amazon S3 bucket name",
         "type":"string",
         "isRequired":true,
         "pattern": "(?=^.{3,63}$)(?!^(\\d+\\.)+\\d+$)(^(([a-z0-9]|[a-z0-9][a-z0-9\\-]*[a-z0-9])\\.)*([a-z0-9]|[a-z0-9][a-z0-9\\-]*[a-z0-9])$)",
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"path",
         "title":"Amazon S3 bucket path",
         "description":"Enter your S3 bucket path",
         "type":"string",
         "isRequired":true,
         "pattern": "^[0-9a-zA-Z\\/\\!\\-_\\.\\*\\''\\(\\)]*((\\%SEGMENT_(NAME|ID)\\%)?\\/?)+$",
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"sep",
         "title":"Enter a separator for each field and value",
         "description":"Enter a separator character for each field and value",
         "type":"string",
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"encoding",
         "title":"Specify encoding (charset) of saved CSV files",
         "description":"Select encoding of csv files",
         "type":"string",
         "enum":[
            "UTF-8",
            "UTF-16"
         ],
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"quote",
         "title":"Select a single character used for escaping quoted values",
         "description":"Select single charachter for escaping quoted values",
         "type":"string",
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"quoteAll",
         "title":"Escape all quoted values",
         "description":"Select whether to escape all quoted values",
         "type":"string",
         "enum":[
            "true",
            "false"
         ],
         "default":"true",
         "isRequired":true,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"escape",
         "title":"Select a single character used for escaping quotes",
         "description":"Select a single character used for escaping quotes inside an already quoted value",
         "type":"string",
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"escapeQuotes",
         "title":"Escape quotes",
         "description":"A flag indicating whether values containing quotes should always be enclosed in quotes",
         "type":"string",
         "enum":[
            "true",
            "false"
         ],
         "isRequired":false,
         "default":"true",
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"header",
         "title":"header",
         "description":"Writes the names of columns as the first line.",
         "type":"string",
         "isRequired":false,
         "enum":[
            "true",
            "false"
         ],
         "readOnly":false,
         "default":"true",
         "hidden":false
      },
      {
         "name":"ignoreLeadingWhiteSpace",
         "title":"Ignore leading white space",
         "description":"A flag indicating whether or not leading whitespaces from values being written should be skipped.",
         "type":"string",
         "isRequired":false,
         "enum":[
            "true",
            "false"
         ],
         "readOnly":false,
         "default":"true",
         "hidden":false
      },
      {
         "name":"nullValue",
         "title":"Select the string representation of a null value",
         "description":"Sets the string representation of a null value. ",
         "type":"string",
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"dateFormat",
         "title":"Date format",
         "description":"Select the string that indicates a date format. ",
         "type":"string",
         "default":"yyyy-MM-dd",
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"charToEscapeQuoteEscaping",
         "title":"Char to escape quote escaping",
         "description":"Sets a single character used for escaping the escape for the quote character",
         "type":"string",
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"emptyValue",
         "title":"Select the string representation of an empty value",
         "description":"Select the string representation of an empty value",
         "type":"string",
         "isRequired":false,
         "readOnly":false,
         "default":"",
         "hidden":false
      },
      {
         "name":"compression",
         "title":"Select compression",
         "description":"Select compressiont",
         "type":"string",
         "isRequired":true,
         "readOnly":false,
         "enum":[
            "SNAPPY",
            "GZIP",
            "DEFLATE",
            "NONE"
         ]
      },
      {
         "name":"fileType",
         "title":"Select a fileType",
         "description":"Select fileType",
         "type":"string",
         "isRequired":true,
         "readOnly":false,
         "hidden":false,
         "enum":[
            "csv",
            "json",
            "parquet"
         ],
         "default":"csv"
      }
   ],
   "uiAttributes":{
      "documentationLink":"http://www.adobe.com/go/YOURDESTINATION-en",
      "category":"S3",
      "iconUrl":"https://dc5tqsrhldvnl.cloudfront.net/2/90048/da276e30c730ce6cd666c8ca78360df21.png",
      "connectionType":"S3",
      "flowRunsSupported":true,
      "monitoringSupported":true,
      "frequency":"Batch"
   },
   "destinationDelivery":[
      {
         "deliveryMatchers":[
            {
               "type":"SOURCE",
               "value":[
                  "batch"
               ]
            }
         ],
         "authenticationRule":"CUSTOMER_AUTHENTICATION",
         "destinationServerId":"{{destinationServerId}}"
      }
   ],
   "identityNamespaces":{
      "adobe_id":{
         "acceptsAttributes":true,
         "acceptsCustomNamespaces":true
      },
      "mobile_id":{
         "acceptsAttributes":true,
         "acceptsCustomNamespaces":true
      }
   },
   "segmentMappingConfig":{
      "mapExperiencePlatformSegmentName":false,
      "mapExperiencePlatformSegmentId":false,
      "mapUserInput":false,
      "audienceTemplateId":"cbf90a70-96b4-437b-86be-522fbdaabe9c"
   },
   "schemaConfig":{
      "profileFields":[
         {
            "name":"phoneNo",
            "title":"phoneNo",
            "description":"This is a fixed attribute on your destination side that customers can map profile attributes to. For example, the phoneNumber value in Experience Platform could be phoneNo on your side.",
            "type":"string",
            "isRequired":false,
            "readOnly":false,
            "hidden":false
         }
      ],
      "profileRequired":true,
      "segmentRequired":true,
      "identityRequired":true
   },
   "batchConfig":{
      "allowMandatoryFieldSelection":true,
      "allowDedupeKeyFieldSelection":true,
      "defaultExportMode":"DAILY_FULL_EXPORT",
      "allowedExportMode":[
         "DAILY_FULL_EXPORT",
         "FIRST_FULL_THEN_INCREMENTAL"
      ],
      "allowedScheduleFrequency":[
         "DAILY",
         "EVERY_3_HOURS",
         "EVERY_6_HOURS",
         "EVERY_8_HOURS",
         "EVERY_12_HOURS",
         "ONCE"
      ],
      "defaultFrequency":"DAILY",
      "defaultStartTime":"00:00",
      "filenameConfig":{
         "allowedFilenameAppendOptions":[
            "SEGMENT_NAME",
            "DESTINATION_INSTANCE_ID",
            "DESTINATION_INSTANCE_NAME",
            "ORGANIZATION_NAME",
            "SANDBOX_NAME",
            "DATETIME",
            "CUSTOM_TEXT"
         ],
         "defaultFilenameAppendOptions":[
            "DATETIME"
         ],
         "defaultFilename":"%DESTINATION%_%SEGMENT_ID%"
      },
      "backfillHistoricalProfileData":true
   }
```

|Parameter | Type | Description|
|---------|----------|------|
|`name` | String | Indicates the title of your destination in the Experience Platform catalog. |
|`description` | String | Provide a description for your destination card in the Experience Platform destinations catalog. Aim for no more than 4-5 sentences. |
|`status` | String | Indicates the lifecycle status of the destination card. Accepted values are `TEST`, `PUBLISHED`, and `DELETED`. Use `TEST` when you first configure your destination. |
|`maxProfileAttributes`|String|Indicates the maximum number of profile attributes customers can export to the destination. The default value is `2000`.|
|`maxIdentityAttributes`|String|Indicates the maximum number of identity namespaces customers can export to the destination. The default value is `10`.|

{style="table-layout:auto"}

## Customer authentication configurations {#customer-authentication-configurations}

This section in the destinations configuration generates the [Configure new destination](/help/destinations/ui/connect-destination.md) page in the Experience Platform user interface, where users connect Experience Platform to the accounts they have with your destination.

```json
"customerAuthenticationConfigurations": [
        {
            "authType": "S3"
        }
    ],
```

Depending on which [authentication option](authentication-configuration.md##supported-authentication-types) you indicate in the `authType` field, the Experience Platform page is generated for the users as follows:

### Amazon S3 authentication {#s3}

When you configure the Amazon S3 authentication type, users are required to input the S3 credentials.

![UI render with S3 authentication](assets/s3-authentication-ui.png)

### Azure Blob authentication  {#blob}

When you configure the Azure Blob authentication type, users are required to input the connection string.

![UI render with Blob authentication](assets/blob-authentication-ui.png)

### SFTP with password authentication

When you configure the SFTP with password authentication type, users are required to input the SFTP username and password, as well as the SFTP domain and port (default port is 22).

![UI render with SFTP with password authentication](assets/sftp-password-authentication-ui.png)

### SFTP with SSH key authentication

When you configure the SFTP with SSH key authentication type, users are required to input the SFTP username and SSH key, as well as the SFTP domain and port (default port is 22).

![UI render with SFTP with SSH key authentication](assets/sftp-key-authentication-ui.png)

## Customer data fields {#customer-data-fields}

Use this section to ask users to fill in custom fields, specific to your destination, when connecting to the destination in the Experience Platform UI.

In the example below, `customerDataFields` requires users to enter a name for their destination and provide an [!DNL Amazon S3] bucket name and folder path, as well as a compression type, file format, and several other file formatting options.

You can access and use the customer inputs from customer data fields in templating. Use the macro `{{customerData.exampleName}}`. For example, if you ask users to input an Amazon S3 bucket field, with the name `bucket`, you can access it in templating by using the macro `{{customerData.bucket}}`. View an example of how a customer data field is used in the [destination server configuration](/help/destinations/destination-sdk/server-and-file-configuration.md#s3-example).

```json
 "customerDataFields":[
      {
         "name":"bucket",
         "title":"Amazon S3 bucket name",
         "description":"Enter your Amazon S3 bucket name",
         "type":"string",
         "isRequired":true,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"path",
         "title":"Amazon S3 bucket path",
         "description":"Enter your S3 bucket path",
         "type":"string",
         "isRequired":true,
         "pattern":"^[A-Za-z]+$",
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"sep",
         "title":"Enter a separator for each field and value",
         "description":"Enter a separator character for each field and value",
         "type":"string",
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"encoding",
         "title":"Specify encoding (charset) of saved CSV files",
         "description":"Select encoding of csv files",
         "type":"string",
         "enum":[
            "UTF-8",
            "UTF-16"
         ],
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"quote",
         "title":"Select a single character used for escaping quoted values",
         "description":"Select single charachter for escaping quoted values",
         "type":"string",
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"quoteAll",
         "title":"Escape all quoted values",
         "description":"Select whether to escape all quoted values",
         "type":"string",
         "enum":[
            "true",
            "false"
         ],
         "default":"true",
         "isRequired":true,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"escape",
         "title":"Select a single character used for escaping quotes",
         "description":"Select a single character used for escaping quotes inside an already quoted value",
         "type":"string",
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"escapeQuotes",
         "title":"Escape quotes",
         "description":"A flag indicating whether values containing quotes should always be enclosed in quotes",
         "type":"string",
         "enum":[
            "true",
            "false"
         ],
         "isRequired":false,
         "default":"true",
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"header",
         "title":"header",
         "description":"Writes the names of columns as the first line.",
         "type":"string",
         "isRequired":false,
         "enum":[
            "true",
            "false"
         ],
         "readOnly":false,
         "default":"true",
         "hidden":false
      },
      {
         "name":"ignoreLeadingWhiteSpace",
         "title":"Ignore leading white space",
         "description":"A flag indicating whether or not leading whitespaces from values being written should be skipped.",
         "type":"string",
         "isRequired":false,
         "enum":[
            "true",
            "false"
         ],
         "readOnly":false,
         "default":"true",
         "hidden":false
      },
      {
         "name":"nullValue",
         "title":"Select the string representation of a null value",
         "description":"Sets the string representation of a null value. ",
         "type":"string",
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"dateFormat",
         "title":"Date format",
         "description":"Select the string that indicates a date format. ",
         "type":"string",
         "default":"yyyy-MM-dd",
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"charToEscapeQuoteEscaping",
         "title":"Char to escape quote escaping",
         "description":"Sets a single character used for escaping the escape for the quote character",
         "type":"string",
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"emptyValue",
         "title":"Select the string representation of an empty value",
         "description":"Select the string representation of an empty value",
         "type":"string",
         "isRequired":false,
         "readOnly":false,
         "default":"",
         "hidden":false
      },
      {
         "name":"compression",
         "title":"Select compression",
         "description":"Select compressiont",
         "type":"string",
         "isRequired":true,
         "readOnly":false,
         "enum":[
            "SNAPPY",
            "GZIP",
            "DEFLATE",
            "NONE"
         ]
      },
      {
         "name":"fileType",
         "title":"Select a fileType",
         "description":"Select fileType",
         "type":"string",
         "isRequired":true,
         "readOnly":false,
         "hidden":false,
         "enum":[
            "csv",
            "json",
            "parquet"
         ],
         "default":"csv"
      }
```

>[!TIP]
>
>All the file formatting configurations listed in the example above are described at length in the [file formatting configuration](/help/destinations/destination-sdk/server-and-file-configuration.md#file-configuration) section.

|Parameter | Type | Description|
|---------|----------|------|
|`name` | String | Provide a name for the custom field you are introducing. |
|`title` | String | Indicates the name of the field, as it is seen by customers in the Experience Platform user interface. |
|`description` | String | Provide a description for the custom field. |
|`type` | String | Indicates what type of custom field you are introducing. Accepted values are `string`, `object`, `integer`. |
|`isRequired` | Boolean | Indicates if this field is required in the destination setup workflow. |
|`pattern` | String | Enforces a pattern for the custom field, if needed. Use regular expressions to enforce a pattern. For example, if your customer IDs don't include numbers or underscores, enter `^[A-Za-z]+$` in this field.|
|`enum` | String | Renders the custom field as a dropdown menu and lists the options available to the user.|
|`default`|String|Defines the default value from an `enum` list.|

{style="table-layout:auto"}

## UI attributes {#ui-attributes}

This section refers to the UI elements in the configuration above that Adobe should use for your destination in the Adobe Experience Platform user interface.

```json
"uiAttributes":{
      "documentationLink":"http://www.adobe.com/go/YOURDESTINATION-en",
      "category":"cloudStorage",
      "iconUrl":"https://dc5tqsrhldvnl.cloudfront.net/2/90048/da276e30c730ce6cd666c8ca78360df21.png",
      "connectionType":"S3",
      "flowRunsSupported":true,
      "monitoringSupported":true,
      "frequency":"Batch"
   }
```

|Parameter | Type | Description|
|---------|----------|------|
|`documentationLink` | String | Refers to the documentation page in the [Destinations Catalog](https://experienceleague.adobe.com/docs/experience-platform/destinations/catalog/overview.html?lang=en#catalog) for your destination. Use `http://www.adobe.com/go/destinations-YOURDESTINATION-en`, where `YOURDESTINATION` is the name of your destination. For a destination called Moviestar, you would use `http://www.adobe.com/go/destinations-moviestar-en`. Note that this link works only after Adobe sets your destination live and the documentation is published. |
|`category` | String | Refers to the category assigned to your destination in Adobe Experience Platform. For more information, read [Destination Categories](https://experienceleague.adobe.com/docs/experience-platform/destinations/destination-types.html). Use one of the following values: `adobeSolutions, advertising, analytics, cdp, cloudStorage, crm, customerSuccess, database, dmp, ecommerce, email, emailMarketing, enrichment, livechat, marketingAutomation, mobile, personalization, protocols, social, streaming, subscriptions, surveys, tagManagers, voc, warehouses, payments`. |
|`iconUrl`|String|The URL where you hosted the icon to be displayed in the destinations catalog card. For private custom integrations, this is not required. For productized configurations, you need to share an icon with the Adobe team when you [submit the destination for review](/help/destinations/destination-sdk/submit-destination.md#logo).  |
|`connectionType` | String | The type of connection, depending on the destination. Supported values: <ul><li>`Azure Blob`</li><li>`Azure Data Lake Storage`</li><li>`S3`</li><li>`SFTP`</li></ul>|
|`flowRunsSupported`|Boolean| Indicates whether the destination connection is included in the [flow runs UI](../../dataflows/ui/monitor-destinations.md#monitoring-destinations-dashboard). When setting this to `true`: <ul><li>The **[!UICONTROL Last dataflow run date]** and **[!UICONTROL Last dataflow run status]** are displayed in the destination browse page.</li><li>The **[!UICONTROL Dataflow runs]** and **[!UICONTROL Activation data]** tabs are displayed in the destination view page.</li></ul>|
|`monitoringSupported`|Boolean|Indicates whether the destination connection is included in the [monitoring UI](../ui/destinations-workspace.md#browse). When setting this to `true`, the **[!UICONTROL View in monitoring]** option is displayed in the destination browse page.| 
|`frequency` | String | Refers to the type of data export supported by the destination. Set to `Batch` for file-based destinations.|

{style="table-layout:auto"}

## Destination delivery {#destination-delivery}

The destination delivery section indicates where exactly the exported data goes and what authentication rule is used in the location where the data will land. You are required to specify one or more `destinationServerId`s where the data will be delivered and and authentication rule. In most cases, the authentication rule that you should use is `CUSTOMER_AUTHENTICATION`.

The `deliveryMatchers` section is optional and can be used if you are specifying multiple `destinationServerId`s. If that is the case, the `deliveryMatchers` section indicates how the exported data should be split between the various destination servers.

```json
 "destinationDelivery":[
      {
         "deliveryMatchers":[
            {
               "type":"SOURCE",
               "value":[
                  "batch"
               ]
            }
         ],
         "authenticationRule":"CUSTOMER_AUTHENTICATION",
         "destinationServerId":"{{destinationServerId}}"
      }
   ]
```

|Parameter | Type | Description|
|---------|----------|------|
|`authenticationRule` | String | Indicates how [!DNL Platform] customers connect to your destination. Accepted values are `CUSTOMER_AUTHENTICATION`, `PLATFORM_AUTHENTICATION`, `NONE`. <br> <ul><li>Use `CUSTOMER_AUTHENTICATION` if Platform customers log into your system via any of the following methods: <ul><li>`"authType": "S3"`</li><li>`"authType":"AZURE_CONNECTION_STRING"`</li><li>`"authType":"AZURE_SERVICE_PRINCIPAL"`</li><li>`"authType":"SFTP_WITH_SSH_KEY"`</li><li>`"authType":"SFTP_WITH_PASSWORD"`</li></ul> </li><li> Use `PLATFORM_AUTHENTICATION` if there is a global authentication system between Adobe and your destination and the [!DNL Platform] customer does not need to provide any authentication credentials to connect to your destination. In this case, you must create a credentials object using the [Credentials](./credentials-configuration-api.md) configuration. </li><li>Use `NONE` if no authentication is required to send data to your destination platform. </li></ul> |
|`destinationServerId` | String | The `instanceId` of the [destination server configuration](./server-and-file-configuration.md) that you [created](/help/destinations/destination-sdk/destination-server-api.md#create-file-based) for this destination. |

{style="table-layout:auto"}

## Segment mapping configuration {#segment-mapping}

This section of the destination configuration relates to how segment metadata like segment names or IDs should be shared between Experience Platform and your destination.

Through the `audienceTemplateId`, this section also ties together this configuration with the [audience metadata configuration](./audience-metadata-management.md).

```json
   "segmentMappingConfig":{
       "mapExperiencePlatformSegmentName":false,
       "mapExperiencePlatformSegmentId":false,
       "mapUserInput":false,
       "audienceTemplateId":"cbf90a70-96b4-437b-86be-522fbdaabe9c"
   },
```

|Parameter | Type | Description|
|---------|----------|------|
|`mapExperiencePlatformSegmentName` | Boolean | Controls whether the segment mapping id in the destination activation workflow is the Experience Platform segment name. |
|`mapExperiencePlatformSegmentId` | Boolean | Controls whether the segment mapping id in the destination activation workflow is the Experience Platform segment ID. |
|`mapUserInput` | Boolean | Controls whether the segment mapping id in the destination activation workflow is input by user. |
|`audienceTemplateId` | Boolean | The `instanceId` of the [audience metadata template](./audience-metadata-management.md) used for this destination. To set up an audience metadata template, read the [audience metadata API reference](./audience-metadata-api.md).|

## Schema configuration in the mapping step {#schema-configuration}

Adobe Experience Platform Destination SDK supports partner-defined schemas. A partner-defined schema allows users to map profile attributes and identities to custom schemas defined by destination partners, similar to the [streaming destinations](destination-configuration.md#schema-configuration) workflow.

Use the parameters in `schemaConfig` to enable the mapping step of the destination activation workflow. By using the parameters described below, you can determine if Experience Platform users can map profile attributes and/or identities to your file-based destination.

You can create static, hardcoded schema fields or you can specify a dynamic schema that Experience Platform should connect to in order to dynamically retrieve and populate fields in the target schema of the mapping workflow. The target schema is shown in the screenshot below. 

![Screenshot highlighting the target schema fields in the mapping step of the activation workflow.](/help/destinations/destination-sdk/assets/target-schema-fields.png)

### Static hardcoded schema field configuration

```json
"schemaConfig":{
      "profileFields":[
           {
              "name":"phoneNo",
              "title":"phoneNo",
              "description":"This is a fixed attribute on your destination side that customers can map profile attributes to. For example, the phoneNumber value in Experience Platform could be phoneNo on your side.",
              "type":"string",
              "isRequired":false,
              "readOnly":false,
              "hidden":false
           }
        ],
      "profileRequired":true,
      "segmentRequired":true,
      "identityRequired":true
}
```

|Parameter | Type | Description|
|---------|----------|------|
|`profileFields` | Array | When you add predefined `profileFields`, Experience Platform users have the option of mapping Platform attributes to the predefined attributes in your destination. |
|`profileRequired` | Boolean | Use `true` if users should be able to map profile attributes from Experience Platform to custom attributes on your destination's side, as shown in the example configuration above. |
|`segmentRequired` | Boolean | Always use `segmentRequired:true`. |
|`identityRequired` | Boolean | Use `true` if users should be able to map identity namespaces from Experience Platform to your desired schema. |

{style="table-layout:auto"}

### Dynamic schema configuration in the mapping step {#dynamic-schema-configuration}

Use the parameters in  `dynamicSchemaConfig` to dynamically retrieve your own schema that Platform profile attributes and/or identities can be mapped to.

```json
"schemaConfig":{
   "dynamicSchemaConfig":{
      "dynamicEnum": {
         "authenticationRule":"CUSTOMER_AUTHENTICATION",
         "destinationServerId":"2aa8a809-c4ae-4f66-bb02-12df2e0a2279",
         "value": "Schema Name",
         "responseFormat": "SCHEMA"
      }
   },
   "profileRequired":true,
   "segmentRequired":true,
   "identityRequired":true
}
```

|Parameter | Type | Description|
|---------|----------|------|
|`profileRequired` | Boolean | Use `true` if users should be able to map profile attributes from Experience Platform to custom attributes on your destination's side, as shown in the example configuration above. |
|`segmentRequired` | Boolean | Always use `segmentRequired:true`. |
|`identityRequired` | Boolean | Use `true` if users should be able to map identity namespaces from Experience Platform to your desired schema. |
|`destinationServerId` | String | The `instanceId` of the [destination server configuration](./destination-server-api.md) that you created for your dynamic schema. This destination server includes the HTTP endpoint which Experience Platform will call to retrieve the dynamic schema used to populate target fields. |
|`authenticationRule` | String | Indicates how [!DNL Platform] customers connect to your destination. Accepted values are `CUSTOMER_AUTHENTICATION`, `PLATFORM_AUTHENTICATION`, `NONE`. <br> <ul><li>Use `CUSTOMER_AUTHENTICATION` if Platform customers log into your system via any of the following methods: <ul><li>`"authType": "S3"`</li><li>`"authType":"AZURE_CONNECTION_STRING"`</li><li>`"authType":"AZURE_SERVICE_PRINCIPAL"`</li><li>`"authType":"SFTP_WITH_SSH_KEY"`</li><li>`"authType":"SFTP_WITH_PASSWORD"`</li></ul> </li><li> Use `PLATFORM_AUTHENTICATION` if there is a global authentication system between Adobe and your destination and the [!DNL Platform] customer does not need to provide any authentication credentials to connect to your destination. In this case, you must create a credentials object using the [Credentials](./credentials-configuration-api.md) configuration. </li><li>Use `NONE` if no authentication is required to send data to your destination platform. </li></ul> |
|`value`|String|The name of the schema to be displayed in the Experience Platform user interface, in the mapping step.|
|`responseFormat`|String|Always set to `SCHEMA` when defining a custom schema.|

{style="table-layout:auto"}

### Required mappings {#required-mappings}

Within the schema configuration, you have the option of adding required (or predefined) mappings. These are mappings that users are able to view but not modify when they set up a connection to your destination. For example, you can enforce the email address field to always be sent to the destination in the exported files. See below two examples of a schema configuration with required mappings and what these look like in the mapping step of the [activate data to batch destinations workflow](/help/destinations/ui/activate-batch-profile-destinations.md). 

```json

    "requiredMappingsOnly": true, // when this is selected true , users cannot map other attributes and identities in the activation flow, apart from the required mappings that you define.
    "requiredMappings": [
      {
        "destination": "identityMap.ExamplePartner_ID", //if only the destination field is specified, then the user is able to select a source field to map to the destination.
        "mandatoryRequired": true,
        "primaryKeyRequired": true
      }
    ] 

```

![Image of the required mappings in the UI activation flow.](/help/destinations/destination-sdk/assets/required-mappings-1.png)

```json

    "requiredMappingsOnly": true, // when this is selected true , users cannot map other attributes and identities in the activation flow, apart from the required mappings that you define.
    "requiredMappings": [
      {
        "sourceType": "text/x.schema-path",
        "source": "personalEmail.address",
        "destination": "personalEmail.address" //when both source and destination fields are specified as required mappings, then the user can not select or edit any of the two fields and can only view the selection.
      }
    ] 

```

![Image of the required mappings in the UI activation flow.](/help/destinations/destination-sdk/assets/required-mappings-2.png)

>[!NOTE]
>
>Currently supported combinations of required mappings are: 
>* You can configure a required source field and a required destination field. In this case, users cannot edit or select any of the two fields and can only view the selection.
>* You can configure a required destination field only. In this case, users will be allowed to select a source field to map to the destination.
>
> Configuring a required source field only is currently *not* supported.

Use the parameters described in the table below if you would like to add required mappings in the activation workflow for your destination.

|Parameter | Type | Description|
|---------|----------|------|
|`requiredMappingsOnly`|Boolean|Indicates if users are be able to map other attributes and identities in the activation flow, *apart from* the required mappings that you define.|
|`requiredMappings.mandatoryRequired`|Boolean| Set to true if this field must be a mandatory attribute which should always be present in file exports to your destination. Read more about [mandatory attributes](/help/destinations/ui/activate-batch-profile-destinations.md#mandatory-attributes). |
|`requiredMappings.primaryKeyRequired`|Boolean| Set to true if this field must be used as a deduplication key in file exports to your destination. Read more about [deduplication keys](/help/destinations/ui/activate-batch-profile-destinations.md#deduplication-keys). |
|`requiredMappings.sourceType`|String| Used when you configure a source field as required. Use `"text/x.schema-path"`,  which indicates that the source field is a predefined XDM attribute|
|`requiredMappings.source`|String|Indicates what the required source field should be.|
|`requiredMappings.destination`|String|Indicates what the required destination field should be.|

{style="table-layout:auto"}

## Identities and attributes {#identities-and-attributes}

The parameters in this section determine which identities your destination accepts. This configuration also populates the target identities and attributes in the [mapping step](/help/destinations/ui/activate-segment-streaming-destinations.md#mapping) of the Experience Platform user interface, where users map identities and attributes from their XDM schemas to the schema in your destination.


```json
"identityNamespaces": {
        "crm_id": {
            "acceptsAttributes": true,
            "acceptsCustomNamespaces": true
        },
        "mobile_id": {
            "acceptsAttributes": true,
            "acceptsCustomNamespaces": true
        }
    },
```

You must indicate which [!DNL Platform] identities customers are able to export to your destination. Some examples are [!DNL Experience Cloud ID], hashed email, device ID ([!DNL IDFA], [!DNL GAID]). These values are [!DNL Platform] identity namespaces that customers can map to identity namespaces from your destination. You can also indicate if customers can map custom namespaces to identities supported by your destination (`acceptsCustomNamespaces: true`) and if customers can map standard XDM attributes to identities supported by your destination (`acceptsAttributes: true`). 

Identity namespaces do not require a 1-to-1 correspondence between [!DNL Platform] and your destination.
For instance, customers could map a [!DNL Platform] [!DNL IDFA] namespace to an [!DNL IDFA] namespace from your destination, or they can map the same [!DNL Platform] [!DNL IDFA] namespace to a [!DNL Customer ID] namespace in your destination.

Read more about identities in the [Identity Namespace overview](/help/identity-service/namespaces.md).


## Batch configuration - File naming and export scheduling {#batch-configuration}

This section refers to the file naming and export scheduling settings that will be displayed for your destination in the Adobe Experience Platform user interface. The values that you set up here are surfaced in the [Schedule segment export](/help/destinations/ui/activate-batch-profile-destinations.md#scheduling) step of the file-based destinations activation workflow. 

```json
"batchConfig":{
   "allowMandatoryFieldSelection":true,
   "allowDedupeKeyFieldSelection":true,
   "defaultExportMode":"DAILY_FULL_EXPORT",
   "allowedExportMode":[
      "DAILY_FULL_EXPORT",
      "FIRST_FULL_THEN_INCREMENTAL"
   ],
   "allowedScheduleFrequency":[
      "DAILY",
      "EVERY_3_HOURS",
      "EVERY_6_HOURS",
      "EVERY_8_HOURS",
      "EVERY_12_HOURS",
      "ONCE"
   ],
   "defaultFrequency":"DAILY",
   "defaultStartTime":"00:00",
   "filenameConfig":{
         "allowedFilenameAppendOptions":[
            "SEGMENT_NAME",
            "DESTINATION_INSTANCE_ID",
            "DESTINATION_INSTANCE_NAME",
            "ORGANIZATION_NAME",
            "SANDBOX_NAME",
            "DATETIME",
            "CUSTOM_TEXT"
         ],
         "defaultFilenameAppendOptions":[
            "DATETIME"
         ],
         "defaultFilename":"%DESTINATION%_%SEGMENT_ID%"
      },
   }
```

|Parameter | Type | Description|
|---------|----------|------|
|`allowMandatoryFieldSelection`|Boolean|Set to `true` to allow customers to specify which profile attributes are mandatory. Default value is `false`. See [Mandatory attributes](../ui/activate-batch-profile-destinations.md#mandatory-attributes) for more information. |
|`allowDedupeKeyFieldSelection`|Boolean|Set to `true` to allow customers to specify deduplication keys. Default value is `false`.  See [Deduplication keys](../ui/activate-batch-profile-destinations.md#deduplication-keys) for more information. |
|`defaultExportMode`|Enum|Defines the default file export mode. Supported values:<ul><li>`DAILY_FULL_EXPORT`</li><li>`FIRST_FULL_THEN_INCREMENTAL`</li></ul> Default value is `DAILY_FULL_EXPORT`. See the [batch activation documentation](../ui/activate-batch-profile-destinations.md#scheduling) for details about file exports scheduling. |
|`allowedExportModes`|List|Defines the file export modes available to customers. Supported values:<ul><li>`DAILY_FULL_EXPORT`</li><li>`FIRST_FULL_THEN_INCREMENTAL`</li></ul>|
|`allowedScheduleFrequency`|List|Defines the file export frequency available to customers. Supported values:<ul><li>`ONCE`</li><li>`EVERY_3_HOURS`</li><li>`EVERY_6_HOURS`</li><li>`EVERY_8_HOURS`</li><li>`EVERY_12_HOURS`</li><li>`DAILY`</li></ul>|
|`defaultFrequency`|Enum|Defines the default file export frequency.Supported values:<ul><li>`ONCE`</li><li>`EVERY_3_HOURS`</li><li>`EVERY_6_HOURS`</li><li>`EVERY_8_HOURS`</li><li>`EVERY_12_HOURS`</li><li>`DAILY`</li></ul> Default value is `DAILY`.|
|`defaultStartTime`|String|Defines the default start time for the file export. Uses 24-hour file format. Default value is "00:00".|
|`filenameConfig.allowedFilenameAppendOptions`|String|*Required*. List of available file name macros for users to choose from. This determines which items are appended to exported file names (segment ID, organization name, date and time of export, and others). When setting `defaultFilename`, make sure to avoid duplicating macros. <br><br>Supported values: <ul><li>`DESTINATION`</li><li>`SEGMENT_ID`</li><li>`SEGMENT_NAME`</li><li>`DESTINATION_INSTANCE_ID`</li><li>`DESTINATION_INSTANCE_NAME`</li><li>`ORGANIZATION_NAME`</li><li>`SANDBOX_NAME`</li><li>`DATETIME`</li><li>`CUSTOM_TEXT`</li></ul>Regardless of the order in which you define the macros, the Experience Platform UI will always display them in the order presented here. <br><br> If `defaultFilename` is empty, the `allowedFilenameAppendOptions` list must contain at least one macro.|
|`filenameConfig.defaultFilenameAppendOptions`|String|*Required*. Pre-selected default file name macros that users can uncheck.<br><br> The macros in this list are a subset of the ones defined in `allowedFilenameAppendOptions`. |
|`filenameConfig.defaultFilename`|String|*Optional*. Defines the default file name macros for the exported files. These cannot be overwritten by users. <br><br>Any macro defined by `allowedFilenameAppendOptions` will be appended after the `defaultFilename` macros. <br><br>If `defaultFilename` is empty, you must define at least one macro in `allowedFilenameAppendOptions`.|

{style="table-layout:auto"}

### File name configuration {#file-name-configuration}

Use file name configuration macros to define what the exported file names should include. The macros in the table below describe elements found in the UI in the [file name configuration](../ui/activate-batch-profile-destinations.md#file-names) screen.


>[!TIP]
> 
>As a best practice, you should always include the `SEGMENT_ID` macro in your exported file names. Segment IDs are unique, so including them in the file name is the best way to ensure that file names are unique as well. 

|Macro|UI label|Description|Example|
|---|---|---|---|
|`DESTINATION`|[!UICONTROL Destination]|Destination name in the UI.|Amazon S3|
|`SEGMENT_ID`|[!UICONTROL Segment ID]|Unique, Platform-generated segment ID|ce5c5482-2813-4a80-99bc-57113f6acde2|
|`SEGMENT_NAME`|[!UICONTROL Segment Name]|User-defined segment name|VIP subscriber|
|`DESTINATION_INSTANCE_ID`|[!UICONTROL Destination ID]|Unique, Platform-generated ID of the destination instance|7b891e5f-025a-4f0d-9e73-1919e71da3b0|
|`DESTINATION_INSTANCE_NAME`|[!UICONTROL Destination Name]|User-defined name of the destination instance.|My 2022 Advertising Destination|
|`ORGANIZATION_NAME`|[!UICONTROL Organization Name]|Name of the customer organization in Adobe Experience Platform.|My Organization Name|
|`SANDBOX_NAME`|[!UICONTROL Sandbox Name]|Name of the sandbox used by the customer.|prod|
|`DATETIME` / `TIMESTAMP`|[!UICONTROL Date and time]|`DATETIME` and `TIMESTAMP` both define when the file was generated, but in different formats. <br><br><ul><li>`DATETIME` uses the following format: YYYYMMDD_HHMMSS.</li><li>`TIMESTAMP` uses the 10-digit Unix format. </li></ul> `DATETIME` and `TIMESTAMP` are mutually exclusive, and cannot be used simultaneously. |<ul><li>`DATETIME`: 20220509_210543</li><li>`TIMESTAMP`: 1652131584</li></ul>|
|`CUSTOM_TEXT`|[!UICONTROL Custom text]|User-defined custom text to be included in the file name. Cannot be used in `defaultFilename`.|My_Custom_Text|
|`TIMESTAMP`|[!UICONTROL Date and time]|10-digit timestamp of the time when the file was generated, in Unix format.|1652131584|

{style="table-layout:auto"}

![UI image showing the file name configuration screen with preselected macros](assets/file-name-configuration.png)

The example shown in the image above uses the following file name macro configuration:

```json
"filenameConfig":{
   "allowedFilenameAppendOptions":[
      "CUSTOM_TEXT",
      "SEGMENT_ID",
      "DATETIME"
   ],
   "defaultFilenameAppendOptions":[
      "SEGMENT_ID",
      "DATETIME"
   ],
   "defaultFilename": "%DESTINATION%"
}
```


## Historical profile qualifications {#profile-backfill}

You can use the `backfillHistoricalProfileData` parameter in the destinations configuration to determine if historical profile qualifications should be exported to your destination.

```json
   "backfillHistoricalProfileData":true
```

|Parameter | Type | Description|
|---------|----------|------|
|`backfillHistoricalProfileData` | Boolean | Controls whether historical profile data is exported when segments are activated to the destination. <br> <ul><li> `true`: [!DNL Platform] sends the historical user profiles that qualified for the segment before the segment is activated. </li><li> `false`: [!DNL Platform] only includes user profiles that qualify for the segment after the segment is activated. </li></ul> |

{style="table-layout:auto"}

## How this configuration connects all necessary information for your destination {#connecting-all-configurations}

Some of your destination settings must be configured through the [destination server](./server-and-file-configuration.md) or the [audience metadata configuration](./audience-metadata-management.md) endpoints. The destination configuration described here connects all these settings by referencing the two other configurations as follows:

* Use the `destinationServerId` to reference the destination server and file template configuration set up for your destination.
* Use the `audienceMetadataId` to reference the audience metadata configuration set up for your destination.
