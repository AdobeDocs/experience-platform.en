---
keywords: Experience Platform;home;popular topics;sandbox user guide;sandbox guide
solution: Experience Platform
title: Sandbox UI guide
topic: user guide
description: This document provides steps on how to perform various operations related to sandboxes in the Adobe Experience Platform user interface.
---

# Sandbox UI guide

This document provides steps on how to perform various operations related to sandboxes in the Adobe Experience Platform user interface.

## View sandboxes

In the Experience Platform UI, select **[!UICONTROL Sandboxes]** in the left-navigation to open the **[!UICONTROL Sandboxes]** dashboard. The dashboard lists all available sandboxes for your organization, including the sandbox type (production or development) and state (active, creating, deleted, or failed).

![](../images/ui/view-sandboxes.png)

## Switch between sandboxes

The **sandbox switcher** control at the top-left of the screen displays the currently active sandbox.

![](../images/ui/sandbox-switcher.png)

To switch between sandboxes, select the sandbox switcher and select the desired sandbox from the dropdown list.

![](../images/ui/switcher-menu.png)

Once a sandbox is selected, the screen refreshes with the selected sandbox now featured in the sandbox switcher.

![](../images/ui/switched.png)

## Sesrch for a sandbox

You can navigate through the list of sandboxes available to you by using the search function from the sandbox switcher menu. Type in the name of the sandbox you would like to access to filter through all sandboxes available to your organization.

![](../images/ui/sandbox-search.png)

## Create a new sandbox

Use the following video for a quick overview on how to use Sandboxes in Experience Platform.

>[!VIDEO](https://video.tv.adobe.com/v/29838/?quality=12&learn=on)

To create a new sandbox, select the **[!UICONTROL Create Sandbox]** button on the top right side of the screen.

![](../images/ui/create-sandbox.png)

The **[!UICONTROL Create Sandbox]** dialog appears, prompting you to provide a type, a title, and a name for the sandbox. If you are creating a development sandbox, select **[!UICONTROL Development]** in the dropdown panel that appears. If you are creating a production sandbox, select **[!UICONTROL Production]**.

The **title** is meant to be human-readable and should be descriptive enough to be easily identifiable. The sandbox name is an all-lowercase identifier for use in API calls and should therefore be unique and concise. The sandbox name must consist only of alphanumeric characters and hyphens **(-)**, it must begin with a letter, and has a maximum of 256 characters.

When finished, select **[!UICONTROL Create]**.

![](../images/ui/create-dialog.png)

Once you have finished creating the sandbox, refresh the page and the new sandbox appears in the **[!UICONTROL Sandboxes]** dashboard with a status of "[!UICONTROL Creating]". New sandboxes take approximately 15 minutes to be provisioned by the system, after which their status changes to "[!UICONTROL Active]".

![](../images/ui/creating.png)

## Reset a sandbox

>[!NOTE]
>
>You can reset any production or development sandboxes in your organization, except the default production sandbox.

Resetting a production or development sandbox deletes all resources associated with that sandbox (schemas, datasets, and so on), while maintaining the sandbox's name and associated permissions. This "clean" sandbox continues to be available under the same name for users that have access to it.

Select the sandbox you want to reset from the list of sandboxes. In the right-navigation panel that appears, select **[!UICTONROL Sandbox reset]**.

![](../images/ui/reset-sandbox.png)

A dialog appears prompting you to confirm your choice. Select **[!UICONTROL Continue]** to proceed.

## Delete a sandbox

>[!NOTE]
>
>You can delete any production or development sandboxes in your organization, except the default production sandbox.

Deleting a production or development sandbox permanently removes all resources associated with that sandbox, including permissions.

Select the sandbox you want to delete from the list of sandboxes. In the right-navigation panel that appears, select **[!UICTONROL Delete]**.

![](../images/ui/delete-sandbox.png)

A dialog appears prompting you to confirm your choice. Select **[!UICONTROL Continue]** to proceed.

![](../images/ui/delete-confirm.png)

A confirmation message appears and the sandbox is removed from the **[!UICONTROL Sandboxes]** workspace.

## Next steps

This document demonstrated how to manage sandboxes within the Experience Platform UI. For information on how to manage sandboxes using the Sandbox API, see the [sandbox developer guide](../api/getting-started.md).