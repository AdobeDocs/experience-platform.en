---
description: Adobe Experience Platform Destination SDK is a set of configuration APIs that allow you to configure destination integration patterns for Experience Platform to deliver audience and profile data to your endpoint, based on data and authentication formats of your choice. The configurations are stored in Experience Platform and can be retrieved via API for additional updates.
title: Adobe Experience Platform Destination SDK
exl-id: 7aca9f40-98c8-47c2-ba88-4308fc2b1798
---
# Adobe Experience Platform Destination SDK

## Overview {#destinations-sdk}

Adobe Experience Platform Destination SDK is a suite of configuration APIs that allow you to configure destination integration patterns for Experience Platform to deliver audience and profile data to your endpoint, based on data and authentication formats of your choice. The configurations are stored in Experience Platform and can be retrieved via API for additional updates.

The Destination SDK documentation provides instructions for you to use the Adobe Experience Platform Destination SDK to configure, test and release a productized destination integration with Adobe Experience Platform, and have your destination become part of the ever-growing destinations catalog.

![Destinations catalog overview](./assets/destinations-catalog-overview.png)

## Productized and custom integrations {#productized-custom-integrations}

As a Destination SDK partner, you can benefit from adding your productized destination to the [Experience Platform catalog](/help/destinations/catalog/overview.md):
1. Standardize integration configurations across customers with pre-configured parameters and simplify the setup experience for customers.
2. Introduce a branded destination card in the Experience Platform destinations catalog for simplified customer setup and awareness.
3. Be featured as a productized destination integration with Adobe Experience Platform & Real-time Customer Data Platform.

As an Experience Platform customer, you can author an own private custom destination, which can best suit your activation needs.

![Destination SDK visual diagram](./assets/destination-sdk-visual.png)

<!--

## Types of destinations in Adobe Experience Platform {#types-of-destinations}

In Adobe Experience Platform, we distinguish between two destination types - *connections* and *extensions*. In the user interface, customers can choose between two types of connection destinations, Profile Export destinations and Segment Export destinations. For more details around the difference between the different destination types, read [Destination Types and Categories](https://experienceleague.adobe.com/docs/experience-platform/destinations/destination-types.html?lang=en).

![Destination types](./assets/types-of-destinations.png)

This documentation set provides you with all the necessary information to add your destination to Adobe Experience Platform, as a *connection*, either Profile Export or Segment Export. To set up an extension, visit the [Experience Platform Launch developer portal](https://developer.adobelaunch.com/extensions/).

-->

## Types of integrations supported {#supported-integration-types}

Through Destination SDK, Adobe Experience Platform supports real-time integrations with destinations that have a REST API endpoint. The real-time integration with Experience Platform supports capabilities like:
* Message transformation and aggregation
* Profile backfill
* Configurable metadata integration to initialize audience setup and data transfer
* Configurable authentication
* A suite of testing & validation APIs for you to test and iterate your destination configurations

Read about the technical requirements on the destinations side in the [integration prerequisites](./integration-prerequisites.md) article.


## Get access to Destination SDK {#get-access}

Destination SDK access varies based on your status as a partner or Experience Platform customer. Please see the table below for more information.


|Type of partner or customer | How to access Destination SDK |
---------|----------|
| Independent Software Vendor (ISV) | Join the [Adobe Exchange program](https://partners.adobe.com/exchangeprogram/experiencecloud.html) and request to get an Experience Platform sandbox provisioned to access Destination SDK. |
| System Integrator (SI) | You need to be at either Gold or Platinum level in the [Adobe Solution Partner Program](https://solutionpartners.adobe.com/home.html), and you will get an Experience Platform sandbox provisioned and access to Destination SDK. |
| Experience Platform customer on the Activation package | By default, you get access to Experience Platform sandboxes and Destination SDK. |
| Experience Platform customer on the Real-time CDP package | You do not have access to Destination SDK, but you have access to all the productized destinations configured by other companies using Destination SDK and published across Experience Platform organizations. |

{style="table-layout:auto"}

## High-level process {#process}

The process to configure your destination in Experience Platform is outlined below:

1. If you are an ISV or SI, see the getting access information in the section above. [Adobe Experience Platform Activation](https://helpx.adobe.com/legal/product-descriptions/adobe-experience-platform0.html) customers can skip this step.
2. [Request to provision an Experience Platform sandbox](https://adobeexchangeec.zendesk.com/hc/en-us/articles/360037457812-Adobe-Experience-Platform-Sandbox-Accounts-Access-Adding-Users-and-Support) and enable the destination authoring permission.
3. [Build your integration](./configure-destination-instructions.md) following the product documentation.
4. [Test your integration](./test-destination.md) following the product documentation.
5. [Submit your integration](./destination-publish-api.md) for Adobe’s review (the standard response time is 5 business days).
6. If you are an ISV or SI creating a [productized integration](./overview.md#productized-custom-integrations), use the [self-service documentation process](./docs-framework/documentation-instructions.md) to create a product documentation page on Experience League for your destination.
7. Once approved by Adobe, your integration will show up in the [Experience Platform catalog](/help/destinations/catalog/overview.md).
8. If you’d like to update your integration, follow the same process.

## Reference {#reference}

Adobe recommends that you read and understand the following Experience Platform documentation:

* [Adobe Experience Platform destinations overview](https://experienceleague.adobe.com/docs/experience-platform/destinations/home.html?lang=en)
* [Basis of XDM schema composition](https://experienceleague.adobe.com/docs/experience-platform/xdm/schema/composition.html?lang=en)
* [Identity namespace overview](https://experienceleague.adobe.com/docs/experience-platform/identity/namespaces.html?lang=en)
