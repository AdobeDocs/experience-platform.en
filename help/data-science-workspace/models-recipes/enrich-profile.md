---
keywords: Experience Platform;machine learning model;Data Science Workspace;Real-Time Customer Profile;popular topics;machine learning insights
solution: Experience Platform
title: Enrich Real-Time Customer Profile with Machine Learning Insights
type: Tutorial
description: This document provides a guide on how to enrich Real-Time Customer Profile with machine learning insights.
exl-id: 397023c9-383d-4a21-b58a-0f920631ac56
---
# Enrich [!DNL Real-Time Customer Profile] with machine learning insights

Adobe Experience Platform [!DNL Data Science Workspace] provides the tools and resources to create, evaluate, and utilize machine learning models to generate data predictions and insights. When machine learning insights are ingested into a [!DNL Profile]-enabled dataset, that same data is also ingested as [!DNL Profile] records which can then be segmented using [!DNL Adobe Experience Platform Segmentation Service].

This document provides links to tutorials that enable you to enrich [!DNL Real-Time Customer Profile] with your machine learning insights.

## Getting started

In order to complete the tutorials below, you are required to have a working understanding of ingesting [!DNL Profile] data and creating segments. Before beginning this tutorial, please review the documentation for the following services:

- [[!DNL Real-Time Customer Profile]](../../profile/home.md): Provides a complete, unified representation of each individual customer based on aggregated data from multiple sources.
- [[!DNL Identity Service]](../../identity-service/home.md): Enables [!DNL Real-Time Customer Profile] by bridging identities from disparate data sources being ingested into Platform.
- [[!DNL Experience Data Model (XDM)]](../../xdm/home.md): The standardized framework by which Platform organizes customer experience data.

In addition to the above-mentioned documents, it is highly recommended that you also review the following guides on schemas and the Schema Editor:

- [Basics of schema composition](../../xdm/schema/composition.md): Describes XDM schemas, building blocks, principles, and best practices for composing schemas to be used in [!DNL Experience Platform].
- [Schema Editor tutorial](../../xdm/tutorials/create-schema-ui.md): Provides detailed instructions for creating schemas using the Schema Editor within [!DNL Experience Platform].

## Create and configure an output schema and dataset {#create-an-output-schema-and-dataset}

The first step towards enriching [!DNL Real-Time Customer Profile] with scoring insights is knowing what real-world object (such as a person) your data defines. Having an understanding of your data enables you to describe and design a structure to add meaning, much like designing a relational database.

Composing a schema begins by assigning a class. Classes define the behavioral aspects of the data the schema will contain (record or time-series). To start making your own schemas, follow the steps in the tutorial on [creating a schema using the Schema Editor](../../xdm/tutorials/create-schema-ui.md). Note that before you can enable a dataset for [!DNL Profile], you need to configure the dataset's schema to have a primary identity field and then enable the schema for [!DNL Profile]. When data is ingested into a [!DNL Profile]-enabled dataset, that same data is also ingested as [!DNL Profile] records. 

If you prefer to compose a schema using the [!DNL Schema Registry] API instead, start by reading the [[!DNL Schema Registry] developer guide](../../xdm/api/getting-started.md) before attempting the tutorial on [creating a schema using the API](../../xdm/tutorials/create-schema-api.md).

Once your schema and dataset are prepared, you can generate and ingest scoring data to the dataset by performing scoring runs using an appropriate model.

## Create segments using the [!DNL Segment Builder] {#create-segments-using-the-segment-builder}

After you have generated and ingested your scoring data insights to your [!DNL Profile]-enabled dataset, you can create dynamic segments using the [!DNL Segment Builder]. 

The [!DNL Segment Builder] provides a rich workspace that allows you to interact with [!DNL Profile] data elements. The workspace provides intuitive controls for building and editing rules, such as drag-and-drop tiles used to represent data properties. Follow the [[!DNL Segment Builder] user guide](../../segmentation/ui/segment-builder.md) to learn about:

- Creating segment definitions using a combination of attributes, events, and existing audiences as building blocks.  
- Using the rule builder canvas and containers to control the order in which segment rules are executed.
- Viewing estimates of your prospective audience, allowing you to adjust your segment definitions as required.
- Enabling all segment definitions for scheduled segmentation.
- Enabling specified segment definitions for streaming segmentation.

## Next steps {#next-steps}

To learn more about segments and the [!DNL Segment Builder], read the [Segmentation Service overview](../../segmentation/home.md).

To learn more about [!DNL Real-Time Customer Profile], read the [Real-Time Customer Profile overview](../../profile/home.md)
