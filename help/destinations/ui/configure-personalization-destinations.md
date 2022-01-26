---
keywords: personalization; target; destination; personalizationo destinations; configure personalization destinations; same page; next page;
title: Configure personalization destinations for same-page and next-page personalization
type: Tutorial
seo-title: Configure personalization destinations for same-page and next-page personalization.
description: Learn how to configure personalization destinations for same-page and next-page personalization.
seo-description: Configure personalization destinations for same-page and next-page personalization.
exl-id: 7d7b6869-bd59-4766-a044-f449396f6524
---
# Configure personalization destinations for same-page and next-page personalization

## Overview {#overview}

Adobe Experience Platform uses [edge segmentation](../../segmentation/ui/edge-segmentation.md) to enable customers to create and target audience segments at high scale, in real time.

This capability helps you configure same-page and next-page personalization use cases.

This article provides step-by-step instructions on how to configure Experience Platform and your personalization destinations for these use cases.

## Step 1: Configure an Experience Platform Web SDK datastream {#configure-datastream}

The first step in configuring your personalization use case is to configure a [!DNL Web SDK datastream].

Follow the instructions described in the [datastream configuration](../../edge/fundamentals/datastreams.md) documentation.

## Step 2: Configure your personalization destination {#configure-destination}

After you have configured your datastream, you can start configuring your personalization destination.

Follow the [destination connection creation tutorial](../ui/connect-destination.md) for detailed instructions on how to create a new destination connection.

Depending on the destination you are configuring, refer to the following articles for destination-specific prerequisites and related information:

* [Adobe Target connection](../catalog/personalization/adobe-target-connection.md)
* [Custom personalization connection](../catalog/personalization/custom-personalization.md)

## Step 3: Create an [!DNL Active-On-Edge] merge policy {#create-merge-policy}

After you have created your destination connection, you must create an [!DNL Active-On-Edge] merge policy.

Follow the instructions on [creating a merge policy](../../profile/merge-policies/ui-guide.md#create-a-merge-policy), and make sure to enable the **[!UICONTROL Active-On-Edge Merge Policy]** toggle.

## Step 4: Create a new segment in Platform {#create-segment}

After you have created the [!DNL Active-On-Edge] merge policy, you must create a new segment in Platform.

Follow the [segment builder](../../segmentation/ui/segment-builder.md) guide to create your new segment, and make sure to [assign it](../../segmentation/ui/segment-builder.md#merge-policies) the [!DNL Active-On-Edge] merge policy that you created at step 3.

## Step 5: Activate the segment to your destination

The last step of the configuration process is to activate the segment that you created at step 4 to the destination that you created at step 2.

To do this, follow this [activation tutorial](../ui/activate-profile-request-destinations.md).

## Validate the configuration {#validate-configuration}

After succesfully following the steps above, you should see your new segments in your personalization destination.
