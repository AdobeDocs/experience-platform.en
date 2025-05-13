---
title: Public Certificate Endpoint
description: Learn how to retrieve your public certificates using the /public-certificate endpoint of the MTLS Service API.
role: Developer
exl-id: 8369c783-e595-476f-9546-801cf4f10f71
---
# Public certificate endpoint

This guide explains how to use the public certificate endpoint to securely retrieve public certificates for your organization's Adobe applications. It includes a sample API call and detailed instructions to help developers authenticate and verify data exchanges.

## Getting started

Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including required headers and how to read example API calls.

## API paths {#paths}

The following information are the essential API paths you will need to use the mTLS Service API. These include the platform gateway URL, the base path for the API, and an example of a complete path for retrieving a public certificate.

- PLATFORM Gateway URL: `https://platform.adobe.io/`
- Base path for this API: `/data/core/mtls`
- Example of a complete path: `https://platform.adobe.io/data/core/mtls/v1/certificate/public-certificate`

## Retrieve your public certificates {#list}

You can retrieve the public certificates for any of your organization's Adobe applications by making a GET request to the `/v1/certificate/public-certificate` endpoint.

**API format**

```http
GET /v1/certificate/public-certificate
```

The following optional query parameters can be used when retrieving your public certificates.

| Query parameter | Description | Example |
| --------------- | ----------- | ------- |
| `page` | Specifies which page the results of your request will start from. | `page=5` |
| `limit` | The maximum number of public certificates you want retrieved per page. | `limit=20` |

{style="table-layout:auto"}

**Request**

A sample request to return the public certificates associated with your organization is seen in the collapsible section below.

+++Sample request

```shell
curl -X GET https://platform.adobe.io/data/core/mtls/v1/certificate/public-certificate
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' 
```

+++

**Response**

A successful response returns HTTP status 200 and lists the public certificates for your organization.

+++A sample successful response

```json
{
   "results":[
      {
         "certCommonName":"Adobe Experience Platform",
         "publicCertificate":"-----BEGIN CERTIFICATE-----\nMIIDQTCCAimgAwIBAgITBmyfACAfma......KJY5u89CjAwj\n-----END CERTIFICATE-----",
         "expiryDate":"2024-07-17T21:27:57.434Z"
      }
   ],
   "total":0,
   "count":0,
   "_links":{
      "next":{
         "href":"string",
         "templated":true
      },
      "prev":{
         "href":"string",
         "templated":true
      },
      "page":{
         "href":"string",
         "templated":true
      }
   }
}
```

| Property  |  Description |
| --- | --- |
| `certCommonName` | The common name (CN) of the certificate, which typically represents the name or identity of the server or entity the certificate is issued to.|
| `publicCertificate` | The actual public certificate in a string format, which is used for authenticating and encrypting communications.|
| `expiryDate` | The date and time when the public certificate will expire, formatted in ISO 8601 (UTC).|

{style="table-layout:auto"}

+++

## Next steps

After reading this guide, you now understand how to retrieve your public certificates using the Adobe Experience Platform API. To learn more about managing customer data to ensure compliance with regulations and organizational policies, see the [Data Governance overview](../home.md).

To test this API call, navigate to the [MTLS API reference page](https://developer.adobe.com/experience-platform-apis/references/mtls-service/) to interact with the Experience Platform API endpoints.
