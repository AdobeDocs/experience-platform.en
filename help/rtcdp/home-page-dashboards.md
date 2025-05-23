---
keywords: metrics overview; rtcdp metrics overview
title: Real-Time Customer Data Platform Home Page and Dashboards
description: Understand various dashboards, the home page, and the first-time user experience of Adobe Real-Time CDP.
feature: Dashboards, Get Started
exl-id: ced5b69c-5bb5-4e06-9cb4-938e36e6e5cc
---
# [!DNL Real-Time Customer Data Platform] home page

The Adobe Real-Time Customer Data Platform (Real-Time CDP) home page is the first page that appears after logging in to Real-Time CDP.

The Real-Time CDP home page includes a getting started widget that allows you to quickly access several different features and a metrics section that displays up-to-date up-to-date information on data within your organization.

This document provides an overview of the Real-Time CDP home page and metrics dashboard.

![The Experience Platform UI home page.](assets/platform-home/home.png)

## Getting started widget

The [!UICONTROL Getting started with Real-Time Customer Profile] widget is divided into four sections: 

* **Ingest data into Experience Platform**: This widget directs you to the sources catalog. Use the sources catalog to select a source and ingest your data to Experience Platform. Select **[Configure sources]** to navigate to the sources catalog. For more information, read the [sources overview](../sources/home.md).
* **Model data structures**: This widget directs you to the schemas overview. Use the schemas overview to browse for existing schemas or create a blueprint that describe the structure of your data. Select **[!UICONTROL Create schema]** to navigate to the schema creation interface. For more information, read the [schemas overview](../xdm/home.md).
* **Build audiences**: This widget directs you to the Segment Builder in the UI. Use the Segment Builder to interact with Profile data elements and define the criteria for your segment definition. Select **[!UICONTROL Create audience]** to navigate to the Segment Builder. For more information, read the [Segmentation Service overview](../segmentation/home.md).
* **Send data to destinations**: This widget directs you to the destinations catalog. Use the destinations catalog to select a destination that you can then connect to and send audiences to. Select **[!UICONTROL Set up destinations]** to navigate to the destinations catalog. For more information, read the [destinations overview](../destinations/home.md).

![The Experience Platform UI home page displaying the getting started widget](assets/platform-home/getting-started-widget.png)

## Metrics dashboard {#metrics-dashboard}

>[!CONTEXTUALHELP]
>id="platform_home_metrics_totalProfiles"
>title="Total profiles count"
>abstract="The total number of profiles your organization has within Experience Platform. This count is based on your organization's merge policy and does not include profile fragments. The number of profiles is updated once every 24 hours."
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/profile/ui/user-guide.html#profile-count" text="Learn more in documentation" 

The metrics dashboard displays up-to-date information on your Experience Platform data. The dashboard is divided into two sections:

### The leaderboard

The leaderboard shows the current total number of schemas, datasets, profiles, and audiences in your organization as well as their most recent update date.

![The leaderboard section in the Experience Platform UI home page.](assets/platform-home/leaderboard.png)

* **Total schemas**: The **Total schemas** counter displays the number of schemas in the system. This counter is updated when a schema is created. For more information, read the [schemas overview](../xdm/home.md).
* **Total datasets**: The **Total datasets** counter shows the number of datasets in the system and the amount of data in Experience Platform. This counter is updated when a dataset is created. For more information about datasets, read the [datasets overview](../catalog/datasets/overview.md).
* **Total profiles**: The **Profiles** count shows the total number of profiles your organization has within Experience Platform. It does not include profile fragments. This is your total addressable audience. This count uses the default [merge policy](profile/merge-policies.md) as set in the merge policy configuration in Real-Time Customer Profile. The number of profiles is updated once every 24 hours. Select **[!UICONTROL Profiles]** to navigate to the Profiles overview page and view all of your Profile metrics. For more information about profiles, read the [Real-Time Customer Profile overview](../profile/home.md).
* **Total audiences**: The **Total audiences** counter shows the total number of audiences created for your organization. This number is updated when new audiences are created. For more information about audiences, read the [Segmentation Service overview](../segmentation/home.md).

### Recent items

Recent items lists the most recent changes in your organization. In the example below, the most recent changes pertain to datasets, sources, audiences, and destinations.

![The recent items section in the Experience Platform UI home page.](assets/platform-home/recent-items.png)

* **Recent datasets**: The **[!UICONTROL Recent datasets]** card shows the five most recent datasets created within the organization. This list is updated when a new dataset is created. Select a dataset to view the details for that item, or select **[!UICONTROL View all]** for a list of datasets. From there, you can select a specific source for details. For more information about datasets, see the [datasets overview](../catalog/datasets/overview.md).
* **Recent sources**: The **[!UICONTROL Recent sources]** metric card shows the five most recent sources created within the organization. This list is updated when a new source is created. Select a source to view the details for that item, or select **[!UICONTROL View all]** for a list of sources. From there, you can select a specific source for details. For more information about sources, see [Sources overview](../sources/home.md).
* **Recent audiences**: The **[!UICONTROL Recent audiences]** metric card shows the five most recent audiences created within the organization. This list is updated when a new audience is created. Select an audience to view the details for that item, or select **[!UICONTROL View all]** for a list of audiences. For more information about audiences, see [Segmentation Service overview](../segmentation/home.md).
* **Recent destinations**: The **[!UICONTROL Recent destinations]** metric card shows the five most recent destinations created within the organization. This list is updated when a new destination is created. Select a destination to view the details for that item, or select **[!UICONTROL View all]** for a list of destinations. For more information, read the [destinations overview](../destinations/home.md).

## Resources

Finally, the resources widget provides you with additional documentation resources that you can refer to. These include:

![The resources section in the Experience Platform UI home page.](assets/platform-home/resources.png)

* [Understanding schemas](../xdm/schema/composition.md)
* [Connecting sources](../sources/home.md)
* [How to populate your Real-Time Customer Profile](../profile/home.md)
* [Connecting destinations](../destinations/home.md)
* [Manage access](../access-control/abac/overview.md)

<!-- ### Successful profile records

In the leaderboard **[!UICONTROL Successful profile records]** shows the total number of records that have been successfully processed into the profile.

There is also a metric card that shows the percentage of successful records. Select **[!UICONTROL View datasets]** to see more details about the profile records. Hover over the colored area of the graph to see additional details:

![image](assets/home-profilerecords-details.PNG)

The number of successful profile records is updated hourly. 

For more information about profiles, see [A unified view of your customer in Real-Time CDP](profile/profile-overview.md).

### Total profile records

The **[!UICONTROL Total profile records]** metric card shows the total number of data records enabled to feed into the profiles, and the percentage that are successful, updated once per day. This does not include all data in the data lake, because some data might not be enabled to feed into the profiles.

 Hover over the colored area of the graph to see additional details about the successful profiles:

![image](assets/home-profile-details.PNG)

Select **[!UICONTROL View profiles]** to see more details about the profile records.

For more information about profiles, see [A unified view of your customer in Real-Time CDP](profile/profile-overview.md).

For more information about viewing a specific profile, see [Profile viewer](profile/profile-viewer.md).

### Failed profile records

In the leaderboard, **[!UICONTROL Failed profile records]** counts the number of records that failed to process into the profile.

The **[!UICONTROL Failed profile records]** metric card shows this count, and includes a graphical representation that helps you see how failures have trended during the time shown below the graphic. This chart is updated hourly. Select **[!UICONTROL View datasets]** to see more details about the profile records.

The number of failed profile records is updated hourly. -->
