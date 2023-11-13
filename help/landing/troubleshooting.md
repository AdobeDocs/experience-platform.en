---
keywords: Experience Platform;home;popular topics;API error codes;API error code;error code API;error codes API;API request error;API troubleshooting;API error
solution: Experience Platform
title: Adobe Experience Platform FAQ and Troubleshooting Guide
description: Find answers to frequently asked questions and a guide for troubleshooting common errors in Adobe Experience Platform.
landing-page-description: Find answers to frequently asked questions and a guide for troubleshooting common errors in Adobe Experience Platform.
short-description: Find answers to frequently asked questions and a guide for troubleshooting common errors in Experience Platform.
type: Documentation
exl-id: 3e6d29aa-2138-421b-8bee-82b632962c01
---
# [!DNL Platform] FAQ and troubleshooting guide

This document provides answers to frequently asked questions about Adobe Experience Platform, as well as a high-level troubleshooting guide for common errors that may be encountered in any [!DNL Experience Platform] API. For troubleshooting guides on individual [!DNL Platform] services, see the [service troubleshooting directory](#service-troubleshooting-directory) below.

## FAQ {#faq}

The following is a list of answers to frequently asked questions about Adobe Experience Platform.

## What are [!DNL Experience Platform] APIs? {#what-are-experience-platform-apis}

[!DNL Experience Platform] offers multiple RESTful APIs that use HTTP requests to access [!DNL Platform] resources. These Service APIs each expose multiple endpoints, and allow you to perform operations to list (GET), lookup (GET), edit (PUT and/or PATCH), and delete (DELETE) resources. For more information on specific endpoints and operations available for each service, please see the [API Reference documentation](https://www.adobe.com/go/platform-api-reference-en) on Adobe I/O.

## How do I format an API request? {#how-do-i-format-an-api-request}

Request formats vary depending on the [!DNL Platform] API being used. The best way to learn how to structure your API calls is by following along with the examples provided in the documentation for the particular [!DNL Platform] service you are using.

For more information on formating API requests, please visit the Platform API getting started guide [reading sample API calls](./api-guide.md#sample-api) section.

## What is my organization? {#what-is-my-ims-organization}

An organization is an an Adobe representation of a customer. Any licensed Adobe solutions are integrated with this customer organization. When an organization is entitled to [!DNL Experience Platform], it can assign access to developers. The organization ID (`x-gw-ims-org-id`) represents the organization that an API call should be executed for, and is therefore required as a header in all API requests. This ID can be found through the [Adobe Developer Console](https://www.adobe.com/go/devs_console_ui): in the **Integrations** tab, navigate to the **Overview** section for any particular integration to find the ID under **Client Credentials**. For a step-by-step walkthrough of how to authenticate into [!DNL Platform], see the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en).

## Where can I find my API key? {#where-can-i-find-my-api-key}

An API key is required as a header in all API requests. It can be found through the [Adobe Developer Console](https://www.adobe.com/go/devs_console_ui). Within the console, on the **Integrations** tab, navigate to the **Overview** section for a specific integration and you will find the key under **Client Credentials**. For a step-by-step walkthrough of how to authenticate to [!DNL Platform], see the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en).

## How do I get an access token? {#how-do-i-get-an-access-token}

Access tokens are required in the Authorization header of all API calls. They can be generated using a CURL command, provided you have access to an integration for an organization. Access tokens are only valid for 24 hours, after which a new token must be generated to continue using the API. For details on generating access tokens, see the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en).

## How do I use query parameters? {#how-do-i-user-query-parameters}

Some [!DNL Platform] API endpoints accept query parameters to locate specific information and filter the results returned in the response. Query parameters are appended to request paths with a question mark (`?`) symbol, followed by one or more query parameters using the format `paramName=paramValue`. When combining multiple parameters in a single call, you must use an ampersand (`&`) to separate individual parameters. The following example demonstrates how a request that uses multiple query parameters is represented in the documentation.

Examples of commonly used query parameters include:

```http
GET /tenant/schemas?orderby=title
GET /datasets?limit=36&start=10
GET /batches?createdAfter=1559775880000&orderBy=desc:created
```

For detailed information on which query parameters are available for a specific service or endpoint, please review the service-specific documentation.

## How do I indicate a JSON field to update in a PATCH request? {#how-do-i-indicate-a-json-field-to-update-in-a-patch-request}

Many PATCH operations in [!DNL Platform] APIs use [JSON Pointer](https://tools.ietf.org/html/rfc6901) strings to indicate JSON properties to update. These are typically included in request payloads using [JSON Patch](https://tools.ietf.org/html/rfc6902) format. See the [API fundamentals guide](api-fundamentals.md) for detailed information on required syntax for these technologies.

## Can I use Postman to make calls to [!DNL Platform] APIs? {#how-do-i-use-postman-to-make-calls-to-platform-apis}

[Postman](https://www.postman.com/) is a useful tool for visualizing calls to RESTful APIs. The [Platform API getting started guide](api-guide.md) contains a video and instructions for importing Postman collections. Additionally, a list of Postman collections for each service is provided.

## What are the system requirements for [!DNL Platform]? {#what-are-the-system-requirements-for-platform}

Depending on whether you are using the UI or API, the following system requirements apply:

**For UI based operations:**
- A modern, standard web browser. While the latest version of [!DNL Chrome] is recommended, current and previous major releases of [!DNL Firefox], [!DNL Internet Explorer], and Safari are also supported.
    - Each time a new major version is released, [!DNL Platform] starts supporting the most recent version while support for the third most recent version is dropped.
- All browsers must have cookies and JavaScript enabled.

**For API and developer interactions:**
- A development environment to develop for REST, streaming, and Webhook integrations.

## Errors and troubleshooting {#errors-and-troubleshooting}

The following is a list of errors that you may encounter when using any [!DNL Experience Platform] service. For troubleshooting guides on individual [!DNL Platform] services, see the [service troubleshooting directory](#service-troubleshooting-directory) below.

## API status codes {#api-status-codes}

The following status codes may be encountered on any [!DNL Experience Platform] API. Each has a variety of causes, therefore the explanations given in this section are general in nature. For more details regarding specific errors in individual [!DNL Platform] services, please see the [service troubleshooting directory](#service-troubleshooting-directory) below.

|Status Code | Description | Possible Causes|
|--- | --- | ---|
|400 | Bad request | The request was improperly constructed, missing key information, and/or contained incorrect syntax.|
|401 | Authentication failed | The request did not pass an authentication check. Your access token may be missing or invalid. See the [OAuth token errors](#oauth-token-is-missing) section below for more details.|
|403 | Forbidden | The resource was found, but you do not have the right credentials to view it. <br> A likely cause of this error is that you might not have the required [access control permissions](/help/access-control/home.md) to access or edit the resource. Read how to [get the necessary attribute-based access control permissions](/help/landing/api-authentication.md#get-abac-permissions) to use Platform APIs. </p> |
|404 | Not found | The requested resource could not be found on the server. The resource may have been deleted, or the requested path was entered incorrectly.|
|500 | Internal server error | This is a server-side error. If you are making many simultaneous calls, you may be reaching the API limit and need to filter your results. (See the [!DNL Catalog Service] API developer guide sub-guide on [filtering data](../catalog/api/filter-data.md) to learn more.) Wait for a moment before trying your request again, and contact your administrator if the problem persists.|

## Request header errors {#request-header-errors}

All API calls in [!DNL Platform] require specific request headers. To see which headers are required for individual services, please see the [API Reference documentation](https://www.adobe.com/go/platform-api-reference-en). To find the values for the required authentication headers, see the [Authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). If any of these headers are missing or invalid when making an API call, the following errors may occur.

### OAuth token is missing {#oauth-token-is-missing}

```json
{
    "error_code": "403010",
    "message": "Oauth token is missing."
}
```

This error message displays when an `Authorization` header is missing from an API request. Ensure that the Authorization header is included with a valid access token before trying again.

### OAuth token is not valid {#oauth-token-is-not-valid}

```json
{
    "error_code": "401013",
    "message": "Oauth token is not valid"
}
```

This error message displays when the provided access token in the `Authorization` header is not valid. Ensure that the token has been entered correctly, or [generate a new token](https://www.adobe.com/go/platform-api-authentication-en) in the Adobe I/O Console.

### API key is required {#api-key-is-required}

```json
{
    "error_code": "403000",
    "message": "Api Key is required"
}
```

This error message displays when an API key header (`x-api-key`) is missing from an API request. Ensure that the header is included with a valid API key before trying again.

### API key is invalid {#api-key-is-invalid}

```json
{
    "error_code": "403003",
    "message": "Api Key is invalid"
}
```

This error message displays when the value of the provided API key header (`x-api-key`) is invalid. Ensure that you have entered the key correctly before trying again. If you do not know your API key, you can find it in the [Adobe I/O Console](https://console.adobe.io): in the **Integrations** tab, navigate to the **Overview** section for a specific integration to find the API key under **Client Credentials**.

### Missing header {#missing-header}

```json
{
    "error_code": "400003",
    "message": "Missing header"
}
```

This error message displays when an organization header (`x-gw-ims-org-id`) is missing from an API request. Ensure that the header is included with the ID of your organization before trying again.

### Profile is not valid {#profile-is-not-valid}

```json
{
    "error_code": "403025",
    "message": "Profile is not valid"
}
```

This error message displays when the user or Adobe I/O integration (identified by the [access token](#how-do-i-get-an-access-token) in the `Authorization` header) is not entitled to make calls to [!DNL Experience Platform] APIs for the organization provided in the `x-gw-ims-org-id` header. Ensure that you have provided the correct ID for your organization in the header before trying again. If you do not know your organization ID, you can find it in the [Adobe I/O Console](https://console.adobe.io): in the **Integrations** tab, navigate to the **Overview** section for a specific integration to find the ID under **Client Credentials**.

### Refresh etag error {#refresh-etag-error}

```json
{
"errorMessage":"Supplied version=[\\\\\\\"a200a2a3-0000-0200-0000-123178f90000\\\\\\\"] does not match the current version on entity=[\\\\\\\"a200cdb2-0000-0200-0000-456179940000\\\\\\\"]"
}
```

You may receive an etag error if a change was made on any source or destination entity like flow, connection, source connector, or target connection by another API caller. Due to the version mismatch, the change that you are trying to make would not be applied to the latest version of the entity.

To resolve this, you need to fetch the entity again, make sure that your changes are compatible with new version of the entity, then place the new etag in the `If-Match` header, and finally make the API call.

### Valid content-type not specified {#valid-content-type-not-specified}

```json
{
    "type": "/placeholder/type/uri",
    "status": 400,
    "title": "BadRequestError",
    "detail": "A valid content-type must be specified"
}
```

This error message displays when a POST, PUT or PATCH request has an invalid or missing `Content-Type` header. Ensure that the header is included in the request and that its value is `application/json`.

### User region is missing {#user-region-is-missing}

```json
{
    "error_code": "403027",
    "message": "User region is missing"
}
```

This error message displays in either of the two cases below:
- When an incorrect or malformed organization ID header (`x-gw-ims-org-id`) is passed in an API request. Ensure that the correct ID of your organization is included before trying again.
- When your account (as represented by the provided authentication credentials) is not associated with a product profile for Experience Platform. Follow the steps on [generating access credentials](./api-authentication.md#authentication-for-each-session) in the Platform API authentication tutorial to add Platform to your account and update your authentication credentials accordingly.

## Service troubleshooting directory {#service-troubleshooting-directory}

The following is a list of troubleshooting guides and API reference documentation for [!DNL Experience Platform] APIs. Each troubleshooting guide provides answers to frequently asked questions and solutions to problems that are specific to individual [!DNL Platform] services. The API reference documents provide a comprehensive guide to all available endpoints for each service, and show sample request bodies, responses, and error codes that you may receive.

| Service | API Reference | Troubleshooting |
| --- | --- | --- |
| Access control | [Access control API](https://www.adobe.io/experience-platform-apis/references/access-control/) | [Access control troubleshooting guide](../access-control/troubleshooting-guide.md)|
| Adobe Experience Platform Data Ingestion | [[!DNL Batch Ingestion API]](https://developer.adobe.com/experience-platform-apis/references/batch-ingestion/) | [Batch ingestion troubleshooting guide](../ingestion/batch-ingestion/troubleshooting.md)|
| Adobe Experience Platform Data Ingestion | [[!DNL Streaming Ingestion API]](https://developer.adobe.com/experience-platform-apis/references/streaming-ingestion/) | [Streaming ingestion troubleshooting guide](../ingestion/streaming-ingestion/troubleshooting.md)|
| Adobe Experience Platform Data Science Workspace | [[!DNL Sensei Machine Learning API]](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/sensei-ml-api.yaml) | [[!DNL Data Science Workspace] troubleshooting guide](../data-science-workspace/troubleshooting-guide.md) |
| Adobe Experience Platform Data Governance | [[!DNL Policy Service API]](https://www.adobe.io/experience-platform-apis/references/policy-service/)||
| Adobe Experience Platform Identity Service | [[!DNL Identity Service API]](https://www.adobe.io/experience-platform-apis/references/identity-service) | [[!DNL Identity Service] troubleshooting guide](../identity-service/troubleshooting-guide.md)|
| Adobe Experience Platform Query Service | [[!DNL Query Service API]](https://www.adobe.io/experience-platform-apis/references/query-service/) | [[!DNL Query Service] troubleshooting guide](../query-service/troubleshooting-guide.md)|
| Adobe Experience Platform Segmentation | [[!DNL Segmentation API]](https://www.adobe.io/experience-platform-apis/references/segmentation/) |
| [!DNL Catalog Service] | [[!DNL Catalog Service API]](https://www.adobe.io/experience-platform-apis/references/catalog/)||
| [!DNL Experience Data Model] (XDM) | [[!DNL Schema Registry API]](https://www.adobe.io/experience-platform-apis/references/schema-registry/) | [[!DNL XDM System] FAQ and troubleshooting guide](../xdm/troubleshooting-guide.md)|
| [!DNL Flow Service] ([!DNL Sources] and [!DNL Destinations]) | [[!DNL Flow Service API]](https://www.adobe.io/experience-platform-apis/references/flow-service/)||
| [!DNL Real-Time Customer Profile] | [[!DNL Real-Time Customer Profile API]](https://www.adobe.com/go/profile-apis-en)| [[!DNL Profile] troubleshooting guide](../profile/troubleshooting.md) |
| Sandboxes | [Sandbox API](https://www.adobe.io/experience-platform-apis/references/sandbox) | [Sandboxes troubleshooting guide](../sandboxes/troubleshooting-guide.md)|
