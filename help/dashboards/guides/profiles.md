---
keywords: Experience Platform;profile;real-time customer profile;user interface;UI;customization;profile dashboard;dashboard
title: Profiles Dashboard
description: Adobe Experience Platform provides a dashboard through which you can view important information about your organization's Real-time Customer Profile data.
type: Documentation
exl-id: 7b9752b2-460e-440b-a6f7-a1f1b9d22eeb
---
# [!UICONTROL Profiles] dashboard

The Adobe Experience Platform user interface (UI) provides a dashboard through which you can view important information about your [!DNL Real-time Customer Profile] data, as captured during a daily snapshot. This guide outlines how to access and work with the [!UICONTROL Profiles] dashboard in the UI and provides information regarding the metrics displayed in the dashboard.  

For an overview of all of the Profile features within the Experience Platform user interface, please visit the [Real-time Customer Profile UI guide](../../profile/ui/user-guide.md).

## Profile dashboard data

The [!UICONTROL Profiles] dashboard displays a snapshot of the attribute (record) data that your organization has within the Profile Store in Experience Platform. The snapshot does not include any event (time series) data. 

The attribute data in the snapshot shows the data exactly as it appears at the specific point in time when the snapshot was taken. In other words, the snapshot is not an approximation or sample of the data, and the Profile dashboard is not updating in real-time.

>[!NOTE]
>
>Any changes or updates made to the data since the snapshot was taken will not be reflected in the dashboard until the next snapshot is taken.

## Exploring the [!UICONTROL Profiles] dashboard

To navigate to the [!UICONTROL Profiles] dashboard within the Platform UI, select **[!UICONTROL Profiles]** in the left rail, then select the **[!UICONTROL Overview]** tab to display the dashboard.

>[!NOTE]
>
>If your organization is new to Platform and does not yet have active Profile datasets or merge policies created, the [!UICONTROL Profiles] dashboard is not visible. Instead, the [!UICONTROL Overview] tab displays links and documentation to help you get started with Real-time Customer Profile.

![](../images/profiles/dashboard-overview.png)

### Modifying the [!UICONTROL Profiles] dashboard

You can modify the appearance of the [!UICONTROL Profiles] dashboard by selecting **[!UICONTROL Modify dashboard]**. This enables you to move, add, and remove widgets from the dashboard as well as to access the **[!UICONTROL Widget library]** to explore available widgets and create custom widgets for your organization. 

Please refer to the [modifying dashboards](../customize/modify.md) and [Widget library overview](../customize/widget-library.md) documentation to learn more.

## (Beta) Profile efficacy insights {#profile-efficacy-insights}

>[!IMPORTANT]
>
>The profile efficacy insight functionality is currently in beta and are not available to all users. The documentation and the functionality are subject to change.

The [!UICONTROL Efficacy] tab provides metrics on the quality and completeness of your profile data through the use of profile efficacy widgets. These widgets illustrate at a glance the composition of your profiles, trends in completeness over time, and assessments on the quality of your profile data.

![The profile efficacy dashboard.](../images/profiles/attributes-quality-assessment.png)

