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

