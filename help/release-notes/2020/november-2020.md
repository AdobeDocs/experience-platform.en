---
title: Adobe Experience Platform Release Notes November 2020
description: The November 2020 release notes for Adobe Experience Platform.
doc-type: release notes
last-update: November 10, 2020
author: crhoades, ens25212
exl-id: 29179b56-e49a-44e8-8c64-a7c383c2eaaf
---
# Adobe Experience Platform release notes 

**Release date: November 11, 2020**

New features in Adobe Experience Platform:

- [Adobe Experience Platform Data Lake migration](#migration)
- [[!DNL Access control]](#access-control)
- [[!DNL Offer Decisioning]](#offer-decisioning)
- [[!DNL Sandboxes]](#sandboxes)

Updates to existing features:

- [[!DNL Data Prep]](#data-prep)
- [[!DNL Data Science Workspace]](#dsw)
- [[!DNL Destinations] Service](#destinations)
- [[!DNL Intelligent Services]](#intelligent-services)
- [[!DNL Real-Time Customer Profile]](#profile)
- [[!DNL Sources]](#sources)

## Adobe Experience Platform Data Lake migration {#migration}

While Adobe is migrating the Data Lake from Gen1 to Gen2, users will be able to read from the Data Lake, but all capabilities that write into the Data Lake will be impacted. Adobe will be contacting System Administrators to discuss the impact of the migration in detail and to confirm the migration dates and times for specific organizations. 

For more information, please read the [Data Lake migration guide](../../landing/adls2-gen2-migration.md).

## [!DNL Access control] {#access-control}

[!DNL Experience Platform] leverages [Adobe Admin Console](https://adminconsole.adobe.com) product profiles to link users with permissions and sandboxes. Permissions control access to a variety of Platform capabilities, including data modeling, profile management, and sandbox administration.

**Key features**

| Feature | Description |
| ------- | ----------- |
| Permissions | In the [!DNL Admin Console], the  tab within a [!DNL Platform] product profile allows you customize which [!DNL Platform] capabilities are available for the users attached to that profile. Available permission categories include: **[!UICONTROL Data Modeling]**, **[!UICONTROL Data Management]**, **[!UICONTROL Profile Management]**, **[!UICONTROL Identity Management]**, **[!UICONTROL Data Monitoring]**, **[!UICONTROL Sandbox Administration]**, **[!UICONTROL Destinations]**, **[!UICONTROL Data Ingestion]**, **[!UICONTROL Data Science Workspace]**, **[!UICONTROL Query Service]**, and **[!UICONTROL Data Governance]**.  |
| Access to sandboxes | The **[!UICONTROL Permissions]** tab within a [!DNL Platform] product profile can grant users access to specific sandboxes. See the section on [sandboxes](#sandboxes) below for more information. |

For more information, please see the [access control overview](../../access-control/home.md).

## [!DNL Offer Decisioning] {#offer-decisioning}

[!DNL Offer Decisioning] is an Application Service integrated with [!DNL Experience Platform]. It allows you to leverage [!DNL Platform] to deliver the best offer and experience to your customers across all touch points at the right time.

**Key features**

| Feature | Description |
| ------- | ----------- |
| Centralized offer library | The interface where you create and manage the different elements that compose your offers, and define their rules and constraints. |
| Offer Decision Engine | The Offer Decision Engine leverages [!DNL Platform] data and [!DNL Real-Time Customer Profiles], along with the Offer Library, in order to select the right time, customers and channels to which offers will be delivered. |

For more information, please see the [[!DNL Offer Decisioning]](https://experienceleague.adobe.com/docs/offer-decisioning/using/offer-decisioning-home.html?lang=en) documentation.

## [!DNL Sandboxes] {#sandboxes}

[!DNL Experience Platform] is built to enrich digital experience applications on a global scale. Companies often run multiple digital experience applications in parallel and need to cater for the development, testing, and deployment of these applications while ensuring operational compliance. In order to address this need, [!DNL Experience Platform] provides sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

**Key features**

| Feature | Description |
| ------- | ----------- |
| Production sandbox | [!DNL Experience Platform] provides a single production sandbox, which cannot be deleted or reset. The total number of available sandboxes, production and non-production, is determined by the license acquired. |
| Non-production sandboxes | Multiple non-production sandboxes can be created for a single [!DNL Platform] instance, allowing you to test features, run experiments, and make custom configurations without impacting your production sandbox. |
| Sandbox switcher | In the [!DNL Experience Platform] user interface, the sandbox switcher in the top-left corner of the screen allows you to switch between available sandboxes through a dropdown menu. The sandbox switcher also provides a search function that allows you to filter through available sandboxes. |
| `x-sandbox-name` header | All calls to [!DNL Experience Platform] APIs must now include the new `x-sandbox-name` header, whose value references the `name` attribute of the sandbox the operation will take place in. |

For more information, please see the [sandboxes overview](../../sandboxes/home.md).

## [!DNL Data Prep] {#data-prep}

[!DNL Data Prep] allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**New features**

| Feature | Description |
| ------- | ----------- |
| Iterative operations | [!DNL Data Prep] Mapper now supports performing iterative operations on a hierarchy. |
| Mapper function | [!DNL Data Prep] Mapper now has the ability to **not** copy an attribute from the source to the target XDM. |

For more information, please see the [[!DNL Data Prep] overview](../../data-prep/home.md).

## Data Science Workspace {#dsw}

Data Science Workspace uses machine learning and artificial intelligence to create insights from your data. Integrated into Adobe Experience Platform, Data Science Workspace helps you make predictions using your content and data assets across Adobe solutions. One of the ways Data Science Workspace accomplishes this is through the use of [!DNL JupyterLab]. [!DNL JupyterLab] is a web-based user interface for [[!DNL Project Jupyter]](https://jupyter.org/) and is tightly integrated into Adobe Experience Platform. It provides an interactive development environment for data scientists to work with [!DNL Jupyter] notebooks, code, and data.

**Key features**

| Feature | Description |
| ------- | ----------- |
| [!DNL JupyterLab] Recipe Builder template | Notebook to recipe requirements usage and versions updated. [!DNL Python] ML Runtime base image has been updated to use [!DNL Python] 3.6.7 and a [!DNL Conda] environment exclusively. |

For more information, please read the document on [creating a recipe using Jupyter Notebooks](../../data-science-workspace/jupyterlab/create-a-model.md).

## [!DNL Destinations] Service {#destinations}

In [Real-Time Customer Data Platform](../../rtcdp/overview.md), destinations are pre-built integrations with destination platforms that activate data to those partners in a seamless way.

**New destinations**

| Destination | Description |
| ----------- | ----------- |
| Braze | Braze is a comprehensive customer engagement platform that powers relevant and memorable experiences between customers and the brands they love. |
| Microsoft Bing | The Microsoft Bing destination helps you execute retargeting and audience targeted digital campaigns across Microsoft Display Advertising. |
| The Trade Desk | The Trade Desk is a self-service platform for ad buyers to execute retargeting and audience targeted digital campaigns across display, video, and mobile inventory sources. |

**New features**

| Feature | Description |
| ------- | ----------- |
| Destination details UX updates | Real-Time CDP's destination workflow now includes inline monitoring so you can see which batch activations were successful. This feature will enable users to resolve issues directly in the workflow for batch destinations via alerts and a monitoring dashboard to track errors in the processing pipeline.  |
| File encryption | For file-based destinations, users can now add encryption to their exported files. |
| File scheduling | For both email-based and cloud storage destinations, users can create a one-time export or create daily snapshots. |
| Mandatory fields | Users can mark fields as mandatory, ensuring that only fields that contain the mandatory field are exported. |

For more information, please see the [Destinations overview](../../destinations/home.md).

## Intelligent Services {#intelligent-services}

Intelligent Services empower marketing analysts and practitioners to leverage the power of artificial intelligence and machine learning in customer experience use cases. This allows for marketing analysts to set up predictions specific to a company's needs using business-level configurations without the need for data science expertise.

**Key features**

| Feature | Description |
| ------- | ----------- |
| Consumer Experience Events (CEE) dataset | Creating a CEE dataset now supports adding identity fields to the dataset with the Schema Editor. Attribution AI and Customer AI use the primary identity for combining events. |

For more information, please read the section on [adding identity fields to a dataset](../../intelligent-services/data-preparation.md#add-identity-fields-to-the-dataset) in the Intelligent Services data preparation guide.

### Attribution AI

Attribution AI, as part of Intelligent Services is a multi-channel, algorithmic attribution service that calculates the influence and incremental impact of customer interactions against specified outcomes.

**Key features**

| Feature | Description |
| ------- | ----------- |
| Data source link | The link to the original dataset source can be viewed and navigated to from the right rail of a selected service instance. |
| Edit instance name | You can now modify the name of an existing Attribution AI instance. |
| Clone instance | Copies the currently selected service instance setup and allows for modifications. |
| Modify instance configuration parameters | You can now modify the configuration of an existing Attribution AI instance if it hasn't started scoring yet. |
| One off scoring | You can now trigger ad-hoc model scoring in your Attribution AI instances. |
| Pass through columns | You can now configure additional columns that will be added to the raw output score files to add additional dimensions to BI tool views. |
| Instance activation and de-activation | You can now activate and de-activate the scheduled model training and scoring of your Attribution AI instances. |
| Entitlement tracking | You can find the total amount of Attribution insights consumed by your account in the create instance container. |
| Touchpoint breakdown by position | A new insights graph that provides an analysis of touchpoints by conversion path positions. |
| Top conversion paths | A new insights graph located in the Path Analysis tab. The graph contains a list of the top five conversion paths showing the sequence of marketing channel touchpoints that led to the most conversions. |
| Touchpoint effectiveness | Provides in-depth insights of the three most important variables that your model measures touchpoint effectiveness by. The variables are ratio of positive and negative paths touched, touchpoint efficiency, and touchpoint volume. |

For more information, please read the [Attribution AI overview](../../intelligent-services/attribution-ai/overview.md).

### Customer AI

Customer AI, as part of Intelligent Services provides marketers with the power to generate customer predictions at the individual level with explanations. With the help of influential factors, Customer AI can tell you what a customer is likely to do and why. Additionally, marketers can benefit from Customer AI predictions and insights to personalize customer experiences by serving the most appropriate offers and messaging.

**Key features**

| Feature | Description |
| ------- | ----------- |
| Data source link | The link to the original dataset source can be viewed and navigated to from the right rail of a selected service instance. |
| Edit instance name | You can modify the name of an existing Customer AI instance. |
| Modify instance configuration parameters | You can now modify the configuration of an existing Customer AI instance if it hasn't started a scoring yet. |
| Clone instance | Copies the currently selected service instance setup and allows for modifications. |
| Entitlement tracking | You can find the total amount of profiles scored by Customer AI for your account in the create instance container. |
| Prediction goal | The flexibility in creating a prediction goal has been increased with new options to predict whether something "will occur" or "will not occur". Additionally, the options to predict whether "all of" the events happen or "any of" the events happen when multiple events are used has been added. |
| Influential factor drilldown | Propensity top influential factor buckets now contain drill downs. Drill downs are a deeper level summary of values for each of the top influential factors within a propensity bucket. |

For more information, please read the [Customer AI overview](../../intelligent-services/customer-ai/overview.md).

## Real-Time Customer Profile {#profile}

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With Real-Time Customer Profile, you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data. [!DNL Profile] allows you to consolidate your disparate customer data into a unified view offering an actionable, timestamped account of every customer interaction.

**Key features**

| Feature | Description |
| ------- | ----------- |
| Updated merge policies workflow | Platform has upgraded the merge policy configuration to a new stepwise workflow. This workflow enables users to bring together data fragments from multiple Profile datasets and set priority for how data is merged across those datasets in order to create a comprehensive view of each individual. Users can merge selected XDM Individual Profile datasets by selecting the appropriate merge method (Timestamp ordered or Dataset precedence) and appending ExperienceEvent datasets to the Profile datasets.|
| Union schema view | In the Experience Platform UI, users can more easily find information regarding all schemas and datasets contributing to the union schema, as well as surface key attributes such as identity and relationship fields. These updates improve the ability to troubleshoot and validate that profiles are correctly configured, identities are correctly stitched, and data has been successfully ingested. |

For more information on Real-Time Customer Profile, including tutorials and best practices for working with [!DNL Profile] data, please read the [Real-Time Customer Profile overview](../../profile/home.md).

## [!DNL Sources] {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third party software, and your CRM system.

[!DNL Experience Platform] provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New sources**

| Feature | Description |
| ------- | ----------- |
| [!DNL Shopify] | You can now connect [!DNL Shopify] to [!DNL Experience Platform] using the [!DNL Flow Service] API or the UI. See the [Shopify connector overview](../../sources/connectors/ecommerce/shopify.md) for more information. |

**Key features**

| Feature | Description |
| ------- | ----------- |
| Update connection information | You can now update the names, descriptions, and credentials of existing batch connections using the [!DNL Flow Service] API and the UI. For more information, see the tutorial on [updating connections using the Flow Service API](../../sources/tutorials/api/update.md) and [editing account details using the UI](../../sources/tutorials/ui/monitor.md). |
| Delete connections | Batch connections that contain errors or have become unnecessary can now be deleted using the [!DNL Flow Service] API and the UI. For more information, see the tutorial on [deleting connections using the Flow Service API](../../sources/tutorials/api/delete.md) and [deleting accounts using the UI](../../sources/tutorials/ui/delete-accounts.md). |
| Hierarchical mapping | You can preview a hierarchical source file, such as JSON or Parquet, during the data ingestion process. See the tutorial on [configuring a dataflow for cloud storage connectors in the UI](../../sources/tutorials/ui/dataflow/batch/cloud-storage.md) for more information. |
| API support for mapping in streaming sources | You can now use APIs to perform mapping functions with streaming sources. |
| API support for custom delimiters for cloud storage sources | You can now collect non-CSV delimited files using cloud storage sources. You can use any single column delimiter such as a tab, comma, pipe, semicolon, or hash to collect flat files in any format. |
| Sandbox support for Adobe Audience Manager connector | The Audience Manager connector is now sandbox aware. Users can enable the connector to route Audience Manager datasets to the sandbox of their choosing (including non-production sandboxes). The configuration is limited to one sandbox per organization. |
| UX improvements | File-based ingestion is now accessible through the sources catalog. |

To learn more about sources, see the [sources overview](../../sources/home.md).
