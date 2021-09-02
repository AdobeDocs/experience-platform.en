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
  * [Identity graph viewer](./identity-graph-viewer.md):
  * [Identity namespaces](../namespaces.md): 

### Terminology

The following table contains a list of terminology that are essential to understanding [!DNL Shared Devices]:

| Terminology | Definition |
| --- | --- |
| Shared device | A shared device is any device that is used by more than one individual. Examples of shared devices include tablets, library computers, and kiosks. |
| [!DNL Shared Device Detection] | [!DNL Shared Device Detection] refers to an algorithm that allows for data from different users of the same devices to be separated from one another. |
| Shared identity namespace | A shared device identity namespace represents a single device that is shared by multiple different users. | 
| User identity namespace | A user identity namespace represents an individual user of a shared device. |

## Shared Devices UI

In the Platform UI, select **[!UICONTROL Identities]** from the left-navigation and then select **[!UICONTROL Identity settings]**.

![identity-dashboard]()

The [!UICONTROL Shared device settings] page appears, providing you with the option to configure shared device settings for your data. By default, shared device settings are disabled.

Enabling shared device settings allows you to...

Select **[!UICONTROL Enable]** to start modifying your shared device settings.

![enable-shared-device]()

Two text boxes appear, allowing you to designate the identity namespaces of your choice as the [!UICONTROL Shared Identity Namespace] and the [!UICONTROL User Identity Namespace]. 

![set-namespaces]()

The [!UICONTROL Shared Identity Namespace]...

Select the **[!UICONTROL Shared Identity Namespace]** search bar and either enter an identity namespace or select an identity namespace from the dropdown menu. Alternatively, you can select, the table icon ![table-icon](../images/shared-device/table-icon.png) next to the search bar to see a table of all available identity namespaces including their corresponding descriptions.

![shared-identity-namespace]()

The [!UICONTROL User Identity Namespace]...

Select the **[!UICONTROL User Identity Namespace]** search bar and either enter an identity namespace or select an identity namespace from the dropdown menu. Alternatively, you can select, the table icon ![table-icon](../images/shared-device/table-icon.png) next to the search bar to see a table of all available identity namespaces including their corresponding descriptions.

![user-identity-namespace]()

Once you have configured your [!UICONTROL Shared Device Settings], select **[!UICONTROL Save]** and then select **[!UICONTROL Yes]** in the pop up window that appears to confirm.

![save]()

## Next steps