---
title: Reddit Custom Audience
description: "**Reddit Ads** connect brands to people who are actively exploring their passions and problems in real time. By pairing *high-intent, community-driven* conversations with flexible *ad formats* and *robust targeting*, **Reddit Ads** help advertisers reach engaged audiences, drive performance outcomes, and learn directly from the communities that shape culture online."

This guide is for **advertisers and media teams** using **Adobe Experience Platform** to send audiences to **Reddit Ads**. It covers what you need to connect your accounts, map identities, and activate segments. Navigate to [Reddit Ads](https://business.reddithelp.com/s/article/About-Reddit-Ads).
---

# Reddit Custom Audience {#reddit custom audience}


## Overview {#overview}

**Reddit Ads** connect brands to people who are actively exploring their passions and problems in real time. By pairing *high-intent, community-driven* conversations with flexible *ad formats* and *robust targeting*, **Reddit Ads** help advertisers reach engaged audiences, drive performance outcomes, and learn directly from the communities that shape culture online.

This guide is for **advertisers and media teams** using **Adobe Experience Platform** to send audiences to **Reddit Ads**. It covers what you need to connect your accounts, map identities, and activate segments. Navigate to [Reddit Ads](https://business.reddithelp.com/s/article/About-Reddit-Ads).

>[!IMPORTANT]
>
>The destination connector and documentation page are created and maintained by the Reddit team. For any inquiries or update requests, please contact them directly at adsapi-partner-support@reddit.com*

## Use cases {#use-cases}

To help you better understand how and when you should use the Reddit Custom Audiences destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination.

### Use case #1 {#use-case-1}

An online retailer wants to reach existing customers through social platforms and show them personalized offers based on their previous orders. The online retailer can ingest **email addresses** and device IDs (**IDFA**  & **GAID**) from their own CRM to Adobe Experience Platform, build audiences from their own offline data, and send these audiences to Reddit Ads Platform, optimizing their advertising spending.

## Prerequisites {#prerequisites}

* **Reddit Ads account** that is allowed to use custom audiences / customer lists (per Reddit’s current product rules).
* **Permission to authorize the connection** — someone who can log into Reddit and approve access for Experience Platform to manage audiences on behalf of the ad account.
* **Reddit Ad Account ID** — the identifier for the ad account where audiences should be created. Your team may label this in the connection screen as Reddit Ad Account ID or similar. If you are unsure where to find it, use Reddit Ads Manager or your Reddit rep’s documentation (*ex: a2_1b2c34d*). 

## Supported identities {#supported-identities}

Reddit Custom Audiences supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

|Target Identity|Description|Considerations|
|---|---|---|
|email_lc_sha256|Email addresses hashed with the SHA256 algorithm|Both plain text and SHA256 hashed email addresses are supported by Adobe Experience Platform. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.|
|maid|Google Advertising ID **or** Apple ID for Advertisers, both hashed with the SHA256 algorithm| Map either GAID or IDFA onto **maid**. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.|

{style="table-layout:auto"}

## Supported audiences {#supported-audiences}


This section describes which type of audiences you can export to this destination.

| Audience origin | Supported | Description | 
---------|----------|----------|
| [!DNL Segmentation Service] | ✓ | Audiences generated through the Experience Platform [Segmentation Service](https://experienceleague.adobe.com/en/docs/experience-platform/segmentation/home).|
| All other audience origins | ✓ | This category includes all audience origins outside of audiences generated through the Segmentation Service. Read about the [various audience origins](https://experienceleague.adobe.com/en/docs/experience-platform/segmentation/ui/audience-portal#customize). |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

*In the table, keep only the lines that correspond to your destination. You should have one line for Export type and one line for Export frequency. Delete the values that don't apply to your destination.*

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Segment export]** | Members of the selected segment are exported with the identifiers used in the Reddit destination mapping (for example `email_lc_sha256`, `maid`). |
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on segment evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

* In Experience Platform, open Destinations and find the Reddit destination: **Reddit Custom Audience** and click on **Activate audiences**.
![alt text](../assets/catalog/advertising/destination_name.png)

* Select **Configure new destination** if this is your first time connecting your Reddit account.
**Note**: *destination here refers to your Adobe connection to your Reddit Ads account. So you might only have to do this step once if you only manage one Reddit ads account.*
![alt text](../assets/catalog/advertising/configure_new_destination.png)

* Give a name to this **new destination**, then click **Connect to destination**.
![alt text](../assets/catalog/advertising/configure_new_destination_fields.png)

### Authenticate to destination {#authenticate}

* You will now be redirected to Sign in with **Reddit** (if logged out) and **allow** the requested permissions so the platform can create audiences and update membership. After reviewing the permissions, click **Allow**.

![alt text](../assets/catalog/advertising/reddit-oauth.png)


### Fill in destination details {#destination-details}

* Enter the **Name** (of your *Reddit Account*) and **description** (optional) for this connection (for your own reference). Then enter the **Ad Account ID** (you gathered in prerequisites). Then click on **Next**.

* To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![alt text](../assets/catalog/advertising/reddit_account_details.png)

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future. Can use the name of your Reddit Account.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL Account ID]**: Your Reddit **Ad Account ID**.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate segments to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}


Read [Activate profiles and segments to streaming segment export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination.

### Map attributes and identities {#map}

The following target identity namespace(s) must be mapped depending on the use case:
* **email_lc_sha256**: Select the field you would like mapped to email (your source field can be hashed or unhashed, even though Reddit only accepts hashed values. You can force hashing the email before it’s sent by checking the “Apply transformation”.
![alt text](../assets/catalog/advertising/select_email_source.png)
![alt text](../assets/catalog/advertising/select_email_source_from_map.png)
![alt text](../assets/catalog/advertising/navigate_to_email_output.png)
![alt text](../assets/catalog/advertising/select_lc_sha256.png)

* **maid** : Similarily, select the field you would like mapped to maid (your source field can be hashed or unhashed, even though Reddit only accepts hashed values. You can force hashing the maid before it’s sent by checking the “Apply transformation”

* Check **“Apply transformation”** if needed.
![alt text](../assets/catalog/advertising/apply_transformation.png)

## Exported data / Validate data export {#exported-data}

* Once you finish your Segment/Audience activation and see success, your Audience should now be created on **Reddit**. You can check by going into your Reddit Ads Manager & Navigating to Audience Manager.

* Audiences newly created in Reddit will show up in a pending state. Once your dataflow runs and profiles are pushed out, Reddit will match the profile against Reddit users. Once data is processed you will see the audience status in Reddit change to Valid. *Audience size needs ≥ 1,000 matched users to be considered* **Valid**. You will see the audience status as **Invalid** if you don’t have the *required audience size*.
![alt text](../assets/catalog/advertising/see_audience_in_reddit.png)

This is how the payload to Reddit looks like:
Additional information can be found in our [API Docsite](https://ads-api.reddit.com/docs/v3/operations/Update%20Custom%20Audience%20Users)

```
{
  "data": {
    "action_type": "ADD",
    "column_order": [
      "EMAIL_SHA256",
      "MAID_SHA256"
    ],
    "user_data": [
      [
        "d7ef2e7b2a3663c25284a3d6d13b1ca727fc8c659474b81afe0cec997a4737d2",
        "510870d7b3e47a28a2b2f3aef27a4c81aab0b2eefda27dea50bc4c991d9e5435"
      ]
    ]
  }
}

```

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

Link to Reddit's API Docsite: [here](https://ads-api.reddit.com/docs/v3/operations/Update%20Custom%20Audience%20Users)
Link to the Reddit Ad Platform: [here](https://www.business.reddit.com)
