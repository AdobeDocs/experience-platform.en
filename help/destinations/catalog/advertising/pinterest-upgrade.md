---
title: Pinterest destination migration to new API. Customer action required.
description: Pinterest is deprecating the v4 advertiser API currently used by the Pinterest destination in Real-Time CDP. Understand your action items in order to seamlessly transition to the new API without disruption to your Pinterest campaigns.
hide: yes
hidefromtoc: yes
exl-id: c965235c-4208-4c28-9ac5-eb4c0061515d
---
# Pinterest destination upgrade to new API. Customer action required by December 15, 2023

>[!IMPORTANT]
>
>The customer action items on this page apply to you if your organization has set up dataflows to export data to Pinterest before November 16, 2023, the date when the **[!UICONTROL (New) Pinterest]** destination, using the latest Pinterest API, was added to the destinations catalog.

## What is happening?

Pinterest is deprecating the v4 advertiser API currently used by the [Pinterest destination](/help/destinations/catalog/advertising/pinterest.md) in Real-Time CDP. Adobe is working with Pinterest and is updating the destination to use the [v5 advertiser API](https://developers.pinterest.com/docs/getting-started/migration/). Read this page to understand your action items in order to seamlessly transition to the new API without disruption to your Pinterest campaigns.

## Why am I being notified?

We have identified your organization as having active dataflows to activate audiences to Pinterest.

## What is the plan?

Adobe is releasing a new Pinterest destination card that leverages the Pinterest API v5 and will preserve your existing dataflows in the new connection.

## Do I need to do anything to keep my activated audiences functioning?

Yes, after November 16th, 2023, you need to authenticate to the new Pinterest destination with your Pinterest advertiser account in Real-Time CDP. See the detailed instructions below.

### Reauthenticate to Pinterest {#reauthenticate}

1. Go to **[!UICONTROL Destinations > Accounts]** and use the filter on the screen to filter the Pinterest destination only.
    ![Filter Pinterest accounts only](/help/destinations/assets/catalog/advertising/pinterest-migration/filter-pinterest-acconts-only.png)
2. On the **(New) Pinterest** destination, select the three dots symbol ... and select **[!UICONTROL Edit details]**.
    ![Select Edit details](/help/destinations/assets/catalog/advertising/pinterest-migration/edit-details-pinterest.png)
3. Select **[!UICONTROL Reconnect OAuth]** and log in to your Pinterest account.
    ![Select Reconnect OAuth](/help/destinations/assets/catalog/advertising/pinterest-migration/reconnect-oauth-pinterest.png)
4. Move on to the action item in the section below

### Disable existing flows to old destination and enable flows to new destination {#disable-old-enable-new-flows}

Then, you need to manually disable existing flows to the old destination card **[!UICONTROL (Deprecating) Pinterest]** and enable flows to the new card **[!UICONTROL (New) Pinterest]**. 

1. Go to **[!UICONTROL Destinations > Browse]** and use the filter on the screen to filter the **[!UICONTROL (New) Pinterest]** and **[!UICONTROL (Deprecating) Pinterest]** destinations only.
    ![Filter Pinterest dataflows only in the Browse tab](/help/destinations/assets/catalog/advertising/pinterest-migration/filter-pinterest-browse.png)
2. Select the hyperlinked connection name (Loyalty campaign in the screenshot example above) to the **[!UICONTROL (Deprecating) Pinterest]** destination and switch the **[!UICONTROL Enable]** toggle to **off**.
    ![Toggle on for new connections and off for old connections](/help/destinations/assets/catalog/advertising/pinterest-migration/enable-disable-toggle-old-destination.png)
3. Select the hyperlinked connection name (Loyalty campaign in the screenshot example above) to the **[!UICONTROL (New) Pinterest]** destination and switch the **[!UICONTROL Enable]** toggle to **on**.
    ![Toggle on for new connections and off for old connections](/help/destinations/assets/catalog/advertising/pinterest-migration/enable-disable-toggle-new-destination.png)
4. Compare the activated audience list in the old and new dataflow and make sure that you do not have any new audiences in the old flows that are missing missing in the new flows.

While no disruption to your campaigns is expected, remember to check in the Pinterest UI that everything works as expected.

## Can you share some high-level timelines?

Yes, please see below:
 
**By November 16, 2023**: The new destination is ready, and you should see two Pinterest cards side by side in the catalog, and all your existing dataflows to the current Pinterest card are copied to the new destination.

![Old and new Pinterest destination side-by-side](/help/destinations/assets/catalog/advertising/pinterest-migration/pinterest-two-cards-side-by-side.png)

>[!IMPORTANT]
>
>After November 16th, 2023 the legacy Pinterest destination is marked **[!UICONTROL Deprecating]**. <span class="preview">Any changes that you make to dataflows to the (Deprecating) Pinterest destination after November 16th will *not* be automatically carried over to the new Pinterest destination. </span>
>For example, we *do not recommend* that you activate new audiences to the old destination after November 16th. If you do that, you will then have to follow the [regular activation steps](/help/destinations/ui/activate-segment-streaming-destinations.md) to add the audience to the new destination once the customer actions are taken.

**By December 15, 2023**: <span class="preview">Customer action 1</span>. You need to reauthenticate to Pinterest so that the new card is connected to Pinterest. View complete instructions in [this section](#reauthenticate).

<span class="preview">Customer action 2</span>.Then, you need to disable the dataflows to Pinterest in the old card and enable the dataflows in the new card. View complete instructions in [this section](#disable-old-enable-new-flows).

>[!IMPORTANT]
>
>After December 15th, 2023, Adobe does not guarantee the integrity of dataflows to the old **[!UICONTROL (Deprecating) Pinterest]** destination.

## Other items to note

After you enable the dataflows on the new destination card and disable the dataflows on the old destination cards, you should see no disruption in your campaigns or in the numbers of qualified profiles in the audiences coming in from Adobe Real-Time CDP.
