---
title: Monitor Activities in Event Forwarding
description: Learn how to monitor usage, investigate error details with Error Insights, and monitor compute time in your event forwarding properties.
feature: Event Forwarding
exl-id: 9d8572a3-816e-4b66-afe6-344fe8a15f22
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
---
# Monitor activities in event forwarding (Beta)

>[!IMPORTANT]
>
>This feature is currently in beta and your organization may not have access to it yet. The functionality and documentation are subject to change.

The **[!UICONTROL Monitoring]** tab in the Data Collection UI allows you to monitor usage patterns, errors, and compute time of your event forwarding properties. You can also use **[!UICONTROL Error Insights]** to investigate aggregated error details for your running event forwarding library. This guide provides an overview of how to view and understand these reports.

![Image showing the monitoring tab in the Data Collection UI](../../images/ui/event-forwarding/monitoring/monitoring-tab.png)

## Prerequisites

This guide assumes that you have purchased event forwarding and that you have a working understanding of how event forwarding works. See the [event forwarding overview](./overview.md) for more information.

## Video overview

Watch the following video for a high-level overview of the monitoring feature:

>[!VIDEO](https://video.tv.adobe.com/v/343999?quality=12&learn=on)

## Selecting properties and environments

You can view metrics within an individual environment and property, or across all properties and environments owned by your organization. 

To show metrics for a single property, select the property dropdown menu and choose the property of interest from the list. Once you have chosen a property, you can also use the environment dropdown to select an environment of interest.

![Image showing the property environment dropdown menus in the UI](../../images/ui/event-forwarding/monitoring/property-environment.png)

## [!UICONTROL Usage]

>[!NOTE]
>
>Usage data is refreshed every month after the previous month ends.

The **[!UICONTROL Usage]** report shows incoming and outgoing calls for a given time period. Incoming calls represent data sent to event forwarding. Outgoing calls represents data sent from event forwarding. The **[!UICONTROL Total events]** number in the left pane is the sum of incoming and outgoing calls for the given time period.

## [!UICONTROL Error Events]

The **[!UICONTROL Error Events]** report shows errors in aggregate, and broken out by HTTP response code when you hover your cursor over the line chart. The displayed errors are from outgoing calls and the response codes are from the endpoint that event forwarding is interacting with.

The errors are shown for a given time period, which can be adjusted from the provided dropdown menu. 

![Image showing the time period dropdown menu for the Error Events report](../../images/ui/event-forwarding/monitoring/error-time.png)

The search box for the error event allows you to query event forwarding to understand errors for a given endpoint domain. You must enter the exact domain, as the search feature does not accept approximations or "fuzzy" matches. Once you provide an exact domain for which there is outgoing error data, hit Enter and the report refreshes to show outgoing errors for that domain. For example, to see errors from the Facebook Conversions API endpoint the domain should be written as `https://graph.facebook.com`.

To investigate the errors behind the aggregate report, use [Error Insights](#error-insights).

## [!UICONTROL Error Insights] {#error-insights}

The **[!UICONTROL Error Insights]** tab on the **[!UICONTROL Monitoring]** page in Real-Time CDP Connections provides aggregated error details for your running event forwarding library. Use these details to troubleshoot live event streams and investigate errors that occur when your library runs or sends data to a destination.

### Access Error Insights

Select the **[!UICONTROL Error Insights]** tab from the **[!UICONTROL Monitoring]** UI. Next, select the property and environment you want to investigate and select a rolling time window of **1 hour**, **12 hours**, or **24 hours** to view aggregated error details for that period.

![Image showing the Error Insights tab in the Monitoring UI](../../images/ui/event-forwarding/monitoring/error-insights.png)

### Investigate error details

Error Insights provides details about the following types of errors:

* **Destination errors**: Error responses returned by an egress destination when event forwarding sends data to that destination. Use the response details to investigate failed outgoing calls.

  ![Image showing destination errors in Error Insights](../../images/ui/event-forwarding/monitoring/destination-errors.png)

* **Code and runtime errors**: Errors generated by data elements, custom code, and other runtime errors in your event forwarding library.

  ![Image showing code and runtime errors in Error Insights](../../images/ui/event-forwarding/monitoring/code-runtime-errors.png)

Review the available error details to identify failures in your library or responses from a destination that require further investigation.

>[!IMPORTANT]
>
>Error Insights uses a rolling time window. It does not show historical errors outside the selected window. Errors are sampled, so not every error appears in the UI. The highest-frequency errors are shown to help you focus on the most common failures.

## [!UICONTROL Compute Time]

The **[!UICONTROL Compute Time]** report shows the compute time of all rules on event forwarding servers.

>[!NOTE]
>
>The displayed times do not represent end-to-end latency. Event forwarding has a compute-time limitation of 50 milliseconds. If this limit is exceeded, the related data will be dropped.

The following factors affect compute time:

1. The number of rules
2. The complexity of the rules, usually driven by the amount of custom JavaScript being executed

For example, if an action in event forwarding hits an endpoint and that endpoint takes two seconds to respond, this two-second latency will not count against compute time because event forwarding is just waiting and not actively computing anything. The response time cannot be longer than 30 seconds, otherwise data will be dropped.
