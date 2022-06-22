---
title: Adobe Experience Platform Release Notes June 2022
description: The June 2022 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: June 22, 2022**

Updates to existing features in Adobe Experience Platform:

- [[!DNL Data Science Workspace]](#dsw)
- [[!DNL Destinations]](#destinations)
- [Query Service](#query-service)
- [Sources](#sources)

## [!DNL Data Science Workspace] {#dsw}

Data Science Workspace uses machine learning and artificial intelligence to unleash insights from your data. Integrated into Adobe Experience Platform, Data Science Workspace helps you make predictions using your content and data assets across Adobe solutions. One of the ways Data Science Workspace accomplishes this is through the use of JupyterLab. JupyterLab is a web-based user interface for <a href="https://jupyter.org/" target="_blank">Project Jupyter</a> and is tightly integrated into Adobe Experience Platform. It provides an interactive development environment for data scientists to work with Jupyter notebooks, code, and data.

| Feature | Description |
| --- | --- |
| JupyterLab Launcher | The JupyterLab Launcher now includes starters for Spark 3.2 notebooks. Spark 2.4 notebook starters are now replaced by Spark 3.2 notebooks and will be a part of this release. |
| Spark 3.2 | New Scala (Spark) and PySpark recipes now use Spark 3.2 |
| Kernels | Scala (Spark) notebooks are now authored via the Scala kernel. PySpark notebooks are now authored via the Python Kernel. The Spark and PySpark kernel are deprecated and set to be removed in a subsequent release. |
| Recipes | New PySpark and Spark recipes now follow the Docker workflow similar to Python and R recipes. |

{style="table-layout:auto"}

For more general information on Data Science Workspace, see the [overview documentation](../../data-science-workspace/home.md).

## [!DNL Destinations] {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New destinations**

| Destination | Description |
| ----------- | ----------- |
| [[!DNL Medallia]](/help/destinations/catalog/voice/medallia-connector.md) | Activate profiles for targeted Medallia surveys and feedback collection to better understand customer needs and expectations. |

{style="table-layout:auto"}

For more general information on destinations, refer to the [destinations overview](../../destinations/home.md).

## Query Service {#query-service}

Query Service allows you to use standard SQL to query data in Adobe Experience Platform [!DNL Data Lake]. You can join any datasets from the [!DNL Data Lake] and capture the query results as a new dataset for use in reporting, Data Science Workspace, or for ingestion into Real-time Customer Profile.

**Updated features**

| Feature | Description |
| --- | --- |
| Ad hoc schema labeling | Manage access to sensitive data by applying labels to data fields of ad hoc schemas that are automatically generated through Query Service CTAS queres. You can restrict the usage of certain fields, or datasets, of ad hoc schemas to control access to both sensitive personal data and personally identifiable information. By using the attribute-based access control capability you can you label ad hoc schema fields through the Platform UI. |
| `FLATTEN` setting | When connecting to a database through third-party BI tools, the `FLATTEN` setting flattens nested data structures into separate columns where the attribute name becomes the column name that holds the row values. This improves the usability of ad hoc schemas and reduces the required workload to retrieve, analyze, transform and report data in BI tools that do not support nested data structures. |

{style="table-layout:auto"}

For more information on Query Services, refer to the [Query Service overview](../../query-service/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

| Feature | Description |
| --- | --- |
| Beta release of [!DNL Mixpanel] source | You can now use the [!DNL Mixpanel] source to ingest analytics data from your [!DNL Mixpanel] account to Experience Platform. See the [[!DNL Mixpanel] source documentation](../../sources/connectors/analytics/mixpanel.md) for more information. |

{style="table-layout:auto"}

To learn more about sources, see the [sources overview](../../sources/home.md).
