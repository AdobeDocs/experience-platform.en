---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Monitor accounts and dataset flows
topic: overview
---

# Monitor accounts and dataset flows

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for viewing existing accounts and dataset flows from the *[!UICONTROL Sources]* workspace.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

-   [Experience Data Model (XDM) System](../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    -   [Basics of schema composition](../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    -   [Schema Editor tutorial](../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
-   [Real-time Customer Profile](../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

## Monitor accounts

Log in to <a href="https://platform.adobe.com" target="_blank">Adobe Experience Platform</a> and then select **[!UICONTROL Sources]** from the left navigation bar to access the *[!UICONTROL Sources]* workspace. The *[!UICONTROL Catalog]* screen displays a variety of sources for which you can create accounts dataset flows with. Each source shows the number of existing accounts and dataset flows associated to them.

Select *[!UICONTROL Accounts]* from the top header to view existing accounts.

![catalog](../../images/tutorials/monitor/catalog.png)

The *[!UICONTROL Accounts]* pages appears. On this page is a list of viewable accounts, including information about their source, username, number of dataset flows, and date of creation.

Select the icon on the top left to launch the sort window.

![accounts](../../images/tutorials/monitor/accounts-list.png)

The sorting panel allows you to access accounts from a specific source. Select the source you wish to work with and select the account from the list on the right.

![accounts-select](../../images/tutorials/monitor/accounts-sort.png)

From the *[!UICONTROL Accounts]* page, you can view a list of existing dataset flows associated with the account you accessed. Select the dataset flow you wish to view.

![accounts-page](../../images/tutorials/monitor/dataset-flows.png)

 The *[!UICONTROL Dataset flow activity]* screen appears. This page displays the rate of messages being consumed in the form of a graph.

 ![dataset-flow-activity](../../images/tutorials/monitor/dataset-flows-activity.png)

## Monitor dataset flows

Dataset flows can be accessed directly from the *[!UICONTROL Catalog]* page without viewing *[!UICONTROL Accounts]*. Select *[!UICONTROL Dataset flows]* from the top header to view a list of existing dataset flows.

![dataset-flows](../../images/tutorials/monitor/dataset-flows-list.png)

Similar to accounts, you can sort the list of dataset flows using the sort icon on the top left. Select the source you wish to view and select the dataset flow from the list on the right.

![select-dataset-flows](../../images/tutorials/monitor/dataset-flows-sort.png)

The *[!UICONTROL Dataset flow activity]* screen appears. This page displays the rate of messages being consumed in the form of a graph.

![dataset-flow-activity](../../images/tutorials/monitor/dataset-flows-activity.png)

For more information on monitoring datasets and ingestion, refer to the tutorial on [monitoring streaming dataflows](../../../ingestion/quality/monitor-data-flows.md).

## Next steps

By following this tutorial, you have successfully accessed existing accounts and dataset flows from the *[!UICONTROL Sources]* workspace. Incoming data can now be used by downstream [!DNL Platform] services such as [!DNL Real-time Customer Profile] and [!DNL Data Science Workspace]. See the following documents for more details:

- [Real-time Customer Profile overview](../../../profile/home.md)
- [Data Science Workspace overview](../../../data-science-workspace/home.md)