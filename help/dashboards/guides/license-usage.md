---
keywords: Experience Platform;user interface;UI;customization;license usage dashboard;dashboard;license usage;entitlement;consumption
title: License Usage Dashboard
description: Adobe Experience Platform provides a dashboard through which you can view important information about your organization's license usage.
type: Documentation
exl-id: 143d16bb-7dc3-47ab-9b93-9c16683b9f3f
---
# License usage dashboard {#license-usage-dashboard}

>[!CONTEXTUALHELP]
>id="testy-mctestface"
>title="Test dialog that should not be visible"
>abstract="The object {name} is being viewed on {date}."

>[!CONTEXTUALHELP]
>id="platform_dashboards_licenseusage_core"
>title="Core products table"
>abstract="The core products listed in the table have their own metrics, usage tracking, and drill-through views at the sandbox level. These core products provide the key metrics for tracking, and any add-ons are included in these metrics."

>[!CONTEXTUALHELP]
>id="platform_dashboards_licenseusage_addons"
>title="Add-ons table"
>abstract="The Add-ons table lists products whose license amounts are combined with the metrics supported by core products. These add-ons do not have separate metrics but enhance the usage tracking of the core products they are associated with."

>[!CONTEXTUALHELP]
>id="platform_dashboards_licenseUsage"
>title="License usage dashboard"
>abstract="The license usage dashboard offers insight into the Adobe Experience Platform products that you've purchased. The dashboard overview displays the primary metrics for your products including your usage for each of the primary metrics and your contracted license amount. The details workspace displays a breakdown of your metrics for each product within specific sandboxes."
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/data-lifecycle/ui/dataset-expiration" text="Automated dataset expirations"
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/profile/pseudonymous-profiles" text="Pseudonymous profiles data expiration"

>[!CONTEXTUALHELP]
>id="platform_licenseusage"
>title="License usage dashboard"
>abstract="The license usage dashboard offers insight into the Adobe Experience Platform products that you've purchased. The dashboard overview displays the primary metrics for your products including your usage for each of the primary metrics and your contracted license amount. The details workspace displays a breakdown of your metrics for each product within specific sandboxes."
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/data-lifecycle/ui/dataset-expiration" text="Automated dataset expirations"
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/profile/pseudonymous-profiles" text="Pseudonymous profiles data expiration"

>[!CONTEXTUALHELP]
>id="platform_dashboards_licenseusage_predictedusage_computehours"
>title="Predicted Compute Hours"
>abstract="Your usage might reach the licensed amount. To assess or reduce your compute hours, navigate to Queries > Log to review your query history. If you do not have permission to access the Queries workspace, please contact your administrator."
>additional-url="https://experience.adobe.com/#/platform/query/log" text="Queries Log workspace"

>[!CONTEXTUALHELP]
>id="platform_dashboards_licenseusage_predictedusage_addressableaudience"
>title="Predicted Addressable Audience"
>abstract="Your usage might reach the licensed amount. To reduce usage, you can configure dataset or pseudonymous profile data expirations for sandboxes and datasets."
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/profile/event-expirations" text="Experience Event expirations"
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/profile/pseudonymous-profiles" text="Pseudonymous profiles data expiration"

>[!CONTEXTUALHELP]
>id="platform_dashboards_licenseusage_predictedusage_engageableprofiles"
>title="Predicted Engageable Profiles"
>abstract="Your usage might reach the licensed amount. To reduce usage, you can configure dataset or pseudonymous profile data expirations for sandboxes and datasets."
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/profile/event-expirations" text="Experience Event expirations"
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/profile/pseudonymous-profiles" text="Pseudonymous profiles data expiration"

>[!CONTEXTUALHELP]
>id="platform_dashboards_licenseusage_predictedusage_businesspersonprofile"
>title="Predicted Business Person Profile"
>abstract="Your usage might reach the licensed amount. To reduce usage, you can configure dataset or pseudonymous profile data expirations for sandboxes and datasets."
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/profile/event-expirations" text="Experience Event expirations"
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/profile/pseudonymous-profiles" text="Pseudonymous profiles data expiration"

>[!CONTEXTUALHELP]
>id="platform_dashboards_licenseusage_predictedusage_corehours"
>title="Predicted Core Hours"
>abstract="Your usage might reach the licensed amount. To reduce usage, you can configure dataset or pseudonymous profile data expirations for sandboxes and datasets."
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/profile/event-expirations" text="Experience Event expirations"
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/profile/pseudonymous-profiles" text="Pseudonymous profiles data expiration"

