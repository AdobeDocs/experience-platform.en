---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
solution: Adobe Experience Platform
title: Real-time Customer Profile API developer guide
topic: guide
---

# Real-time Customer Profile API developer guide

Real-time Customer Profile enables you to see a holistic view of each of your individual customers within Adobe Experience Platform. Profile allows you to consolidate disparate customer data from multiple channels, such as online, offline, CRM, and third party data, into a unified view offering an actionable, timestamped account of every customer interaction.

## Getting started {#getting-started}

Using the Real-time Customer Profile API, you can perform basic CRUD operations against Profile resources, such as configuring computed attributes, accessing entities, exporting Profile data, and deleting unneeded datasets or batches.

Using this developer guide requires a working understanding of the various Adobe Experience Platform services involved in working with Profile data. Before beginning to work with the Real-time Customer Profile API, please review the documentation for the following services:

* [Real-time Customer Profile](../home.md): Provides a unified, customer profile in real-time based on aggregated data from multiple sources.
* [Adobe Experience Platform Identity Service](../../identity-service/home.md): Gain a better view of your customer and their behavior by bridging identities across devices and systems.
* [Adobe Experience Platform Segmentation Service](../../segmentation/home.md): Allows you to build audience segments from Real-time Customer Profile data.
* [Experience Data Model (XDM)](../../xdm/home.md): The standardized framework by which Platform organizes customer experience data.
* [Sandboxes](../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully make calls to Profile API endpoints.

### Reading sample API calls

The Real-time Customer Profile API documentation provides example API calls to demonstrate how to properly format requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

### Required headers

The API documentation also requires you to have completed the [authentication tutorial](../../tutorials/authentication.md) in order to successfully make calls to Platform endpoints. Completing the authentication tutorial provides the values for each of the required headers in Experience Platform API calls, as shown below:

* Authorization: Bearer `{ACCESS_TOKEN}`
* x-api-key: `{API_KEY}`
* x-gw-ims-org-id: `{IMS_ORG}`

All resources in Experience Platform are isolated to specific virtual sandboxes. Requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

* x-sandbox-name: `{SANDBOX_NAME}`

For more information on sandboxes in Platform, see the [sandbox overview documentation]^(../../technical_overview/sandboxes/sandboxes-overview.md). 

All requests with a payload in the request body (such as POST, PUT, and PATCH calls) must include a `Content-Type` header. Accepted values specific to each call are provided in the call parameters.

## (Alpha) Computed attributes

>[!Note] 
>Computed attribute functionality is in alpha and is not available to all users. Documentation and functionality are subject to change.

Computed attributes enable you to automatically compute the value of fields based on other values, calculations, and expressions. Computed attributes operate on the profile level, meaning you can aggregate values across all records and events.

Each computed attribute contains an expression, or 'rule', that evaluates incoming data and stores the resulting value in a profile attribute or into an event. These computations help you to easily answer questions related to things like lifetime purchase value, time between purchases, or number of application opens, without requiring you to manually perform complex calculations each time the information is needed.

You can create, view, edit, and delete computed attributes using the `config/computedAttributes` endpoints. To learn how to use these endpoints, visit the [computed attributes sub-guide](computed-attributes.md).

## Edge projections

Adobe Experience Platform enables real-time personalization of customer experiences by making data easily accessible on strategically located servers called "edges." The Real-time Customer Profile API provides endpoints for working with edges through components called "projections." This includes projection configurations to determine what data should be projected to each edge, as well as projection destinations to define where to route a projection. 

For detailed information on working with edge projections, please visit the [edge projections sub-guide](edge-projections.md).

## Merge policies

When bringing data from multiple sources together in Experience Platform, merge policies are the rules that Platform uses to determine how data will be prioritized and what data will be combined to create individual customer profiles. 

Using the Real-time Customer Profile API, you can create new merge policies, manage existing policies, and set a default merge policy for your organization. To learn more about working with merge policies using the API, please visit the [merge policies sub-guide](merge-policies.md).

For a guide to working with merge policies using the Platform UI, please see the [Merge Policies user guide](../ui/merge-policies.md).

## Profile system search



## Profile system jobs

Data ingested into Platform is stored in the Data Lake as well as the Real-time Customer Profile data store. Occasionally it may be necessary to delete a dataset or batch from the Profile store in order to remove data that you no longer require or that was added in error. This requires using the API to create a Profile System Job, known as a "delete request", that can also be, modified, monitored, or deleted if required.

To learn how to work with delete requests using the `/system/jobs` endpoints in the Real-time Customer Profile API, follow the steps outlined in the [profile system jobs sub-guide](profile-system-jobs.md).

## Next steps

To begin making calls using the Real-time Customer Profile API, select one of the sub-guides to learn how to use specific Profile-related endpoints. To learn more about working with Profile data using the Platform UI, see the [Real-time Customer Profile user guide](../ui/user-guide.md).