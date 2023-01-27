---
keywords: Experience Platform;home;popular topics;date range
solution: Experience Platform
title: Getting Started with the Observability Insights API
description: The Observability Insights API allows you to retrieve metric data for various Adobe Experience Platform features. This document provides an introduction to the core concepts you need to know before attempting to make calls to the Observability Insights API.
exl-id: 3b120bd6-155d-467e-b98e-05478f8a4cc5
---
# Getting started with the [!DNL Observability Insights] API

The [!DNL Observability Insights] API allows you to retrieve metric data for various Adobe Experience Platform features. This document provides an introduction to the core concepts you need to know before attempting to make calls to the [!DNL Observability Insights] API.

## Reading sample API calls

The [!DNL Observability Insights] API documentation provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on how to read example API calls in the [Experience Platform troubleshooting guide](../../landing/troubleshooting.md).

## Required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {ORG_ID}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in. For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md).

* `x-sandbox-name: {SANDBOX_NAME}`

## Next steps

To begin making calls using the [!DNL Observability Insights] API, proceed to the [metrics endpoint guide](./metrics.md).
