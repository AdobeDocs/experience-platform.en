---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;Segmentation Service;api;
solution: Experience Platform
title: Getting Started with the Segmentation Service API
topic-legacy: developer guide
description: The following documentation provides additional information that you need to know in order to successfully work with the Segmentation API.
exl-id: 41c0e50b-afed-45b8-85d7-a0c84ae090f5
---
# Getting started with the Segmentation Service API {#getting-started}

Adobe Experience Platform [!DNL Segmentation Service] allows you to build segments and generate audiences in Adobe Experience Platform from your [!DNL Real-time Customer Profile] data.

The developer guide requires a working understanding of the various [!DNL Experience Platform] services involved with using [!DNL Segmentation Service].

- [[!DNL Segmentation]](../home.md): Allows you to build audience segments from [!DNL Real-time Customer Profile] data.
- [[!DNL Experience Data Model (XDM) System]](../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data. To best make use of Segmentation, please ensure your data is ingested as profiles and events according to the [best practices for data modeling](../../xdm/schema/best-practices.md).
- [[!DNL Real-time Customer Profile]](../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
- [Sandboxes](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully work with the [!DNL Segmentation] API.

## Reading sample API calls

The [!DNL Segmentation Service] API documentation provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

## Required headers

The API documentation also requires you to have completed the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en) in order to successfully make calls to [!DNL Platform] endpoints. Completing the authentication tutorial provides the values for each of the required headers in [!DNL Experience Platform] API calls, as shown below:

- Authorization: `Bearer {ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{ORG_ID}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox in which the operation will take place:

- x-sandbox-name: `{SANDBOX_NAME}`
  
>[!NOTE]
>
>For more information on working with sandboxes in [!DNL Experience Platform], see the [sandboxes overview documentation](../../sandboxes/home.md).

## Next steps

To being making calls using the [!DNL Segmentation Service] API, select one of the available endpoint guides either using the left navigation or within the [developer guide overview](./overview.md)
