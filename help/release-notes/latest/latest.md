---
title: Adobe Experience Platform Release Notes
description: Experience Platform release notes for May 26, 2021.
doc-type: release notes
last-update: May 26, 2021
author: ens72741
exl-id: 8f2c9bf8-1487-46e4-993b-bd9b63774cab
---

# Adobe Experience Platform release notes 

**Release date: May 26, 2021**

New features in Adobe Experience Platform:

- [Dashboards](#dashboards)

Updates to existing features in Adobe Experience Platform:

- [[!DNL Data Prep]](#data-prep)
- [[!DNL Destinations]](#destinations)
- [[!DNL Experience Data Model (XDM)]](#xdm)
- [Real-time Customer Profile](#profile)
- [Sources](#sources)

## Dashboards {#dashboards}

Adobe Experience Platform provides multiple dashboards through which you can view important insights about your organization’s data, as captured during daily snapshots. 

| Feature | Description |
| --- | --- |
|Profile insights| The profile dashboard provides a daily overview of Real-time Customer Profile metrics for each organizational merge policy in Experience Platform. These profile insights are available to all users with the ability to access and view Profile data within Platform.|
|Audience insights| The segment dashboard provides audience-related insights to all users with access to view segments within Platform. The dashboard provides a daily overview of the audience metrics for audiences created with the Segment Builder UI or imported from Adobe Audience Manager.|
|Activation insights| The destinations dashboard is available to all users with the ability to access and view destinations. The dashboard provides a daily overview of the activation metrics for activations across all destinations.|
|User-specific insights| The look and feel of dashboards can be personalized by each user, including the ability to modify the layout of the dashboard by adding, removing, resizing, and rearranging widgets.|
|Widget creation & management| All standard and custom widgets are accessible to marketers in a centralized repository for democratizing insights creation and sharing:<br/><ul><li>The standard tab contains Adobe-provided widgets accessible within the dashboard context. </li><li>The custom tab contains custom widgets created by the organization including an option to hide widgets from view.</li><li>Widget creation workflow within Profiles and Audience insights enables editing, selection, preview, and publishing of custom widgets.</li></ul>|
|Custom insights| Access permissions enable data engineers and marketing specialists to customize profile attributes that are available for widget creation.|

For more information on dashboards, including how to grant access permissions and create custom widgets, begin by reading the [dashboards overview](../../dashboards/home.md).

## [!DNL Data Prep] {#data-prep}

[!DNL Data Prep] allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

| Feature | Description |
| ------- | ----------- |
| Lenient error warnings | Data Prep Mapper error messages will now be more lenient, by providing warnings instead of errors along with partially transformed rows. |
| New functions | Added functions to get keys, append elements to an existing array, append elements of multiple arrays to an existing array, use objects to build arrays, and use the name of the JSON object as a string literal. | 

For more information, please see the [[!DNL Data Prep] overview](../../data-prep/home.md).

## [!DNL Destinations] {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

| Feature | Description |
| ------- | ----------- |
| Improved monitoring (beta) | Increased the capabilities of monitoring for destinations, including information for both batch and streaming destinations |
|[Faster incremental file export (beta)](../../destinations/ui/activate-destinations.md#export-incremental-files)| Added the capability to export incremental files to destinations every 3, 6, 8, or 12 hours. <br> <br>This capability is currently in beta and is only available to a select number of customers. Non-beta customers can export incremental files once a day.|
|[Deduplication key support (beta)](../../destinations/ui/activate-destinations.md#deduplication-keys)| Added the capability to set identity namespaces or profile attributes as deduplication keys. Deduplication keys eliminate the possibility of having multiple records of the same profile in one export file. <br> <br>This capability is currently in beta, and is only available to a select number of customers.|

For more general information on destinations, refer to the [destinations overview](../../destinations/home.md).

## [!DNL Experience Data Model (XDM)] {#xdm}

Experience Data Model (XDM) is an open-source specification that is designed to improve the power of digital experiences. It provides common structures and definitions for any application to communicate with services on Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

| Feature | Description |
| --- | --- |
| Schema field groups | The term "mixin" has been updated to "field group". This change is reflected across the Adobe Experience Platform UI. In addition, the Schema Registry API has a new [field groups endpoint](../../xdm/api/field-groups.md), while the mixins endpoint has been deprecated as a legacy endpoint. See the [XDM documentation](../../xdm/home.md) for more information. |

## Real-time Customer Profile {#profile}

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With Real-time Customer Profile, you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data. [!DNL Profile] allows you to consolidate customer data into a unified view offering an actionable, timestamped account of every customer interaction.

| Feature | Description |
| ------- | ----------- |
| Merge policy workflow updates| When creating and updating merge policies in the UI, users can now preview 20 sample profiles based on the union schema. This allows users to preview what customer profiles will look like before saving merge policy configurations. For more information, see the [merge policies UI guide](../../profile/merge-policies/ui-guide.md).|
|Dataset overlap report| The dataset overlap report provides visibility into the composition of the Profile store by exposing the datasets that contribute most to addressable audience. In addition to providing insights into Profile data, this report helps users take actions to optimize license usage, such as setting a limit to the lifespan of certain data. To learn more, follow the tutorial on [generating the dataset overlap report](../../profile/tutorials/dataset-overlap-report.md).|

For more information on Real-time Customer Profile, including tutorials and best practices for working with [!DNL Profile] data, please begin by reading the [Real-time Customer Profile overview](../../profile/home.md).

## [!DNL Sources] {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

| Feature | Description |
| ------- | ----------- |
| UI support for compressed file ingestion | You can now preview and ingest compressed JSON or delimited files using cloud storage sources in the UI. For more information, see the tutorial on [configuring a dataflow for a cloud storage source connection in the UI](../../sources/tutorials/ui/dataflow/batch/cloud-storage.md). |

To learn more about sources, see the [sources overview](../../sources/home.md).
