---
title: Enable a center of excellence using sandbox tooling
description: Enable a center of excellence using sandbox tooling by creating a "golden sandbox" package to standardize best practices across multiple sandboxes.
feature: Use Cases, Sandbox Tooling
---
# Enable a center of excellence using sandbox tooling

Enable a center of excellence using sandbox tooling by creating a "golden sandbox" package to standardize best practices across multiple sandboxes.

![Overview of exporting packages across different organizations](../images/use-cases/packages-across-orgs.png)

## Why consider this use case {#why-this-use-case}

Most large companies or enterprises make use of multiple sandboxes for different organizations, teams, regions, or development environments. Using [sandbox tooling](../ui/sandbox-tooling.md), you can create a "golden sandbox" package to ensure consistency, compliance, and alignment with organization standards across multiple sandboxes. 

This "golden sandbox" package creates a center of excellence to efficently share key configurations. Using sandbox tooling, you can easily import your package across multiple sandboxes. Any updates and changes made to your center of excellence are reflected across all sandboxes containing your package.

Follow the steps described in this use case to create a "golden sandbox" package of your own.

## Industry example {#industry-example}

As an example, consider a bank that operates across different regions, such as North America, Europe and Africa. Each market or region has its own Adobe Experience Platform instance. This bank wants to maintain a centralized data model managed by a global team of architects where a single version of the data model can be pushed out across all markets.

This bank chooses to levarage sandbox tooling to create and maintain a "golden sandbox" package. This helps ensure transparency and consistency across all regions. For example, if a specific market or region has a unique data requirement, the global data team will update the package accordingly, publishing changes to all markets.

## Prerequisites and planning {#prerequisites-and-planning}

When planning to create your own center of excellence within your organization, consider the following prerequisites in your planning process:

- Identify the best practices and configurations you wish to include in your package.
- Create a sandbox with all relevant and validated configurations to be set as the "golden sandbox".
- If required, gain stakeholder input and agreement on your baseline standards.

### UI functionality, Platform components, and Experience Cloud products that you will use {#ui-functionality-and-elements}

To successfully implement this use case, you must use multiple areas of Adobe Experience Platform. Ensure you have the necessary [attribute-based access control permissions](../../access-control/abac/overview.md) for all these areas, or ask your system administrator to grant you the necessary permissions.

- [Sandbox tooling](../ui/sandbox-tooling.md)
- [Sandbox management](../ui/user-guide.md)
- [Datasets](../../catalog/datasets/overview.md)
- [Schemas](../../xdm//home.md)
- [Segments](../../segmentation/home.md)
- [Journeys from Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/journey)

## How to achieve the use case: high-level overview {#achieve-the-use-case-high-level}

1. Create the baseline configuration that represents your best practices in a "golden sandbox". This may include objects such as datasets, schemas, segments, or journeys.
2. Using sandbox tooling, export the configuration into a package.
3. Import this package across all relevant sandboxes.
4. If you have multiple organizations, share this package across your organizations.
5. Monitor imports and exports and track changes through audit logs.
6. Regularly update the "golden sandbox" as standards evolve to ensure all sandboxes remain aligned with the best practices.

## How to achieve the use case: Step-by-step instructions {#step-by-step-instructions}

Read through the sections below which include links to further documentation, to complete each of the steps in the high-level overview above.

### Create your "golden sandbox"

### Export your sandbox into a package

### Import your package into relevant sandboxes

### Share package across organizations

### Monitor imports and exports through audit logs

### Regularly update the "golden sandbox"

## Other use cases achieved through partner data support {#other-use-cases}

Explore further use cases enabled through sandbox tooling:

- [Backup object configurations using sandbox tooling](./backup-object-configuration.md)
