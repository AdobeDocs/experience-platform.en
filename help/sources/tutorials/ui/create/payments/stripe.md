---
title: 
description: Learn how to bring payments data from your Stripe account to Experience Platform using the user interface.
badge: Beta
---
# Bring payments data from your [!DNL Stripe] account to Experience Platform using the user interface.

>[!NOTE]
>
>The [!DNL Stripe] source is in beta. Read the [terms and conditions](../../../../home.md#terms-and-conditions) in the sources overview for more information on using beta-labeled sources.

Read the following tutorial to learn how to bring payments data from your [!DNL Stripe] account to Adobe Experience Platform using the user interface.

## Get started

This tutorial requires a working understanding of the following components of Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
  * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

### Authentication

Read the [[!DNL Stripe] overview](../../../../connectors/payments/stripe.md) for information on how to retrieve your authentication credentials.

## Connect your [!DNL Stripe] account {#connect}

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the [!UICONTROL Sources] workspace. You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *Payments* category, select **[!DNL Stripe]**, and then select **[!UICONTROL Set up]**.

>[!TIP]
>
>Sources in the sources catalog display the **[!UICONTROL Set up]** option when a given source does not yet have an authenticated account. Once an authenticated account exists, this option changes to **[!UICONTROL Add data]**.

![The sources catalog in the Experience Platform UI, with the Stripe source card selected.]

The **[!UICONTROL Connect Oracle NetSuite Activities account]** page appears. On this page, you can either use new credentials or existing credentials.

>[!BEGINTABS]

>[!TAB Create a new account]

To create a new account, select **[!UICONTROL New account]** and provide a name, an optional description, and your credentials. 

When finished, select **[!UICONTROL Connect to source]** and then allow some time for the new connection to establish.

![The new account creation interface of the sources workflow.]

| Credential | Description |
| --- | --- |
| Username | Your [!DNL Stripe] account username. |
| Password | Your [!DNL Stripe] account password. |

>[!TAB Use an existing account]

To use an existing account, select **[!UICONTROL Existing account]** and then select the account that you want to use from the existing account catalog.

Select **[!UICONTROL Next]** to proceed.

![The existing account selection page of the sources catalog.]

>[!ENDTABS]

## Select data {#select-data}

Now that you have access to your account, you must identify the appropriate path to the [!DNL Stripe] data that you want to ingest. Select **[!UICONTROL Resource path]** and then select the endpoint from where you want to ingest data from. The available [!DNL Stripe] endpoints are:

* Charges
* Subscriptions
* Refunds
* Balance Transactions

![The resource path dropdown window.]

Once your endpoint is selected, the interface updates into a preview screen, displaying the data structure of the [!DNL Stripe] endpoint that you selected. Select **[!UICONTROL Next]** to proceed.

![The preview window of your Stripe data.]

## Provide dataset and dataflow details {#provide-dataset-and-dataflow-details}

Next, you must provide information on your dataset and your dataflow. 

### Dataset details {#dataset-details}

A dataset is a storage and management construct for a collection of data, typically a table, that contains a schema (columns) and fields (rows). Data that is successfully ingested into Experience Platform is persisted within the data lake as datasets. During this step, you can create a new dataset or use an existing dataset.

>[!BEGINTABS]

>[!TAB Use a new dataset]

To use a new dataset, select **[!UICONTROL New dataset]** and then provide a name, and an optional description for your dataset. You must also select an Experience Data Model (XDM) schema that your dataset adheres to.

![The new dataset selection interface.]

| New dataset details | Description |
| --- | --- |
| Output dataset name | The name of your new dataset. |
| Description | (Optional) A brief explanation of the new dataset. |
| Schema | A dropdown list of schemas that exist in your organization. You can also create your own schema prior to the source configuration process. For more information, read the guide on [creating an XDM schema in the UI](../../../../../xdm/tutorials/create-schema-ui.md). |

>[!TAB Use an existing dataset]

If you already have an existing dataset, select **[!UICONTROL Existing dataset]** and then usee the **[!UICONTROL Advanced search]** option to view a window of all datasets in your organization, including their respective details such as whether are enabled for ingestion to Real-Time Customer Profile or not.

![The existing dataset selection interface.]

>[!ENDTABS]

If your dataset is enabled for Real-Time Customer Profile, then during this step, you can toggle **[!UICONTROL Profile dataset]** to enable your data for Profile-ingestion. You can also use this step to enable **[!UICONTROL Error diagnostics]** and **[!UICONTROL Partial ingestion]**.

* **[!UICONTROL Error diagnostics]**: Select **[!UICONTROL Error diagnostics]** to instruct the source to produce error diagnostics that you can later reference when monitoring your dataset activity and dataflow status.
* **[!UICONTROL Partial ingestion]**: Partial batch ingestion is the ability to ingest data containing errors, up to a certain configurable threshold. This feature allows you to successfully ingest all of your accurate data into Experience Platform, while all of your incorrect data is batched separately with information on why it is invalid.

### Dataflow details {#dataflow-details}

Once your dataset is configured, you must then provide details on your dataflow, including a name, an optional description, and alert configurations.

![The dataflow details configuration step.]

| Dataflow configurations | Description |
| --- | --- |
| Dataflow name | The name of the dataflow.  By default, this will use the name of the file that is being imported. |
| Description | (Optional) A brief description of your dataflow. |
| Alerts | Experience Platform can produce event-based alerts which users can subscribe to, these options all a running dataflow to trigger these.  For more information, read the [alerts overview](../../alerts.md) <ul><li>**Sources Dataflow Run Start**: Select this alert to receive a notification when your dataflow run begins.</li><li>**Sources Dataflow Run Success**: Select this alert to receive a notification if your dataflow ends without any errors.</li><li>**Sources Dataflow Run Failure**: Select this alert to receive a notification if your dataflow run ends with any errors.</li></ul> |

When finished, select **[!UICONTROL Next]** to proceed.

## Map fields to an XDM schema {#mapping}

The **[!UICONTROL Mapping]** step appears. Use the mapping interface to map your source data too the appropriate schema fields before ingesting that data to Experience Platform. For an extensive guide on how to use the mapping interface, read the [Data Prep UI guide](../../../../../data-prep/ui/mapping.md) for more information.

![The mapping interface of the sources workflow.]

## Configure ingestion schedule {#scheduling}

Next, use the scheduling interface to create a schedule for your dataflow.

## Review your dataflow
