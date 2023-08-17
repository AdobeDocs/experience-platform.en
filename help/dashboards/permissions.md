---
solution: Experience Platform
title: How to Gain & Grant Access Permissions for Experience Platform Dashboards
type: Documentation
description: Grant users the ability to view, edit, and update Experience Platform dashboards using Adobe Admin Console.
exl-id: 2e50790f-b3ab-4851-a9a5-7cb98bf98ce3
---
# Access permissions for dashboards

In order to grant users the ability to view, edit, and update dashboards, you must first enable permissions. In Adobe Experience Platform, access control is provided through the [Adobe Admin Console](https://adminconsole.adobe.com/). Users are linked with permissions and sandboxes through product profiles in the [!DNL Admin Console].

This document provides a summary of the available permissions for dashboards, including the features they give access to and the user functions they enable. For detailed information on gaining and assigning access permissions, please begin by reading the [access control overview](../access-control/home.md).

## Prerequisites

In order to configure access control for [!DNL Experience Platform], you must have administrator privileges for an organization that has an [!DNL Experience Platform] product integration. See the Adobe Help Center article on [administrative roles](https://helpx.adobe.com/enterprise/using/admin-roles.html) for more information.

## Available dashboard permissions {#available-permissions}

The [!DNL Dashboards] service provides three permissions that, when combined, provide full access to the [!UICONTROL Profiles], [!UICONTROL Segments], [!UICONTROL Destinations], and [!UICONTROL License Usage] dashboards within Adobe Experience Platform. These permissions are:

| Permission  | Description  |
|---|---|
| **Manage Standard Dashboards**  | This permission is a **global read and write permission**. It allows you to [create custom widgets](./customize/custom-widgets.md) and [edit the widget schema](./customize/edit-schema.md) through the [!UICONTROL Widget library]. |
| **View Standard Dashboards**  | This provides **read-only** functionality for the [!UICONTROL Profiles], [!UICONTROL Destinations], and [!UICONTROL Segments] dashboards and allows access to them through Platform's left navigation. It also adds [!UICONTROL Dashboards] to the left navigation and access to the [!UICONTROL Dashboards] inventory and integrations tab. |
| **View License Usage Dashboard** | This permission allows users **read-only** access to [the license usage dashboard](./guides/license-usage.md) within the Experience Platform UI. |

There are five permissions not included in the [!DNL Dashboard] category that are potentially required depending on your needs. The following table outlines their category locations in the Admin Console:

>[!IMPORTANT]
>
>Both the **[!DNL Manage Standard Dashboards]** and the **[!DNL View Standard Dashboards]** permissions **require** a "view" or "manage" permission from the [!DNL Profile Management] or [!DNL Destinations] category in the Admin Console to activate the relevant sections within the Platform UI.

| Permission | Admin Console category location |
|---|---|
| [!DNL View Profiles]  | [!DNL Profile Management] |
| [!DNL View Segments] | [!DNL Profile Management] |
| [!DNL View Destinations] | [!DNL Destinations] |
| [!DNL Manage Queries]  | [!DNL Query Service] |
| [!DNL Manage Sandboxes]  | [!DNL Sandbox Administration] |

## Access-control matrix

The following access-control matrix provides a breakdown of which permissions are required and what function they provide regarding access to the different dashboard features. Permissions are listed across the top horizontal row and the Platform UI workspace is listed along the left column.  

|   | [!UICONTROL View Standard Dashboard] OR [!UICONTROL Manage Standard Dashboard] | [!UICONTROL View Profiles],<br/>[!UICONTROL View Segments],<br/> [!UICONTROL View Destinations] | [!UICONTROL Manage Queries] & [!UICONTROL Manage Sandboxes] | [!UICONTROL View License Usage Dashboard]  |
|---|---|---|---|---|
| [!DNL Profiles],<br/>[!DNL Segments],<br/>[!DNL Destinations] in the left navigation. | N/A | **A "View" or "Manage" permission is REQUIRED** for each respective dashboard. | N/A | N/A |
| [!DNL Dashboards] in the left navigation. | ENABLED | **At least one REQUIRED**. | N/A | N/A |
| [!DNL Dashboards] [!DNL Inventory] <br/>(the browse tab) | ENABLED | N/A | N/A | N/A |
| [!DNL Dashboards] [!DNL Integrations] tab <br/>(used to install Power BI) | ENABLED | **At least one REQUIRED** |N/A | N/A |
| Power BI Install button & workflow | ENABLED | N/A | **REQUIRED** | N/A |
| [!DNL Profiles],<br/>[!DNL Segments],<br/>[!DNL Destinations] dashboards.<br/>The ability to edit widget schemas and add new attributes for widget customization | **Manage-standard-dashboard REQUIRED**  | **REQUIRED (for each respective dashboard)** | N/A | N/A |
| [!DNL License Usage Dashboard] |  N/A | N/A | N/A | ENABLED |

{style="table-layout:auto"}

## Add permissions to your product profile

Use the information provided above to add the appropriate permissions to your product profile. See the documentation for full instructions on [how to add permissions through the access control UI](../access-control/ui/permissions.md). 

For descriptions of the permissions, please refer to the [available permissions](#available-permissions) section earlier in this document.

>[!NOTE]
>
>You do not have to enable all permissions for all users. Depending on your organization's structure, you may wish to create separate product profiles for certain users and grant limited access (such as read-only). See the documentation on managing users for a product profile to learn [how to assign permissions for specific users](../access-control/ui/users.md).

Once you have added the necessary access permissions, users within your organization can begin to view dashboards within the Experience Platform UI and perform other actions based on the permissions that you have assigned.  
