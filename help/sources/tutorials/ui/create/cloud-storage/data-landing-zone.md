---
keywords: Experience Platform;home;popular topics;Data Landing Zone;data landing zone
solution: Experience Platform
title: Connect Data Landing Zone to Platform using the UI
topic-legacy: overview
type: Tutorial
description: Learn how to create a Data Landing Zone source connector using the Platform user interface.
---
# Connect [!DNL Data Landing Zone] to Platform using the UI

[!DNL Data Landing Zone] is a cloud-based data storage facility for temporary file storage provisioned with Adobe Experience Platform. [!DNL Data Landing Zone] is used solely for the ingress and egress of your data in and out of Platform. Data is automatically deleted from the [!DNL Data Landing Zone] after seven days.

This tutorial provides steps for creating a [!DNL Data Landing Zone] source connection using the Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

- [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
  - [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  - [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
- [[!DNL Real-time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

## Bring your files from [!DNL Data Landing Zone] to Platform

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources that you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search bar.

Under the [!UICONTROL cloud storage] category, select [!DNL Data Landing Zone] and then select **[!UICONTROL Add data]**.

![catalog](../../../../images/tutorials/create/dlz/catalog.png)

The [!UICONTROL Add data] step appears, providing you with an interface to select and preview the data you want to bring to Platform.

![add-data](../../../../images/tutorials/create/dlz/add-data.png)

For a detailed, step-by-step guide on how to create a dataflow for a cloud storage source, see the tutorial on [creating a cloud storage dataflow to bring data to Platform](../../dataflow/batch/cloud-storage.md).

## Retrieve and refresh your [!DNL Data Landing Zone] credentials

[!DNL Data Landing Zone] is an out-of-the-box source that comes with your Adobe Experience Platform Sources license. [!DNL Data Landing Zone] uses an SAS URI and SAS Token-based authentication. You can retrieve and refresh your authentication credentials from the [!UICONTROL Sources catalog] page.

In the [!UICONTROL Sources catalog], under the [!UICONTROL Cloud storage] category, select the ellipses (**...**) from the **[!UICONTROL Data Landing Zone]** card, and then select **[!UICONTROL View credentials]** from the dropdown menu that appears.

![options](../../../../images/tutorials/create/dlz/options.png)

The credentials pop-up window appears, displaying your container name, SAS token, storage account name, and SAS URI. 

Select **[!UICONTROL Refresh credentials]** and allow for a few seconds for your updated credentials to be processed.

![view-credentials](../../../../images/tutorials/create/dlz/credentials.png)

## Next steps

By following this tutorial, you have accessed your [!DNL Data Landing Zone] container and learned to retrieve and refresh your credentials. You can now proceed to the next tutorial on [creating a dataflow to bring data from a cloud storage to Platform](../../dataflow/batch/cloud-storage.md).
