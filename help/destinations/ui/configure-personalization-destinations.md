---
keywords: personalization; target; destination; personalizationo destinations; configure personalization destinations;
title: Configure personalization destinations for next-hit personalization use cases
type: Tutorial
seo-title: Configure personalization destinations for next-hit personalization use cases
description: Learn how to configure Adobe Experience Platform and Adobe Target for next-hit personalization use cases.
seo-description: Learn how to configure Adobe Experience Platform and Adobe Target for next-hit personalization use cases.
---

# Configure personalization destinations for same page and next page personalization use cases

## Overview {#overview}

Adobe Experience Platform uses edge segmentation to enable customers to create and target audience segments at high scale, in real time.

This capability helps you configure same page and next page personalization use cases

This fast segmentation capability is based on the Experience Platform edge segmentation capabilities, and involves a configuration process across multiple sections of Platform.

This article provides step-by-step instructions on how to configure the personalization destinations and the required 


As a part of this, three key features were delivered. 
1.       Edge Segmentation 
2.       Edge Destinations 
3.       AEP Target direct Integration. 
Edge Segmentation: 
 Adobe Experience Platform Edge Segmentation for true cross-channel consistent, real-time personalization usecases. With this capability, segmenting a Profile faster than a “blink of an eye” is not merely an expression, it’s a reality  (Blink of an eye takes 300-400 milliseconds). This capability enables our customers to create and target segments at high scale in real time. 

Edge Destination: 
<Ted to update> 

AEP Target Direct Integration 
With this release, AEP segments can be shared directly into Target removing the dependency on Audience Core Services. 
Key highlights: 
·         This capability unlocks same-page and next page personalization usecases. 
·         Provide a single, shared, targetable view of end user for all applications on the Experience Edge for true cross-channel consistency between marketing and customer channels. 
·         Ability to integrate all cross-channel use cases: A customer should be able to create a single audience, use it for targeting in Target, and re-targeting with DMP, CJM or Campaign



## Step 1: Configure an Experience Platform Web SDK datastream {#configure-datastream}

The first step in configuring your personalization use case is to configure a [!DNL Web SDK datastream]. Follow the instructions described in the [datastream configuration](../../edge/fundamentals/datastreams.md) documentation.

## Step 2: Configure your Experience Platform destination {#configure-destination}

After you have configured your datastream, you can start configuring your personalization destination.

Follow the [destination connection creation tutorial](../ui/connect-destination.md) for detailed instructions on how to create a new destination connection.

Depending on the destination you are configuring, refer to the following articles for destination-specific prerequisites and related information:

* [Adobe Target connection](../catalog/personalization/adobe-target-connection.md)
* [Custom personalization connection](../catalog/personalization/custom-personalization.md)

## Step 3: Create an [!DNL Active-On-Edge] merge policy {#create-merge-policy}

After you have created your destination connection, you must create an [!DNL Active-On-Edge] merge policy.

Follow the instructions on [creating a merge policy](../../profile/merge-policies/ui-guide.md#create-a-merge-policy), and make sure to enable the **[!UICONTROL Active-On-Edge Merge Policy]** toggle.

## Step 4: Create an Experience Platform segment {#create-segment}

After you have created the [!DNL Active-On-Edge] merge policy, you must create a new segment in Platform.

Follow the [segment builder](../../segmentation/ui/segment-builder.md) guide to create your new segment, and make sure to [assign it](../../segmentation/ui/segment-builder.md#merge-policies) the [!DNL Active-On-Edge] merge policy that you created at step 3.

## Step 5: Activate the segment to your destination

The last step of the configuration process is to activate the segment that you created at step 4 to the destination that you created at step 2.

To do this, follow this [activation tutorial](../ui/activate-profile-request-destinations.md).

## Validate the configuration {#validate-configuration}

After following all the steps above, log in to your destination platform and you should see your new segments there.