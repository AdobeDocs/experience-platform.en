---
keywords: Experience Platform;data prep;data prep api;troubleshooting;API
title: Getting started with Data Prep API
topic: guide
---

# Getting started with the [!DNL Data Prep] API {#getting-started}

Using the [!DNL Data Prep] API, you can perform basic CRUD operations TEXT

Using the developer guide requires a working understanding of the various Adobe Experience Platform services involved in working with [!DNL Data Prep]. Before beginning to work with the [!DNL Data Prep] API, please review the documentation for the following services:

LINKS

The following sections provide additional information that you will need to know in order to successfully make calls to [!DNL Data Prep] API endpoints.

## Reading sample API calls

The [!DNL Data prep] API documentation provides example API calls to demonstrate how to properly format requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

## Required headers

The API documentation also requires you to have completed the [authentication tutorial](../../tutorials/authentication.md) in order to successfully make calls to [!DNL Platform] endpoints. Completing the authentication tutorial provides the values for each of the required headers in [!DNL Experience Platform] API calls, as shown below:

- `Authorization: Bearer {ACCESS_TOKEN}`
- `x-api-key: {API_KEY}`
- `x-gw-ims-org-id: {IMS_ORG}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. Requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

- `x-sandbox-name: {SANDBOX_NAME}`

For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

All requests with a payload in the request body (such as POST, PUT, and PATCH calls) must include a `Content-Type` header. Accepted values specific to each call are provided in the call parameters.

## Next steps

To begin making calls using the [!DNL Data Prep] API, select one of the available endpoint guides.