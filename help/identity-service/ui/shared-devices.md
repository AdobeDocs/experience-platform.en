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

## Understanding [!DNL Shared Device Detection]

[!DNL Shared Device Detection] works by linking the Shared Identity Namespace with the User Identity Namespace. The Shared Identity Namespace represents the shared device and is almost always set to ECID. The User Identity Namespace represents the user that is currently authenticated to the device. The User Identity Namespace must be set to the end user's login ID, which can be their email, customer ID, or CRM ID.

When a shared device is used anonymously, such as browsing an e-commerce website without authenticating, then the CRM ID (User Identity Namespace) of the last authenticated user is linked with the ECID (Shared Identity Namespace). 

When a CRM ID is linked to the ECID, then [!DNL Shared Device Detection] is able to make distinctions between different users, allowing you to create more accurate and representative identity graphs for users with shared devices.

### Terminology

The following table contains a list of terms that are essential to understanding [!DNL Shared Device Detection]:

| Terms | Definition |
| --- | --- |
| Shared device | A shared device is any device that is used by more than one individual. Examples of shared devices include tablets, library computers, and kiosks. |
| [!DNL Shared Device Detection] | [!DNL Shared Device Detection] refers to a configuration setting that allows for data from different users of the same device to be separated from one another. |
| [!UICONTROL Shared Identity Namespace] | The [!UICONTROL Shared Identity Namespace] represents the shared device that used by multiple users (99% of the time, this namespace is set to ECID). | 
| [!UICONTROL User Identity Namespace] | The [!UICONTROL User Identity Namespace] represents the authenticated (logged in) user of a shared device. The [!UICONTROL User Identity Namespace] also represents the last authenticated user of a device, when a device is used anonymously. |
| Last authenticated user | The last authenticated user represents the user who was last logged into a device. For example, if Kevin anonymously uses a tablet that he shares with Nora to browse for headphones, then his browsing data are incorporated with the user who was last logged in. |

### How identity data is sent to an identity graph

Consider the following example to help your understanding of how Shared Device Detection works:

![diagram](../images/shared-device/diagram.png)

* Kevin and Nora share a tablet for e-commerce purposes. However, they both have their own independent accounts that they each use to browse and shop online;
  * As a shared device, the tablet has a corresponding ECID, which is also its **Shared Identity Namespace**;
* Suppose that Kevin uses the tablet and **logs in** to his e-commerce account to browse for headphones, this then means that Kevin's CRM ID (**User Identity Namespace**) is now linked with the tablet's ECID (**Shared Identity Namespace**). The tablet's browsing data are now incorporated with Kevin's identity graph.
  * If Kevin **logs out** and Nora uses the tablet and **logs in** to her own account and buys a camera, then her CRM ID is now linked to the tablet's ECID. Therefore, the tablet's browsing data are now incorporated with Nora's identity graph.
  * If Nora **does not log out** and Kevin uses the tablet, but **does not log in**, then the tablet's browsing data are still incorporated with Nora, because she remains as the authenticated and her CRM ID is still linked to the tablet's ECID.
  * If Nora **does log out** and Kevin uses the tablet, but **does not log in**, then the tablet's browsing data are still incorporated with Nora's identity graph, because her CRM ID remains linked with the tablet's ECID, as she was the **last authenticated user**.
  * If Kevin **logs in** again, then his CRM ID now gets linked to the tablet's ECID, because he is now the authenticated user, and the tablet's browsing data are now incorporated with Kevin's identity graph.

### How [!DNL Profile Service] merges experience events

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
