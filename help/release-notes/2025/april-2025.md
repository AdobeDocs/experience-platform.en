---
title: Adobe Experience Platform Release Notes April 2025
description: The April 2025 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes

>[!TIP]
>
>

**Release date: April 29, 2025**

Updates to existing features and documentation in Adobe Experience Platform:

- [Experience League](#experience-league)
- [Identity Service](#identity)
- [Query Service]
- [Real-Time Customer Profile](#profile)
- [Sources](#sources)
- [Documentation updates](#documentation-updates)

## Experience League {#experience-league}

| Feature | Description |
| --- | --- |
| Personalized home page | You can now access and customize your very own personalized home page on [Experience League](https://experienceleague.adobe.com/en/home). Navigate to Experience League and sign in with your Adobe credentials to access and start customizing your own personalized home page. Use the following Experience League features to optimize your learning: <ul><li>**Bookmarks**:</li><li>**Customized learning**:</li><li>**Recommendations**:</li><li>**Recently viewed documents**:</li><li>**Learning resources**:</li><li>**What's new**:</li><li>**On-demand info about recent events**:</li></ul> |

{style="table-layout:auto"}

## Identity Service {#identity}

Use Adobe Experience Platform Identity Service to create a comprehensive view of your customers and their behaviors by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time.

**Updated features**

| Feature | Description |
| --- | --- |
| [!BADGE Limited Availability]{type=Informative} [!DNL Identity Graph Linking Rules] | Identity Graph Linking Rules is now in Limited Availability, and can be accessed by all customers in development sandboxes. <ul><li>**Activation requirements**: The feature will remain inactive until you configure and save your [!DNL Identity Settings]. Without this configuration, the system will continue to operate normally, with no changes in behavior.</li><li>**Important notes**: During this Limited Availability phase, Edge segmentation may produce unexpected segment membership results. However, streaming and batch segmentation will function as expected.</li><li>**Next steps**: For information on how to enable this feature in production sandboxes, please contact your Adobe account team.</li></ul> |

{style="table-layout:auto"}

For more information, read the [[!DNL Identity Graph Linking Rules] documentation](../../identity-service/identity-graph-linking-rules/overview.md).

## Real-Time Customer Profile {#profile}

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With Real-Time Customer Profile, you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data. Profile allows you to consolidate customer data into a unified view offering an actionable, timestamped account of every customer interaction.

| Feature | Description |
| ------- | ----------- |
| Pseudonymous profile data expiration | Manage your Pseudonymous profile data expiration in the Profile dashboard. To learn more about this feature and Pseudonymous Profiles, please read the [Pseudonymous Profile data expiration guide](../../profile/pseudonymous-profiles.md). |

{style="table-layout:auto"}

To learn more about Real-Time Customer Profile, read the [Profile overview](../../profile/home.md)

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

Use sources in Experience Platform to ingest data from an Adobe application or a third-party data source.

**New sources**

| Feature | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} [!DNL Algolia User Profiles] | The [[!DNL Algolia User Profiles]](../../sources/connectors/data-partners/algolia-user-profiles.md) source is now available. Use this source to bring your [!DNL Algolia] user profiles affinities data to Experience Platform. You can then use this data to improve user engagement, conversion rates, and overall customer experience by providing high-performance search solutions for websites, e-commerce platforms, and applications. For more information, read the guide on how to [ingest [!DNL Algolia User Profiles] data to Experience Platform](../../sources/tutorials/ui/create/data-partners/algolia-user-profiles.md). |
| [!BADGE Beta]{type=Informative} API support for [!DNL Azure Databricks] | The [!DNL Azure Databricks] source is now available in the API. Use the [!DNL Flow Service] API to connect your [!DNL Databricks] account and bring your [!DNL Databricks] data to Experience Platform. For more information read the documentation on [[!DNL Azure Databricks]](../../sources/connectors/databases/databricks.md). |

{style="table-layout:auto"}

**Updated features**

| Feature | Description |
| --- | --- |
| Updated XDM fields for ingesting Streaming Media data into Experience Platform. | The new XDM field group, `mediaReporting`, is now available for ingesting Streaming Media data via the Adobe Analytics source into Experience Platform. This field replaces the `media.mediaTimed` field.</br> <br>During a transitional period of three months, data ingestion on `media.mediaTimed` fields will continue. However, at the end of July 2025, the `media.mediaTimed` fields will be fully deprecated and no longer visible in the Experience Platform Schema UI, and data will only be sent using the `mediaReporting` fields.</br><br>If have you implemented the Analytics source to collect Streaming Media data into Platform before April 22, 2025, then you must migrate your existing configurations to send data using the new field group. This migration must be complete by the end of July 2025. Contact your Adobe Account Team for migration support. |
| New authentication types for [!DNL MariaDB] and [!DNL PostgreSQL] | You can now use basic authentication to authenticate your [!DNL MariaDB] and [!DNL PostgreSQL] sources on Experience Platform. Read the following documentation for more information: <ul><li>[[!DNL MariaDB]](../../sources/connectors/databases/mariadb.md)</li><li>[[!DNL PostgreSQL]](../../sources/connectors/databases/postgres.md)
| Row-level filtering support for [!DNL Amazon Redshift] | You can use row-level filtering capabilities for your [!DNL Amazon Redshift] data on Experience Platform. For more information, read the guide on [filtering row-level data for sources in the API](../../sources/tutorials/api/filter.md). |

