---
title: Adobe Experience Platform Release Notes March 2023
description: The March 2023 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: March 29, 2023**

Updates to existing features in Adobe Experience Platform:

- [Dashboards](#dashboards)
- [Data collection](#data-collection)
- [Data Prep](#data-prep)
- [Destinations](#destinations)
- [Experience Data Model](#xdm)
- [Query Service](#query-service)
- [Real-Time Customer Data Platform B2B Edition](#b2b)
- [Segmentation Service](#segmentation)
- [Sources](#sources)

## Dashboards {#dashboards}

Adobe Experience Platform provides multiple dashboards through which you can view important insights about your organization's data, as captured during daily snapshots. 

**New or updated features** {#dashboards-new-updated-features}

| Feature | Description |
| --- | --- |
|User-defined dashboards| You can now **sample attribute values** before adding an attribute to a widget in the user-defined dashboards widget composer. A few sample values from that attribute column are available for individual attributes when creating a widget.<br>You can now **swap the X and Y axis** on your widget with the swap axis button. This saves time and provides a more ergonomic experience when adding attributes to your widgets. This saves need to find both attributes again from the attributes panel.<br> You can now **change the location and title of the legend** within your widgets. After a legend is present on a widget, you can relocate that legend anywhere around the chart and also re-name the legend title, as you can with axis labels and the widget title.|

{style="table-layout:auto"}

For more information on dashboards, including how to grant access permissions and create custom widgets, begin by reading the [dashboards overview](../../dashboards/home.md).

## Data collection {#data-collection}

Adobe Experience Platform provides a suite of technologies that allow you to collect client-side customer experience data and send it to the Adobe Experience Platform Edge Network where it can be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

**New or updated features**

| Feature | Description |
| --- | --- |
| New quick start workflow for Meta Conversions API (Beta) | Access new quick start workflows under "Getting Started" from the Data Collection home screen! The [quick start workflow for Meta Conversions API](https://experienceleague.adobe.com/docs/experience-platform/tags/extensions/server/meta/overview.html?lang=en#quick-start) enables customers to rapidly collect and forward event data, server-side to Meta for ad conversions in just a few simple steps. |
| New quick start workflow for Mobile SDK (Beta) | Access new quick start workflows under "Getting Started" from the Data Collection home screen! The [quick start workflow for Mobile SDK](https://developer.adobe.com/client-sdks/documentation/) enables you to rapidly implement the Mobile SDK and validate basic mobile events in just a few simple steps. |
| [!DNL Braze] event forwarding extension | The [[!DNL Braze Track Events API]](https://experienceleague.adobe.com/docs/experience-platform/tags/extensions/server/braze/overview.html) event forwarding extension allows you to leverage data captured in the Adobe Experience Platform Edge Network and send it to [!DNL Braze] in the form of server-side events using the [!DNL Braze] User Track APIs. |
| [!DNL Mixpanel] event forwarding extension | The [[!DNL Mixpanel Track Events API]](https://experienceleague.adobe.com/docs/experience-platform/tags/extensions/server/braze/overview.html) extension allows customers to leverage event forwarding to capture event information in the Adobe Experience Platform Edge Network and send it to Mixpanel using the Track Events API. |

{style="table-layout:auto"}

## Data Prep {#data-prep}

Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**Updated features**

| Feature | Description |
| --- | --- |
| New functions for encoding and decoding URL strings | <ul><li>The `get_url_encoded` function takes a URL as input and replaces or encodes special characters with ASCII characters.</li><li>The `get_url_decoded` function takes a URL as input and decodes ASCII characters into special characters.</li></ul> For more information, read the [Data Prep functions guide](../../data-prep/functions.md). For a comprehensive list of reserved characters and their corresponding encoded characters, read the guide on [special characters](../../data-prep/functions.md#special-characters).|

For more information on Data Prep, please read the [Data Prep overview](../../data-prep/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New destinations** {#new-destinations}

| Destination | Description |
| ----------- | ----------- |
| [[!DNL Adobe Commerce] connection GA](../../destinations/catalog/personalization/adobe-commerce.md) | The [!DNL Adobe Commerce] destination connector (now generally available) lets you select one or more Real-Time CDP audiences to activate to your [!DNL Adobe Commerce] account to deliver a dynamic personalized experience for your shoppers. |
| [[!DNL Snap Inc] connection GA](../../destinations/catalog/advertising/snap-inc.md) | The [!DNL Snap Inc] destination connector (now generally available) allows marketers to import user segments created in Experience Platform into [!DNL Snapchat Ads] and use them to target their ads. |
| [(API) Oracle Eloqua connection](../../destinations/catalog/email-marketing/oracle-eloqua-api.md) | Use the API-based connection to [!DNL Oracle Eloqua] to plan and execute campaigns while delivering a personalized customer experience for their prospects in [!DNL Oracle Eloqua]. |
| [(Beta) [!DNL Amazon Ads] connection](../../destinations/catalog/advertising/amazon-ads.md) | The [!DNL Amazon Ads] integration with Adobe Experience Platform provides turn-key integration to [!DNL Amazon Ads] products, including the [!DNL Amazon DSP (ADSP)]. Using the [!DNL Amazon Ads] destination in Adobe Experience Platform, users are able to define advertiser audiences for targeting and activation on the [!DNL Amazon DSP]. |
| [[!DNL Marketo Measure Ultimate] connection](../../destinations/catalog/adobe/marketo-measure-ultimate.md) | [!DNL Marketo Measure] (formerly Bizible) gives marketers insight into which marketing efforts are the most effective in driving revenue and maximizing return on investment for their company. The destination enables the business-to-business (B2B) data flows from Adobe Experience Platform to [!DNL Marketo Measure]. The card is only available to [!DNL Marketo Measure Ultimate] customers. |
| [TikTok connection](../../destinations/catalog/social/tiktok.md) | Build custom audiences on TikTok with your data for targeting with your ad campaigns. |
| [Zendesk connection](../../destinations/catalog/crm/zendesk.md) | Use this destination to create and update identities within a segment as contacts within [!DNL Zendesk]. |

{style="table-layout:auto"}

**New or updated functionality** {#destinations-new-updated-functionality}

| Functionality | Description |
| ----------- | ----------- |
| New access control permission for destinations: [[!DNL Activate Segments without Mapping]](../../access-control/home.md#permissions) | The new permission gives users the ability to activate segments to existing destinations, without displaying the [mapping step](../../destinations/ui/activate-batch-profile-destinations.md#mapping). Users can add and remove segments in activation workflows, but cannot add or remove mapped attributes or identities. |

{style="table-layout:auto"}

**Fixes and enhancements** {#destinations-fixes-and-enhancements}

We are releasing a bug fix for PGP/GPG encryption in file-based destinations for Real-time CDP. With this change, existing file-based destinations currently using encryption will generate a filename with a different extension than before. 

- Current extension when using encryption: `filename.csv`
- Future extension when using encryption: `filename.csv.gpg`

For more general information on destinations, refer to the [destinations overview](../../destinations/home.md).

## Experience Data Model (XDM) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**Updated features**

| Feature | Description |
| --- | --- |
| CSV to schema recommendation | You can now upload your local files to create machine learning generated schemas that eliminate the need to manually create a schema. From the [!UICONTROL Sources] workspace, upload a sample CSV file, and Adobe machine learning algorithms will suggest a schema for you based on the target fields. See the [documentation](../../ingestion/tutorials/map-csv/recommendations.md) for more information." |

{style="table-layout:auto"}

For more information on XDM in Platform, read the [XDM System overview](../../xdm/home.md).

## Query Service {#query-service}

Query Service allows you to use standard SQL to query data in Adobe Experience Platform [!DNL Data Lake]. You can join any datasets from data lake and capture the query results as a new dataset for use in reporting, Data Science Workspace, or for ingestion into Real-Time Customer Profile.

**Updated features**

| Feature | Description |
| --- | --- |
| Attribute based access control on the accelerated store | Use Attribute-based Access Control with Data Distiller to define access control on all datasets on the accelerated store. This controls access to the custom data models created by users and stored on an accelerated store to power custom dashboards. |

{style="table-layout:auto"}

For more information on Query Services, refer to the [Query Service overview](../../query-service/home.md).

## Real-Time Customer Data Platform B2B Edition {#b2b}

Built on Real-Time Customer Data Platform (Real-Time CDP), Real-Time CDP B2B Edition is purpose-built for marketers operating in a business-to-business service model. It brings together data from multiple sources and combines it into a single view of people and account profiles. This unified data allows marketers to precisely target specific audiences and engage those audiences across all available channels.

**Updated features**

| Feature | Description |
| --- | --- |
| Bugfix | To provide a more accurate representation of profiles in your system, the system no longer includes internal profiles in the total profile count or the addressable audience metric for the Real-Time Customer Data Platform B2B Edition. Starting today, you may see a one-time drop in the total profile count/addressable audience metric. None of your data has been erased, this is simply a change to the count. Please contact your Adobe executive with any concerns you may have|

{style="table-layout:auto"}

To learn more about Real-Time CDP B2B Edition, read the [Real-Time CDP B2B Edition overview](../../rtcdp/overview.md).

## Segmentation Service {#segmentation}

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Segments can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New or updated features**

| Feature | Description |
| --- | --- |
| Profile metrics | To give you a more accurate representation of profile metrics, membership breakdown and churn metrics are being combined and are now calculated over a 24-hour period. More information is available in the [Segmentation UI guide](../../segmentation/ui/overview.md#browse) |

{style="table-layout:auto"}

For more information on [!DNL Segmentation Service], please see the [Segmentation overview](../../segmentation/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources and allows you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Updated features**

| Feature | Description |
| --- | --- |
| Beta availability of [!DNL Chatlio] | The [!DNL Chatlio] source is now available in beta. Use the [!DNL Chatlio] source to stream your [!DNL Chatlio] events data to Experience Platform. For more information, read the [[!DNL Chatlio] overview](../../sources/connectors/marketing-automation/chatlio-webhook.md). | 
| Beta availability of [!DNL Customer.io] | The [!DNL Customer.io] source is now available in beta. Use the [!DNL Customer.io] source to stream your customer events data to Experience Platform. For more information, read the [[!DNL Customer.io] overview](../../sources/connectors/marketing-automation/customerio-webhook.md). |
| Beta availability of [!DNL Pendo] | The [!DNL Pendo] source is now available in beta. Use the [!DNL Pendo] source to stream your product analytics data to Experience Platform. For more information, read the [[!DNL Pendo] overview](../../sources/connectors/analytics/pendo-webhook.md). |
| Support for draft dataflows | You can now use the Flow Service API to set your dataflows to a draft state. Drafted dataflows can later be updated and published with new information. For more information, read the guide on [setting your sources dataflows as drafts](../../sources/tutorials/api/draft.md). |

{style="table-layout:auto"}

To learn more about sources, read the [sources overview](../../sources/home.md).
