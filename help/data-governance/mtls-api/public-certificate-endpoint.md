---
title: Public Certificate Endpoint
description: Learn how to retrieve your public certificate using the Adobe Experience Platform API.
role: Developer
---
# Public Certificate endpoint

This guide explains how to use the public certificate endpoint in the Adobe Experience Platform API to securely retrieve public certificates for your organization. It includes a sample API call and detailed instructions to help developers authenticate and verify data exchanges.

## Getting started

Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including required headers and how to read example API calls.

## API paths

The following information are the essential API paths you will need to use the mTLS Service API. These include the platform gateway URL, the base path for the API, and an example of a complete path for retrieving a public certificate.

- PLATFORM Gateway URL: `https://platform.adobe.io/`
- Base path for this API: `/data/core/mtls`
- Example of a complete path: `https://platform.adobe.io/data/core/mtls/v1/certificate/public-certificate`

## Retrieve your public certificate {#list}

You can retrieve the public certificate associated with your organization by making a GET request to the `/v1/certificate/public-certificate` endpoint.

**API format**

```http
GET /v1/certificate/public-certificate
```

<!-- 
The following optional query parameters can be used when retrieving your public certificate.

| Query parameter | Description | Example |
| --------------- | ----------- | ------- |
| `page` | **Required** Specifies which page the results of your public certificate request will start from. | `page=5` |
| `limit` | **Required** The maximum number of public certificates you want retrieved per page. | `limit=20` |
 -->

**Request**

A sample request to return the public certificate associated with your organization is seen in the collapsible section below.

+++Sample request

```shell
curl -X GET https://experience.adobe.io/data/core/mtls/v1/certificate/public-certificate
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' 
```

+++

**Response**

A successful response returns HTTP status 200 with the public certificate for your organization.

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

After reading this guide, you now understand how to retrieve your public certificate using the Adobe Experience Platform API. 

<!-- To test this API call, navigate to the [MTLS API reference page]() to interact with the Experience Platform API endpoints. -->

<!-- Add link after developer page is live -->

