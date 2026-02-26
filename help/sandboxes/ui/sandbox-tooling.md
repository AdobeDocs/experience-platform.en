---
title: Sandbox Tooling
description: Seamlessly export and import Sandbox configurations between sandboxes.
exl-id: f1199ab7-11bf-43d9-ab86-15974687d182
---
# Sandbox tooling

>[!NOTE]
>
>Sandbox tooling is a foundational capability that supports both [!DNL Real-Time Customer Data Platform] and [!DNL Journey Optimizer] to improve the development cycle efficiency and configuration accuracy.<br><br>You are required to have the following two role-based access control permissions to use the sandbox tooling feature:<br>- `manage-sandbox` or `view-sandbox`<br>- `manage-package`

Improve configuration accuracy across sandboxes and seamlessly export and import sandbox configurations between sandboxes with the sandbox tooling feature. Use sandbox tooling to reduce the time to value for the implementation process and move successful configurations across sandboxes.

You can use the sandbox tooling feature to select different objects and export them into a package. A package can consist of a single object or multiple objects. <!--or an entire sandbox.-->Any objects that are included in a package must be from the same sandbox.

## Objects supported for sandbox tooling {#supported-objects}

The sandbox tooling feature provides you with the ability to export [!DNL Adobe Real-Time Customer Data Platform] and [!DNL Adobe Journey Optimizer] objects into a package. 

### Real-time Customer Data Platform objects {#real-time-cdp-objects}

>[!BEGINSHADEBOX]

### Changes to multi-entity audience imports

With the [B2B architecture upgrades](../../rtcdp/b2b-architecture-upgrade.md), you will no longer be able to import multi-entity audiences with B2B attributes and Experience Events if a package that included these audiences were published before the upgrade. These audiences will fail to import and cannot be automatically converted to the new architecture. 

To work around this limitation, you must create a new package with the updated audiences and then import them into their respective target sandboxes using sandbox tooling.


>[!ENDSHADEBOX]

The table below lists [!DNL Adobe Real-Time Customer Data Platform] objects that are currently supported for sandbox tooling:

| Platform | Object | Details |
| --- | --- | --- |
| Customer Data Platform | Sources | <ul><li>The source account credentials are not replicated in the target sandbox for security reasons and will be required to be updated manually.</li><li>The source dataflow is copied in a draft status by default.</li></ul> **NOTE:** Currently, sandbox tooling supports only batch-based source dataflows. Streaming-based source dataflows are not supported. |
| Customer Data Platform | Audiences | <ul><li>Only the **[!UICONTROL Customer Audience]** type **[!UICONTROL Segmentation service]** is supported.</li><li>Existing labels for consent and governance will be copied over in the same import job.</li><li> System will auto select default Merge Policy in target sandbox with same XDM class when checking merge policy dependencies.</li><li>If an existing object with the same name is detected when importing Audiences, Sandbox tooling will always reuse the existing object, to avoid object proliferation.</li></ul> |
| Customer Data Platform | Identities | <ul><li>The system will auto-deduplicate Adobe standard identity namespaces when creating in the target sandbox.</li><li>Audiences can only be copied when all attributes in audience rules are enabled in the union schema. The necessary schemas must be moved and enabled for unified profile first.</li></ul> |
| Customer Data Platform | Schemas/ Field Groups/ Data Types | <ul><li>Existing labels for consent and governance will be copied over in the same import job.</li><li>You have the flexibility to import schemas without the Unified Profile option enabled. The schema relationships edge case are not included in the package.</li><li>If an existing object with the same name is detected when importing Schemas/Field Groups, Sandbox tooling will always reuse the existing object, to avoid object proliferation.</li></ul> |
| Customer Data Platform | Datasets | Datasets are copied with the unified profile setting disabled by default. |
| Customer Data Platform | Consent and Governance Policies | Add custom policies created by a user to a package and move them across sandboxes. |

The following objects are imported but are in a draft or disabled status:

| Feature | Object | Status |
| --- | --- | --- |
| Import status | Source dataflow | Draft |
| Import status |  Journey | Draft |
| Unified profile | Dataset | Unified profile disabled |
| Policies | Data governance policies | Disabled |

### Adobe Journey Optimizer objects {#abobe-journey-optimizer-objects}

