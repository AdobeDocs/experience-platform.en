---
title: Adobe Experience Platform Release Notes April 2025
description: The April 2025 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes

>[!TIP]
>
>Refer to the following documentation for release notes of other Adobe Experience Platform applications:
>
>- [Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/whats-new/release-notes)
>- [Adobe Journey Optimizer B2B](https://experienceleague.adobe.com/en/docs/journey-optimizer-b2b/user/release-notes)
>- [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/releases/latest)
>- [Real-Time CDP Collaboration](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/latest)

**Release date: April 29, 2025**

Updates to existing features and documentation in Adobe Experience Platform:

- [Experience League](#experience-league)
- [Destinations](#destinations)
- [Experience Data Model](#xdm)
- [Identity Service](#identity)
- [Real-Time Customer Profile](#profile)
- [Sources](#sources)



## Experience League {#experience-league}

Experience League is a comprehensive learning platform designed to help you enhance your skills with Adobe products. It offers a variety of resources, including: courses, documentation, community pages, events, and access to certifications.

| Feature | Description |
| --- | --- |
| Personalized home page | Access and customize your personalized home page on [Experience League](https://experienceleague.adobe.com/en/home#). Sign in with your Adobe credentials to start optimizing your learning experience: <ul><li>**Bookmarks**: Use the [!UICONTROL Bookmarks] feature to save and collect your favorite resources in one place. You can save a variety of content, including playlists, articles, and tutorials.</li><li>**Customize your learning**: Enhance your learning experience by updating your Experience League profile with the roles, industries, products, and experience level that best match your needs.</li><li>**Recommendations**: View learning content recommended based on your recent activity.</li><li>**Recently viewed**: Use the [!UICONTROL Recently viewed] section to quickly navigate back to recently viewed content such as documentation and videos.</li><li>**Learning resources**: Use the [!UICONTROL All learning resources] panel to navigate to tutorials, documentation, community, events, and certifications.</li><li>**What's new**: View the [!UICONTROL What's new] section for a stream of the latest content on Experience League.</li><li>**Watch past events on-demand**: Watch previously recorded live streams on product spotlights, use cases, and tutorials with the [!UICONTROL Watch past events on-demand] section.</li></ul><br> ![Personalized home page on Experience League.](../2025/assets/april/personalized-home-page.png "Personalized home page on Experience League."){width="250" align="center" zoomable="yes"} |

{style="table-layout:auto"}

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations** {#new-updated-destinations}

| Destination | Description |
| --- | --- |
| [(V2) Pega CDH Realtime Audience connection](/help/destinations/catalog/personalization/pega-v2.md) | Use the [!DNL (V2) Pega Customer Decision Hub Realtime Audience] destination in Adobe Experience Platform to send profile attributes and audience membership data to Pega Customer Decision Hub for next-best-action decisioning, when you have multiple Pega Customer Decision Hub applications configured in your Pega account.|
| [Marketo Engage Person Sync](/help/destinations/catalog/adobe/marketo-engage-person-sync.md) | Adobe updated the [!DNL Marketo Engage Person Sync] destination to fix an issue that affected customers when multiple emails were present in the identity map.|

**New or updated functionality** {#destinations-new-updated-functionality}

| Feature | Description |
| --- | --- |
| **Weekly** and **Monthly** scheduling options for full file exports | You can now schedule full file exports for people and prospect audiences on a weekly or monthly basis when activating to cloud storage file-based destinations. [Read more](/help/destinations/ui/activate-batch-profile-destinations.md#export-full-files) about scheduling options. |

{style="table-layout:auto"}

**Fixes, enhancements, and other announcements** {#destinations-fixes-and-enhancements}

- **Enforcement of dataset export end dates delayed to September 1, 2025**  
As part of the [September 2024 release](/help/release-notes/2024/september-2024.md#destinations-new-updated-functionality), Adobe set a default end date of May 1, 2025, for any dataset export dataflows created *before that release*. Adobe is now extending this enforcement deadline to **September 1, 2025** to provide customers with additional time to update their schedules. Refer to the scheduling section of the [export datasets tutorial](../../destinations/ui/export-datasets.md#schedule-dataset-export) for information on how to edit the end date of a dataset export dataflow.

- **Improved handling of failed SFTP transfers for LiveRamp Onboarding**  
Adobe has implemented a fix for an issue affecting file exports to the [LiveRamp Onboarding](/help/destinations/catalog/advertising/liveramp-onboarding.md) destination via SFTP. Occasionally, file transfers failed due to transient server-side issues, and temporary files from failed attempts remained on the server. These undeletable files blocked subsequent retries, as Adobe did not have permission to overwrite them.  
With the fix, if a retry attempt cannot delete the temporary file, Adobe will generate a new file with an appended suffix ,`attempt2`, to ensure the retry completes successfully.

## Experience Data Model (XDM) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**Updated XDM components**

| Feature | Description |
| --- | --- |
| String fields receive a minimum value of one | New string fields are given a minimum length of one by default. Null values for non-required fields are still acceptable. For more information on best practices, read the guide on [best practices for data modeling](../../xdm/schema/best-practices.md#data-integrity-tips) |

{style="table-layout:auto"}

For more information on XDM in Experience Platform, see the [XDM System overview](../../xdm/home.md).

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

{style="table-layout:auto"}

For more information, read the [sources overview](../../sources/home.md).
