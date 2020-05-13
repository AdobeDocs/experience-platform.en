---
title: Adobe Experience Platform Release Notes
description: Experience Platform release notes May 13, 2020
doc-type: release notes
last-update: May 13, 2020
author: crhoades, ens28527
---

# Adobe Experience Platform release notes 

**Release date: May 13, 2020**

Updates to existing features in Adobe Experience Platform:

- [User interface updates](#ux)
- [Data Science Workspace](#dsw)
- [Experience Platform Web SDK and Experience Platform Edge Network](#edge)
- [Sources](#sources)

## User interface updates {#ux}

The domain and header bar have been updated to unify and improve your experience across all Experience Cloud applications. These updates do not change current workflows.

These updates are being rolled out gradually, so you might not see the changes immediately. You can view the experience at any time by going to [https://experience.adobe.com/platform](https://experience.adobe.com/platform).

** Notable changes and improvements**

|Feature | Description|
|--- | ---|
| Organization and application switchers | Switch more easily between your organizations or to a different application. |
| Improved user Help menu | The help menu now includes featured articles and context-aware article recommendations. Search results also include results from community forums and more video content. Feedback options make it easier to provide feedback about article usefulness, report issues, and share your ideas. | 
| Improved Notifications | The Notifications drop-down now has two tabs, one for your own product notifications, and one for more global product announcements. |
| A new, easier URL pattern | Update your bookmarks to the new url: `experience.adobe.com/<application name>`. For example, https://experience.adobe.com/target, https://experience.adobe.com/analytics, and so on. |

## Data Science Workspace {#dsw}

Data Science Workspace uses machine learning and artificial intelligence to unleash insights from your data. Integrated into Adobe Experience Platform, Data Science Workspace helps you make predictions using your content and data assets across Adobe solutions. One of the ways Data Science Workspace accomplishes this is through the use of JupyterLab. JupyterLab is a web-based user interface for <a href="https://jupyter.org/" target="_blank">Project Jupyter</a> and is tightly integrated into Adobe Experience Platform. It provides an interactive development environment for data scientists to work with Jupyter notebooks, code, and data.

**New features**

|Feature | Description|
|--- | ---|
| JupyterLab Launcher | The JupyterLab Launcher now includes starters for Spark 2.4 notebooks. Spark 2.3 notebook starters are now marked as deprecated and set to be removed in a subsequent release. |
| Spark 2.4 | New Scala (Spark) and PySpark recipes now use Spark 2.4. |
| Kernels | Scala (Spark) notebooks are now authored via the Scala kernel. PySpark notebooks are now authored via the Python Kernel. The Spark and PySpark kernel are deprecated and set to be removed in a subsequent release. |
| Recipes | New PySpark and Spark recipes now follow the Docker workflow similar to Python and R recipes.|

For more information on migrating your notebooks and recipes to use Spark 2.4, please see the [notebook migration guide](../../data-science-workspace/recipe-notebook-migration.md). For more general information on Data Science Workspace, see the [overview documentation](../../data-science-workspace/home.md).

## Experience Platform Web SDK and Experience Platform Edge Network {#edge}

The Experience Platform Web SDK and Experience Platform Edge Network allow users to send data to the Adobe Experience Platform and other Adobe Solutions in real-time for end-user devices and browsers. The most recent list of use cases can be found in our [public roadmap](https://github.com/adobe/alloy/projects/5) which is updated often. 

**New features**

|Feature | Description|
|--- | ---|
|Support for ECID | The SDK supports ECID out of the box without any additional libraries or information to install |
| Configuration UI | Manage your configuration ID settings with the new edge configuration UI in Launch, must be whitelisted to access |
| Adobe Experience Platform Web SDK Mixin | A mixin for use with the Experience Platform web SDK that encompasses all the supported fields. |
| Course Consent Controls | Gives companies controls over opt-in and opt-out of the Experience Platform Web SDK|
| Client-side Debugging Support in the new Experience Cloud Debugger Extension | See requests from the Experience Platform web SDK as well as edge traces to see how data flows through the system. |
| Adobe Analytics | Send data to Analytics report suites via the edge configuration. XDM is flattened into context data, supports multi-suite tagging |
| Adobe Target | Support for Adobe Target. Including VEC, Form based composer, A/B, XT, Automated Personalization, MVT|
| Adobe Audience Manager Support | Support for Audience Manager ID syncs, URL destinations and Cookie Destinations |
| `synceIdnetity` | Renamed `setCustomersIds` to `syncIdentity` to make it more clear |
| XDM Object Builder | In the launch extension you can now build XDM objects as Data Elements |

For more information on Platform Web SDK and Edge Network, refer to the [documentation](../../edge/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New features**

| Feature | Description |
| ------- | ----------- |
| Additional API and UI support for cloud storage systems | New source connectors for Azure File Storage. |
| Additional API and UI support for databases | New source connectors for Azure Data Explorer, IBM DB2, and Oracle DB. |

**Known issues**

- None

To learn more about sources, see the [sources overview](../../sources/home.md).