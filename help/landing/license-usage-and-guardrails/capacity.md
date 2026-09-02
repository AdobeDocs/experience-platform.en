---
title: License Usage and Capacity
description: Learn about your license usage and capacity limits within Adobe Experience Platform.
exl-id: 38dad2f1-bd0f-4cc3-a3a6-5105ea866ea4
TQID: https://experienceleague.adobe.com/sMPVDRtNFLHhcY9FgNj2sB9JzqNLTKvsNQN3UIsnQXU
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
subfeature_v2:
  - id: b784da9a-7978-4766-bf1f-5ab2b23d894a
    internal-label: Federated Audience Composition
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
  - id: e5ae22e3-a3b0-46ed-804f-9abf1bbe3e74
    internal-label: Guardrails
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
---
# License usage and capacities

>[!AVAILABILITY]
>
>To use this feature, you must have the following permissions:
>
>- **View License Usage Dashboard**
>   - This permission lets you **view** the capacity home.
>- **Manage Sandboxes**
>   - This permission lets you **edit** your capacity allocations.
>   - Additionally, you **must** be assigned access to all sandboxes in order to edit **any** sandbox capacity. 
>
>More information about permissions within Experience Platform can be found in the [access control overview](/help/access-control/home.md#permissions)
>
>Additionally, if you have purchased High Throughput Streaming Segmentation, you will **not** be able to allocate your capacities using Capacity. To update your capacities, please contact Adobe Customer Care.

In Adobe Experience Platform, capacities let you know if your organization has exceeded any of your guardrails and gives you information on how to fix these issues. 

For more information about guardrails in Experience Platform, please read the [Real-Time CDP guardrails overview](../../rtcdp/guardrails/overview.md).

## Capacity behavior {#behavior}

>[!CONTEXTUALHELP]
>id="platform_capacity_streamingthroughput"
>title="Streaming throughput"
>abstract="The streaming throughput value measures the combined peak inbound events per second for streaming ingestion into Profile, across your production and development sandboxes."

>[!CONTEXTUALHELP]
>id="platform_capacity_streamingaudiences"
>title="Streaming audience count"
>abstract="The maximum number of streaming audiences per sandbox. This number is inclusive of the number of edge audiences you have in your sandbox."

>[!CONTEXTUALHELP]
>id="platform_capacity_edgeaudiences"
>title="Edge audiences"
>abstract="The maximum number of edge audiences per sandbox."

>[!CONTEXTUALHELP]
>id="platform_capacity_creditperiod"
>title="Credit period"
>abstract="Temporary fill in text."

>[!CONTEXTUALHELP]
>id="platform_capacity_credit_reserved"
>title="Credit reserved"
>abstract="Temporary fill in text."

>[!CONTEXTUALHELP]
>id="platform_capacity_ondemandrun"
>title="On-demand run"
>abstract="Temporary fill in text."

>[!CONTEXTUALHELP]
>id="platform_capacity_scheduledruns"
>title="Scheduled runs"
>abstract="Temporary fill in text."

>[!CONTEXTUALHELP]
>id="platform_capacity_scheduled_run_tiers"
>title="Scheduled runs tiers"
>abstract="Scheduled Runs are available in three tiers based on the maximum number of audiences supported per run:<ul><li>T1: Up to 500 audiences/run</li><li>T2: Up to 1,000 audiences/run</li><li>T3: Up to 5,000 audiences/run</li></ul>**Note:** Once you upgrade to T2 or T3, the selected tier is locked until the next contract year.

>[!CONTEXTUALHELP]
>id="platform_capacity_systemjob"
>title="System job"
>abstract="Temporary fill in text."

>[!CONTEXTUALHELP]
>id="platform_capacity_batchaudience"
>title="Batch audience"
>abstract="Temporary fill in text."

>[!CONTEXTUALHELP]
>id="platform_capacity_edgesegmentationthroughput"
>title="Edge segmentation throughput"
>abstract="Temporary fill in text."

>[!CONTEXTUALHELP]
>id="platform_capacity_audiencelimit"
>title="Audience limit"
>abstract="Temporary fill in text."

Currently, Capacity supports the following services:

- Streaming segmentation
- Streaming ingestion
- Edge segmentation

Within these services, the following guardrails are tracked:

- The maximum number of streaming audiences is 500
- The maximum number of edge audiences is 150
- The initial combined throughput for streaming ingestion is 1500 records per second (rps)
  - This combined streaming throughput measures the combined peak inbound events per second for streaming ingestion into Real-Time Customer Profile across your production and development sandboxes.
  - You can purchase additional streaming segmentation support of up to 13,500 records per second. More information about purchasing additional entitlements can be found in the [Real-Time CDP product description](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2c-edition-prime-and-ultimate-packages.html).
- The combined throughput for edge segmentation is 1500 records per second (rps)

The audience capacity is at a **sandbox** level. This means that, for every sandbox you have in your organization, you can have 500 streaming audiences, of which 150 of those can be edge audiences.

The streaming throughput capacity is at an **organization** level and can be distributed to your individual sandboxes. For example, with the 1500 rps for streaming ingestion throughput, you can set your production sandbox to be at 1300 rps and your development sandbox to be at 200 rps.

Experience Platform calculates the sandbox's throughput in 15 minute rolling intervals. This throughput is measured in real-time, with the data refreshing every 60 seconds.

If your usage reaches 80% and 90% of your licensed capacity, Experience Platform will issue an alert, notifying that you are reaching the maximum of your specified capacity. You can modify the settings to customize the capacity percentage to receive the alert or remove the alert entirely.

If your usage goes above 100% of your licensed capacity, you will be considered in breach of your capacity. If you're in breach of your capacity, the following limitations will be applied:

>[!NOTE]
>
>If you have access to Adobe Journey Optimizer, the following limitations will **not** apply.

- Event data **can** be removed from streaming personalization if the event processing queue exceeds 12 hours
- Removed event data will **not** be ingested into Profile
  - You will be able to see when events were removed
  - Events will be available within the data lake, according to your entitlements
  - You *can* use Query Service to directly re-ingest the data, if required

## Access {#access}

To access the Capacity overview, select **[!UICONTROL License usage]** followed by **[!UICONTROL Capacity]**. 

![The method to access the Capacity section is highlighted.](/help/landing/images/capacity/access-capacity.png)

The Capacity overview page is displayed, showing information including a history of alerts as well as details of your organization's capacities.

![The Capacity overview page is displayed, showing the alert history and the capacity details sections.](/help/landing/images/capacity/capacity-overview.png) {zoomable="yes" width="80%"}

### Alert history {#alert-history}

The **[!UICONTROL Alert history]** section displays a list of the most recent capacity breaches within your organization.

![The Alert history section is displayed.](/help/landing/images/capacity/alert-history.png)

| Column name | Description |
| ----------- | ----------- |
| Sandbox | The name of the sandbox where the capacity violation occurred. |
| Alert | The capacity that has been breached in the sandbox. |
| Timestamp | The data and time the violation occurred. |

To view a full history of the alerts for your organization, select the ![three dots icon](/help/images/icons/more.png), followed by **[!UICONTROL View all]**. 

![The full alert history is displayed for an organization.](/help/landing/images/capacity/full-alert-history.png)

### Streaming capacities {#streaming-capacities}

The Streaming capacities section outlines information about your organization's streaming capacities. Specifically, this section displays capacity information about streaming throughput and streaming audiences. You can filter this information on a per sandbox basis and change the lookback period.

![The sandbox selector and the date picker for the lookback period are highlighted.](/help/landing/images/capacity/filter-sandbox-and-date.png)

#### Streaming throughput {#streaming-throughput}

The **[!UICONTROL Streaming throughput]** section displays information about the streaming throughput within your organization's sandboxes. The streaming throughput value measures the combined peak inbound events per second for streaming ingestion into Profile.

![The streaming throughput section within the capacity details page is displayed.](/help/landing/images/capacity/streaming-throughput-section.png)

| Column name | Description |
| ----------- | ----------- |
| Sandbox | The name of the sandbox. |
| Services | The service that is used by the sandbox. Currently, the only supported value is Profile. |
| Usage (Peak) | The peak streaming throughput of data in the sandbox within the selected lookback period. |
| Capacity | The maximum peak streaming throughput for the sandbox. |
| Violation | If a violation has occurred, the type of violation for streaming throughput. |
| Recommended actions | A column that describes the recommended action to alleviate the violation. |

You can select the individual sandbox to see a more detailed view of the sandbox's streaming throughput.

![A sandbox is highlighted within the streaming throughput section.](/help/landing/images/capacity/select-sandbox.png)

The Streaming throughput details page is displayed. You can see a graph that displays the request throughput compared to the capacity limit, a list of the sandboxes and their throughputs, as well as a button to allocate your organization's capacities.

![The streaming throughput page is displayed, showing detailed information about the streaming throughput for the selected sandbox.](/help/landing/images/capacity/streaming-capacity-allocation.png)

To update the organization's streaming throughput capacities, select **[!UICONTROL Allocate capacities]**. 

![The Allocate capacities button is highlighted within the streaming throughput details page.](/help/landing/images/capacity/select-allocate.png)

The allocation page appears. On this page, you can set your capacities for your different sandboxes. The sum of all the capacities **must** equal to the organization's capacity total.

![The capacity allocation page is displayed.](/help/landing/images/capacity/allocate-capacity.png)

>[!NOTE]
>
>You can only set the new capacity in orders of **100**. For example, you can set the value of the sandbox's new capacity to 300 or 500, but you **cannot** set this value to 450.
>
>If the value is not in the order of 100, it will be rounded up or down accordingly.

After updating the capacity allocations, select **[!UICONTROL Save]** to finish the updates. Please note, it may take up to 10 minutes for the changes to be reflected on your organization.

#### Streaming audience count {#streaming-audience-count}

The **[!UICONTROL Streaming audience count]** section displays the number of streaming audiences within the sandbox as well as the maximum number of streaming audiences allowed within the sandbox.

![The Audience counts sections are displayed.](/help/landing/images/capacity/audience-count.png)

| Column name | Description |
| ----------- | ----------- |
| Sandbox | The name of the sandbox. |
| Services | The service that is in use for the sandbox. |
| Usage | The number of streaming audiences that are in the sandbox. |
| Capacity | The maximum number of streaming audiences that are allowed in the sandbox. |

### Edge capacities {#edge-capacities}

The **[!UICONTROL Edge capacities]** section outlines information about your organization's edge capacities. Specifically, this section displays capacity information about edge segmentation throughput and edge audiences. You can change the lookback period for the organization's edge capacities.

![The Edge capacities section is displayed. This outlines information including the edge segmentation throughput and the edge audience count.](/help/landing/images/capacity/edge-capacities.png)

#### Edge segmentation throughput {#edge-streaming-throughput}

The **[!UICONTROL Edge segmentation throughput]** section displays information about the edge segmentation throughput within your organization and organization's sandboxes. The edge segmentation throughput value measures the combined peak inbound events per second for edge ingestion into Profile.

![The Edge segmentation throughput section is displayed. This shows information about the edge segmentation throughput within your organization and its sandboxes.](/help/landing/images/capacity/edge-segmentation-throughput.png)

| Column name | Description |
| ----------- | ----------- |
| Organization | The name of the organization. The available sandboxes for the organization are listed under the organization's name. |
| Usage RPS (Peak) | The peak throughput of data in the sandbox within the selected lookback period. |
| Capacity RPS | The maximum peak throughput for the organization. |
| Violation | If a violation has occurred, the type of violation for edge segmentation throughput. |
| Recommended actions | A column that describes the recommended action to alleviate the violation. |

You can select the organization to see a more detailed view of the organization's edge segmentation throughput.

![The organization is highlighted.](/help/landing/images/capacity/select-organization.png)

The **[!UICONTROL Edge Segmentation Throughput]** page is displayed. You can see a graph that displays the request throughput compared to the capacity limit. Within this page, you can adjust the lookback period for the displayed graph.

![The Edge Segmentation Throughput page is displayed. This shows a graph detailing the throughput compared to the capacity limit.](/help/landing/images/capacity/edge-segmentation-throughput-details.png)

#### Edge audience count {#edge-audience-count}

The **[!UICONTROL Edge audience count]** section displays the number of edge audiences within each sandbox as well as the maximum number of edge audiences allowed within the sandbox.

![The Edge audience count section is displayed. This shows information related to the edge audience count.](/help/landing/images/capacity/edge-audience-count.png)

| Column name | Description |
| ----------- | ----------- |
| Sandbox | The name of the sandbox. |
| Services | The service that is in use for the sandbox. |
| Usage | The number of audiences of the listed type that are in the sandbox. |
| Capacity | The maximum number of audiences of the listed type that are allowed in the sandbox. |

## Streaming throughput best practices {#streaming-throughput-suggestions}

You can resolve your throughput violations by adopting one of the following recommendations:

1. Increase the allocated capacity for the sandbox.
2. Identify high throughput dataflows in the [monitoring dashboard](/help/dataflows/ui/monitor-streaming-profile.md) and apply throttling or filtering against these dataflows if needed.
3. Optimize your ingestion by using batch ingestion for lower latency use cases.

Additionally, you can look at your dataflows and see if you can optimize your data strategy.

| Contributing factor | What it is | Impact to use cases | Best practices |
| --- | --- | --- | --- |
| Batch to streaming conversion | Batch workloads converted to streaming can significantly increase throughput, affecting performance and resource allocation. For example, performing a bulk profile update after an event without rate limits. | Streaming strategies are unnecessary for batch use cases when low-latency processing isn't required. | Evaluate use case requirements. For batch outbound marketing, consider using [batch ingestion](/help/ingestion/batch-ingestion/overview.md) instead of streaming to manage data ingestion more efficiently.  |
| Unnecessary data ingestion | Ingesting data not required for personalization increases throughput without adding value, wasting resources. For example, ingesting all analytics traffic into profiles regardless of relevance.| Excess non-relevant data creates noise, making it harder to identify impactful data points. It can also cause friction when defining and managing audiences and profiles. | Ingest only data that is required for your use cases. Ensure that you filter out unnecessary data.<ul><li>**Adobe Analytics**: Use [row-level filtering](/help/sources/tutorials/ui/create/adobe-applications/analytics.md#filtering-for-real-time-customer-profile) to optimize your data intake.</li><li>**Sources**: Use the [[!DNL Flow Service] API to filter row-level data](/help/sources/tutorials/api/filter.md) for supported sources like [!DNL Snowflake] and [!DNL Google BigQuery].</li></li>**Edge datastream**: Configure [dynamic datastreams](/help/datastreams/configure-dynamic-datastream.md) to perform row-level filtering of traffic coming in from WebSDK.</li></ul> |

## Edge segmentation throughput best practices {#edge-best-practices}

You can resolve your edge segmentation throughput violations by adopting one of the following recommendations:

1. Identify high throughput datastreams in the [monitoring dashboard](/help/dataflows/ui/monitor-edge.md) and apply throttling or filtering against these datastreams if needed.
2. Optimize your ingestion by using batch ingestion for lower latency use cases.
3. Contact your Adobe Customer Care representative if issues still persist.

## Growth credits dashboard

>[!AVAILABILITY]
>
>The [!DNL Growth credits] dashboard is currently in **Limited availability**.

The [!DNL Growth credits] dashboard gives you a single place to view your credit balance, plan capacity, and monitor usage across Experience Platform. You can use it to:

- **View your available credits** and understand how much headroom remains.
- **Schedule capacity changes** for planned increases in demand.
- **Monitor usage and alerts** so you can address potential overages before they affect your workloads.

>[!NOTE]
>
>The **[!DNL Growth credits] dashboard** is automatically available when your organization has purchased **Growth credits**. Once credits are provisioned, you can access the dashboard from the **License Usage** tab in Experience Platform.

### Access requirements

Access to the [!DNL Growth credits] dashboard is controlled through **role-based access control**. You must have the **Platform Administrator** role, or an equivalent administrator role, to:

- View your organization's credit position.
- View credit and capacity usage.
- Configure capacity schedules.
- Configure and manage alerts.

Your sandbox-level views are limited to the sandboxes you have permission to access.

>[!NOTE]
>
>If you don't see the [!DNL Growth credits] dashboard or expected sandbox data, verify that you have the required administrator role and access to the relevant sandboxes.

### Access the Capacity overview

To access the Capacity overview, select **[!UICONTROL License usage]** and then select the **[!UICONTROL Capacity]** tab.

![The License Usage UI with Capacity section highlighted.](/help/landing/images/capacity/access-capacity.png)

As a Platform Administrator, you can review current allocations and schedule capacity changes for upcoming demand.

Select **[!UICONTROL Manage capacity]** under **Streaming** or **Edge**.

![The allocation screen with schedule allocation highlighted.](/help/landing/images/capacity/manage-capacity.png)

The table shows the **[!UICONTROL Current Capacity]** allocation for each sandbox. Use the up/down arrows or enter the **[!UICONTROL New Capacity]** allocations as required.

![The allocation screen with current allocation highlighted.](/help/landing/images/capacity/update-capacity.png)

## Understand your credit utilization

Use the [!DNL Growth credits] dashboard to see how your credits are being used and identify available headroom or potential overages.

### Review your credit summary

Select a sandbox, then select **[!UICONTROL View credit details]**.

![The credit summary with view credits highlighted.](/help/landing/images/capacity/view-credit-details.png)

The credit summary shows your current credit position for your organization:

- **Licensed credits** — The total number of credits included in your contract.
- **Credits used** — Credits consumed based on your usage.
- **Credits reserved** — Credits committed to future scheduled capacity or projected Batch overage.
- **Credits available** — Credits remaining after consumed and reserved credits are deducted.
- **Credit period** — The contract start and end dates covered by your credit entitlement.

**Credits available = Licensed credits − Credits used − credits reserved**

![The credit summary showing capacity credits information.](/help/landing/images/capacity/capacity-credits.png)

You can view **Licensed, Consumed, Reserved, and Available** credits by service type Streaming, Edge, and Batch.

For Batch, the system automatically calculates and reserves credits based on projected monthly usage. You don't need to create reservations manually.

>[!NOTE]
>
>Reserved credits aren't consumed yet, but they reduce your available credit balance because they're committed to future usage. This gives you a more accurate view of your credit headroom before you commit to additional capacity.

If **Credits available** is negative, your consumed and reserved credits exceed your licensed credits.

The impact depends on the service type:

- **Capacity-based services:** You can't create new capacity schedules while you're in an overage state.
- **Consumption-based services:** Operations continue, but usage beyond your licensed credits may result in additional costs.

>[!WARNING]
>
>If you're in an overage state, review your consumption and reserved capacity to identify the main drivers. Consider reducing future capacity or addressing high-usage workloads before additional costs are incurred.

### Understand which services consume credits

The following table shows how each service uses credits and when additional credits are consumed.

| Service | Definition | Capacity Baseline | Monthly Usage Calculation |
| --- | --- | --- | --- |
| **Streaming throughput** | This combined streaming throughput measures the combined peak inbound events per second for streaming ingestion into Real-Time Customer Profile across your production and development sandboxes. | 1,500 RPS per org | Credits are deducted daily based on the allocated streaming throughput capacity. |
| **Edge throughput** | This edge throughput capacity measures the peak inbound events per second processed at edge nodes for real-time personalization and decisioning across your production and development sandboxes. | 1,500 RPS per org | Credits are deducted daily based on the allocated edge throughput capacity. |

>[!NOTE]
>
>You can check the conversion rate in the Product Description.

![The credit summary with credit usage per service highlighted.](/help/landing/images/capacity/credit-usage-per-service.png)

### Credit usage alerts

>[!NOTE]
>
>You can view all capacity-related alerts in the **[!UICONTROL Alerts]** browse view by filtering on the **[!UICONTROL Capacity]** service.

Use credit usage alerts to monitor credit consumption and identify potential overages before they affect your business operations or result in unexpected charges.

Credit usage alerts help administrators track organization-level credit usage and take action as consumption approaches licensed limits.

The following credit usage alerts are available at the organization level:

| Alert | Description |
| --- | --- |
| 80% credit consumption | Receive an alert when consumed and reserved credits reach 80% of your organization's licensed credits. |
| 90% credit consumption | Receive an alert when consumed and reserved credits reach 90% of your organization's licensed credits. |
| Credit overage | Receive an alert when your organization exceeds its licensed credit allocation. |
| Credit expiration | Receive notifications when credits are approaching expiration. For multi-year contracts, notifications inform you when credits reset at the end of a contract year. In the final contract year, notifications help you prepare for contract renewal discussions. |

## Plan and schedule streaming and edge capacity

For Streaming and Edge, **schedule additional capacity when you expect demand to exceed your current capacity.** The self-service workflow lets you specify when you need the capacity, review its credit impact, and allocate it across sandboxes.

### Determine your capacity needs

Before creating a schedule:

- **Review peak usage:** Check current peak usage in the capacity detail view at the sandbox level.
- **Estimate required RPS:** Determine the throughput you'll need for the upcoming event or workload.
- **Determine additional capacity:** Calculate how much capacity you need above your baseline.
- **Plan the schedule:** Define the start and end dates for the capacity increase.
- **Review credit impact:** Check the credits that will be reserved.
- **Plan allocation:** For multiple sandboxes, determine how to distribute capacity. For Edge, also review regional allocation.
- **Review capacity limits:** Understand how the service responds if your workload exceeds the scheduled capacity.

>[!TIP]
>
>Set your target RPS above your expected peak usage to provide headroom during demand spikes and help avoid throttling.

### Create a streaming or edge capacity schedule

Navigate to the **[!UICONTROL Capacity]** tab and select **[!UICONTROL Manage capacity]** under **Streaming** or **Edge**. 

![The Allocation screen with schedule allocation highlighted.](/help/landing/images/capacity/manage-capacity.png)

Next, select **[!UICONTROL Schedule allocation]** and specify the target capacity and schedule:

- **Target RPS:** Enter the throughput you need above your baseline capacity.
- **Start date:** Select a date at least **7 days from today**.
- **End date:** Optionally specify when the capacity increase should end. If you don't specify an end date, credits are reserved from the start date through the end of your contract.

Review the automatically calculated **credit impact**, including:

- **Daily credit rate**
- **Reserved credits** for the schedule

![Specified scheduled details highlighted.](/help/landing/images/capacity/specified-schedule.png)

If you have multiple sandboxes, configure the **capacity distribution** across them. Then select **[!UICONTROL Save]** and **[!UICONTROL Confirm]**.

![Distributed capacity across sandboxes.](/help/landing/images/capacity/distributed-capacity.png)

>[!IMPORTANT]
>
>You can't save or update a schedule if the required credits would exceed your licensed credits.

>[!NOTE]
>
>Saving a schedule immediately reserves the required credits. Review the credit impact before saving to understand how the schedule will affect your available balance.

After you confirm the schedule, the schedule appears in the relevant capacity section.

### Cancel a capacity schedule

To cancel a schedule, navigate to the **[!UICONTROL Capacity]** tab and select **[!UICONTROL View schedule]**.

![Scheduled notification highlighted under streaming.](/help/landing/images/capacity/scheduled-notification.png)

Select **[!UICONTROL Delete]**, the confirm the cancellation.

![Schedule allocation highlighting delete button.](/help/landing/images/capacity/delete-scheduled-notification.png)

>[!NOTE]
>
>When you cancel a schedule, its reserved credits are immediately released and added back to your available credit balance.
>
>The scheduled capacity is locked and cannot be updated or canceled within two weeks of the start date.

## Video overview {#video}

The following video provides an overview of Capacity.

>[!VIDEO](https://video.tv.adobe.com/v/3475272/?learn=on&enablevpops)

## Frequently asked questions {#faq}

The following section outlines frequently asked questions about the capabilities of Capacity.

### Can I have a maximum combined throughput limit that sums up to less than my target maximum?

+++ Answer

No. The maximum combined throughput limit **must** sum up to your organization's guardrail. 

+++

### What happens if I exceed my maximum capacities?

+++ Answer

This depends on which capacity is exceeded. 

Currently, if you exceed the maximum number of allowed audiences, your excessive audiences will not be affected. However, the ability to create new audiences may be restricted in the future.

If you exceed your streaming throughput, you will experience performance latency in your ingestion and segmentation. 

+++

### Why should I adhere to my maximum capacities?

+++ Answer

Working within your maximum capacities ensures your data remains consistent and keeps your data integrity intact.

You ensure consistent performance during peak events, avoiding technical issues that could adversely affect system performance and impact your downstream customer experiences, ultimately improving your data hygiene and overall system performance.

+++

### What are best practices to manage streaming ingestion throughput?

+++ Answer

To best manage your streaming ingestion throughput, you should evaluate your datasets to ensure they are prioritizing data necessary for personalization. 

If real-time processing is not required, you should use batch ingestion instead of streaming ingestion.

+++

### Can I have more than one active schedule?

+++ Answer

No. [!DNL Growth credits] for streaming and edge support only one active or pending schedule per sandbox. A new schedule can only be created after the current one has fully completed.

+++

### What happens if I need to update the default allocation while there is an active schedule?

+++ Answer

Baseline redistribution at or below 1,500 RPS can normally be done at any time from the Default Allocation page without a schedule. But if a schedule is already pending, it's blocked because only one active or pending schedule per sandbox is allowed.

+++

### Will [!DNL Growth credits] expire after the contract period?

+++ Answer

Yes. Remaining credits expire and reset on the contract anniversary date.

+++

### What enforcement applies for Streaming capacity?

+++ Answer

You do not get more capacity above your default streaming entitlement. Traffic may be throttled, delayed, or dropped if you send more than the entitlement. Any increase above baseline requires reserving credits first.

+++

### Can a scheduled capacity change span across contract periods?

+++ Answer

No. Schedules must fit entirely within the current contract year and cannot span an annual contract boundary. Credits (reserved and used) reset on the anniversary date, and after that, you can schedule capacity for the new contract year.

+++

### What happens when the schedule ends?

+++ Answer

Capacity immediately reverts to the baseline allocation (for example, 1,500 RPS). There is no automatic extension or carryover, and no credits are charged after the schedule ends. To continue at a scaled RPS, you must create a new schedule (full lead time: 2 weeks for Streaming and 3 weeks for Edge). Previous settings are not pre-filled.

+++

### How are credits reserved and released for scheduled capacity?

+++ Answer

Credits are reserved upfront for the scheduled window and then consumed daily during the scheduled period. If a schedule is removed, the reserved credits are immediately released back to the available balance: 

**Available = Licensed − Used − Reserved***

Reservations draw from the included baseline entitlement first and only draw Growth Credits for capacity above the baseline.

+++

### What permission is required to create or edit a capacity schedule?

+++ Answer

You must have the sandbox-manage permission, access to all sandboxes, and the organization must be provisioned with the "acp_growth_credits" feature.

+++

<!--
## Manage batch capacity

Batch capacity management is consumption-based and includes two types of batch runs:

- On-demand runs
- Scheduled runs

Each run type uses a separate API request, so the system processes them independently. Keeping the run types separate ensures that capacity updates are completed in full and prevents partial updates.

>[!NOTE]
>
>Unlike capacity-based services, these services consume credits when usage exceeds your included baseline.

To view the batch run dashboard, select a sandbox from **[!UICONTROL Batch runs]**. The dashboard displays your current usage. You can drill down by selecting a date range or specifying a custom date range. You can also view cumulative usage or a monthly breakdown.

The table provides details about on-demand runs for each sandbox.

![Batch run dashboard highlighting filter options.](/help/landing/images/capacity/batch-run-dashboard.png)

To manage your on-demand batch runs, select **[!UICONTROL Manage capacity]** from the **[!UICONTROL Batch runs]** dashboard.

![Batch run dashboard highlighting filter manage capacity.](/help/landing/images/capacity/batch-run-manage-capacity.png)

### Manage on-demand batch runs

From the **[!UICONTROL Manage batch capacity]** page, select **[!UICONTROL On-demand runs]**. The table displays usage/capacity details for each sandbox. Select **[!UICONTROL Add runs]** for the sandbox you want to update.

![Manage batch capacity page highlighting on-demand runs and add runs.](/help/landing/images/capacity/add-runs.png)

Enter the number of batch runs you want to add to the sandbox in increments of 100, then confirm your selection.

![Manage batch capacity page highlighting updated runs and confirm.](/help/landing/images/capacity/enter-runs.png)

The usage and capacity values update to show the pending runs. Select **[!UICONTROL Update capacity]** to apply the changes, then select **[!UICONTROL Confirm]**.

![Batch run dashboard highlighting pending runs and update capacity.](/help/landing/images/capacity/batch-run-update-capacity.png)

The **On-demand runs** table updates to reflect the new run capacity.

### Manage scheduled batch runs

>[!NOTE]
>
>Batch Segmentation reservations are based on projected consumption. You can continue to schedule runs when projected usage exceeds your baseline, but the additional usage may consume credits.

>[!TIP]
>
>Review consumption regularly and investigate sustained increases before they result in additional credit usage.

From the **[!UICONTROL Manage batch capacity]** page, select **[!UICONTROL Scheduled runs]**. The table displays usage and capacity details for each sandbox. Select **[!UICONTROL Add runs]** for the sandbox you want to update.

![Manage batch capacity page highlighting Scheduled runs and Add runs.](/help/landing/images/capacity/scheduled-runs-add-runs.png)

Enter the number of batch runs you want to add to the sandbox in increments of 100, then confirm your selection.

![Manage batch capacity page highlighting the number of scheduled runs and confirmation.](/help/landing/images/capacity/scheduled-runs-enter-runs.png)

>[!NOTE]
>
>Your baseline includes one evaluation run per day for all batch audiences.

To increase the audience limit for a sandbox, select **[!UICONTROL Upgrade]**. From the dropdown, select **[!UICONTROL Audience limit per run]**, then select **[!UICONTROL Confirm]**.

>[!IMPORTANT]
>
>Audience limit upgrades are locked for the remainder of the current contract year.

![Manage batch capacity page highlighting the Audience limit per run upgrade option.](/help/landing/images/capacity/scheduled-runs-audience-limit.png)

You are returned to the **[!UICONTROL Manage batch capacity]** page, which displays the pending updates. Select **[!UICONTROL Update capacity]** to confirm your changes, then select **[!UICONTROL Confirm]**.

![Manage batch capacity page highlighting pending scheduled run updates and the Update capacity action.](/help/landing/images/capacity/batch-scheduled-run-update-capacity.png)

The **Scheduled runs** table updates to reflect the new usage, capacity, and audience limit per run.
-->
