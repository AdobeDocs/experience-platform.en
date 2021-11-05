---
keywords: Experience Platform;home;popular topics;identity service;Identity Service;shared devices;Shared Devices
title: Shared Devices Overview (Beta)
description: Shared Device Detection identifies different authenticated users of the same device, allowing for a more accurate representation of customer data in identity graphs
hide: true
hidefromtoc: true
exl-id: 36318163-ba07-4209-b1be-dc193ab7ba41
---
# Shared Device Detection overview (Beta) 

>[!IMPORTANT]
>
>The [!DNL Shared Device Detection] feature is in beta. Its features and documentation are subject to change.

Adobe Experience Platform [!DNL Identity Service] helps you to gain a better view of your customer and their behavior by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time.

[!DNL Shared Device] refers to devices that are used by more than one individual. Examples of a shared device include tablets, library computers, and kiosks. Through the [!DNL Shared Device Detection] feature, different users of the same device can be prevented from being merged into a single identity, allowing for more accurate representation of an individual.

With [!DNL Shared Device Detection] you can:

* Create separate identity graphs for different users of the same device;
* Prevent the mixing of data from different individuals using the same device;
* Generate a cleaner and more accurate view of your customers.

>[!TIP]
>
>Configurations for [!DNL Shared Device Detection] must be completed prior to enabling Profile for dataset because you can no longer revise settings once graphs are generated in [!DNL Identity Service].

## Getting started with [!DNL Shared Device Detection]

Working with [!DNL Shared Device Detection] requires an understanding of the various Platform services involved. Before beginning to work with [!DNL Shared Device Detection], please review the documentation for the following services:

* [[!DNL Identity Service]](../home.md): Gain a better view of individual customers and their behavior by bridging identities across devices and systems.
  * [Identity graph viewer](./identity-graph-viewer.md): Visualize and interact with the identity graph viewer to better understand how customer identities are stitched together, and in what ways.
  * [Identity namespaces](../namespaces.md): See the components of a fully qualified identity, and how identity namespaces allows you to distinguish the context and type of an identity.

### Understanding [!DNL Shared Device Detection]

This is how Shared Device Detection works:

* You have a single device used by at least two users, suppose this is a tablet;
* Suppose you have two users who share the tablet: Greg and Tom;
* There are two identity namespaces to take note of:
  * The Shared Identity Namespace that is attached to the device (99% of the time, this is going to be the ECID)
  * The User Identity Namespace that is attached to the user (this can be any identity namespace that corresponds to the user's login ID, such as: email, hashed email, customer ID, etc.)
* Greg uses the tablet to browse for tools, he logs in to the tools shop with his email
  * The User Identity Namespace is sent to the identity graph because User Identity Namespace = Email = Authenticated User = Greg
  * If Greg doesn't log out and gives the tablet to Tom, then all activities in the tool shop are attributed to Greg (because he is still logged in)
  * If Greg logs out and gives the tablet to Tom, but Tom doesn't sign in, then all activities in the tool shop are assigned to the Shared Identity Namespace (ECID), but is connected to the last authenticated user (Greg)
  * If Greg logs out and gives the tablet to Tom, and if Tom logs in to the tool shop with his own account information, then the User Identity Namespace is sent, but this time, it is assigned to Tom

### Terminology

The following table contains a list of terms that are essential to understanding [!DNL Shared Device Detection]:

| Terms | Definition |
| --- | --- |
| Shared device | A shared device is any device that is used by more than one individual. Examples of shared devices include tablets, library computers, and kiosks. |
| [!DNL Shared Device Detection] | [!DNL Shared Device Detection] refers to a configuration setting that allows for data from different users of the same device to be separated from one another. |
| [!UICONTROL Shared Identity Namespace] | A [!UICONTROL Shared Identity Namespace] is used to represent a single device that is shared by multiple different users. | 
| [!UICONTROL User Identity Namespace] | A [!UICONTROL User Identity Namespace] is used to represent the authenticated, or logged in, user of a shared device. |

## Shared Devices UI

In the Platform UI, select **[!UICONTROL Identities]** from the left-navigation and then select **[!UICONTROL Identity settings]**.

![identity-dashboard](../images/shared-device/identity-dashboard.png)

The [!UICONTROL Shared device settings] page appears, providing you with an interface to configure shared device settings for your data. Shared device settings are disabled by default.

When enabled, shared device settings allows data from different users of the same device to be separated from one another. This configuration setting allows for a cleaner and more accurate representation of identity graphs, where user identities of the same device are not combined together.

Select **[!UICONTROL Enable]** to start modifying your shared device settings.

![enable-shared-device](../images/shared-device/enable-shared-device.png)

The [!UICONTROL Shared Identity Namespace] and [!UICONTROL User Identity Namespace] configuration options appear, allowing you to modify the identity namespaces that you want to use.

![set-namespaces](../images/shared-device/set-namespaces.png)

[!UICONTROL Shared Identity Namespace] represents a single device that is used by multiple different users. This namespace is always set to **[!UICONTROL ECID]** because all Platform users use **[!UICONTROL ECID]** as the web browser identifier.

![shared-identity-namespace](../images/shared-device/shared-identity-namespace.png)

The [!UICONTROL User Identity Namespace] allows you to identify different users of the same device and prevent data from being combined into the same identity graph.

![user-identity-namespace](../images/shared-device/user-identity-namespace.png)

Select the **[!UICONTROL User Identity Namespace]** search bar and either enter an identity namespace or select an identity namespace from the dropdown menu.

>[!TIP]
>
>The [!UICONTROL User Identity Namespace] should be mapped to the identity namespace that corresponds to the end user's login ID. Options include customer ID, email, and hashed email.

![emails](../images/shared-device/emails.png)

Once you have configured your [!UICONTROL Shared Device Settings], select **[!UICONTROL Save]**.

![save](../images/shared-device/save.png)

A pop up window appears prompting you to confirm your selection. Select **[!UICONTROL Yes]** to complete the configuration setting.

![confirm](../images/shared-device/confirm.png)
