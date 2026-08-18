---
title: TTL Health Checks
description: Learn about the TTL health checks in Adobe Experience Platform that detect data expiration and lookback window configuration issues.
solution: Experience Platform
type: Documentation
role: Admin, User
---
# TTL health checks

The TTL health checks scan your profiles, datasets, and segments for missing or misaligned data expiration and lookback window configurations that lead to data bloat, degraded performance, and inaccurate audience qualification.

| Check | Object type |
| --- | --- |
| [Pseudonymous profile TTL](#pseudonymous-profile-ttl) | Profile |
| [Experience Event datasets TTL](#experience-event-datasets-ttl) | Dataset |
| [Segment lookback window required](#segment-lookback-window-required) | Segment |
| [Segment lookback vs. dataset TTL](#segment-lookback-vs-dataset-ttl) | Segment |

## Pseudonymous profile TTL {#pseudonymous-profile-ttl}

Scans that the Pseudonymous Profile Expiration policy is active for the sandbox and lists relevant unauthenticated namespaces.

| Detail | Description |
| --- | --- |
| **Issue** | The Pseudonymous Profile Expiration policy is not active for this sandbox. |
| **Impact** | Without an expiration policy, pseudonymous profiles accumulate indefinitely. This is the leading cause of Addressable Audience overages and slows real-time segmentation. |
| **Remediation** | Activate the Pseudonymous Profile Expiration policy for your sandbox and set an expiration window appropriate for your use case. |

When you select the **[!UICONTROL Pseudonymous Profile TTL]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: Scans that the Pseudonymous Profile Expiration policy is active for the sandbox and lists relevant unauthenticated namespaces.
* **[!UICONTROL Impact]**: Accumulation of pseudonymous profiles is the lead cause of Addressable Audience overages. Without a P-TTL policy, profiles reside indefinitely. This bloat slows real-time segmentation.
* **[!UICONTROL General areas of impact]**: License compliance, as profiles that should have expired still count toward the total Addressable Audience. Performance, as bloated profiles increase the latency of profile lookups. No marketing value of excessive storage.
* **[!UICONTROL Experience League Documentation]**: Links to pseudonymous profile expiration documentation and data management best practices.
* **[!UICONTROL Configure profile settings]**: A button to navigate to profile settings and activate the expiration policy.

![Pseudonymous Profile TTL detail panel showing impact, general areas of impact, Experience League documentation links, and Configure profile settings button](../assets/health-checks/pseudonymous-profile-ttl-detail.png)

For more information, see the documentation on [pseudonymous profile expiration](/help/profile/pseudonymous-profiles.md) and [data management best practices](/help/landing/license-usage-and-guardrails/data-management-best-practices.md).

## Experience Event datasets TTL {#experience-event-datasets-ttl}

Scans Lake and Profile event datasets to ensure that data expiration is appropriately configured.

| Detail | Description |
| --- | --- |
| **Issue** | Profile-enabled Experience Event datasets are missing a configured data expiration. |
| **Impact** | Without a defined expiration policy, data is retained indefinitely in the Profile Store and Data Lake. This leads to degraded performance for ingestion and segmentation, and can impact [!DNL Adobe Journey Optimizer] performance, including audience qualification and journey execution. |
| **Remediation** | Set a data expiration on your Experience Event datasets. Align the expiration window with your segmentation lookback windows and follow standard retention best practices for your use case. |

When you select the **[!UICONTROL Experience Event Datasets TTL]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: Scans Lake and Profile event datasets to ensure that Experience Event Time to Live (E-TTL) is appropriately configured to prevent data bloat and performance degradations.
* **[!UICONTROL Impact]**: Absence of a defined E-TTL leads to infinite data retention in the Profile Store and Data Lake. This may lead to degraded performance for ingestion and segmentation, and can impact [!DNL Adobe Journey Optimizer] performance, including audience qualification and journey execution.
* **[!UICONTROL General areas of impact]**: Degraded query speeds and slow segmentation due to excessive data volume. System instability.
* **[!UICONTROL Experience League Documentation]**: A link to Experience Event dataset retention documentation.
* **[!UICONTROL Affected datasets]**: A list of Lake and Profile event datasets without a configured data expiration. Select a dataset to open it. When no issues are detected, the panel shows a **[!UICONTROL Check Passed]** confirmation instead.

![Experience Event Datasets TTL detail panel showing impact, general areas of impact, Experience League documentation links, and Check Passed confirmation](../assets/health-checks/experience-event-datasets-ttl-detail.png)

For more information, see the documentation on [Experience Event dataset retention](/help/catalog/datasets/experience-event-dataset-retention-ttl-guide.md) and [Experience Event expirations](/help/profile/event-expirations.md).

## Segment lookback window required {#segment-lookback-window-required}

Detects segment definitions that reference Experience Event data without a temporal lookback constraint.

| Detail | Description |
| --- | --- |
| **Issue** | A segment definition references Experience Event data without a temporal constraint, such as `inLastDays()`, `inLastHours()`, or `inLastMonths()`. |
| **Impact** | Without a defined lookback window, results can include slower audience evaluation, because the Segmentation Service must scan months or years of accumulated events per profile instead of a bounded recent window. Results can also include incorrect qualification, where profiles qualify or fail to qualify based on behavioral signals that do not reflect the actual intent of the audience definition. |
| **Remediation** | In Segment Builder, add a temporal constraint, such as `inLastDays()`, to the Experience Event block. Align the lookback window with your Experience Event dataset TTL to avoid querying data that has already expired. |

When you select the **[!UICONTROL Segment Lookback Window Required]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: Explains that a segment lookback window defines the rolling time boundary, such as 24 hours, 7 days, or 30 days, applied to Experience Events in a segment rule. This check detects audiences that reference Experience Event data without a temporal constraint such as `inLastDays()`, `inLastHours()`, or `inLastMonths()`.
* **[!UICONTROL Impact]**: Requiring a defined lookback window on event-based criteria ensures query determinism, performance optimization, and correct evaluation method assignment. If not defined correctly, results may include slower audience evaluation, since the Segmentation Service must scan months or years of accumulated events per profile instead of a bounded recent window, and incorrect qualification, where profiles may qualify based on behavioral signals that do not reflect the actual intent of the audience definition.
* **[!UICONTROL General areas of impact]**: Segmentation, audience evaluation, and quality.
* **[!UICONTROL Experience League Documentation]**: A link to segment lookback window best practices.
* **[!UICONTROL Affected segments]**: A list of segment definitions that reference Experience Event data without a lookback constraint. Select a segment to open it. When no issues are detected, the panel shows a **[!UICONTROL Check Passed]** confirmation instead.

![Segment Lookback Window Required detail panel showing description, impact, general areas of impact, and Check Passed confirmation](../assets/health-checks/segment-lookback-window-required-detail.png)

For more information, see the [PQL overview](/help/segmentation/pql/overview.md) and the [Experience Event dataset retention documentation](/help/catalog/datasets/experience-event-dataset-retention-ttl-guide.md).

## Segment lookback vs. dataset TTL {#segment-lookback-vs-dataset-ttl}

Compares segment lookback windows against the TTL configured on the Experience Event datasets they reference.

| Detail | Description |
| --- | --- |
| **Issue** | A segment lookback window exceeds the TTL configured on the Experience Event dataset it references. |
| **Impact** | Profiles may be incorrectly disqualified because the behavioral data the segment expects has already been removed by the dataset TTL. The opposite can also occur, where profiles incorrectly qualify based on data that should have expired. |
| **Remediation** | Align the segment lookback window with the Experience Event dataset TTL, or adjust the dataset TTL to cover the lookback window your segments require. |

When you select the **[!UICONTROL Segment Lookback vs Dataset TTL]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: Explains that audience definitions that include tests on events should be defined with lookback windows that consider the Profile TTL for those event datasets. This check compares audience lookback windows against the Profile event dataset TTL.
* **[!UICONTROL Impact]**: Incorrect disqualification can occur, where profiles may not qualify based on behavioral signals because the required data has already been removed based on the dataset TTL setting. The opposite can also occur, where missing event data leads to incorrect qualification of profiles for the audience.
* **[!UICONTROL General areas of impact]**: Audience qualification and activation.
* **[!UICONTROL Experience League Documentation]**: A link to Experience Event expirations.
* **[!UICONTROL Affected segments]**: A list of segments whose lookback window exceeds the referenced dataset TTL, when applicable. When no issues are detected, the panel shows a **[!UICONTROL Check Passed]** confirmation instead.

![Segment Lookback vs Dataset TTL detail panel showing description, impact, general areas of impact, and Check Passed confirmation](../assets/health-checks/segment-lookback-vs-dataset-ttl-detail.png)

For more information, see the [Experience Event dataset retention documentation](/help/catalog/datasets/experience-event-dataset-retention-ttl-guide.md) and the [Experience Event expirations documentation](/help/profile/event-expirations.md).

## Next steps {#next-steps}

* Return to the [health checks overview](/help/run-and-operate/health-checks.md) to explore other check categories.
* Configure [pseudonymous profile expiration](/help/profile/pseudonymous-profiles.md) to manage data retention and reduce Addressable Audience overages.
* Set up [Experience Event dataset retention](/help/catalog/datasets/experience-event-dataset-retention-ttl-guide.md) to prevent data bloat and performance degradation.
