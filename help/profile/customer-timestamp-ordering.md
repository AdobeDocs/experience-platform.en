---
title: Customer Timestamp Ordering
description: Learn how to add customer timestamp ordering to your datasets to ensure consistency in your profile data.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: true
hidefromtoc: true
exl-id: 1cd9f0b5-6334-4815-860a-78596a9cea1a
---
# Customer timestamp ordering

In Adobe Experience Platform, data order is not guaranteed by default when ingesting data through streaming ingestion to the Profile store. With customer timestamp ordering, you can guarantee that the latest message, as per the provided customer timestamp, will be retained on the Profile store. All stale messages will then be dropped, and will **not** be available for use in downstream services that use profile data like segmentation and destinations. As a result, this lets your profile data be consistent, and lets your profile data remain in sync with your source systems.

To enable customer timestamp ordering, use the `extSourceSystemAudit.lastUpdatedDate` field within the [External Source System Audit Attributes field group](https://github.com/adobe/xdm/blob/master/docs/reference/fieldgroups/shared/external-source-system-audit-details.schema.md) and contact your Adobe Technical Account Manager or Adobe Customer Care with your sandbox and dataset information.

## Constraints

During this private beta, the following constraints apply when using customer timestamp ordering:

- You can only use customer timestamp ordering with **profile attributes** ingested with **streaming ingestion** on the Profile store. 
  - There are **no** ordering guarantees provided for data in the data lake or Identity Service.
- You can only use customer timestamp ordering on **non-production** sandboxes.
- You can only apply customer timestamp ordering to **5** datasets per sandbox.
- You **cannot** use streaming upserts to send partial row updates in a dataset that has customer timestamp ordering enabled.
- The `extSourceSystemAudit.lastUpdatedDate` field **must** be in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. When using the ISO 8601 format, it **must** be as a full datetime in the format `yyyy-MM-ddTHH:mm:ss.sssZ` (for example, `2028-11-13T15:06:49.001Z`). 
- All rows of data ingested **must** contain the `extSourceSystemAudit.lastUpdatedDate` field as a top level field group. This means that this field **must** not be nested within the XDM schema. If this field is missing or is in an incorrect format, the malformed record will **not** be ingested, and an corresponding error message will be sent.
- Any dataset enabled for customer timestamp ordering **must** be a new dataset without any previously ingested data.
- For any given profile fragment, only rows that contain a more recent `extSourceSystemAudit.lastUpdatedDate` will be ingested. Rows that contain an `extSourceSystemAudit.lastUpdatedDate` that is either older or the same age will be discarded.

## Recommendations

When implementing customer timestamp ordering, please keep the following considerations in mind:

- You are responsible for syncing the clocks on all internal systems sending data into the Profile store.
- You should have millisecond level precision in your ISO 8061-formatted timestamps.
