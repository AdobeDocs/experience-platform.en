---
title: Create and Activate an External Audience
type: Tutorial
description: Learn how to create an external audience in Adobe Experience Platform using the Experience Platform APIs.
---

# Create and activate an external audience using the API

This tutorial walks through the steps required to create an external audience using the Adobe Experience Platform APIs.

## Getting started

This tutorial requires a working understanding of the various Experience Platform services involved in creating an external audience. Before beginning this tutorial, please read the documentation for the following services:

- [Sources](../../sources/home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services.
- [[!DNL Adobe Experience Platform Segmentation Service]](../home.md): Allows you to build audiences from the external data.
- [Destinations](../../destinations/home.md): Destinations are pre-built integrations with commonly used applications that allow for the seamless activation of data from Experience Platform for cross-channel marketing campaigns, email campaigns, targeted advertising, and more.

### Required headers

This tutorial also requires you to have completed the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en) in order to successfully make calls to [!DNL Experience Platform] APIs. Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{ORG_ID}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. Requests to [!DNL Experience Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in [!DNL Experience Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

All POST, PUT, and PATCH requests require an additional header:

- Content-Type: application/json

## Prepare the external audience {#prepare}

Before you can create an external audience within Experience Platform, you'll need to prepare the CSV file that contains the audience data.

Ensure your CSV file contains **at least** one column with an identity value such as an ECID, email ID, or CRM ID. Additionally, make sure contains all the enrichment attributes you'll need for segmentation and activation.

You'l also need to make sure that the file conforms to your Experience Platform schema's requirements. For more information on creating a schema, read either the [tutorial on creating a schema using the API](/help/xdm/tutorials/create-schema-api.md) or the [tutorial on creating a schema using the UI](/help/xdm/tutorials/create-schema-ui.md).

After you've confirmed your CSV file contains all the information you need and conforms to the schema, you'll need to upload the CSV file to your cloud storage provider so you can use sources to ingest the data into Experience Platform. For more information on using a cloud storage source, read either the [tutorial on exploring cloud storage options using the API](/help/sources/tutorials/api/explore/cloud-storage.md) or the [sources overview](/help/sources/home.md#cloud-storage).

## Create an external audience {#create}

After preparing your CSV file, you can now start the process of creating the external audience.

You can create an external audience by making a POST request to the `/external-audience/` endpoint.

When making this request, you'll need to specify the following information:

- The name of the audience
- A description for the audience
- The corresponding fields between the CSV and the schema
- The source specification information
  - This includes the file path of the CSV file for ingestion

+++Request

```shell
curl -X POST https://platform.adobe.io/data/core/ais/external-audience/ \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
        "name": "Sample external audience",
        "description": "A sample version of an external audience",
        "fields": [
            {
                "name": "ppid",
                "type": "string",
                "identityNs": "email"
            },
            {
                "name": "list_id",
                "type": "string",
                "labels": ["core/C2", "custom/deep"]
            },
            {
                "name": "delete",
                "type": "number"
            },
            {
                "name": "process_consent",
                "type": "string"
            }
        ],
        "sourceSpec": {
            "params": {
                "path": "activation/sample-source/example.csv",
                "type": "file",
                "sourceType": "Cloud Storage",
                "baseConnectionId": "1d1d4bc5-b527-46a3-9863-530246a61b2b"
            }
        },
        "ttlInDays": "40",
        "labels": ["core/C1"],
        "audienceType": "people",
        "originName": "CUSTOM_UPLOAD"
    }'
```

+++

