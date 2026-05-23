---
keywords: Experience Platform;home;popular topics;sandbox developer guide
solution: Experience Platform
title: Getting started with the Sandbox API
description: The Sandbox API allows developers to programmatically manage sandboxes in Adobe Experience Platform. Follow this guide to learn how to perform key operations using the API.
role: Developer
exl-id: 1ae27f30-2f89-4bfa-887d-a5def17b5cbc
TQID: https://experienceleague.adobe.com/DZk-wbm6bJeiqFbZhxaXQNvhXFwxrIAHqVJGlybbj-E
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: adf04a6a-050f-44bc-a52c-db79ccb22ebf
    internal-label: Administration
subfeature_v2:
  - id: a16ec9c0-4484-4842-b9a0-5504cde38e6a
    internal-label: Access control
  - id: a9eb38d5-9d89-492f-af4e-b968a07f2d91
    internal-label: Permissions
  - id: d21bd11d-08df-4cd6-ad8f-cb59a09de5c0
    internal-label: Sandboxes
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
    internal-label: Administration
---
# Getting started with the Sandbox API

Sandboxes in Adobe Experience Platform provide isolated development environments that allow you to test features, run experiments, and make custom configurations without impacting your production environment.

This developer guide provides steps to help you use the Sandbox API to manage sandboxes in Experience Platform, and includes sample API calls for performing various operations.

## Prerequisites

In order to manage sandboxes for your organization, you must have Sandbox Administration permissions. Users without access permissions can only use the [available sandboxes endpoint](./available.md) to list active sandboxes for the current user. See the [access control overview](../../access-control/home.md) for more information on how to assign sandbox permissions for Experience Platform.

### Reading sample API calls

This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in the documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

### Gather values for required headers

This guide requires you to have completed the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en) in order to successfully make calls to Experience Platform APIs. Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

* Authorization: Bearer `{ACCESS_TOKEN}`
* x-api-key: `{API_KEY}`
* x-gw-ims-org-id: `{ORG_ID}`

In addition to the authentication headers, all requests require a header that specifies the name of the sandbox the operation will take place in:

* x-sandbox-name: `{SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, and PATCH) require an additional header:

* Content-Type: application/json

## Next steps

Now that you have gathered the required credentials, you can now continue to read the rest of the developer guide. Each section provides important information regarding their endpoints and demonstrate example API calls for performing CRUD operations. Each call includes the general API format, a sample request showing required headers and properly formatted payloads, and a sample response for a successful call.
