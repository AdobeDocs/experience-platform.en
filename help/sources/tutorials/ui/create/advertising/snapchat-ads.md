---
title: Connect Snapchat to Experience Platform UI
description: Learn how to connect your Snapchat account to Adobe Experience Platform in the UI.
---

# Connect [!DNL Snapchat] to Experience Platform using the UI

Learn how to connect your [!DNL Snapchat] ad account to Adobe Experience Platform using the Sources workspace. The [!DNL Snapchat] source retrieves campaign, ad, and performance data and maps it to Experience Data Model (XDM) compatible datasets.

## Getting started

This tutorial requires a working understanding of the following Experience Platform components:

- [Sources](../../../../home.md): Experience Platform allows you to ingest data from external applications and services.
- [Experience Data Model (XDM)](../../../../../xdm/home.md): The standardized framework that Experience Platform uses to organize customer experience data.
- [Datasets](../../../../../catalog/datasets/overview.md): The storage construct used to hold ingested data.
- [Real-Time Customer Profile](../../../../../profile/home.md): Provides a unified profile from data collected across multiple sources.

For more information, read the [[!DNL Snapchat] source overview](../../../../connectors/advertising/snapchat-ads.md).

### Prerequisites

Before you connect [!DNL Snapchat] to Experience Platform, ensure that you have an existing [!DNL Snapchat] ad account with campaigns and ads already set up. For more information, read the [[!DNL Snapchat] source overview](../../../../connectors/advertising/snapchat-ads.md#prerequisites).

<!-- TODO(Carlo): The wiki draft does not describe the authentication mechanism (OAuth authorization vs. access token/API key). Confirm with satkapoo before this section is considered complete, then add any required credential prerequisites here. -->

## Connect your [!DNL Snapchat] account

In the Experience Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the **[!UICONTROL Sources]** workspace. Locate the **[!UICONTROL Snapchat]** source card and then select **[!UICONTROL Add data]**.

<!-- TODO(Carlo): Insert catalog screenshot. Source asset: "Screenshot 2026-09-13 at 12.48.58 PM.png" on the wiki page https://wiki.corp.adobe.com/spaces/AEPLT/pages/4049441588 -->

The **[!UICONTROL Authentication]** tab is where you create the account that stores your [!DNL Snapchat] connection details. Select **[!UICONTROL New account]**, or select an existing [!DNL Snapchat] account to reuse, then provide the following:

| Field | What to enter |
| --- | --- |
| [!UICONTROL Account Name] | A name for this connection. |
| [!UICONTROL Description] (optional) | A short description of the account. |

<!-- TODO(Carlo): Insert new-account screenshot. Source asset: "Screenshot 2026-09-13 at 12.49.49 PM.png" -->

Select **[!UICONTROL Connect to source]** to validate and create the account, then select **[!UICONTROL Next]**. An account can be reused across multiple dataflows, so you enter these credentials only once per account.

<!-- TODO(Carlo): Insert remaining authentication screenshots (12.50.24, 12.50.14, 12.50.39 PM) once the flow between "Connect to source" and "Next" is confirmed with eng. -->

## Provide dataflow details

Enter a **[!UICONTROL Dataflow name]** and an optional **[!UICONTROL Description]**. You can also subscribe to dataflow **[!UICONTROL Alerts]** for run start, success, and failure.

Select **[!UICONTROL Next]** to continue to the review step.

## Review your dataflow

Review your dataflow, then select **[!UICONTROL Finish]**.

>[!IMPORTANT]
>
>You do not select a target dataset or map fields. The [!DNL Snapchat] source assigns the dataset, schema, and field mapping automatically.

<!-- TODO(Carlo): Insert review-step screenshots. Source assets: "Screenshot 2026-09-13 at 12.51.00 PM.png" and "12.51.07 PM.png" -->

## Next steps

By following this tutorial, you have connected your [!DNL Snapchat] account to Experience Platform. Read the [[!DNL Snapchat] source overview](../../../../connectors/advertising/snapchat-ads.md#how-it-works) to understand the backfill, incremental, and restatement jobs that run against your new dataflow.
