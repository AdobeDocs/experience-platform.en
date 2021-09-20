---
keywords: destinations;adobe experience platform;platform;destinations overview;activate data;activate;
title: Destinations overview
seo-title: Destinations overview
description: Learn how to activate Adobe Experience Platform data to destinations for cross-channel marketing campaigns, emails, targeted advertising, and more.
seo-description: Destinations are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use Destinations in the Adobe Experience Platform to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.
exl-id: afd07ddc-652e-4e22-b298-feba27332462
---
# [!DNL Destinations] overview {#overview}

![Destinations overview banner](./assets/overview/destinations-overview-banner.png)

**[!DNL Destinations]** are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

## Destinations and sources {#destinations-and-sources}

One of the core functionalities of Platform is ingesting your first-party data and activating it for your business needs. Use [sources](../sources/home.md) to ingest data into Platform and destinations to export data from Platform. 

## Destinations steps {#steps}

* Choose from a [self-service catalog](./catalog/overview.md) of all the destinations available in Platform.
* Use destinations to and send profiles or segments to marketing automation platforms, digital advertising platforms, and more.
* Schedule data exports to your preferred destinations at regular times.

## Controls {#controls}

The controls in the [Destinations workspace](./ui/destinations-workspace.md) allow you to:

* Browse the catalog of destination platforms where you can activate your data;
* Create, edit, activate, and disable data flows to the destinations in the catalog;
* Create an account in a storage location or link Platform to the account in the destination platform;
* Select which segments should be activated to destinations;
* Select which [Experience Data Model (XDM) fields](../xdm/home.md) to export when activating segments to email marketing destinations.

## Destination types and categories {#types-and-categories}

For detailed information, see the [destination types and categories overview](./destination-types.md).

## Destinations and access controls {#access-controls}

The destinations functionality in Platform works with Adobe Experience Platform access control permissions. Depending on your user's permission level, you can view, manage, and activate destinations. For information about the individual permissions, see [Access control in Adobe Experience Platform](../access-control/home.md) and scroll down to the bottom of the page.

For more information about access controls, see the [Access control user guide](../access-control/ui/overview.md).

## [!DNL Data Governance] restrictions on activating data to destinations {#data-governance}

Data governance is enforced for Platform destinations through:

* *Marketing actions* that you can select in the create destinations workflow;
* *Data usage policies* that restrict data containing certain usage labels from being activated to destinations with certain marketing actions.
  
See the [!DNL Data Governance] in Platform documentation for more information about [marketing actions](../data-governance/policies/overview.md) and [resolving data policy violations](../data-governance/enforcement/auto-enforcement.md).

For more information about selecting marketing actions in the create destination workflow, see the following pages for the different destination types in Platform:

* [Advertising destinations - Google Ad Manager ](./catalog/advertising/google-ad-manager.md)
* [Advertising destinations - Google Ads](./catalog/advertising/google-ads-destination.md)
* [Advertising destinations - Google Display & Video 360 ](./catalog/advertising/google-dv360.md)
* [Cloud storage destinations](./catalog/cloud-storage/overview.md)
* [Email marketing destinations](./catalog/email-marketing/overview.md)
* [Social destinations](./catalog/social/overview.md)

For more information about data policy violations in the segment activation workflow, see the Review step in the following guides:

* [Activate audience data to streaming segment export destinations](./ui/activate-segment-streaming-destinations.md#review)
* [Activate audience data to streaming profile export destinations](./ui/activate-streaming-profile-destinations.md#review)
* [Activate audience data to batch profile export destinations](./ui/activate-batch-profile-destinations.md#review)
