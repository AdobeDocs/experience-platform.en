---
description: This page provides all information you need to submit a destination authored using Destination SDK.
title: How to submit a destination authored in Destination SDK
---
# How to submit a destination authored in Destination SDK

## Overview {#overview}

Before your destination can be published in the [Experience Platform destinations catalog](/help/destinations/catalog/overview.md), you must provide Adobe with certain information about the destination and the testing you performed, to ensure that users enjoy the best possible experience when activating data to your platform.

This page lists all the information you need to provide when submitting a destination you authored using Adobe Experience Platform Destination SDK. To successfully submit a destination in Adobe Experience Platform, send an email which includes:

* A description of the use cases for your destination. This is not required if you are updating an existing destination configuration.
* A copy of the message transformation template you submitted via API
* Test results after using the test destination API endpoint to perform an HTTP call to your destination. This includes:
  * The API payload of a call made out of Experience Platform
  * The API response received from your destination endpoint.
* An icon file which will be displayed for your destination card in the Experience Platform destinations catalog. Image requirements are:
  * Format: `SVG`
  * Size less than 2MB
* Proof that you have submitted a destination publishing request for your destination using the [destination publishing API](./destination-publish-api.md).
* (For public destinations) a documentation PR (pull request), following the instructions in ....

You can find detailed information about each item in the sections below:


## Description of use cases

Provide a description of the use cases that your destination solves for Experience Platform customers.

## Copy of the message transformation template

Include a copy of the message transformation template used to transform data when exporting profiles to your destination.

## Test results after using the test destination API

## Logo for your destination

The destinations catalog includes a logo for each destination. 

Image requirements are:
  * Format: `SVG`
  * Size less than 2MB

## Proof that you have submitted a destination publishing request

## Documentation PR (pull request) for public destinations

If you are an Independent Software Vendor (ISV) or System Integrator (SI) creating a [productized integration](./overview.md#productized-custom-integrations), use the [self-service documentation process](./docs-framework/documentation-instructions.md) to create a product documentation page for your destination. As part of the submission process, provide the pull request (PR) for your destination documentation.

## Sample email

Download a sample email with all the information that you need to provide to Adobe.