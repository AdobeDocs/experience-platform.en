---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Activate inbound source data to populate customer profiles
topic: overview
---

# Activate inbound source data to populate customer profiles

Inbound data from your source connector can be used towards enriching and populating your Real-time Customer Profile data.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

-   [Experience Data Model (XDM) System](../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
    -   [Basics of schema composition](../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    -   [Schema Editor tutorial](../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
-   [Real-time Customer Profile](../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

Additionally, this tutorial requires that you have already created and configured a source connector.  A list of tutorials for creating different connectors in the UI can be found in the [source connectors overview](../../home.md).

## Populate your Real-time Customer Profile data

In order to enrich customer profiles, the target dataset's source schema must be compatible for use in Real-time Customer Profile. A compatible schema satisfies the following requirements:

- The schema has at least one attribute specified as an identity property.
- The schema has an identity property defined as the primary identity.
- A mapping within the dataflow exists wherein the primary identity is a target attribute.

Within the Sources workspace, click the **Browse** tab to list your base connections. In the displayed list, find the connection that contains the dataflow you wish to populate profiles with. Click the connection's name to access its details.

![](../../images/tutorials/dataflow/cloud-storage/batch/browse.png)

The connection's *Source activity* screen appears, displaying the datasets that the connection is ingesting source data into. Click the name of the dataset you wish to enable for Profile.

![](../../images/tutorials/dataflow/cloud-storage/batch/dataset-dataflow.png)

The *Dataset activity* screen appears. The *Properties* column on the right-hand side of the screen displays the details of the dataset, and includes a **Profile** switch and a link to the schema the dataset adheres to. Click the name of the schema to view its composition.

![](../../images/tutorials/dataflow/cloud-storage/batch/select-dataset-schema.png)

The *Schema Editor* appears, showing the structure of the schema in the center canvas. Within the canvas, select the field to be set as the primary identity. Under the *Field properties* tab that appears, select the **Identity** checkbox, then **Primary identity**. Finally, select an appropriate **Identity namespace**, then click **Apply**.

![](../../images/tutorials/dataflow/cloud-storage/batch/set-schema-identity.png)

Click the top-level object of the schema's structure and the *Schema properties* column appears. Enable the schema for Profile by toggling the **Profile** switch. Click **Save** to finalize your changes.

![](../../images/tutorials/dataflow/cloud-storage/batch/enable-profile.png)

Now that the schema is enabled for Profile, return to the *Dataset activity* screen and enable the dataset for Profile by clicking the **Profile** toggle within the *Properties* column.

![](../../images/tutorials/dataflow/cloud-storage/batch/enable-dataset-profile.png)

With both the schema and dataset enabled for Profile, data ingested into that dataset will now also populate customer profiles.

>[!NOTE] Existing data within a recently enabled dataset is not consumed by Profile

## Next steps

By following this tutorial, you have successfully activated inbound data for Profile population. For more information, see the [Real-time Customer Profile overview](../../../profile/home.md).