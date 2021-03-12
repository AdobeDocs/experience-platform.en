---
keywords: Experience Platform;user interface;UI;customization;license usage dashboard;dashboard;license usage;entitlement;consumption
title: License Usage Dashboard
description: Adobe Experience Platform provides a dashboard through which you can view important information about your organization's license usage.
topic: guide
type: Documentation
---

# (Beta) License usage dashboard {#license-usage-dashboard}

>[!IMPORTANT]
>
>The dashboard functionality outlined in this document is currently in beta and is not available to all users. The documentation and the functionality are subject to change.

The Adobe Experience Platform user interface (UI) provides a dashboard through which you can view important information about your organization's license usage, as captured during a daily snapshot. This guide outlines how to access and work with the license usage dashboard in the UI and provides more information regarding the visualizations displayed in the dashboard.  

For a general overview of the Platform UI, please visit the [Experience Platform UI guide](../../landing/ui-guide.md).

## License usage dashboard data

The license usage dashboard displays a snapshot of your organization's license-related data for Experience Platform. The data in the dashboard is displayed exactly as it appears at the specific point in time when the snapshot was taken. In other words, the snapshot is not an approximation or sample of the data, and the dashboard is not updating in real time.

>[!NOTE]
>
>Any changes or updates made to the data since the snapshot was taken will not be reflected in the dashboard until the next snapshot is taken.

## Exploring the license usage dashboard

To navigate to the license usage dashboard within the Platform UI, select **[!UICONTROL License usage]** in the left rail. This opens with the **[!UICONTROL Overview]** tab displaying the dashboard.

![](../images/license-usage/dashboard-overview.png)

### Select a sandbox

To choose a sandbox to view in the dashboard, select either [!UICONTROL Production] or [!UICONTROL Development]. The selected sandbox is indicated by the radio button next to the sandbox name. 

>[!NOTE]
>
>Consumption reporting for sandboxes is cumulative for all sandboxes of the same type. In other words, selecting [!UICONTROL Production] or [!UICONTROL Development] provides consumption reports for all production or development sandboxes, respectively.

![](../images/license-usage/select-sandbox.png)

### Select a date range

After selecting a sandbox, you can use the date range dropdown to select the time period to display in the dashboard. There are three available options: [!UICONTROL Last 30 days], [!UICONTROL Last 90 days], and [!UICONTROL Last 12 months]. The last 30 days are selected by default.

![](../images/license-usage/select-date-range.png)

## Widgets

The license usage dashboard is composed of widgets, which display read-only metrics providing important information regarding your organization's license usage. The visible metrics depend on your organization's specific licensing (see the [available metrics](#available-metrics) section for details).

Each widget displays a line graphs comparing actual numbers for your organization to the total available with your organization's licensing and provide a percentage of total usage.

![](../images/license-usage/widgets.png)

## Available metrics

There are currently four metrics available in the license usage dashboard:

* [!UICONTROL Addressable Audience] (measured by number of profiles)
* [!UICONTROL Average profile richness]
* [!UICONTROL Total consumed storage]
* [!UICONTROL Data scanned per segmentation ratio]

The definition of each of these metrics varies depending on the licensing that your organization has purchased. For detailed definitions of each metric, please reference the appropriate Product Description documentation:

|License|Product Description|
|---|---|
|<ul><li>ADOBE EXPERIENCE PLATFORM:OD LITE</li><li>ADOBE EXPERIENCE PLATFORM:OD STANDARD</li><li>ADOBE EXPERIENCE PLATFORM:OD HEAVY</li></ul>|[Adobe Experience Platform](https://helpx.adobe.com/legal/product-descriptions/adobe-experience-platform.html)|
|<ul><li>ADOBE EXPERIENCE PLATFORM:OD</li></ul>|[Adobe Experience Platform](https://helpx.adobe.com/legal/product-descriptions/adobe-experience-platform.html)|
|<ul><li>RT CUSTOMER DATA PLATFORM:OD</li><li>RT CUSTOMER DATA PLATFORM:OD PRFL TO 10M</li><li>RT CUSTOMER DATA PLATFORM:OD PRFL TO 50M</li></ul>|[Real-time Customer Data Platform](https://helpx.adobe.com/legal/product-descriptions/adobe-experience-platform.html)|
|<ul><li>AEP:OD ACTIVATION</li><li>AEP:OD ACTIVATION PRFL TO 10M</li><li>AEP:OD ACTIVATION PRFL UP TO 50M</li></ul>|[Adobe Experience Platform Activation](https://helpx.adobe.com/legal/product-descriptions/adobe-experience-platform0.html)|
|<ul><li>AEP:OD INTELLIGENCE</li></ul>|[Adobe Experience Platform Intelligence](https://helpx.adobe.com/legal/product-descriptions/adobe-experience-platform-intelligence---product-description.html)|

## Next steps

After reading this document, you are able to locate the license usage dashboard and select a sandbox to view. You can also find more information about available metrics for your organization, based on the licensing your organization has purchased. 

To learn more about other features available in the Experience Platform UI, please refer to the [Platform UI guide](../../landing/ui-guide.md).