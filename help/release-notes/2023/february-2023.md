---
title: Adobe Experience Platform Release Notes February 2023
description: The February 2023 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: February 22, 2023**

Updates to existing features in Adobe Experience Platform:

- [[!DNL Destinations]](#destinations)
- [Experience Data Model (XDM)](#xdm)
- [Query Service](#query-service)
- [Related accounts in Real-Time CDP B2B Edition](#related-accounts)
- [Sources](#sources)

## [!DNL Destinations] {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated features** {#destinations-new-updated-features}

| Feature | Description |
| ----------- | ----------- |
| [Consent Policy enhancement](/help/data-governance/enforcement/auto-enforcement.md#consent-policy-enhancement) for integrations with [file-based (batch) destinations](/help/destinations/destination-types.md#file-based) | <p> When profiles are no longer qualified for a consent policy, Experience Platform now proactively communicates their policy exit to file-based destinations. This follows the [release in February 2023](/help/release-notes/2023/january-2023.md#destinations-new-updated-functionality) of the same functionality for streaming destinations. </p> <p> <b>Note</b>: This functionality is available only to customers of **[!UICONTROL Privacy and Security Shield]**, and those of **[!UICONTROL Healthcare Shield]**. </p> |

{style="table-layout:auto"}

**New or updated documentation** {#destinations-new-updated-documentation}

| Documentation | Description |
| ----------- | ----------- |
| How destinations work documentation| <p>We published three new explainer articles about how destinations work, based on common questions from users:</p> <p><ul><li>[Configurable and common export settings in destinations](/help/destinations/how-destinations-work/destinations-configurations.md)</li><li>[Profile export behavior for different destination types](/help/destinations/how-destinations-work/profile-export-behavior.md)</li><li>[Identity handling in the destinations activation workflow](/help/destinations/how-destinations-work/identity-handling.md)</li></p> |

For more general information on destinations, refer to the [destinations overview](../../destinations/home.md).

## Experience Data Model (XDM) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**Updated features**
​
| Feature | Description |
| --- | --- |
| Field deprecation through the UI | You can now [deprecate fields from your schemas after data has been ingested](../../xdm/tutorials/field-deprecation-ui.md). XDM field deprecation allows you to remove fields from UI view while retaining them for use. You can reveal deprecated fields again if needed, and any segments, queries or downstream solutions that reference the fields will run as usual. |

{style="table-layout:auto"}

**New XDM components**

| Component type | Name | Description |
| --- | --- | --- |
| Class | [[!UICONTROL XDM Individual Prospect Profile]](https://github.com/adobe/xdm/pull/1669/files) | The XDM Individual Prospect Profile class brings in partner provided IDs. |

{style="table-layout:auto"}

**Updated XDM components**

| Component type | Name | Description |
| --- | --- | --- |
| Field group | [[!UICONTROL Frequency Capping Constraints]](https://github.com/adobe/xdm/pull/1641/files) | The [!UICONTROL Frequency Capping Constraints] field group has been updated to support repeat and custom events. |
| Data type | [[!UICONTROL Web referrer]](https://github.com/adobe/xdm/pull/1666/files) | Web referrer properties have been updated to include `xdm:linkName` and `xdm:linkRegion`. Respectively, these are the name and region of the HTML element that was selected on the previous page. |
| Field Group | [[!UICONTROL Adobe CJM ExperienceEvent - Message interaction details](https://github.com/adobe/xdm/pull/1665/files) | The Tracker URL filed group was added to the [!UICONTROL Adobe CJM ExperienceEvent]. This tracker provides the URL selected by the user.  |
| Field Group | [[!UICONTROL Adobe CJM ExperienceEvent - Message interaction detail](https://github.com/adobe/xdm/pull/1668/files) | Removed the empty `meta:enum` property from the URL Tracking Type field. |
| Data type  | [[!UICONTROL Media information]](https://github.com/adobe/xdm/pull/1667/files) | The regex pattern from the `videoSegment` property in Media information datatype was removed. |

{style="table-layout:auto"}

For more information on XDM in Platform, read the [XDM System overview](../../xdm/home.md).​

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
| Ingest custom activity data from [!DNL Marketo] | You can now bring custom activity data from your [!DNL Marketo] instance to Experience Platform. To ingest custom activity data, you must set up custom activities field groups in the B2B Activities schema and create a dataflow using the activities dataset. Once the dataflow is complete, the ingested dataset will contain both standard and custom activities from your [!DNL Marketo] instance. You can then use [Query Service](../../query-service/home.md) to access your custom activity records on Platform. For more information, read the guide on [creating a dataflow for custom activity data](../../sources/tutorials/ui/create/adobe-applications/marketo-custom-activities.md). |
| Exclude unclaimed accounts from [!DNL Marketo] | You can now configure whether you want to exclude or include unclaimed accounts from ingestion when creating a dataflow for companies data. For more information, read the guide on [creating a source connection and dataflow for [!DNL Marketo]](../../sources/tutorials/ui/create/adobe-applications/marketo.md). |

{style="table-layout:auto"}

To learn more about sources, read the [sources overview](../../sources/home.md).