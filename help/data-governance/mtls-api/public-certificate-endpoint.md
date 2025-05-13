---
title: Public Certificate Endpoint
description: Learn how to retrieve your public certificates using the /public-certificate endpoint of the MTLS Service API.
role: Developer
exl-id: 8369c783-e595-476f-9546-801cf4f10f71
---
# Public certificate endpoint

>[!NOTE]
>
>Adobe no longer supports static download of public mTLS certificates. Use this API to retrieve valid certificates for your integrations. Automated retrieval is now required to avoid service disruptions.

This guide explains how to use the public certificate endpoint to securely retrieve public certificates for your organization's Adobe applications. It includes a sample API call and detailed instructions to help developers authenticate and verify data exchanges.

## Getting started

Before continuing, review the [getting started guide](./getting-started.md) for important details about required headers and how to interpret example API calls.

## API paths {#paths}

The following information are the essential API paths you will need to use the mTLS Service API. These include the platform gateway URL, the base path for the API, and an example of a complete path for retrieving a public certificate.

- PLATFORM Gateway URL: `https://platform.adobe.io/`
- Base path for this API: `/data/core/mtls`
- Example of a complete path: `https://platform.adobe.io/data/core/mtls/v1/certificate/public-certificate`

## Retrieve your public certificates {#list}

Make a GET request to the `/v1/certificate/public-certificate` endpoint to retrieve the public certificates for any of your organization's Adobe applications.

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

## Certificate lifecycle automation {#certificate-lifecycle-automation}

Adobe automates the lifecycle of public mTLS certificates to ensure continuity and reduce service disruptions.

- Certificates are reissued 60 days before expiration.
- Certificates are revoked 30 days before expiration.

>[!NOTE]
>
>These timelines will shorten over time in alignment with [CA/B Forum guidelines](https://www.digicert.com/blog/tls-certificate-lifetimes-will-officially-reduce-to-47-days), which aim to reduce certificate lifetimes to a maximum of 47 days.

You must update your integrations to support automated retrieval via the API. Do not rely on manual certificate downloads or static copies, as these may result in expired or revoked certificates.

## Next steps

After retrieving your public certificates using the API, update your integrations to regularly call this endpoint before certificates expire. To test this call interactively, visit the [MTLS API reference page](https://developer.adobe.com/experience-platform-apis/references/mtls-service/). For broader guidance on certificate-based integrations, see the [Data encryption in Adobe Experience Platform overview](../../landing/governance-privacy-security/encryption) or the [Data Governance overview](../home.md).
