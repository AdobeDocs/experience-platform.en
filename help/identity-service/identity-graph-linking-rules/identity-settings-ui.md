---
title: Identity Settings UI
description: Learn how to use the identity settings user interface.
hide: true
hidefromtoc: true
badge: Beta
---
# Identity Setting UI

>[!AVAILABILITY]
>
>This feature is not yet available; the beta program for identity graph linking rules is expected to start in July on development sandboxes. Contact your Adobe account team for information on the participation criteria.

You can use the identity settings tool in the Identity Service UI workspace to designate your unique namespaces and order your namespace by priority.

Read this guide to learn how to use the identity settings tool.

## Prerequisite 

Read the following documents before you start working with identity settings:

* [Identity optimization algorithm](./identity-optimization-algorithm.md)
* [Namespace priority](./namespace-priority.md)
* [Graph simulation](./graph-simulation.md)

## Configure your identity settings

To access identity settings, navigate to the Identity Service workspace in the Adobe Experience Platform UI and then select **[!UICONTROL Settings]**.

![The identity settings button selected.]

The identity settings page appears and you are greeted with a confirmation message to remind you to first test and validate your identity settings in a development sandbox before completing configurations in a production sandbox.

![The identity settings page.]

The identity settings page is divided into two sections: [!UICONTROL Person namespaces] and [!UICONTROL Device or cookie namespaces]. Person namespaces are identifiers for single individuals. They can be cross-device IDs, email addresses, and phone numbers. Device or cookie namespaces are identifiers for devices and web browsers and cannot be given a higher priority than person namespaces. You also cannot designate a device or cookie namespace to be a unique namespace.

### Designate your unique namespace

To designate a unique namespace, select the [!UICONTROL Unique per graph] checkbox that corresponds with that namespace. You can select more than one unique namespace for your identity settings configuration.

![Two unique namespaces selected.]

Once your unique namespaces are established, graphs will no longer be able to have multiple identities that contain a unique namespace. For example, if you designated Analytics Custom ID as a unique namespace, then a graph can only have one identity with the Analytics Custom ID namespace. For more information, read the [identity optimization algorithm overview](./identity-optimization-algorithm.md#unique-namespace).

### Configure namespace priority

To configure namespace priority, select a namespace in the identity settings menu and then drag and drop that namespace to the order of your liking. Place a namespace higher on the list to give it a higher priority and conversely, place a namespace lower on the list to give it a lower priority. The namespace with the highest priority should also be designated as a unique namespace.

When you are finished with your configurations, select **[!UICONTROL Next]**. A confirmation message appears, use this opportunity to verify that your configurations are correct and then select **[!UICONTROL Finish]**.

Next, finalize your settings