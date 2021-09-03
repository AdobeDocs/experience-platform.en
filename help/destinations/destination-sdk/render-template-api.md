---
description: This page lists and describes all the API operations that you can perform using the `/authoring/testing/template/render` API endpoint, to to render exported data for your destination, based on your message transformation template.
title: Render template API operations
---
# Render template API operations {#render-template-api-operations}

>[!IMPORTANT]
>
>**API endpoint**: `https://platform.adobe.io/data/core/activation/authoring/testing/template/render`

This page lists and describes all the API operations that you can perform using the `/authoring/testing/template/render` API endpoint, to render exported data for your destination, based on your [message transformation template](./message-format.md#using-templating). For a description of the functionality supported by this endpoint, read [create template](./create-template.md). 

## Getting started with render template API operations {#get-started}

Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain required headers and how to get allow listed.

## Render exported data based on template {#render-exported-data}

You can render exported data by making a POST request to the `authoring/testing/template/render` endpoint and providing the destination ID of the destination configuration and the template you created using the [sample template API endpoint](./sample-template-api.md).

>[!TIP]
>
>* The destination ID that you should use here is the `instanceId` that corresponds to a destination configuration, created using the `/destinations` endpoint. Refer to the [destination configuration API reference](./destination-configuration-api.md#retrieve-list).


**API format**


```http
POST authoring/testing/template/render
```

| Parameter | Description |
| -------- | ----------- |
| `destinationId` | The ID of the destination configuration for which you are rendering exported data. |
| `template` | The character-escaped version of the template based on which you are rendering exported data. |
| `profiles` | If you'd like to add profiles to the body of the call, you can generate some by using the [Sample profile generation API](./sample-profile-generation-api.md). |


You can render exported data as shown in the examples below:

* [Render a template with no profiles sent in body](./render-template-api.md#multiple-profiles-no-body)
* [Render a template with profiles sent in body](./render-template-api.md#multiple-profiles-with-body)

<!--

### Render a template for single profile, no profiles sent in body {#single-profile-no-body}

**Request**

The following request renders sample profiles that match the format expected by your destination.

```shell

curl --location --request POST 'https://platform.adobe.io/data/core/activation/authoring/testing/template/render' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-api-key: {API_KEY}' \
--header 'Authorization: Bearer {ACCESS_TOKEN}' \
--header 'x-gw-ims-org-id: {IMS_ORG}' \
--header 'x-sandbox-name: {SANDBOX_NAME}' \
--data-raw '
{
    "destinationId": "a9fb4f0f-3983-4756-b756-00cf25fe5a35",
    "template": "{# THIS is an example template for a single profile #}\r\n{\r\n    \"identities\": [\r\n        {% for email in input.profile.identityMap.email %}\r\n            {\r\n                \"type\": \"email\",\r\n                \"id\": \"{{ email.id }}\"\r\n            }{% if not loop.last %},{% endif %}\r\n        {% endfor %}\r\n\r\n        {# Add a comma only if we have both emails and external_ids. #}\r\n        {% if input.profile.identityMap.email is not empty and input.profile.identityMap.external_id is not empty %}\r\n            ,\r\n        {% endif %}\r\n\r\n        {% for external in input.profile.identityMap.external_id %}\r\n            {\r\n                \"type\": \"external_id\",\r\n                \"id\": \"{{ external.id }}\"\r\n            }{% if not loop.last %},{% endif %}\r\n        {% endfor %}\r\n    ],\r\n    \"AdobeExperiencePlatformSegments\": {\r\n        \"add\": [\r\n            {% for segment in input.profile.segmentMembership.ups | added %}\r\n                \"{{ segment.key }}\"{% if not loop.last %},{% endif %}\r\n            {% endfor %}\r\n        ],\r\n        \"remove\": [\r\n            {# Alternative syntax for filtering segments by status: #}\r\n            {% for segment in removedSegments(input.profile.segmentMembership.ups) %}\r\n                \"{{ segment.key }}\"{% if not loop.last %},{% endif %}\r\n            {% endfor %}\r\n        ]\r\n    }\r\n}"
}'

```

**Response**

The response returns the result of rendering the template, or any errors encountered.
A successful response returns HTTP status 200 with details of the exported data.
An unsuccessful response returns HTTP status 500 along with descriptions of the encountered errors.

```json

{
    "identities": [
        {
            "type": "email",
            "id": "email_lc_sha256-cBltJ"
        },
        {
            "type": "external_id",
            "id": "extern_id-cP732"
        }
    ],
    "AdobeExperiencePlatformSegments": {
        "add": [
            "segmentid1",
            "segmentid2"
        ],
        "remove": [
            "segmentid3"
        ]
    }
}

```

### Render a template for single profile, with profiles sent in body {#single-profile-with-body}

**Request**

The following request renders a profile that matches the format expected by your destination. You can generate profiles to send on the call by using the [sample profile generation API](./sample-profile-generation-api.md).

```shell

curl --location --request POST 'https://platform.adobe.io/data/core/activation/authoring/testing/template/render' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-api-key: {API_KEY}' \
--header 'Authorization: Bearer {ACCESS_TOKEN}' \
--header 'x-gw-ims-org-id: {IMS_ORG}' \
--header 'x-sandbox-name: {SANDBOX_NAME}' \
--data-raw '
{
    "destinationId": "a9fb4f0f-3983-4756-b756-00cf25fe5a35",
    "template": "{# THIS is an example template for a single profile #}\r\n{\r\n    \"identities\": [\r\n        {% for email in input.profile.identityMap.email %}\r\n            {\r\n                \"type\": \"email\",\r\n                \"id\": \"{{ email.id }}\"\r\n            }{% if not loop.last %},{% endif %}\r\n        {% endfor %}\r\n\r\n        {# Add a comma only if we have both emails and external_ids. #}\r\n        {% if input.profile.identityMap.email is not empty and input.profile.identityMap.external_id is not empty %}\r\n            ,\r\n        {% endif %}\r\n\r\n        {% for external in input.profile.identityMap.external_id %}\r\n            {\r\n                \"type\": \"external_id\",\r\n                \"id\": \"{{ external.id }}\"\r\n            }{% if not loop.last %},{% endif %}\r\n        {% endfor %}\r\n    ],\r\n    \"AdobeExperiencePlatformSegments\": {\r\n        \"add\": [\r\n            {% for segment in input.profile.segmentMembership.ups | added %}\r\n                \"{{ segment.key }}\"{% if not loop.last %},{% endif %}\r\n            {% endfor %}\r\n        ],\r\n        \"remove\": [\r\n            {# Alternative syntax for filtering segments by status: #}\r\n            {% for segment in removedSegments(input.profile.segmentMembership.ups) %}\r\n                \"{{ segment.key }}\"{% if not loop.last %},{% endif %}\r\n            {% endfor %}\r\n        ]\r\n    }\r\n}",
    "profiles": [
    {
        "segmentMembership": {
            "ups": {
                "segmentid1": {
                    "lastQualificationTime": "2021-06-17T11:49:06.626238Z",
                    "status": "existing"
                },
                "segmentid3": {
                    "lastQualificationTime": "2021-06-17T11:49:06.626240Z",
                    "status": "exited"
                },
                "segmentid2": {
                    "lastQualificationTime": "2021-06-17T11:49:06.626240Z",
                    "status": "realized"
                }
            }
        },
        "identityMap": {
            "phone_sha256": [
                {
                    "id": "phone_sha256-c3fjU"
                }
            ],
            "gaid": [
                {
                    "id": "gaid-VNq0z"
                }
            ],
            "idfa": [
                {
                    "id": "idfa-HATAl"
                }
            ],
            "external_id": [
                {
                    "id": "extern_id-cP732"
                }
            ],
            "email": [
                {
                    "id": "email_lc_sha256-cBltJ"
                }
            ]
        }
    }
    ]
}'

```

**Response**

A successful response returns HTTP status 200 with details of the exported data.

```json

{
    "identities": [
        {
            "type": "email",
            "id": "email_lc_sha256-cBltJ"
        },
        {
            "type": "external_id",
            "id": "extern_id-cP732"
        }
    ],
    "AdobeExperiencePlatformSegments": {
        "add": [
            "segmentid1",
            "segmentid2"
        ],
        "remove": [
            "segmentid3"
        ]
    }
}

```

-->

### Render a template with no profiles sent in body {#multiple-profiles-no-body}

**Request**

The following request renders multiple sample profiles that match the format expected by your destination.

```shell

curl --location --request POST 'https://platform.adobe.io/data/core/activation/authoring/testing/template/render' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-api-key: {API_KEY}' \
--header 'Authorization: Bearer {ACCESS_TOKEN}' \
--header 'x-gw-ims-org-id: {IMS_ORG}' \
--header 'x-sandbox-name: {SANDBOX_NAME}' \
--data-raw '
{
   "destinationId":"{DESTINATION_ID}",
   "template":"{# THIS is an example template for multiple profiles #}\r\n{\r\n    \"profiles\": [\r\n        {% for profile in input.profiles %}\r\n            {\r\n                \"identities\": [\r\n                    {% for email in profile.identityMap.email %}\r\n                        {\r\n                            \"type\": \"email\",\r\n                            \"id\": \"{{ email.id }}\"\r\n                        }{% if not loop.last %},{% endif %}\r\n                    {% endfor %}\r\n\r\n                    {# Add a comma only if we have both emails and external_ids. #}\r\n                    {% if profile.identityMap.email is not empty and profile.identityMap.external_id is not empty %}\r\n                        ,\r\n                    {% endif %}\r\n\r\n                    {% for external in profile.identityMap.external_id %}\r\n                        {\r\n                            \"type\": \"external_id\",\r\n                            \"id\": \"{{ external.id }}\"\r\n                        }{% if not loop.last %},{% endif %}\r\n                    {% endfor %}\r\n                ],\r\n                \"AdobeExperiencePlatformSegments\": {\r\n                    \"add\": [\r\n                        {% for segment in profile.segmentMembership.ups | added %}\r\n                            \"{{ segment.key }}\"{% if not loop.last %},{% endif %}\r\n                        {% endfor %}\r\n                    ],\r\n                    \"remove\": [\r\n                        {# Alternative syntax for filtering segments by status: #}\r\n                        {% for segment in removedSegments(profile.segmentMembership.ups) %}\r\n                            \"{{ segment.key }}\"{% if not loop.last %},{% endif %}\r\n                        {% endfor %}\r\n                    ]\r\n                }\r\n            }{% if not loop.last %},{% endif %}\r\n        {% endfor %}\r\n    ]\r\n}",
   "profiles":[
      {
         "segmentMembership":{
            "ups":{
               "segmentid1":{
                  "lastQualificationTime":"2021-06-17T12:08:07.870859Z",
                  "status":"existing"
               },
               "segmentid3":{
                  "lastQualificationTime":"2021-06-17T12:08:07.870860Z",
                  "status":"exited"
               },
               "segmentid2":{
                  "lastQualificationTime":"2021-06-17T12:08:07.870860Z",
                  "status":"realized"
               }
            }
         },
         "identityMap":{
            "email":[
               {
                  "id":"Email-gq3zZ"
               }
            ],
            "external_id":[
               {
                  "id":"external_id"
               }
            ]
         }
      }
   ]
}'

```

**Response**

The response returns the result of rendering the template, or any errors encountered.
A successful response returns HTTP status 200 with details of the exported data.
An unsuccessful response returns HTTP status 500 along with descriptions of the encountered errors.

```json

{
   "profiles":[
      {
         "identities":[
            
         ],
         "AdobeExperiencePlatformSegments":{
            "add":[
               "segmentid1",
               "segmentid2"
            ],
            "remove":[
               "segmentid3"
            ]
         }
      },
      {
         "identities":[
            
         ],
         "AdobeExperiencePlatformSegments":{
            "add":[
               "segmentid1",
               "segmentid2"
            ],
            "remove":[
               "segmentid3"
            ]
         }
      },
      {
         "identities":[
            
         ],
         "AdobeExperiencePlatformSegments":{
            "add":[
               "segmentid1",
               "segmentid2"
            ],
            "remove":[
               "segmentid3"
            ]
         }
      }
   ]
}       

```

### Render a template with profiles sent in body {#multiple-profiles-with-body}

**Request**

The following request renders sample profiles that match the format expected by your destination. You can generate profiles to send on the call by using the [sample profile generation API](./sample-profile-generation-api.md).

```shell

curl --location --request POST 'https://platform.adobe.io/data/core/activation/authoring/testing/template/render' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-api-key: {API_KEY}' \
--header 'Authorization: Bearer {ACCESS_TOKEN}' \
--header 'x-gw-ims-org-id: {IMS_ORG}' \
--header 'x-sandbox-name: {SANDBOX_NAME}' \
--data-raw '
{
   "destinationId":"{DESTINATION_ID}",
   "template":"{# THIS is an example template for multiple profiles #}\r\n{\r\n    \"profiles\": [\r\n        {% for profile in input.profiles %}\r\n            {\r\n                \"identities\": [\r\n                    {% for email in profile.identityMap.email %}\r\n                        {\r\n                            \"type\": \"email\",\r\n                            \"id\": \"{{ email.id }}\"\r\n                        }{% if not loop.last %},{% endif %}\r\n                    {% endfor %}\r\n\r\n                    {# Add a comma only if we have both emails and external_ids. #}\r\n                    {% if profile.identityMap.email is not empty and profile.identityMap.external_id is not empty %}\r\n                        ,\r\n                    {% endif %}\r\n\r\n                    {% for external in profile.identityMap.external_id %}\r\n                        {\r\n                            \"type\": \"external_id\",\r\n                            \"id\": \"{{ external.id }}\"\r\n                        }{% if not loop.last %},{% endif %}\r\n                    {% endfor %}\r\n                ],\r\n                \"AdobeExperiencePlatformSegments\": {\r\n                    \"add\": [\r\n                        {% for segment in profile.segmentMembership.ups | added %}\r\n                            \"{{ segment.key }}\"{% if not loop.last %},{% endif %}\r\n                        {% endfor %}\r\n                    ],\r\n                    \"remove\": [\r\n                        {# Alternative syntax for filtering segments by status: #}\r\n                        {% for segment in removedSegments(profile.segmentMembership.ups) %}\r\n                            \"{{ segment.key }}\"{% if not loop.last %},{% endif %}\r\n                        {% endfor %}\r\n                    ]\r\n                }\r\n            }{% if not loop.last %},{% endif %}\r\n        {% endfor %}\r\n    ]\r\n}",
   "profiles":[
      {
         "segmentMembership":{
            "ups":{
               "segmentid1":{
                  "lastQualificationTime":"2021-06-17T12:08:07.870859Z",
                  "status":"existing"
               },
               "segmentid3":{
                  "lastQualificationTime":"2021-06-17T12:08:07.870860Z",
                  "status":"exited"
               },
               "segmentid2":{
                  "lastQualificationTime":"2021-06-17T12:08:07.870860Z",
                  "status":"realized"
               }
            }
         },
         "identityMap":{
            "email":[
               {
                  "id":"Email-gq3zZ"
               }
            ],
            "external_id":[
               {
                  "id":"external_id"
               }
            ]
         }
      }
   ]
}'

```

**Response**

The response returns the result of rendering the template, or any errors encountered.
A successful response returns HTTP status 200 with details of the exported data.
An unsuccessful response returns HTTP status 500 along with descriptions of the encountered errors.

```json

{
   "profiles":[
      {
         "identities":[
            {
               "type":"email",
               "id":"Email-gq3zZ"
            },
            {
               "type":"external_id",
               "id":"external_id"
            }
         ],
         "AdobeExperiencePlatformSegments":{
            "add":[
               "segmentid1",
               "segmentid2"
            ],
            "remove":[
               "segmentid3"
            ]
         }
      }
   ]
}

```

## API error handling {#api-error-handling}

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](https://experienceleague.adobe.com/docs/experience-platform/landing/troubleshooting.html?lang=en#api-status-codes) and [request header errors](https://experienceleague.adobe.com/docs/experience-platform/landing/troubleshooting.html?lang=en#request-header-errors) in the Platform troubleshooting guide.

## Next steps {#next-steps}

After reading this document, you now know how to use the message transformation template to generate exported profiles that match your destination's expected data format. Read [how to use Destination SDK to configure your destination](./configure-destination-instructions.md) to understand where this step fits into the process of configuring your destination.