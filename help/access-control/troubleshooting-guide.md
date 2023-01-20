---
keywords: Experience Platform;home;popular topics;troubleshooting;access control
solution: Experience Platform
title: Access Control Troubleshooting Guide
description: This document provides answers to frequently asked questions about access control in Adobe Experience Platform.
exl-id: c299c0c4-dbee-4e6d-8af4-2446444bed69
---
# Access control troubleshooting guide

This document provides answers to frequently asked questions about access control in Adobe Experience Platform. For questions and troubleshooting related to other [!DNL Platform] services, please refer to the [Experience Platform troubleshooting guide](../landing/troubleshooting.md).

[!DNL Experience Platform] leverages product profiles in the [Adobe Admin Console](https://adminconsole.adobe.com) to provide role-based access control, linking users with permissions and sandboxes.  See the [access control overview](home.md) for more information.

## Where can I find my current access permissions?

If you are a system administrator, product administrator, or product-profile administrator for your IMS Organization, you can view your assigned product profile and the permissions it provides within the Adobe Admin Console. See the [access control user guide](./ui/overview.md) for instructions on how to navigate the [!DNL Admin Console] to view a product profile's permissions.

If you are not an administrator, you can still view your current access permissions by sending a request to the `/acl/effective-policies` endpoint in the Access Control API. See the "View effective policies" section in [access control developer guide](./api/effective-policies.md) for more information.

## Some features in the [!DNL Platform] UI are not available. How is access to these features controlled by permissions?

If you do not have access permissions for a particular [!DNL Platform] feature, that feature will be hidden or greyed-out in the [!DNL Experience Platform] UI. For example, in order to view the "[!UICONTROL Profiles]" tab, you must have either the "[!UICONTROL View Profiles]" or "[!UICONTROL Manage Profiles]" permissions. Contact your administrator if you require additional permissions for [!DNL Experience Platform] capabilities.

## How are permissions grouped, and which group contains the permission I want to use?

Permissions are grouped and categorized by the [!DNL Platform] capabilities they apply to (such as [!DNL Data Management] and [!DNL Profile Management]). For a full list of available permissions and the groups they belong to, see the [permissions section](home.md#permissions) in the access control overview.

See the [access control overview](home.md) for more information on providing role-based access control.

## What happens to permissions after migrating from Adobe IO to Business ID?

Access control uses user ID (an internal unique id assigned to a user) for granting permissions. When an organization is migrated from Adobe ID to Business ID, all permissions set for its users will be lost because the user ID changes and access control will use the newly generated user ID. If your organization is migrated to Business ID, please contact your Adobe representative to migrate your user ID from Adobe ID to Business ID.
