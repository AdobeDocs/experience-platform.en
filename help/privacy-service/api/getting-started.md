---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Privacy Service developer guide
description: Use the RESTful API to manage the personal data of your data subjects across Adobe Experience Cloud applications
topic: developer guide
---

# Privacy Service developer guide

Adobe Experience Platform Privacy Service provides a RESTful API and user interface that allow you to manage (access and delete) the personal data of your data subjects (customers) across Adobe Experience Cloud applications. Privacy Service also provides a central audit and logging mechanism that allows you to access the status and results of jobs involving Experience Cloud applications.

This guide covers how to use the Privacy Service API. For details on how to use the UI, see the [Privacy Service UI overview](../ui/overview.md). For a comprehensive list of all available endpoints in the Privacy Service API, please see the [API reference](https://www.adobe.io/apis/experiencecloud/gdpr/api-reference.html).

## Getting started

This guide requires a working understanding the following Experience Platform features:

* [Privacy Service](../home.md): Provides a RESTful API and user interface that allow you to manage access and delete requests from your data subjects (customers) across Adobe Experience Cloud applications.

The following sections provide additional information that you will need to know in order to successfully make calls to the Privacy Service API.

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md) in the Experience Platform troubleshooting guide.

### Gather values for required headers

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

* Authorization: Bearer `{ACCESS_TOKEN}`
* x-api-key: `{API_KEY}`
* x-gw-ims-org-id: `{IMS_ORG}`

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

* Content-Type: application/json

## Next steps

Now that you understand what headers to use, you are ready to begin making calls to the Privacy Service API. The document on [privacy jobs](privacy-jobs.md) walks through the various API calls you can make using the Privacy Service API. Each example call includes the general API format, a sample request showing required headers, and a sample response.