>[!CONTEXTUALHELP]
>id="platform_dashboards_licenseusage_predictedusage_totaldatavolume"
>title="Predicted Total Data Volume"
>abstract="Your usage might reach the licensed amount. To reduce usage, you can configure dataset or pseudonymous profile data expirations for sandboxes and datasets."
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/profile/event-expirations" text="Experience Event expirations"
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/profile/pseudonymous-profiles" text="Pseudonymous profiles data expiration"

>[!CONTEXTUALHELP]
>id="platform_dashboards_licenseusage_predictedusage_cjaRowsAvailable"
>title="Predicted CJA Rows Available"
>abstract="Your usage might reach the licensed amount. To reduce usage, you can configure dataset or pseudonymous profile data expirations for sandboxes and datasets."
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/profile/event-expirations" text="Experience Event expirations"
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/profile/pseudonymous-profiles" text="Pseudonymous profiles data expiration"

You can view important information about your organization's license usage through the Adobe Experience Platform [!UICONTROL License usage] dashboard. The information displayed here is captured during a daily snapshot of your Platform instance. 

License usage reports provide a high degree of granularity over your license usage metrics. The dashboard provides usage metrics for each purchased product (and associated add-ons), the consolidated usage of metrics in all production or development sandboxes, and the usage metric from a specific sandbox. The following Experience Platform applications can be tracked with usage metrics: Real-Time Customer Data Platform, Adobe Journey Optimizer, and Customer Journey Analytics.

This guide outlines how to access and work with the license usage dashboard in the UI and provides more information regarding the visualizations displayed in the dashboard.

For a general overview of the Platform UI, refer to the [Experience Platform UI guide](../../landing/ui-guide.md).

## [!UICONTROL License usage] dashboard data

The [!UICONTROL License usage] dashboard displays a list of all the Experience Platform products that you have purchased and any add-ons for those products. From this dashboard, you can find a snapshot of your organization's license-related data for Experience Platform across any associated sandbox.

The data in this dashboard is displayed exactly as it appears at the specific point in time when the snapshot was taken. In other words, the snapshot is not an approximation or sample of the data, and the dashboard is not updating in real time.

>[!NOTE]
>
>Any changes or updates made to the data since the snapshot was taken will not be reflected in the dashboard until the next snapshot is taken.

## Exploring the license usage dashboard {#explore}

To navigate to the license usage dashboard within the Platform UI, select **[!UICONTROL License usage]** in the left rail. The [!UICONTROL Overview] tab opens, displaying a list of available products.

>[!NOTE]
>
>The license usage dashboard is not enabled by default. Users must be granted "View License Usage Dashboard" permission to be able to view the dashboard. For steps on granting access permissions for viewing the license usage dashboard, refer to the [dashboard permissions guide](../permissions.md).

![The License usage dashboard Overview tab, with License usage highlighted in the left navigation sidebar.](../images/license-usage/dashboard-overview.png)

## [!UICONTROL Overview] tab {#overview-tab}

The [!UICONTROL License Usage] dashboard displays two separate tables: **Core products** and **Add-ons**.

- **[!UICONTROL Core products] table**: This table lists the main Adobe Experience Platform products licensed by your organization. Each core product has its own metrics, usage tracking, and drill-through views at the sandbox level. These core products provide the key metrics for tracking, and any add-ons are included in these metrics.

- **[!UICONTROL Add-ons] table**: This table lists additional products whose license amounts are combined with the metrics supported by the core products. Add-ons do not have separate metrics but enhance the usage tracking of the core products they are associated with.

| Column name  | Description |
|---|---|
| **[!UICONTROL Product]**  | The Adobe solution licensed by your organization. |
| **[!UICONTROL Primary Metric]**  | The primary metric used for tracking within that product. |
| **[!UICONTROL License Amount]**  | The contracted value for the maximum amount of the Primary Metric as agreed in your product license agreement. |
| **[!UICONTROL Usage]**  | The amount of your primary metric used. This value provides the total usage of that metric across all sandboxes, either production or development. |
| **[!UICONTROL Usage %]**  | The percentage of your primary metric used according to your license amount. |
| **[!UICONTROL Prediction Usage]**  | The predicted usage percentage of your primary metric according to your license amount. |

>[!NOTE]
>
>License amounts for add-ons are included in the [!UICONTROL License Amount] of the core products. For example, if you buy one pack of five sandboxes as an add-on, the amount is added to that of the base product. The add-ons table shows a [!UICONTROL License Amount] specific to the add-on, but the actual usage is tracked through the base product.

The tables indicate the primary metric for each product, as each product can track numerous metrics.

### Predicted usage {#predicted-usage}

