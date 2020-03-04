---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Catalog Service developer guide
topic: developer guide
---

# Catalog Service developer guide

Catalog Service is the system of record for data location and lineage within Adobe Experience Platform. Catalog acts as a metadata store or "catalog" where you can find information about your data within Experience Platform, without needing to access the data itself. See the [Catalog overview](../home.md) for more information.

This developer guide provides steps to help you start using the Catalog API. The guide then provides sample API calls for performing key operations using Catalog.

## Prerequisites

Catalog tracks metadata for several kinds of resources and operations within Experience Platform. This developer guide requires a working understanding of the various Experience Platform services involved with creating and managing these resources:

* [Experience Data Model (XDM)](../../xdm/home.md): The standardized framework by which Platform organizes customer experience data.
* [Batch ingestion](../../ingestion/batch-ingestion/overview.md): How Experience Platform ingests and stores data from data files, such as CSV and Parquet.
* [Streaming ingestion](../../ingestion/streaming-ingestion/overview.md): How Experience Platform ingests and stores data from client- and server-side devices in real-time.

The following sections provide additional information that you will need to know or have on-hand in order to successfully make calls to the Catalog Service API.

## Reading sample API calls

This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls]^ in the Experience Platform troubleshooting guide.

## Gather values for required headers

In order to make calls to Platform APIs, you must first complete the [authentication tutorial]^. Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

* Authorization: Bearer `{ACCESS_TOKEN}`
* x-api-key: `{API_KEY}`
* x-gw-ims-org-id: `{IMS_ORG}`

All resources in Experience Platform are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

* x-sandbox-name: `{SANDBOX_NAME}`

> **Note:** For more information on sandboxes in Platform, see the [sandbox overview documentation](../../sandboxes/home.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

* Content-Type: application/json

## Best practices for Catalog API calls

When performing GET requests to the Catalog API, best practice is to include query parameters in your requests in order to return only the objects and properties that you need. Unfiltered requests can cause response payloads to reach past 3GB in size, which can slow overall performance.

You can view specific objects by including their ID in the request path or use query parameters such as `properties` and `limit` to filter responses. Filters can be passed as headers and as query parameters, with those passed as query parameters taking precedence. See the document on [filtering Catalog data](filter-data.md) for more information.

Since some queries can put a heavy load on the API, global limits have been implemented on Catalog queries to further support best practices.

## Next steps

This document covered the prerequisite knowledge required to make calls to the Catalog API. You can now proceed to the sample calls provided in this developer guide and follow along with their instructions.

Most of the examples in this guide use the `/dataSets` endpoint, but the principles can be applied to other endpoints within Catalog (such as `/batches` and `/accounts`). See the [Catalog Service API reference](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/catalog.yaml) for a complete list of all calls and operations available for each endpoint.
