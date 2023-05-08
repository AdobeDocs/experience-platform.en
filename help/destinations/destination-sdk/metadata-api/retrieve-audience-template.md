---
description: This page exemplifies the API call used to retrieve an audience template through Adobe Experience Platform Destination SDK. 
title: Retrieve an audience template
---

# Retrieve an audience template

>[!IMPORTANT]
>
>**API endpoint**: `platform.adobe.io/data/core/activation/authoring/audience-templates`

This page exemplifies the API request and payload that you can use to retrieve an audience metadata template, using the `/authoring/audience-templates` API endpoint.

For a detailed description of the capabilities that you can configure through this endpoint, see [audience metadata management](../functionality/audience-metadata-management.md).

>[!IMPORTANT]
>
>All parameter names and values supported by Destination SDK are **case sensitive**. To avoid case sensitivity errors, please use the parameters names and values exactly as shown in the documentation.

## Getting started with audience template API operations {#get-started}

Before continuing, please review the [getting started guide](../getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Retrieve an audience template {#retrieve}

You can retrieve an existing audience template by making a `GET` request to the `/authoring/audience-templates` endpoint.

**API format**

Use the following API format to retrieve all audience templates for your account.

```http
GET /authoring/audience-templates
```

Use the following API format to retrieve a specific audience template, defined by the `{INSTANCE_ID}` parameter.

```http
GET /authoring/audience-templates/{INSTANCE_ID}
```

The following two requests retrieve all audience templates for your IMS Organization, or a specific audience template, depending on whether you pass the `INSTANCE_ID` parameter in the request.

Select each tab below to view the corresponding payload.

>[!BEGINTABS]

>[!TAB Retrieve all audience templates]

The following request will retrieve the list of audience templates that you have access to, based on [!DNL IMS Org ID] and sandbox configuration.

+++Request

```shell
curl -X GET https://platform.adobe.io/data/core/activation/authoring/audience-templates \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

+++Response

A successful response returns HTTP status 200 with a list of audience templates that you have access to, based on the [!DNL IMS Org ID] and sandbox name that you used. One `instanceId` corresponds to one audience template.

```json

{
   "instanceId":"34ab9cc2-2536-44a5-9dc5-b2fea60b3bd6",
   "createdDate":"2021-07-26T19:30:52.012490Z",
   "lastModifiedDate":"2021-07-27T21:25:42.763478Z",
   "metadataTemplate":{
      "create":{
         "url":"https://api.moviestar.com/v1/adaccounts/{{customerData.accountId}}/segments",
         "httpMethod":"POST",
         "headers":[
            {
               "value":"application/json",
               "header":"Content-Type"
            },
            {
               "value":"Bearer {{oauth2ServiceAccessToken}}",
               "header":"Authorization"
            }
         ],
         "requestBody":{
            "json":{
               "segments":[
                  {
                     "name":"{{segment.name}}",
                     "description":"{{segment.description}}",
                     "source_type":"FIRST_PARTY",
                     "ad_account_id":"{{customerData.accountId}}",
                     "retention_in_days":180
                  }
               ]
            }
         },
         "responseFields":[
            {
               "value":"{{body.segments[0].segment.id}}",
               "name":"externalAudienceId"
            }
         ],
         "responseErrorFields":[
            {
               "value":"{{root}}",
               "name":"message"
            }
         ]
      },
      "update":{
         "url":"https://adsapi.moviestar.com/v1/adaccounts/{{customerData.accountId}}/segments",
         "httpMethod":"PUT",
         "headers":[
            {
               "value":"application/json",
               "header":"Content-Type"
            },
            {
               "value":"Bearer {{oauth2ServiceAccessToken}}",
               "header":"Authorization"
            }
         ],
         "requestBody":{
            "json":{
               "segments":[
                  {
                     "id":"{{segment.alias}}",
                     "name":"{{segment.name}}",
                     "description":"{{segment.description}}"
                  }
               ]
            }
         },
         "responseFields":[
            {
               "value":"{{body.segments[0].segment.id}}",
               "name":"externalAudienceId"
            }
         ],
         "responseErrorFields":[
            {
               "value":"{{root}}",
               "name":"message"
            }
         ]
      },
      "delete":{
         "url":"https://adsapi.moviestar.com/v1/segments/{{segment.alias}}",
         "httpMethod":"DELETE",
         "headers":[
            {
               "value":"application/json",
               "header":"Content-Type"
            },
            {
               "value":"Bearer {{oauth2ServiceAccessToken}}",
               "header":"Authorization"
            }
         ],
         "responseErrorFields":[
            {
               "value":"{{root}}",
               "name":"message"
            }
         ]
      },
      "name":"Moviestar destination audience template - Example 1"
   }
}
```

+++

>[!TAB Retrieve a specific audience template]

The following request will retrieve the list of audience templates that you have access to, based on [!DNL IMS Org ID] and sandbox configuration.

+++Request

```shell
curl -X GET https://platform.adobe.io/data/core/activation/authoring/audience-templates/{INSTANCE_ID} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

| Parameter | Description |
| -------- | ----------- |
| `{INSTANCE_ID}` | The ID of the audience template you want to retrieve. |

+++

+++Response

A successful response returns HTTP status 200 with the details of the audience template corresponding to the `{INSTANCE_ID}` provided on the call.

```json

{
   "instanceId":"34ab9cc2-2536-44a5-9dc5-b2fea60b3bd6",
   "createdDate":"2021-07-26T19:30:52.012490Z",
   "lastModifiedDate":"2021-07-27T21:25:42.763478Z",
   "metadataTemplate":{
      "create":{
         "url":"https://api.moviestar.com/v1/adaccounts/{{customerData.accountId}}/segments",
         "httpMethod":"POST",
         "headers":[
            {
               "value":"application/json",
               "header":"Content-Type"
            },
            {
               "value":"Bearer {{oauth2ServiceAccessToken}}",
               "header":"Authorization"
            }
         ],
         "requestBody":{
            "json":{
               "segments":[
                  {
                     "name":"{{segment.name}}",
                     "description":"{{segment.description}}",
                     "source_type":"FIRST_PARTY",
                     "ad_account_id":"{{customerData.accountId}}",
                     "retention_in_days":180
                  }
               ]
            }
         },
         "responseFields":[
            {
               "value":"{{body.segments[0].segment.id}}",
               "name":"externalAudienceId"
            }
         ],
         "responseErrorFields":[
            {
               "value":"{{root}}",
               "name":"message"
            }
         ]
      },
      "update":{
         "url":"https://adsapi.moviestar.com/v1/adaccounts/{{customerData.accountId}}/segments",
         "httpMethod":"PUT",
         "headers":[
            {
               "value":"application/json",
               "header":"Content-Type"
            },
            {
               "value":"Bearer {{oauth2ServiceAccessToken}}",
               "header":"Authorization"
            }
         ],
         "requestBody":{
            "json":{
               "segments":[
                  {
                     "id":"{{segment.alias}}",
                     "name":"{{segment.name}}",
                     "description":"{{segment.description}}"
                  }
               ]
            }
         },
         "responseFields":[
            {
               "value":"{{body.segments[0].segment.id}}",
               "name":"externalAudienceId"
            }
         ],
         "responseErrorFields":[
            {
               "value":"{{root}}",
               "name":"message"
            }
         ]
      },
      "delete":{
         "url":"https://adsapi.moviestar.com/v1/segments/{{segment.alias}}",
         "httpMethod":"DELETE",
         "headers":[
            {
               "value":"application/json",
               "header":"Content-Type"
            },
            {
               "value":"Bearer {{oauth2ServiceAccessToken}}",
               "header":"Authorization"
            }
         ],
         "responseErrorFields":[
            {
               "value":"{{root}}",
               "name":"message"
            }
         ]
      },
      "name":"Moviestar destination audience template - Example 1"
   }
}
```

+++

>[!ENDTABS]

## API error handling {#error-handling}

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.

## Next steps {#next-steps}

After reading this document, you now know how to retrieve details about your destination server configuration using the `/authoring/destination-servers` API endpoint. Read [how to use Destination SDK to configure your destination](../guides/configure-destination-instructions.md) to understand where this step fits into the process of configuring your destination.