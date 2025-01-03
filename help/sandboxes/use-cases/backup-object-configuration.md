---
title: Backup object configurations using sandbox tooling
description: Backup object configurations, or metadata, using sandbox tooling packages to safely reset sandboxes, add versioning support, and prevent the loss of critical configurations such as schemas, datasets, and segments, especially during development iterations.
feature: Use Cases, Sandbox Tooling
---
# Backup object configurations using sandbox tooling

Backup object configurations (or metadata) using sandbox tooling packages to safely reset sandboxes, add versioning support, and prevent the loss of critical configurations such as schemas, datasets, and segments, especially during development iterations.

![Overview showing the benefits of sandbox tooling](../images/use-cases/tooling-overview.png)

## Why consider this use case {#why-this-use-case}

Creating a backup package using sandbox tooling ensures your object configurations are stored and secured. Development sandboxes can fill quickly as you experiment and build, and creating a sandbox from scratch can be time-consuming and leave room for errors. Importing a backup package into a freshly reset sandbox returns your ideal configurations as you continue to develop. 

Backup packages also allow you to support versioning throughout your development process. As your sandbox changes, create additional backup packages while holding on to previous versions so you can easily restore your sandbox to a previous configuration. 

Follow the steps described in this use case to create a backup package of your own.

## Prerequisites and planning {#prerequisites-and-planning}

When planning to create your own backup package(s) within your organization, consider the following prerequisites in your planning process:

- Evaluate the current usage of the sandboxes within your organization. Are any non-production sandboxes approaching or exceeding their license entitlement?
- What is the scope of the metadata you wish to back up? You may consider backing up either a complete or partial sandbox, depending on your use case.
- Depending on the scope metadata you wish to back up, ensure you understand how to manually [add objects to a package](../ui/sandbox-tooling.md#add-object-to-a-new-package) or how to [export an entire sandbox](../ui/sandbox-tooling.md#export-an-entire-sandbox).
- Ensure you have access to sandbox tooling in your organization with the correct permissions.

### UI functionality, Platform components, and Experience Cloud products that you will use {#ui-functionality-and-elements}

To successfully implement this use case, you must use multiple areas of Adobe Experience Platform. Ensure you have the necessary [attribute-based access control permissions](../../access-control/abac/overview.md) for all these areas, or ask your system administrator to grant you the necessary permissions.

  - [Sandbox tooling](../ui/sandbox-tooling.md)
  - [Sandbox management](../ui/user-guide.md)
  - [License usage dashboard](../../landing/license-usage-and-guardrails/license-usage-dashboard.md-)
  - [Datasets](../../catalog/datasets/overview.md)
  - [Schemas](../../xdm//home.md)
  - [Segments](../../segmentation/home.md)
  - [Journeys from Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/journey)

## How to achieve the use case: high-level overview {#achieve-the-use-case-high-level}

1. Define the scope of the metadata you wish to backup.
2. Use the sandbox tooling user interface to export your desired objects into a backup package.
3. Regularly create new versions of the backup package to ensure backup sandboxes remain aligned with the current configuration.
4. Check your current usage in the license usage dashboard against your entitlements for non-production sandboxes.
5. Reset non-production sandboxes to comply with entitlements, or to free up unnecessary resources and data storage.
6. Import the backup package into the sandbox after resetting it to restore object configurations.

## How to achieve the use case: Step-by-step instructions {#step-by-step-instructions}

Read through the sections below which include links to further documentation, to complete each of the steps in the high-level overview above.

### Define the metadata scope

Before you begin creating your backup package you should consider the package's use case. Depending on your needs, you may wish to back up a complete sandbox or select specific objects to add to a package, as mentioned in the [prerequsites](#prerequisites-and-planning). 

>[!NOTE]
>
> If you're considering backing up your sandbox to reset it, be aware of the [limitations](../ui/user-guide.md#reset-a-sandbox) surrounding resetting sandboxes.

### Export an your chosen metadata into a package

At this point, you're ready to backup your sandbox using the Sandbox Tooling user interface. This step will cover backing up a sandbox in entirety, as well as backing up specific objects.

#### Export a complete sandbox

To backup your sandbox in entirety, follow this guide to create and publish a new package containing the configurations of your entire sandbox.

#### Export individual objects

You may backup individual objects into a package any of the following ways. While these guides focus on adding a schema into the package, the same steps apply for other objects, such as datasets, segments or journeys.

- Add an individual object to a new package, following [this guide](../ui/sandbox-tooling.md#add-object-to-a-new-package). 
- Add an individual object to an existing backup package, following [this guide](../ui/sandbox-tooling.md#add-an-object-to-an-existing-package-and-publish), making sure you publish your changes.
- Create an empty multi-object package to add objects to, following the guide below.

##### Creating a multi-object package

In the Platform UI, select **[!UICONTROL Sandboxes]** in the left navigation and then select **[!UICONTROL Packages]**. To begin creating a new package, select **[!UICONTROL Create package]** from the top-right corner.

![The packages tab in the sandboxes dashboard with Create package highlighted.](../images/use-cases/create-package.png)

The **[!UICONTROL Create package]** dialog box appears. Choose **[!UICONTROL Select objects]** and then select **[!UICONTROL Select]**.

![The Create package dialog box with Select objects and the Select option highlighted.](../images/use-cases/create-package-select-objects.png)

Select the **[!UICONTROL Multi-object]** option. Now, you need to provide a name for your new package. Enter your desired name into the **[!UICONTROL Package name]** text field. Once finished, select **[!UICONTROL Create]**.

![The Create package dialog box with Multi-object selected and the package name "Backup" filled in.](../images/use-cases/name-multi-object.png)

Your new multi-object package is created and available in the [!UICONTROL Packages] dashboard. Select the package from the list.

![The Packages dashboard with the "Backup" package highlighted.](../images/use-cases/package-created.png)

The package's information and contents appear. Currently, there are no objects in our new package. To begin adding objects, follow the [guide](../ui/sandbox-tooling.md#add-object-to-a-new-package) on adding objects to an existing package.

### Create new versions of the backup package as needed

Now you've created your first backup package for your sandbox, be sure to create new backup versions as your sandboxes configurations change. 

While it's possible to add new objects to your existing backup package, you are encouraged to create new packages to support versioning in your sandbox. As your development iterates, you can easily reset and import any previous version of your sandboxes.

### Check your current usages against your license entitlements

Now that your backup package is ready, you can reset your sandbox to reset your usage. It's recommended to regularly monitor your usage so you can adjust your license entitlements or reset your sandbox as needed. You can refer to [this guide](../../dashboards/guides/license-usage.md) to learn more about the license usage dashboard. 

### Reset your sandbox

At this point, you can safely reset your sandbox, assuming your sandbox meets the necessary parameters. Follow [this guide](../ui/user-guide.md#reset-a-sandbox) to begin resetting your sandbox, being sure to read the warnings listing cases that may prevent you from resetting your sandbox.

### Import the newly created backup package into your reset sandbox

Now that you've reset your sandbox, we can make use of the backup package we created. Follow [this guide](../ui/sandbox-tooling.md#import-a-package-to-a-target-sandbox) for a step-by-step process on importing a package into your target sandbox.

## Other use cases acheived through sandbox toolings: {#other-use-cases}

Explore further use cases endabled through sandbox tooling:

- [Enable a center of excellence using sandbox tooling](./center-of-excellence.md)
