---
title: Identity Settings UI
description: Learn how to use the identity settings user interface.
exl-id: 738b7617-706d-46e1-8e61-a34855ab976e
TQID: https://experienceleague.adobe.com/0C2DtteCi6ieLSewDXbG7SJZzow8cMJJGyUfYmsEoK4
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
subfeature_v2:
  - id: c3d7a45c-ad17-435d-8b71-882abbe8f27e
    internal-label: Troubleshooting
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
  - id: cdd65e7e-8839-44a2-bc21-0e03623b5dd1
    internal-label: Optimization
  - id: fd2e3797-f2ea-4b36-a9af-52acf5e90513
    internal-label: Customer profiles
---
# Identity Settings UI

>[!IMPORTANT]
>
>[!DNL Identity Graph Linking Rules] is now generally available. Contact your Adobe Account Team or Adobe Support if you have an existing sandbox that requires collapsed graphs to be un-collapsed ("fixed") after you enable identity settings.

Identity settings is a feature in the Adobe Experience Platform Identity Service UI that you can use to designate unique namespaces and configure namespace priority.

Watch the following video for additional information on using the [!DNL Graph Simulation] interface in the Identity Service UI workspace:

>[!VIDEO](https://video.tv.adobe.com/v/3458487/?learn=on&enablevpops)

Read this guide to learn how to configure your identity settings in the UI.

## Prerequisites 

Read the following documents before you start working with identity settings:

* [[!DNL Identity Graph Linking Rules]](./overview.md)
* [Identity Optimization Algorithm](./identity-optimization-algorithm.md)
* [Implementation guide](./implementation-guide.md)
* [Examples of graph configurations](./example-configurations.md)
* [Namespace priority](./namespace-priority.md)
* [Graph simulation](./graph-simulation.md)

### Set permissions {#set-permissions}

Next, you must ensure that your account is provisioned with the following permissions:

* **[!UICONTROL View Identity Settings]**: Apply this permission to be able to view unique namespaces and namespace priority in the identity namespace browse page.
* **[!UICONTROL Edit Identity Settings]**: Apply this permission to be able to edit and save your identity settings.

Contact your administrator if you do not have these permissions. For more information , read the [permissions guide](../../access-control/abac/ui/permissions.md).

## Configure your identity settings

To access identity settings, navigate to the Identity Service workspace in the Adobe Experience Platform UI and then select **[!UICONTROL Settings]**.

![The identity dashboard interface with the "Settings" button selected.](../images/rules/dashboard.png)

The identity settings page is divided into two sections: [!UICONTROL Person namespaces] and [!UICONTROL Device or cookie namespaces]. Person namespaces are identifiers for single individuals. They can be cross-device IDs, email addresses, and phone numbers. Device or cookie namespaces are identifiers for devices and web browsers and cannot be given a higher priority than person namespaces. You also cannot designate a device or cookie namespace as a unique namespace.

### Configure namespace priority

To configure namespace priority, select a namespace in the identity settings menu and then drag and drop that namespace to the order of your liking. Place a namespace higher on the list to give it a higher priority, and conversely, place a namespace lower on the list to give it a lower priority. The namespace with the highest priority should also be designated as a unique namespace.

![The identities settings workspace with a person namespace highlighted.](../images/rules/namespace-priority.png)

### Designate your unique namespace

To designate a unique namespace, select the [!UICONTROL Unique per graph] checkbox that corresponds with that namespace. You can select **up to a maximum of three unique namespaces** for your identity settings configuration.

Once your unique namespaces are established, graphs will no longer be able to have multiple identities that contain a unique namespace. For example, if you designated CRMID as a unique namespace, then a graph can only have one identity with the CRMID namespace. For more information, read the [Identity Optimization Algorithm overview](./identity-optimization-algorithm.md#unique-namespace).

When you are finished with your configurations, select **[!UICONTROL Next]** to proceed.

![Two namespaces selected and defined as unique.](../images/rules/unique-namespace.png)

From here, you must confirm the following before proceeding to the final step:

1. The selected unique namespaces.
2. The existence of an identity with the highest prioritized unique namespace in each known profile.
3. The order of your namespace priority.

![A confirmation window with the "confirm" button selected.](../images/rules/confirmation.png)

### Confirm your settings {#confirm-your-settings}

>[!IMPORTANT]
>
>* The final step is another confirmation message indicating that existing graphs will only be affected by the graph algorithm **only if the graphs get updated after saving your settings**, and that the primary identity of event fragments on Real-Time Customer Profile will not be updated even after namespace priority changes.
>
>* It will take up up to  **24 hours** for your new or updated settings to take effect. To confirm, enter your sandbox name and then select **[!UICONTROL Confirm]**. 
>
>* There will be no changes to your data until you save your identity settings.

![The confirmation window that displays a warning about a 24-hour delay before configurations get processed.](../images/rules/complete.png)

## Next steps

For more information on [!DNL Identity Graph Linking Rules], read the following documentation:

* [[!DNL Identity Graph Linking Rules] overview](./overview.md)
* [Identity Optimization Algorithm](./identity-optimization-algorithm.md)
* [Implementation guide](./implementation-guide.md)
* [Examples of graph configurations](./example-configurations.md)
* [Troubleshooting and FAQ](./troubleshooting.md)
* [Namespace priority](./namespace-priority.md)
* [Graph simulation UI](./graph-simulation.md)