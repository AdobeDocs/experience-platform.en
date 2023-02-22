---
title: Adobe Experience Platform Release Notes February 2023
description: The February 2023 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: February 22, 2023**

Updates to existing features in Adobe Experience Platform:

- [Experience Data Model (XDM)](#xdm)
- [Query Service](#query-service)
- [Related accounts in Real-Time CDP B2B Edition](#related-accounts)
- [Sources](#sources)

## Experience Data Model (XDM) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**Updated features**
​
| Feature | Description |
| --- | --- |
| Field deprecation through the UI | You can now deprecate fields from your schemas after data has been ingested. XDM field deprecation allows you to remove fields from UI view while retaining them for use. You can reveal deprecated fields again if needed, and any segments, queries or downstream solutions that reference the fields will run as usual. |

{style="table-layout:auto"}
​
For more information on XDM in Platform, read the [XDM System overview](../../xdm/home.md).
​
<!-- Field deprecation: https://experienceleague.adobe.com/docs/experience-platform/xdm/tutorials/field-deprecation.html -->

## Query Service {#query-service}

Query Service allows you to use standard SQL to query data in Adobe Experience Platform [!DNL Data Lake]. You can join any datasets from data lake and capture the query results as a new dataset for use in reporting, Data Science Workspace, or for ingestion into Real-Time Customer Profile.

**Updated features**
​
| Feature | Description |
| --- | --- |
| Enable datasets for profile with SQL | Use LABELs in CTAS queries to make a dataset 'profile enabled', or use ALTER to update existing datasets to be enabled for profile. |
| Monitor scheduled queries | Use the Scheduled Queries tab to find important information about your query runs and subscribe to alerts. Monitor queries for schedule details, status, and error messages/codes should they fail.  |
| Toggle auto-complete feature  | Eliminate certain metadata commands and improve processing times by toggling the Query Editor auto-complete feature. This feature automatically suggests potential SQL keywords and table details for the query as you write it. |
| Dataset samples | Specify a sampling rate in your query and use dataset samples to create a uniform random sample, or create conditional samples based on specific criteria. |

{style="table-layout:auto"}
​
For more information on Query Services, refer to the [Query Service overview](../../query-service/home.md).
​
<!-- Links for QS feature docs after release day: -->
<!-- Enable datasets for profile with SQL link: https://experienceleague.adobe.com/docs/experience-platform/query/sql/syntax.html#create-table-as-select -->
<!-- Monitor scheduled queries link: https://experienceleague.adobe.com/docs/experience-platform/query/monitor-queries.html  -->
<!-- Toggle auto-complete feature link: https://experienceleague.adobe.com/docs/experience-platform/query/ui/user-guide.html#auto-complete -->
<!-- dataset samples: https://experienceleague.adobe.com/docs/experience-platform/query/essential-concepts/dataset-samples.html -->

## Related accounts in Real-Time CDP B2B Edition {#related-accounts}

>[!NOTE]
>
>The Related accounts feature is available for customers of the Real-Time CDP B2B Edition only.

Related accounts, [!DNL Real-Time CDP B2B] allows you to view a list of accounts that are similar to the account you are browsing. You can include the related accounts in your segment definitions to broaden your reach or apply wider criteria in your segments.

**Updated features**

| Feature | Description |
| --- | --- |
| Enable related accounts service| The new toggle function allows you to enable the related accounts service on your account. For more information, read the guide on [enabling the related accounts service](../../rtcdp/b2b-ai-ml-services/related-accounts.md#enable). |

{style="table-layout:auto"}

Read more about related accounts features in the following documentation pages:

- [Related accounts in Real-Time CDP B2B Edition overview](../../rtcdp/b2b-ai-ml-services/related-accounts.md)
- [Related accounts tab in the Account profile UI guide](../../rtcdp/accounts/account-profile-ui-guide.md#related-accounts-tab)
- [How to use related accounts in segment definitions](../../rtcdp/segmentation/b2b.md#related-accounts)

To learn more about Real-Time CDP B2B Edition, read the [Real-Time CDP B2B Edition overview](../../rtcdp/overview.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources and allows you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Updated features**

| Feature | Description |
| --- | --- |
| Designate subscription-level access with [!DNL Google PubSub] | You can now define access to a specific topic subscription when using the [!DNL Google PubSub] source by providing the subscription ID when authenticating. For more information, read the [!DNL Google PubSub] authentication tutorial [using the Flow Service API](../../sources/tutorials/api/create/cloud-storage/google-pubsub.md) or [Platform UI](../../sources/tutorials/ui/create/cloud-storage/google-pubsub.md). |

{style="table-layout:auto"}

To learn more about sources, read the [sources overview](../../sources/home.md).