>[!CONTEXTUALHELP]
>id="platform_dashboards_licenseUsage_prediction"
>title="Predicted usage"
>abstract="Predictions are based on the usage during the past 6-7 months and are generated on the 15th of every month. Please note that license usage predictions are approximations based on past usage. You are responsible for understanding your organization's actual usage and ensuring that usage does not go beyond the scope of your organization's license with Adobe. To reduce usage, you can configure dataset or pseudonymous profile data expirations for sandboxes and datasets."
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/data-lifecycle/ui/dataset-expiration" text="Automated dataset expirations"
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/profile/pseudonymous-profiles" text="Pseudonymous profiles data expiration"

>[!CONTEXTUALHELP]
>id="platform_licenseusage_prediction"
>title="Predicted usage"
>abstract="Predictions are based on the usage during the past 6-7 months and are generated on the 15th of every month. Please note that license usage predictions are approximations based on past usage. You are responsible for understanding your organization's actual usage and ensuring that usage does not go beyond the scope of your organization's license with Adobe. To reduce usage, you can configure dataset or pseudonymous profile data expirations for sandboxes and datasets."
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/data-lifecycle/ui/dataset-expiration" text="Automated dataset expirations"
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/profile/pseudonymous-profiles" text="Pseudonymous profiles data expiration"

Proactively manage and optimize your licensing resources based on insightful usage predictions. The [!UICONTROL Predicted Usage] column accurately predicts future license usage at the sandbox level, across all production and development sandboxes, for all of your purchased products. This alerting capability provides a forecast of license usage for six weeks in the future, based on your usage up to the 15th of this calendar month. Predictions are provided with a lower & an upper bound.

>[!IMPORTANT]
>
>Predictions are refreshed on a monthly basis. The date of refresh is included in an info icon (![This info icon.](../images/license-usage/info-icon.png)) above the column title.

To see a summary of a product's entitlement usage, select a product from the [!UICONTROL Core products] table.

![The [!UICONTROL License usage] [!UICONTROL Overview] with a product and the predicted usage column highlighted.](../images/license-usage/product-predicted-usage.png)

The summary tab appears. You can use the granular predictions available on the [!UICONTROL Summary] and [!UICONTROL Details] tabs to ensure informed decision-making for efficient license use.

>[!NOTE]
>
>Please note that license usage predictions are approximations based on past usage. You are responsible for understanding your organization's actual usage and ensuring that usage does not go beyond the scope of your organization's license with Adobe.

![The summary view of a Platform Product with the predicted usage column highlighted.](../images/license-usage/summary-predicted-usage.png)

The percentage of predicted usage is determined as follows:

- If the lower and upper bounds are significantly different, they are displayed as a range (for example, 32% - 35%).
- If the lower and upper bounds are nearly identical and not zero, they are displayed as an approximated value (for example, ~34%).
- If the lower and upper bounds are nearly identical and zero, they are displayed as exactly 0%.

>[!NOTE]
>
>"Nearly identical" in this context means that the values are statistically significant to two decimal places (for example, a lower bound of 0.342 and an upper bound of 0.344 are both rounded to 34%).

The predicted usage feature supports the following metrics:

- [!UICONTROL Addressable audience]
- [!UICONTROL Compute hours]
- [!UICONTROL Customer Journey Audience number of rows]
- [!UICONTROL Total Data Volume]

## [!UICONTROL Summary] tab {#summary-tab}

To view more metrics and detailed insights on your product license usage, select a product name from the list. The [!UICONTROL Summary] view for that product appears. All available metrics are displayed on the [!UICONTROL Summary] tab. The metrics available depend on the licensed product. This view provides **a consolidated view of all metrics across all production or development sandboxes**. The same level of analysis is provided for both production and development sandboxes.

![The summary view of a Platform Product that displays all available metrics for that product.](../images/license-usage/summary-tab.png)

On the summary tab, the table includes the [!UICONTROL Metric] column. These human-readable descriptions indicate all metrics used for that type of sandbox.

### Select a sandbox {#select-sandbox}

To change the view between production and development sandbox types, select either [!UICONTROL Production sandboxes] or [!UICONTROL Development sandboxes]. The selected sandbox type is indicated by the radio button next to the sandbox name.

Consumption reporting for sandboxes is cumulative for all sandboxes of the same type. In other words, selecting [!UICONTROL Production] or [!UICONTROL Development] provides consumption reports for all production or development sandboxes, respectively.

![The summary view of a Platform Product with Production sandboxes and Development sandboxes highlighted.](../images/license-usage/summary-tab-sandboxes.png)

