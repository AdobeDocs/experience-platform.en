---
title: Adobe Commerce Destination Connector
description: Learn how Adobe Commerce and Real-Time CDP merchants can personalize the shopping experience by delivering highly relevant site content and promotions, customized to customer segments built and managed within Real-Time CDP.
---
# Adobe Commerce connection {#adobe-commerce}

## Overview {#overview}

>[!IMPORTANT]
> 
>The **[!UICONTROL Adobe Commerce]** connector is currently in beta and only available to a select number of customers.

The Adobe Commerce destination connector lets you select one or more Experience Platform segments to push to your Adobe Commerce account to deliver a dynamic personalized experience for your shoppers. Within Adobe Commerce, you can then select those Adobe Experience Platform segments to personalize unique offers in the cart such as 'buy 2 get 1 free,'. You also can display hero banners and modify product pricing through promotional offers, all customized to Adobe Experience Platform segments.

<!--## Use cases {#use-cases}

To help you better understand how and when you should use the *YourDestination* destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination.

### Use case #1 {#use-case-1}

*For mobile messaging platforms:*

*A home rental and sales platform wants to push mobile notifications to customers' Android and iOS devices to let them know that there are 100 updated listings in the area where they previously searched for a rental.*

### Use case #2 {#use-case-2}

*For social network platforms:*

*An athletic apparel brand wants to reach existing customers through their social media accounts. The apparel brand can ingest email addresses from their own CRM to Adobe Experience Platform, build segments from their own offline data, and send these segments to YourDestination, to display ads in their customers' social media feeds.*-->

## Prerequisites {#prerequisites}

This extension is available in the Destinations catalog for select beta customers who have purchased Adobe Experience Platform and Adobe Commerce.

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to the Adobe Commerce destination:

1. In the [Platform interface](https://platform.adobe.com/), go to **[!UICONTROL Destinations]** > **[!UICONTROL Catalog]**.

1. Select **[!UICONTROL Personalization]**.

1. Click on the Adobe Commerce destination to highlight it, then select **[!UICONTROL Set up]**.

1. Follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

*  **[!UICONTROL Name]**: Fill in the preferred name for this destination.
*  **[!UICONTROL Description]**: Enter a description for your destination. For example, you can mention which campaign you are using this destination for. This field is optional.
*  **[!UICONTROL Integration alias]**: This value is sent to the Experience Platform Web SDK as a JSON object name. 
*  **[!UICONTROL Datastream ID]**: This determines in which Data Collection datastream the segments will be included in the response to the page. The drop-down menu shows only datastreams that have the destination configuration enabled. See [Configuring a datastream](../../../edge/datastreams/overview.md) for more details.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate segments to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Read [Activate profiles and segments to profile request destinations](../../ui/activate-profile-request-destinations.md) for instructions on activating audience segments to this destination.

<!--## Exported data / Validate data export {#exported-data}

*Add a paragraph about how data is exported to your destination. This would help the customer make sure that they have correctly integrated with your destination. For example, you could provide a sample JSON like the one below. Or, you could provide screenshots and information from your destination's interface that show how customers should expect segments to be populating in the destination platform.*-->

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

Now that you have configured the Commerce destination within Experience Platform, you need to configure the Commerce Admin to import the RTCDP segments you created.

1. Install and configure the [Experience Platform connector](https://experienceleague.adobe.com/docs/commerce-merchant-services/experience-platform-connector/fundamentals/install.html).

1. You can then [create a cart price rule](https://experienceleague.adobe.com/docs/commerce-admin/marketing/promotions/cart-rules/price-rules-cart-create.html) in Adobe Commerce based on the RTCDP segment.
