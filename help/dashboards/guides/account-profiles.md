---
title: Account Profiles Dashboard Guide
description: Adobe Experience Platform provides a dashboard through which you can view important information about your organization's B2B account profiles.
exl-id: c9a3d786-6240-4ba4-96c8-05f658e1150c
---
# [!UICONTROL Account Profiles] dashboard

The Adobe Experience Platform user interface (UI) provides a dashboard through which you can view important information about your account profiles, as captured during a daily snapshot. This guide outlines how to access and work with the [!UICONTROL Account Profiles] dashboard in the UI and provides more information regarding the visualizations displayed in the dashboard.

For an overview of all of the features within the account profile user interface, please visit the [account profile UI guide](../../rtcdp/accounts/account-profile-ui-guide.md).

## Getting started

You must be entitled to [Adobe Real-Time Customer Data Platform B2B Edition](../../rtcdp/b2b-overview.md) in order to access the B2B [!UICONTROL Account Profiles] dashboard. 

## Account profiles data

The [!UICONTROL Account Profiles] dashboard displays a snapshot of unified account information from the multiple sources across your marketing channels and the diverse systems that your organization currently uses to store customer account information.

The profile data in the snapshot shows the data exactly as it appears at the specific point in time when the snapshot was taken. In other words, the snapshot is not an approximation or sample of the data, and the [!UICONTROL Account Profiles] dashboard does not update in real-time.

>[!NOTE]
>
>Any changes or updates made to the data since the snapshot was taken will not be reflected in the dashboard until the next snapshot is taken.

## Explore the [!UICONTROL Account Profiles] dashboard

To navigate to the [!UICONTROL Account Profiles] dashboard within the Platform UI, select **[!UICONTROL Profiles]** under [!UICONTROL Accounts] in the left navigation panel. 

![The Platform UI with Account Profiles in the left navigation highlighted and the overview tab displayed.](../images/account-profiles/account-profiles-dashboard.png)

From the [!UICONTROL Account Profiles] dashboard you can either [browse the account profiles ingested into your organization](#browse-account-profiles), or [view the entirety of your account profile data at a glance using widgets](#standard-widgets) that visualize aspects of the data.  

## Browse account profiles {#browse-account-profiles}

The [!UICONTROL Browse] tab allows you to search and view the read-only account profiles ingested into your organization using an account ID from a connected enterprise source or by entering source details directly. From here you can see important information belonging to the account profile including, their name, industry, revenue, and audience among others.

Select the [!UICONTROL Profile ID] from the results displayed on the [!UICONTROL Browse] tab to open the [!UICONTROL Details] tab for the account profile.

![The Account Profiles browse tab with results displayed and the Profile ID highlighted.](../images/account-profiles/account-profiles-browse-tab.png)

The account profile information displayed on the [!UICONTROL Details] tab has been merged together from multiple profile fragments to form a single view of the individual account. See the documentation on [browsing account profiles in Adobe Real-Time Customer Data Platform](../../rtcdp/accounts/account-profile-ui-guide.md#browse-account-profiles) to learn more about account profile viewing capabilities in the Platform UI. 

## The [!UICONTROL Account Profiles] [!UICONTROL Overview] {#overview}

The [!UICONTROL Overview] tab is composed of widgets that provide read-only metrics to convey important information about your account profiles. Select **[!UICONTROL Modify dashboard]** to change the appearance of the [!UICONTROL Overview] tab by moving and resizing widgets. 

![The Account Profiles overview tab with Modify dashboard highlighted.](../images/account-profiles/modify-dashboard.png)

Please refer to the document on [modifying dashboards](../customize/modify.md) and the [Widget library overview](../customize/widget-library.md) to learn more.

## Standard widgets {#standard-widgets}

Adobe provides standard widgets that you can use to visualize different metrics related to your account profiles.

To learn more about each of the available standard widgets, select the name of a widget from the following list:

* [Total accounts by industry](#total-accounts-by-industry)
* [Account profiles added](#account-profiles-added)
* [Predictive scoring distribution](#predictive-scoring-distribution)
* [Predictive scoring top influential factors](#predictive-scoring-top-influential-factors)

### Total accounts by industry {#total-accounts-by-industry}

This widget displays the total number of accounts in a single metric and uses a donut chart to illustrate the proportional sizes of counts for the industries that make up the overall number. The key provides colour coding information for the different industries that make up the donut chart. 

Individual counts for the different industries are displayed in a dialog when the cursor hovers over the respective section of the donut chart.

![The total accounts by industry widget.](../images/account-profiles/total-accounts-by-industry-widget.png)

### Account profiles added {#account-profiles-added}

This widget uses a colour coded bar chart to illustrate the count of profiles added to an account over a given period of time, and the proportion of different industries that constitute these added profiles. The industries are colour coded, and a key provides the colour coding information for the different industries that make up the bar chart. The period of analysis is selected from the widget dropdown menu. The bar chart can be visualized over a 30 day, 90 day, and a 12 month period.

>[!NOTE]
>
>As profiles are only added to an account and never removed, the lowest possible number of profiles added over a period of time is zero. 

![The Account profiles added widget.](../images/account-profiles/accounts-profiles-added-widget.png)

### Predictive scoring distribution {#predictive-scoring-distribution}

The [!UICONTROL Predictive scoring distribution] widget shows the score distribution of all account profiles to help you understand the health of your sales pipeline at a glance. The scoring data is conveyed through a donut chart and a column chart.

The donut chart illustrates the proportion of your total account profiles in each of the high, medium, and low propensity to buy buckets. The key provides more details on the color-coded sections including the scoring bucket ranges and the number of account profiles in that range.

The column chart provides a more granular scoring breakdown. Each column shows the number of account profiles in each of the 20 five-point-increment buckets.

The dropdown menu within the widget allows you to select the account scoring model.

![The Predictive scoring distribution widget.](../images/account-profiles/predictive-scoring-distribution.png)

### Predictive scoring top influential factors {#predictive-scoring-top-influential-factors}

The [!UICONTROL Predictive scoring top influential factors] widget helps you to understand the most significant factors that drive the scores for each propensity bucket.

This widget shows the top influential factors for each of the high, medium, and low propensity buckets. A bar for each influential factor indicates the percentage of the account profiles in that propensity bucket that contains the specific influential factor.

The dropdown menu within the widget allows you to select the account scoring model.

![The Predictive scoring top influential factors widget.](../images/account-profiles/predictive-scoring-top-influential-factors.png)

## Next steps

By following this document, you should now know how to locate the [!UICONTROL Account Profiles] dashboard. You should also understand the metrics displayed in the available widgets. To learn more about working with account profiles as part of your B2B data in the Experience Platform UI, please refer to the [account profiles overview](../../rtcdp/accounts/account-profile-overview.md) for Adobe Real-Time CDP, B2B Edition.
