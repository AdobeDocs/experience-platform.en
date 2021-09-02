---
keywords: Experience Platform;home;popular topics;identity service;Identity Service;shared devices;Shared Devices
solution: Experience Platform
title: Shared Devices Overview
topic-legacy: tutorial
description:
---
# (Beta) Shared Devices overview

>[!IMPORTANT]
>
>The [!DNL Shared Devices] feature is in beta. Its features and documentation are subject to change.

Adobe Experience Platform [!DNL Identity Service] helps you to gain a better view of your customer and their behavior by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time.

[!DNL Shared Devices] refer to devices that are used by more than one individual. Examples of a shared device include tablets, library computers, and kiosks. Through [!DNL Shared Device Detection] different users of the same device can be prevented from being merged into a single Identity, allowing for more accurate representation.

With [!DNL Shared Devices] you can:

* Create separate identity graphs for different users of the same device;
* Prevent the mixing of data from different individuals using the same device;
* Generate a cleaner and more accurate view of your customers.

## Getting started

Working with [!DNL Shared Devices] requires an understanding of the various Adobe Experience Platform services involved. Before beginning to work with [!DNL Shared Devices], please review the documentation for the following services:

* [[!DNL Identity Service]](../home.md): Gain a better view of individual customers and their behavior by bridging identities across devices and systems.
  * [Identity graph viewer](./identity-graph-viewer.md): Visualize and interact with the identity graph viewer to better understand how customer identities are stitched together, and in what ways.
  * [Identity namespaces](../namespaces.md): See the components of a fully qualified identity, and how identity namespaces allows you to distinguish the context and type of an identity.

### Terminology

The following table contains a list of terms that are essential to understanding [!DNL Shared Devices]:

| Terms | Definition |
| --- | --- |
| Shared device | A shared device is any device that is used by more than one individual. Examples of shared devices include tablets, library computers, and kiosks. |
| [!DNL Shared Device Detection] | [!DNL Shared Device Detection] refers to an algorithm that allows for data from different users of the same devices to be separated from one another. |
| [!UICONTROL Shared Identity Namespace] | A [!UICONTROL Shared Identity Namespace] represents a single device that is shared by multiple different users. | 
| [!UICONTROL User Identity Namespace] | A [!UICONTROL User Identity Namespace] represents the individual user of a shared device. |

## Shared Devices UI

In the Platform UI, select **[!UICONTROL Identities]** from the left-navigation and then select **[!UICONTROL Identity settings]**.

![identity-dashboard]()

The [!UICONTROL Shared device settings] page appears, providing you with the option to configure shared device settings for your data. By default, shared device settings are disabled.

Enabling shared device settings allows you to... [Describe what enabling shared device settings does here]

Select **[!UICONTROL Enable]** to start modifying your shared device settings.

![enable-shared-device]()

Two search bars appear, allowing you to designate your [!UICONTROL Shared Identity Namespace] and [!UICONTROL User Identity Namespace]. 

![set-namespaces]()

The [!UICONTROL Shared Identity Namespace]... [Describe what the shared identity namespace does here]

Select the **[!UICONTROL Shared Identity Namespace]** search bar and either enter an identity namespace or select an identity namespace from the dropdown menu.

![shared-identity-namespace]()

Alternatively, you can select the table icon ![table-icon](../images/shared-device/table-icon.png) next to the search bar to see a table of all available identity namespaces including their corresponding descriptions.

![namespace-list]()

The [!UICONTROL User Identity Namespace]... [Describe what the user identity namespace does here]

Select the **[!UICONTROL User Identity Namespace]** search bar and either enter an identity namespace or select an identity namespace from the dropdown menu.

![user-identity-namespace]()

Similar to the **[!UICONTROL Shared Identity Namespace]**, you can select the table icon ![table-icon](../images/shared-device/table-icon.png) next to the search bar to see a table of all available identity namespaces including their corresponding descriptions.

![namespace-list]()

Once you have configured your [!UICONTROL Shared Device Settings], select **[!UICONTROL Save]** and then select **[!UICONTROL Yes]** in the pop up window that appears to confirm.

![save]()

## Next steps