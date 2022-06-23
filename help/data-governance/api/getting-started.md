---
keywords: Experience Platform;home;popular topics;DULE;dule
solution: Experience Platform
title: Getting Started with the Policy Service API
topic-legacy: developer guide
description: The Policy Service API allows you to create and manage various resources related to Adobe Experience Platform Data Governance. This document provides an introduction to the core concepts you need to know before attempting to make calls to the Policy Service API.
exl-id: 5539976c-8433-45af-a147-2ab82ae308b2
---
# Getting started with the [!DNL Policy Service] API

The [!DNL Policy Service] API allows you to create and manage various resources related to Adobe Experience Platform Data Governance. This document provides an introduction to the core concepts you need to know before attempting to make calls to the [!DNL Policy Service] API.

## Prerequisites

Using the developer guide requires a working understanding of the the various [!DNL Experience Platform] services involved in working with Data Governance capabilities. Before beginning to work with the [!DNL Policy Service API], please review the documentation for the following services:

* [Data Governance](../home.md): The framework by which [!DNL Experience Platform] enforces data usage compliance.
* [[!DNL Experience Data Model (XDM) System]](../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
* [[!DNL Real-time Customer Profile]](../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
* [Sandboxes](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

## Reading sample API calls

The [!DNL Policy Service] API documentation provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

## Required headers

The API documentation also requires you to have completed the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en) in order to successfully make calls to [!DNL Platform] endpoints. Completing the authentication tutorial provides the values for each of the required headers in [!DNL Experience Platform] API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {ORG_ID}`

All resources in [!DNL Experience Platform], including those belonging to Data Governance, are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

* `x-sandbox-name: {SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

* `Content-Type: application/json`

## Core vs custom resources

Within the [!DNL Policy Service] API, all policies and marketing actions are referred to as either `core` or `custom` resources. 

`core` resources are those defined and maintained by Adobe, whereas `custom` resources are those created and maintained by your organization, and are therefore unique and visible solely to your IMS Organization. As such, listing and lookup operations (`GET`) are the only operations permitted on `core` resources, whereas listing, lookup and update operations (`POST`, `PUT`, `PATCH`, and `DELETE`) are available for `custom` resources.

## Next steps

To begin making calls using the Policy Service API, select one of the available endpoint guides.
