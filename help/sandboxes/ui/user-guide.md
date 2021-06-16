---
keywords: Experience Platform;home;popular topics;sandbox user guide;sandbox guide
solution: Experience Platform
title: Sandbox UI guide
topic-legacy: user guide
description: This document provides steps on how to perform various operations related to sandboxes in the Adobe Experience Platform user interface.
exl-id: b258c822-5182-4217-9d1b-8196d889740f
---
# Sandbox UI guide

This document provides steps on how to perform various operations related to sandboxes in the Adobe Experience Platform user interface.

## View sandboxes

In the Platform UI, select **[!UICONTROL Sandboxes]** in the left navigation to open the [!UICONTROL Sandboxes] dashboard. The dashboard lists all available sandboxes for your organization, including the sandbox type (production or development) and state (active, creating, deleted, or failed).

![](../images/ui/view-sandboxes.png)

## Switch between sandboxes

The **sandbox switcher** control at the top-left of the screen displays the currently active sandbox.

![](../images/ui/sandbox-switcher.png)

To switch between sandboxes, select the sandbox switcher and select the desired sandbox from the dropdown list.

![](../images/ui/switcher-menu.png)

Once a sandbox is selected, the screen refreshes with the selected sandbox now featured in the sandbox switcher.

![](../images/ui/switched.png)

## Search for a sandbox

You can navigate through the list of sandboxes available to you by using the search function from the sandbox switcher menu. Type in the name of the sandbox you would like to access to filter through all sandboxes available to your organization.

![](../images/ui/sandbox-search.png)

## Create a new sandbox

Use the following video for a quick overview on how to use Sandboxes in Experience Platform.

>[!VIDEO](https://video.tv.adobe.com/v/29838/?quality=12&learn=on)

To create a new sandbox, select **[!UICONTROL Create sandbox]** on the top-right corner of the screen.

![create](../images/ui/create.png)

The **[!UICONTROL Create sandbox]** dialog box appears. If you are creating a development sandbox, select **[!UICONTROL Development]** in the dropdown panel. To create a new production sandbox, select **[!UICONTROL Production]**.

![type](../images/ui/type.png)

After selecting the type, provide your sandbox with a name and a title. The title is meant to be human-readable and should be descriptive enough to be easily identifiable. The sandbox name is an all-lowercase identifier for use in API calls and should therefore be unique and concise. The sandbox name must begin with a letter, have a maximum of 256 characters, and consist only of alphanumeric characters and hyphens (-).

When finished, select **[!UICONTROL Create]**.

![info](../images/ui/info.png)

Once you have finished creating the sandbox, refresh the page and the new sandbox appears in the **[!UICONTROL Sandboxes]** dashboard with a status of "[!UICONTROL Creating]". New sandboxes take approximately 30 seconds to be provisioned by the system, after which their status changes to "[!UICONTROL Active]".

## Reset a sandbox

>[!IMPORTANT]
>
>The default production sandbox cannot be reset if the identity graph hosted within it is also being used by Adobe Analytics for the [Cross Device Analytics (CDA)](https://experienceleague.adobe.com/docs/analytics/components/cda/overview.html) feature, or if the identity graph hosted within it is also being used by Adobe Audience Manager for the [People Based Destinations (PBD)](https://experienceleague.adobe.com/docs/audience-manager/user-guide/features/destinations/people-based/people-based-destinations-overview.html) feature.

Resetting a production or development sandbox deletes all resources associated with that sandbox (schemas, datasets, and so on), while maintaining the sandbox's name and associated permissions. This "clean" sandbox continues to be available under the same name for users that have access to it.

Select the sandbox you want to reset from the list of sandboxes. In the right-navigation panel that appears, select **[!UICONTROL Sandbox reset]**.

![reset](../images/ui/reset.png)

A dialog box appears prompting you to confirm your choice. Select **[!UICONTROL Continue]** to proceed.

![reset-warning](../images/ui/reset-warning.png)

In the final confirmation window, enter the name of the sandbox in the dialog box and select **[!UICONTROL Reset]**

![reset-confirm](../images/ui/reset-confirm.png)

After a few moments, a confirmation box appears on the bottom of the screen to confirm a successful reset.

![success](../images/ui/success.png)

### Warnings

A default production sandbox that contains CDA data cannot be reset and returns the following warning.

![cda](../images/ui/cda.png)

A default production sandbox that contains PBD data also cannot be reset and returns the following warning.

![pbd](../images/ui/pbd.png)

A default production sandbox that contains data for both CDA and PBD also cannot be reset and returns the following warning.

![both](../images/ui/both.png)

A production sandbox that is used for bi-directional segment sharing with Adobe Audience Manager or Audience Core Service can be reset, after the following warning message.

![seg](../images/ui/seg.png)

## Delete a sandbox

>[!IMPORTANT]
>
>The default production sandbox cannot be deleted.

Deleting a production or development sandbox permanently removes all resources associated with that sandbox, including permissions.

Select the sandbox you want to delete from the list of sandboxes. In the right-navigation panel that appears, select **[!UICONTROL Delete]**.

![delete](../images/ui/delete.png)

A dialog box appears prompting you to confirm your choice. Select **[!UICONTROL Continue]** to proceed.

![delete-warning](../images/ui/delete-warning.png)

In the final confirmation window, enter the name of the sandbox in the dialog box and select  **[!UICONTROL Continue]**

![delete-confirm](../images/ui/delete-confirm.png)

A production sandbox that is used for bi-directional segment sharing with Adobe Audience Manager or Audience Core Service cannot be deleted and returns the following error.

![seg](../images/ui/seg.png)

## Next steps

This document demonstrated how to manage sandboxes within the Experience Platform UI. For information on how to manage sandboxes using the Sandbox API, see the [sandbox developer guide](../api/getting-started.md).
