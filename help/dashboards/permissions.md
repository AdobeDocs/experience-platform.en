---
solution: Experience Platform
title: How to Gain & Grant Access Permissions for Experience Platform Dashboards
type: Documentation
description: Grant users the ability to view, edit, and update Experience Platform dashboards using Adobe Admin Console.
exl-id: 2e50790f-b3ab-4851-a9a5-7cb98bf98ce3
---
# Access permissions for dashboards

In order to grant users the ability to view, edit, and update dashboards, you must first enable permissions. In Adobe Experience Platform, access control is provided through the [Adobe Admin Console](https://adminconsole.adobe.com/). Users are linked with permissions and sandboxes through product profiles in [!DNL Admin Console].

This document provides a summary of the available dashboard permissions, the features they provide access to, and the user functions they enable. It also details how to add specific dashboard permissions within Admin Console. For detailed information on gaining and assigning access permissions for your product profile, please begin by reading the [access control overview](../access-control/home.md).

## Prerequisites

In order to configure access control for [!DNL Experience Platform], you must have administrator privileges for an organization that has an [!DNL Experience Platform] product integration. See the Adobe Help Center article on [administrative roles](https://helpx.adobe.com/enterprise/using/admin-roles.html) for more information.

## Available dashboard permissions {#available-permissions}

The [!DNL Dashboards] service provides three permissions that when combined, provide full access to the [!UICONTROL Profile], [!UICONTROL Segments] and [!UICONTROL Destinations] dashboards within Adobe Experience Platform. These permissions are:

| Permission  | Description  |
|---|---|
| **Manage Standard Dashboards**  | This permission is a **global read and write permission**. It allows you to [create custom widgets](./customize/custom-widgets.md) and [edit the schema](./customize/edit-schema.md) through the Widget library. |
| **View Standard Dashboards**  | This provides **read-only** functionality for the Profiles, Destinations, and Segments dashboards and allows access to them through Platform’s left navigation. It also adds [!UICONTROL Dashboards] to the left navigation and access to the [!UICONTROL Dashboards] inventory and integrations tab. |
| **View License Usage Dashboard** | This permission allows users **read-only** access to [the license usage dashboard](./guides/license-usage.md) within the Experience Platform UI. |

>[!IMPORTANT]
>
>Both the **[!DNL Manage Standard Dashboards]** and the **[!DNL View Standard Dashboards]** permission **require** a view or manage permission from the [!DNL Profile Management] or [!DNL Destinations] category in the Admin Console to activate the relevant sections within the Platform UI.

The table below provides a convenient reference for the locations of the five potentially required permissions not included within the Admin Console [!DNL Dashboard] category.

| Permission | Admin Console category location |
|---|---|
| [!DNL View profiles]  | [!DNL Profile Management] |
| [!DNL View segments] | [!DNL Profile Management] |
| [!DNL View destinations] | [!DNL Destinations] |
| [!DNL Manage Queries]  | [!DNL Query Service] |
| [!DNL Manage Sandboxes]  | [!DNL Sandbox Administration] |

## Role-based access control (RBAC) matrix

The following RBAC matrix provides a breakdown of which permissions are required and what function they provide regarding access to the different dashboard features.

| Permission <br/>\    <br/>\ <br/>UI Workspace  | [!UICONTROL View Standard Dashboard]  | [!UICONTROL View Profiles] /[!UICONTROL View Segments] / [!UICONTROL View Destinations] | [!UICONTROL Manage Queries] & [!UICONTROL Manage Sandboxes] | [!UICONTROL View License Usage Dashboard]  | [!UICONTROL Manage Standard Dashboards] |
|---|---|---|---|---|---|
| [!DNL Profiles]/<br/>[!DNL Segments]/<br/>[!DNL Destinations] in the left navigation. | N/A | READ <br/>(for each respective dashboard) | N/A | N/A | N/A |
| [!DNL Dashboards] in the left navigation. | READ | **At least one REQUIRED**. | N/A | N/A | N/A |
| [!DNL Dashboards] [!DNL Inventory] <br/>(the browse tab) | READ | N/A | N/A | N/A | N/A |
| The [!DNL Dashboards] [!DNL Integrations] tab <br/>(used to install Power BI) | READ | **At least one REQUIRED** |N/A | N/A | N/A |
| The Power BI Install button & workflow | N/A | N/A | READ & WRITE | N/A | N/A |
| [!DNL Profiles]/<br/>[!DNL Segments]/<br/>[!DNL Destinations] [!DNL Overview] tab | READ | **REQUIRED** (for each respective dashboard) | N/A | N/A | READ & WRITE<br/>This allows you to create custom widgets and edit the schema through the Widget library. |
| [!DNL License Usage Dashboard |  N/A | N/A | N/A | READ | N/A |

{style="table-layout:auto"}

## Add permissions to your product profile

The following steps illustrate how to add these permissions using Admin Console and grant users access to dashboards in Experience Platform. 

Begin by logging into [Adobe Admin Console](https://adminconsole.adobe.com) and selecting **Products** from the top navigation.

![The Adobe Admin Console UI with Products highlighted in the top navigation bar.](images/admin-console/admin-console-overview.png)

Select **Adobe Experience Platform** from the Experience Cloud dropdown in the left navigation or from the cards listed under *Products and services*. From the Adobe Experience Platform product page, select the product profile that you want to add the dashboard permissions to, or select **New Profile** to create a new product profile.

![The Admin Console Product page displaying the Product Profiles tab.](images/admin-console/products.png)

The selected product profile opens, showing the users associated with that product profile. To manage the permissions for the product profile, select **Permissions**.

![The Admin Console Product page displaying the Permissions tab.](images/admin-console/product-users.png)

## Add/edit permissions

The **Permissions** tab displays all of the available permissions for the product profile. Locate the **Dashboards** row. To edit the dashboard permissions, select **Edit** on the dashboard row.

![The Adobe Admin Console displaying the permissions tab and highlighting the Dashboards row.](images/admin-console/product-permissions.png)

The **Edit Permissions** dialog opens. See the documentation for complete instructions on [how to add and edit permissions using Admin console](../access-control/ui/permissions.md). 

For descriptions of the permissions, please refer to the [available permissions](#available-permissions) section earlier in this document.

>[!NOTE]
>
>You do not have to enable all permissions for all users. Depending on your organization's structure, you may wish to create separate product profiles for certain users and grant limited access (such as read-only).

## Next steps

Now that you have added access permissions to dashboards, users within your organization can begin to view dashboards within the Experience Platform UI and perform other actions based on the permissions that you have assigned.

See the documentation on managing users for a product profile to learn [how to assign permissions for specific users](../access-control/ui/users.md).

If you have not done so already, you are recommended to read the documentation on [dashboard customization](./customize/overview.md) to improve the ease of data insights by modifying the size, shape, and order of existing widgets.  
