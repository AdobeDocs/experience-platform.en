---
title: Total Data Volume Metric
description: Learn about the new Total Data Volume metric and how it replaces the previous average profile richness metric.
hide: yes
hidefromtoc: yes
---

# Total Data Volume metric

Starting on September 24, 2024, the Total Data Volume metric will replace the previous metric of Average Profile Richness.

Total Data Volume represents the total amount of data available for Adobe Experience Platform Profile Service to use in engagement workflows. This value is equivalent to the Addressable Audience metric multiplied by the Average Profile Richness.

## Frequently asked questions {#faq}

The following section lists frequently asked questions about this update.

### Why has this change been done?

This change has been done to simplify the process of staying in compliance with license entitlement metrics. We've often heard from customers that they find Average Profile Richness difficult to understand and manage against. With this change, we hope that you will be able to better understand and manage your licensed usage of the Profile Service.

### Does this change in metric change my Profile store entitlement?

No. Your Profile store entitlement will remain the same as before, since the Total Data Volume is equivalent to the Addressable Audience multiplied by your entitled Average Profile Richness.

### Does this change affect the entitlement packages I purchased?

No. You will still get the benefits of the entitlement packages that you previously purchased.

### How come I see a different value for my Total Data Volume compared to my Profile store entitlement?

Total Data Volume represents the **total** amount of data available for Profile Service to use in engagement workflows. The measurement has been updated to be more deterministic and explainable. Most users should **not** see a significant change between their Total Data Volume and their total profile storage. If you have any concerns, please raise a ticket with your customer service representative.

### Do I need to recreate my changes to continue managing my Average Profile Richness?

No. Any actions, such as filtering, disabling profile for datasets, as well as setting up Experience event expirations and Pseudonymous Profile data expirations will continue to play a role in managing the Total Data Volume.

### Why is the file I ingested into the sandbox a different size compared to the Total Data Volume?

Profile Service optimizes data for quick processing to execute the personalization and engagement workflows that the system is designed for. The file size on the client-side may be different from the Total Data Volume because of factors including the type of encoding, compression, and format.

### Does this change apply to SKUs that have a shared limit for both Profile Service and Data Lake?

Customers that are on SKUs that have shared Average Profile Richness between Profile Service and data lake will continue to see the Total Consumed Storage metric, and will **not** see the Average Profile Richness metric.
