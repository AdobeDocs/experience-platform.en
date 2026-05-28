---
keywords: Experience Platform;home;popular topics;Audience manager source connector;Audience Manager;audience manager connector
title: Create an Adobe Audience Manager Source Connection in the UI
description: This tutorial walks you through the steps to create a source connection for Adobe Audience Manager to bring in Consumer Experience Event data into Experience Platform using the user interface.
exl-id: 90c4a719-aaad-4687-afd8-7a1c0c56f744
TQID: https://experienceleague.adobe.com/WKbUVJMGh4JUEuUhluR7BCZWlAFNJjgUM7-aOJ2XAiQ
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
subfeature_v2:
  - id: b784da9a-7978-4766-bf1f-5ab2b23d894a
    internal-label: Federated Audience Composition
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: fd2e3797-f2ea-4b36-a9af-52acf5e90513
    internal-label: Customer profiles
---
# Create an Adobe Audience Manager source connection in the UI

This tutorial walks you through the steps to create a source connector for Adobe Audience Manager to bring in Consumer Experience Event data into Experience Platform using the user interface.

## Create a source connection with Adobe Audience Manager

In the Experience Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources that you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search bar.

Under [!UICONTROL Adobe Application], select **[!UICONTROL Adobe Audience Manager]** and then select **[!UICONTROL Set up]**.

![catalog](../../../../images/tutorials/create/aam/catalog.png)

### Select traits and segments

>[!NOTE]
>
>You cannot ingest regional data from the Audience Manager source to Experience Platform. If you have Analytics use cases that require regional data, then please use the [Analytics source connector](../adobe-applications/analytics.md).

The [!UICONTROL Select traits and segments] step appears, providing you with an interactive interface to explore and select your traits, segments, and data.

* The left panel of the interface contains the [!UICONTROL Select traits and segments] options, as well as a hierarchical directory of all segments available to you.
* The right half of the interface allows you to interact with selected segments and pick through specific data you want to use.

![add-data](../../../../images/tutorials/create/aam/add-data.png)

To navigate through available segments, select the folder you want to access from the [!UICONTROL All Segments] panel. Selecting a folder allows you to traverse a folder's hierarchy and provides you with a list of segments to filter through.

![segment-folder](../../../../images/tutorials/create/aam/segment-folder.png)

Once you have identified and selected the segments you want to use, a new panel appears on the right, displaying your list of selected items. You can continue to access different folders and select different segments for your connection. Selecting more segments updates the panel on the right.

![select-data](../../../../images/tutorials/create/aam/select-data.png)

Alternatively, you can select the **[!UICONTROL Select all segments]** and **[!UICONTROL Select all traits]** boxes. Selecting all segments will bring Audience Manager segments to Experience Platform, while selecting all traits enables all first party traits from Audience Manager.

>[!WARNING]
>
>The ingestion of sizeable Audience Manager segment populations has a direct impact on your total profile count when you first send an Audience Manager segment to Experience Platform using the Audience Manager source. This means that selecting all segments can potentially lead to a Profile count in excess of your license usage entitlement. Please review your [license usage allowance](../../../../../dashboards/guides/license-usage.md) before proceeding.

Once you are finished, select **[!UICONTROL Next]**

![all-segments](../../../../images/tutorials/create/aam/all-segments.png)

The [!UICONTROL Review] step appears, allowing you to review your selected traits and segments before they are connected to Experience Platform. Details are grouped within the following categories:

* **[!UICONTROL Connection]**: Shows the source platform and the status of the connection.
* **[!UICONTROL Selected data]**: Shows the number of selected segments and enabled traits.

![review](../../../../images/tutorials/create/aam/review.png)

Once you have reviewed your dataflow, select **[!UICONTROL Finish]** and allow some time for the dataflow to be created.

## Next steps

While an Audience Manager dataflow is active, incoming data is automatically ingested into Real-Time Customer Profiles. You can now utilize this incoming data and create audience segments using Experience Platform Segmentation Service. See the following documents for more details:

* [Real-Time Customer Profile overview](../../../../../profile/home.md)
* [Segmentation Service overview](../../../../../segmentation/home.md)
