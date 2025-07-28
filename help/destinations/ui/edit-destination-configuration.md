---
keywords: edit destination, edit destination configuration, edit destination settings, edit folder paths, edit buckets, edit marketing actions
title: Edit destination configuration
type: Tutorial
description: Learn how to edit destination configuration fields such as folder paths, buckets, and marketing actions for existing destination connections in Adobe Experience Platform.
exl-id: 8f7a9b2c-4d5e-4f8a-9e3f-2b1c8d9e0f1a
---

# Edit destination configuration {#edit-destination-configuration}

>[!BETA]
>
>This feature is currently in closed beta. To access this functionality, contact your Adobe representative to enable it for your organization.

Adobe Experience Platform now allows you to edit configuration fields for existing destination connections through the user interface. This functionality, previously available only via API, enables you to modify settings such as folder paths, bucket names, and marketing actions without having to create new connections.

## Overview {#overview}

The edit destination workflow provides you with the flexibility to modify various configuration fields for your existing destination connections. This means you can update folder paths where your data is exported, modify storage bucket configurations, change marketing actions associated with your destinations, and adjust other destination-specific settings without the hassle of creating entirely new connections.

When you need to change where your data is being sent or how it's being processed, you can now do so directly through the user interface. This is particularly useful when you want to reorganize your data export structure, update marketing campaign configurations, or adjust storage locations without disrupting your existing data flows.

>[!IMPORTANT]
>
>The editable fields vary by destination type. Some fields may be read-only, requiring you to create a new connection with the desired values.

## Prerequisites {#prerequisites}

Before you can start editing destination configurations, you'll need to ensure a few things are in place. First, your organization must have been granted access to this beta feature by Adobe. This is a controlled rollout, so you'll need to reach out to your Adobe representative if you don't currently have access.

You'll also need to have the necessary access control permissions to manage destinations within your Experience Platform instance. These permissions ensure that you can safely modify destination configurations without affecting other users or system settings.

Finally, you should have existing destination connections that you want to modify. This feature is designed for updating existing configurations rather than creating new ones from scratch.

## Access the edit destination workflow {#access-workflow}

To begin editing your destination configurations, you'll need to navigate to the destinations workspace and locate the specific connection you want to modify. Start by logging into the Experience Platform UI and selecting the Destinations option from the left navigation bar.

Once you're in the destinations workspace, select the Browse tab from the top header. This will display all of your existing destination connections in a comprehensive list. You can use the search and filter options to quickly locate the specific destination you want to edit.

When you find the destination connection you want to modify, look for the ellipsis menu (three dots) in the destination row. Click on this menu to reveal the available options, and then select "Edit destination" from the dropdown menu. This will launch the edit workflow for that specific destination.

>[!NOTE]
>
>The screenshot below shows the "Edit destination" option in the ellipsis menu. This image will be added when the feature is fully implemented.
>
>![Edit destination option highlighted in the destinations browse view](../assets/ui/edit-destination-configuration/edit-destination-option.png)

## Edit destination configuration fields {#edit-fields}

Once you've accessed the edit destination workflow, you'll be presented with various configuration fields that you can modify. The specific fields available to you will depend on the type of destination you're working with, but there are some common fields that most destinations support.

### Common editable fields {#common-fields}

Most destination types will allow you to edit the destination name and description. This is useful when you want to update the display name of your connection or add more detailed information about what the destination is used for. You can also typically modify the marketing actions associated with your destination, which helps ensure that your data usage complies with your organization's policies and the destination platform's requirements.

### Destination-specific fields {#destination-specific-fields}

Different destination types offer additional editing capabilities tailored to their specific functionality. For cloud storage destinations like Amazon S3, Azure Blob Storage, or Google Cloud Storage, you can often update the folder path where your exported files are stored. This is particularly useful when you want to reorganize your data storage structure or move exports to different folders within your storage buckets.

Email marketing destinations typically allow you to modify folder paths for exported email lists and update file naming conventions. This helps you maintain organized file structures and create more meaningful file names that reflect your current campaigns or data exports.

For advertising destinations, you can usually edit marketing actions for advertising campaigns and update audience targeting settings. This flexibility allows you to adjust your advertising strategies without having to recreate entire destination connections.

>[!NOTE]
>
>The specific fields available for editing depend on your destination type and configuration. Some fields may be read-only and cannot be modified through this workflow.

## Save your changes {#save-changes}

After you've made your desired changes to the destination configuration, you'll need to save them to apply the updates. Take a moment to review your modifications to ensure they are correct and align with your intended configuration. Once you're satisfied with your changes, simply select the Save button to apply them to your destination connection.

Your destination configuration will be updated immediately, and any new data exports will use the updated settings. It's important to note that changes to destination configurations may affect ongoing data exports, so make sure your modifications align with your data activation requirements and won't disrupt any critical data flows.

>[!IMPORTANT]
>
>Changes to destination configurations may affect ongoing data exports. Ensure that your modifications align with your data activation requirements.

## Limitations and considerations {#limitations}

As you work with the edit destination workflow, it's important to understand the current limitations and considerations. Some configuration fields may be read-only and cannot be modified through this interface. This is typically the case for fields that are fundamental to the destination connection or require special handling.

For certain types of field changes, you may need to create a new destination connection instead of editing the existing one. This is especially true for changes that affect the core authentication or connection parameters of the destination.

Configuration changes may also impact existing data flows and exports, so it's crucial to consider the downstream effects of your modifications. Since this is a beta feature, the functionality may be limited or subject to change as the feature evolves and matures.

## Troubleshooting {#troubleshooting}

If you encounter issues while editing destination configurations, there are several common problems and solutions to consider. If you receive an access denied error, make sure you have the necessary permissions to manage destinations within your Experience Platform instance.

If certain fields appear to be non-editable, this is likely because they are read-only based on your destination type. These fields typically require creating a new connection if you need to change their values.

If your changes aren't saving properly, double-check that all required fields are properly filled and that you haven't exceeded any field length limits. Sometimes validation errors can prevent saves from completing successfully.

If you don't see the edit option in the ellipsis menu, it's possible that your organization doesn't have access to this beta feature yet. In this case, you'll need to contact your Adobe representative to request access to the edit destination functionality.

## Related documentation {#related}

To learn more about working with destinations in Adobe Experience Platform, you can explore the destinations overview page which provides a comprehensive introduction to the destinations functionality. The destinations workspace documentation offers detailed information about navigating and managing your destination connections.

If you need to edit activation dataflows rather than destination configurations, the edit activation dataflows guide will walk you through that process. For updating destination account details, refer to the update destination accounts documentation.

You can also review the access control permissions documentation to understand what permissions are required for various destination management tasks.

* [Destinations overview](../home.md)
* [Destinations workspace](destinations-workspace.md)
* [Edit activation dataflows](edit-activation.md)
* [Update destination accounts](update-accounts.md)
* [Access control permissions](../access-control/home.md#permissions) 