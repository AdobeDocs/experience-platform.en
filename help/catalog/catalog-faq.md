---
keywords: catalog service; questions; frequently asked questions; faq; datasets faq
title: Frequently asked questions
description: Answers to the most frequently asked questions about Adobe Experience Platform Catalog Service and datasets.
exl-id: 70d2a352-75bd-4bbc-98e6-aeea16306f63
---
# Frequently asked questions {#faq}

This document provides answers to frequently asked questions about Adobe Experience Platform Catalog Service and datasets. For questions and troubleshooting related to other Platform services, including issues encountered across all Platform APIs, please refer to the [Experience Platform troubleshooting guide](../landing/troubleshooting.md).

## Retention policies and rules {#retention-policies-and-rules}

### What types of datasets can I apply retention policy rules to?

+++Answer

You can set up retention policies on datasets created using the ExperienceEvent XDM class. For Profile Service, retention policies can only be applied to ExperienceEvent datasets after they have been enabled for Profile.

+++

### Can I set different retention policies for the data lake and Profile Service?

+++Answer

Yes, you can apply different retention policies for the data lake and Profile Service.

+++

## Retention job execution and timing {#retention-job-execution-and-timing}

### How soon will the dataset retention job delete data from data lake services?

+++Answer

Dataset expirations are evaluated and processed weekly, deleting all records that have expired. An event is considered expired if it has been ingested into Platform for more than 30 days (ingestion date > 30 days) and its event date exceeds the defined retention period.

+++

### How soon will the dataset retention job delete data from Profile services?

+++Answer

Once a retention policy is set, existing events are immediately deleted from Platform if their event timestamp exceeds the retention period. New events are deleted once their timestamp surpasses the retention period.

For example, if you apply a 30-day expiration policy on May 15th, the following occurs:

- New events receive a 30-day expiration as they are ingested.
- Existing events with a timestamp older than April 15th are immediately deleted.
- Existing events with a timestamp after April 15th are set to expire 30 days after their timestamp. For instance, an event from April 18th would be deleted on May 18th.

+++

## Dataset Usage and Monitoring

### How can I check my current dataset usage?

+++Answer

You can view the latest dataset-level storage size in data lake and Profile as separate metrics on the [!UICONTROL Datasets] inventory page. You can also sort the columns to identify the largest datasets and ensure that retention policies are applied. Sandbox-level usage is available in the License Usage dashboard. Please refer to the [License Usage documentation](../dashboards/guides/license-usage.md) for details.

+++

### How can I verify if the data retention job was successful?

+++Answer

You can check the timestamp of the last data retention job in the [Dataset retention configuration UI](./datasets/user-guide.md#data-retention-policy) and on the [!UICONTROL Datasets] inventory page. Reports for historical dataset usage are currently unavailable but are planned for future releases.

+++

## Data recovery {#data-recovery}

### Can I recover deleted data?

+++Answer

No, once the retention policy is applied, any data older than the retention period is permanently deleted and cannot be recovered.

+++
