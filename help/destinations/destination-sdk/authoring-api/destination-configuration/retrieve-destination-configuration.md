---
description: This page exemplifies the API call used to retrieve a destination configuration through Adobe Experience Platform Destination SDK. 
title: Retrieve a destination configuration
---

# Retrieve a destination configuration

>[!IMPORTANT]
>
>**API endpoint**: `platform.adobe.io/data/core/activation/authoring/destinations`

This page exemplifies the API request and payload that you can use to retrieve information about an existing destination configuration, using the `/authoring/destination` API endpoint.

For a detailed description of the capabilities of a destination configuration, read the following articles:

* [Customer authentication configuration](../../functionality/destination-configuration/customer-authentication.md)
* [OAuth2 authentication](../../functionality/destination-configuration/oauth2-authentication.md)
* [Customer data fields](../../functionality/destination-configuration/customer-data-fields.md)
* [UI attributes](../../functionality/destination-configuration/ui-attributes.md)
* [Schema configuration](../../functionality/destination-configuration/schema-configuration.md)
* [Identities and attributes](../../functionality/destination-configuration/identities-attributes.md)
* [Destination delivery](../../functionality/destination-configuration/destination-delivery.md)
* [Audience metadata configuration](../../functionality/destination-configuration/audience-metadata-configuration.md)
* [Aggregation policy](../../functionality/destination-configuration/aggregation-policy.md)
* [Batch configuration](../../functionality/destination-configuration/batch-configuration.md)
* [Historical profile qualifications](../../functionality/destination-configuration/historical-profile-qualifications.md)

## Getting started with destination configuration API operations {#get-started}

Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Retrieve a destination configuration {#retrieve}

You can retrieve an existing destination configuration by making a `GET` request to the `/authoring/destination` endpoint.

**API format**

```http
GET /authoring/destinations
```

```http
GET /authoring/destinations/{INSTANCE_ID}
```

**Request**

The following two requests retrieve all destination configurations for your IMS Organization, or a specific destination configuration, depending on whether you pass the `INSTANCE_ID` parameter in the request.

Select each tab below to view the corresponding payload.

>[!BEGINTABS]

>[!TAB Retrieve all destination configurations]

```shell
curl -X GET https://platform.adobe.io/data/core/activation/authoring/destinations \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

>[!TAB Retrieve specific destination configurations]

```shell
curl -X GET https://platform.adobe.io/data/core/activation/authoring/destinations/{INSTANCE_ID} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'

```

| Parameter | Description |
| -------- | ----------- |
| `{INSTANCE_ID}` | The ID of the destination configuration you want to retrieve. |

>[!ENDTABS]

**Response**

A successful response returns HTTP status 200 with a list of destination configurations that you have access to, based on the [!DNL IMS Org ID] and sandbox name that you used. One `instanceId` corresponds to one destination configuration.

If you passed the `{INSTANCE_ID}` parameter in the API call, the response only includes the destination configuration corresponding to that `{INSTANCE_ID}`.


```json
{
   "items":[
      {
         "instanceId":"b0780cb5-2bb7-4409-bf2c-c625ca818588",
         "createdDate":"2020-10-28T06:14:09.784471Z",
         "lastModifiedDate":"2021-06-28T06:14:09.784471Z",
         "imsOrg":"AC3428435BF324E90A49402A@AdobeOrg",
         "sandboxName":"prod",
         "sandboxId":"r5g6660-c5da-11e9-93d4-6d5fc3a66a8e",
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
            "documentationLink":"https://www.adobe.com/go/destinations-moviestar-en",
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
         "segmentMappingConfig":{
            "mapExperiencePlatformSegmentName":false,
            "mapExperiencePlatformSegmentId":false,
            "mapUserInput":false,
            "audienceTemplateId":"cbf90a70-96b4-437b-86be-522fbdaabe9c"
         },
         "schemaConfig":{
            "profileFields":[
               {
                  "name":"a_custom_attribute",
                  "title":"a_custom_attribute",
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
         "aggregation":{
            "aggregationType":"BEST_EFFORT",
            "bestEffortAggregation":{
               "maxUsersPerRequest":10,
               "splitUserById":false
            }
         },
         "destinationDelivery":[
            {
               "authenticationRule":"CUSTOMER_AUTHENTICATION",
               "destinationServerId":"9c77000a-4559-40ae-9119-a04324a3ecd4"
            }
         ],
         "destConfigId":"410631b8-f6b3-4b7c-82da-7998aa3f327c",
         "backfillHistoricalProfileData":true
      }
   ]
}
```

## API error handling {#error-handling}

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.

## Next steps {#next-steps}

After reading this document, you now know how to retrieve details about your destination configuration using the `/authoring/destinations` API endpoint. Read [how to use Destination SDK to configure your destination](./configure-destination-instructions.md) to understand where this step fits into the process of configuring your destination.