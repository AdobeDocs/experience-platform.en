---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create a Microsoft Dynamics or Salesforce source connector in the UI
topic: overview
---

# Create a Microsoft Dynamics or Salesforce source connector in the UI

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced CRM data on a scheduled basis. This tutorial provides steps for creating a Microsoft Dynamics (hereinafter referred to as "Dynamics") or Salesforce source connector using the Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [Experience Data Model (XDM) System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [Real-time Customer Profile](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a Microsoft Dynamics or Salesforce base connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/crm.md).

### Gather required credentials

In order to access your Dynamics account on Platform, you must provide a **Service URI**, **username**, and **password**.

Similarly, accessing your Salesforce account on Platform requires you to provide an **environment URL**, **username**, **password**, and **security token**.

## Connect your Dynamics or Salesforce account

With your CRM system's credentials ready, you can follow the steps below to create a new inbound base connection to link your Dynamics or Salesforce account to Platform.

Log in to <a href="https://platform.adobe.com" target="_blank">Adobe Experience Platform</a> and then select **Sources** from the left navigation bar to access the sources workspace. The *Catalog* screen displays a variety of sources for which you can create inbound base connections with, and each source shows the number of existing base connections associated to them.

Under the *CRM* category, select either **Microsoft Dynamics** or **Salesforce** to expose an information bar on the right-side of your screen. The information bar provides a brief description for the selected source as well as options to view its documentation or to connect with the source. To create a new inbound base connection, click **Connect source**. 

![](../../../../images/salesforce/sf_sources_catalog.png)

On the input form, provide the base connection with a name, an optional description, and your Dynamics or Salesforce credentials. Lastly, click **Connect** and then allow some time for the new base connection to establish.

![](../../../../images/salesforce/sf_credentials.png)

Once a base connection with your CRM system is established, you can continue on to the next section and configure a dataflow to bring CRM data into Platform.

## Next steps

By following this tutorial, you have established a base connection to your Dynamics or Salesforce account. You can now continue on to the next tutorial and [configure a dataflow to bring data into Platform](../../dataflow/crm.md).