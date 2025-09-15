---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK;relay connector
title: Documentation self-service template to create Relay Connector custom source from the UI
description: Learn how to create a Relay Connector custom source connection using the Adobe Experience Platform UI.
hide: true
hidefromtoc: true
---
# Create a *Relay Connector* source connection in the UI

This tutorial provides steps for creating a *Relay Connector* source using the Platform user interface.

## Overview

*Relay Connector helps companies create more educated, loyal, and profitable customers by delivering personalized experiences at the right points in your customers' journey.*

>[!IMPORTANT]
>
>This documentation page is created by the *Relay Network* team. For any inquiries or update requests, please contact them directly at *[Relay Network website](https://www.relaynetwork.com/) or [Relay email address](mailto:info@relaynetwork.com)*.

## Connect your *Relay Connector* source

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation bar to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *Marketing automation* category, select *Relay Connector*, and then select **[!UICONTROL Add data]**.

![catalog](../../../../images/tutorials/create/relay-connector/relay%20source.jpg)

The **[!UICONTROL Connect Relay Connector source]** page appears.

### Select data

* Browse or specify the Source data schema. 
* Upload sample JSON file to define source schema.

>[!NOTE] 
>
>Acceptable file size is up to 1GB.

![select data](../../../../images/tutorials/create/relay-connector/upload%20data.jpg)

After the data is uploaded, the sample is visible in the **Preview sample data** section.

![uploaded data](../../../../images/tutorials/create/relay-connector/uploaded%20data.jpg)

### Dataflow details

**1.** Provide a **name** and **description** for the dataflow.

**2.** Select the **target dataset** (either create a new dataset or use an existing one).

![dataflow details](../../../../images/tutorials/create/relay-connector/dataflow.jpg)

### Mapping

* Map the source fields → XDM schema fields.
* You can use auto-map (based on field names) or create custom mappings.
* Apply transformations (concatenate, format, rename, etc.) if needed.

![mapping](../../../../images/tutorials/create/relay-connector/mapping.jpg)

### Review

**1.** Review all configurations: **source, dataset, mapping**.

**2.** Confirm and activate the dataflow.

![review](../../../../images/tutorials/create/relay-connector/review.jpg)

## Additional resources

* [Create a new connection specification using the Flow Service API](https://experienceleague.adobe.com/en/docs/experience-platform/sources/sdk/streaming-sdk/create)
* [Connect to your source using the UI](https://experienceleague.adobe.com/en/docs/experience-platform/sources/sdk/streaming-sdk/submit#test-your-source-using-the-ui)
