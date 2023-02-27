---
keywords: Experience Platform;home;popular topics;dataset;Dataset;time to live;ttl;time-to-live;
solution: Experience Platform
title: Experience Event Expirations
description: This document provides general guidance on configuring expiration times for individual Experience Events within an Adobe Experience Platform dataset.
exl-id: a91f2cd2-3a5d-42e6-81c3-0ec5bc644f5f
---
# Experience Event expirations

In Adobe Experience Platform, you can configure expiration times for all Experience Events that are ingested into a dataset enabled for [Real-Time Customer Profile](./home.md). This lets you automatically remove data from the Profile Store that is no longer valid or useful for your use cases.

Experience Event expirations cannot be configured through the Platform UI or APIs. Instead, you must contact support in order to enable Experience Event expirations on your required datasets.

>[!IMPORTANT]
>
>Experience Event expirations are not to be confused with dataset expirations, which delete the entire dataset after the expiration date is reached. These are manually configured through [Adobe Experience Platform Data Hygiene](../hygiene/home.md).

## Automated expiration process

After Experience Event expirations have been enabled on a Profile-enabled dataset, Platform automatically applies the expiration values for each captured event in a two-step process:

1. All new data that is ingested into the dataset has the expiration value applied at ingestion time based on the event timestamp.
1. All existing data in the dataset has the expiration value retroactively applied as a one-time backfill system job. Once the expiration value has been placed on the dataset, events that are older than the expiration value will be immediately dropped as soon as the system job runs. All other events will be dropped off as soon as they reach their expiration values from the event timestamp. When all Experience Events have been removed, if the profile no longer has any profile attributes, the profile will no longer exist.

>[!WARNING]
>
>Once applied, any data that is older than the number of days alloted by the expiration value is **permanently deleted** and cannot be restored. 

For example, if you applied an expiration value of 30 days on May 15th, the following steps would occur:

1. All new events get an expiration value of 30 days applied as they are ingested.
1. All existing events that have a timestamp older than April 15th are immediately deleted with the system job.
1. All existing events that have a timestamp that is newer than April 15th have an expiration value 30 days after their event timestamp. So, if an event has a timestamp of April 18th, it is deleted 30 days after that timestamp's date, which would be May 18th.

## Effects on segmentation

You must ensure that the lookback windows for your segments are within the expiration boundaries of their dependent datasets in order to keep results accurate. For example, if you apply an expiration value of 30 days and have a segment that tries to view data from up to 45 days ago, the resulting audience will likely be inaccurate.
 
You should therefore keep the same Experience Event expiration value for all datasets, if possible, to avoid the impact of different expiration values across different datasets in your segmentation logic.
