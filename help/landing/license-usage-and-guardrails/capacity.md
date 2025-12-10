---
title: License Usage and Capacity
description: Learn about your license usage and capacity limits within Adobe Experience Platform.
exl-id: 38dad2f1-bd0f-4cc3-a3a6-5105ea866ea4
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
>abstract="The streaming throughput value measures the combined peak inbound events per second for streaming ingestion into Profile service, across your production and development sandboxes."

>[!CONTEXTUALHELP]
>id="platform_capacity_streamingaudiences"
>title="Streaming audience count"
>abstract="The maximum number of streaming audiences per sandbox. This number is inclusive of the number of edge audiences you have in your sandbox."

>[!CONTEXTUALHELP]
>id="platform_capacity_edgeaudiences"
>title="Edge audiences"
>abstract="The maximum number of edge audiences per sandbox."

Currently, Capacity supports the following services:

- Streaming segmentation
- Streaming ingestion

Within these services, the following guardrails are tracked:

- The maximum number of streaming audiences is 500
  - Of these 500 streaming audiences, the maximum number of edge audiences is 150
- The initial combined throughput for streaming ingestion is 1500 records per second (rps)
  - This combined streaming throughput measures the combined peak inbound events per second for streaming ingestion into Real-Time Customer Profile across your production and development sandboxes.
  - You can purchase additional streaming segmentation support of up to 13,500 records per second. More information about purchasing additional entitlements can be found in the [Real-Time CDP product description](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2c-edition-prime-and-ultimate-packages.html).

The audience capacity is at a **sandbox** level. This means that, for every sandbox you have in your organization, you can have 500 streaming audiences, of which 150 of those can be edge audiences.

The streaming throughput capacity is at an **organization** level and can be distributed to your individual sandboxes. For example, with the 1500 rps for streaming ingestion throughput, you can set your production sandbox to be at 1300 rps and your development sandbox to be at 200 rps.

Experience Platform calculates the sandbox's throughput in 15 minute rolling intervals. This throughput is measured in real-time, with the data refreshing every 60 seconds.

If your usage reaches 80% and 90% of your licensed capacity, Experience Platform will issue an alert, notifying that you are reaching the maximum of your specified capacity. You can modify the settings to customize the capacity percentage to receive the alert or remove the alert entirely.

If your usage goes to above 100% of your licensed capacity, you will be considered in breach of your capacity. At this point, you will experience performance latency, and your service level targets (SLTs) will **not** be guaranteed.

## Access {#access}

To access the Capacity overview, select **[!UICONTROL License usage]** followed by **[!UICONTROL Capacity]**. 

![The method to access the Capacity section is highlighted.](/help/landing/images/capacity/access-capacity.png)

The Capacity overview page is displayed, showing information including a history of alerts as well as details of your organization's capacities.

![The Capacity overview page is displayed in full, showing the alert history and the capacity details sections.](/help/landing/images/capacity/capacity-overview.png) {zoomable="yes" width="80%"}

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

### Capacity details {#capacity-details}

The Capacity details section outlines information about your organization's capacities. In this section, you can filter per sandbox and change the lookback period.

![The sandbox selector and the date picker for the lookback period are highlighted.](/help/landing/images/capacity/filter-sandbox-and-date.png)

Currently, this displays capacity information about streaming throughput, streaming audiences, and edge audiences.

#### Streaming throughput {#streaming-throughput}

The streaming throughput section displays information about the streaming throughput within your organization's sandboxes. The streaming throughput value measures the combined peak inbound events per second for streaming ingestion into Profile service.

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

#### Audience count {#audience-count}

The **[!UICONTROL Streaming audience count]** and **[!UICONTROL Edge audience count]** sections display the number of streaming and edge audiences within the sandbox as well as the maximum number of streaming and edge audiences allowed within the sandbox.

![The Audience counts sections are displayed.](/help/landing/images/capacity/audience-count.png)

| Column name | Description |
| ----------- | ----------- |
| Sandbox | The name of the sandbox. |
| Services | The service that is in use for the sandbox. |
| Usage | The number of audiences of the listed type that are in the sandbox. |
| Capacity | The maximum number of audiences of the listed type that are allowed in the sandbox. |

## Streaming throughput best practices {#suggestions}

You can resolve your streaming throughput violations by adopting one of the following recommendations:

1. Increase the allocated capacity for the sandbox.
2. Identify high throughput dataflows in the [monitoring dashboard](/help/dataflows/ui/monitor-streaming-profile.md) and apply throttling or filtering against these dataflows if needed.
3. Optimize your ingestion by using batch ingestion for lower latency use cases.

Additionally, you can look at your dataflows and see if you can optimize your data strategy.

| Contributing factor | What it is | Impact to use cases | Best practices |
| --- | --- | --- | --- |
| Batch to streaming conversion | Batch workloads converted to streaming can significantly increase throughput, affecting performance and resource allocation. For example, performing a bulk profile update after an event without rate limits. | Streaming strategies are unnecessary for batch use cases when low-latency processing isn't required. | Evaluate use case requirements. For batch outbound marketing, consider using [batch ingestion](/help/ingestion/batch-ingestion/overview.md) instead of streaming to manage data ingestion more efficiently.  |
| Unnecessary data ingestion | Ingesting data not required for personalization increases throughput without adding value, wasting resources. For example, ingesting all analytics traffic into profiles regardless of relevance.| Excess non-relevant data creates noise, making it harder to identify impactful data points. It can also cause friction when defining and managing audiences and profiles. | Ingest only data that is required for your use cases. Ensure that you filter out unnecessary data.<ul><li>**Adobe Analytics**: Use [row-level filtering](/help/sources/tutorials/ui/create/adobe-applications/analytics.md#filtering-for-real-time-customer-profile) to optimize your data intake.</li><li>**Sources**: Use the [[!DNL Flow Service] API to filter row-level data](/help/sources/tutorials/api/filter.md) for supported sources like [!DNL Snowflake] and [!DNL Google BigQuery].</li></li>**Edge datastream**: Configure [dynamic datastreams](/help/datastreams/configure-dynamic-datastream.md) to perform row-level filtering of traffic coming in from WebSDK.</li></ul> |

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
