---
title: Adobe Experience Platform Release Notes January 2024
description: The January 2024 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: January 30, 2023**

- [Data Prep]
- [Real-Time Customer Data Platform]
- [Sources]

## Data Prep {#data-prep}

Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**New or updated features**

| Feature | Description |
| --- | --- |
| New mapper function | Use the `to_map` function to create map data types. This function supports several different syntaxes. For more information, read the guide on [functions for hierarchies - objects](../../data-prep/functions.md#objects). |

{style="table-layout:auto"}

For more information on Data Prep, read the [Data Prep overview](../../data-prep/home.md).

## Real-Time Customer Data Platform {#rtcdp}

Built on Experience Platform, Real-Time Customer Data Platform ([!DNL Real-Time CDP]) helps companies bring together known and unknown data to activate customer profiles with intelligent decisioning throughout the customer journey. [!DNL Real-Time CDP] combines multiple enterprise data sources to create customer profiles in real time. Segments built from these profiles can then be sent to downstream destinations in order to provide one-to-one personalized customer experiences across all channels and devices.

**New or updated features**

| Feature | Description |
| --- | --- |
| Enhanced Real-Time CDP home page | The [Real-Time CDP home page](https://experience.adobe.com) has been enhanced with a refreshed look and improved performance.<ul><li>**Getting started widgets**: Use the getting started widgets to rapidly navigate to different areas of Real-Time CDP, including sources, schemas, audiences, and destinations.</li><li>**Leaderboard**: Refer to the leaderboard for information on total number of schemas, datasets, profiles, and audiences in your organization. You can also use the leaderboard to navigate to a feature's specific overview page and see its metrics. </li><li>**Recent items**: Refer to the recent items section for information on the five most recent changes to to datasets, sources, audiences, and destinations in your organization.</li></ul> For more information, read the [Real-Time CDP home page dashboard overview](../../rtcdp/home-page-dashboards.md). |

To learn moore about Real-Time CDP, read the [Real-Time CDP overview](../../rtcdp/overview.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated features**

| Feature | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} [!DNL Oracle NetSuite] sources | Use the [!DNL Oracle NetSuite] integrations in the sources catalog to bring data from your [[!DNL Oracle NetSuite Activities]](../../sources/tutorials/ui/create/marketing-automation/oracle-netsuite-activities.md) and [[!DNL Oracle NetSuite Entities]](../../sources/tutorials/ui/create/marketing-automation/oracle-netsuite-entities.md) accounts to Experience Platform. |
| [!BADGE Beta]{type=Informative} [!DNL Braze Currents] source | Use the [[!DNL Braze Currents]](../../sources/tutorials/ui/create/marketing-automation/braze.md) integration in the sources catalog to bring data from your [!DNL Braze] account to Experience Platform. |
| Support for key-pair authentication for [!DNL Snowflake] batch source | You can now use key-pair authentication when creating a new [!DNL Snowflake] account for batch data. For more information, read the guide on [creating a [!DNL Snowflake] account using the API](../../sources/tutorials/api/create/databases/snowflake.md) or the guide on [creating a [!DNL Snowflake] account using the UI](../../sources/tutorials/ui/create/databases/snowflake.md). |

{style="table-layout:auto"}

To learn more about sources, read the [sources overview](../../sources/home.md).
