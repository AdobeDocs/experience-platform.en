---
keywords: Experience Platform;home;popular topics;Adobe Experience Platform;user guide;ui guide;platform ui guide;introduction to platform;dashboard;
solution: Experience Platform
title: Adobe Experience Platform UI guide
topic: ui guide
description: Adobe Experience Platform 
---

# Getting started with Adobe Experience Platform APIs

Using an API endpoint, you can perform basic CRUD operations against data, such as configuring computed attributes, accessing data/entities, exporting data, deleting unneeded data or batches, and more. Adobe Experience Platform API services are closely linked to one another and depending on which service you wish to use, you may need additional unique values. The following guide is intended to outline the basics and fundamentals for using Platform APIs. After reading this guide, please review the getting started guide of the service you wish to use before proceeding.

## Authentication and headers

In order to successfully make calls to Platform endpoints, you are required to have completed the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in Experience Platform API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {IMS_ORG}`

### Sandbox header

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. Requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

* `x-sandbox-name: {SANDBOX_NAME}`

For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

### Specifying the content type

All requests with a payload in the request body (such as POST, PUT, and PATCH calls) must include a `Content-Type` header. Accepted values specific to each call are provided in the call parameters.

## Postman collections for Experience Platform APIs

Postman is a collaboration platform for API development that allows you to set up environments with preset variables, share API collections, streamline CRUD requests, and more. Most Platform API services have Postman collections which can be used to assist with making API calls.

### How to setup Postman for Experience Platform

The following video guide outlines creating and setting up your Postman environment. The Postman environment will contain all your required headers for making API calls to the various collections provided below. Once set up, anytime a value expires such as your access token, you can update the current value in the environment and this new value will be used across all your collections.

>[!VIDEO](https://video.tv.adobe.com/v/28832)

Once you have your environment set up, select the **Manage Environments** selector in the top-right corner.

![manage environment selector](./images/api-guide/environment-selector.png)

The manage environment popover appears and displays all your current environments. Next, select the import button.

![import button](./images/api-guide/import-collection.png)

You are asked to choose a file to import. Select the JSON Postman collection file you wish to import. Once selected, the collection will populate in the left rail under the collections tab.

![populated collection](./images/api-guide/imported-collection.png)

Each collection has different key value pairs that may be required. Please review the services [API developer guide](#api-guides) to learn more about any of the required values, examples, and tips.

To learn more about Postman and its available features, visit the [Postman documentation](https://learning.postman.com/docs/getting-started/navigating-postman/).

### Postman collections

There are a few ways to download a postman collection. 

- [Access Control Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Access%20Control%20API.postman_collection.json)
- [Catalog Service Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Catalog%20Service%20API.postman_collection.json)
- [Data Access Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Data%20Access%20API.postman_collection.json)
- [Data Ingestion Service Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Data%20Ingestion%20API.postman_collection.json)
- [Flow Service Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Flow%20Service%20API.postman_collection.json)
- [Identity Service Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Identity%20Service.postman_collection.json)
- [Mapping Service Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Mapping%20Service%20API%20Resource.postman_collection.json)
- [Observability Insights Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Observability%20Insights%20API.postman_collection.json)
- [Offer Decisioning Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Observability%20Insights%20API.postman_collection.json)
- [Policy Service Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Policy%20Service%20API.postman_collection.json)
- [Privacy Service Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Privacy%20Service%20API.postman_collection.json)
- [Query Service Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Query%20Service%20API.postman_collection.json)
- [Real-time Customer Profile Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Real-time%20Customer%20Profile%20API.postman_collection.json)
- [Sandbox API Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Sandbox%20API.postman_collection.json)
- [Schema Registry Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Schema%20Registry%20API.postman_collection.json)
- [Segmentation Service Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Segmentation%20Service%20API.postman_collection.json)
- [Sensei Machine Learning API Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Sensei%20Machine%20Learning%20API.postman_collection.json)

## Platform developer guides {#api-guides}


## Swagger documents

## Error messages

## Reading sample API calls

The [!DNL Real-time Customer Profile] API documentation provides example API calls to demonstrate how to properly format requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

## Additional information

[Platform troubleshooting guide](./troubleshooting.md)