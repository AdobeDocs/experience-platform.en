---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Sandbox user guide
topic: user guide
---

# Sandbox user guide

This document provides steps on how to perform various operations related to sandboxes in the Adobe Experience Platform user interface.

## View sandboxes

In the Experience Platform UI, click **[!UICONTROL Sandboxes]** in the left-navigation to open the _[!UICONTROL Sandboxes]_ dashboard. The dashboard lists all available sandboxes for your organization, including the sandbox type (production or development) and state (active, creating, deleted, or failed).

![](../images/ui/sandboxes-tab.png)

## Switch between sandboxes

The **sandbox switcher** control at the top-left of the screen displays the currently active sandbox.

![](../images/ui/sandbox-selector.png)

To switch between sandboxes, click the sandbox switcher and select the desired sandbox from the dropdown list.

![](../images/ui/switch-sandbox.png)

Once a sandbox is selected, the screen refreshes with the selected sandbox now featured in the sandbox switcher.

![](../images/ui/sandbox-switched.png)

## Create a new sandbox

Use the following video for a quick overview on how to use Sandboxes in Experience Platform.

>[!VIDEO](https://video.tv.adobe.com/v/29838/?quality=12&learn=on)

To create a new sandbox in the UI, click **[!UICONTROL Sandboxes]** in the left-nav, then click **[!UICONTROL Create Sandbox]**.

![](../images/ui/create-sandbox-button.png)

The _[!UICONTROL Create Sandbox]_ dialog appears, prompting you to provide a display title and name for the sandbox. The **display title** is meant to be human-readable and should be descriptive enough to be easily identifiable. The sandbox **[!UICONTROL Name]** is an all-lowercase identifier for use in API calls, and should therefore be unique and concise.

When finished, click **[!UICONTROL Create]**.

![](../images/ui/create-sandbox-dialog.png)

>[!NOTE]
>
>Since you are restricted to creating non-production sandbox types only, the **[!UICONTROL type]** option is locked at "Non-Production" and cannot be manipulated.

Once you have finished creating the sandbox, refresh the page and the new sandbox appears in the _[!UICONTROL Sandboxes]_ dashboard with a status of "[!UICONTROL Creating]". New sandboxes take approximately 15 minutes to be provisioned by the system, after which their status changes to "[!UICONTROL Active]".

![](../images/ui/sandbox-created.png)

## Reset a sandbox

>[!NOTE]
>
>This functionality is only available for non-production sandboxes. Production sandboxes cannot be reset.

Resetting a non-production sandbox deletes all resources associated with that sandbox (schemas, datasets, and so on), while maintaining the sandbox's name and associated permissions. This "clean" sandbox continues to be available under the same name for users that have access to it.

To reset a sandbox in the UI, click **[!UICONTROL Sandboxes]** in the left-nav, then click the sandbox you want to reset. In the dialog that appears on the right-hand side of the screen, click **[!UICONTROL Reset Sandbox]**.

![](../images/ui/reset-sandbox-button.png)

A dialog appears prompting you to confirm your choice. Click **[!UICONTROL Reset]** to continue.

<img src="../images/ui/reset-are-you-sure.png" width=350><br>

A confirmation message appears and the sandbox's state changes to "[!UICONTROL Resetting]". Once it has been provisioned by the system, its state will update to "[!UICONTROL Active]" or "[!UICONTROL Failed]".

![](../images/ui/sandbox-resetting.png)

## Delete a sandbox

>[!NOTE]
>
>This functionality is only available for non-production sandboxes. Production sandboxes cannot be deleted.

Deleting a non-production sandbox permanently removes all resources associated with that sandbox, including permissions.

 To delete a sandbox in the UI, click **[!UICONTROL Sandboxes]** in the left-nav, then click the sandbox you want to delete. In the dialog that appears on the right-hand side of the screen, click **[!UICONTROL Delete Sandbox]**.

![](../images/ui/delete-sandbox-button.png)

A dialog appears prompting you to confirm your choice. Click **[!UICONTROL Delete]** to continue.

<img src="../images/ui/delete-are-you-sure.png" width=350><br>

A confirmation message appears and the sandbox is removed from the _[!UICONTROL Sandboxes]_ workspace. 

## Next steps

This document demonstrated how to manage sandboxes within the Experience Platform UI. For information on how to manage sandboxes using the Sandbox API, see the [sandbox developer guide](../api/getting-started.md).