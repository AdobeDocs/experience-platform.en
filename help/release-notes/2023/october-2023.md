---
title: Adobe Experience Platform Release Notes
description: The October 2023 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: October 25, 2023**

Updates to existing features in Experience Platform:

- [Data collection](#data-collection)
- [Sandboxes](#sandboxes)
- [Segmentation Service](#segmentation)
- [Sources](#sources)

## Data collection {#data-collection}

Adobe Experience Platform provides a suite of technologies that allow you to collect client-side customer experience data and send it to the Adobe Experience Platform Edge Network where it can be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

**New or updated features**

| Type | Feature | Description |
| --- | --- | --- |
| Extension | [!DNL Meta] Conversions API Enhancement | There are three enhancements to the [Meta Conversions API](/help/tags/extensions/server/meta/overview.md) extension: <ul><li>Integration with [[!DNL Meta Business Extension (MBE)]](/help/tags/extensions/server/meta/overview.md#integration-with-meta-business-extension-mbe): Creates a seamless login experience by allowing you to share your pixelID and access token for the Conversions API integration with Adobe.</li><li>Integration with [[!DNL Event Match Quality Score (EMQ)]](/help/tags/extensions/server/meta/overview.md#integration-with-event-quality-match-score-emq): Allows you to deliver advertising to people who are more likely to complete a desired action and link the action back to the ads delivered.</li><li>Integration with [[!DNL LiveRamp (Alpha)]](/help/tags/extensions/server/meta/overview.md#integration-with-liveramp-alpha): Allows you to pass LiveRamp's RampID in the CIP field, eliminating the need to share PII directly with partners or Meta. </li></ul>|

For more information on data collection, please read the [data collections overview](../../tags/home.md).

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
