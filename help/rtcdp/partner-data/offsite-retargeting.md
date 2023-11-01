---
title: Offsite Retargeting of Unauthenticated Visitors
description: Learn how to 
---

# Offsite retargeting of unauthenticated visitors

>[!AVAILABILITY]
>
>This functionality is available to customers who have licensed Real-Time CDP (App Service), Adobe Experience Platform Activation, Real-time CDP, Real-Time CDP Prime, Real-Time CDP Ultimate. Read more about these packages in the [product descriptions](https://helpx.adobe.com/legal/product-descriptions.html) and contact your Adobe representative for more information.

Learn how to build an audience of unauthenticated visitors and retarget them using partner provided addressable IDs.

IMAGE

## Prerequisites and planning {#prerequisites-and-planning}

When planning on retargeting unauthenticated visitors, please consider the following prerequisites during your planning process:

- Have I set up the partner IDs with the proper identity namespaces?

Additionally, in order to implement the use case, you will make use of the following Real-time CDP functionality and UI elements. Ensure that you have the necessary attribute-based access control permissions for all these areas or ask your system administrator to grant you the necessary permissions.

- [Audiences](../../segmentation/home.md)
- [Computed attributes](../../profile/computed-attributes/overview.md)
- [Destinations](../../destinations/home.md)

## Bringing partner provided IDs forward

To create an audience of unauthenticated visitors, you'll first need to bring forth the partner provided IDs from the event dataset into the profile records. You can do this by utilizing computed attributes.

Computed attributes let you quickly convert profile behavioral data into aggregated values at the profile level. As a result, you can use add these expressions, such as "lifetime purchase total" to the profile, allowing you to use easily use the computed attribute within your audiences. More information about computed attributes can be found in the [computed attributes overview](../../profile/computed-attributes/overview.md).

To access computed attributes, select **Profiles** followed by **Computed attributes** and **Create computed attribute**.

IMAGE

The **Create computed attribute** page appears. On this page, you can use the components to create your computed attribute.

IMAGE

>[!NOTE]
>
>For more detailed information on creating computed attributes, please read the [computed attributes UI guide](../../profile/computed-attributes/ui.md).

For this use case, you can create a computed attribute that, if the partner ID exists, gets the most recent value of the partner ID within the last 24 hours.

Using the search bar, you can locate and add the Partner ID event to the computed attribute canvas.

IMAGE

After adding the Partner ID event to the definition, set the event filtering condition to **[!UICONTROL Exists]**, set the event filtering condition to be the **[!UICONTROL Most Recent]** value of the added Partner ID, and with a lookback period of 24 hours.

IMAGE

Give the computed attribute a name of "Partner ID" and an appropriate description, then select **Publish** to complete the computed attribute creation process.

IMAGE

## Create an audience using the computed attribute

Now that you've created the computed attribute, you can use this computed attribute to create an audience. In this example, you will be creating an audience comprised of visitors that visited your website more than 5 times this month but have not yet signed up.

To create an audience, select **Audiences**, followed by **Create audience**.

IMAGE

A dialog appears, asking you to choose between [!UICONTROL Compose audience] and [!UICONTROL Build rule]. Select **[!UICONTROL Build rule]** followed by **[!UICONTROL Create]**.

IMAGE

The Segment Builder page appears. On this page, you can use the components to build your audience.

IMAGE

>[!NOTE]
>
>For more detailed information about using the Segment Builder, please read the Segment Builder UI guide.

To achieve the goal of finding these visitors, you'll first need to add a **Page View** event to your audience. Select the **Events** tab under **Fields**, then drag and drop the **Page View** event and add it to the events section canvas.

IMAGE

Select the newly added **Page View** event. Change the lookback period from **Any time** to **This month**, and change the event rule to include **At least 5**.

IMAGE

After adding your event, you'll need to add an attribute. Since you're dealing with unauthenticated visitors, you can add the computed attribute you just created. This newly created computed attribute lets you link partner IDs to an audience.

To add the computed attribute, under **Attributes**, select **_atag**, followed by **SystemComputedAttributes**, and **PartnerID**. Now, add the **Value** of the computed attribute to the attributes section of the canvas. Additionally, search for **Personal Email** and add the **Address** attribute below **PartnerID** to the attributes section of the canvas.

IMAGE

Now that you've added your attributes, you'll need to set their evaluation criteria. For **PartnerID**, set the criterion to **exists**, and for **Address**, set the criterion to **does not exist**.

IMAGE

You've now successfully created an audience that looks for high intensity visitors who have a partner-provided ID but have not yet signed up for your site. Name your audience "Retargeting Unauthenticated Users" and select **Save** to finish creating your audience.

## Activate your audience

After successfully creating your audience, you can now activate this audience to downstream destinations. Select **Audiences** on the left navigation rail, look for your newly created audience, select the ellipsis icon, and select **Activate to destination**. 

IMAGE

>[!NOTE]
>
>For more information on activating audiences to a destination, please read the [activation overview](../../destinations/ui/activation-overview.md).

The **Activate destination** page appears. On this page, you can select which destination you want to activate your destination to. After selecting the destination of choice, select **Next**.

IMAGE

The **Scheduling** page appears. On this page, you can create a schedule that determines how frequently you want the audience activated. After configuring the scheduling details, select **Next**.

IMAGE

The **Select attributes** page appears. On this page, you can select which attributes you want exporting along with the activated audience. At a minimum, you'll want to include the partner ID, since this will let you identify the visitors you plant to retarget. After adding the attributes, select **Next**.

IMAGE

The **Review** page appears. On this page, you can review the details of your audience activation. If you're satisfied with the provided details, select **Finish**.

IMAGE

## Other use cases

You can explore further use cases enabled through partner data support in Real-Time CDP:

- [Engage and acquire new customers](./prospecting.md) by using partner data.
- [Personalize onsite experiences](./offsite-retargeting.md) with partner-aided visitor recognition.
- [Supplement First-party profiles](./supplement-first-party-profiles.md) with Partner-provided attributes.
