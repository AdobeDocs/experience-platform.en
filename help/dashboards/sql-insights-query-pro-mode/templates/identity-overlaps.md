---
title: Audience Identity Overlaps
description: Learn how to analyze audience identity overlaps using the Audience Identity Overlaps dashboard. Filter audiences, specify merge policies, and examine identity relationships to make data-driven decisions.
---

# Audience identity overlaps

Analyze identity overlaps for selected audiences with the [!UICONTROL Audience Identity Overlaps] dashboard. Use this dashboard to gain insights into how different identities within an audience relate to each other, optimize identity stitching strategies, reduce redundancy, and enhance customer segmentation accuracy. Create more effective targeting strategies and streamline customer interactions with an improved understanding of the overlap between identity types.

## Filtering Audiences {#filter-audiences}

To start your analysis, use the global filters to configure your audience, merge policy, and the identities for comparrisson. Select the filter icon (![The filter icon.]()) to open the **[!UICONTROL Filters]** dialog. Next, confirm your settings for analysis from each section's dropdown menu:

1. Select an **[!UICONTROL Audience]**: Choose the audience segment you want to analyze (for example, **Canada - Alberta**).
1. Specify a [!UICONTROL Merge Policy]**: Define the merge policy that dictates how identities are combined across the selected audience (in the example screenshot, the **Default Timebased** policy is selected.
1. Select an **[!UICONTROL Identity A]** and **[!UICONTROL  Identity B]** for comparison**: Choose the two identity types to compare. In the example, **Identity A** is selected as "crmId" and **Identity B** is selected as "email."
1. **Set a date range**: Choose a predefined range like "Today" or manually set the start and end dates using the calendar fields.

![The Filters dialog on the Audience Identity Overlaps dashboard.]()

<!-- Up to here -->

After applying the filters, select **[!UICONTROL Apply]** to refresh the dashboard. Your custom filters provide targeted analysis for specific audience segments and identity types, ensuring that the data presented is relevant to your analysis objectives.

## Available Insights on the Dashboard {#available-insights}

The **Audience Identity Overlaps** dashboard provides several visualizations and tabulated data to help you understand identity overlaps and trends within your audience.

### Audience Identity Overlaps Table {#overlaps-table}

The **[!UICONTROL Audience Identity Overlaps]** table displays identity overlaps based on your selected filters. It includes columns for:

- **[!UICONTROL Audience Name]**: The name of the audience being analyzed (e.g., "Canada - Alberta").
- **[!UICONTROL Identity A]** and **[!UICONTROL Identity B]**: The identities being compared (e.g., "crmId" and "email").
- **[!UICONTROL Overlap Count]**: The count of profiles where both identities are present, providing insights into the extent of identity overlap within the audience.

This information is useful for assessing the overlap between different identity types and understanding how effectively identities are being resolved.

![The Audience Identity Overlaps table on the dashboard.](/mnt/data/Screen%20Shot%202024-10-28%20at%206.05.03%20PM.png)

### Identity Breakdown Chart {#identity-breakdown}

The **[!UICONTROL Identity Breakdown]** chart shows the relative composition of identities within the selected audience. This visualization helps you understand the prevalence of each identity type and evaluate the impact of your identity management strategy.

- The chart differentiates between identity types using distinct colors, providing a quick overview of how identities are distributed across your audience.

### Audience Identity Trends {#audience-identity-trends}

The **[!UICONTROL Audience Identity Trends]** chart provides insights into how the total number of identities has changed over a period. This metric helps you track identity growth, assess stability, and measure the effectiveness of ongoing identity management efforts.

![The Identity Breakdown and Audience Identity Trends charts on the dashboard.](/mnt/data/Screen%20Shot%202024-10-28%20at%206.06.06%20PM.png)

## Export Insights {#export-insights}

After analyzing identity overlaps, you can export the data for offline analysis or reporting. To do this, select **[!UICONTROL Export]** on the top right of the table. The print PDF dialog appears, allowing you to save the visualized data as a PDF or print it.

![The Audience Identity Overlaps dashboard with Export highlighted.]()

The **Audience Identity Overlaps** dashboard provides essential insights into how different identities intersect across your selected audiences. By leveraging these insights, you can refine identity stitching strategies, reduce redundancy, and ensure that your audience segmentation is more accurate and effective.


