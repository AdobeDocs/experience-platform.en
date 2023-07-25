---
title: Profiles Dashboard Customer AI Widgets
description: Learn how Customer AI provides important insights regarding churn or propensity about your organization's Real-Time Customer Profile data.
hide: true
hidefromtoc: true
---
# Profiles dashboard customer AI widgets {#customer-ai-profiles-widgets}

Customer AI is used to generate custom propensity scores such as churn and conversion for individual profiles at-scale. Customer AI does this by analyzing existing consumer Experience Event data to predict **churn or conversion propensity scores**. These high accuracy customer propensity models allow for more exact segmentation and targeting. The [distribution of scores](#customer-ai-distribution-of-scores) and [scoring summary](#customer-ai-scoring-summary) insights demonstrate the division in your audience. They highlight which profiles are the high/low/medium propensity and how they are distributed across your profile counts.

<!-- 
The links when required:
* [[!UICONTROL Customer AI scoring summary]](#customer-ai-scoring-summary)
* [[!UICONTROL Customer AI distribution of scores]](#customer-ai-distribution-of-scores) 
-->

## [!UICONTROL Customer AI distribution of scores] {#customer-ai-distribution-of-scores} 

>[!CONTEXTUALHELP]
>id="platform_dashboards_profiles_distributionOfScores"
>title="Distribution of scores"
>abstract="This widget visualizes the distribution of the total number of profiles by their propensity scores in five percent increments. The distribution of the profile count is determined by the AI model and the selected merge policy. You can change the AI model from the dropdown menu under the widget title."

The [!UICONTROL Customer AI distribution of scores] widget categorizes the total number of profiles by their propensity scores. The distribution of the profile count is determined by the AI model and the selected merge policy, then visualized in five percent increments that indicate their propensity. The count of profiles is provided along the Y-axis, and the propensity scores are provided along the X-axis. 

>[!NOTE]
>
>If the visualization is a conversion propensity score, the high scores show in green and the low scores in red. If you are predicting churn propensity this is flipped, the high scores are in red and the low scores are green. The medium bucket remains yellow regardless of what propensity type you choose.

The AI model that determines the propensity scores is chosen from the dropdown selector under the widget title. The dropdown contains a list of all configured Customer AI models. Select the appropriate AI model for your analysis from the list of available models. If no Customer AI model is available, a message within the widget directs you to configure at least one Customer AI model and provides a hyperlink to the Customer AI model configuration page. See the documentation for instructions on [how to configure a Customer AI instance](../../intelligent-services/customer-ai/user-guide/configure.md). 

>[!NOTE]
>
>Select the dropdown immediately below the overview tab to change the merge policy that determines which profiles are included in the analysis. See the section on [merge policies](#merge-policies) for a brief description, or the [merge policy overview](../../profile/merge-policies/overview.md) for more details. 

To navigate to the detailed insights page for the selected Customer AI model, select **[!UICONTROL View model details]**.

![The Experience Platform Audiences dashboard with the [!UICONTROL Customer AI distribution of scores] widget and [!UICONTROL View model details] highlighted.](../images/segments/customer-ai-distribution-of-scores.png)

The detailed model insights page appears.

![The insights page for the Customer AI.](../images/profiles/customer-ai-insights-page.png)

More information on Customer AI can be found on the [discover insights UI guide](../../intelligent-services/customer-ai/user-guide/discover-insights.md).

## [!UICONTROL Customer AI scoring summary] {#customer-ai-scoring-summary}

>[!CONTEXTUALHELP]
>id="platform_dashboards_profiles_scoringSummary"
>title="Scoring summary"
>abstract="This widget displays the total number of scored profiles and categorizes them into buckets containing high, medium, and low propensity. The donut chart illustrates the proportional composition of total profiles across high, medium, and low propensity."

This widget displays the total number of profiles scored, and categorizes them into buckets containing high, medium, and low propensity as green, yellow, and red respectively. A donut chart illustrates the proportional composition of profiles between high, medium, and low propensities. A profile qualifies for high propensity at over 75, medium propensity between 25 and 74, and low propensity under 24. A legend indicates the colour code and thresholds of propensities. Profile counts for the high, medium, and low propensities are displayed in a dialog when the cursor hovers over the respective section of the donut chart.

>[!NOTE]
>
>If the visualization is a conversion propensity score, the high scores show in green and the low scores in red. If you are predicting churn propensity this is flipped, the high scores are in red and the low scores are green. The medium bucket remains yellow regardless of what propensity type you choose.

The dropdown menu underneath the widget title provides a list of all configured Customer AI models. Select the appropriate AI model for your analysis from the list of available models. If no Customer AI model is available, a message within the widget directs you to configure at least one Customer AI model and provides a hyperlink to the Customer AI model configuration page. See the documentation on [how to configure a Customer AI instance](../../intelligent-services/customer-ai/user-guide/configure.md) for detailed instructions.

>[!NOTE]
>
>The total number of profiles calculated is dependent on the chosen merge policy. To change the merge policy used, select the dropdown immediately below the overview tab. See the section on [merge policies](#merge-policies) for a brief description, or the [merge policy overview](../../profile/merge-policies/overview.md) for more details. 

![The Experience Platform Audiences dashboard with the Customer AI scoring summary widget highlighted.](../images/segments/customer-ai-scoring-summary.png)

To navigate to the detailed insights page for the selected Customer AI model, select **[!UICONTROL View model details]**. More information on Customer AI can be found on the [discover insights UI guide](../../intelligent-services/customer-ai/user-guide/discover-insights.md).