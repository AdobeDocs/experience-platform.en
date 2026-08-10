---
title: Connect Google Ads (V2) to Experience Platform UI
description: Learn how to connect your Google Ads (V2) account to Adobe Experience Platform in the UI.
---
# Connect [!DNL Google Ads] (V2) to Experience Platform using the UI

Read this tutorial to learn how to connect your [!DNL Google Ads] account to Adobe Experience Platform using the Sources workspace. The Google Ads source retrieves read-only Google Ads account, campaign, ad group, ad, asset, and performance data and maps it to Experience Data Model (XDM)-compatible datasets.

The Google Ads source is intended for paid media reporting and analysis across Experience Platform applications.

## Get started

This tutorial requires a working understanding of the following Experience Platform components:

- [Sources](../../../../home.md): Experience Platform allows you to ingest data from external applications and services.
- [Experience Data Model (XDM)](../../../../../xdm/home.md): The standardized framework that Experience Platform uses to organize customer experience data.
- [Schema composition](../../../../../xdm/schema/composition.md): The basic building blocks and principles of XDM schemas.
- [Datasets](../../../../../catalog/datasets/overview.md): The storage construct used to hold ingested data.
- [Real-Time Customer Profile](../../../../../profile/home.md): Provides a unified profile from data collected across multiple sources.

For more information, read the [[!DNL Google Ads] source overview](../../../../connectors/advertising/google-ads.md).

### Prerequisites

Before you connect Google Ads (V2) to Experience Platform, make sure that you have:

- Access to a Google Ads advertiser account containing the campaigns and reporting data that you want to ingest.
- A Google user account with sufficient permissions to access the Google Ads account.
- Access to the relevant Google Ads manager account if the advertiser account is managed through a manager account.
- The required permissions to create sources, connections, schemas, datasets, and dataflows in the Experience Platform sandbox.
- A target XDM schema and dataset, unless the Google Ads (V2) workflow provisions them automatically.
- A data ingestion plan that identifies the Google Ads accounts, entities, metrics, and date range that you want to ingest.

Google Ads (V2) uses a read-only integration. The connector does not create, modify, or delete campaigns, ads, assets, or other Google Ads resources.

>[!TIP]
>
>**Manager account access**: If an advertiser account is accessible through a Google Ads manager account, the connector resolves the account hierarchy and presents the accessible advertiser accounts for selection. Manager accounts are used for account management and are not themselves the target advertising accounts.

## Connect your [!DNL Google Ads] account

In the Experience Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the Sources workspace. Locate the [!DNL Google Ads] source card under the *Advertising* category and then, select **[!UICONTROL Add data]**.

The *Connect Google Ads account* page appears. On this page, you can either create a new account connection or use an existing account connection.

### Use an existing account

To use an existing account connection, select **[!UICONTROL Existing account]** and select the [!DNL Google Ads] account that you want to use. When finished, select **[!UICONTROL Next]**.

### Create a new account

To create a new Google Ads account connection, select **[!UICONTROL New account]**. Next, enter a name for the connection and optionally, enter a description. When finished, select **[!UICONTROL Connect to source]** and allow for a few moments for the connection to establish.

