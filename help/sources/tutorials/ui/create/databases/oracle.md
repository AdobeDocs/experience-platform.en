---
title: Connect Oracle DB To Experience Platform Using The UI
description: Learn how to connect your Oracle DB instance to Experience Platform using the UI.
exl-id: 4ca6ecc6-0382-4cee-acc5-1dec7eeb9443
TQID: https://experienceleague.adobe.com/qH2UWmsPqMGX3snJTd8SaiqefiRDZCpe5TH5Ow76xSM
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
subfeature_v2:
  - id: b572b7ff-a413-4173-b2b4-d7d3874f1b9b
    internal-label: Best practices
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
---
# Connect [!DNL Oracle DB] to Experience Platform using the UI

Read this guide to learn how to connect your [!DNL Oracle DB] instance to Adobe Experience Platform using the sources workspace in the Experience Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
  * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have an [!DNL Oracle DB] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/databases.md).

### Gather required credentials

Read the [[!DNL Oracle DB] overview](../../../../connectors/databases/oracle.md#prerequisites) for information on authentication.

## Navigate the sources catalog

In the Experience Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the *[!UICONTROL Sources]* workspace. Choose a category or use the search bar to find your source.

To connect to [!DNL Oracle DB], go to the *[!UICONTROL Databases]* category, select the **[!UICONTROL Oracle DB]** source card, and then select **[!UICONTROL Set up]**.

>[!TIP]
>
>Sources show **[!UICONTROL Set up]** for new connections and **[!UICONTROL Add data]** if an account already exists.

![The sources catalog with "Oracle DB" selected.](../../../../images/tutorials/create/oracle/catalog.png)

## Use an existing account {#existing}

To use an existing account, select **[!UICONTROL Existing account]** and then select the [!DNL Oracle DB] account that you want to use.

![The existing accounts interface in the sources workflow with "Existing account" selected.](../../../../images/tutorials/create/oracle/existing.png)

## Create a new account {#new}

To create a new account, select **[!UICONTROL New account]** and then provide a name and optionally add a description for your account.

### Connect to Experience Platform on Azure {#azure}

You can connect your [!DNL Oracle DB] database to Experience Platform on Azure using a connection string.

To use connection string authentication, provide your [connection string](../../../../connectors/databases/oracle.md#azure) and select **[!UICONTROL Connect to source]**.

![The new account interface in the sources workflow with "Connection string authentication" selected.](../../../../images/tutorials/create/oracle/azure.png)

### Connect to Experience Platform on Amazon Web Services (AWS) {#aws}

>[!AVAILABILITY]
>
>This section applies to implementations of Experience Platform running on Amazon Web Services (AWS). Experience Platform running on AWS is currently available to a limited number of customers. To learn more about the supported Experience Platform infrastructure, see the [Experience Platform multi-cloud overview](../../../../../landing/multi-cloud.md).

To create a new [!DNL Oracle DB] account and connect to Experience Platform on AWS, ensure that you are in a VA6 sandbox and then provide the necessary [credentials for authentication](../../../../connectors/databases/oracle.md#aws).

![The new account interface in the sources workflow to connect to AWS.](../../../../images/tutorials/create/oracle/aws.png)

## Create a dataflow for [!DNL Oracle DB] data

Now that you have successfully connected your [!DNL Oracle DB] database, you can now [create a dataflow and ingest data from your database into Experience Platform](../../dataflow/databases.md).
