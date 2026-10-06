---
title: Connect TikTok Ads to Experience Platform UI
description: Learn how to connect your TikTok Ads account to Adobe Experience Platform in the UI.
badge: Beta
---

# Connect [!DNL TikTok Ads] to Experience Platform using the UI

>[!NOTE]
>
>The [!DNL TikTok Ads] source is in beta. Read the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labeled sources.

>[!IMPORTANT]
>
>The [!DNL TikTok Ads] source is available as part of the Customer Journey Analytics SKU.

<!--
TODO(satkapoo/eng): Sign-in with a TikTok business account and redirection back to Experience Platform are
confirmed. No advertiser account selection step exists. Verify the remaining steps, field labels, and button
labels against the actual UI, and replace the Experience Platform placeholder image comments with real
screenshots before this leaves draft.
-->

Learn how to connect your [!DNL TikTok for Business] account to Adobe Experience Platform using the **[!UICONTROL Sources]** workspace. The [!DNL TikTok Ads] source retrieves campaign, ad, and performance data and maps it to Experience Data Model (XDM) compatible datasets.

## Getting started

This tutorial requires a working understanding of the following Experience Platform components:

- [Sources](../../../../home.md): Experience Platform allows you to ingest data from external applications and services.
- [Experience Data Model (XDM)](../../../../../xdm/home.md): The standardized framework that Experience Platform uses to organize customer experience data.
- [Datasets](../../../../../catalog/datasets/overview.md): The storage construct used to hold ingested data.
- [Real-Time Customer Profile](../../../../../profile/home.md): Provides a unified profile from data collected across multiple sources.

For more information, read the [[!DNL TikTok Ads] source overview](../../../../connectors/advertising/tiktok-ads.md).

### Prerequisites

Before you connect [!DNL TikTok Ads] to Experience Platform, complete the app setup and approval steps described in the [[!DNL TikTok Ads] source overview](../../../../connectors/advertising/tiktok-ads.md#prerequisites), including business verification and app permission group configuration.

You must also have a [!DNL TikTok for Business] account that you can use to sign in.

## Connect your [!DNL TikTok Ads] account

In the Experience Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the **[!UICONTROL Sources]** workspace. Locate the **[!UICONTROL TikTok Ads]** source card and then select **[!UICONTROL Add data]**.

<!--
TODO: Add catalog.png once the source card name is confirmed and a screenshot is captured.
![The sources catalog with the TikTok Ads card selected.](../../../../images/tutorials/create/advertising/tiktok-ads/catalog.png)
-->

The **[!UICONTROL Authentication]** tab is where you create the account that stores your [!DNL TikTok] connection details. Select **[!UICONTROL New account]**, or select **[!UICONTROL Existing account]** to reuse an account, then provide the following under **[!UICONTROL Source connection details]**:

| Field | What to enter |
| --- | --- |
| [!UICONTROL Account name] | A name for this connection. |
| [!UICONTROL Description] (optional) | A short description of the account. |

Select **[!UICONTROL Connect to source]** to open the [!DNL TikTok] sign-in page.

<!--
TODO: Add new.png once the button label is confirmed and a screenshot is captured.
![The new account screen with the account name, description, and connect option.](../../../../images/tutorials/create/advertising/tiktok-ads/new.png)
-->

Sign in with your [!DNL TikTok for Business] account. After you sign in, you are redirected back to Experience Platform.

You do not select an advertiser account.

After you return to Experience Platform, select **[!UICONTROL Next]** to continue. You can reuse this connection across multiple dataflows.

## Provide dataflow details

Enter a **[!UICONTROL Dataflow name]** and an optional **[!UICONTROL Description]**.

<!--
TODO: Add dataflow-detail.png once a screenshot is captured.
![The dataflow detail screen with the dataflow name and description fields.](../../../../images/tutorials/create/advertising/tiktok-ads/dataflow-detail.png)
-->

Select **[!UICONTROL Next]** to continue to the review step.

## Review your dataflow

Review your dataflow, then select **[!UICONTROL Finish]**.

>[!IMPORTANT]
>
>You do not select a target dataset or map fields. The [!DNL TikTok Ads] source assigns the dataset, schema, and field mapping automatically.

<!--
TODO: Add review.png once a screenshot is captured.
![The review screen showing the connection details and automatically assigned datasets.](../../../../images/tutorials/create/advertising/tiktok-ads/review.png)
-->

## Next steps

By following this tutorial, you have connected your [!DNL TikTok Ads] account to Experience Platform. Read the [[!DNL TikTok Ads] source overview](../../../../connectors/advertising/tiktok-ads.md#how-it-works) to understand the backfill and incremental jobs that run against your new dataflow.
