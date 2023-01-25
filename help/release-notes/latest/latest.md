---
title: Adobe Experience Platform Release Notes
description: The latest release notes for Adobe Experience Platform.
exl-id: f854f9e5-71be-4d56-a598-cfeb036716cb
---
# Adobe Experience Platform release notes 

**Release date: January 25, 2023**

Updates to existing features in Adobe Experience Platform:

- [Assurance](#assurance)
- [Data collection](#data-collection)
- [[!DNL Destinations]](#destinations)
- [Experience Data Model (XDM)](#xdm)
- [Real-Time Customer Profile](#profile)
- [Segmentation Service](#segmentation)
- [Sources](#sources)

## Assurance {#assurance}

Adobe Assurance lets you inspect, proof, simulate, and validate how you collect data or serve experiences in your mobile app.

**New or updated features** 

| Feature | Description |
| ------- | ----------- |
| Validation Editor | New enhancements to the validation editor have been added. These enhancements include validation columns, new code building tools, and improved views. |

{style="table-layout:auto"}

For more information about Assurance, please read the [Assurance documentation](https://developer.adobe.com/client-sdks/documentation/platform-assurance/).

## Data collection {#data-collection}

Adobe Experience Platform provides a suite of technologies that allow you to collect client-side customer experience data and send it to the Adobe Experience Platform Edge Network where it can be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

**New or updated features**

| Feature | Description |
| --- | --- |
| New home screen | The home page for Data Collection UI has been updated to include helpful onboarding information and links to streamline productivity. This includes:<ol><li>Documentation and recommended workflows to get started</li><li>Recent properties, rules, and data elements</li><li>Popular extensions</li><li>New extension updates with a quick install feature</li></ol> |
| Send data to [!DNL Google Ads] using event forwarding | You can now use the [[!DNL Google Ads Enhanced Conversions] API extension](../../tags/extensions/server/google-ads-enhanced-conversions/overview.md) for event forwarding, combined with [Google Oauth 2 secrets](../../tags/ui/event-forwarding/secrets.md#google-oauth2), to securely send server-side data to [!DNL Google Ads] in real time. |

{style="table-layout:auto"}

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New destinations**

| Destination | Description |
| ----------- | ----------- |
| [(Beta) Adobe Experience Cloud Audiences connection](../../destinations/catalog/adobe/experience-cloud-audiences.md) | Use the [!UICONTROL (Beta) Adobe Experience Cloud Audiences] connection to share segments from Experience Platform to various Experience Platform solutions, like Audience Manager, Analytics, Advertising Cloud, Adobe Campaign, Target, or Marketo. |
| [Pega Profile connection](../../destinations/catalog/personalization/pega-profile.md) | Use the [!DNL Pega Profile Connector] in Adobe Experience Platform to create a live outbound connection to your [!DNL Amazon] S3 storage to periodically export profile data to CSV files from Adobe Experience Platform into your own S3 buckets. In [!DNL Pega Customer Decision Hub], you can schedule data jobs to import this profile data from S3 storage to update the [!DNL Pega Customer Decision Hub] profile. |
| [(Beta) The Trade Desk CRM EU connection](../../destinations/catalog/advertising/tradedesk-emails.md) | With the release of EUID (European Unified ID), you are now seeing two [!DNL The Trade Desk - CRM] destinations in the [destinations catalog](/help/destinations/catalog/overview.md). <ul><li> If you source data in the EU, please use the **[!DNL The Trade Desk - CRM (EU)]** destination.</li><li> If you source data in the APAC or NAMER regions, please use the **[!DNL The Trade Desk - CRM (NAMER & APAC)]** destination. </li></ul> |

**New or updated functionality**

| Functionality | Description |
| ----------- | ----------- |
| New delimiter options for beta cloud storage destination connectors | Three new delimiter options (Colon `:`, Pipe `|`, Semicolon `;`) are now available for the new beta cloud storage destinations - [(Beta) Amazon S3](/help/destinations/catalog/cloud-storage/amazon-s3.md), [(Beta) Azure Blob](/help/destinations/catalog/cloud-storage/azure-blob.md), [(Beta) Azure Data Lake Storage Gen2](/help/destinations/catalog/cloud-storage/adls-gen2.md), [(Beta) Data Landing Zone](/help/destinations/catalog/cloud-storage/data-landing-zone.md), [(Beta) Google Cloud Storage](/help/destinations/catalog/cloud-storage/google-cloud-storage.md), [(Beta) SFTP](/help/destinations/catalog/cloud-storage/sftp.md). <br> Read about the supported [file formatting options](/help/destinations/ui/batch-destinations-file-formatting-options.md) for file-based destinations. |
| Two new optional parameters available in [customer data fields](/help/destinations/destination-sdk/destination-configuration.md#customer-data-fields) configurations in [Destination SDK](/help/destinations/destination-sdk/overview.md) | <ul><li>`hidden`: Use this parameter when you need to create a customer data field that should not be visible to the user when connecting to the destination that you set up.</li><li>`unique`: Use this when you need to create a customer data field whose value must be unique across all destination dataflows set up by a user's organization. <br> For example, the **[!UICONTROL Integration alias]** field in the [[!UICONTROL Custom Personalization]](/help/destinations/catalog/personalization/custom-personalization.md#parameters) destination must be unique, meaning that two separate dataflows to this destination cannot have the same value for this field. </li></ul> |

**Fixes and enhancements** {#fixes-and-enhancements}

<!--

| Fix or enhancement | Description |
| ----------- | ----------- |
| UI and API validation for required mappings and duplicate mappings (PLAT-123316) | Validation is now enforced as follows in the UI and API when [mapping fields](/help/destinations/ui/activate-batch-profile-destinations.md#mapping) in the activate destinations workflow:<ul><li>**Required mappings**: If the destination has been set up by the destination developer with required mappings (for example, the [Google Ad Manager 360](/help/destinations/catalog/advertising/google-ad-manager-360-connection.md#activate) destination), then these required mappings need to be added by the user when activating data to the destination. </li><li>**Duplicate mappings**: expand on allowed and forbidden source-to-target mappings.</li></ul> |
| Updated profile export behavior to cloud storage destinations (PLAT-123316) | We fixed an issue in the behavior of [mandatory attributes](/help/destinations/ui/activate-batch-profile-destinations.md#mandatory-attributes) when exporting data files to batch destinations. <br> Previously, every record in the output files was verified to contain both: <ol><li>A non-null value of the `mandatoryField` column and</li><li>also contain a non-null value on at least one of the other non-mandatory fields.</li></ol> The second condition has been removed. As a result, you might be seeing more output rows in your exported data files. |

-->

<table>
    <tr>
        <td><b>Fix or enhancement</b></td>
        <td><b>Description</b></td>
    </tr>
    <tr>
        <td>UI and API validation for required mappings and duplicate mappings (PLAT-123316)</td>
        <td>Validation is now enforced as follows in the UI and API when <a href="https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/activate/activate-batch-profile-destinations.html?lang=en#mapping">mapping fields</a> in the activate destinations workflow:<ul><li><b>Required mappings</b>: If the destination has been set up by the destination developer with required mappings (for example, the <a href="https://experienceleague.adobe.com/docs/experience-platform/destinations/catalog/advertising/google-ad-manager-360-connection.html?lang=en">Google Ad Manager 360</a> destination), then these required mappings need to be added by the user when activating data to the destination. </li><li><b>Duplicate mappings</b>: In the mapping step of the activation workflow, you can add duplicate values in the source fields, but not in the target fields. See the table below for an example of allowed and forbidden mapping combinations. <br><table><thead><tr><th>Allowed/forbidden</th><th>Source field</th><th>Target field</th></tr></thead><tbody><tr><td>Allowed</td><td><ul><li>email.address</li><li>email.address</li></ul></td><td><ul><li>emailalias1</li><li>email   alias2</li></ul></td></tr><tr><td>Forbidden</td><td><ul><li>email.address</li><li>hashed.emails</li></ul></td><td><ul><li>emailalias1</li><li>emailalias1</li></ul></td></tr></tbody></table> </li></ul></td>
    </tr>
    <tr>
        <td>Updated export behavior to file-based destinations (PLAT-123316)</td>
        <td>We fixed an issue in the behavior of <a href="https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/activate/activate-batch-profile-destinations.html?lang=en#mandatory-attributes">mandatory attributes</a> when exporting data files to batch destinations. <br> Previously, every record in the output files was verified to contain both: <ol><li>A non-null value of the <code>mandatoryField</code> column and</li><li>A non-null value on at least one of the other non-mandatory fields.</li></ol> The second condition has been removed. As a result, you might be seeing more output rows in your exported data files, as shown in the example below:<br> <b> Sample behavior before January 2023 release </b> <br> Mandatory field: <code>emailAddress</code> <br> <b>Input data to activate</b> <br><table><thead><tr><th>firstName</th><th>emailAddress</th></tr></thead><tbody><tr><td>John</td><td>john@acme.com</td></tr><tr><td>null</td><td>peter@acme.com</td></tr><tr><td>Jenifer</td><td>jennifer@acme.com</td></tr><tr><td>null</td><td>diana@acme.com</td></tr></tbody></table> <br> <b>Activation output</b> <br><table><thead><tr><th>firstName</th><th>emailAddress</th></tr></thead><tbody><tr><td>John</td><td>john@acme.com</td></tr><tr><td>Jenifer</td><td>jennifer@acme.com</td></tr></tbody></table> <br> <b> Sample behavior after January 2023 release </b> <br> <b>Activation output</b> <br> <table><thead><tr><th>firstName</th><th>emailAddress</th></tr></thead><tbody><tr><td>John</td><td>john@acme.com</td></tr><tr><td>null</td><td>peter@acme.com</td></tr><tr><td>Jenifer</td><td>jennifer@acme.com</td></tr><tr><td>null</td><td>diana@acme.com</td></tr></tbody></table> </td>
    </tr>
</table>

For more general information on destinations, refer to the [destinations overview](../../destinations/home.md).

## Experience Data Model (XDM) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**New or updated features**

| Feature | Description |
| --- | --- |
| Disable suggested values for string fields | You can now [disable individual suggested values for string fields](../../xdm/ui/fields/enum.md) in the [!UICONTROL Schemas] workspace, including those from standard components. This feature is only available for fields with suggested values and is not supported for enum constraints. |

**New XDM components**

| Component type | Name | Description |
| --- | --- | --- |
| Class | [[!UICONTROL Conversion]](https://github.com/adobe/xdm/blob/master/components/classes/conversion.schema.json) | A class for tracking conversion data like currency conversions. |
| Field group | [[!UICONTROL Currency Conversion Rate Details]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/conversion/currency-conversion-details.schema.json) | A field group for the [!UICONTROL Conversion] class, capturing additional details related to currency conversion. |
| Field group | [[!UICONTROL Consent policies evaluation results map with metadata]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/profile/profile-consentResultsv2.schema.jsonn) | Captures details for the evaluation result of multiple consent policies, including metadata information about consent policy entrances and exists. |

**Updated XDM components**

| Component type | Name | Description |
| --- | --- | --- |
| Data type | [[!UICONTROL Advertising details information]](https://github.com/adobe/xdm/blob/master/components/datatypes/advertisingdetails.schema.json) | The `ID` field has been renamed to `name`, and the previous `name` field is now `friendlyName`. |
| Data type | [[!UICONTROL Decision Proposition Details]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/decisioning/proposition-detail.schema.json) | Added a `selectionStrategy` field which captures the details of a selection strategy. |
| Field group | [[!UICONTROL Experience Event - Proposition Interactions]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/decisioning/experienceevent-proposition-interaction.schema.json) | The field group is now compatible with the [!UICONTROL Journey Step Event] class. |
| Data type | [[!UICONTROL Error details information]](https://github.com/adobe/xdm/blob/master/components/datatypes/errordetails.schema.json) | The `ID` field has been renamed to `name`. |
| Data type | [[!UICONTROL Media information]](https://github.com/adobe/xdm/blob/master/components/datatypes/media.schema.json) | Reverted a change in pattern to the video segment property. |
| Data type | [[!UICONTROL Qoe Data details information]](https://github.com/adobe/xdm/blob/master/components/datatypes/qoedatadetails.schema.json) | Removed the `droppedFrameCount` field. |
| Data type | [[!UICONTROL Session details information]](https://github.com/adobe/xdm/blob/master/components/datatypes/sessiondetails.schema.json) | Renamed the `isAuthorized` field to `authorized`, and updated its `type` to a string when it was previously a Boolean. |
| Data type | [[!UICONTROL Shipping]](https://github.com/adobe/xdm/blob/master/components/datatypes/shipping.schema.json) | Added several new fields: `shipDate`, `trackingNumber`, and `trackingURL`. |
| Field group | [[!UICONTROL AJO Entity Fields]](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/customerJourneyManagement/ajo-entity-mixins.schema.json) | Added several new fields: `journeyNodeID`, `journeyNodeName`, and `journeyModeType`. |
| Field group | [[!UICONTROL Consumer Experience Event]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/shared/experienceevent-consumer.schema.json) | The field group is now also compatible with the [!UICONTROL Summary Metrics] class. |
| Field group | [[!UICONTROL Product Triggers]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/shared/product-triggers.schema.json) | The `productTriggers` field is now nested under a `weather` object. |
| Field group | [[!UICONTROL Relative Triggers]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/shared/relative-triggers.schema.json) | The `relativeTriggers` field is now nested under a `weather` object. |
| Field group | [[!UICONTROL Severe Triggers]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/shared/severe-triggers.schema.json) | The `severeTriggers` field is now nested under a `weather` object. |
| Field group | [[!UICONTROL Weather Triggers]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/shared/severe-triggers.schema.json) | The `weatherTriggers` field is now nested under a `weather` object. |
| Field group | [[!UICONTROL XDM Related Business Accounts]](https://github.com/adobe/xdm/blob/master/components/fieldgroups/account/related-accounts.schema.json) | The field group is now stable. |

{style="table-layout:auto"}

For more information on XDM in Platform, see the [XDM System overview](../../xdm/home.md).

## Real-Time Customer Profile {#profile}

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With Real-Time Customer Profile, you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data. Profile allows you to consolidate customer data into a unified view offering an actionable, timestamped account of every customer interaction.

**Upcoming deprecation** {#deprecation}

In order to remove redundancy in the segment membership lifecycle, the `Existing` status will be deprecated from the [segment membership map](../../xdm/field-groups/profile/segmentation.md) at the end of March 2023. A follow-up announcement will include the exact deprecation date. 

Post deprecation, profiles qualified in a segment will be represented as `Realized` and profiles disqualified will continue to be represented as `Exited`. This will bring parity with file-based destinations with `Active` and `Expired` segment statuses. 

This change could impact you if you're using [enterprise destinations](../../destinations/destination-types.md#streaming-profile-export) (Amazon Kinesis, Azure Event Hubs, HTTP API) and have automated downstream processes in place, based on the `Existing` status. Please review your downstream integrations if this is the case for you. If you are interested in identifying newly qualified profiles beyond a certain time, please consider using a combination of the `Realized` status and the `lastQualificationTime` in your segment membership map. For more information, please reach out to your Adobe representative.

To learn more about Real-Time Customer Profile, including tutorials and best practices for working with profile data, please begin by reading the [Real-Time Customer Profile overview](../../profile/home.md).

## Segmentation Service {#segmentation}

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Segments can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| Platform-generated segment membership expiration | Any segment membership that is in the `Exited` state for more than 30 days, based on the `lastQualificationTime` field will be subject to deletion. |
| External audience membership expiration | By default, external audience memberships are retained for 30 days. To retain them for longer, use the `validUntil` field during the ingestion of audience data. |

{style="table-layout:auto"}

For more information on [!DNL Segmentation Service], please see the [Segmentation overview](../../segmentation/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources and allows you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

| Feature | Description |
| --- | --- |
| Allow user access to subfolders of cloud storage sources | You can now define access to a specific subfolder of your cloud storage source when creating a new account. Once created, users will only be able to access data from the permitted subfolder. This feature is available to the following cloud storage sources: [Azure Blob Storage](../../sources/connectors/cloud-storage/blob.md), [Google Cloud Storage](../../sources/connectors/cloud-storage/google-cloud-storage.md), [Google PubSub](../../sources/connectors/cloud-storage/google-pubsub.md), and [SFTP](../../sources/connectors/cloud-storage/sftp.md). |
| Beta availability of [!DNL SugarCRM] | [!DNL SugarCRM] sources are now available in beta. Use the [!DNL SugarCRM Accounts & Contacts] and the [!DNL SugarCRM Events] sources to bring data from your [!DNL SugarCRM] account to Experience Platform. For more information, read the [[!DNL SugarCRM] overview](../../sources/connectors/crm/sugarcrm.md). |