---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create an Adobe Analytics source connector in the UI
topic: overview
---

# Create an Adobe Analytics source connector in the UI

This tutorial provides steps for creating an Adobe Analytics source connector in the UI to bring consumer data into Adobe Experience Platform.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [Experience Data Model (XDM) System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
*   [Real-time Customer Profile](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
*   [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

## Create a source connection with Adobe Analytics

Log in to <a href="https://platform.adobe.com" target="_blank">Adobe Experience Platform</a> and then select **Sources** from the left navigation bar to access the sources workspace. The *Catalog* screen displays available sources to create inbound connections with, and each source shows the number of existing accounts and dataset flows associated to them.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *Adobe Applications* category, select **Adobe Analytics** to expose an information bar on the right-hand side of your screen. The information bar provides a brief description for the selected source as well as options to connect with the source or view its documentation. To view existing accounts, select **Accounts**.

![](../../../../images/tutorials/create/analytics/catalog.png)

The *Accounts* screen lists all previously established accounts for Adobe Analytics, you can create a new dataset flow by clicking **Select data**. 

>[!NOTE] Multiple in-bound connections to a source can be made for bringing in different data.

![](../../../../images/tutorials/create/analytics/dataset-flows.png)

Analytics report suites can be configured for one sandbox at a time. To import the same report suite into a different sandbox, the dataset flow will have to be deleted and instantiated again via configuration for a different sandbox.

From the list of available report suites, select the one you want to bring into Platform and click **Next**.

![](../../../../images/tutorials/create/analytics/select-data.png)

The *Dataset flow detail* step appears, where you must provide a name and an optional description for the dataset flow. Select **Next** when finished.

![](../../../../images/tutorials/create/analytics/dataset-flow-detail.png)

The *Review* step appears, allowing you to review your new Analytics in-bound connection before it is created. Details of the connection are grouped by categories, including:

*   *Connection*: Shows the type of the source connection and the selected report suite.
*   *Assign dataset & map fields*: When creating other source connectors, this container shows which dataset the source data is ingesting into, including the schema the dataset adheres to. Analytics data is automatically mapped and ingested into Real-time Customer Profiles.

![](../../../../images/tutorials/create/analytics/review.png)

## Next steps

Once the connection is created, a target schema and dataset is automatically created to contain the incoming data. Furthermore, data back-filling occurs and ingests up to 13 months of historical data. When the initial ingestion completes, Analytics data and be used by downstream Platform services such as Real-time Customer Profile and Segmentation Service. See the following documents for more details:

*   [Real-time Customer Profile overview](../../../../../profile/home.md)
*   [Segmentation Service overview](../../../../../segmentation/home.md)
*   [Data Science Workspace overview](../../../../../data-science-workspace/home.md)
*   [Query Service overview](../../../../../query-service/home.md)