The table below lists [!DNL Adobe Journey Optimizer] objects that are currently supported for sandbox tooling and limitations. For a complete list of best practices, refer to the [Journey Optimizer general best practices](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/connect-systems/sandbox/copy-objects-to-sandbox?#global) guide.

| Platform | Object | Supported Dependent Objects | Details |
| --- | --- | --- | --- |
| [!DNL Adobe Journey Optimizer] | Audience | | An audience can be copied as a dependent object of the journey object. You can select create a new audience or reuse an existing one in the target sandbox. |
| [!DNL Adobe Journey Optimizer] | Schema | | The schemas used in the journey can be copied as dependent objects. You can select create a new schema or reuse an existing one in the target sandbox. |
| [!DNL Adobe Journey Optimizer] | Merge policy | | The merge policies used in the journey can be copied as dependent objects. In the target sandbox, you **cannot** create a new merge policy, you can only use an existing one. |
| [!DNL Adobe Journey Optimizer] | Journey | The following objects used in the journey are copied as dependent objects. During the import workflow, you can choose either **[!UICONTROL Create new]** or **[!UICONTROL Use existing]** for each: <ul><li>Audiences</li><li>Canvas details</li><li>Content templates</li><li>Custom actions</li><li>Data Sources</li><li>Events</li><li>Field Groups</li><li>Fragments</li><li>Schemas</li></ul> | When you select **[!UICONTROL Use existing]** during the import process to copy a journey to another sandbox, the existing custom actions you choose **must** be an exact match to the source custom action. If they don’t match, the new journey will generate unresolvable errors.<br>The system copies the events and event details used in the journey and creates a new version in the target sandbox. |
| [!DNL Adobe Journey Optimizer] | Action | | Email and push messages used in the journey can be copied as dependent objects. The channel action activities used in the journey fields, which are used for personalization in the message, are not checked for completeness. Content blocks are not copied.<br><br>The update profile action used in the journey can be copied. Custom actions can be added to a package independently. Action details used in the journey are also copied. It will always create a new version in the target sandbox.|
| [!DNL Adobe Journey Optimizer] | Custom Actions |  | Custom actions can be added to a package independently. Once a custom action is assigned to a journey, it can no longer be edited. To make updates to custom actions, you should: <ul><li>move custom actions prior to migrating a journey</li><li>update configurations (such as request headers, query parameters, and authentication) for custom actions post migration</li><li>migrate journey objects with the custom actions you added during the first step</li></ul> |
| [!DNL Adobe Journey Optimizer] | Content template | | A content template can be copied as a dependent object of the journey object. Standalone templates allow you to easily reuse custom content across Journey Optimizer campaigns and journeys. |
| [!DNL Adobe Journey Optimizer] | Fragment | All nested fragments. | A fragment can be copied as a dependent object of the journey object. Fragments are reusable components that can be referenced in one or more emails across Journey Optimizer campaigns and journeys.  |
| [!DNL Adobe Journey Optimizer] | Campaigns | The following objects used in the campaign are copied as dependent objects: <ul><li>Campaigns</li><li>Audiences</li><li>Schemas</li><li>Content templates</li><li>Fragments</li><li>Message/Content</li><li>Channel configuration</li><li>Unified decision objects</li><li>Experiment settings/variants</li></ul>| <ul><li>Campaigns can be copied along with all items related to the profile, audience, schema, inline messages, and dependent objects. Some items are not copied, such as data usage labels and language settings. For a complete list of objects that cannot be copied, refer to the [exporting objects to another sandbox](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/configuration/copy-objects-to-sandbox) guide.</li><li>The system will automatically detect and resuse an existing channel configuration object in the target sandbox if an identical configuration exists. If no matching configuration is found, the channel configuration is skipped during import, and users must manually update the channel settings in the target sandbox for this journey.</li><li>Users may reuse existing experiments and audiences in the target sandbox as dependent objects of selected campaigns.</li></ul> |
| [!DNL Adobe Journey Optimizer] | Decisioning | The following objects must be present in the destination sandbox before copying Decisioning objects: <ul><li>Profile Attributes used across Decisioning objects</li><li>The field group of custom Offer Attributes</li><li>The schemas of Datastreams used for Context Attributes across Rules, Ranking or Capping.</li></ul> | <ul><li>Copying ranking formulas that use AI models is not currently supported.</li><li>Decision items (offer items) are not included automatically. To ensure they’re transferred, add them manually using the **Add to Package** option.</li><li>Policies that use a selection strategy require associated decision items to be added manually during the copy process. Policies that use manual or fallback decision items will have those items automatically included as direct dependencies.</li><li>Decision items must be copied first, before any other related objects.</li><li>For a complete list of supported objects, refer to the [exporting objects to another sandbox](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/configuration/copy-objects-to-sandbox) guide.</li></ul> |

## Export objects into a package {#export-objects}

>[!NOTE]
>
>All export actions are recorded in the audit logs.

>[!CONTEXTUALHELP]
>id="platform_sandbox_tooling_remove_object"
>title="Remove an object"
>abstract="To remove an object from the package, select the row to be removed and then use the delete option, made available upon selection. Note that you cannot remove objects from published packages."

>[!CONTEXTUALHELP]
>id="platform_sandbox_package_expiry"
>title="Package expiry settings"
>abstract="Packages are set to expire after a period of inactivity in draft status. The default date is set for 90 days from today. This date continues to change until the package is published. If you visit the package in draft status tomorrow, the date moves by +1 day, unless you set this manually."

>[!CONTEXTUALHELP]
>id="platform_sandbox_tooling_package_status"
>title="Package status"
>abstract="By default, the status is set to draft. Once the package has been published, the status is changed to published. No changes can be made after the package has been published."

>[!NOTE]
>
>You can only import a package if you have permission to access the objects. 

This example documents the process of exporting a schema and adding it to a package. You can use the same process to export other objects, for example, datasets, journeys, and many more.

### Add object to a new package {#add-object-to-new-package}

Select **[!UICONTROL Schemas]** from the left navigation and then select the **[!UICONTROL Browse]** tab, which lists the schemas available. Next, select the ellipsis (`...`) next to the selected schema, and a dropdown displays controls. Select **[!UICONTROL Add to package]** from the dropdown.

![List of schemas showing the dropdown menu highlighting the [!UICONTROL Add to package] control.](../images/ui/sandbox-tooling/add-to-package.png)

From the **[!UICONTROL Add to package]** dialog, select the **[!UICONTROL Create new package]** option. Provide a [!UICONTROL Name] for your package and an optional [!UICONTROL Description], then select **[!UICONTROL Add]**.

![The [!UICONTROL Add to package] dialog with [!UICONTROL Create new package] selected and highlighting [!UICONTROL Add].](../images/ui/sandbox-tooling/create-new-package.png)

You are returned to the **[!UICONTROL Schemas]** environment. You can now add additional objects to the package you created by following the next steps listed below.

### Add an object to an existing package and publish {#add-object-to-existing-package}

To view a list of the available schemas, select **[!UICONTROL Schemas]** from the left navigation and then select the **[!UICONTROL Browse]** tab. Next, select the ellipsis (`...`) next to the selected schema to see control options in a dropdown menu. Select **[!UICONTROL Add to package]** from the dropdown.

![List of schemas showing the dropdown menu highlighting the [!UICONTROL Add to package] control.](../images/ui/sandbox-tooling/add-to-package.png)

The **[!UICONTROL Add to package]** dialog appears. Select the **[!UICONTROL Existing package]** option, then select the **[!UICONTROL Package name]** dropdown and select the package required. Finally, select **[!UICONTROL Add]** to confirm your choices.

![[!UICONTROL Add to package] dialog, showing a selected package from the dropdown.](../images/ui/sandbox-tooling/add-to-existing-package.png)

The list of objects added to the package is listed. To publish the package and make it available to be imported into sandboxes, select **[!UICONTROL Publish]**.

![A list of objects in the package, highlighting the [!UICONTROL Publish] option.](../images/ui/sandbox-tooling/publish-package.png)

Select **[!UICONTROL Publish]** to confirm to publication of the package.

![Publish package confirmation dialog, highlighting the [!UICONTROL Publish] option.](../images/ui/sandbox-tooling/publish-package-confirmation.png)

>[!NOTE]
>
>Once it has been published, the package's contents cannot be changed. To avoid compatibility problems, ensure that all necessary assets have been selected. If changes must be made, you are required to create a new package.

You are returned to the **[!UICONTROL Packages]** tab in the [!UICONTROL Sandboxes] environment, where you can see the new published package.

![List of sandbox packages highlighting the new published package.](../images/ui/sandbox-tooling/published-packages.png)

## Import a package to a target sandbox {#import-package-to-target-sandbox}

>[!NOTE]
>
>All import actions are recorded in the audit logs.

To import the package into a target sandbox, navigate to the Sandboxes **[!UICONTROL Browse]** tab and select the plus (+) option beside the sandbox name.

![The sandboxes **[!UICONTROL Browse]** tab highlighting the import package selection.](../images/ui/sandbox-tooling/browse-sandboxes.png)

Using the dropdown menu, select the **[!UICONTROL Package name]** you want to import to the targeted sandbox. Add a **[!UICONTROL Job name]**, which will be used for future monitoring. By default, unified profile will be disabled when the package's schemas are imported. Toggle **Enable schemas for profile** to enable this, then select **[!UICONTROL Next]**.

![The import details page showing the [!UICONTROL Package name] dropdown selection](../images/ui/sandbox-tooling/import-package-to-sandbox.png)

The [!UICONTROL Package object and dependencies] page provides a list of all assets included in this package. The system automatically detects dependent objects that are required for successfully importing selected parent objects. Any missing attributes are displayed at the top of the page. Select **[!UICONTROL View details]** for a more detailed breakdown.

![The [!UICONTROL Package object and dependencies] page shows missing attributes.](../images/ui/sandbox-tooling/missing-attributes.png)

>[!NOTE]
>
>Dependent objects can be replaced with existing ones in the target sandbox, which allow you to reuse existing objects rather than creating a new version. For example, when you import a package including schemas, you can reuse existing custom field group and identity namespaces in the target sandbox. Alternatively, when you import a package including Journeys, you can reuse existing segments in the target sandbox.
>
>Sandbox tooling does not currently support updating or overwriting existing objects. You may choose to create a new object, or continue to use the existing object without modifications. If an existing object with the same name is detected, Sandbox tooling will always reuse the existing object, even if you select the [!UICONTROL Create new] option to avoid object proliferation.

To use an existing object, select the pencil icon beside the dependent object.

![The [!UICONTROL Package object and dependencies] page shows a list of assets included in the package.](../images/ui/sandbox-tooling/package-objects-and-dependencies.png)

The options to create new or use existing are displayed. Select **[!UICONTROL Use existing]**.

![The [!UICONTROL Package object and dependencies] page showing dependent object options [!UICONTROL Create new] and [!UICONTROL Use existing].](../images/ui/sandbox-tooling/use-existing-object.png)

The **[!UICONTROL Field group]** dialog shows a list of field groups available for the object. Select the field groups required, then select **[!UICONTROL Save]**.

![A list of fields shown on the [!UICONTROL Field group] dialog, highlighting the [!UICONTROL Save] selection.](../images/ui/sandbox-tooling/field-group-list.png)

You are returned to the [!UICONTROL Package object and dependencies] page. From here, select **[!UICONTROL Finish]** to complete the package import.

![The [!UICONTROL Package object and dependencies] page shows a list of assets included in the package, highlighting [!UICONTROL Finish].](../images/ui/sandbox-tooling/finish-object-dependencies.png)

## Export and import an entire sandbox 

>[!NOTE]
>
>Currently, only Real-time Customer Data Platform objects are supported when exporting or importing an entire sandbox. Adobe Journey Optimizer objects such as journeys are not supported at this time.

You can export all supported object types into a full sandbox package, then import the package across various sandboxes to replicate object configurations. For example, this functionality allows you to:

- Reimport a sandbox to reproduce all of the object's configurations if you need to reset the sandbox
- Import the package into other sandboxes and utilize it as a blueprint sandbox to accelerate the development process.

### Export an entire sandbox {#export-entire-sandbox}

To export an entire sandbox, navigate to the [!UICONTROL Sandboxes] **[!UICONTROL Packages]** tab and select **[!UICONTROL Create package]**.

![The [!UICONTROL Sandboxes] **[!UICONTROL Packages]** tab highlighting [!UICONTROL Create package].](../images/ui/sandbox-tooling/create-sandbox-package.png)

Select **[!UICONTROL Entire sandbox]** for the [!UICONTROL Type of package] in the [!UICONTROL Create package] dialog. Provide a [!UICONTROL Package name] for your new package and select the **[!UICONTROL Sandbox]** from the dropdown. Finally, select **[!UICONTROL Create]** to confirm your entries.

![The [!UICONTROL Create package] dialog showing completed fields and highlighting [!UICONTROL Create].](../images/ui/sandbox-tooling/create-package-dialog.png)

The package is created successfully, select **[!UICONTROL Publish]** to publish the package.

![List of sandbox packages highlighting the new published package.](../images/ui/sandbox-tooling/publish-entire-sandbox-packages.png)

You are returned to the **[!UICONTROL Packages]** tab in the [!UICONTROL Sandboxes] environment, where you can see the new published package.

### Import the entire sandbox package {#import-entire-sandbox-package}

>[!NOTE]
>
>All objects will be imported into the target sandbox as new objects. It is best practice to import a full sandbox package into an empty sandbox.

To import the package into a target sandbox, navigate to the [!UICONTROL Sandboxes] **[!UICONTROL Browse]** tab and select the plus (+) option beside the sandbox name.

![The sandboxes **[!UICONTROL Browse]** tab highlighting the import package selection.](../images/ui/sandbox-tooling/browse-entire-package-sandboxes.png)

Using the dropdown menu, select the full sandbox using the **[!UICONTROL Package name]** dropdown. Add a **[!UICONTROL Job name]**, which will be used for future monitoring and an optional **[!UICONTROL Job description]**, then select **[!UICONTROL Next]**.

![The import details page showing the [!UICONTROL Package name] dropdown selection](../images/ui/sandbox-tooling/import-full-sandbox-package.png)

>[!NOTE]
>
>You must have full permissions to all of the objects included in the package. If you do not have permissions, the import operation will fail and error messages will appear.

You are taken to the [!UICONTROL Package object and dependencies] page where you can see the number of objects and dependencies that are imported and excluded objects. From here, select **[!UICONTROL Import]** to complete the package import.

 ![The [!UICONTROL Package object and dependencies] page shows the inline message of object types not supported, highlighting [!UICONTROL Import].](../images/ui/sandbox-tooling/finish-dependencies-entire-sandbox.png)

Allow some time for the import to complete. The time to complete can vary depending on the number of objects in the package. You can monitor the import job from the [!UICONTROL Sandboxes] **[!UICONTROL Jobs]** tab.

## Monitor import details {#view-import-details}

To view the imported details, navigate to the [!UICONTROL Sandboxes] **[!UICONTROL Jobs]** tab and select the package from the list. Alternatively, use the search bar to search for the package.

![The sandboxes [!UICONTROL Jobs] tab highlights the import package selection.](../images/ui/sandbox-tooling/imports-tab.png)

<!--### View imported objects {#view-imported-objects}

On the **[!UICONTROL Jobs]** tab in the [!UICONTROL Sandboxes] environment, select **[!UICONTROL View imported objects]** from the right details pane.

Select **[!UICONTROL View imported objects]** from the right details pane on the **[!UICONTROL Jobs]** tab in the [!UICONTROL Sandboxes] environment.

![The sandboxes [!UICONTROL Imports] tab highlights the [!UICONTROL View imported objects] selection in the right pane.](../images/ui/sandbox-tooling/view-imported-objects.png)

Use the arrows to expand objects to view the full list of fields that have been imported into the package.

![The sandboxes [!UICONTROL Imported objects] showing a list of objects imported into the package.](../images/ui/sandbox-tooling/expand-imported-objects.png)-->

Select **[!UICONTROL View import summary]** from the right details pane in the **[!UICONTROL Jobs]** tab in the Sandboxes environment.

![The sandboxes [!UICONTROL Imports] tab highlights the [!UICONTROL View import details] selection in the right pane.](../images/ui/sandbox-tooling/view-import-details.png)

The **[!UICONTROL Import summary]** dialog shows a breakdown of the imports with progress as a percentage.

>[!NOTE]
>
>You can view a list of objects by navigating to specific inventory pages.

![The [!UICONTROL Import details] dialog showing a detailed breakdown of the imports.](../images/ui/sandbox-tooling/import-details.png)

When your import is complete, a notification is received in the Experience Platform UI. You can access these notifications from the alerts icon. You can navigate to troubleshooting from here if a job is unsuccessful.

## Transfer iterative object configurations updates across sandboxes via sandbox tooling {#move-configs}

You can use sandbox tooling to transfer object configurations between different sandboxes. Previously, configuration updates to your objects (such as schemas, field groups, and data types) had to be manually recreated or reimported in order to be transferred to other sandboxes. With this capability, you can use sandbox tooling to accelerate your workflows and reduce potential errors by seamlessly transferring your configuration updates across different sandboxes.

![A diagram that displays how updates are moved across sandboxes.](../images/ui/sandbox-tooling/move-updates-diagram.png)

>[!TIP]
>
> Ensure that you have the following prerequisites before attempting to transfer your object configurations across different sandboxes.
>
>- The appropriate permissions to access sandbox tooling.
>- A newly created or updated object (such as a schema) in your source sandbox.

>[!BEGINSHADEBOX]

### Supported object types for update operation

The following are supported object types for update:

- Schemas
- Field groups
- Data types

| Supported updates | Unsupported updates  |
| --- | --- |
| <ul><li>Adding new fields/field groups to the resource.</li><li>Making a required field optional.</li><li>Introducing new required fields.</li><li>Introducing a new relationship field.</li><li>Introducing a new identity field.</li><li>Changing the resource's display name and description.</li></ul> | <ul><li>Removing previously defined fields.</li><li>Redefining existing fields when schema is enabled for Real-Time Customer Profile.</li><li>Removing or restricting previously supported field values.</li><li>Moving existing fields to a different location in the schema tree – this will create a new field in the target sandbox, but the previous field will not be removed.</li><li>Enabling or disabling the schema to participate in Profile – this operation will be skipped in diff comparison.</li><li>Access control labels.</li></ul> |

>[!ENDSHADEBOX]

Follow the steps below to learn how to use sandbox tooling to transfer your object configurations across different sandboxes.

### Previously imported objects

Follow these steps if your use case involves existing objects in your source sandbox that require configuration updates, after having already been packaged and imported to other sandboxes.

First, update the object in your source sandbox. For example, navigate to the **[!UICONTROL Schemas]** workspace, select your schema, and add a new field group.

![The schema workspace with an updated schema.](../images/ui/sandbox-tooling/update-schema.png)

Once you have updated your schema, navigate to **[!UICONTROL Sandboxes]**, select **[!UICONTROL Packages]**, and then locate your existing package.

![The sandbox tooling interface with a package selected](../images/ui/sandbox-tooling/select-package.png)

Use the packages interface to verify your changes. Select **[!UICONTROL Check for updates]** to view any changes to the artifacts in your package. Next, select **[!UICONTROL View diff]** to receive a detailed summary of all the changes conducted against your artifacts. 

![The package interface with the view diff button selected.](../images/ui/sandbox-tooling/view-diff.png)

The [!UICONTROL View diff] interface appears. Refer to this toll for information on your source and target artifacts, as well as the changes to be applied to them.

![The summary of changes.](../images/ui/sandbox-tooling/summary-of-changes.png)

During this step, you can also select [!UICONTROL Summarize with AI] for a step-by-step summary of all changes. 

![The summary with AI-enabled.](../images/ui/sandbox-tooling/ai-summary.png)

When ready, select **[!UICONTROL Update package]** and then select **[!UICONTROL Confirm]** in the pop up window that appears. Once the job is complete, you can refresh the page and select **[!UICONTROL View history]** to verify the version of your package.

![The confirmation window.](../images/ui/sandbox-tooling/confirm-changes.png)

To import your changes, navigate back to the [!UICONTROL Packages] directory and select the ellipses (`...`) beside your package, then select **[!UICONTROL Import package]**. Experience Platform auto-selects [!UICONTROL Update existing objects]. Verify the changes, and then select **[!UICONTROL Finish]**.

>[!NOTE]
>
>All dependent objects are automatically updated in the target sandbox as part of this workflow.

![The import objective interface.](../images/ui/sandbox-tooling/import-objective.png)

To further validate your import process, navigate to your target sandbox and manually view the updated object from within that sandbox.

### Objects created manually in target sandbox

Follow these steps if your use case involves applying configuration changes to objects that were manually created in separate sandboxes.

First, create and publish a new package with your updated object.

Next, import your package to the target sandbox that contains the objects that you also want to update. During the import process, select **[!UICONTROL Update existing objects]** and then use the object navigator to manually select the target objects that you want your updates to apply to.

>[!NOTE]
>
>- It is optional to select a target mapping in a different sandbox for dependent objects. If none is selected, a new one is created.
>- For identity namespace, the system auto-detects if a new identity needs to be created if an existing one needs to be reused in the target sandbox.

![The import objective interface with placeholders for the target objects to be updated.](../images/ui/sandbox-tooling/update-existing-objects.png)

Once you have identified the target objects that you want to update, select **[!UICONTROL Finish]**.

![The target objects selected.](../images/ui/sandbox-tooling/add-updated-objects.png)

## Video tutorial

The following video is intended to support your understanding of sandbox tooling, and outlines how to create a new package, publish a package, and import a package.

>[!VIDEO](https://video.tv.adobe.com/v/3424763/?learn=on)

## Next steps

This document demonstrated how to use the sandbox tooling feature within the Experience Platform UI. For information on sandboxes, see the [sandbox user guide](../ui/user-guide.md).

For steps on performing different operations using the Sandbox API, see the [sandbox developer guide](../api/getting-started.md). For a high-level overview of sandboxes in Experience Platform, refer to the [overview documentation](../home.md).
