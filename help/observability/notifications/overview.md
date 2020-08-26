---
keywords: Experience Platform;home;popular topics;date range
solution: Experience Platform
title: Observability notifications overview
topic: developer guide
description: Observability Insights is a RESTful API that allows you to expose key observability metrics in Adobe Experience Platform. These metrics provide insights into Platform usage statistics, health-checks for Platform services, historical trends, and performance indicators for various Platform functionalities.
---

# [!DNL Observability] notifications overview

[!DNL Observability Insights] allows you to subscribe to event notifications regarding Adobe Experience Platform activities. They reduce or eliminate the need to poll the [[!DNL Observability Insights] API](../api/overview.md) in order to check if a job has completed or if a certain milestone within a workflow has been reached.

[!DNL Observability] notifications currently leverage Adobe I/O Events, which can be sent to a configured webhook to facilitate efficient automation of activity monitoring. However, notification capabilities will eventually encompass email and UI notifications as well.

To get started with [!DNL Observability] notifications, continue to the tutorial on [subscribing to I/O Event notifications](./subscribe.md).