---
keywords: Experience Platform;Pinterest Ads;paid media;sources
title: Connect Pinterest Ads Using the UI
description: Learn how to connect Pinterest Ads to Adobe Experience Platform using the Sources workspace. Create a dataflow with automatic datasets, mappings, and ingestion.
badgeBeta: label="Beta" type="Informative"
exl-id: ca7b99c8-f1d9-4120-85d5-720f5b9ad41a
TQID: https://experienceleague.adobe.com/q37LtCNo-rubt6KMzUV8Hc6v2cfqlOMuUQR8pMYP05A
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# Connect your [!DNL Pinterest Ads] account

>[!NOTE]
>
>The [!DNL Pinterest Ads] source is in beta. Read the [Sources overview](/help/sources/home.md#terms-and-conditions) for the terms and conditions.

Connect your [!DNL Pinterest Ads] account to [!DNL Adobe Experience Platform] using the **[!UICONTROL Sources]** workspace. Create a dataflow to ingest paid media metadata and performance metrics into automatically assigned datasets.

## Prepare your account {#getting-started}

Before you begin, review the [Pinterest Ads prerequisites](/help/sources/connectors/advertising/pinterest-ads.md#prerequisites). You need an existing ad account with campaigns and ads, and permission to authorize access to that account.

You do not need to generate an access token, create a target schema, or prepare field mappings.

## Connect your account {#connect-account}

Open the **[!UICONTROL Sources]** workspace and use the **[!UICONTROL Authentication]** tab to create or reuse a connection.

In [!DNL Experience Platform], select **[!UICONTROL Sources]**. Locate the **[!UICONTROL Pinterest Ads]** source card and select **[!UICONTROL Set up]**. Choose whether to create a new account or reuse an existing account.

![The Sources catalog displays the Pinterest Ads beta source card and its Set up control.](assets/pinterest-ads/catalog.png)

### Create a new account {#new-account}

Create a connection by signing in to [!DNL Pinterest] and authorizing access to your advertising data.

Select **[!UICONTROL New account]** and enter the following connection details.

| Field | What to enter |
| --- | --- |
| [!UICONTROL Account name] | A name for the connection. |
| [!UICONTROL Description] | An optional description of the connection. |

![The Authentication step displays account name and description fields, with controls to authorize Pinterest Ads and connect to the source.](assets/pinterest-ads/new.png)

1. Select **[!UICONTROL Connect Pinterest Ads account]** to open the authorization page.
1. Follow the authorization prompts to sign in to [!DNL Pinterest].
1. On the **[!UICONTROL Authorize app]** page, review the requested permissions and select **[!UICONTROL Give access]**.
1. Select **[!UICONTROL Connect to source]** to validate and create the account, then select **[!UICONTROL Next]**.

The authorization request includes access to your advertising data, public boards, and public Pins.

You can reuse this connection for multiple dataflows without entering API credentials manually.

### Reuse an existing account {#existing-account}

Use an existing connection if you have already authorized your account. Select **[!UICONTROL Existing account]**. Select the account to use, then select **[!UICONTROL Next]**.

## Select your ad accounts {#select-data}

During dataflow setup, select the ad accounts whose metadata and metrics you want to ingest. You do not enter individual campaign, ad group, or ad identifiers.

## Provide dataflow details {#dataflow-details}

Use the **[!UICONTROL Dataflow detail]** tab to name your dataflow and configure optional alerts.

Enter a **[!UICONTROL Dataflow name]** and an optional **[!UICONTROL Description]**. Optionally select **[!UICONTROL Sources Dataflow Run Start]**, **[!UICONTROL Sources Dataflow Run Success]**, or **[!UICONTROL Sources Dataflow Run Failure]** under **[!UICONTROL Alerts]**.

![The Dataflow detail step displays name and description fields, with optional alerts for run start, success, and failure.](assets/pinterest-ads/dataflow-detail.png)

Select **[!UICONTROL Next]** to continue to **[!UICONTROL Review]**.

## Review your dataflow {#review}

Check your connection and dataflow details before creating the dataflow.

On the **[!UICONTROL Review]** tab, confirm your connection and dataflow details. Select **[!UICONTROL Finish]**.

![The Review step confirms the source connection, dynamic dataset assignment, and successful dataflow creation.](assets/pinterest-ads/review.png)

>[!IMPORTANT]
>
>The connector assigns datasets, schemas, and field mappings automatically. You do not select a target dataset, map fields, or configure an ingestion schedule.

## Understand scheduled ingestion {#scheduling}

After dataflow creation, [!DNL Experience Platform] schedules a backfill for 30 minutes later to retrieve the past 30 days. Daily ingestion starts the following day and retrieves the previous day's data.

Restatement runs one, two, and three days after each daily ingestion run to retrieve updated historical data. Read [how Pinterest Ads ingestion works](/help/sources/connectors/advertising/pinterest-ads.md#how-it-works) for details.

## Verify ingested data {#validation}

After the backfill runs, use [source dataflow monitoring](/help/sources/tutorials/ui/monitor.md) to review ingestion status and errors. Use [dataset preview](/help/catalog/datasets/user-guide.md#preview) to inspect ingested records.

## Next steps {#next-steps}

Review the [Pinterest Ads XDM field mappings](/help/sources/connectors/advertising/pinterest-ads.md#pinterest-fields) to understand the data available for analysis. Use the paid media datasets in [!DNL Adobe Customer Journey Analytics] to analyze your marketing campaigns.
