---
title: Data Hygiene API Guide
description: Learn how to programmatically correct or delete your customers' stored personal data in Adobe Experience Platform.
exl-id: 78c8b15b-b433-4168-a1e8-c97b96e4bf85
---
# Data Hygiene API guide

>[!IMPORTANT]
>
>Data hygiene capabilities in Adobe Experience Platform are currently only available for organizations that have purchased **Adobe Healthcare Shield** or **Adobe Privacy & Security Shield**.

The Data Hygiene API allows you to programmatically correct or delete your customers' stored personal data in Adobe Experience Platform, as well as schedule expiration dates for datasets. This guide covers the prerequisite steps to using the API and provides links to more endpoint-specific documentation.

## Getting started

You can access the Data Hygiene API through the following root path: `https://platform.adobe.io/data/core/hygiene/`

This sections below outline the core concepts you need to know before attempting to make calls to the API.

### Gather values for required headers

In order to make calls to the Data Hygiene API, you must first gather your authentication credentials. Follow the [API authentication guide](../../landing/api-authentication.md) to generate values for each of the required headers for the Data Hygiene API, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {ORG_ID}`

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

* `Content-Type: application/json`

### Reading sample API calls

This document provides an example API call to demonstrate how to format your requests. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/api-guide.md#sample-api) in the getting started guide for Experience Platform APIs.

## Dataset expirations

A dataset expiration is a time-delayed "delete a dataset" action. By creating a dataset expiration, you are specifying a future time at which that dataset should be deleted. See the [dataset expiration endpoint guide](./dataset-expiration.md) for details on scheduling dataset expirations in the API.

## Consumer deletes

>[!IMPORTANT]
>
>Consumer delete requests are only available for organizations that have purchased **Adobe Healthcare Shield**.
>
>
>Consumer deletes are meant to be used for data cleansing, removing anonymous data, or data minimization. They are **not** to be used for data subject rights requests (compliance) as pertaining to privacy regulations like the General Data Protection Regulation (GDPR). For all compliance use cases, use [Adobe Experience Platform Privacy Service](../../privacy-service/home.md) instead.

The Data Hygiene API allows you delete all records associated with a consumer identity across one or all datasets. All data hygiene tasks that delete consumer identities are repesented by a construct called a work order. See the [work order endpoint guide](./workorder.md) for details on working with consumer deletes in the API.

## Quota

Your organization is limited to a predetermined monthly job quota for each type of data hygiene operation, which can vary depending on licensing. See the [quota endpoint guide](./quota.md) for details on viewing the current quota status of your data hygiene processes.

## Next steps

This guide covered how to manage data hygiene requests using API calls. For information on how to perform these actions in the Platform UI, see the [data hygiene UI guide](../ui/overview.md).
