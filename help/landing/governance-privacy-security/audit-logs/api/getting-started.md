---
title: Getting Started with the Audit Query API
description: The Audit Query API allows you to retrieve metric data for various Adobe Experience Platform features. This document provides an introduction to the core concepts you need to know before attempting to make calls to the Audit Query API.
role: Developer
feature: Audits, API
exl-id: 20eab0a8-98f7-4fee-8f91-88324e54ab18
---
# Getting started with the Audit Query API

Adobe Experience Platform allows you to audit user activity for various services and capabilities in the form of audit events logs. Each action recorded in a log contains metadata that indicates the action type, date and time, the email ID of the user who performed the action, and additional attributes relevant to the action type.

The Audit Query API allows you to audit user activity for various services and capabilities in the form of audit event logs. This document provides an introduction to the core concepts you need to know before attempting to make calls to the Audit Query API.

## Prerequisites

In order to manage audit events, you must have the **[!UICONTROL View User Activity Log]** access control permission granted (found under the [!UICONTROL Data Governance] category). To learn how to manage individual permissions for Experience Platform features, please refer to the [access control documentation](../../../../access-control/home.md).

### Reading sample API calls

This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in the documentation for sample API calls, see the section on [how to read example API calls](../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

### Gather values for required headers

This guide requires you to have completed the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en) in order to successfully make calls to Experience Platform APIs. Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

* Authorization: Bearer `{ACCESS_TOKEN}`
* x-api-key: `{API_KEY}`
* x-gw-ims-org-id: `{ORG_ID}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Experience Platform] APIs require a header that specifies the name of the sandbox the operation will take place in. For more information on sandboxes in [!DNL Experience Platform], see the [sandbox overview documentation](../../../../sandboxes/home.md).

* `x-sandbox-name: {SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, and PATCH) require an additional header:

* Content-Type: application/json

## Next steps

To begin making calls using the [!DNL Audit Query] API, please refer to the [events endpoint guide](./events.md) and the [export endpoint guide](./export.md).
