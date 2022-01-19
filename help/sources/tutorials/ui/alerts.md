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
