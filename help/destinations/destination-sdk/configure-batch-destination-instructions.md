---
description: This page lists and describes the steps to configure a file-based destination using Destination SDK.
title: Use Destination SDK to configure a file-based destination
exl-id: d8aa7353-ba55-4a0d-81c4-ea2762387638
---
# Use Destination SDK to configure a file-based destination

## Overview {#overview}

>[!IMPORTANT]
>
>File-based destination support in Adobe Experience Platform Destination SDK is currently in Beta. The documentation and functionality are subject to change.

This page describes how to use the information in [Configuration options in Destinations SDK](./configuration-options.md) and in other Destination SDK functionality and API reference documents to configure a [file-based destination](../../destinations/destination-types.md#file-based). The steps are laid out in sequential order below.

## Prerequisites {#prerequisites}

Before advancing to the steps illustrated below, please read the [Destination SDK getting started](./getting-started.md) page for information on obtaining the necessary Adobe I/O authentication credentials and other prerequisites to work with Destination SDK APIs.

## Steps to use the configuration options in Destination SDK to set up your destination {#steps}

![Illustrated steps of using Destination SDK endpoints](./assets/destination-sdk-steps.png)

## Step 1: Create a server and template configuration {#create-server-template-configuration}

Start by creating a server and template configuration using the `/destinations-server` endpoint (read [API reference](./destination-server-api.md)). For more information about the server and template configuration, refer to [Server and template specs](./configuration-options.md#server-and-template) in the reference section.

Shown below is an example configuration. Note that the message transformation template in the `requestBody.value` parameter is addressed in step 3, [Create transformation template](./configure-destination-instructions.md#create-transformation-template).

**API format**

```http
POST platform.adobe.io/data/core/activation/authoring/destination-servers
```

```json
{
   "name":"Amazon S3 destination server",
   "destinationServerType":"FILE_BASED_S3",
   "fileBasedS3Destination":{
      "bucket":{
         "templatingStrategy":"PEBBLE_V1",
         "value":""
      },
      "path":{
         "templatingStrategy":"PEBBLE_V1",
         "value":""
      },
      "httpTemplate":{
         "httpMethod":"POST",
         "requestBody":{
            "templatingStrategy":"PEBBLE_V1",
            "value":"{ \"attributes\": [ {% for ns in [\"external_id\", \"yourdestination_id\"] %} {% if input.profile.identityMap[ns] is not empty and first_namespace_encountered %} , {% endif %} {% set first_namespace_encountered = true %} {% for identity in input.profile.identityMap[ns]%} { \"{{ ns }}\": \"{{ identity.id }}\" {% if input.profile.segmentMembership.ups is not empty %} , \"AEPSegments\": { \"add\": [ {% for segment in input.profile.segmentMembership.ups %} {% if segment.value.status == \"realized\" or segment.value.status == \"existing\" %} {% if added_segment_found %} , {% endif %} {% set added_segment_found = true %} \"{{ destination.segmentAliases[segment.key] }}\" {% endif %} {% endfor %} ], \"remove\": [ {% for segment in input.profile.segmentMembership.ups %} {% if segment.value.status == \"exited\" %} {% if removed_segment_found %} , {% endif %} {% set removed_segment_found = true %} \"{{ destination.segmentAliases[segment.key] }}\" {% endif %} {% endfor %} ] } {% set removed_segment_found = false %} {% set added_segment_found = false %} {% endif %} {% if input.profile.attributes is not empty %} , {% endif %} {% for attribute in input.profile.attributes %} \"{{ attribute.key }}\": {% if attribute.value is empty %} null {% else %} \"{{ attribute.value.value }}\" {% endif %} {% if not loop.last%} , {% endif %} {% endfor %} } {% if not loop.last %} , {% endif %} {% endfor %} {% endfor %} ] }"
         },
         "contentType":"application/json"
      }
   }
}


```

## Step 2: Create destination configuration {#create-destination-configuration}

Shown below is an example configuration for a destination template, created by using the `/destinations` API endpoint. For more information about this template, refer to [Destination configuration](./destination-configuration.md).

To connect the server and template configuration in step 1 to this destination configuration, add the instance ID of the server and template configuration as `destinationServerId` here.

**API format**


```http
POST platform.adobe.io/data/core/activation/authoring/destinations
``` 

```json
{
   "name":"Amazon S3 destination",
   "description":"Amazon S3 destination is a fictional destination, used for this example.",
   "status":"TEST",
   "customerAuthenticationConfigurations":[
      {
         "authType":"S3",
         "s3AccessKey":"string",
         "s3SecretKey":"string"
      }
   ],
   "customerDataFields":[
      {
         "name":"endpointsInstance",
         "type":"string",
         "title":"Select Endpoint",
         "description":"Select your endpoint in the dropdown list.",
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
         "title":"Destination Customer ID",
         "description":"Your customer ID in the destination (e.g. abcdef).",
         "isRequired":true,
         "pattern":""
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
         "acceptsCustomNamespaces":true
      },
      "another_id":{
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
   "aggregation":{
      "aggregationType":"CONFIGURABLE_AGGREGATION",
      "configurableAggregation":{
         "aggregationPolicyId":null,
         "aggregationKey":{
            "includeSegmentId":true,
            "includeSegmentStatus":true,
            "includeIdentity":true,
            "oneIdentityPerGroup":true,
            "groups":null
         },
         "splitUserById":true,
         "maxBatchAgeInSecs":360,
         "maxNumEventsInBatch":100
      }
   },
   "batchConfig": {
        "allowMandatoryFieldSelection": true,
        "allowJoinKeyFieldSelection": true,
        "defaultExportMode": "DAILY_FULL_EXPORT",
        "allowedExportModes": [
            "DAILY_FULL_EXPORT",
            "FIRST_FULL_THEN_INCREMENTAL"
        ],
        "allowedScheduleFrequency": [
            "DAILY",
            "EVERY_3_HOURS",
            "EVERY_6_HOURS",
            "EVERY_12_HOURS",
            "EVERY_8_HOURS",
            "ONCE",
            "EVERY_HOUR"
        ],
        "defaultFrequency": "DAILY",
        "defaultStartTime": "00:00",
    },
   "destinationDelivery":[
      {
         "authenticationRule":"CUSTOMER_AUTHENTICATION",
         "destinationServerId":"9c77000a-4559-40ae-9119-a04324a3ecd4"
      }
   ]
}

```

## Step 3: Create message transformation template - use templating language to specify the message output format {#create-transformation-template}

Based on the payloads that your destination supports, you must create a template that transforms the format of the exported data from Adobe XDM format into a format supported by your destination. See template examples in the section [Using a templating language for the identity, attributes, and segment membership transformations](./message-format.md#using-templating) and use the [template authoring tool](./create-template.md) provided by Adobe.

Once you have crafted a message transformation template that works for you, add it to the server and template configuration you created in step 1.

## Step 4: Create audience metadata configuration {#create-audience-metadata-configuration}

For some destinations, Destination SDK requires that you configure an audience metadata configuration to programmatically create, update, or delete audiences in your destination. Refer to [Audience metadata management](./audience-metadata-management.md) for information on when you need to set up this configuration and how to do it.

If you use an audience metadata configuration, you must connect it to the destination configuration you created in step 2. Add the instance ID of your audience metadata configuration to your destination configuration as `audienceTemplateId`.

## Step 5: Create credentials configuration / Set up authentication {#set-up-authentication}

Depending on whether you specify `"authenticationRule": "CUSTOMER_AUTHENTICATION"` or `"authenticationRule": "PLATFORM_AUTHENTICATION"` in the destination configuration above, you can set up authentication for your destination by using the `/destination` or the `/credentials` endpoint.

* If you selected `"authenticationRule": "CUSTOMER_AUTHENTICATION"` in the destination configuration, see the following sections for the authentication types supported by Destination SDK:
   * [OAuth 2 authentication](./oauth2-authentication.md)
   * [Amazon S3 authentication](authentication-configuration.md#s3)
   * [SFTP authentication with SSH key](authentication-configuration.md#sftp-ssh)
   * [SFTP authentication with password](authentication-configuration.md#sftp-password)

* If you selected `"authenticationRule": "PLATFORM_AUTHENTICATION"`, refer to the [Authentication configuration](./authentication-configuration.md#when-to-use).

## Step 6: Test your destination {#test-destination}

After setting up your destination using the configuration endpoints in the previous steps, you can use the [destination testing tool](./create-template.md) to test the integration between Adobe Experience Platform and your destination.

As part of the process to test your destination, you must use the Experience Platform UI to create segments, which you will activate to your destination. Refer to the two resources below for instructions how to create segments in Experience Platform:

* [Create a segment documentation page](https://experienceleague.adobe.com/docs/experience-platform/segmentation/ui/overview.html?lang=en#create-segment)
* [Create a segment video walkthrough](https://experienceleague.adobe.com/docs/platform-learn/tutorials/segments/create-segments.html?lang=en)

## Step 7: Publish your destination {#publish-destination}

After configuring and testing your destination, use the [destination publishing API](./destination-publish-api.md) to submit your configuration to Adobe for review.

## Step 8: Document your destination {#document-destination}

If you are an Independent Software Vendor (ISV) or System Integrator (SI) creating a [productized integration](./overview.md#productized-custom-integrations), use the [self-service documentation process](./docs-framework/documentation-instructions.md) to create a product documentation page for your destination in the [Experience Platform destinations catalog](/help/destinations/catalog/overview.md).
