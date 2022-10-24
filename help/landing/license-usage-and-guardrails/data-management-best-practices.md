---
keywords: Experience Platform;home;popular topics;data management;license entitlement;licensing;best practices
title: Data Management License Entitlement Best Practices
description: Learn about best practices and tools you can use to better manage your license entitlements with Adobe Experience Platform.
exl-id: f23bea28-ebd2-4ed4-aeb1-f896d30d07c2
---
# Data management license entitlement best practices 

Adobe Experience Platform is an open system that transforms your data into robust customer profiles that update in real time and uses AI-driven insights to help you to deliver the right experiences across every channel. You can ingress data of varying types, volumes, and histories to Experience Platform using sources and then cater that data to use cases ranging from segmentation and personalization to analytics and machine learning.

Platform offers licenses that establish the number of profiles that you can create and the amount of data that you can bring in. Given the capacity to bring in any source, volume, or history of data, it is possible to exceed your licensing entitlements as your data volumes grow.

This document outlines best practices to follow and tools you can use to better manage your license entitlements with Adobe Experience Platform.

## Understanding Adobe Experience Platform data storage

Experience Platform is primarily composed of two data repositories: the [!DNL Data Lake] and the Profile Store.

The **[!DNL Data Lake]** primarily serves the following purposes:

* Acts as the staging area for onboarding data into Experience Platform;
* Acts as the long-term data storage for all Experience Platform data;
* Enables use cases such as data analytics and data science.

The **Profile Store** is where customer profiles are created and primarily serves the following purposes:

* Acts as a data storage for profiles that are used to support real-time experiences;
* Enables use cases such as segmentation, activation, and personalization.

>[!NOTE]
>
>Your access to the [!DNL Data Lake] can depend on the product SKU that you purchased. For more information on product SKUs, please speak with your Adobe representative.

## License usage {#license-usage}

When you license Experience Platform, you are provided with license usage entitlements that vary depending on SKU:

**[!DNL Addressable Audience]** - the total number of customer profiles that are contractually allowed in Experience Platform, including both known and pseudonymous profiles.

**[!DNL Profile Richness]** - the average size of your profile data in Experience Platform. You can increase your [!DNL Profile Richness] entitlement by purchasing a richness pack.

The [!DNL Profile Richness] metric varies depending on the licensing that you purchased. There are two calculations for [!DNL Profile Richness] available:

* The sum of all production data stored within Adobe Real-Time Customer Data Platform (i.e., Profile Service and Identity Service) at any point in time, divided by the [!DNL Addressable Audience];
* The sum of all data stored within Platform (including, but not limited to the [!DNL Data Lake], Profile Service, and Identity Service) at any point in time and any data that you stream through (instead of storing within) Platform in the past 12 months, divided by the [!DNL Addressable Audience].

The availability of these metrics and the specific definition of each of these metrics varies depending on the licensing that your organization has purchased.

## License usage dashboard

The Adobe Experience Platform UI provides a dashboard through which you can view a snapshot of your organization's license-related data for Platform. The data in the dashboard is displayed exactly as it appears at the specific point in time when the snapshot was taken. The snapshot is neither an approximation nor a sample of data, and the dashboard is not updating in real-time.

