---
title: Audience Comparison
description: Learn how to compare key metrics between different audience groups using the Audience Comparison dashboard. Set audience filters, analyze trends, and export insights for data-driven decisions
exl-id: cccd53f3-3d10-4044-ab4a-984f6f4a6e90
TQID: https://experienceleague.adobe.com/sJcEBM0H2RPFTdzJ75-DMJRFBAJAVpx9ux6OKyaesx0
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
subfeature_v2:
  - id: b784da9a-7978-4766-bf1f-5ab2b23d894a
    internal-label: Federated Audience Composition
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
  - id: f6ac78a3-5b59-40f5-a37d-45df5303d3a3
    internal-label: Dashboards
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: ff2b9b37-92e0-45fc-b853-379d44c08c89
    internal-label: Audience segmentation
---
# Audience comparison

The [!UICONTROL Audience comparison] dashboard compares and contrasts key audience metrics in a side-by-side view. From this dashboard, you can perform a variety of actions to compare two audience groups and analyze key metrics between them. You can then make data-driven decisions regarding audience segmentation and targeting strategies.

## Set audience comparisons {#set-audience-comparisons}

To allow for more meaningful insights and comparisons, use the system filters to precisely target the audience segments, and the timeframe you are interested in analyzing. Select the filter icon (![The filter icon.](../../../images/icons/filter-icon-white.png)) to choose two different audiences ([!UICONTROL Audience A] and [!UICONTROL Audience B]) and set specific parameters for comparison. 

![The Filters dialog on the Audience comparison dashboard.](../../images/sql-insights-query-pro-mode/templates/audience-comparison-filters.png)

The [!UICONTROL Filter] dialog appears. To choose the first audience to analyze, select the **[!UICONTROL Select Audience A]** dropdown. In this example, `California Patients` has been selected as Audience A. This audience appears on the left side of the comparison once the filter is applied.

Next, choose a second audience to compare against [!UICONTROL Audience A] from the **[!UICONTROL Select Audience B]** dropdown. In this image, [!UICONTROL Users Consented to Email] has been selected as [!UICONTROL Audience B]. This audience is displayed on the right side of the [!UICONTROL Audience comparison] dashboard once the filter is applied.

### Adjust date ranges {#adjust-date-ranges}

You can also filter your data by specific time periods, to see how these audiences perform or change over a custom date range. To set a time range to filter the audience data by a specific period, select the start and end dates from the calendar fields.

The dialog also indicates how many filters are applied (in the screenshot below, two filters are being used: Audience A and Audience B, and today as a date range). To remove all applied filters, select **[!UICONTROL Clear all]**.

After setting the audiences and date range, select **[!UICONTROL Apply]** to refresh the [!UICONTROL Audience comparison] dashboard.

![The Filters dialog on the Audience comparison dashboard with Apply highlighted.](../../images/sql-insights-query-pro-mode/templates/audience-comparison-filters-apply.png)

The dashboard now shows the comparative charts displayed side-by-side for each audience.

![The Audience comparison dashboard with several charts comparing metrics for each audience.](../../images/sql-insights-query-pro-mode/templates/audience-comparison-dashboard.png)

## Available audience comparison charts {#available-charts}

<!-- Potentially could expand this section to include images of each widget.  -->

The dashboard provides several charts to compare insights:

- [[!UICONTROL Audience size]](../../guides/audiences.md#audience-size): Easily track the size of each audience based on the number of profiles that they contain. This metric helps you to understand the scale of the two audiences you're comparing.
- [!UICONTROL Audience identity breakdown]: A pie chart provides a breakdown of the relative composition of identities within each audience. You can view the number of total identities and examine how different identifiers (like email or CRM ID) contribute to that total. This chart helps you to understand the composition of each audience based on identity types. Hover over a section of the pie chart to see an exact number of identities.  
- [[!UICONTROL Audience size trend]](../../guides/audiences.md#audience-size-trend): This chart represents the size trends over time for the chosen audience. Use these charts to visualize how the size of each audience has changed across a selected time period, with peaks and troughs indicating periods of growth or reduction in the number of profiles.
- [[!UICONTROL Audience size change trend]](../../guides/audiences.md#audience-size-change-trend): This chart displays the size change trends for the chosen audience. It visualizes how much the audience size has increased or decreased over time, and allows you to identify significant shifts or trends in the audience population.

>[!NOTE]
>
>The [!UICONTROL Audience size trend] and [!UICONTROL Audience size change trend] charts help you track and compare both the absolute size and fluctuations in size between two audiences over a specified period. This information makes it easier to understand patterns and factors influencing audience changes.

## Export insights {#export-insights}

After you've applied filters and analyzed the audiences, you can export the data for further offline analysis or reporting purposes. To export your insights, select **[!UICONTROL Export]** on the top right of the table. The print PDF dialog appears. From this dialog, you can save as a PDF or print the data shown in the table.

Select **[!UICONTROL Templates]** to return to the [!UICONTROL Template] overview.

![The Advanced Audience Overlaps view with Templates highlighted.](../../images/sql-insights-query-pro-mode/templates/navigation.png)

## Next steps

After reading this document, you have learned how to compare key metrics between different audience groups using the **Audience Comparison** dashboard. To continue improving your audience segmentation and targeting strategies, explore other Data Distiller Templates that provide additional insights. Refer to the [Audience Trends](./trends.md), [Audience Identity Overlaps](./identity-overlaps.md), and [Advanced Audience Overlaps](./overlaps.md) UI guides to further enhance your decision-making and optimize engagement efforts.
