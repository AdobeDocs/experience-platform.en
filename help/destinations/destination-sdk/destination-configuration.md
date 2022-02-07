---
description: This configuration allows you to indicate basic information like your destination name, category, description, logo, and more. The settings in this configuration also determine how Experience Platform users authenticate to your destination, how it appears in the Experience Platform user interface and the identities that can be exported to your destination.
title: Destination configuration options for Destination SDK
exl-id: b7e4db67-2981-4f18-b202-3facda5c8f0b
---
# Destination configuration {#destination-configuration}

## Overview {#overview}

This configuration allows you to indicate essential information like your destination name, category, description, and more. The settings in this configuration also determine how Experience Platform users authenticate to your destination, how it appears in the Experience Platform user interface and the identities that can be exported to your destination.

This configuration also connects the other configurations required for your destination to work - destination server and audience metadata - to this one. Read how you can reference the two configurations in a [section further below](./destination-configuration.md#connecting-all-configurations).

You can configure the functionality described in this document by using the `/authoring/destinations` API endpoint. Read [Destinations API endpoint operations](./destination-configuration-api.md) for a complete list of operations you can perform on the endpoint.

## Example configurations {#example-configurations}

Below are two examples of destination configurations, one for a streaming destination, and one for a batch destination. The sections further below break down how these configurations are constructed.

### Streaming configuration example {#example-configuration}

This is an example configuration of a fictional streaming destination, Moviestar, which has endpoints in four locations on the globe. The destination belongs to the mobile destinations category.

```json
{
   "name":"Moviestar",
   "description":"Moviestar is a fictional destination, used for this example.",
   "status":"TEST",
   "customerAuthenticationConfigurations":[
      {
         "authType":"BEARER"
      }
   ],
   "customerDataFields":[
      {
         "name":"endpointsInstance",
         "type":"string",
         "title":"Select Endpoint",
         "description":"Moviestar manages several instances across the globe for REST endpoints that our customers are provisioned for. Select your endpoint in the dropdown list.",
         "isRequired":true,
         "enum":[
            "US",
            "EU",
            "APAC",
            "NZ"
         ]
      },
      {
         "name":"customerID",
         "type":"string",
         "title":"Moviestar Customer ID",
         "description":"Your customer ID in the Moviestar destination (e.g. abcdef).",
         "isRequired":true,
         "pattern":"^[A-Za-z]+$"
      }
   ],
   "uiAttributes":{
      "documentationLink":"http://www.adobe.com/go/destinations-moviestar-en",
      "category":"mobile",
      "connectionType":"Server-to-server",
      "frequency":"Streaming"
   },
   "identityNamespaces":{
      "external_id":{
         "acceptsAttributes":true,
         "acceptsCustomNamespaces":true,
         "acceptedGlobalNamespaces":{
            "Email":{
               
            }
         }
      },
      "another_id":{
         "acceptsAttributes":true,
         "acceptsCustomNamespaces":true
      }
   },
   "schemaConfig":{
      "profileRequired":false,
      "segmentRequired":true,
      "identityRequired":true
   },
   "destinationDelivery":[
      {
         "authenticationRule":"CUSTOMER_AUTHENTICATION",
         "destinationServerId":"9c77000a-4559-40ae-9119-a04324a3ecd4"
      }
   ],
   "segmentMappingConfig":{
      "mapExperiencePlatformSegmentName":false,
      "mapExperiencePlatformSegmentId":false,
      "mapUserInput":false,
      "audienceTemplateId":"cbf90a70-96b4-437b-86be-522fbdaabe9c"
   },
   "aggregation":{
      "aggregationType":"CONFIGURABLE_AGGREGATION",
      "configurableAggregation":{
         "splitUserById":true,
         "maxBatchAgeInSecs":0,
         "maxNumEventsInBatch":0,
         "aggregationKey":{
            "includeSegmentId":true,
            "includeSegmentStatus":true,
            "includeIdentity":true,
            "oneIdentityPerGroup":false,
            "groups":[
               {
                  "namespaces":[
                     "IDFA",
                     "GAID"
                  ]
               },
               {
                  "namespaces":[
                     "EMAIL"
                  ]
               }
            ]
         }
      }
   },
   "backfillHistoricalProfileData":true
}


```

### File-based configuration example {#batch-example-configuration}


<!--

Review the entire example for batch.

Need correct value for connectionType.

-->

>[!IMPORTANT]
>
>File-based destination support in Adobe Experience Platform Destination SDK is currently in Beta. The documentation and functionality are subject to change.

This is an example configuration of a fictional file-based destination. The destination belongs to the email marketing category.


```json
{
    "name": "Amazon S3 destination",
    "description": "Amazon S3 destination is a fictional destination, used for this example.",
    "releaseNotes": "Test",
    "status": "Test",
    "maxProfileAttributes": "2000",
    "maxIdentityAttributes": "500",
    "customerAuthenticationConfigurations": [
        {
            "authType": "S3"
        }
    ],
    "customerEncryptionConfigurations": [],
    "customerDataFields": [
        {
            "name": "bucket",
            "title": "Amazon S3 bucket name",
            "description": "Enter the Amazon S3 Bucket name that will host the exported files.",
            "type": "string",
            "isRequired": true,
            "readOnly": false,
            "hidden": false
        },
        {
            "name": "path",
            "title": "Amazon S3 path",
            "description": "Enter Amazon S3 folder path",
            "type": "string",
            "isRequired": true,
            "pattern": "^[A-Za-z]+$",
            "readOnly": false,
            "hidden": false
        },
        {
            "name": "compression",
            "title": "Select compression type",
            "description": "Select the file compression type used by the exported files.",
            "type": "string",
            "isRequired": true,
            "readOnly": false,
            "enum": [
                "GZIP",
                "NONE",
                "bzip2",
                "lz4",
                "snappy",
                "deflate"
            ]
        },
        {
            "name": "fileType",
            "title": "Select a file format",
            "description": "Select the file format to be used by the exported files.",
            "type": "string",
            "isRequired": true,
            "readOnly": false,
            "hidden": false,
            "enum": [
                "csv",
                "json",
                "parquet"
            ],
            "default": "csv"
        }
    ],
    "uiAttributes": {
        "documentationLink": "https://www.adobe.io/apis/experienceplatform.html",
        "category": "S3",
        "iconUrl": "https://dc5tqsrhldvnl.cloudfront.net/2/90048/da276e30c730ce6cd666c8ca78360df21.png",
        "connectionType": "S3",
        "flowRunsSupported": true,
        "monitoringSupported": true,
        "frequency": "Batch"
    },
    "aggregation": {
        "aggregationType": "BEST_EFFORT",
        "bestEffortAggregation": {
            "maxUsersPerRequest": 10,
            "splitUserById": false
        }
    },
    "destinationDelivery": [
        {
            "deliveryMatchers": [
                {
                    "type": "SOURCE",
                    "value": [
                        "batch"
                    ]
                }
            ],
            "authenticationRule": "CUSTOMER_AUTHENTICATION",
            "destinationServerId": "eec25bde-4f56-4c02-a830-9aa9ec73ee9d" // the instance ID of the destination server created
        }
    ],
    "schemaConfig": {
        "profileRequired": true,
        "segmentRequired": true,
        "identityRequired": true
    },
    "batchConfig": {
        "allowMandatoryFieldSelection": true,
        "allowJoinKeyFieldSelection": true, // confirm what these are with Justin - dedupe keys?
        "defaultExportMode": "DAILY_FULL_EXPORT",
        "allowedExportMode": [
            "DAILY_FULL_EXPORT",
            "FIRST_FULL_THEN_INCREMENTAL"
        ],
        "allowedScheduleFrequency": [
            "DAILY",
            "EVERY_3_HOURS",
            "EVERY_6_HOURS",
            "EVERY_8_HOURS",
            "EVERY_12_HOURS",
            "ONCE"
        ],
        "defaultFrequency": "DAILY",
        "defaultStartTime": "00:00"
    },
    "backfillHistoricalProfileData": true
}
```

|Parameter | Type | Description|
|---------|----------|------|
|`name` | String | Indicates the title of your destination in the Experience Platform catalog. |
|`description` | String | Provide a description for your destination card in the Experience Platform destinations catalog. Aim for no more than 4-5 sentences. |
|`status` | String | Indicates the lifecycle status of the destination card. Accepted values are `TEST`, `PUBLISHED`, and `DELETED`. Use `TEST` when you first configure your destination. |
|`maxProfileAttributes`||Indicates the maximum number of profile attributes customers can select for the destination. Default value is `9000`.|
|`maxIdentityAttributes`||Indicates the maximum number of identity namespaces customers can select for the destination. Default value is `1000`.|

{style="table-layout:auto"}

## Customer authentication configurations {#customer-authentication-configurations}

This section in the destinations configuration generates the [Configure new destination](/help/destinations/ui/connect-destination.md) page in the Experience Platform user interface, where users connect Experience Platform to the accounts they have with your destination. Depending on which authentication option you indicate in the `authType` field, the Experience Platform page is generated for the users as follows:

**Bearer authentication**

When you configure the bearer authentication type, users are required to input the bearer token that they obtain from your destination.

![UI render with bearer authentication](assets/bearer-authentication-ui.png)

**Amazon S3 authentication**

>[!IMPORTANT]
>
>This authentication configuration only applies to file-based destinations. The functionality to configure and submit file-based destinations using Adobe Experience Platform Destination SDK is currently in Beta. The documentation and functionality are subject to change.

When you configure the Amazon S3 authentication type, users are required to input the S3 credentials.

![UI render with S3 authentication](assets/s3-authentication-ui.png)

**SFTP with password authentication**

>[!IMPORTANT]
>
>This authentication configuration only applies to file-based destinations. The functionality to configure and submit file-based destinations using Adobe Experience Platform Destination SDK is currently in Beta. The documentation and functionality are subject to change.

When you configure the SFTP with password authentication type, users are required to input the SFTP username and password, as well as the SFTP domain and port (default port is 22).

![UI render with SFTP with password authentication](assets/sftp-password-authentication-ui.png)

**SFTP with SSH key authentication**

>[!IMPORTANT]
>
>This authentication configuration only applies to file-based destinations. The functionality to configure and submit file-based destinations using Adobe Experience Platform Destination SDK is currently in Beta. The documentation and functionality are subject to change.

When you configure the SFTP with SSH key authentication type, users are required to input the SFTP username and SSH key, as well as the SFTP domain and port (default port is 22).

![UI render with SFTP with SSH key authentication](assets/sftp-key-authentication-ui.png)

**OAuth 2 authentication**

Users select **[!UICONTROL Connect to destination]** to trigger the OAuth 2 authentication flow to your destination, as shown in the example below for the Twitter Custom Audiences destination. For detailed information on configuring OAuth 2 authentication to your destination endpoint, read the dedicated [Destination SDK OAuth 2 authentication page](./oauth2-authentication.md).

![UI render with OAuth 2 authentication](assets/oauth2-authentication-ui.png)


|Parameter | Type | Description|
|---------|----------|------|
|`customerAuthenticationConfigurations` | String | Indicates the configuration used to authenticate Experience Platform customers to your server. See `authType` below for accepted values. |
|`authType` | String | Accepted values are:<ul><li>`BEARER`. If your destination supports bearer authentication, set `"authType":"Bearer"` and  `"authenticationRule":"CUSTOMER_AUTHENTICATION"` in the [destination delivery section](./destination-configuration.md).</li><li>`OAUTH2`. If your destination supports OAuth 2 authentication, set `"authType":"OAUTH2"` and add the required fields for OAuth 2, as shown in the [Destination SDK OAuth 2 authentication page](./oauth2-authentication.md). Additionally, set `"authenticationRule":"CUSTOMER_AUTHENTICATION"` in the [destination delivery section](./destination-configuration.md).</li><li>`S3`. If your destination supports Amazon S3 authentication, set `"authType":"S3"` and add the required fields for Amazon S3, as shown in the [Destination SDK authentication configuration page](./authentication-configuration.md#s3). Additionally, set `"authenticationRule":"CUSTOMER_AUTHENTICATION"` in the [destination delivery section](./destination-configuration.md).</li><li>`SFTP_WITH_SSH_KEY`. If your destination supports SFTP authentication with SSH key, set `"authType":"SFTP_WITH_SSH_KEY"` and add the required fields for SFTP with SSH key, as shown in the [Destination SDK authentication configuration page](./authentication-configuration.md#sftp-ssh).  Additionally, set `"authenticationRule":"CUSTOMER_AUTHENTICATION"` in the [destination delivery section](./destination-configuration.md).</li><li>`SFTP_WITH_PASSWORD`. If your destination supports SFTP authentication with password, set `"authType":"SFTP_WITH_PASSWORD"` and add the required fields for SFTP with password, as shown in the [Destination SDK authentication configuration page](./authentication-configuration.md#sftp-password). Additionally, set `"authenticationRule":"CUSTOMER_AUTHENTICATION"` in the [destination delivery section](./destination-configuration.md).</li></ul> |

{style="table-layout:auto"}

## Customer data fields {#customer-data-fields}

This section allows partners to introduce custom fields. In the example configurations above, `customerDataFields` requires users to select an endpoint in the authentication flow and indicate their customer ID with the destination. The configuration is reflected in the authentication flow as shown below:

![Custom field authentication flow](./assets/custom-field-authentication-flow.png)

|Parameter | Type | Description|
|---------|----------|------|
|`name` | String | Provide a name for the custom field you are introducing. |
|`type` | String | Indicates what type of custom field you are introducing. Accepted values are `string`, `object`, `integer`. |
|`title` | String | Indicates the name of the field, as it is seen by customers in the Experience Platform user interface. |
|`description` | String | Provide a description for the custom field. |
|`isRequired` | Boolean | Indicates if this field is required in the destination setup workflow. |
|`enum` | String | Renders the custom field as a dropdown menu and lists the options available to the user. |
|`pattern` | String | Enforces a pattern for the custom field, if needed. Use regular expressions to enforce a pattern. For example, if your customer IDs don't include numbers or underscores, enter `^[A-Za-z]+$` in this field. |

{style="table-layout:auto"}

## UI attributes {#ui-attributes}

This section refers to the UI elements in the configuration above that Adobe should use for your destination in the Adobe Experience Platform user interface. See below:

|Parameter | Type | Description|
|---------|----------|------|
|`documentationLink` | String | Refers to the documentation page in the [Destinations Catalog](https://experienceleague.adobe.com/docs/experience-platform/destinations/catalog/overview.html?lang=en#catalog) for your destination. Use `http://www.adobe.com/go/destinations-YOURDESTINATION-en`, where `YOURDESTINATION` is the name of your destination. For a destination called Moviestar, you would use `http://www.adobe.com/go/destinations-moviestar-en` |
|`category` | String | Refers to the category assigned to your destination in Adobe Experience Platform. For more information, read [Destination Categories](https://experienceleague.adobe.com/docs/experience-platform/destinations/destination-types.html). Use one of the following values: `adobeSolutions, advertising, analytics, cdp, cloudStorage, crm, customerSuccess, database, dmp, ecommerce, email, emailMarketing, enrichment, livechat, marketingAutomation, mobile, personalization, protocols, social, streaming, subscriptions, surveys, tagManagers, voc, warehouses, payments`. |
|`connectionType` | String | `Server-to-server` is currently the only available option. |
|`frequency` | String | Refers to the type of data export supported by the destination. Supported values: <ul><li>`Streaming`</li><li>`Batch`</li></ul>|

{style="table-layout:auto"}

## Schema configuration in the mapping step {#schema-configuration}

![Enable mapping step](./assets/enable-mapping-step.png)

Use the parameters in `schemaConfig` to enable the mapping step of the destination activation workflow. By using the parameters described below, you can determine if Experience Platform users can map profile attributes and/or identities to the desired schema on your destination's side.

|Parameter | Type | Description|
|---------|----------|------|
|`profileFields` | Array | *Not shown in example configuration above.* When you add predefined `profileFields`, Experience Platform users have the option of mapping Platform attributes to the predefined attributes on your destination's side. |
|`profileRequired` | Boolean | Use `true` if users should be able to map profile attributes from Experience Platform to custom attributes on your destination's side, as shown in the example configuration above. |
|`segmentRequired` | Boolean | Always use `segmentRequired:true`. |
|`identityRequired` | Boolean | Use `true` if users should be able to map identity namespaces from Experience Platform to your desired schema. |

{style="table-layout:auto"}

## Batch configuration {#batch-configuration}

<!--

what are join keys or where could I find out more about them?

Are these in any way related to deduplication keys? if they're the same, let's link to https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/activate/activate-batch-profile-destinations.html?lang=en#deduplication-keys for more context

A: 


-->

For batch destinations, use the parameters in `batchConfig` to describe the configuration of the file-based destination that you are about to create.

|Parameter | Type | Description|
|---------|----------|------|
|`allowMandatoryFieldSelection`|Boolean|Set to `true` to allow customers to specify which profile attributes are mandatory. Default value is `false`. See [Mandatory attributes](../ui/activate-batch-profile-destinations.md) for more information. |
|`allowJoinKeyFieldSelection`|Boolean|Set to `true` to allow customers to specify join keys. Default value is `false`. |
|`defaultExportMode`|Enum|Defines the default file export mode. Supported values:<ul><li>`DAILY_FULL_EXPORT`</li><li>`FIRST_FULL_THEN_INCREMENTAL`</li></ul><br> Default value is `DAILY_FULL_EXPORT`.|
|`allowedExportModes`|List|Defines the file export modes available to customers. Supported values:<ul><li>`DAILY_FULL_EXPORT`</li><li>`FIRST_FULL_THEN_INCREMENTAL`</li></ul>|
|`allowedScheduleFrequency`|List|Defines the file export frequency available to customers. Supported values:<ul><li>`ONCE`</li><li>`EVERY_HOUR`</li><li>`EVERY_3_HOURS`</li><li>`EVERY_6_HOURS`</li><li>`EVERY_8_HOURS`</li><li>`EVERY_12_HOURS`</li><li>`DAILY`</li></ul>|
|`defaultFrequency`|Enum|Defines the default file export frequency.Supported values:<ul><li>`ONCE`</li><li>`EVERY_HOUR`</li><li>`EVERY_3_HOURS`</li><li>`EVERY_6_HOURS`</li><li>`EVERY_8_HOURS`</li><li>`EVERY_12_HOURS`</li><li>`DAILY`</li></ul> <br> Default value is `DAILY`.|
|`defaultStartTime`|String|Defines the default start time for the file export. Uses 24-hour file format. Default value is "00:00".|

## Identities and attributes {#identities-and-attributes}

The parameters in this section determine which identities your destination accepts. This configuration also populates the target identities and attributes in the [mapping step](/help/destinations/ui/activate-segment-streaming-destinations.md#mapping) of the Experience Platform user interface, where users map identities and attributes from their XDM schemas to the schema in your destination.

You must indicate which [!DNL Platform] identities customers are able to export to your destination. Some examples are [!DNL Experience Cloud ID], hashed email, device ID ([!DNL IDFA], [!DNL GAID]). These values are [!DNL Platform] identity namespaces that customers can map to identity namespaces in your destination. You can also indicate if customers can map custom namespaces to identities supported by your destination.

Identity namespaces do not require a 1-to-1 correspondence between [!DNL Platform] and your destination.
For instance, customers could map a [!DNL Platform] [!DNL IDFA] namespace to an [!DNL IDFA] namespace from your destination, or they can map the same [!DNL Platform] [!DNL IDFA] namespace to a [!DNL Customer ID] namespace in your destination.

Read more in the [Identity Namespace overview](https://experienceleague.adobe.com/docs/experience-platform/identity/namespaces.html?lang=en).

![Render target identities in the UI](./assets/target-identities-ui.png) 

|Parameter | Type | Description|
|---------|----------|------|
|`acceptsAttributes` | Boolean | Indicates if your destination accepts standard profile attributes. Usually, these attributes are highlighted in partners' documentation. |
|`acceptsCustomNamespaces` | Boolean | Indicates if customers can set up custom namespaces in your destination. |
|`allowedAttributesTransformation` | String | *Not shown in example configuration*. Used, for example, when the [!DNL Platform] customer has plain email addresses as an attribute and your platform only accepts hashed emails. In this object, you can define the transformation that needs to be applied (for example, transform the email to lowercase, then hash). For an example, see `requiredTransformation` in the [destination configuration API reference](./destination-configuration-api.md#update). |
|`acceptedGlobalNamespaces` | - | Used for cases when your platform accepts [standard identity namespaces](https://experienceleague.adobe.com/docs/experience-platform/identity/namespaces.html?lang=en#standard-namespaces) (for example, IDFA), so you can restrict Platform users to only selecting these identity namespaces. |

{style="table-layout:auto"}

## Destination delivery {#destination-delivery}

|Parameter | Type | Description|
|---------|----------|------|
|`authenticationRule` | String | Indicates how [!DNL Platform] customers connect to your destination. Accepted values are `CUSTOMER_AUTHENTICATION`, `PLATFORM_AUTHENTICATION`, `NONE`. <br> <ul><li>Use `CUSTOMER_AUTHENTICATION` if Platform customers log into your system via a username and password, a bearer token, or another method of authentication. For example, you would select this option if you also selected `authType: OAUTH2` or `authType:BEARER` in `customerAuthenticationConfigurations`. </li><li> Use `PLATFORM_AUTHENTICATION` if there is a global authentication system between Adobe and your destination and the [!DNL Platform] customer does not need to provide any authentication credentials to connect to your destination. In this case, you must create a credentials object using the [Credentials](./credentials-configuration-api.md) configuration. </li><li>Use `NONE` if no authentication is required to send data to your destination platform. </li></ul> |
|`destinationServerId` | String | The `instanceId` of the [destination server configuration](./destination-server-api.md) used for this destination. |

{style="table-layout:auto"}

## Segment mapping configuration {#segment-mapping}

![Segment mapping configuration section](./assets/segment-mapping-configuration.png)

This section of the destination configuration relates to how segment metadata like segment names or IDs should be shared between Experience Platform and your destination.

Through the `audienceTemplateId`, this section also ties together this configuration with the [audience metadata configuration](./audience-metadata-management.md).

The parameters shown in the configuration above are described in the [destinations endpoint API reference](./destination-configuration-api.md).

## Aggregation policy {#aggregation}

![Aggregation policy in the configuration template](./assets/aggregation-configuration.png)

This section allows you to set the aggregation policies that Experience Platform should use when exporting data to your destination.

An aggregation policy determines how the exported profiles are combined in the data exports. Available options are:
* Best effort aggregation
* Configurable aggregation (shown in the configuration above)

Read the section on [using templating](./message-format.md#using-templating) and the [aggregation key examples](./message-format.md#template-aggregation-key) to understand how to include the aggregation policy in your message transformation template based on your selected aggregation policy. 

### Best effort aggregation {#best-effort-aggregation}

>[!TIP]
>
>Use this option if your API endpoint accepts fewer than 100 profiles per API call.

This option works best for destinations which prefer fewer profiles per request and would rather take more requests with less data than fewer requests with more data.

Use the `maxUsersPerRequest` parameter to specify the maximum number of profiles that your destination can take in a request.

### Configurable aggregation {#configurable-aggregation}

This option works best if you'd rather take large batches, with thousands of profiles on the same call. This option also allows you to aggregate the exported profiles based on complex aggregation rules.

This option allows you to:
* Set the maximum time and maximum number of profiles to aggregate before an API call is made to your destination.
* Aggregate the exported profiles mapped to the destination based on:
  * Segment ID;
  * Segment status;
  * Identity or groups of identities.

For detailed explanations of the aggregation parameters, refer to the [Destinations API endpoint operations](./destination-configuration-api.md) reference page, where each parameter is described.

## Historical profile qualifications {#profile-backfill}

You can use the `backfillHistoricalProfileData` parameter in the destinations configuration to determine if historical profile qualifications should be exported to your destination.

|Parameter | Type | Description|
|---------|----------|------|
|`backfillHistoricalProfileData` | Boolean | Controls whether historical profile data is exported when segments are activated to the destination. <br> <ul><li> `true`: [!DNL Platform] sends the historical user profiles that qualified for the segment before the segment is activated. </li><li> `false`: [!DNL Platform] only includes user profiles that qualify for the segment after the segment is activated. </li></ul> |

## How this configuration connects all necessary information for your destination {#connecting-all-configurations}

Some of your destination settings must be configured through the [destination server](./server-and-template-configuration.md) or the [audience metadata configuration](./audience-metadata-management.md). The destination configuration described here connects all these settings by referencing the two other configurations as follows:

* Use the `destinationServerId` to reference the destination server and template configuration set up for your destination.
* Use the `audienceMetadataId` to reference the audience metadata configuration set up for your destination.