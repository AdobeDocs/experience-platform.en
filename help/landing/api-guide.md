---
keywords: Experience Platform;home;popular topics;Adobe Experience Platform;api guide;platform api guide;introduction to platform;developer guide
solution: Experience Platform
title: Adobe Experience Platform API guide
topic: ui guide
description: Adobe Experience Platform provides API services that are closely linked to one another. This guide contains information on the available services, required headers for CRUD operations, error messages, Postman collections, and provides sample API calls.
---

# Getting started with Adobe Experience Platform APIs

Using an API endpoint, you can perform basic CRUD operations against data, such as configuring computed attributes, accessing data/entities, exporting data, deleting unneeded data or batches, and more. Adobe Experience Platform API services are closely linked to one another. The following guide is intended to outline the basics and fundamentals for getting started with Platform APIs. After reading this guide, you should be prepared to work with any of the individual Platform developer API guides such as [!DNL Flow Service], [!DNL Identity Service], and [!DNL Segmentation Service].

## Authentication and headers

In order to successfully make calls to Platform endpoints, you are required to have completed the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in Experience Platform API calls, as shown below:

- `Authorization: Bearer {ACCESS_TOKEN}`
- `x-api-key: {API_KEY}`
- `x-gw-ims-org-id: {IMS_ORG}`

### Sandbox header

All resources in Experience Platform are isolated to specific virtual sandboxes. Requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

- `x-sandbox-name: {SANDBOX_NAME}`

For more information on sandboxes in Platform, see the [sandbox overview documentation](../sandboxes/home.md). 

### Specifying the content type

All requests with a payload in the request body (such as POST, PUT, and PATCH calls) must include a `Content-Type` header. Accepted values specific to each call are provided in the call parameters. If a specific content type is needed, the service developer guide will provide an example.

## JSON fundamentals for Experience Platform APIs

Adobe Experience Platform APIs employ several underlying technologies and syntaxes that are important to understand in order to effectively manage JSON-based [!DNL Platform] resources.

To learn more about JSON including example JSON schema objects, visit the [Experience Platform API fundamentals](api-fundamentals.md) guide.

## Postman collections for Experience Platform APIs

Postman is a collaboration platform for API development that allows you to set up environments with preset variables, share API collections, streamline CRUD requests, and more. Most Platform API services have Postman collections which can be used to assist with making API calls.

### How to setup a Postman environment for Experience Platform

The following video guide outlines creating and setting up your Postman environment. The Postman environment will contain all your required headers for making API calls to the various collections provided below. Once set up, anytime a value expires such as an `ACCESS_TOKEN`, you can update the current value in the environment and this new value is used across all your collections.

>[!VIDEO](https://video.tv.adobe.com/v/28832)

### Importing a Postman collection

In order to utilize a postman collection, you need to have an environment set up. Once you have completed your environment setup, select the **Manage Environments** selector in the top-right corner.

![manage environment selector](./images/api-guide/environment-selector.png)

The manage environment popover appears and displays all your current environments. To import a collection, select the import button.

![import button](./images/api-guide/import-collection.png)

You are asked to choose a file to import. Select the JSON Postman collection file you wish to import. Once selected, the collection populates in the left rail under the collections tab.

![populated collection](./images/api-guide/imported-collection.png)

Each collection has different key value pairs that may be required to perform a successful CRUD operation. Please review the services [API developer guide](#api-guides) to learn about required values, tips, and see examples.

To learn more about Postman and its available features, visit the [Postman documentation](https://learning.postman.com/docs/getting-started/navigating-postman/).

### Postman collections

The following services have postman collections available. To download a Postman collection, select **Raw** from the Github page to load the raw JSON file in a new tab. Next, right-click and select **Save as** to save the file.

![raw Json](./images/api-guide/raw-collection.PNG)

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

## Platform API guides {#api-guides}

The following API guides are available:

- [[!DNL Access Control] API guide](.././access-control/api/getting-started.md)
- [Batch ingestion API guide](.././ingestion/batch-ingestion/api-overview.md)
- [[!DNL Catalog Service] API guide](.././catalog/api/getting-started.md)
- [[!DNL Data Access] API guide](.././data-access/api.md)
- [[!DNL Flow Service] API guide (sources)](.././sources/tutorials/api/create-dataset-base-connection.md)
- [[!DNL Identity Service] API guide](.././identity-service/api/getting-started.md)
- [[!DNL Observability Insights] API guide](.././observability/api/overview.md)
- [[!DNL Policy Service] API guide](.././data-governance/api/overview.md)
- [[!DNL Privacy Service] API guide](.././privacy-service/api/getting-started.md)
- [[!DNL Query Service] API guide](.././query-service/api/getting-started.md)
- [[!DNL Real-time Customer Profile] API guide](.././profile/api/overview.md)
- [Sandbox API guide](.././sandboxes/api/getting-started.md)
- [[!DNL Schema Registry] API guide (XDM)](.././xdm/api/overview.md)
- [[!DNL Segmentation Service] API guide](.././segmentation/api/overview.md)
- [[!DNL Sensei Machine Learning] API guide (Data Science Workspace)](.././data-science-workspace/api/getting-started.md)

## API reference documentation



## Error messages

## Reading sample API calls {#sample-api}

Request formats vary depending on the Platform API being used. The best way to learn how to structure your API calls is by following along with the examples provided in the documentation for the particular Platform service you are using.

The documentation for [!DNL Experience Platform] shows example API calls in two different ways. First, the call is presented in its **API format**, a template representation showing only the operation (GET, POST, PUT, PATCH, DELETE) and the endpoint being used (for example, `/global/classes`). Some templates also show the location of variables to help illustrate how a call should be formulated, such as `GET /{VARIABLE}/classes/{ANOTHER_VARIABLE}`.

The calls are then shown as cURL commands in a **Request**, which includes the necessary headers and full "base path" needed to successfully interact with the API. The base path should be pre-pended to all endpoints. For example, the aforementioned `/global/classes` endpoint becomes `https://platform.adobe.io/data/foundation/schemaregistry/global/classes`. You will see the API format / Request pattern throughout the documentation, and are expected to use the complete path shown in the example Request when making your own calls to Platform APIs.

### Example API request

The following is an example API request that demonstrates the format you will encounter in the documentation.

**API format**

The API format shows the operation (GET) and the endpoint being used. Variables are indicated by curly braces (in this case, `{CONTAINER_ID}`).

```http
GET /{CONTAINER_ID}/classes
```

**Request**

In this example request, the variables from the API format are given actual values in the request path. All required headers are shown as well, as either sample header values or variables where sensitive information (such as security tokens and access IDs) should be included.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/global/classes \
  -H 'Accept: application/vnd.adobe.xed-id+json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

The response illustrates what you would expect to receive following a successful call to the API, based on the request that was sent. Occasionally the response is truncated for space, meaning that you may see more information or additional information to that which is displayed in the sample.

```json
{
    "results": [
        {
            "title": "XDM ExperienceEvent",
            "$id": "https://ns.adobe.com/xdm/context/experienceevent",
            "meta:altId": "_xdm.context.experienceevent",
            "version": "1"
        },
        {
            "title": "XDM Individual Profile",
            "$id": "https://ns.adobe.com/xdm/context/profile",
            "meta:altId": "_xdm.context.profile",
            "version": "1"
        }
    ],
    "_links": {}
}
```

For more information on specific endpoints in Platform APIs, including required headers and request bodies, please see the [Platform API guides](#api-guides).

## Additional information

[Platform troubleshooting guide](troubleshooting.md)