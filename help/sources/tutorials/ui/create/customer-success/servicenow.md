---
keywords: Experience Platform;home;popular topics;ServiceNow;servicenow
solution: Experience Platform
title: Create a ServiceNow  Source Connection in the UI
type: Tutorial
description: Learn how to create a ServiceNow source connection using the Adobe Experience Platform UI.
exl-id: 66c12f4d-8b0c-4bb2-910d-9e09fa364c94
---
# Create a [!DNL ServiceNow] source connection in the UI

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating a [!DNL ServiceNow] source connector using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL ServiceNow] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/customer-success.md)

### Gather required credentials

In order to access your [!DNL ServiceNow] account on [!DNL Platform], you must provide the following values:

| Credential | Description |
| ---------- | ----------- |
| `endpoint` | The endpoint of the [!DNL ServiceNow] server. |
| `username` | The username used to connect to the [!DNL ServiceNow] server for authentication. |
| `password` | The password to connect to the [!DNL ServiceNow] server for authentication. |

For more information about getting started, refer to [this [!DNL ServiceNow] document](https://developer.servicenow.com/app.do#!/rest_api_doc?v=newyork&id=r_TableAPI-GET).

## Connect your [!DNL ServiceNow] account

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL ServiceNow] account to [!DNL Platform].

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Customer Success]** category, select **[!UICONTROL ServiceNow]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Connect source]** to create a new [!DNL ServiceNow] connector.

![](../../../../images/tutorials/create/servicenow/catalog.png)

The **[!UICONTROL Connect to ServiceNow]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your [!DNL ServiceNow] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![](../../../../images/tutorials/create/servicenow/new.png)

### Existing account

To connect an existing account, select the [!DNL ServiceNow] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![](../../../../images/tutorials/create/servicenow/existing.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL ServiceNow] account. You can now continue on to the next tutorial and [configure a dataflow to bring data into [!DNL Platform]](../../dataflow/customer-success.md).
