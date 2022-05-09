---
title: Data Hygiene API Guide
description: Learn how to programmatically correct or delete your customers' stored personal data in Adobe Experience Platform.
exl-id: 78c8b15b-b433-4168-a1e8-c97b96e4bf85
---
# Data Hygiene API guide

The Data Hygiene API allows you to programmatically correct or delete your customers' stored personal data in Adobe Experience Platform. Unlike the Privacy Service API, these operations do not need to be associated with legal privacy regulations and can be used purely for keeping your data clean and accurate.

You can access the API through the following root path: `https://platform.adobe.io/data/core/hygiene/`

## Getting started

This section provides an introduction to the core concepts you need to know before attempting to make calls to the Data Hygiene API.

### Gather values for required headers

In order to make calls to the Data Hygiene API, you must first gather your authentication credentials. Follow the [API authentication guide](../../landing/api-authentication.md) to generate values for each of the required headers for the Data Hygiene API, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {ORG_ID}`

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

* `Content-Type: application/json`

### Reading sample API calls

This document provides an example API call to demonstrate how to format your requests. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../landing/api-guide.md#sample-api) in the getting started guide for Experience Platform APIs.

## Work orders

A work order is a representation of a data hygiene task that deletes customer identities from a specific dataset or all datasets. See the [work order endpoint guide](./workorder.md) for details on working with classes in the API.

## Dataset time-to-live (TTL) schedules



## Next steps

This guide covered how to manage data hygiene requests using API calls. For information on how to perform these actions in the Platform UI, see the [data hygiene UI guide](../ui.md).
