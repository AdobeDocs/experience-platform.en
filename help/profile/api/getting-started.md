---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
title: Getting Started with the Real-Time Customer Profile API
type: Documentation
description: The Profile API getting started guide outlines the key concepts and basic functionality that you need to know in order to use Real-Time Customer Profile API endpoints to perform basic CRUD operations against Profile data.
role: Developer
exl-id: 7e30610a-a7e7-43ab-a45d-fd84ef6e36ef
TQID: https://experienceleague.adobe.com/RiJCMvzj44PaQGtgPK3bSUi9qax78MVieL-G5WLB4-Y
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
subfeature_v2:
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
---
# Getting started with the [!DNL Real-Time Customer Profile] API {#getting-started}

Using Real-Time Customer Profile API endpoints, you can perform basic CRUD operations against Profile data, such as configuring computed attributes, accessing entities, exporting Profile data, and deleting unneeded datasets or batches.

Using the developer guide requires a working understanding of the various Adobe Experience Platform services involved in working with [!DNL Profile] data. Before beginning to work with the [!DNL Real-Time Customer Profile] API, please review the documentation for the following services:

* [[!DNL Real-Time Customer Profile]](../home.md): Provides a unified, customer profile in real time based on aggregated data from multiple sources.
* [[!DNL Adobe Experience Platform Identity Service]](../../identity-service/home.md): Gain a better view of your customer and their behavior by bridging identities across devices and systems.
* [[!DNL Adobe Experience Platform Segmentation Service]](../../segmentation/home.md): Allows you to build audiences from Real-Time Customer Profile data.
* [[!DNL Experience Data Model (XDM)]](../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
* [[!DNL Sandboxes]](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Experience Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully make calls to [!DNL Profile] API endpoints.

## Reading sample API calls

The [!DNL Real-Time Customer Profile] API documentation provides example API calls to demonstrate how to properly format requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

## Required headers

The API documentation also requires you to have completed the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en) in order to successfully make calls to [!DNL Experience Platform] endpoints. Completing the authentication tutorial provides the values for each of the required headers in [!DNL Experience Platform] API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {ORG_ID}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. Requests to [!DNL Experience Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

* `x-sandbox-name: {SANDBOX_NAME}`

For more information on sandboxes in [!DNL Experience Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

All requests with a payload in the request body (such as POST, PUT, and PATCH calls) must include a `Content-Type` header. Accepted values specific to each call are provided in the call parameters.

## Next steps

To begin making calls using the [!DNL Real-Time Customer Profile] API, select one of the available endpoint guides.
