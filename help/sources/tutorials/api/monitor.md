---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Monitor flows and runs
topic: overview
---

# Monitor flow runs using the Flow Service API

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

[!DNL Flow Service](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/flow-service.yaml) is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial covers the steps for monitoring flow run data for completeness, errors, and metrics using the [!DNL Flow Service] API.

## Getting started

This tutorial requires you to have access to a valid dataflow, as well as information regarding its flow ID and run ID. If you do not have this information, follow the steps outlined in the [sources overview](../../home.md) before attempting this tutorial.

This tutorial also requires you to have a working understanding of the following components of Adobe Experience Platform:

*   [Experience Data Model (XDM) System](../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    *   [Basics of schema composition](../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Registry developer guide](../../../../xdm/api/getting-started.md): Includes important information that you need to know in order to successfully perform calls to the Schema Registry API. This includes your `{TENANT_ID}`, the concept of "containers", and the required headers for making requests (with special attention to the Accept header and its possible values).
*   [Catalog Service](../../../../catalog/home.md): Catalog is the system of record for data location and lineage within [!DNL Experience Platform].
*   [Batch ingestion](../../../../ingestion/batch-ingestion/overview.md): The Batch Ingestion API allows you to ingest data into [!DNL Experience Platform] as batch files.
*   [Sandboxes](../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully monitor flow runs using the [!DNL Flow Service] API.

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](../../../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

*   Authorization: Bearer `{ACCESS_TOKEN}`
*   x-api-key: `{API_KEY}`
*   x-gw-ims-org-id: `{IMS_ORG}`

All resources in [!DNL Experience Platform], including those belonging to [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

*   x-sandbox-name: `{SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

*   Content-Type: `application/json`