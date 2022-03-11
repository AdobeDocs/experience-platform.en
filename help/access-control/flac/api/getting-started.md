---
keywords: Experience Platform;home;popular topics;
title: Getting Started with the Field Level Access Control API
description: The Field Level Access Control API allows you to programmatically manage roles and policies within Adobe Experience Platform. Follow this guide to learn how to perform key operations using the API.
---
# Getting started with the Field Level Access Control API

This developer guide provides steps to help you use the Field Level Access Control API to manage sandboxes in Experience Platform, and includes sample API calls for performing various operations.

## Getting started with the Field Level Access Control API

In order to manage sandboxes for your IMS Organization, you must have Sandbox Administration permissions. Users without access permissions can only use the [available sandboxes endpoint](./available.md) to list active sandboxes for the current user. See the [access control overview](../../access-control/home.md) for more information on how to assign sandbox permissions for Experience Platform.

### Reading sample API calls

This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in the documentation for sample API calls, see the section on [how to read example API calls](../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

### Gather values for required headers

This guide requires you to have completed the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en) in order to successfully make calls to Platform APIs. Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {IMS_ORG}`

In addition to the authentication headers, all requests require a header that specifies the name of the sandbox the operation will take place in:

* `x-sandbox-name: {SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, and PATCH) require an additional header:

* `Content-Type: application/json`

## Next steps

Now that you have gathered the required credentials, you can now continue to read the rest of the developer guide. Each section provides important information regarding their endpoints and demonstrate example API calls for performing CRUD operations. Each call includes the general API format, a sample request showing required headers and properly formatted payloads, and a sample response for a successful call.
