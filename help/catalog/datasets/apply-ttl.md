---
keywords: Experience Platform;home;popular topics;dataset;Dataset;create a dataset;create dataset
solution: Experience Platform
title: Create a Dataset using APIs
topic-legacy: datasets
description: This document provides general steps for creating a dataset using Adobe Experience Platform APIs and populating the dataset using a file.
---

# Time-to-live (TTL) on datasets

Time-to-live (TTL) for datasets on Adobe Experience Platform is a mechanism that limits the amount of time that data lives within a dataset. This lets you automatically remove data from the Profile Store that is no longer useful for your use cases. TTL can only be applied on Real-time Customer Profile-enabled datasets.

After enabling TTL on a Profile-enabled dataset, Platform will automatically apply the TTL expiration value on the data in a two step process:

1. All new data that is ingested into the dataset will have the TTL expiration value applied at ingestion time.
2. All existing data in the dataset will have the TTL expiration value retroactively applied as a one-time backfill system job.

