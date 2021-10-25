---
description: This page provides all information you need to submit for review a destination authored using Destination SDK.
title: How to submit a destination authored in Destination SDK
---
# How to submit for review a destination authored in Destination SDK

## Overview {#overview}

Before your destination can be published in the [Experience Platform destinations catalog](/help/destinations/catalog/overview.md), you must provide Adobe with certain information about the destination and the testing you performed, to ensure that users enjoy the best possible experience when activating data to your platform.

This page lists all the information you need to provide when submitting or updating a destination you authored using Adobe Experience Platform Destination SDK. To successfully submit a destination in Adobe Experience Platform, send an email which includes:

* A description of the use cases that your destination solves. This is not required if you are updating an existing destination configuration.
* A copy of the message transformation template you submitted via API.
* Test results after using the test destination API endpoint to perform an HTTP call to your destination. This includes:
  * The API payload of a call made out of Experience Platform.
  * The API response received from your destination endpoint.
* An image file which will be displayed as a logo for your destination card in the Experience Platform destinations catalog.
* Proof that you have submitted a destination publishing request for your destination using the [destination publishing API](./destination-publish-api.md).
* (For productized integrations only) a documentation PR (pull request), following the instructions described in the the [self-service documentation process](./docs-framework/documentation-instructions.md).

You can find detailed information about each item in the sections below:

## Use case description

Provide a description of the use cases that your destination solves for Experience Platform customers. See two examples below:


## Copy of the message transformation template

Include a copy of the message transformation template used to transform data when exporting profiles to your destination.

Your template might look similar to any of the two examples below:

## Test results after using the test destination API

Provide test results after using the [test destination API](./test-destination.md) endpoint to perform an HTTP call to your destination. This includes:
* The API payload of a request made out of Experience Platform
* The API response received from your destination endpoint.

For example:

**Request**

**Response**


## Proof that you have submitted a destination publishing request

After successfully testing your destination, you must use the [destination publishing API](./destination-publish-api.md) to submit the destination to Adobe for review and publishing.

Provide the ID of the publish request for your destination. For information on how to retrieve the publish request ID, read [List destination publish requests](./destination-publish-api.md#retrieve-list).

## Documentation PR (pull request) for productized integrations

If you are an Independent Software Vendor (ISV) or System Integrator (SI) creating a [productized integration](./overview.md#productized-custom-integrations), use the [self-service documentation process](./docs-framework/documentation-instructions.md) to create a product documentation page for your destination. As part of the submission process, provide the pull request (PR) for your destination documentation.

Example PRs from existing integration partners are:
* [Yahoo destination documentation PR](https://github.com/AdobeDocs/experience-platform.en/pull/110)
* [Airship destination documentation PR](https://github.com/AdobeDocs/experience-platform.en/pull/54)

## Logo for your destination

The destinations catalog includes a logo for each destination card. In your submission email, include an image with the logo for your destination.

The image requirements are:
* **Format**: `SVG`
* **Size**: less than 2MB

## Sample email

Download a sample email with all the information that you need to provide to Adobe.