>[!WARNING]
>
>Permission to view the license usage dashboard must be specified at a sandbox level. Add permissions to each individual sandbox to view them within the dashboard. This limitation will be addressed in a future release. In the meantime, the following workaround is available:
>
>1. Create a product profile in the Adobe Admin Console.
>2. Under Permission in the Sandbox category, add all sandboxes you wish to view in the license usage dashboard.
>3. Under the User Dashboard Permission category, add "View License Usage Dashboard" permission.

## [!UICONTROL Details] tab {#details-tab}

To see **a particular usage metric from a specific sandbox**, navigate to the [!UICONTROL Details] tab. The [!UICONTROL Details] tab shows all the available sandboxes within either the Production or Development sandboxes.

![The Details tab of the License usage dashboard.](../images/license-usage/details-tab.png)

From this view, you can select ![The inspect icon.](/help/images/icons/inspect.png) next to a sandbox name to view the visualization for that metric. A dialog opens with a visualization for that metric.

### Visualizations {#visualizations}

Each visualization widget includes the following aspects:

- A line graph tracking the metric change over time
- A key for the line graph
- The sandbox name
- A dropdown menu to adjust the time period for the line graph

The line graphs compare usage numbers for your organization to the total available with your organization's licensing and provide a percentage of total usage.

![The visualization of a metric.](../images/license-usage/visualization.png)

The lookback period of analysis can be adjusted from the dropdown menu. The default value of the last 30 days

To select a date range, you can use the date range dropdown to select the time period to display in the dashboard. There are multiple options available, including the default value of the last 30 days.

![The visualization dialog with the date range dropdown highlighted.](../images/license-usage/date-range.png)

You can also select **[!UICONTROL Custom date]** to choose the time period that is shown.

![The License usage dashboard Overview tab with the custom date range options highlighted.](../images/license-usage/custom-date-range.png)

## Available metrics {#available-metrics}

>[!IMPORTANT]
>
>Starting August 20th, customers with entitlements for '[!UICONTROL Average Profile Richness]' and '[!UICONTROL Total Storage]' instead saw '[!UICONTROL Total Data Volume]' in the License Usage Dashboard. There was no change to customer entitlements, only a simplification of tracking metrics. [!UICONTROL Total Data Volume] represents the data available in Adobe Experience Platform Profile Service for engagement and personalization workflows. This simplified metric improved the management and measurement of Profile Service use. Customers were encouraged to contact their Adobe representative for further clarification on this change.

The license usage dashboard reports on several unique metrics that are applicable to multiple products in the organization. The available metrics are:

| Metric | Description |
|---|---|
| [!UICONTROL Audience Activation Size] | The total size of profiles activated to any file-based destination in a year. Note: This does not include profiles sent through streaming destinations. |
| [!UICONTROL Addressable Audience] | The sum of your business audience entitlement and the consumer audience entitlement. A consumer audience is defined as the number of person profiles identified as a "Consumer Audience" on the sales order. A business audience is defined as the number of business person profiles identified as the "Business Audience" on the sales order. |
| [!UICONTROL Adhoc Query Service Users Packs]  | An add-on to increase your authorized concurrent Query Service Users entitlement by five additional concurrent Query Service users and one additional concurrently running ad hoc query per pack. Multiple additional Ad Hoc Query User packs may be licensed. |
| [!UICONTROL Average profile richness] | **Deprecated** - The sum of all production data stored within the Hub Profile Service at any point in time, divided by five times the number of authorized business person profiles. [!UICONTROL Average profile richness] is a shared feature. |
| [!UICONTROL CJA Rows Available] | The daily average rows of data available for analysis within Customer Journey Analytics.  |
| [!UICONTROL Computed Attributes] | The total count of aggregated profile behavioral data. Aggregated profile behavioral data is based on experience events that are converted into a profile attribute and can be included in a person profile or business person profile. |
| [!UICONTROL Consumer Audience] | The number of person profiles identified as "Consumer Audience" on the sales order. |
| [!UICONTROL Data Export Size] | The amount of data sent through dataset activations in a year. |
| [!UICONTROL Data Exports] | The total size of datasets that can be exported to any non-Adobe solution (directly or indirectly) in a year. |
| [!UICONTROL Data Lake Storage] | The quantity used of the analytical data store within Adobe Experience Platform. |
| [!UICONTROL Engageable Audience] | This metric refers to the audience of engageable profiles. An engageable profile is a record of information representing an individual and is represented in the Profile Service. These records are profiles that you have attempted to engage with using Journey Optimizer's authoring, decisioning, delivery, experimentation, or orchestration capabilities during the past 12 months. |
| [!UICONTROL Look-alike Audiences] | The count of audiences that are generated by modeling an existing consumer audience to identify person profiles similar to that existing consumer audience. |
| [!UICONTROL Number of AMM Models] | A count of the machine learning model (built in Adobe Mix Modeler) used to measure and/or predict a specified outcome based on your investments. |
| [!UICONTROL Number of Sandboxes] | The count of logical separations within your instance of any Adobe On-demand Service that accesses Adobe Experience Platform isolating data and operations. |
| [!UICONTROL Profile Richness No of Packs] | An increase in your authorized Total Data Volume by 25 KB per profile for each Additional Profile Richness pack. |
| [!UICONTROL Query Service Compute Hours] | A measure of the amount of time taken by the Query Service engines to read, process, and write data back into the data lake when a batch query is executed. |
| [!UICONTROL Streaming Segmentation No of Packs] | The packs update segment membership for a person profile as new data enters the Segmentation Service through a streaming flow. Segment membership is evaluated based on the current person profile attributes and the value of the current event, without taking historical behavior into account. Streaming Segmentation is a shared feature. |
| [!UICONTROL Total Data Volume] | The total amount of data available for Adobe Experience Platform Profile Service to use in engagement workflows. See the [frequently asked questions about Total Data Volume](../../landing/license-usage-and-guardrails/total-data-volume.md) to learn more. |

