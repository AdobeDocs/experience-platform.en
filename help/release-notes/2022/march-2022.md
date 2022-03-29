---
title: Adobe Experience Platform Release Notes
description: The latest release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: March 30, 2022**

New features in Adobe Experience Platform:

- [Audit Logs](#audit-logs)

Updates to existing features in Adobe Experience Platform:

- [Alerts](#alerts)

## [!DNL Audit Logs] {#audit-logs}

Experience Platform allows you to audit user activity for various services and capabilities. The audit logs provide information about who did what and when.

**New features**
| Feature | Description |
| --- | --- |
| Audit logs for Dataset, Schema, Class, Field group, Data type, Sandbox, Destination, Segment, Merge policy, Computed attribute, Product profile and Account (Adobe) | These are the resources which are recorded by audit logs. If the feature is enabled, the audit logs will be automatically collected as activity occurs. You do not need to manually enable log collection. |
| Export audit logs | The audit logs can be downloaded as a `CSV` or `JSON` file. The generated files are saved directly to your machine.  |

## [!DNL Alerts] {#alerts}

Experience Platform allows you to subscribe to event-based alerts for various Platform activities. You can subscribe to different alert rules through the [!UICONTROL Alerts] tab in the Platform user interface, and can choose to receive alert messages within the UI itself or through email notifications.

**Updated features**

| Feature | Description |
| --- | --- |
| New alert rules | Two new alert rules are now available for sources related to data ingestion. See the overview on [alert rules](../../observability/alerts/rules.md) for the updated list of alert types. |
| In-context alerts for sources dataflows | You can now subscribe to receive alert messages regarding the status of your dataflows during the ingestion workflow. For more information, see the guide on [subscribing to sources alerts in the UI](../../sources/tutorials/ui/alerts.md). |

For more information on alerts in Platform, refer to the [alerts overview](../../observability/alerts/overview.md).
