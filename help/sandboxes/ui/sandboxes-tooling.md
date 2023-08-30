---
title: Sandboxes Tooling
description: Seamlessly export and import Sandbox configurations between sandboxes.
---

# [!BADGE Beta] Sandbox tooling

>[!IMPORTANT]
>
>The **Sandbox tooling** feature described below is available only to select Beta customers.

>[!NOTE]
>
>Sandbox tooling is a foundational capability that supports both [!DNL Real-Time Customer Data Platform] and [!DNL Journey Optimizer].

Improve configuration accuracy across sandboxes and seamlessly export and import sandbox configurations between sandboxes with the sandbox tooling feature. Use sandbox tooling to reduce the time to value for the implementation process and move successful configurations across sandboxes.

You can use sandbox tooling to select different objects and export them into a package. A package can consist of a single object, multiple objects, or an entire sandbox.

## Import objects into a package

>[!NOTE]
>
>You can only import a package if you have permission to access the objects.

This example documents the process of importing a schema that has been created and adding it to a package. You can use the same process to import other objects, for example, datasets, journey, and many more.

### Add object to a new package

Select **[!UICONTROL Schemas]** from the left navigation and then select **[!UICONTROL Browse]** tab, which lists the schemas available. Next, select the ellipsis (`...`) next to the selected schema, and a dropdown displays controls. Select **[!UICONTROL Add to package]** from the dropdown.

![List of schemas showing the dropdown menu highlighting the [!UICONTROL Add to package] control.](../images/ui/sandbox-tooling/add-to-package.png)

From the **[!UICONTROL Add to package]** dialog, select **[!UICONTROL Create new package]**. Provide a [!UICONTROL Name] for your package and an optional [!UICONTROL Description], then select **[!UICONTROL Add]**.

![[!UICONTROL Add to package] dialog, showing [!UICONTROL Add to package] selected and highlighting [!UICONTROL Add].](../images/ui/sandbox-tooling/create-new-package.png)

You are returned to the **[!UICONTROL Schemas]** environment. You can now add additional objects to the package you created by following the next steps listed below.

### Add object to an existing package and publish

Select **[!UICONTROL Schemas]** from the left navigation and then select **[!UICONTROL Browse]** tab, which lists the available schemas. Next, select the ellipsis (`...`) next to the selected schema, and a dropdown displays controls. Select **[!UICONTROL Add to package]** from the dropdown.

![List of schemas showing the dropdown menu highlighting the [!UICONTROL Add to package] control.](../images/ui/sandbox-tooling/add-to-package.png)

The **[!UICONTROL Add to package]** dialog appears, select **[!UICONTROL Existing package]**. Select the **[!UICONTROL Package name]** drop down and select the package required, then select **[!UICONTROL Add]**.

![[!UICONTROL Add to package] dialog, showing a selected package from the drop down.](../images/ui/sandbox-tooling/add-to-existing-package.png)

The list of objects added to the package is listed. To publish the package and make it available to be imported into sandboxes, select **[!UICONTROL Publish]**.

![A list of objects in the package, highlighting the [!UICONTROL Publish] option.](../images/ui/sandbox-tooling/publish-package.png)

Select **[!UICONTROL Publish]** to confirm to publication of the package.

![Publish package confirmation dialog, highlighting the [!UICONTROL Publish] option.](../images/ui/sandbox-tooling/publish-package-confirmation.png)

You are returned to the **[!UICONTROL Packages]** tab in the [!UICONTROL Sandboxes] environment, where you can see the new published package.

![List of sandbox packages highlighting the new published package.](../images/ui/sandbox-tooling/published-packages.png)

### Import a package to a target sandbox

To import the package into a target sandbox, navigate to the Sandboxes **[!UICONTROL Browse]** tab and select the plus (+) option beside the sandbox name.

![The sandboxes **[!UICONTROL Browse]** tab highlighting the import package selection.](../images/ui/sandbox-tooling/browse-sandboxes.png)

Using the drop down menu, select the **[!UICONTROL Package name]** you want to import to the targeted sandbox, then select **[!UICONTROL Next]**.

![The import details page showing the [!UICONTROL Package name] drop down selection](../images/ui/sandbox-tooling/import-package-to-sandbox.png)

The [!UICONTROL Package object and dependencies] page shows a list of all assets included in this package. The system automatically detects dependent objects that are required for successfully importing static assets.

![The [!UICONTROL Package object and dependencies] page shows a list of assets included in the package.](../images/ui/sandbox-tooling/package-objects-and-dependencies.png)

>[!NOTE]
>
>Dependent objects can be replaced with existing ones in the target sandbox. This allows you to reuse existing objects rather than creating a new version.

To use an existing object, select the pencil icon beside the dependent object. Here you will see the options to create new or use existing. Select **[!UICONTROL Use existing]**.

![The [!UICONTROL Package object and dependencies] page showing dependent object options [!UICONTROL Create new] and [!UICONTROL Use existing].](../images/ui/sandbox-tooling/use-existing-object.png)

The **[!UICONTROL Field group]** page shows a list of field groups that can be used. Select the field group, then select **[!UICONTROL Save]**.

![A list of fields shown on the [!UICONTROL Field group] page, highlighting the [!UICONTROL Save] selection. ](../images/ui/sandbox-tooling/field-group-list.png)

You are returned to the [!UICONTROL Package object and dependencies]. From here, select **[!UICONTROL Finish]** to complete the package import.

![The [!UICONTROL Package object and dependencies] page shows a list of assets included in the package, highlighting [!UICONTROL Finish].](../images/ui/sandbox-tooling/finish-object-dependencies.png)

### View imported objects and details

To view the imported objects and imported details, navigate to the Sandboxes **[!UICONTROL Imports]** tab and select the package from the list. Alternatively, use the search bar to search for the package.

![The sandboxes [!UICONTROL Imports] tab highlights the import package selection.](../images/ui/sandbox-tooling/imports-tab.png)

#### View imported objects

Select **[!UICONTROL View imported objects]** from the right details pane on the **[!UICONTROL Imports]** tab in the Sandboxes environment.

![The sandboxes [!UICONTROL Imports] tab highlights the [!UICONTROL View imported objects] selection in the right pane.](../images/ui/sandbox-tooling/view-imported-objects.png)

Use the arrows to expand objects to view the full list of fields that have been imported into the package.

![The sandboxes [!UICONTROL Imported objects] showing a list of objects imported into the package.](../images/ui/sandbox-tooling/expand-imported-objects.png)

#### View import details

Select **[!UICONTROL View import details]** from the right details pane in the **[!UICONTROL Imports]** tab in the Sandboxes environment.

![The sandboxes [!UICONTROL Imports] tab highlights the [!UICONTROL View import details] selection in the right pane.](../images/ui/sandbox-tooling/view-import-details.png)

The **[!UICONTROL Import details]** dialog shows a detailed breakdown of the import.

![The [!UICONTROL Import details] dialog showing a detailed breakdown of the import.](../images/ui/sandbox-tooling/import-details.png)

>[!NOTE]
>
>When an import is completed, you will receive platform notifications, which can be accessed from the alerts icon. You can navigate to troubleshooting from here if a job is unsuccessful.

## Next steps

This document demonstrated how to utilize the sandbox tooling feature within the Experience Platform UI. For information on sandboxes, see the [sandbox user guide](../ui/user-guide.md).

For steps on performing different operations using the Sandbox API, see the [sandbox developer guide](../api/getting-started.md). For a high-level overview of sandboxes in Experience Platform, please refer to the [overview documentation](../home.md).