<!-- |  [!UICONTROL Sandbox No of Packs] |  A logical separation within your instance of any Adobe On-demand Service that accesses Adobe Experience Platform isolating data and operations | -->

>[!TIP]
>
>You can check your license entitlements in your Sales Order to calculate metrics such as your 'Storage Allowance'.<br>For example,<ul><li>Storage Allowance = The number of "authorized profiles" in your contract X Average Profile Richness</li></ul>

The availability of these metrics and the specific definition of each of these metrics varies depending on the licensing that your organization has purchased. For detailed definitions of each metric, refer to the appropriate Product Description documentation:

| License | Product Description |
| --- | --- |
| <ul><li>ADOBE EXPERIENCE PLATFORM:OD LITE</li><li>ADOBE EXPERIENCE PLATFORM:OD STANDARD</li><li>ADOBE EXPERIENCE PLATFORM:OD HEAVY</li></ul> | [Adobe Experience Platform](https://helpx.adobe.com/legal/product-descriptions/adobe-experience-platform.html) |
| <ul><li>ADOBE EXPERIENCE PLATFORM:OD</li></ul> | [Experience Platform, App Services, and Intelligent Services](https://helpx.adobe.com/legal/product-descriptions/exp-platform-app-svcs.html) |
| <ul><li>RT CUSTOMER DATA PLATFORM:OD</li><li>RT CUSTOMER DATA PLATFORM:OD PRFL TO 10M</li><li>RT CUSTOMER DATA PLATFORM:OD PRFL TO 50M</li></ul> | [Adobe Real-Time Customer Data Platform](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform.html) |
| <ul><li>AEP:OD ACTIVATION</li><li>AEP:OD ACTIVATION PRFL TO 10M</li><li>AEP:OD ACTIVATION PRFL UP TO 50M</li></ul> | [Adobe Experience Platform Activation](https://helpx.adobe.com/legal/product-descriptions/adobe-experience-platform0.html) |
| <ul><li>AEP:OD INTELLIGENCE</li></ul> | [Adobe Experience Platform Intelligence](https://helpx.adobe.com/legal/product-descriptions/adobe-experience-platform-intelligence---product-description.html) |
| <ul><li>JOURNEY OPTIMIZER SELECT:OD</li><li>JOURNEY OPTIMIZER PRIME:OD</li><li>JOURNEY OPTIMIZER ULTIMATE:OD</li><li>UNP AJO PRIME STARTER:OD</li><li>UNP AJO ULTIMATE STARTER:OD</li><li>UNP Real-Time CDP:OD PROFILE ORCHESTRATION</li></ul> | [Adobe Journey Optimizer](https://helpx.adobe.com/legal/product-descriptions/adobe-journey-optimizer.html) |

>[!WARNING]
>
>The license usage dashboard only reports on the latest license that has been provisioned for your organization. If the latest license provisioned for your organization does not appear in the table above, the license usage dashboard may not display properly. Support for additional licenses and multiple licenses in a single organization is planned for a future release.

## Next steps

After reading this document, you are able to locate the license usage dashboard and view usage metrics for each purchased product, for all production or development sandboxes, and for a specific sandbox. You can find more information about available metrics for your organization, based on the licensing your organization has purchased.

To learn more about other features available in the Experience Platform UI, refer to the [Platform UI guide](../../landing/ui-guide.md).
