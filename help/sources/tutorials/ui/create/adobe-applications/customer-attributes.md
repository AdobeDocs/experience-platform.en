---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create a customer attributes source connector in the UI
topic: overview
---

# Create a customer attributes source connector in the UI

This tutorial provides steps for creating a source connector in the UI for collecting customer attributes profile data into Adobe Experience Platform. For more information about customer attributes, see the [overview document](https://docs.adobe.com/content/help/en/core-services/interface/customer-attributes/attributes.html).

## Create a source connection

Log in to <a href="https://platform.adobe.com" target="_blank">Adobe Experience Platform</a> and then select **Sources** from the left navigation bar to access the sources workspace. The *Catalog* screen displays available sources to create inbound connections with, and each source shows the number of existing connections associated to them. Select the option for **Customer Attributes** and then click **Connect source**. Allow some time for the connection to establish, you will be redirected if a connection is successfully made.

>[!NOTE] If you've already established a source connector for customer attributes profile data, the option to connect with the source will be disabled.

![](../../../../images/customer-attributes/CA-sources_catalog.png)

The *Source activity* screen lists all previously established connections for customer attributes profile data, you can create a new connection by clicking **Select data**. 

>[!NOTE] Multiple inbound connections to a source can be made for bringing in different data. 

![](../../../../images/customer-attributes/CA-source_activity.png)

From the list of available customer attributes profile datasets, select the one you want to bring into Platform and click **Next**.

>[!NOTE] Only one dataset can be selected per customer attributes source connection.

![](../../../../images/customer-attributes/CA-select_data.png)

The *Review* step appears, allowing you to review your new inbound connection before it is created. Details of the connection are grouped by categories, including:

*   *Source details*: Shows the type of the source connection and the selected source data.
*   *Target details*: When creating other source connectors, this container shows which dataset the source data is ingesting into, including the schema the dataset adheres to. Customer attributes profile data is automatically mapped and ingested into Real-time Customer Profiles.

![](../../../../images/customer-attributes/CA-review.png)

## Next steps

Once the connection is created, a target schema and dataset is automatically created to contain the incoming data. When the initial ingestion completes, customer attributes profile data can be used by downstream Platform services such as Real-time Customer Profile and Segmentation Service. See the following documents for more details:

* [Real-time Customer Profile overview](../../../../../profile/home.md)
* [Segmentation Service overview](../../../../../segmentation/home.md)
