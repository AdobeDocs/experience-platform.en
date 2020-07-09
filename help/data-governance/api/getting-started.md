---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: DULE Policy Service API developer guide
topic: developer guide
---

# DULE [!DNL Policy Service] API developer guide

Data Usage Labeling and Enforcement (DULE) is the core mechanism of Adobe Experience Platform Data Governance. The DULE Policy Service provides a RESTful API that allows you to create and manage data usage policies to determine what marketing actions can be taken against data that has been labeled with certain data usage labels.

This document provides instructions for performing the key operations available in the Policy Service API. If you have not yet done so, please begin by reviewing the [Data Governance overview](../home.md) to familiarize yourself with the DULE framework. For step-by-step instructions for creating and enforcing DULE policies, see the [DULE policy tutorial](../policies/create.md).

This document provides an introduction to the core concepts you need to know before attempting to make calls to the Policy Service API.

## Getting started with DULE [!DNL Policy Service]

Before beginning to work with the [!DNL Policy Service], data on [!DNL Experience Platform] must have appropriate DULE labels applied. Complete step-by-step instructions for applying data usage labels to datasets and fields can be found in the [DULE labels user guide](../labels/user-guide.md). 

## Prerequisites

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Data Governance](../home.md): The framework by which [!DNL Experience Platform] enforces data usage compliance.
    * [DULE labels](../labels/overview.md): Data usage labels are applied to Experience Data Model (XDM) data fields, specifying restrictions for how that data can be accessed.
* [Experience Data Model (XDM) System](../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
* [Real-time Customer Profile](../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
* [Sandboxes](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

## Reading sample API calls

This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

## Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

* Authorization: Bearer `{ACCESS_TOKEN}`
* x-api-key: `{API_KEY}`
* x-gw-ims-org-id: `{IMS_ORG}`

All resources in [!DNL Experience Platform], including those belonging to [!DNL Data Governance], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

* x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

* Content-Type: application/json

## Core vs custom resources

Within the [!DNL Policy Service] API, all policies and marketing actions are referred to as either `core` or `custom` resources. 

The `core` resources are ones defined and maintained by Adobe, whereas `custom` resources are created and maintained by individual customers and are therefore unique and visible solely to the IMS organization that created them. As such, listing and lookup operations (`GET`) are the only operations permitted on `core` resources, whereas listing, lookup and update operations (`POST`, `PUT`, `PATCH`, and `DELETE`) are available for `custom` resources.

## Policy status

Data usage policies can have one of three possible statuses: `DRAFT`, `ENABLED`, or `DISABLED`. 

By default, only "ENABLED" policies participate in policy evaluation. 

"DRAFT" policies can also be considered in policy evaluation, but only by setting the query parameter `?includeDraft=true`. More information on policy evaluation can be found in the document on [policy enforcement](../enforcement/overview.md) section at the end of this document.

## Marketing action names {#marketing-actions}

Marketing action names are unique identifiers for marketing actions. Each `core` marketing action has a unique name that applies across all IMS Orgs. These names are defined and maintained by Adobe. Meanwhile, all customer-defined marketing actions (`custom` resources) are unique within your individual organization and are not visible or shared with other IMS Orgs. 

Steps for working with marketing actions in the [!DNL Policy Service] API are outlined in the [Marketing Actions](#marketing-actions) section later in this document.

## Next steps

Now that you have the prerequisite knowledge and credentials, you can continue read the sample API calls provided in this developer guide:

* [Marketing actions](marketing-actions.md)
* [Policies](policies.md)