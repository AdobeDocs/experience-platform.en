---
keywords: Experience Platform;home;popular topics;Adobe Experience Platform;api guide;platform api guide;introduction to platform;developer guide
solution: Experience Platform
title: Adobe Experience Platform API guide
topic: api guide
description: Adobe Experience Platform provides API services that are closely linked to one another. This guide contains information on the available services, required headers for CRUD operations, error messages, Postman collections, and provides sample API calls.
---

# Getting started with Adobe Experience Platform APIs

Using an API endpoint, you can perform basic CRUD (Create, Read, Update, Delete) operations against data, such as configuring computed attributes, accessing data/entities, exporting data, deleting unneeded data or batches, and more. Adobe Experience Platform API services are closely linked to one another. The following guide is intended to outline the basics and fundamentals for getting started with Platform APIs. After reading this guide, you should be prepared to work with any of the individual Platform developer API guides such as [!DNL Flow Service], [!DNL Identity Service], and [!DNL Segmentation Service].

## Authentication and headers

In order to successfully make calls to Platform endpoints, you are required to complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in Experience Platform API calls, as shown below:

- `Authorization: Bearer {ACCESS_TOKEN}`
- `x-api-key: {API_KEY}`
- `x-gw-ims-org-id: {IMS_ORG}`

### Sandbox header

All resources in Experience Platform are isolated to specific virtual sandboxes. Requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

- `x-sandbox-name: {SANDBOX_NAME}`

For more information on sandboxes in Platform, see the [sandbox overview documentation](../sandboxes/home.md). 

### Specifying the content type

