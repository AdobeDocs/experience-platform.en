---
title: Adobe Experience Platform Release Notes February 2026
description: The February 2026 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes

>[!TIP]
>
>Refer to the following documentation for release notes of other Adobe Experience Platform applications:
>
>- [Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/whats-new/release-notes)
>- [Adobe Journey Optimizer B2B](https://experienceleague.adobe.com/en/docs/journey-optimizer-b2b/user/release-notes)
>- [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/releases/latest)
>- [Federated Audience Composition](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/release-notes)
>- [Real-Time CDP Collaboration](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/latest)

**Release date: February 17, 2026**

New features and updates to existing features in Adobe Experience Platform:

- [Alerts](#alerts)
- [Destinations](#destinations)
- [Sources](#sources)
  
## Alerts {#alerts}

Experience Platform allows you to subscribe to event-based alerts for various Experience Platform activities. You can subscribe to different alert rules through the [!UICONTROL Alerts] tab in the Experience Platform user interface, and can choose to receive alert messages within the UI itself or through email notifications.

**New or updated features**

| Feature | Description |
| --- | --- |
| [!DNL Slack] integration for customer-facing alerts | You can now deliver customer-facing alerts to [!DNL Slack]. Follow the step-by-step tutorial to set up the [!DNL Slack] integration and receive alert notifications directly in your [!DNL Slack] workspace. |

{style="table-layout:auto"}

For more information, read the [[!DNL Observability Insights] overview](../../observability/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations**

| Destination | Description |
| --- | --- |
| [[!DNL Snowflake] Batch](../../destinations/catalog/warehouses/snowflake-batch.md) generally available | The [!DNL Snowflake] Batch destination is now generally available. Real-Time CDP customers worldwide can now use this connector to activate data into their Snowflake accounts without needing to physically copy the data. All limitations from the limited release have been lifted (availability for US-only customers, support for audiences belonging to the default merge policy only). |

{style="table-layout:auto"}

**Fixes and improvements**

| Fix | Description |
| --- | --- |
| Activation Failed Rate Exceeded alert | The Activation Failed Rate Exceeded destination alert now correctly uses the threshold you configure when evaluating and sending the alert. Previously, the alert triggered at a 1% failure rate regardless of the percentage you configured. See [standard alert rules](../../observability/alerts/rules.md#destinations) for more details on this alert. |
| Google Customer Match excluded identities reporting | Fixed a bug in the skipped records counting logic that caused inflated excluded profiles counts to be displayed for Google Customer Match destinations. Activation and export behavior were not affected; only the reported numbers were incorrect. |

{style="table-layout:auto"}

For more information, read the [Destinations overview](../../destinations/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated sources**

| Source | Description |
| --- | --- |
| Unity Catalog support in [!DNL Databricks] source connector | The [!DNL Databricks] source connector now supports Unity Catalog. Read the updated [[!DNL Databricks]](../../sources/connectors/databases/databricks.md) documentation to learn how to use Unity Catalog when you configure your source connection. |

{style="table-layout:auto"}

For more information, read the [sources overview](../../sources/home.md).

<!-- - [Data collection](#data-collection)
- [Experience Data Model (XDM)](#xdm)
- [Query Service](#query-service) -->

<!-- ## Data collection {#data-collection}

Adobe Experience Platform Data Collection provides a set of technologies that allow you to collect client-side customer experience data and send it to the Adobe Experience Platform Edge Network and other destinations.

**New or updated features**

| Feature | Description |
| --- | --- |
| Adobe Platform Tags Extension Management | Use the new Extension Management capability to upload, package, and release your organization's extensions to development, private, and public distribution. Find shared private extensions alongside your owned extensions in the top-level company view. This feature supports web, edge, and mobile extensions. |

{style="table-layout:auto"}

For more information, read the [Data Collection documentation](../../collection/home.md).-->

<!--## Experience Data Model (XDM) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| Schema Inventory Organization and Search | The schema browse page now includes enhanced search and filtering, inline actions, and support for user-defined tags and folders. These updates make it easier to find, organize, and manage schemas across sandboxes while reducing manual navigation and maintenance effort. |
| Restricted Editing for Schemas with Datasets | Editing operations that result in breaking changes are now restricted once a dataset exists for a schema. When a dataset is associated, you can no longer rename or delete fields, change field data types or formats, modify identity descriptors, manage related fields to remove existing fields, or change the assigned class; additive changes and field deprecation remain supported. |

For more information, read the [[!DNL XDM] overview](../../xdm/home.md).

## Query Service {#query-service}

Query Service allows you to use standard SQL to query data in Adobe Experience Platform [!DNL Data Lake]. You can join any datasets from the [!DNL Data Lake] and capture the query results as a new dataset for use in reporting, Data Science Workspace, or for ingestion into Real-Time Customer Profile.

**New or updated features**

| Feature | Description |
| --- | --- |
| Data Distiller annual compute reset date alignment (Limited Release) | Data Distiller annual compute hours now reset on the anniversary date of your Data Distiller contract, based on when the license was purchased or renewed. This aligns License Usage reporting with your contract terms and may result in a one-time adjustment to current usage values. |
| Data Distiller session management (Limited Release) | As an authorized admin, you can view and manage active Query Service and Data Distiller sessions within your organization and sandbox through the UI. Use session management to identify idle sessions and terminate them to free up capacity. Built-in safeguards prevent you from terminating sessions with active queries. The feature logs all eviction actions for auditing and notifies affected users. You need the **Manage Query Sessions** permission to access this feature. |

{style="table-layout:auto"}

For more information, read the [Query Service overview](../../query-service/home.md).-->