---
solution: Experience Platform
title: Getting Started with the Unified Tags API
description: The following documentation provides additional information that you need to know in order to successfully work with the Unified Tags API.
role: Developer
exl-id: 8f33707f-b46d-4054-802c-9e42ecabd9ba
---
# Getting started with the Unified Tags API {#getting-started}

The Unified Tags API lets you categorize and manage your business objects within Adobe Experience Platform.

The following sections provide additional information that you will need to know in order to successfully work with the Unified Tags API.

## Reading sample API calls

The Unified Tags API documentation provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the  Experience Platform troubleshooting guide.

## Required headers

The API documentation also requires you to have completed the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en) in order to successfully make calls to Experience Platform endpoints. Completing the authentication tutorial provides the values for each of the required headers in Experience Platform API calls, as shown below:

- Authorization: `Bearer {ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{ORG_ID}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Experience Platform] APIs require a header that specifies the name of the sandbox in which the operation will take place:

- x-sandbox-name: `{SANDBOX_NAME}`
  
>[!NOTE]
>
>For more information on working with sandboxes in [!DNL Experience Platform], see the [sandboxes overview documentation](../../sandboxes/home.md).

## Next steps

To being making calls using the Unified Tags API, select one of the available endpoint guides either using the left navigation or within the [developer guide overview](./overview.md)
