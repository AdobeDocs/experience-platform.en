---
keywords: Experience Platform;home;popular topics; 
description: 
title: Create a source connection using templates in the UI
---
# Create a source connection using templates in the UI

>[!IMPORTANT]
>
>Templates are in Alpha and is currently only supported by the [[!DNL Marketo Engage] source](./connectors/adobe-applications/marketo/marketo.md). The documentation and functionalities are subject to change.

Adobe Experience Platform provides pre-configured templates that you can use to accelerate your data ingestion process. Templates include auto-generated assets such as schemas, datasets, mapping rules, identity namespaces, and dataflows that you can use when bringing in data from a source to Experience Platform.

With templates, you can:

* Reduce time-to-value of ingestion through acceleration of ML-based asset creation.
* Minimize errors that can occur during the manual data ingestion process.
* Update auto-generated assets at any point to suit your use cases.

The following tutorial provides steps on how to use templates in the Platform UI using the [[!DNL Marketo Engage] source](./connectors/adobe-applications/marketo/marketo.md).

## Getting Started

This tutorial requires a working understanding of the following components of Experience Platform:

* [Sources](../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [[!DNL Experience Data Model (XDM)] System](../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
* [Sandboxes](../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

## Workflow

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources that you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search bar.

Under the [!UICONTROL Adobe applications] category, select **[!UICONTROL Marketo Engage]** and then select **[!UICONTROL Add data]**.

![A catalog of the sources workspace with the Marketo Engage source highlighted.](../../images/tutorials/templates/catalog.png)

A pop-up window appears presenting you with the option to browse templates or use existing schemas and datasets. To use auto-generated assets, select **[!UICONTROL Browse templates]** and then select **[!UICONTROL Select]**.

![A pop-up window with options to browse templates or use existing assets.](../../images/tutorials/templates/browse-templates.png)

### Authentication

The authentication step appears, prompting you to either create a new account or use an existing an account.

#### Existing account

To use an existing account, select [!UICONTROL Existing account and then select the account that you want to use from the list that appears.

![The selection page for an existing account with a list of existing accounts you can access.]

#### New account

To create a new account, select **[!UICONTROL New account]**, provide your source connection details and account authentication credentials, and then select **[!UICONTROL Connect to source]**.

![The authentication page for a new account with source connection details and account authentication credentials.]

### Select templates

### Preview data

### Review assets

