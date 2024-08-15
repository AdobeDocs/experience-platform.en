---
title: Attribute-based Access Control Permission Manager
description: This document provides information on reporting for users and roles through the Permissions Manager in Adobe Experience Platform
---
# Permission manager

>[!NOTE]
>
>To access [!UICONTROL Permission Manager], you must be a product administrator. If you do not have admin privileges, contact your system administrator to gain access.

Using simple queries in the [!UICONTROL Permission Manager], you can create concise reports that will help you understand access management and save time validating access permissions across many workflows and granularity levels.

## Perform a search for users within a specified user group

Using the dropdown, select the attribute **[!UICONTROL Users]**, followed by the **[!UICONTROL User Group]** you want to search for.

![Add image here]()

For a more granular report, you can specify the resource with actions in a particular sandbox. Select the **[!UICONTROL Resource]** using the drop down. 

>[!INFO]
>
>[!UICONTROL Resource] is not a mandatory field. Only one [!UICONTROL Resource] can be selected for each report.

![Add image here]()

Next, select the **[!UICONTROL Actions]** using the drop down. You can select multiple actions, which will be listed beneath this drop down once selected.

>[!INFO]
>
>[!UICONTROL Actions] is not a mandatory field. An action can be removed once added by selecting the **'x'** beside the action.

![Add image here]()

Finally, select the **[!UICONTROL Sandboxes]** using the drop down. You can select numerous sandboxes, which will be listed beneath this drop down once selected, then select **[!UICONTROL Show Results]**.

>[!INFO]
>
>[!UICONTROL Sandboxes] is not a mandatory field. A sandbox can be removed once added by selecting the **'x'** beside the sandbox you would like to remove.

A list of users and their email address are reported based on the criteria selected. Use the filter menu on the left to update the attributes and results. For more information on a specific user, select the user name from the list.

![Add image here]()

## Search for roles with specific labels

Using the dropdown, select the attribute **[!UICONTROL Roles]**, followed by the **[!UICONTROL Labels]** you want to search for. 

>[!INFO]
>
>[!UICONTROL Labels] is not a mandatory field. You can select multiple labels, which will be listed beneath this drop down once selected. A label can be removed once added by selecting the **'x'** beside the action.

![Add image here]()

For a more granular report, you can specify the resource with actions in a particular sandbox. Select the **[!UICONTROL Resource]** using the drop down. 

>[!INFO]
>
>[!UICONTROL Resource] is not a mandatory field. Only one [!UICONTROL Resource] can be selected for each report.

![Add image here]()

Next, select the **[!UICONTROL Actions]** using the drop down. You can select multiple actions, which will be listed beneath this drop down once selected.

>[!INFO]
>
>[!UICONTROL Actions] is not a mandatory field. An action can be removed once added by selecting the **'x'** beside the action.

![Add image here]()

Finally, select the **[!UICONTROL Sandboxes]** using the drop down. You can select numerous sandboxes, which will be listed beneath this drop down once selected, then select **[!UICONTROL Show Results]**.

>[!INFO]
>
>[!UICONTROL Sandboxes] is not a mandatory field. A sandbox can be removed once added by selecting the **'x'** beside the sandbox you would like to remove.

A list of roles is reported based on the criteria selected. Use the filter menu on the left to update the attributes and results. For more information on a specific role, select the role from the list.

The following information is displayed for each role matching you criteria:

| Attribute | Description |
| --- | --- |
| Description | A brief descrition of the role. |
| Labels | A list of labels associated with the role. |
| Sandboxes | A list of Sanboxes containing this role. |
| Modified at | The date and timestamp of when the role was last updated. |
| Created at | The date and timestamp of when the role was created. |
| Created by | Details of the creator of the role.  |
