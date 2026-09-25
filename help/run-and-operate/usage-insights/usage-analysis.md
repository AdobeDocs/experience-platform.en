---
title: Usage analysis reference
description: Learn stuff from metrics.
---
# Usage analysis reference

## Review usage data {#review-usage-data}

Each analysis area focuses on a different part of your Adobe product usage. The following sections describe what each area shows.

### Profile analysis {#profile-analysis}

[!UICONTROL Profile analysis] provides visibility into the scale, growth, and activation readiness of unified customer profiles, helping you assess how effectively profiles are being segmented and used across the platform. This area includes:

* **[!UICONTROL Total profiles]**: The total number of unified customer profiles in the platform.
* **[!UICONTROL Total profiles by day]**: The daily count of total profiles, highlighting changes in overall profile volume over time.
* **[!UICONTROL Profiles in all audiences]**: The daily count of profiles included in at least one audience.
* **[!UICONTROL Profile activation rate per day]**: The daily profile activation rate.

### Audience analysis {#audience-analysis}

[!UICONTROL Audience analysis] summarizes how audiences are created, activated, and evaluated across environments, highlighting audience adoption, effectiveness, and quality. This area includes:

* **[!UICONTROL Total audiences]**: The total number of audiences.
* **[!UICONTROL Published audiences]**: The total number of published audiences.
* **[!UICONTROL Activated audiences]**: The total number of activated audiences.
* **[!UICONTROL Profiles in activated audiences]**: The total number of profiles across all activated audiences.
* **[!UICONTROL Largest audiences]** and **[!UICONTROL Smallest audiences]**: The five largest and five smallest activated audiences by profile count.

### Destination analysis {#destination-analysis}

[!UICONTROL Destination analysis] shows how destinations are configured and used for activation, helping you measure the effectiveness, maturity, and reach of audience delivery across channels and sandboxes. This area includes:

* **[!UICONTROL Total destinations]**: The total number of destinations.
* **[!UICONTROL Enabled destinations]**: The total number of enabled destinations.
* **[!UICONTROL Activated destinations]**: The total number of activated destinations.
* **[!UICONTROL Destination count by sandbox]**: The five largest sandboxes by destination count.
* **[!UICONTROL Enabled destinations across sandboxes]**: Destinations categorized by audience coverage across sandboxes.

<!-- TODO: Screenshots for Profile analysis, Audience analysis, and Destination analysis exist (profile-analysis-draft.png, audience-analysis-draft.png, destination-analysis-draft.png) but are not usable as captured — the source sandbox had no data (all metrics show 0), the Destination analysis panel shows broken visualizations ("Unable to render visualization"), and all three display the internal data view name "Usage Insights (customer-value-fra...)." Re-shoot with a representative, properly named sandbox before publication. -->

### Channel, campaign, and journey analysis {#channel-campaign-journey-analysis}

[!UICONTROL Channel analysis], [!UICONTROL Campaign analysis], and [!UICONTROL Journey analysis] apply the same segment-filtering and date-range structure described above to [!DNL Adobe Journey Optimizer] channel, campaign, and journey usage, respectively.

<!-- TODO: Only panel titles are confirmed for these three areas (visible collapsed in analysis-dashbaords.png). No expanded screenshot or metric-level detail has been captured for Channel analysis, Campaign analysis, or Journey analysis. Do not add specific metric names here until detail screenshots exist. -->

## Inspect metrics and dimensions {#inspect-metrics-and-dimensions}

Every metric and visualization in [!UICONTROL Usage Insights] includes a description explaining what it shows. Select the **information** icon next to a panel or visualization title to view its description.

To inspect the data behind a visualization, expand its data source to view the underlying metrics and dimensions. If a metric is a calculated metric, its formula is also shown. For example, **[!UICONTROL Profile Activation Rate]** is calculated as **[!UICONTROL Activated Audience Profile Count]** divided by **[!UICONTROL Audience Profile Count]**.

<!-- TODO: Screenshots of the data-source and metric-detail views exist (data-source-metric-inventory.png, used-metrics-and-dimensions-info-dialog.png, metric-details.png) but are not usable as captured due to the internal data view name and placeholder data described above. Re-shoot before publication. -->