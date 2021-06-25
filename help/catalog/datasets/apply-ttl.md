---
keywords: Experience Platform;home;popular topics;dataset;Dataset;time to live;ttl;time-to-live;
solution: Experience Platform
title: Time-to-live on Datasets
description: This document provides general guidance on time-to-live (TTL) for datasets in Adobe Experience Platform.
---

# Time-to-live (TTL) for datasets

Time-to-live (TTL) for datasets on Adobe Experience Platform is a mechanism that limits the amount of time that data lives within a dataset. This lets you automatically remove data from the Profile Store that is no longer useful for your use cases. TTL can only be applied on Real-time Customer Profile-enabled datasets.

>[!NOTE]
>
> You will need to contact support in order to enable TTL on your datasets.

After enabling TTL on a Profile-enabled dataset, Platform will automatically apply the TTL expiration value on the data in a two step process:

1. All new data that is ingested into the dataset will have the TTL expiration value applied at ingestion time.
2. All existing data in the dataset will have the TTL expiration value retroactively applied as a one-time backfill system job.

Once the TTL expiration value has been placed on the data, events that are older than the TTL expiration value will be immediately dropped as soon as the system job runs. All other events will be dropped off as soon as they reach their TTL expiration values from the event timestamp.

>[!NOTE]
>
> Once a TTL is applied, any data that is older than the TTL's number of days will be **permanently deleted** and cannot be restored. 
> 
> Additionally, ensure that the lookback window for the segment is within the TTL boundary. Otherwise, segment results may become incorrect after applying TTL. So, for example, if you applied a TTL of 30 days and had a segment that tried to view data from up to 45 days ago, the segment would produce incorrect Profiles.
> 
> As a result, you should keep the same TTL for all datasets, if possible, to avoid the impact of different TTL values across different datasets in the segmentation logic.

So, for example, if you applied a TTL value of 30 days on May 15th, the following steps would occur:

1. All new events will get a TTL value of 30 days applied as it is ingested.
2. All existing events that have a timestamp older than April 15th will be immediately deleted with the system job.
3. All existing events that have a timestamp that is newer than April 15th will have an TTL expiration value 30 days after their event timestamp. So, if an event has a timestamp of April 18th, it will be deleted thirty days after that timestamp's date, which would be May 18th.

