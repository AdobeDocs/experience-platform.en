---
keywords: Experience Platform;home;popular topics;access control;api;getting started
solution: Experience Platform
title: Access Control API Guide
description: Access control in Adobe Experience Platform allows you to manage roles and permissions for various Platform capabilities by using the Adobe Admin Console. The following sections provide additional information that developers will need to know in order to successfully make calls to the Schema Registry API.
exl-id: 6fd956fb-ade4-48d3-843f-4c9a605945c9
---
# [!DNL Access Control] API guide

[!DNL Access control] for [!DNL Experience Platform] is administered through the [Adobe Admin Console](https://adminconsole.adobe.com). This functionality leverages product profiles in Admin Console, which link users with permissions and sandboxes. See the [access control overview](../home.md) for more information.

This developer guide provides information on how to format your requests to the [[!DNL Access Control API]](https://www.adobe.io/experience-platform-apis/references/access-control/), and covers the following operations:

- [List names of permissions and resource types](./permissions-and-resource-types.md)
- [View effective access policies for the current user](./effective-policies.md)

## Getting started

The following sections provide additional information that you will need to know in order to successfully make calls to the [!DNL Access Control] API.

### Reading sample API calls

This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{ORG_ID}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md).

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

- Content-Type: application/json

## Next steps

Now that you have gathered the required credentials, you can now continue to read the rest of the developer guide. Each section provides important information regarding their endpoints and demonstrate example API calls for performing CRUD operations. Each call includes the general API format, a sample request showing required headers and properly formatted payloads, and a sample response for a successful call.
