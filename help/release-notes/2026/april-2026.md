---
title: Adobe Experience Platform Release Notes April 2026
description: The April 2026 release notes for Adobe Experience Platform.
exl-id: 
---
# Adobe Experience Platform release notes

>[!TIP]
>
>Refer to the following documentation for release notes of other Adobe Experience Platform applications:
>
>- [Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/whats-new/release-notes)
>- [Adobe Journey Optimizer B2B](https://experienceleague.adobe.com/en/docs/journey-optimizer-b2b/user/release-notes)
>- [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/releases/latest)
>- [Federated Audience Composition](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/release-notes)
>- [Real-Time CDP Collaboration](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/latest)

**Release date: April 28, 2026**

New features and updates to existing features in Adobe Experience Platform:

- [Destinations](#destinations)

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms. Use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations**

| Destination | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} [Microsoft Ads Customer Match](../../destinations/catalog/advertising/microsoft-ads-customer-match.md) | Match customers by email address and reengage with them across the [!DNL Microsoft Advertising Network], including Search and Audience ads. Link your [!DNL Microsoft Advertising] account to Real-Time CDP to automate customer match list creation and management directly from Experience Platform. To gain access, contact your Adobe account manager. |
| [!BADGE Beta]{type=Informative} [Reddit Custom Audience](../../destinations/catalog/advertising/reddit-custom-audience.md) | Send audiences from Experience Platform to [!DNL Reddit Ads]. Connect your [!DNL Reddit] account, map identities, and activate audiences to reach people actively exploring their interests on [!DNL Reddit]. |
| [Amazon Ads v2](../../destinations/catalog/advertising/amazon-ads-v2.md) | Use the [!DNL Amazon Ads v2] card for all new [!DNL Amazon Ads] connections. [!DNL Amazon Ads v2] connects to [!DNL Ads Data Manager], which provides support for expanded identity types, address-related fields, and data-sharing across [!DNL Amazon Ads] products, improving targeting and audience match rates. The existing [!DNL Amazon Ads] connector in the catalog has been renamed to [(Legacy) [!DNL Amazon Ads]](../../destinations/catalog/advertising/amazon-ads.md). If you have an existing legacy connection, it continues to function without any required changes. |
| [!DNL Rokt] | Use [!DNL Rokt] to connect Experience Platform audiences to AI-driven real-time decisioning, improving campaign performance through more precise targeting, suppression, and personalization. |
| External audience support for [Criteo](../../destinations/catalog/advertising/criteo.md) | Activate audiences from origins beyond Segmentation Service to [!DNL Criteo], including custom upload audiences (imported from CSV), look-alike audiences, federated audiences, and audiences created in other Experience Platform apps such as [!DNL Adobe Journey Optimizer]. See the [supported audiences](../../destinations/catalog/advertising/criteo.md#supported-audiences) section for details. This update is rolling out through the end of April. |
| [Acxiom Audience Connection](../../destinations/catalog/advertising/acxiom-audience-connection.md) | The [!DNL Acxiom Audience Connection] destination is now generally available. Use it to enhance audiences with [!DNL Acxiom's Real ID] technology and activate them to [!DNL Altice], [!DNL Ampersand], [!DNL Comcast], [!DNL Cox], [!DNL Facebook], [!DNL Amazon], [!DNL Pinterest], [!DNL Vizio], [!DNL LG Ads], [!DNL Spectrum], and [!DNL Viant]. |
| [Acxiom Real ID Audience Connection](../../destinations/catalog/advertising/acxiom-real-id-audience-connection.md) | The [!DNL Acxiom Real ID Audience Connection] destination is now generally available. Use it to activate audiences using [!DNL Acxiom's Real ID] as the match key across [!DNL Altice], [!DNL Ampersand], [!DNL Comcast], [!DNL Cox], [!DNL Facebook], [!DNL Amazon], [!DNL Pinterest], [!DNL Vizio], [!DNL LG Ads], [!DNL Spectrum], and [!DNL Viant]. |

{style="table-layout:auto"}

**Fixes and improvements**

| Fix | Description |
| --- | --- |
| New `TS` column for [Snowflake Streaming](../../destinations/catalog/warehouses/snowflake.md) destinations | The [Snowflake Streaming](../../destinations/catalog/warehouses/snowflake.md) destination now includes a `TS` timestamp column in the shared table, showing when each row was last updated. |
| Monitoring support for [Custom Personalization](../../destinations/catalog/personalization/custom-personalization.md) destinations | The [dataflow runs page](../../dataflows/ui/monitor-destinations.md#dataflow-runs-for-streaming-destinations) now shows metrics for [Custom Personalization](../../destinations/catalog/personalization/custom-personalization.md) destinations. Previously, these metrics were not available for this destination type. Use them to verify that audiences are activating as expected and to diagnose issues. <br> ![Dataflow runs metrics displayed for a Custom Personalization destination, showing identities activated, excluded, and failed.](../assets/april/dataflow-run-custom-personalization.png "Dataflow runs metrics for Custom Personalization destinations."){zoomable="yes"} |
| Profile counts in the activation workflow review step | The review step of the activation workflow now shows profile counts for audiences that are already activated. Profile counts are also shown for [streaming destinations](../../destinations/ui/activate-segment-streaming-destinations.md), not just [batch destinations](../../destinations/ui/activate-batch-profile-destinations.md). <br> ![Profile counts displayed in the review step of the activation workflow for already-activated and streaming audiences.](../assets/april/profile-count-review.png "Profile counts in the activation workflow review step."){zoomable="yes"} |
| [!DNL Pinterest] token expiry visibility | The [[!DNL Pinterest]](../../destinations/catalog/advertising/pinterest.md) destination now displays the token expiration date so you can see when re-authentication is needed. [!DNL Pinterest] tokens expire every 30 days. When a token expires, data exports stop working. To avoid interruptions, [refresh your authentication credentials](../../destinations/catalog/advertising/pinterest.md#refresh-authentication-credentials) before the token expires. |
| Export file now disabled for invalid schedules | When your audience schedule is expired or invalid, **[!UICONTROL Export file now]** is now disabled before you attempt to use it, and a tooltip explains why. Previously, selecting the action would result in an error. <br> ![The Export file now action disabled with a tooltip explaining why the action is unavailable.](../assets/april/export-file-now-disabled.png "The Export file now action disabled."){zoomable="yes"} |
| Column visibility fix in activation workflow | Fixed an issue where changing visible columns in one table incorrectly affected other tables in the activation workflow. |

{style="table-layout:auto"}

For more information, read the [Destinations overview](../../destinations/home.md).
