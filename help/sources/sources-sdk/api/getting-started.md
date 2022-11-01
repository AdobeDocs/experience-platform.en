---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
solution: Experience Platform
title: Getting Started with Self-Serve Sources (Batch SDK)
topic-legacy: developer guide
description: This document provides an introduction to the prerequisite information you need to know before attempting to create a new source using Self-Serve Sources (Batch SDK).
exl-id: ba131442-ff20-4854-87fe-918aa313382d
---
# Getting Started with Self-Serve Sources (Batch SDK)

Self-Serve Sources (Batch SDK) allows you to integrate your own REST-based source to bring batch data to Adobe Experience Platform. This document provides an introduction to the core concepts you need to know before attempting to make calls to the [[!DNL Flow Service] API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/flow-service.yaml).

## Prerequisites

To use Self-Serve Sources (Batch SDK), you must ensure that you have access to an IMS Organization Sandbox provisioned with Adobe Experience Platform Sources.

This guide also requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

## Reading sample API calls

The Self-Serve Sources (Batch SDK) and [!DNL Flow Service] API documentation provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

## Gather values for required headers

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {ORG_ID}`

All resources in Platform, including those belonging to [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

* `x-sandbox-name: {SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in Platform, see the [sandbox documentation](../../../sandboxes/home.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

* `Content-Type: application/json`

## Next steps

To begin creating a new source with Self-Serve Sources (Batch SDK), see the tutorial on [creating a new source](./create.md).
