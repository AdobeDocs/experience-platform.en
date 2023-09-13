---
title: Offsite Retargeting of Unknown Visitors
description: Learn how to 
---

# Offsite retargeting of unknown visitors

>[!AVAILABILITY]
>
>This functionality is available to customers who have licensed Real-Time CDP (App Service), Adobe Experience Platform Activation, Real-time CDP, Real-Time CDP Prime, Real-Time CDP Ultimate. Read more about these packages in the [product descriptions](https://helpx.adobe.com/legal/product-descriptions.html) and contact your Adobe representative for more information.

Learn how to build an audience of unknown visitors and retarget them using partner provided addressable IDs.

IMAGE

## Prerequisites and planning {#prerequisites-and-planning}

When planning on retargeting unknown visitors, please consider the following prerequisites during your planning process:

STEPS

Additionally, in order to implement the use case, you will make use of the following Real-time CDP functionality and UI elements. Ensure that you have the necessary attribute-based access control permissions for all these areas or ask your system administrator to grant you the necessary permissions.

LIST

## Verifying your data

Before getting started, verify the content of your data. You can do this by querying the data in your event dataset. This will let you clearly see the ingested event data ingested along with partner provided attributes and IDs. 

To do this, select **[!UICONTROL Queries]** in the **Data Management** section. The Query Editor appears. You can use a query, such as `SELECT * FROM dataset LIMIT 50;` to see information about the last 50 rows of your dataset.

IMAGE

## Bringing partner provided IDs forward

After verifying the content of your data, you need to bring forth the partner provided IDs from the event dataset into the profile records. You can do this by utilizing computed attributes.

For this use case, you can create a computed attribute that looks at all the Web Page View events in your sandbox collected in the last day, then scans the events for the most recent value of the partner ID.

IMAGE

To learn how to create a computed attribute, please read the [computed attributes UI guide](../../profile/computed-attributes/ui.md).

## Create an audience using the computed attribute

Now that you've created the computed attribute, you can use this computed attribute to create an audience. In this example, you will be creating an audience comprised of visitors that visited your website more than 5 times this month but have not yet signed up.

To create an audience, select **Audiences**, followed by **Create audience** and **Build rule**. 

IMAGE

The Segment Builder page appears. On this page, you can use the components to build your audience.

IMAGE

