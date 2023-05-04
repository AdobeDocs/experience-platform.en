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

## Frequently asked questions {#faq}

The following section lists frequently asked questions regarding Experience Event data expiration:

### How does Experience Event data expiry differ from Pseudonymous Profile data expiry?

Experience Event data expiry and Pseudonymous Profile data expiry are complementary features.

#### Granularity

Experience Event data expiration works on a **dataset** level. As a result, each dataset can have a different data expiry setting.

Pseudonymous Profile data expiration works on a **sandbox** level. As a result, the data expiration will affect all profiles in the sandbox.

#### Identity types

Experience Event data expiration removes events **only** based on the event record's timestamp. The identity namespaces included are **ignored** for expiration purposes.

Pseudonymous Profile data expiration **only** considers profiles that have identity graphs which contain identity namespaces that were selected by the customer, such as `ECID`, `AAID`, or other types of cookies. If the profile contains **any** additional identity namespace that was **not** in the customer's selected list, the profile will **not** be deleted.

#### Removed items

Experience Event data expiration **only** removes events and does **not** remove profile class data. The profile class data is only removed when all the data is removed across **all** datasets and there are **no** profile class records remaining for the profile.

Pseudonymous Profile data expiration removes **both** event and profile records. As a result, the profile class data will also be removed.

### How can Pseudonymous Profile data expiry be used in conjunction with Experience Event data expiry?

Pseudonymous Profile data expiry and Experience Event data expiry can be used to complement each other.

You should **always** set up Experience Event data expiry in your datasets, based on your needs of retaining data about your known customers. Once Experience Event data expiry is set up, you can use Pseudonymous Profile data expiry to automatically remove Pseudonymous Profiles. Typically, the data expiry period for Pseudonymous Profiles is less than the data expiry period for Experience Events.

For a typical use case, you can set your Experience Event data expiry based on the values of your known user data and you can set your Pseudonymous Profile data expiry to a much shorter duration to limit the impact of Pseudonymous profiles on your Platform license compliance.
