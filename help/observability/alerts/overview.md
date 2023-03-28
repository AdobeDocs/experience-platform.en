---
keywords: Experience Platform;home;popular topics;date range
title: Alerts Overview
description: Learn about alerts in Adobe Experience Platform, including the structure of how alert rules are defined.
feature: Alerts
exl-id: c38a93c6-1618-4ef9-8f94-41c7ab4af43c
---
# Alerts overview

>[!NOTE]
>
>Alerts are not supported in non-production sandboxes. In order to subscribe to alerts, you must ensure that you are using a production sandbox.

Adobe Experience Platform allows you to subscribe to event-based alerts regarding Adobe Experience Platform activities. Alerts reduce or eliminate the need to poll the [[!DNL Observability Insights] API](../api/overview.md) in order to check if a job has completed, if a certain milestone within a workflow has been reached, or if any errors have occurred.

When a certain set of conditions in your Platform operations is reached (such as a potential problem when the system breaches a threshold), Platform can deliver alert messages to any users in your organization who have subscribed to them. These messages can repeat over a pre-defined time interval until the alert has been resolved.

This document provides an overview of alerts in Adobe Experience Platform, including the structure of how alert rules are defined.

## One-time alerts vs. repeating alerts

Platform alerts can be sent one time, or they can repeat over a pre-defined interval until they are resolved. The use cases of each of these options are intended to differ in the following ways:

| One-time alert | Repeating alert |
| --- | --- |
| Does not necessarily indicate a problem. |  Indicates a potentially undesirable state. |
| Does not repeat. | Can repeat if the anomalous condition persists. |
| Examples include:<ul><li>Data ingestion has successfully completed.</li><li>A query execution has finished.</li><li>Data has been deleted.</li></ul> | Examples include:<ul><li>Ingestion duration is exceeding the service-level agreement (SLA).</li><li>Daily ingestion did not happen over the past 24 hours.</li><li>The stream processor's rate of error is above the configured threshold.</li><li>The total number of profiles is exceeding entitlement.</li></ul> |

{style="table-layout:auto"}

## Anatomy of an alert

An alert can be broken down into the following components:

| Component | Description |
| --- | --- |
| **Metric** | An Observability [metric](../api/metrics.md#available-metrics) whose value triggers the alert, such as the number of failed batch ingestion events (`timeseries.ingestion.dataset.batchfailed.count`). |
| **Condition** | A condition related to the metric which triggers the alert if it resolves to true, such as a count metric exceeding a certain number. This condition may be associated with a pre-defined time window. |
| **Window** | (Optional) The condition for an alert may be constrained to a pre-defined time window. For example, an alert may trigger depending on the number of failed batches in the past five minutes. |
| **Action** | When an alert is triggered, an action is performed. Specifically, messages are sent to applicable recipients through a delivery channel, such as a pre-configured webhook or the Experience Platform UI. |
| **Frequency** | (Optional) An alert can be configured to repeat its action at a defined interval if its condition remains true or is otherwise unresolved. |

{style="table-layout:auto"}

## Receiving and managing alerts

Alerts can be received and managed through two channels:

* [Adobe I/O Events](#events)
* [Platform UI](#ui)

### I/O Events {#events}

Alerts can be sent to a configured webhook to facilitate efficient automation of activity monitoring. In order to receive alerts via webhook, you must register your webhook for Platform alerts in Adobe Developer Console. See the guide on [subscribing to Adobe I/O Event notifications](./subscribe.md) for specific steps.

### Platform UI {#ui}

The Platform UI allows you to view received alerts and manage alert rules. The following video provides an introduction to these capabilities.

>[!VIDEO](https://video.tv.adobe.com/v/336218?quality=12&learn=on)

To work with alerts in the Platform UI, you must have the following access control permissions enabled through Adobe Admin Console:

| Permission | Description |
| --- | --- |
| View Alerts | Allows you to view received alert messages. |
| View Alerts History* | Allows you to view a history of received alerts via the [!UICONTROL Alerts] tab. |
| Manage Alerts* | Allows you to enable and disable alert rules via the [!UICONTROL Alerts] tab. |
| Resolve Alerts* | Allows you to resolve triggered alerts via the [!UICONTROL Alerts] tab. |

{style="table-layout:auto"}

**In order to access the [!UICONTROL Alerts] tab, you must also be granted the View Alerts permission in combination with one of the other permissions.*

>[!NOTE]
>
>For more information on how to manage permissions in Platform, refer to the [access control documentation](../../access-control/ui/overview.md).

With the View Alerts permission, can view received alerts by selecting the the bell icon (![Bell Icon](../images/alerts/overview/icon.png)) in the top-right corner.

![](../images/alerts/overview/ui.png)

>[!NOTE]
>
> Select an alert to navigate to a related dashboard for more detailed information on why the alert has been triggered.

In addition, the [!UICONTROL Alerts] tab in the UI allows individual users to subscribe to specific alert types, and allows admins to enable or disable alert rules altogether. See the [UI guide](./ui.md) for more information on managing alerts.

## Next steps

By reading this document, you have been introduced to Platform alerts and their role in the Platform ecosystem. Refer to the process documentation linked to throughout this overview to learn how to receive and manage alerts.
