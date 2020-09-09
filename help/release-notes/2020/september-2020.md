---
title: Adobe Experience Platform Release Notes
description: Experience Platform release notes September 9, 2020
doc-type: release notes
last-update: September 8, 2020
author: crhoades, ens28527
---

# Adobe Experience Platform release notes 

**Release date: September 9, 2020**

Updates to existing features in Adobe Experience Platform:

* [[!DNL Data Governance]](#governance)
* [[!DNL Destinations]](#destinations)
* [[!DNL Sources]](#sources)

## [!DNL Data Governance] {#governance}

Adobe Experience Platform Data Governance is a series of strategies and technologies used to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data usage. It plays a key role within [!DNL Experience Platform] at various levels, including cataloging, data lineage, data usage labeling, data access policies, and access control on data for marketing actions.

**New features**

| Feature | Description |
| --- | --- |
| Dataset labeling UI enhancements | Several new sorting and filtering controls have been added to the dataset labeling UI in order to make working with large schemas easier: <ul><li>Sort fields by alphabetic order based on the full schema path.</li><li>Perform partial searches on field path names.</li><li>Filter fields with no labels, a selected label, or a label category.</li></ul> |

See the [Data Governance overview](../../data-governance/home.md) for more information on the service.

## Destinations {#destinations}

In [Adobe Real-time Customer Data Platform](../../rtcdp/overview.md), destinations are pre-built integrations with destination platforms that activate data to those partners in a seamless way.

**New features**

| Feature | Description |
| ------- | ----------- |
| UX improvements | Users can access inline table actions for easier access to primary actions such as such as adding data, editing scheduling, and adding segments. See the [destinations workspace](../../rtcdp/destinations/destinations-workspace.md) document for more information. |

To learn more, visit the [destinations overview](../../rtcdp/destinations/destinations-overview.md)

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third party software, and your CRM system.

[!DNL Experience Platform] provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New features**

| Feature | Description |
| ------- | ----------- |
| Auto mapping | [!DNL Platform] provides intelligent recommendations for auto mapping during the data ingestion workflow, based on a user-selected target schema or dataset. You can manually adjust flexible auto-mapping rules to suit your use cases. |
| UX improvements | Users can access inline table actions for easier access to primary actions such as adding data, editing scheduling, and adding segments. See the [monitoring dataflows](../../sources/tutorials/ui/monitor.md) document for more information. |

To learn more about sources, see the [sources overview](../../sources/home.md).