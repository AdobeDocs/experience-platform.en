---
keywords: Experience Platform;home;popular topics;identity graph viewer;Identity graph viewer;graph viewer;Graph viewer;identity namespace;Identity namespace;identity;Identity;Identity service;identity service
solution: Experience Platform
title: Adobe Experience Platform Identity Service
topic: tutorial
description: An identity graph is a map of relationships between different identity namespaces, providing you with a visual representation of how your customer interacts with your brand across different channels.
---

# Identity graph viewer

An identity graph is a map of relationships between different identity namespaces, providing you with a visual representation of how your customer interacts with your brand across different channels. All customer identity graphs are collectively managed and updated by [!DNL Identity Service] in near real-time, in response to customer activity.

## Getting started

Working with the identity graph viewer requires an understanding of the various Adobe Experience Platform services involved. Before beginning to work with the identity graph viewer, please review the documentation for the following services:

- [[!DNL Real-time Customer Profile]](../profile/home.md): Provides a unified, customer profile in real-time based on aggregated data from multiple sources.
- [[!DNL Identity Service]](./home.md): Gain a better view of individual customers and their behavior by bridging identities across devices and systems.
- [[!DNL Privacy Service]](../privacy-service/home.md): Identity namespaces are used to comply with General Data Protection Regulation (GDPR), where GDPR requests can be made relative to a namespace.

## Access the identity graph viewer

To use the identity graph viewer in the UI, select **[!UICONTROL Identities]** in the left-rail and then select on the **[!UICONTROL Identity graph]** tab. From the **[!UICONTROL Identity Namespace]** screen, click the **[!UICONTROL Select identity namespace]** icon to search for the namespace you intend to use.

![](./images/identity-graph-viewer/identity-namespace.png)

The **[!UICONTROL Select identity namespace]** panel appears. This screen contains a list of namespaces at your disposal, including information about a namespace's **[!UICONTROL Display name]**, **[!UICONTROL Identity symbol]**, **[!UICONTROL Owner]**, **[!UICONTROL Last updated]** date, and **[!UICONTROL Description]**.

Click the namespace you intend to use and click **[!UICONTROL Select]** to proceed.

![](./images/identity-graph-viewer/select-identity-namespace.png)

Once you have selected a namespace, enter its corresponding value in the **[!UICONTROL Identity value]** text box and select **[!UICONTROL View]**.

![](./images/identity-graph-viewer/identity-value.png)

The identity graph viewer appears. On the left side of the screen is the identity graph displaying all of the identities and how they are linked together within the graph. You can hover over an identity to see information about its value. This information is also displayed as a tabled list in the center of the screen.

Select an identity to updated the highlighted item on the **[!UICONTROL Identity types]** table and to update the information provided on the right rail, which includes an identity's **[!UICONTROL Value]**, **[!UICONTROL Batch Id]**, and its **[!UICONTROL Last updated]** date.

Select **[!UICONTROL Data source]** from the header to see more information on regarding the batch. Alternatively, you can select any of the links that connect identities together to see their corresponding batch IDs.

![](./images/identity-graph-viewer/identity-graph-view.png)