---
title: Snapchat Source Connector
description: Learn how to connect Snapchat to Adobe Experience Platform to ingest paid media campaign, ad, and performance data.
---

# [!DNL Snapchat]

The [!DNL Snapchat] source is an Adobe Experience Platform paid media connector. Use it to connect your [!DNL Snapchat] ad accounts and ingest campaign, ad, and performance data, such as engagement metrics, into Experience Platform.

The connector publishes the data that it captures to Paid Media datasets. Customer Journey Analytics uses these datasets to provide insights into your [!DNL Snapchat] marketing campaigns.

<!-- TODO(Carlo): Confirm exact authentication flow with satkapoo before publishing. The source wiki only documents the New account fields (Account Name, Description); it does not state whether Snapchat requires OAuth authorization, an access token, or API credentials. -->

## How it works

After you create a [!DNL Snapchat] dataflow and select the ad accounts to target, Experience Platform runs the following jobs automatically.

- If Paid Media datasets do not already exist for your organization, Experience Platform creates them.
- A backfill job runs 30 minutes after you create the dataflow. It fetches campaign and ad metadata and metrics for the ad accounts for the previous 30 days, and publishes the results to the Paid Media datasets.
- An incremental job runs once daily, starting the day after you create the dataflow. It fetches metadata and metrics for the previous day and publishes the results to the Paid Media datasets.
- A restatement job runs after each incremental job. Restatement happens three times: one, two, and three days after the incremental job it corresponds to.

## Prerequisites

Before you connect [!DNL Snapchat] to Experience Platform, ensure that you have the following:

- An existing [!DNL Snapchat] ad account, or the ability to create one.
- Campaigns and ads already set up in your [!DNL Snapchat] ad account. The connector reads from this existing advertising data. It does not create, modify, or delete [!DNL Snapchat] campaigns, ads, or other resources.

## Schema and dataset provisioning

The [!DNL Snapchat] source assigns a target dataset, schema, and field mapping automatically. You do not select a target dataset or map fields yourself when you create the dataflow.

<!-- TODO(Carlo): Link to the field-level XDM mapping reference once satkapoo publishes the "XDM Mapping - Snapchat Ads" wiki page (referenced but not yet created as of 2026-09-19). -->

## Next steps

After you confirm that you have an eligible [!DNL Snapchat] ad account with existing campaigns and ads, continue by [connecting Snapchat to Experience Platform using the UI](../../tutorials/ui/create/advertising/snapchat-ads.md).

## More help on this topic

- [Snapchat Marketing API documentation](https://developers.snap.com/marketing-api/home)
