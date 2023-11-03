---
title: Adobe Experience Platform Release Notes
description: The October 2023 release notes for Adobe Experience Platform.
exl-id: e9cf5299-8350-4b40-8f56-05e598846875
---
# Adobe Experience Platform release notes 

**Release date: October 25, 2023**

Updates to existing features in Experience Platform:

- [Dashboards](#dashboards)
- [Data collection](#data-collection)
- [Destinations](#destinations)
- [Sandboxes](#sandboxes)
- [Segmentation Service](#segmentation)
- [Sources](#sources)

## Dashboards {#dashboards}

Adobe Experience Platform provides multiple dashboards through which you can view important insights about your organization's data, as captured during daily snapshots. 

**New or updated features**

| Feature | Description |
| --- | --- |
| Destinations usage metrics | New metering metrics have been added to the license usage dashboard. The **[!UICONTROL Audience Activation Size]** and **[!UICONTROL Data Export Size]** metrics provide a convenient way to track how much data you have exported out of Platform in relation to your license usage entitlements. See the [available metrics](../../dashboards/guides/license-usage.md#available-metrics) documentation for descriptions of these and and other licence usage metrics. |

{style="table-layout:auto"}

For more information on dashboards, including how to grant access permissions and create custom widgets, begin by reading the [dashboards overview](../../dashboards/home.md).

## Data collection {#data-collection}

Adobe Experience Platform provides a suite of technologies that allow you to collect client-side customer experience data and send it to the Adobe Experience Platform Edge Network where it can be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

**New or updated features**

| Type | Feature | Description |
| --- | --- | --- |
| Extensions | [!DNL Meta] Conversions API Enhancement | There are three enhancements to the [Meta Conversions API](/help/tags/extensions/server/meta/overview.md) extension: <ul><li>Integration with [[!DNL Meta Business Extension (MBE)]](/help/tags/extensions/server/meta/overview.md#integration-with-meta-business-extension-mbe): Creates a seamless login experience by allowing you to share your pixelID and access token for the Conversions API integration with Adobe.</li><li>Integration with [[!DNL Event Match Quality Score (EMQ)]](/help/tags/extensions/server/meta/overview.md#integration-with-event-quality-match-score-emq): Allows you to deliver advertising to people who are more likely to complete a desired action and link the action back to the ads delivered.</li><li>Integration with [[!DNL LiveRamp (Alpha)]](/help/tags/extensions/server/meta/overview.md#integration-with-liveramp-alpha): Allows you to pass LiveRamp's RampID in the CIP field, eliminating the need to share PII directly with partners or Meta. </li></ul>|
| Extensions | [!DNL LinkedIn] Conversions API | The [[!DNL LinkedIn] Conversions API](../../tags/extensions/server/linkedin/overview.md) extension allows you to evaluate the effectiveness of your LinkedIn marketing campaigns by forwarding Experience Platform event data to LinkedIn. |
| Secret | [!DNL LinkedIn] OAuth 2 Secret | The [[!DNL LinkedIn] OAuth 2 Secret](../../tags/ui/event-forwarding/secrets.md#linkedin-oauth-2) allows you to send server-server interactions to [!DNL LinkedIn] in event forwarding. |
| Event Forwarding | Update to Tags and Event Forwarding | To preserve [Tags](https://experienceleague.adobe.com/docs/experience-platform/tags/home.html) and [Event Forwarding](https://experienceleague.adobe.com/docs/experience-platform/tags/event-forwarding/overview.html) performance in Platform, only the most recent Development and Stage builds, both successful and unsuccessful, will be retained. All builds no longer in use will be removed. Additionally throttling and rate limiting has been implemented to ensure that a few heavy API usages do not degrade the API performance for others. |
| Extensions | Elements, Rules, and Extensions | [Elements, rules, and extensions](https://experienceleague.adobe.com/docs/experience-platform/tags/extensions/overview.html) are now sorted in the library output to ensure more consistency between multiple builds and deployments of the same library. |

For more information on data collection, please read the [data collections overview](../../tags/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations** {#new-updated-destinations}

| Destination | New or Updated |Description |
| ----------- |----------------|----------- |
| [[!DNL MoEngage]](/help/destinations/catalog/mobile-engagement/moengage.md) | New | Use the Moengage destination to connect and map your Adobe data (user attributes, segments and events) to MoEngage in real-time. Customers can then act on this data, delivering personalized, targeted experiences. |
| [[!DNL Qualtrics Automations]](/help/destinations/catalog/survey/qualtrics-automations.md) | New | Use the aggregation of multiple sources of operational data in Adobe Experience Platform as an input in Qualtrics Experience ID to better understand your customers and enable targeted outreach to close the gap when it comes to understanding intent, emotion and experience drivers. | 

{style="table-layout:auto"}

**New or updated functionality** {#destinations-new-updated-functionality}

| Functionality | Description |
| ----------- | ----------- |
| (Beta) Support for hashing functions in calculated fields | In addition to the functions specific for [exporting arrays](../../destinations/ui/export-arrays-calculated-fields.md) or elements from an array, you can now use additional [hashing functions](../../destinations/ui/export-arrays-calculated-fields.md#hashing-functions) to hash attributes in the exported files. The supported hashing functions are: `sha`, `sha256`, `sha512`, `hash`, `md5`, `crc32`. |
| (Limited GA) Activate account audiences to certain destinations | Real-Time CDP B2B customers can now activate [account audiences](../../segmentation/ui/account-audiences.md) to certain destinations. For more information about this feature, please read the [activate account audiences tutorial](/help/destinations/ui/activate-account-audiences.md). |

{style="table-layout:auto"}

**Fixes and enhancements** {#destinations-fixes-and-enhancements}

For more general information on destinations, refer to the [destinations overview](../../destinations/home.md).

## Sandboxes {#sandboxes}

Adobe Experience Platform is built to enrich digital experience applications on a global scale. Companies often run multiple digital experience applications in parallel and need to cater for the development, testing, and deployment of these applications while ensuring operational compliance. To address this need, Experience Platform provides sandboxes that partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

**New feature**

| Feature | Description |
| --- | --- |
| Sandbox tooling | The sandbox tooling feature allows you to improve configuration accuracy across sandboxes and seamlessly export and import sandbox configurations between sandboxes. You can use the sandbox tooling feature to select different objects and export them into a package. For more information, see the [sandbox tooling UI guide](../../sandboxes/ui/sandbox-tooling.md). |

For more information on sandboxes, please see the [sandboxes overview](../../sandboxes/home.md).

## Segmentation Service {#segmentation}

[!DNL Segmentation Service] allows you to segment data stored in [!DNL Experience Platform] that relates to individuals (such as customers, prospects, users, or organizations) into audiences. You can create audiences through segment definitions or other sources from your [!DNL Real-Time Customer Profile] data. These audiences are centrally configured and maintained on [!DNL Platform], and are readily accessible by any Adobe solution. 

**New feature**

| Feature | Description |
| ------- | ----------- |
| Account audiences (Limited GA) | In Real-Time Customer Data Platform B2B Edition, you can now use account segmentation to bring the full ease and sophistication of the marketing segmentation experience from people-based audiences to account-based audiences. For more information about this feature, please read the [account audiences overview](../../segmentation/ui/account-audiences.md). |

To learn more about Segmentation Service, please read the [Segmentation Service overview](../../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated features**

| Feature | Description |
| --- | --- |
| Updated authentication for Data Landing Zone | You can now see the designated expiry date of your Data Landing Zone when viewing your credentials. You must refresh your token before the expiry date in order to continue using it in your application. If you do not manually refresh your token before the stated expiry date, then it will automatically refresh and provide a new token the next time you retrieve your credentials. For more information, read the documentation on [using the Data Landing Zone](../../sources/tutorials/ui/create/cloud-storage/data-landing-zone.md). |

{style="table-layout:auto"}

To learn more about sources, please read the [sources overview](../../sources/home.md).
