---
title: Adobe Experience Platform Release Notes
description: The June 2023 release notes for Adobe Experience Platform.
exl-id: f854f9e5-71be-4d56-a598-cfeb036716cb
---
# Adobe Experience Platform release notes 

**Release date: June 21, 2023**

Updates to existing features in Adobe Experience Platform:

- [Data collection](#data-collection)
- [Query Service](#query-service)
- [Sources](#sources)

## Data collection {#data-collection}

Adobe Experience Platform provides a suite of technologies that allow you to collect client-side customer experience data and send it to the Adobe Experience Platform Edge Network where it can be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

**New or updated features**

| Type | Feature | Description |
| --- | --- | --- |
| Extension | [!DNL Google Cloud Platform] event forwarding extension | The [[!DNL Google Cloud Platform]](../../tags/extensions/server/google-cloud-platform/overview.md) event forwarding extension allows you to forward event data to Google for activation via [!DNL Google Pub/Sub]. |
| Extension | [!DNL Cloud connector for Google Analytics 4 (ga4)] extension | The [[!DNL Cloud connector for Google Analytics 4 (ga4)]](https://partners.adobe.com/exchangeprogram/experiencecloud/exchange.details.109820.html) event forwarding extension allows you to track analytics via the new [!DNL Google Analytics 4 (ga4)] standard. |
| Secret | OAuth 2 JWT Secret | The [OAuth 2 JWT Secret](../../tags/ui/event-forwarding/secrets.md) allows you to use Adobe and [!DNL Google] Service tokens to support server-server interactions in event forwarding. |
| Tags and Event Forwarding | User attribution | User attribution delivers key activity data across the [Tags](../../tags/home.md) and [Event Forwarding](../../tags/ui/event-forwarding/overview.md) UI.<br><br>The data includes who made what changes and at what time. This data is visible across the Tags and Event Forwarding UI in the following screens:<br><ul><li> Properties overview</li><li> Installed extensions</li><li>Rules compare and review</li><li>Data Elements compare review</li><li>Extensions compare review</li><li>Library resource changes</li><li>Library last build and published</li></ul> |

{style="table-layout:auto"}

To learn more about data collection, read the [data collection overview](../../tags/home.md).

## Query Service {#query-service}

Query Service allows you to use standard SQL to query data in Adobe Experience Platform data lake. You can join any datasets from data lake and capture the query results as a new dataset for use in reporting, Data Science Workspace, or for ingestion into Real-Time Customer Profile.
​
**Updated features**
​
| Feature | Description |
| --- | --- |
| ​Inline templates | Query Service now supports the use of templates that reference other templates within your SQL. Reduce your workload, and avoid errors by leveraging inline templates in your queries. You can reuse statements or conditions, and reference nested templates for greater flexibility in your SQL. There is no limit in the size of queries that can be stored as templates, or the number of templates that can be referenced from your original query. For more information, read the [inline template guide](../../query-service/essential-concepts/inline-templates.md). |
| Scheduled query UI updates | Manage all your scheduled queries from one location in the UI with the [[!UICONTROL Scheduled Queries tab]](../../query-service/ui/monitor-queries.md#inline-actions). The [!UICONTROL Scheduled Queries] UI has been improved with the addition of inline query actions and the new query status column. The recent additions include the ability to enable, disable, and delete a schedule, or subscribe to alerts for upcoming query runs directly from the [!UICONTROL Scheduled Queries] view. <p>![Inline actions highlighted in the [!UICONTROL Scheduled Queries] view.](../../query-service/images/ui/monitor-queries/disable-inline.png "Inline actions highlighted in the [!UICONTROL Scheduled Queries] view."){width="100" zoomable="yes"}</p> |

{style="table-layout:auto"}
​
For more information on Query Service, refer to the [Query Service overview](../../query-service/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources and allows you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources ,such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Updated features**

| Feature | Description |
| --- | --- |
| Adobe Analytics classification source dataflows deletion support | You can now delete source dataflows that use Adobe Analytics classifications as its source. Under **[!UICONTROL Sources]** > **[!UICONTROL Dataflows]**, select the desired dataflow, then select delete. For more information, read the guide on [creating a source connection for Adobe Analytics classifications data](../../sources/tutorials/ui/create/adobe-applications/classifications.md). |
| Filtering support for [!DNL Microsoft Dynamics] using the API | Use logical and comparison operators to filter row-level data for the [[!DNL Microsoft Dynamics]](../../sources/connectors/crm/ms-dynamics.md) source. For more information, read the guide on [filtering data for a source using the API](../../sources/tutorials/api/filter.md). |
| [!BADGE Beta]{type=Informative} Support for [!DNL RainFocus] | You can now use the [!DNL RainFocus] sources integration to bring event management and analytics data from your [!DNL RainFocus] account to Experience Platform. For more information, read the [[!DNL RainFocus] source overview](../../sources/connectors/analytics/rainfocus.md). |
| Support for Adobe Commerce | You can now use the Adobe Commerce sources integration to bring data from your Adobe Commerce account to Experience Platform. For more information, read the [Adobe Commerce source overview](../../sources/connectors/adobe-applications/commerce.md). |
| Support for [!DNL Mixpanel] | You can now use the [!DNL Mixpanel] sources integration to bring analytics data from your [!DNL Mixpanel] account to Experience Platform using APIs or the user interface. For more information, read the [[!DNL Mixpanel] source overview](../../sources/connectors/analytics/mixpanel.md). |
| Support for [!DNL Zendesk] | You can now use the [!DNL Zendesk] sources integration to bring customer success data from your [!DNL Zendesk] account to Experience Platform using APIs or the user interface. For more information, read the [[!DNL Zendesk] source overview](../../sources/connectors/customer-success/zendesk.md).  |

{style="table-layout:auto"}

To learn more about sources, read the [sources overview](../../sources/home.md).
