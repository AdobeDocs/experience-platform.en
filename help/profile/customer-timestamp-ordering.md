---
title: Customer Timestamp Ordering
description: Learn how to add customer timestamp ordering to your datasets to ensure consistency in your profile data.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: true
hidefromtoc: true
---

# Customer timestamp ordering

In Adobe Experience Platform, data order is not automatically guaranteed when ingesting data through streaming ingestion to the profile store. With customer timestamp ordering, you can guarantee that the latest message, as per the provided customer timestamp, will be retained on the profile store. As a result, this lets your profile data be consistent, and lets your profile data remain in sync with your source systems.

In order to enable customer timestamp ordering, you'll need to use the `lastUpdatedDate` field within the [External Source System Audit Attributes data type](../xdm/data-types/external-source-system-audit-attributes.md) and contact your Adobe Technical Account Manager or Adobe Customer Care with your sandbox and dataset information.

## Constraints

During this private beta, the following constraints apply when using customer timestamp ordering:

- You can only use customer timestamp ordering with **profile attributes** ingested with **streaming ingestion**.
- You can only use customer timestamp ordering on **non-production** sandboxes.
- You can only apply customer timestamp ordering to **5** datasets per sandbox.
- You **cannot** use streaming upserts to send partial row updates in coordination with customer timestamp ordering.
- The `lastUpdatedDate` field must be in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
- All rows of data ingested **must** contain the `lastUpdatedDate` field. If this field is missing or is in an incorrect format, the ingestion will fail.
- Any dataset enabled for customer timestamp ordering **must** be a new dataset without any previously ingested data.
- For any given profile fragment, only rows that contain a more recent `lastUpdatedDate` will be ingested. If the row doesn't contain a more recent `lastUpdatedDate`, the row will be discarded.

## Recommendations

When implementing customer timestamp ordering, please keep the following considerations in mind:

- You are responsible for syncing the clocks on all internal systems sending data into the profile store.
- You should have millisecond level precision in your ISO 8061-formatted timestamps.
- Using Data Prep in coordination with customer timestamp ordering is **highly recommended**, at it creates a copy of all the ingested rows along with their timestamps, which allows for better debugging should issues arise.
