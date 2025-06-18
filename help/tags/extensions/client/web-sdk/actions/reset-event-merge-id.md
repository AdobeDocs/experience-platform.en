---
title: Reset merge ID
description: Deprecated action that lets you separate events called on the same page.
---
# Reset merge ID

>[!IMPORTANT]
>
>This action is deprecated. Use [Collect internal link clicks](../configure/data-collection.md#collect-internal-link-clicks) settings instead.

The **[!UICONTROL Reset merge ID]** action type lets you separate events called on the same page. It is typically used in internal link scenarios where you might have multiple payloads that you want to send to Adobe. This action allows you to reset an event's merge ID so that they aren't considered part of the same event after arriving to the Edge Network.

If you want to control how multiple events on the same page are separated or merged, use the [Collect internal link clicks](../configure/data-collection.md#collect-internal-link-clicks) option when configuring the tag extension.
