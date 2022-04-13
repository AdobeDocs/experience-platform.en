---
keywords: Experience Platform;home;popular topics;data management;license entitlement;licensing;best practices
title: Data Management License Entitlement Best Practices
description: This document outlines best practices to follow and tools you can use to better manage your license entitlements with Adobe Experience Platform.
---
# Data Management license entitlement best practices 

Adobe Experience Platform allows you to centralize data across the enterprise and create real-time customer profiles to provide personalized experiences to your users. You can ingress data of varying types, volumes, and histories to Experience Platform using sources and then cater that data to use cases ranging from segmentation and personalization, to analytics and machine learning.

Platform sets licenses that establishes the amount of data you can bring in and the number of profiles that you can subsequently create. Given the capacity to bring in any source, volume, or history of data, you can easily exceed your licensing entitlements as your data volumes grow.

This document outlines best practices to follow and tools you can use to better manage your license entitlements with Adobe Experience Platform.

## Understanding the Platform data storage

Platform is primarily composed of two data repositories: the [!DNL Data Lake] and the Profile Store.

The **[!DNL Data Lake]** is where all Platform data is first ingested into and primarily serves the following purposes:

* Acts as the staging area for onboarding data into Platform;
* Acts as the long-term data storage for all Platform data;
* Enables use cases such as data analytics and data science.

The **Profile Store** is where customer profiles are created and primarily serves the following purposes:

* Acts as a data storage for profiles to support real-time experiences on customer profiles;
* Enables use cases such as segmentation, activation, and personalization.

