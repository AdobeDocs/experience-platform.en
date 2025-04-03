---
description: This page exemplifies the API call used to create an audience template through Adobe Experience Platform Destination SDK.
title: Create an audience template
exl-id: 98d30002-d462-4008-9337-7de0cd608194
---
# Create an audience template

>[!IMPORTANT]
>
>**API endpoint**: `platform.adobe.io/data/core/activation/authoring/audience-templates`

For some destinations created using Destination SDK, you need to create an audience metadata configuration to programmatically create, update, or delete audience metadata in the destination. This page shows you how to use the `/authoring/audience-templates` API endpoint to create the configuration.

For a detailed description of the capabilities that you can configure through this endpoint, see [audience metadata management](../functionality/audience-metadata-management.md).

>[!IMPORTANT]
>
>All parameter names and values supported by Destination SDK are **case sensitive**. To avoid case sensitivity errors, please use the parameters names and values exactly as shown in the documentation.

## Getting started with audience template API operations {#get-started}

Before continuing, please review the [getting started guide](../getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Create an audience template {#create}

You can create a new audience template by making a `POST` request to the `/authoring/audience-templates` endpoint.

**API format**

```http
POST /authoring/audience-templates
```

+++Request

The following request creates a new audience template, configured by the parameters provided in the payload. The payload below includes all parameters accepted by the `/authoring/audience-templates` endpoint. Note that you do not have to add all parameters on the call and that the template is customizable, according to your API requirements.

```shell
curl -X POST https://platform.adobe.io/data/core/activation/authoring/audience-templates \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
  "metadataTemplate": {
    "name": "Test Webhook Audience Template",
    "create": {
      "url": "https://your-webhook-site/0bd222fa-8ae2-433b-8f0e-f2ce137b0ee4/{{customerData.customerID}}/segments",
      "httpMethod": "POST",
      "headers": [
        {
          "value": "application/json",
          "header": "Content-Type"
        },
        {
          "value": "Bearer {{authData.token}}",
          "header": "Authorization"
        }
      ],
      "requestBody": {
        "json": {
          "name": "{{segment.name}}",
          "type": "segment",
          "metadata": {
            "org_id": "{{destination.imsOrgId}}",
            "sandbox": "{{destination.sandboxName}}",
            "destination_id": "{{destination.id}}",
            "destination_name": "{{destination.name}}",
            "segmentEnrichmentAttributes": "{% set columns = [] %}{% for atr in segmentEnrichmentAttributes %}{% set columns = columns|merge([atr.source]) %}{% endfor %}{{ columns | toJson }}"
          },
          "external_id": "{{segment.id}}"
        }
      },
      "responseFields": [
        {
          "value": "{{headers.X-Request-Id}}",
          "name": "externalAudienceId"
        }
      ],
      "responseErrorFields": [
        {
          "value": "{{root}}",
          "name": "message"
        }
      ]
    },
    "update": {
      "url": "https://your-webhook-site/0bd222fa-8ae2-433b-8f0e-f2ce137b0ee4/{{customerData.customerID}}/segments/{{segment.alias}}",
      "httpMethod": "PUT",
      "headers": [
        {
          "value": "application/json",
          "header": "Content-Type"
        },
        {
          "value": "Bearer {{authData.token}}",
          "header": "Authorization"
        }
      ],
      "requestBody": {
        "json": {
          "name": "{{segment.name}}",
          "type": "segment",
          "metadata": {
            "org_id": "{{destination.imsOrgId}}",
            "sandbox": "{{destination.sandboxName}}",
            "destination_id": "{{destination.id}}",
            "destination_name": "{{destination.name}}",
            "segmentEnrichmentAttributes": "{% set columns = [] %}{% for atr in segmentEnrichmentAttributes %}{% set columns = columns|merge([atr.source]) %}{% endfor %}{{ columns | toJson }}"
          },
          "external_id": "{{segment.id}}"
        }
      },
      "responseFields": [
        {
          "value": "{{headers.X-Request-Id}}",
          "name": "externalAudienceId"
        }
      ],
      "responseErrorFields": [
        {
          "value": "{{root}}",
          "name": "message"
        }
      ]
    },
    "delete": {
      "url": "https://your-webhook-site/0bd222fa-8ae2-433b-8f0e-f2ce137b0ee4/{{customerData.customerID}}/segments/{{segment.alias}}",
      "httpMethod": "DELETE",
      "headers": [
        {
          "value": "Bearer {{authData.token}}",
          "header": "Authorization"
        }
      ],
      "responseErrorFields": [
        {
          "value": "{{root}}",
          "name": "message"
        }
      ]
    },
    "createDestination": {
      "url": "https://your-webhook-site/0bd222fa-8ae2-433b-8f0e-f2ce137b0ee4/{{customerData.customerID}}/createDestination",
      "httpMethod": "POST",
      "headers": [
        {
          "value": "application/json",
          "header": "Content-Type"
        },
        {
          "value": "Bearer {{authData.token}}",
          "header": "Authorization"
        }
      ],
      "requestBody": {
        "json": {
          "name": "{{destination.name}}",
          "type": "destination",
          "metadata": {
            "org_id": "{{destination.imsOrgId}}",
            "sandbox": "{{destination.sandboxName}}",
            "destination_id": "{{destination.id}}",
            "destination_name": "{{destination.name}}",
            "enrichmentAttributes": "{{destination.enrichmentAttributes}}"
          },
          "external_id": "{{destination.id}}"
        }
      },
      "responseFields": [
        {
          "value": "{{headers.X-Request-Id}}",
          "name": "externalAudienceId"
        }
      ],
      "responseErrorFields": [
        {
          "value": "{{root}}",
          "name": "message"
        }
      ]
    },
    "updateDestination": {
      "url": "https://your-webhook-site/0bd222fa-8ae2-433b-8f0e-f2ce137b0ee4/{{customerData.customerID}}/updateDestination",
      "httpMethod": "POST",
      "headers": [
        {
          "value": "application/json",
          "header": "Content-Type"
        },
        {
          "value": "Bearer {{authData.token}}",
          "header": "Authorization"
        }
      ],
      "requestBody": {
        "json": {
          "name": "{{destination.name}}",
          "type": "destination",
          "metadata": {
            "org_id": "{{destination.imsOrgId}}",
            "sandbox": "{{destination.sandboxName}}",
            "destination_id": "{{destination.id}}",
            "destination_name": "{{destination.name}}",
            "enrichmentAttributes": "{{destination.enrichmentAttributes}}"
          },
          "external_id": "{{destination.id}}"
        }
      },
      "responseFields": [
        {
          "value": "{{headers.X-Request-Id}}",
          "name": "externalAudienceId"
        }
      ],
      "responseErrorFields": [
        {
          "value": "{{root}}",
          "name": "message"
        }
      ]
    },
    "deleteDestination": {
      "url": "https://your-webhook-site/0bd222fa-8ae2-433b-8f0e-f2ce137b0ee4/{{customerData.customerID}}/deleteDestination",
      "httpMethod": "DELETE",
      "headers": [
        {
          "value": "Bearer {{authData.token}}",
          "header": "Authorization"
        }
      ],
      "responseErrorFields": [
        {
          "value": "{{root}}",
          "name": "message"
        }
      ]
    }
  },
  "validations":[
      {
         "field":"string",
         "regex":"string"
      }
   ]
}'
```

| Property | Type | Description |
| -------- | ----------- | ----------- |
| `name` | String | The name of the audience metadata template for your destination. This name will appear in any partner-specific error message in the Experience Platform user interface. |
| `url` | String | The URL and endpoint of your API, which is used for creating, updating, deleting, or validating audiences and/or dataflows in your platform. Two industry examples are: `https://adsapi.snapchat.com/v1/adaccounts/{{customerData.accountId}}/segments` and `https://api.linkedin.com/v2/dmpSegments/{{segment.alias}}`. | 
| `httpMethod` | String | The method used on your endpoint to programmatically create, update, delete, or validate the audience in your destination. For example: `POST`, `PUT`, `DELETE` | 
| `headers.header` | String | Specifies any HTTP headers that should be added to the call to your API. For example, `"Content-Type"` |
| `headers.value` | String | Specifies the value of HTTP headers that should be added to the call to your API. For example, `"application/x-www-form-urlencoded"` |
| `requestBody` | String | Specifies the content of the message body that should be sent to your API. The parameters that should be added to the `requestBody` object depend on which fields your API accepts. Refer to the [supported macros documentation](../functionality/audience-metadata-management.md#macros) to learn what you can include in the message body. |
| `responseFields.name` | String | Specify any response fields that your API returns when called. For an example, refer to the [template examples](../functionality/audience-metadata-management.md#examples) in the Audience metadata functionality document.|
| `responseFields.value` | String | Specify the value of any response fields that your API returns when called. |
| `responseErrorFields.name` | String | Specify any response fields that your API returns when called. For an example, refer to the [ template examples](../functionality/audience-metadata-management.md#examples) in the Audience metadata functionality document. |
| `responseErrorFields.value` | String | Parses any error messages returned on API call responses from your destination. These error messages will be surfaced to users in the Experience Platform user interface. |
| `validations.field` | String | Indicates if validations should be run for any fields before API calls are made to your destination. For example, you can use `{{validations.accountId}}` to validate the user's account ID. |
| `validations.regex` | String | Indicates how the field should be structured in order for the validation to pass.  |

{style="table-layout:auto"}

+++

+++Response

A successful response returns HTTP status 200 with details of your newly created audience template.

+++

## API error handling

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../../landing/troubleshooting.md#request-header-errors) in the Experience Platform troubleshooting guide.

## Next steps

After reading this document, you now know when to use audience templates and how to configure an audience template using the `/authoring/audience-templates` API endpoint. Read [how to use Destination SDK to configure your destination](../guides/configure-destination-instructions.md) to understand where this step fits into the process of configuring your destination.
