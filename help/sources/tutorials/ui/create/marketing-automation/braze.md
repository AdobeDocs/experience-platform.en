---
keywords: Experience Platform;home;popular topics;braze;Braze,Currents
solution: Experience Platform
title: Create a Braze Source Connection in the UI
type: Tutorial
description: Learn how to create a Braze source connection using the Adobe Experience Platform UI and Braze Currents
exl-id: 452b7290-b9e8-4728-8b58-0e0c76bd9449
---
# Create a [!DNL Braze] source connection in the UI

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating a streaming [!DNL Braze] source connector using the [!DNL Platform] user interface. Braze powers customer-centric interactions between consumers and brands in real-time. Braze Currents is a real-time data stream of engagement events from the Braze platform that is the most robust, yet granular export out of the Braze platform. 

## Prerequisites
In order to complete the steps in this guide, you will need:
* A login to [Adobe Experience Platform](https://platform.adobe.com) and permission to create a new streaming connector
* A login to your Braze dashboard, an unused Currents Connector license, and permissions to create a Connector. Addiitonal details can be found [https://www.braze.com/docs/user_guide/data_and_analytics/braze_currents/setting_up_currents/#requirements](here).

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

This tutorial also requires a working understanding of [[!Braze Currents]https://www.braze.com/docs/user_guide/data_and_analytics/braze_currents).

If you already have a [!DNL Braze] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/marketing-automation.md).

## Connect your [!DNL Braze] account to Experience Platform

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources from which you can select.

Select the Marketing Automation category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Marketing automation]** category, select **[!UICONTROL Braze]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Add data]** to create a new [!DNL Braze] connector.

![The sources catalog on the Experience Platform UI with the Braze Currents source selected](../../../../images/tutorials/create/braze/catalog.png)

Next, you must:

* Upload the provided [Braze Currents sample file](https://github.com/Appboy/currents-examples/blob/master/sample-data/Adobe/adobe_examples.json). This file contains all possible fields that Braze might send as part of an event.

![The "Add Data" screen ](../../../../images/tutorials/create/braze/select data.png)

* Provide dataflow details, including information on your dataset and the schema that you are mapping to.
![The "Dataflow Details" screen ](../../../../images/tutorials/create/braze/dataflow details.png)

* Configure mapping for your data. 
![The "Mapping" screen ](../../../../images/tutorials/create/braze/mapping.png)

[!IMPORTANT]
Braze timestamps are measured in seconds and not milliseconds. Therefore, you must create calculated fields in milliseconds to properly reflect the timestamps in Experience Platform. A calculation of "time * 1000" will properly convert to milliseconds, suitable for mapping to a timestamp field within [!DNL Platform].
![Creating a calculated field for timestamp ](../../../../images/tutorials/create/braze/create calculated field.png)

The **[!UICONTROL Connect to Braze]** page appears. Upload the provided. This sample file contains all possible fields that Braze might send as part of an event.  Proceed to create a new data set. Map your data set into your schema. Note that Braze timestamps are in seconds, and that you'll need to create calculated fields in milliseconds to properly refelect the timestamps in {!DNL Platform].

### Gather required credentials

Once your connection is created, you must collect the following credential values, which you will then provide in the Braze Dashboard send data to {!DNL Platform]. Instructions for navigating to the Currents setup page can be found [https://www.braze.com/docs/user_guide/data_and_analytics/braze_currents/setting_up_currents/#step-2-navigate-to-currents](here).

| Field | Description |
| ---------- | ----------- |
| `Client ID` | The client ID associated with your [!DNL Platform] source. |
| `Client Secret` | The client secret associated with your [!DNL Platform] source. |
| `Tenant ID` | The tenant ID associated with your [!DNL Platform] source. |
| `Sandbox Name` | The sandbox associated with your [!DNL Platform] source. |
| `Dataflow ID` | The dataflow ID associated with your [!DNL Platform] source. |
| `Streaming Endpoint` | The streaming endpoint associated with your [!DNL Platform] source. Note that Braze will automatically convert this to the batch streaming endpoint. |

### Configure [!DNL Braze Currents] to stream data to your data source

Within the [!DNL Braze Dashboard], navigate to Partner Integrations -> Data Export, then click "Create New Current". You will be prompted to provide a name for the connector, contact information for notifications about the connector, and the credentials listed above. Select the events you wish to receive, optionally configure any desired field exclusions/transformations, and click "Launch Current".


## Next steps

By following this tutorial, you have established a connection to your [!DNL Braze] account. You can now continue on to the next tutorial and [configure a dataflow to bring marketing automation system data into [!DNL Platform]](../../dataflow/marketing-automation.md).