For more information, see the guide on [using the license usage dashboard on Platform UI](../../dashboards/guides/license-usage.md#license-usage-dashboard-data).

## Data management best practices

The following sections outline best practices to follow to better manage your data.

### Understanding your data

Not all data is the same in Adobe Experience Platform. Some data may be dense, but low in value, while others may be sparse, but high in value. Some data may lose value as soon as its generated, while others may be valuable for months, if not years.

There are three dimensions to consider in understanding the value of your data:

| Dimension | Description | Example |
| --- | --- | --- |
| Volume | Represents the amount and totality of data ingested. | Web clicks - high in volume and moderate in fidelity. Value may diminish quickly. |
| Timespan | Represents the length of time that ingested data continues to stay valuable. | Offline purchases - moderate in volume and fidelity, but may be valuable for long periods of time. |
| Fidelity | Represents how rich the data is with information. | Customer accounts - low in volume, but high in fidelity. Can be valuable beyond the lifetime of a customer. |

### Data Management tools {#data-management-tools}

There are two central scenarios to consider when ensuring that your data usage remains within your license entitlement limits:

### What data to bring into Platform?

Data can be ingested into one or multiple systems in Platform, namely the [!DNL Data Lake] and/or the Profile Store. This means that different data can exist in both systems for a variety of different use cases. For example, you may want to hold historical data in the [!DNL Data Lake], but not in the Profile Store. You can select which data to send to the Profile Store by enabling a dataset for Profile ingestion.

>[!NOTE]
>
>Your access to the [!DNL Data Lake] can depend on the product SKU that you purchased. For more information on product SKUs, please speak with your Adobe representative.

### What data to keep?

You can apply both data ingestion filters and expiration rules (also known as Time-To-Live "TTL") to remove data that has become obsolete for your use cases. Typically, behavioral data (such as Analytics data) consumes significantly more storage than record data (such as CRM data). For example, many Platform users have upwards of up to 90% of profiles being populated by behavioral data alone, in comparison to that of record data. Therefore, managing your behavioral data is critical in ensuring compliance within your license entitlements.

There are a number of tools that you can leverage to stay within your license usage entitlements:

* [Ingestion filters](#ingestion-filters)
* [Profile Service TTL](#profile-service)

### Ingestion filters {#ingestion-filters}

Ingestion filters allow you to bring in only the data that is needed for your use cases and filters out all events that are not required.

| Ingestion filter | Description |
| --- | --- |
| Adobe Audience Manager source filtering | When you create an Adobe Audience Manager source connection, you can pick and choose which segments and traits to bring into the [!DNL Data Lake] and Profile Service, rather than ingesting the Audience Manager data in its entirety. See the guide on [creating an Audience Manager source connection](../../sources/tutorials/ui/create/adobe-applications/audience-manager.md) for more information. |
| Adobe Analytics Data Prep | You can use [!DNL Data Prep] functionalities when creating an Analytics source connection to filter out data that is not required for your use cases. Through [!DNL Data Prep], you can define which attributes/columns need to be published to Profile. You can also provide conditional statements to inform Platform whether data is expected to be published to Profile, or just to the [!DNL Data Lake]. See the guide on [creating an Analytics source connection](../../sources/tutorials/ui/create/adobe-applications/analytics.md) for more information. |
| Support for enable/disable datasets for Profile | To ingest data into the Profile Service, you must enable a dataset for use in the Profile Store. Doing so, adds to your [!DNL Addressable Audience] and [!DNL Profile Richness] entitlements. Once a dataset is no longer required for customer profile use cases, you can disable that dataset's integration to Profile to ensure that your data remains license compliant. See the guide on [enabling and disabling datasets for Profile](../../catalog/datasets/enable-for-profile.md) for more information. |
| Web SDK and Mobile SDK data exclusion | There are two types of data collected by Web and Mobile SDK: data that is collected automatically and data that is explicitly collected by your developer. To better manage license compliance, you can disable automatic data collection in the configuration of the SDK through the context setting. Custom data can also be removed or not set by your developer. See the guide on [configuring SDK fundamentals](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/configuring-the-sdk.html?lang=en#fundamentals) for more information. |
| Server-side forwarding data exclusion | If you are sending data to Platform using server-side forwarding, you can exclude what data is sent by either removing the mapping in a rule action to exclude it across all events, or by adding conditions to the rule so that data only fires for certain events. See the documentation on [events and conditions](https://experienceleague.adobe.com/docs/experience-platform/tags/ui/rules.html#events-and-conditions-(if)) for more information. |

{style="table-layout:auto"}

### Profile Service {#profile-service}

The Profile Service TTL (time-to-live) capability allows you to apply TTL on data in the profile store. Doing so allows the system to automatically remove data that has diminished value over time.

The Profile Store is composed of the following components:

| Profile Store component | Description |
| --- | --- |
| Profile fragments | Each customer profile is composed of multiple **profile fragments** that have been merged to form a single view of that customer. For example, if a customer interacts with your brand across several channels, your organization will have multiple **profile fragments** related to that single customer appearing in multiple datasets. When these fragments are ingested into Platform, they are stitched together using the identity graph to create a single profile for that customer. **Profile fragments** consist of an identity namespace as the identifier, with associated record data and/or time-series data. |
| Record data (Attributes) | A profile is a representation of a subject, an organization or an individual, composed of many **Attributes** (also known as **record data**). For example, the profile of a product may include a SKU and description, whereas the profile of a person contains information like first name, last name, and email address. **Record data** is usually low/moderate in volume, but valuable for long periods of time. |
| Time-series data (Behavior) | **Time-series data** provides information about a user behavior. Represented by the standard schema class Experience Data Model (XDM) [!DNL ExperienceEvent], time-series data can describe events such as items being added to a cart, links being clicked, and videos viewed. The value of behavioral may diminish over time. |
| Identity namespace (identities) | As customer data comes together, it is merged into a single profile through the use of **identity namespaces**, and the ability to stich these identities together as more information becomes known about the user. See the [identity namespaces overview](../../identity-service/namespaces.md) for more information. |

{style="table-layout:auto"}

#### Profile Store Composition Reports

There are a number of reports available to help you understand the composition of the Profile Store. These reports help you make informed decisions about how and where to set your Profile TTLs to better optimize your license usage:

* **Dataset Overlap Report API**: Exposes the datasets that contribute the most to your Addressable Audience. You can use this report to identify which [!DNL ExperienceEvent] datasets to set a TTL for. See the tutorial on [generating the dataset overlap report](../../profile/tutorials/dataset-overlap-report.md) for more information.
* **Identity Overlap Report API**: Exposes the identity namespaces that contribute the most to your Addressable Audience. See the tutorial on [generating the identity overlap report](../../profile/api/preview-sample-status.md#generate-the-identity-namespace-overlap-report) for more information.
<!-- * **Unknown Profiles Report API**: Exposes the impact of applying pseudonymous TTL for different time thresholds. You can use this report to identify which pseudonymous TTL threshold to apply. See the tutorial on [generating the unknown profiles report](../../profile/api/preview-sample-status.md#generate-the-unknown-profiles-report) for more information.
-->

#### [!DNL ExperienceEvent] Dataset TTL {#dataset-ttl}

You can apply TTL to Profile-enabled datasets to remove behavioral data from the Profile Store that is no longer valuable for your use cases. Once TTL is applied to a Profile-enabled dataset, Platform automatically removes data that is no longer needed through a two-part process:

* All new data moving forward will have the TTL expiration value applied at time of ingestion;
* All existing data will have the TTL expiration value applied as part of a one-time backfill system job.

You can expect the TTL value on each event to be from the event timestamp. All events older than the TTL expiration value gets immediately dropped as system job runs. All other events get dropped off as they approach the TTL expiration value designated in the event timestamp.

See the following example to help your understanding of [!DNL ExperienceEvent] Dataset TTL.

If you apply a TTL value of 30 days on May 15, then:

* All new events will get a TTL of 30 days applied as they come in; 
* All existing events that have a timestamp older than April 15 gets immediately deleted by a system job.;
* Events that have a timestamp after April 15 will get an expiry of their event timestamp + TTL days. So, an event with an April 18 timestamp, will drop off three days after May 15.

>[!IMPORTANT]
>
>Once a TTL is applied, any data that is older than the selected TTL number of days will be **permanently** deleted and cannot be restored.

Before applying TTL, you must ensure to keep a lookback window of any segments within the TTL boundary. Otherwise, the segment results may become incorrect after TTL is applied. For example, if you applied a TTL of 30 days for Adobe Analytics data and a TTL of 365 days for In-Store Transactions data, the following segment will create incorrect results:

* Viewed Product Page in the last 60 days followed by an in-store purchase;
* Add to cart followed by no purchase in the last 60 days.

Conversely, the following will still create correct results:

* Viewed Product Page in the last 14 days followed by an in-store purchase;
* Viewed a specific help page online in the last 30 days;
* Purchased a product offline in the last 120 days;
* Added to cart followed by purchase in the last 14 days.

>[!TIP]
>
>For convenience, you can keep the same TTL for all datasets, so that you don't have to worry about the TTL impact across datasets in segmentation logic.

For more information on applying TTL to Profile data, see the documentation on [Profile Service TTL](../../profile/apply-ttl.md).

## Summary of best practices for license usage compliancy {#best-practices}

The following is a list of some recommended best practices that you can follow to ensure better adherence to your license usage entitlement:

* Use the [license usage dashboard](../../dashboards/guides/license-usage.md) to track and monitor customer usage trends. This allows you to get ahead of any potential overages that may incur.
* Configure [ingestion filters](#ingestion-filters) by identifying the events required for your segmentation and personalization use cases. This allows you to send only important events required for your use cases.
* Ensure that you have only [enabled datasets for profile](#ingestion-filters) that are required for your segmentation and personalization use cases. 
* Configure an [[!DNL ExperienceEvent] Dataset TTL](#dataset-ttl) for high frequency data like web data.
* Periodically check the [Profile Composition Reports](#profile-store-composition-reports) to understand your Profile Store composition. This allows you to understand the data sources contributing most to your license usage consumption.

## Feature summary and availability {#feature-summary}

The best practices and and tools outlined in this document will help you better manage your license entitlement usage within Adobe Experience Platform. This document will be updated as additional features are released to help provide visibility and control to all Experience Platform customers.

The following table outlines the list of currently available features at your disposal, to better manage your license usage entitlement.

| Feature | Description |
| --- | --- |
| [Enable/Disable Datasets for Profile](../../catalog/datasets/user-guide.md) | Enable or disable dataset ingestion into Profile Service |
| [!DNL ExperienceEvent] Dataset TTL | Apply a TTL expiry for behavioral datasets in the Profile Store. Please contact your Adobe Support Representative. |
| [Adobe Analytics Data Prep filters](../../sources/tutorials/ui/create/adobe-applications/analytics.md) | Apply [!DNL Kafka] filters to exclude unnecessary data from ingestion |
| [Adobe Audience Manager source connector filters](../../sources/tutorials/ui/create/adobe-applications/audience-manager.md) | Apply Audience Manager source connection filters to exclude unnecessary data from ingestion |
| [Alloy SDK data filters](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/configuring-the-sdk.html?lang=en#fundamentals) | Apply Alloy filters to exclude unnecessary data from ingestion |
| [Event forwarding data filters](../../tags/ui/event-forwarding/overview.md) | Apply server-side [!DNL Kafka] filters to exclude unnecessary data from ingestion.  See the documentation on [tag rules](../../tags/ui/managing-resources/rules.md) for additional information. |
| [License Usage Dashboard UI](../../dashboards/guides/license-usage.md#license-usage-dashboard-data) | View a snapshot of your organization's license-related data for Experience Platform |
| [Dataset Overlap Report API](../../profile/tutorials/dataset-overlap-report.md) | Outputs the datasets that contributes the most to your Addressable Audience |
| [Identity Overlap Report API](../../profile/api/preview-sample-status.md#generate-the-identity-namespace-overlap-report) | Outputs the identity namespaces that contribute the most to your Addressable Audience |

{style="table-layout:auto"}