All requests with a payload in the request body (such as POST, PUT, and PATCH calls) must include a `Content-Type` header. Accepted values specific to each call are provided in the call parameters. If a specific content type is needed, the [individual Platform services guides](#api-guides) will provide an example.

## JSON fundamentals for Experience Platform APIs

Adobe Experience Platform APIs employ several underlying technologies and syntaxes that are important to understand in order to effectively manage JSON-based Platform resources.

To learn more about JSON, including example JSON schema objects, visit the [Experience Platform API fundamentals](api-fundamentals.md) guide.

## Platform API guides {#api-guides}

| API guide | Description |
| --- | --- |
| [[!DNL Access Control] API guide](.././access-control/api/getting-started.md) |  The [!DNL Access Control] API endpoint can retrieve current policies in effect for a user on given resources within a specified sandbox. All other access control capabilities are provided through the [Adobe Admin Console](https://adminconsole.adobe.com/). |
| [Batch ingestion API guide](.././ingestion/batch-ingestion/api-overview.md) | The Adobe Experience Platform [!DNL Data Ingestion] API allows you to ingest data into Platform as batch files. Data being ingested can be the profile data from a flat file in a CRM system (such as a Parquet file), or data that conforms to a known schema in the Experience Data Model (XDM) registry. |
| [[!DNL Catalog Service] API guide](.././catalog/api/getting-started.md) | The [!DNL Catalog Service] API allows developers to manage dataset metadata in Adobe Experience Platform. This includes data locations, processing stages, errors that occurred during processing, and data reports.|
| [[!DNL Data Access] API guide](.././data-access/api.md) | The [!DNL Data Access] API allows developers to retrieve information on ingested datasets within Experience Platform. This includes accessing and downloading dataset files, retrieving header information, listing failed and succeeded batches, and downloading preview CSV / Parquet files. |
| [[!DNL Flow Service] API guide (sources)](.././sources/tutorials/api/create-dataset-base-connection.md) | The [!DNL Flow Service] API is used to collect and centralize your data from various disparate sources and is used to create and activate data to various destinations within Adobe Experience Platform. The service provides a RESTful API from which all supported sources are connectable. |
| [[!DNL Identity Service] API guide](.././identity-service/api/getting-started.md) | The [!DNL Identity Service] API allows developers to manage the cross-device, cross-channel, and near real-time identification of your customers using identity graphs in Adobe Experience Platform. |
| [[!DNL Observability Insights] API guide](.././observability/api/overview.md) | [!DNL Observability Insights] is a RESTful API that allows developers to expose key observability metrics in Adobe Experience Platform. These metrics provide insights into Platform usage statistics, health-checks for Platform services, historical trends, and performance indicators for various Platform functionalities. |
| [[!DNL Policy Service] API guide](.././data-governance/api/overview.md) | The [!DNL Policy Service] API allows developers to manage data usage labels and policies in Experience Platform. |
| [[!DNL Privacy Service] API guide](.././privacy-service/api/getting-started.md) | The [!DNL Privacy Service] API allows developers to create and manage customer requests to access or delete their personal data across Experience Cloud applications, in compliance with legal privacy regulations. |
| [[!DNL Query Service] API guide](.././query-service/api/getting-started.md) | The [!DNL Query Service] API allows developers to query their Adobe Experience Platform data using standard SQL. |
| [[!DNL Real-time Customer Profile] API guide](.././profile/api/overview.md) | The Real-time Customer Profile API allows developers to explore and work with Profile data, including viewing profiles, creating and updating merge policies, exporting or sampling Profile data, and deleting Profile data that is no longer required or was added in error. |
| [Sandbox API guide](.././sandboxes/api/getting-started.md) | The Sandbox API allows developers to programmatically manage isolated virtual sandbox environments in Adobe Experience Platform. |
| [[!DNL Schema Registry] API guide (XDM)](.././xdm/api/overview.md) | The [!DNL Schema Registry] API allows developers to programmatically manage all schemas and related Experience Data Model (XDM) resources within Adobe Experience Platform. |
| [[!DNL Segmentation Service] API guide](.././segmentation/api/overview.md) | The [!DNL Segmentation Service] API allows developers to programmatically manage segmentation operations in Adobe Experience Platform. This includes building segments and generating audiences from your Real-time Customer Profile data. |
| [[!DNL Sensei Machine Learning] API guide (Data Science Workspace)](.././data-science-workspace/api/getting-started.md) | The [!DNL Sensei Machine Learning] API provides a mechanism for data scientists to organize and manage machine learning (ML) services from algorithm onboarding, experimentation, and to service deployment. |

For more information on specific endpoints and operations available for each service, please see the [API Reference documentation](http://www.adobe.com/go/platform-api-reference-en) on Adobe I/O.

## Postman collections for Experience Platform APIs

Postman is a collaboration platform for API development that allows you to set up environments with preset variables, share API collections, streamline CRUD requests, and more. Most Platform API services have Postman collections which can be used to assist with making API calls.

### How to set up a Postman environment for Experience Platform

The following video guide outlines creating and setting up your Postman environment. The Postman environment will contain all your required headers for making API calls to the various collections provided below. Once set up, any time a value expires, such as an `ACCESS_TOKEN`, you can update the current value in the environment and this new value is used across all your collections.

>[!VIDEO](https://video.tv.adobe.com/v/28832)

### Import a Postman collection

In order to utilize a Postman collection, you need to have an environment set up. Once you have completed your environment setup, select the **[!DNL Manage Environments]** selector in the top-right corner.

![manage environment selector](./images/api-guide/environment-selector.png)

The manage environment popover appears and displays all your current environments. To import a collection, select the import button.

![import button](./images/api-guide/import-collection.png)

You are asked to choose a file to import. Select the JSON Postman collection file you wish to import. Once selected, the collection populates in the left rail under the collections tab.

![populated collection](./images/api-guide/imported-collection.png)

Each collection has different key value pairs that may be required to perform a successful CRUD operation. Please review the services [API developer guide](#api-guides) to learn about required values, tips, and see examples.

To learn more about Postman and its available features, visit the [Postman documentation](https://learning.postman.com/docs/getting-started/navigating-postman/).

### Generate an access token with Postman for non-production use

>[!WARNING]
>
>As noted in the Adobe I/O access token generation Postman collection, the denoted generation methods are suitable for **non-production use**. Local signing loads a JavaScript library from a 3rd-party host, and remote signing sends the private key to an Adobe owned and operated web service. While Adobe does not store this private key, production keys should never be shared with anyone.

The video below uses the [Adobe IO Access Token generation collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/ims/Adobe%20IO%20Access%20Token%20Generation.postman_collection.json) which can be downloaded from the public GitHub repository.

>[!VIDEO](https://video.tv.adobe.com/v/29698/?quality=12&learn=on)

### Postman collections

The following services have Postman collections available. To download a Postman collection, select **[!DNL Raw]** from the GitHub page to load the raw JSON file in a new tab. Then, right-click and select **[!DNL Save as]** to save the file to a local destination of your choice.

![raw Json](./images/api-guide/raw-collection.PNG)

- [[!DNL Access Control] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Access%20Control%20API.postman_collection.json)
- [[!DNL Catalog Service] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Catalog%20Service%20API.postman_collection.json)
- [[!DNL Data Access] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Data%20Access%20API.postman_collection.json)
- [[!DNL Data Ingestion] Service Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Data%20Ingestion%20API.postman_collection.json)
- [[!DNL Flow Service] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Flow%20Service%20API.postman_collection.json)
- [[!DNL Identity Service] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Identity%20Service.postman_collection.json)
- [[!DNL Mapping Service] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Mapping%20Service%20API%20Resource.postman_collection.json)
- [[!DNL Observability Insights] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Observability%20Insights%20API.postman_collection.json)
- [[!DNL Offer Decisioning] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Observability%20Insights%20API.postman_collection.json)
- [[!DNL Policy Service] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Policy%20Service%20API.postman_collection.json)
- [[!DNL Privacy Service] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Privacy%20Service%20API.postman_collection.json)
- [[!DNL Query Service] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Query%20Service%20API.postman_collection.json)
- [Real-time Customer Profile Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Real-time%20Customer%20Profile%20API.postman_collection.json)
- [Sandbox API Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Sandbox%20API.postman_collection.json)
- [[!DNL Schema Registry] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Schema%20Registry%20API.postman_collection.json)
- [[!DNL Segmentation Service] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Segmentation%20Service%20API.postman_collection.json)
- [[!DNL Sensei Machine Learning] API Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Sensei%20Machine%20Learning%20API.postman_collection.json)

## Error messages

The [Platform troubleshooting guide](troubleshooting.md#errors-and-troubleshooting) provides a list of errors that you may encounter when using any Experience Platform service. 

For troubleshooting guides on individual Platform services, see the [service troubleshooting directory](troubleshooting.md#service-troubleshooting-directory).

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

In this example request, the variables from the API format are given actual values in the request path. Additionally, all required headers are shown as either sample header values or variables where sensitive information (such as security tokens and access IDs) should be included.

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

## Next steps

Now that you have the required values needed to make API calls on Adobe Experience Platform, select an API endpoint you wish to explore from the [Platform API guides table](#api-guides).