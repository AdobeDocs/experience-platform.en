---
title: Pinterest destination migration to new API. Customer action required.
description: Pinterest is deprecating the v4 advertiser API currently used by the Pinterest destination in Real-Time CDP. Understand your action items in order to seamlessly transition to the new API without disruption to your Pinterest campaigns.
hide: yes
hidefromtoc: yes
---
# Pinterest destination migration to new API. Customer action required

## What is happening?

Pinterest is deprecating the v4 advertiser API currently used by the [Pinterest destination](help/destinations/catalog/advertising/pinterest.md) in Real-Time CDP. Adobe is working with Pinterest and will be updating the destination to use the v5 advertiser API. Read this page to understand your action items in order to seamlessly transition to the new API without disruption to your Pinterest campaigns.

## Why am I getting this email?

We have identified your organization as having active campaigns to activate data to Pinterest.

## What is the migration plan?

Adobe is releasing a new Pinterest destination card for V5 and has copied your existing dataflows to the new connection.

## Do I need to do anything to move my active campaigns to the new card?

Yes, Adobe has completed the migration, and you now need to re-authenticate to Pinterest. Follow the instructions below.

1. Go to **[!UICONTROL Destinations > Accounts]** and use the filter on the screen to filter the Pinterest destination only.
    ![Filter Pinterest accounts only](/help/destinations/assets/catalog/advertising/pinterest-migration/filter-pinterest-acconts-only.png)
2. On the **(New) Pinterest** destination, select the three dots symbol ... and select **[!UICONTROL Edit details]**.
    ![Select Edit details](/help/destinations/assets/catalog/advertising/pinterest-migration/edit-details-pinterest.png)
3. Select **[!UICONTROL Reconnect OAuth]** and log in to your Pinterest account.
    ![Select Reconnect OAuth](/help/destinations/assets/catalog/advertising/pinterest-migration/reconnect-oauth-pinterest.png)
4. Let Adobe know you reauthenticated to the **[!UICONTROL (New) Pinterest]** destination.

Then, you need to manually disable existing flows to the old card and enable flows to the new card. 

>[!IMPORTANT]
>
>After reauthenticating, you can reach out to Adobe and we will perform this second step for you. If you prefer to perform this step manually, follow the steps below:

1. Go to **[!UICONTROL Destinations > Browse]** and use the filter on the screen to filter the **[!UICONTROL (New) Pinterest]** and **[!UICONTROL (Deprecating) Pinterest]** destinations only.
    ![Filter Pinterest dataflows only in the Browse tab](/help/destinations/assets/catalog/advertising/pinterest-migration/filter-pinterest-browse.png)
2. Select the hyperlinked connection name (Loyalty campaign in the screenshot example above) and move the enable toggle off for the old connection and on for the new connection.
    ![Toggle on for new connections and off for old connections](/help/destinations/assets/catalog/advertising/pinterest-migration/enable-disable-toggle.png)

While no disruption to your campaigns is expected, remember to check in the Pinterest UI that everything works as expected.

## Can you share some high-level timelines?

Yes, please see below:
 
**By November xxxx**: The new destination is ready, and you will see two Pinterest cards side-by-side in the catalog, and all your existing dataflows to the current Pinterest card are copied to the new destination.

![Old and new Pinterest destination side-by-side](/help/destinations/assets/catalog/advertising/pinterest-migration/pinterest-two-cards-side-by-side.png)

**By November 16th**: <span class="preview">Customer action</span>. You need to reauthenticate to Pinterest so that the new card is connected to Pinterest (instructions further above). Once you have done this, reach out to us.

The dataflows to Pinterest in the old card need to be disabled and the ones in the new card need to be enabled. You can do that manually in the UI, or you can reach out to Adobe and we will do that for you.
