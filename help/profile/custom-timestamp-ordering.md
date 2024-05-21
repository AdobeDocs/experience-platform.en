---
title: Custom Timestamp Ordering
description: Learn how to add custom timestamp ordering to your dataset to ensure consistency in your profile data.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: true
hidefromtoc: true
---

# Custom timestamp ordering

In Adobe Experience Platform, data is not automatically sorted when ingesting data through streaming ingesting to the profile store. With custom timestamp ordering, you can guarantee the order of streaming ingestion into the profile store. As a result, this lets your profile data be consistent, and lets your profile data remain in sync.

In order to enable custom timestamp ordering, you'll need to use the `lastUpdatedDate` field within the [External Source System Audit Attributes data type](../xdm/data-types/external-source-system-audit-attributes.md) and contact your Adobe Technical Account Manager or Adobe Customer Care with your sandbox and dataset information.

## Constraints

During this private beta, the following constraints apply when using custom timestamp ordering:

- You can only use custom timestamp ordering with **profile attributes** ingested with **streaming ingestion**.
- You can only apply custom timestamp ordering to **5** datasets.
- The `lastUpdatedDate` field must be in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
- All rows of data ingested **must** contain the `lastUpdatedField`.
