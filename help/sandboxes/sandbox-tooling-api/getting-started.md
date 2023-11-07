---
title: Getting Started with the Sandbox Tooling API
description: Use the Sandbox tooling API to examine artifacts and export and import a snapshot of sandbox configurations between sandboxes. Follow this guide to learn how to perform key operations using the API.
exl-id: 0b34d153-a603-4397-a375-9cc846efe23a
---
# Getting started with the sandbox tooling API {#getting-started}

This developer guide provides steps to help you use the sandbox tooling API to manage packages and tools in Adobe Experience Platform, and includes sample API calls for performing various operations.

## Reading sample API calls {#api-calls}

This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON data returned to the API response is also provided. For information on the conventions used in the documentation for sample API calls, see the section on [how to read example API calls](/help/landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

## Gather values for required headers {#headers}

This guide requires you to have completed the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en) in order to successfully make calls to Platform APIs. Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {ORG_ID}`

In addition to the authentication headers, all requests require a header that specifies the name of the sandbox the operation will take place in:

* `x-sandbox-name: {SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, and PATCH) require an additional header:

* `Content-Type: application/json`

## Next steps {#next-steps}

Now that you have gathered the required credentials, you can now continue to read the rest of the developer guide. Each section provides important information regarding their endpoints and demonstrate example API calls for performing CRUD operations. Each call includes the general API format, a sample request showing required headers and properly formatted payloads, and a sample response for a successful call.

See the following API tutorials to start making calls to the sandbox tooling API:

* [Packages endpoint](./packages.md)
* [Tools endpoint](./tools.md)