>[!NOTE]
>
>Your access to the [!DNL Data Lake] can depend on the product SKU that you purchased. For more information on product SKUs, see the table on [license usage entitlements](#license-usage-entitlements).

## License usage entitlements {#license-usage-entitlements}

When you license Platform, you are provided with two license usage entitlements:

**[!DNL Addressable Audience]** - the total number of customer profiles that you can create in Platform, including both known and pseudonymous profiles.

**[!DNL Profile Richness]** - the average size of your profile data in Platform. You can increase your [!DNL Profile Richness] entitlement by purchasing a richness pack.

The [!DNL Profile Richness] metric varies depending on the licensing that you purchased. There are two calculations for [!DNL Profile Richness] available:

* The sum of all production data stored within Real-time Customer Data Platform (i.e., Profile Service and Identity Service) at any point in time, divided by the [!DNL Addressable Audience];
* The sum of all data stored within Platform (including, but not limited to the [!DNL Data Lake], Profile Service, and Identity Service) at any point in time and any data that you stream through (instead of storing within) Platform in the past 12 months, divided by the [!DNL Addressable Audience].

The availability of these metrics and the specific definition of each of these metrics varies depending on the licensing that your organization has purchased. For detailed definitions of each metric, please reference the appropriate Product Description documentation:

|License|Product Description|
|---|---|
|<ul><li>ADOBE EXPERIENCE PLATFORM:OD LITE</li><li>ADOBE EXPERIENCE PLATFORM:OD STANDARD</li><li>ADOBE EXPERIENCE PLATFORM:OD HEAVY</li></ul>|[Adobe Experience Platform](https://helpx.adobe.com/legal/product-descriptions/adobe-experience-platform.html)|
|<ul><li>ADOBE EXPERIENCE PLATFORM:OD</li></ul>|[Experience Platform, App Services and Intelligent Services](https://helpx.adobe.com/legal/product-descriptions/exp-platform-app-svcs.html)|
|<ul><li>RT CUSTOMER DATA PLATFORM:OD</li><li>RT CUSTOMER DATA PLATFORM:OD PRFL TO 10M</li><li>RT CUSTOMER DATA PLATFORM:OD PRFL TO 50M</li></ul>|[Real-time Customer Data Platform](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform.html)|
|<ul><li>AEP:OD ACTIVATION</li><li>AEP:OD ACTIVATION PRFL TO 10M</li><li>AEP:OD ACTIVATION PRFL UP TO 50M</li></ul>|[Adobe Experience Platform Activation](https://helpx.adobe.com/legal/product-descriptions/adobe-experience-platform0.html)|
|<ul><li>AEP:OD INTELLIGENCE</li></ul>|[Adobe Experience Platform Intelligence](https://helpx.adobe.com/legal/product-descriptions/adobe-experience-platform-intelligence---product-description.html)|

### Using the license usage dashboard on Platform UI

Platform UI provides a dashboard through which you can view a snapshot of your organization’s license-related data for Platform. The data in the dashboard is displayed exactly as it appears at the specific point in time when the snapshot was taken. Essentially, the snapshot is neither an approximation nor a sample of data, and the dashboard is not updating in real-time.

For more information, see the guide on [using the license usage dashboard on Platform UI](../dashboards/guides/license-usage.md).

## Understanding your data

In Platform, not all data is the same. Some data may be dense, but low in value, while others may be sparse, but high in value. Some data may lose value as soon as its generated, while others may be valuable for months, if not years.

There are three dimensions to consider in understanding the value of your data:

| Dimension | Description | Example |
| --- | --- | --- |
| Volume | Represents the amount and totality of data ingested. | Web clicks - high in volume and moderate in fidelity. Value may diminish quickly. |
| Timespan | Represents the length of time that ingested data continues to stay valuable. | Offline purchases - moderate in volume and fidelity, but may be valuable for long periods of time. |
| Fidelity | Represents how rich the data is with information. | Customer accounts - low in volume, but high in fidelity. Can be valuable beyond the lifetime of a customer. |

## Data Management tools

The following section outlines tools at your disposal to help better manage your license usage entitlements and maximize the capabilities of Platform.

### Ingestion filters

Ingestion filters allow you to bring in only the data that is needed for your use cases and filters out all events that are not required.

| Ingestion filter | Description |
| --- | --- |
| Adobe Audience Manager source filtering | When you create an Adobe Audience Manager source connection, you can pick and choose which segments and traits to bring into the [!DNL Data Lake] and Profile Service, rather than ingesting the Audience Manager data in its entirety. See the guide on [creating an Audience Manager source connection](../sources/tutorials/ui/create/adobe-applications/audience-manager.md) for more information. |
| Adobe Analytics Data Prep | You can use [!DNL Data Prep] functionalities when creating an Analytics source connection to filter out data that is not required for your use cases. Through [!DNL Data Prep], you can define which attributes/columns need to be published to Profile. You can also provide conditional statements to inform Platform whether data is expected to be published to Profile, or just to the [!DNL Data Lake]. See the guide on [creating an Analytics source connection](../sources/tutorials/ui/create/adobe-applications/analytics.md) for more information. |
| Support for enable/disable datasets for Profile | To ingest data into the Profile Service, you must enable a dataset for use in the Profile Store. Doing so, adds to your [!DNL Addressable Audience] and [!DNL Profile Richness] entitlements. Once a dataset is no longer required for customer profile use cases, you can disable that dataset's integration to Profile to ensure that your data remains license compliant. See the guide on [enabling and disabling datasets for Profile](../catalog/datasets/enable-for-profile.md) for more information. |
| Web SDK and Mobile SDK data exclusion | There are two types of data collected by Web and Mobile SDK: data that is collected automatically and data that is explicitly collected by your developer. To better manage license compliance, you can disable automatic data collection in the configuration of the SDK through the context setting. Custom data can also be removed or not set by your developer. See the guide on [configuring SDK fundamentals](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/configuring-the-sdk.html?lang=en#fundamentals) for more information. |
| Server-side forwarding data exclusion | If you are sending data to Platform using server-side forwarding, you can exclude what data is sent by either removing the mapping in a rule action to exclude it across all events, or by adding conditions to the rule so that data only fires for certain events. See the documentation on [events and conditions](https://experienceleague.adobe.com/docs/experience-platform/tags/ui/rules.html#events-and-conditions-(if)) for more information. |

### [!DNL Data Lake] TTL

The [!DNL Data Lake] TTL (time-to-live) capability allows you to specify an expiration for your behavioral data in the [!DNL Data Lake]. This allows you to remove data whose value has diminished after a certain time  for analytics and data science use cases.

#### Applying TTL in [!DNL Data Lake]

You can apply TTL in [!DNL Data Lake] by:

* Setting an expiry time for your data in the dataset;
* Specifying a field in the schema that would serve as the timestamp based on which data will be expired.

For example, if you determine that clickstream data isn't valuable for your use case six months after the event timestamp, then you can choose the event timestamp column to be your TTL field and set six months as the expiry time for that clickstream dataset.

>[!NOTE]
>
>The [!DNL Data Lake] TTL functionality is only available for SKUs that include [!DNL Data Lake] storage. For more information on product SKUs, see the table on  [license usage entitlements](#license-usage-entitlements).


### Profile Service TTL

The Profile Service TTL (time-to-live) capability allows you to apply TTL on data in the profile store. Doing so allows the system to automatically remove data that has diminished value over time.

The Profile Store is composed of the following components:

| Profile Store component | Description |
| --- | --- |
| Profile fragments | Each customer profile is composed of multiple profile fragments that have been merged to form a single view of that customer. For example, if a customer interacts with your brand across several channels, your organization will have multiple profile fragments related to that single customer appearing in multiple datasets. When these fragments are ingested into Platform, they are stitched together using the identity graph to create a single profile for that customer. Profile fragments consist of an identity namespace as the identifier, with associated record data and/or time-series data. |
| Record data (Attributes) | A profile is a representation of a subject, an organization or an individual, composed of many Attributes (also known as record data). For example, the profile of a product may include a SKU and description, whereas the profile of a person contains information like first name, last name, and email address. Record data is usually low/moderate in volume, but valuable for long periods of time. |
| Time-series data (Behavior) | **Time-series data** provides information about a user behavior. Represented by the standard schema class Experience Data Model (XDM) [!DNL ExperienceEvent], time-series data can describe events such as items being added to a cart, links being clicked, and videos viewed. The value of behavioral data diminishes quickly over time. |
| Identity namespace (identities) | As customer data comes together, it is merged into a single profile through the use of **identity namespaces**, and the ability to stich these identities together as more information becomes known about the user. See the [identity namespaces overview](../identity-service/namespaces.md) for more information. |
| Profile Store composition reports | There are a number of reports available to help you understand the composition of the Profile Store. These reports help you make informed decisions about how and where to set your Profile TTLs to better optimize your license usage:<ol><li>**Dataset Overlap Report API**: Exposes the datasets that contribute the most to your Addressable Audience. You can use this report to identify which [!DNL ExperienceEvent] datasets to set a TTL for.</li><li>**Identity Overlap Report API**: Exposes the identity namespaces that contribute the most to your Addressable Audience.</li><li>**Unknown Profiles Report API**: Exposes the impact of applying pseudonymous TTL for different time thresholds. You can use this report to identify which pseudonymous TTL threshold to apply.</li></ol> |

#### [!DNL ExperienceEvent] Dataset TTL

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

## Best practices for license usage compliancy {#best-practices}

The following is a list of some recommended best practices that you can follow to ensure better adherence to your license usage entitlement"

* Configure an [!DNL ExperienceEvent] Dataset TTL for high frequency data like web data. You can use this TTL during sizing calculations. TTL varies from customer to customer.
* Identify events that are required for segmentation and personalization and filter out those that are not required by configuring ingestion filters for any events entering the Profile Store. This allows you to send only important events required for your use cases. Depending on your use cases, filtering can occur even before data lands in Platform.
* Use the license usage dashboard to track and monitor customer usage trends. This allows you to get ahead of any potential overages that may incur.
* Use the profile composition reports to better understand your customers' profile store composition. This allows you to better validate assumptions taken while sizing the customer instance.

## Feature summary and availability {#feature-summary}

The following table outlines the list of currently available features at your disposal, to better manage your license usage entitlement.

| Feature | Description | Notes |
| --- | --- | --- |
| [Enable/Disable Datasets for Profile](../catalog/datasets/user-guide.md) | Enable or disable dataset ingestion into Profile Service |
| [!DNL ExperienceEvent] Dataset TTL | Apply a TTL expiry for behavioral datasets in the Profile Store | Please contact your Adobe Support Representative |
| [Adobe Analytics Data Prep filters](../sources/tutorials/ui/create/adobe-applications/analytics.md) | Apply [!DNL Kafka] filters to exclude unnecessary data from ingestion |
| [Adobe Audience Manager source connector filters](../sources/tutorials/ui/create/adobe-applications/audience-manager.md) | Apply Audience Manager source connection filters to exclude unnecessary data from ingestion |
| [Alloy SDK data filters](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/configuring-the-sdk.html?lang=en#fundamentals) | Apply Alloy filters to exclude unnecessary data from ingestion |
| [Server-side data filters](https://experienceleague.adobe.com/docs/launch/using/server-side-info/server-side-overview.html?lang=en-better-data-governance) | Apply [!DNL Kafka] filters to exclude unnecessary data from ingestion | See the documentation on [events and conditions](https://experienceleague.adobe.com/docs/experience-platform/tags/ui/rules.html#events-and-conditions-(if)) for additional information. |
| [License Usage Dashboard UI](../dashboards/guides/license-usage.md#license-usage-dashboard-data) | View a snapshot of your organization's license-related data for Experience Platform |
| [Dataset Overlap Report API](../profile/tutorials/dataset-overlap-report.md) | Outputs the datasets that contributes the most to your Addressable Audience |
| [Unknown Profiles Report API](../profile/api/preview-sample-status.md#generate-the-unknown-profiles-report) | Outputs the impact of apply pseudonymous TTL for different time thresholds |
| [Identity Overlap Report API](../profile/api/preview-sample-status.md#generate-the-identity-namespace-overlap-report) | Outputs the identity namespaces that contribute the most to your Addressable Audience |