See the [profile efficacy widgets section](#profile-efficacy-widgets) for more information on the widgets currently available.

The layout of this dashboard is also customizable by selecting [**[!UICONTROL Modify dashboard]**](../customize/modify.md) from the [!UICONTROL Overview] tab.

## Browse profiles {#browse-profiles}

The [!UICONTROL Browse] tab allows you to search and view the read-only profiles ingested into your IMS Organization. From here you can see important information belonging to the profile regarding their preferences, past events, interactions, and segments 

To learn more about the profile viewing capabilities provided in the Platform UI please see the documentation on [browsing profiles in Real-time Customer Data Platform](../../rtcdp/profile/profile-browse.md).

## Merge policies {#merge-policies}

The metrics displayed in the [!UICONTROL Profiles] dashboard is based on merge policies being applied to your Real-time Customer Profile data. When data is brought together from multiple sources to create the customer profile, the data can contain conflicting values. For example, one dataset may list a customer as "single" while another dataset may list the customer as "married". It is the job of the merge policy to determine which data to prioritize and display as part of the profile.

For more information on merge policies, including how to create, edit, and declare a default merge policy for your organization, please begin by reading the [merge policies overview](../../profile/merge-policies/overview.md).

The dashboard will automatically select a merge policy to display, but you can change the merge policy that is selected using the dropdown menu. To choose a different merge policy, select the dropdown next to the merge policy name and then select the merge policy that you wish to view.

>[!NOTE]
>
>The dropdown menu shows only merge policies related to the XDM Individual Profile Class. However, if your organization has created multiple merge policies, it may mean that you will need to scroll in order to view the complete list of available merge policies.

![](../images/profiles/select-merge-policy.png)

## Union schemas

The [!UICONTROL Union Schema] dashboard displays the union schema for a specific XDM class. By selecting the **[!UICONTROL Class]** dropdown, you can view the union schemas for different XDM classes.

Union schemas are composed of multiple schemas that share the same class and have been enabled for Profile. They enable you to see in a single view, an amalgamation of every field contained within each schema that shares the same class.

See the union schema UI guide to learn more about [viewing union schemas within the Platform UI](../../profile/ui/union-schema.md#view-union-schemas).

## Widgets and metrics

The dashboard is composed of widgets, which are read-only metrics providing important information regarding your Profile data. 

The "last updated" date and time on a widget shows when the last snapshot of the data was taken. The date and time of the snapshot is provided in UTC; it is not in the timezone of the individual user or IMS Organization.

## Standard widgets

Adobe provides multiple standard widgets that you can use to visualize different metrics related to your Profile data. You can also create custom widgets to be shared with your organization using the [!UICONTROL Widget library]. To learn more about creating custom widgets, please begin by reading the [Widget library overview](../customize/widget-library.md).

To learn more about each of the available standard widgets, select the name of a widget from the following list:

* [[!UICONTROL Profile count]](#profile-count)
* [[!UICONTROL Profiles added]](#profiles-added)
* [[!UICONTROL Profiles added trend]](#profiles-added-trend)
* [[!UICONTROL Profiles by identity]](#profiles-by-identity)
* [[!UICONTROL Identity overlap]](#identity-overlap)
* [[!UICONTROL Single identity profiles]](#single-identity-profiles)
* [[!UICONTROL Unsegmented profiles]](#unsegmented-profiles)
* [[!UICONTROL Unsegmented profiles trend]](#unsegmented-profiles-trend)
* [[!UICONTROL Unsegmented profiles by identity]](#unsegmented-profiles-by-identity)
* [[!UICONTROL Audiences mapped to destination status]](#audiences-mapped-to-destination-status)
* [[!UICONTROL Audiences size]](#audiences-size)
* [[!UICONTROL Profile count trend]](#profile-count-trend)
* [[!UICONTROL Single identity profiles by identity]](#single-identity-profiles-by-identity)

### [!UICONTROL Profile count] {#profile-count}

The **[!UICONTROL Profile count]** widget displays the total number of merged profiles within the Profile Store at the time the snapshot was taken. This number is the result of the selected merge policy being applied to your Profile data in order to merge profile fragments together to form a single profile for each individual. 

See the [section on merge policies earlier in this document](#merge-policies) to learn more.

>[!NOTE]
>
>The [!UICONTROL Profile count] widget may show a different number than the profile count shown on the [!UICONTROL Browse] tab in the [!UICONTROL Profiles] section of the UI for multiple reasons. The most common reason for this is because the [!UICONTROL Browse] tab references the total number of merged profiles based on your organization's default merge policy, while the [!UICONTROL Profile count] widget references the total number of merged profiles based on the merge policy that you have selected to view in the dashboard. 
>
>Another common reason is due to the differences between the time when the dashboard snapshot is taken and the time when the sample job is run for the [!UICONTROL Browse] tab. You can see when the [!UICONTROL Profile count] widget was last updated by looking at the timestamp on the widget, and to learn more about how the sample job is triggered on the [!UICONTROL Browse] tab, see the [profile count section in the Real-time Customer Profile UI guide](https://experienceleague.adobe.com/docs/experience-platform/profile/ui/user-guide.html?lang=en#profile-count).

![](../images/profiles/profile-count.png)

### [!UICONTROL Profiles added] {#profiles-added}

The **[!UICONTROL Profiles added]** widget displays the total number of merged profiles that have been added to the Profile Store as of the last snapshot that was taken. This number is the result of the selected merge policy being applied to your Profile data in order to merge profile fragments together to form a single profile for each individual. You can use the dropdown selector to view the profiles added over the last 30 days, 90 days, or 12 months.

>[!NOTE]
>
>The [!UICONTROL Profiles added] widget reflects the number of profiles added **after** the initial profile ingestion and Profile Store set-up. In other words, if your organization set up the Profile Store and ingested 4,000,000 on Day 1, within 24 hours the dashboard would be available, however the [!UICONTROL Profiles added] widget would be set to 0. This is done to avoid a spike associated with the initial ingestion of profiles into the system. Over the next 30 days, your organization ingests an additional 1,000,000 profiles into the Profile Store. After the next snapshot is taken, the [!UICONTROL Profiles added] widget would show a total of 1,000,000 profiles added, while the [!UICONTROL Profile count] widget would display 5,000,000 total profiles.

![](../images/profiles/profiles-added.png)

### [!UICONTROL Profiles added trend] {#profiles-added-trend}

The **[!UICONTROL Profiles added trend]** widget displays the total number of merged profiles that have been added to the Profile Store daily over the last 30 days, 90 days, or 12 months. This number is updated each day when the snapshot is taken, therefore if you were to ingest profiles into Platform, the number of profiles would not be reflected until the next snapshot is taken. The count of profiles added is the result of the selected merge policy being applied to your Profile data in order to merge profile fragments together to form a single profile for each individual. 

See the [section on merge policies earlier in this document](#merge-policies) to learn more.

The **[!UICONTROL Profiles added trend]** widget displays a 'captions' button in the top right of the widget. Select **[!UICONTROL Captions]** to open the automatic captions dialog.

![The Profile overview tab displaying the Profiles added trend widget with the captions button highlighted.](../images/profiles/profiles-added-trend-captions.png)

A machine learning model automatically generates captions for describing the key trends and important events by analyzing the chart and the data.

![The automatic captions dialog for the Profiles added trend widget.](../images/profiles/profiles-added-trends-automatic-captions-dialog.png)

### [!UICONTROL Profiles by identity] {#profiles-by-identity}

The **[!UICONTROL Profiles by identity]** widget displays the breakdown of identities across all of the merged profiles in your Profile Store. The total number of profiles by identity (in other words, adding together the values shown for each namespace) may be higher than the total number of merged profiles because one profile could have multiple namespaces associated with it. For example, if a customer interacts with your brand on more than one channel, multiple namespaces will be associated with that individual customer.

See the [section on merge policies earlier in this document](#merge-policies) to learn more.

![The Profiles overview dashboard with the Profiles by identity widget highlighted.](../images/profiles/profiles-by-identity.png)

Select **[!UICONTROL Captions]** to open the automatic captions dialog.

![The profiles by identity captions dialog.](../images/profiles/profiles-by-identity-captions.png)

A machine learning model automatically generates data insights by analyzing the overall distribution and key dimensions of the data.

To learn more about identities, please visit the [Adobe Experience Platform Identity Service documentation](../../identity-service/home.md).

### [!UICONTROL Identity overlap] {#identity-overlap}

The **[!UICONTROL Identity overlap]** widget displays a Venn diagram, or set diagram, showing the overlap of profiles in your Profile Store containing multiple identities. 

After using the dropdown menus on the widget to select the identities that you wish to compare, circles appear displaying the relative size of each identity, with the number of profiles containing both namespaces being represented by the size of the overlap between the circles. If a customer interacts with your brand on more than one channel, multiple identities will be associated with that individual customer, therefore it is likely that your organization will have multiple profiles containing fragments from more than one identity.

For more information on profile fragments, begin by reading the section on [profile fragments vs merged profiles](https://experienceleague.adobe.com/docs/experience-platform/profile/home.html?lang=en#profile-fragments-vs-merged-profiles) in the Real-time Customer Profile overview.

To learn more about identities, please visit the [Adobe Experience Platform Identity Service documentation](../../identity-service/home.md).

![](../images/profiles/identity-overlap.png)

### [!UICONTROL Single identity profiles] {#single-identity-profiles}

The [!UICONTROL Single Identity Profiles] widget provides a count of your organization's profiles that only have one type of ID type that creates their identity. This ID type can either be an email or ECID. The profile count is generated from the data contained in the most recent snapshot.

![Single Identity Profiles widget.](../images/profiles/single-identity-profiles.png)

### [!UICONTROL Unsegmented profiles] {#unsegmented-profiles}

The [!UICONTROL Unsegmented Profiles] widget provides the total number of all profiles not attached to any segment. The number generated is accurate as of the last snapshot and represents the opportunity for profile activation across your organization. It also indicates the opportunity to expunge profiles that do not provide adequate ROI.

![The Unsegmented Profiles widget.](../images/profiles/unsegmented-profiles.png)

### [!UICONTROL Unsegmented profiles trend] {#unsegmented-profiles-trend}

The [!UICONTROL Unsegmented Profiles Trend] widget provides a line graph illustration for the number of profiles that are not attached to any segment over a given period of time. The trend of profiles not attached to any segment can be visualized over 30 days, 90 days, and 12 month periods. The time period is chosen from a dropdown menu in the widget. The profile count is reflected on the y-axis and time on the x-axis.

![The Unsegmented Profiles Trend widget.](../images/profiles/unsegmented-profiles-trend.png)

### [!UICONTROL Unsegmented profiles by identity] (#unsegmented-profiles-by-identity)

The [!UICONTROL Unsegmented Profiles by Identity] widget categorizes the total number of unsegmented profiles by their unique identifier. The data is visualized in a bar chart for ease of comparison. 

![The Unsegmented Profiles by Identity widget.](../images/profiles/unsegmented-profiles-by-identity.png)

### [!UICONTROL Audiences mapped to destination status] {#audiences-mapped-to-destination-status}

The [!UICONTROL Audiences mapped to destination status] widget displays the total number of both mapped and unmapped audiences in a single metric and uses a doughnut chart to illustrate the proportional difference between their totals. The numbers calculated are dependent on the chosen merge policy. 

Individual counts for either mapped or unmapped audiences are displayed in a dialog when the cursor hovers over the respective section of the donut chart.

![The Audiences mapped to destination status widget.](../images/profiles/audiences-mapped-to-destination-status.png)

### [!UICONTROL Audiences size] {#audiences-size}

The [!UICONTROL Audiences size] widget provides a two-column table that lists up to 20 segments and the total number of audiences contained in each segment. The list is ordered from high to low according to the total number of audiences. The total audience size number is dependent on the merge policy applied.

![The Audiences size widget.](../images/profiles/audiences-size.png)

To see comprehensive information on a segment, select a segment name from the list provided to navigate to the [!UICONTROL Segments] [!UICONTROL Detail] page. Also, by selecting **[!UICONTROL View all segments]** from the end of the widget, you can navigate to the [!UICONTROL Segments] [!UICONTROL Browse] tab to find any existing segment. 

![The Audiences size widget with a segment name and view all segments text highlighted.](../images/profiles/audiences-size-view-all-segments.png)

See the documentation for more information on the [[!UICONTROL Segments] [!UICONTROL  Browse] tab](https://experienceleague.adobe.com/docs/experience-platform/segmentation/ui/overview.html#browse).

### [!UICONTROL Profile count trend] {#profile-count-trend}

The [!UICONTROL Profile count trend] widget uses a line graph to illustrate the trend in the total number of profiles contained in the system over time. This total number includes any profiles imported into the system since the last daily snapshot. The data can be visualized over 30 days, 90 days, and 12 month periods. The time period is chosen from a dropdown menu in the widget.

![The Profile count trend widget.](../images/profiles/profile-count-trend.png)

### [!UICONTROL Single identity profiles by identity] {#single-identity-profiles-by-identity}

This widget uses a bar chart to illustrate the total number of profiles that are identified with only a single unique identifier. The widget supports up to five of the most commonly occurring identities. 

Hover over individual bars to see a dialog detailing the total count of profiles for an identity.

![The Single identity profiles by identity widget.](../images/profiles/single-identity-profiles-by-identity.png)

## (Beta) Profile efficacy widgets {#profile-efficacy-widgets}

>[!IMPORTANT]
>
>The profile efficacy widgets are currently in Beta and are not available to all users. The documentation and the functionality are subject to change.

Adobe provides multiple widgets to assess the completeness of the ingested profiles available for your data analysis. Each of the profile efficacy widgets can be filtered by the merge policy. To change the merge policy filter, select the[!UICONTROL Profiles using merge policy] dropdown and choose the appropriate policy from the available list.

To learn more about each of the profile efficacy widgets, select the name of a widget from the following list:

* [[!UICONTROL Attribute quality assessment]](#attribute-quality-assessment)
* [[!UICONTROL Profile completeness]](#profile-completeness)
* [[!UICONTROL Profile completeness trend]](#profile-completeness-trend)

### (Beta) [!UICONTROL Attribute quality assessment] {#attribute-quality-assessment}

This widget shows the completeness and cardinality of each profile attribute since the last processing date. This information is presented as a table with four columns where each row in the table represents a single attribute.

| Column  | Description  |
|---|---|
| Attribute  | The name of the attribute.  |
| Profiles  | The number of profiles that have this attribute and are filled with non-null values.  |
| Completeness  | This percentage is determined by the total number of profiles that have this attribute and are filled with non-null values. The number is calculated by dividing the total number of profiles by the total number of non-empty values in the profiles for that attribute.  |
| Cardinality  | The total number of **unique** non-null values of this attribute. It is measured across all profiles. |

![The attributes quality assessment widget](../images/profiles/attributes-quality-assessment.png)

### (Beta) [!UICONTROL Profiles by completeness] {#profile-completeness}

This widget creates a circle chart of profile completeness since the last processing date. The completeness of a profile is measured by the percentage of attributes that are filled with non-null values among all observed attributes.

This widget shows the proportion of profiles that are of high, medium, or low completeness. By default, there are three levels of completeness configured: 

* High completeness: Profiles have more than 70% of attributes filled. 
* Medium completeness: Profiles have less than 70% and more than 30% of attributes filled. 
* Low completeness: Profiles have less than 30% of attributes filled. 

![The profiles by completeness widget](../images/profiles/profiles-by-completeness.png)

### (Beta) [!UICONTROL Profile completeness trend] {#profile-completeness-trend}

This widget creates a stacked area chart to depict the trend of profile completeness over time. Completeness is measured by the percentage of attributes filled with non-null values among all observed attributes. It categorizes the profile completeness as high, medium, or low completeness since the last processing date.

The x-axis represents time, the y-axis represents the number of profiles, and the colors represent the three levels of profile completeness. 

The three levels of completeness are:

* High completeness: Profiles have more than 70% of attributes filled. 
* Medium completeness: Profiles have less than 70% and more than 30% of attributes filled. 
* Low completeness: Profiles have less than 30% of attributes filled.

![The profiles completeness trend widget](../images/profiles/profiles-completeness-trend.png)

## Next steps

By following this document you should now be able to locate the Profiles dashboard and understand the metrics displayed in the available widgets. To learn more about working with [!DNL Profile] data in the Experience Platform UI, please refer to the [Real-time Customer Profile UI guide](../../profile/ui/user-guide.md).
