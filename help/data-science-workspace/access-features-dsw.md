---
keywords: Experience Platform;home;Data Science Workspace;popular topics;access control;sandbox;intelligence pack
solution: Experience Platform
title: Data Science Workspace overview
topic: Access and features for data science workspace
---

# Data Science Workspace access and provisioning

The following document outlines Data Science workspace permissions, provisioning, and access to features. 

## Intelligence Pack addon for Data Science Workspace

The Intelligence pack addon for Data Science Workspace allows you to utilize additional advanced features and increase performance in areas such as workspace capabilities and Query Service.

Upon purchasing Intelligence Pack, you receive access to both the **Models** and **Services** tabs in the left-navigation bar under **DATA SCIENCE**. Without Intelligence Pack, the **DATA SCIENCE** menu only displays the **Notebooks** tab.

![DSW tabs](./images/access/platform-tabs.png)

- **Models** provides tools used to create, publish, and store advanced machine learning recipes and models. 
- **Services** contains both Adobe-provided services such as [Intelligent Services](../intelligent-services/home.md) and any custom external services you created with Data Science Workspace.

The following table outlines some of the key differences for Data Science Workspace with and without the Intelligence Pack:

>[!NOTE]
>
>You can license more than one Intelligence Pack and the increased capacity outlined below is added to your overall entitlement. For example, a customer licensing 2 Intelligence Packs is entitled to a total of 20 Query Service users and 20 Data Science Workspace users.

| | Data Science Workspace | Intelligence Pack addon |
| --- | --- | --- |
| **Packaging** | Included with Platform and Real-time Customer Data Profile. | Upgrade option |
| **Configuration options** | <ul><li>Easily access, explore and prep your behavioral and transactional data.</li><li>Access to the JupyterLab Notebook interface with support for Python and R.</li><li>Explore and derive insights with minimal effort.</li><li>Easily write data sets back into Experience Platform.</li><li>Use insights to analyze and predict business outcomes.</li></ul> | <ul><li>Leverage larger datasets to train machine learning models.</li><li> Develop complex models with technologies such as Spark and TensorFlow.</li><li> Seamlessly Package models and deploy them in Intelligence Services.</li><li> Automate insights by configuring training and scoring schedules.</li></ul> |
| **Modeling support** | <li>Supports an average modeling data size of 2GB.</li><li>Supports 5 concurrent Notebooks.</li><li>Supports 1 interactive batch query.</li><li>CPU capacity across all Notebooks is 32 CPU Cores and 256 gigabytes of RAM.</li> | <li>Supports an average modeling data size of 30GB.</li><li>Supports 10 concurrent Notebooks.</li><li>Supports 10 concurrent interactive batch queries.</li><li>CPU capacity across all Notebooks is 128 CPU Cores and 512 gigabytes of RAM.</li> |
| **Number of users** | <li>Support for 5 Data Science Workspace users.</li><li>Support for 1 Query Service user.</li> | <li>Support for 10 Data Science Workspace users.</li><li>Support for 10 Query Service users.</li> |

## Access control

Access control for Experience Platform is administered through the [Adobe Admin Console](https://adminconsole.adobe.com). This functionality leverages product profiles in Admin Console, which link users with permissions and sandboxes. See the [access control overview](../access-control/home.md) for more information.

In order to use Data Science Workspace, the "Manage Data Science Workspace" permission must be enabled. The following table outlines the effects of having this permission enabled or disabled:

| Permission | Enabled | Disabled |
|---|---|---|
| Manage Data Science Workspace | Provides access to all services in Data Science Workspace. | API and UI access to all services within Data Science Workspace is disabled. While disabled, routing to the Data Science Workspace *Models* and *Services* pages is prevented. |

## Sandbox support

Sandboxes are virtual partitions within a single instance of Experience Platform. Each Platform instance supports one production sandbox and multiple non-production sandboxes, each maintaining its own library of Platform resources. Non-production sandboxes allow you to test features, run experiments, and make custom configurations without impacting your production sandbox. For more information on sandboxes, see the [sandboxes overview](../sandboxes/home.md).

Currently, Data Science Workspace has a couple sandbox limitations:

- Compute resources are shared across the production sandbox and non-production sandboxes. Isolation for production sandboxes is set to be provided in the future.
- Scala/Spark and PySpark workloads for both notebooks and recipes are currently only supported in the production sandbox. Support for non-production sandboxes is set to be provided in the future.

## Next steps

This document outlined the different types of access and provisioning available in Data Science Workspace.

To learn more about Data Science Workspace, such as a complete day-to-day workflow, please begin by reading the [Data Science Workspace walkthrough](./walkthrough.md) documentation. For more general information, visit the [Data Science Workspace overview](./home.md).