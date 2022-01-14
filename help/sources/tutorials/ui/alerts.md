---
keywords: Experience Platform;home;popular topics; alerts
description: You can subscribe to alerts when creating a dataflow, to receive alert messages regarding the status, success, or failure of your flow run.
title: Subscribe to in-context alerts in the UI
hide: true
hidefromtoc: true
exl-id: 5d51edaa-ecba-4ac0-8d3c-49010466b9a5
---
# Subscribe to alert messages to monitor your sources dataflows in the UI

Adobe Experience Platform allows you to subscribe to event-based alerts regarding Adobe Experience Platform activities. Alerts reduce or eliminate the need to poll the [[!DNL Observability Insights] API](../../../observability/api/overview.md) in order to check if a job has completed, if a certain milestone within a workflow has been reached, or if any errors have occurred.

You can subscribe to alerts when creating a dataflow, to receive alert messages regarding the status, success, or failure of your flow run.

This document provides steps on how to subscribe to alerts and receive alert messages for your flow runs.

## Getting started

This document requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Observability](../../../observability/home.md): [!DNL Observability Insights] allows you to monitor Platform activities through the use of statistical metrics and event notifications.
  * [Alerts](../../../observability/alerts/overview.md): When a certain set of conditions in your Platform operations is reached (such as a potential problem when the system breaches a threshold), Platform can deliver alert messages to any users in your organization who have subscribed to them.

## Subscribe to alerts in the UI {#subscribe-sources-alerts}

>[!CONTEXTUALHELP]
>id="platform_sources_alerts_subscribe"
>title="Subscribe to sources alerts"
>abstract="Alerts allow you to receive notifications based on the status of your sources dataflows. You can set alert notifications to get updates if your dataflow has started, is successful, has failed, or did not ingest any data."
>text="Learn more in documentation"

>[!IMPORTANT]
>
>You must enable instant notifications of emails for your Platform account in order to receive email-based alert notifications for your dataflows.

You can enable alerts for your dataflows during the *Dataflow detail* step of the sources workflow in the sources workspace.

![dataflow-detail](../../images/tutorials/alerts/dataflow-detail.png)

The available alerts sources dataflows are:

| Alerts | Description |
| --- | --- |
| Sources Dataflow Run Start | |
| Sources Dataflow Run Success | |
| Sources Dataflow Run Failure | An error occurred when ingesting data from a source connection. |
| Sources Dataflow Lack of Ingestion | |

Select the alerts you would like to subscribe to and then select **[!UICONTROL Next]** to review and finish your dataflow.

![select-alerts](../../images/tutorials/alerts/select-alerts.png)

## Receive alerts

Once your dataflow runs, you can start receiving alerts through both the UI or email.

### UI alerts

Alerts on your dataflows are represented in the UI by a notification icon in the top header of the Platform UI. Select the notification icon to see specific alert messages regarding your dataflows.

![notification](../../images/tutorials/alerts/notification.png)

The notifications panel appears, displaying a list of status updates on the dataflow that you created. You can hover on an alert message to mark them as read or you can select the clock icon to remind you with alerts in five minutes, ten minutes, one hour, or tomorrow.

![remind-me](../../images/tutorials/alerts/remind-me.png)

Select the alert message to see specific information on your dataflow.

![alert-window](../../images/tutorials/alerts/alert-window.png)

The *Dataflow run overview* page appears... The upper half of the screen displays an overview on your dataflow, including information on its attributes, corresponding dataflow run ID, and high-level error summary.

![dataflow-run-overview](../../images/tutorials/alerts/dataflow-run-overview.png)

The lower half of the page displays any *Dataflow run errors* that ocurred during the dataflow run stage. From here, you can preview error diagnostics or use the [!DNL Data Access] API to download error diagnostics or the file manifest that corresponds to your dataflow.

![dataflow-run-errors](../../images/tutorials/alerts/dataflow-run-errors.png)

For more information handling dataflow errors, see the guide on [monitoring sources dataflows in the UI](../../../dataflows/ui/monitor-sources.md).

### Email alerts

Alerts for your dataflows are also delivered to you by email.

![email](../../images/tutorials/alerts/email.png)

![dataflow-run-overview](../../images/tutorials/alerts/dataflow-run-overview.png)

## Subscribe and unsubscribe to alerts

You can subscribe to more alerts or unsubscribe from established alerts for an existing dataflow in the *Dataflows* page. Locate the dataflow you create from the list and then select the ellipses (`...`) to see a dropdown menu of options.

Select [!UICONTROL Subscribe alerts] to modify the alert settings of your dataflow.

![subscribe-alerts](../../images/tutorials/alerts/subscribe-alerts.png)