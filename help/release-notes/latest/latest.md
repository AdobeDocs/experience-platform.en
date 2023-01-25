---
title: Adobe Experience Platform Release Notes
description: The latest release notes for Adobe Experience Platform.
exl-id: f854f9e5-71be-4d56-a598-cfeb036716cb
---
# Adobe Experience Platform release notes 

**Release date: January 25, 2023**

Updates to existing features in Adobe Experience Platform:

- [Data collection](#data-collection)
- [Experience Data Model (XDM)](#xdm)
- [Sources](#sources)

## Data collection {#data-collection}

Adobe Experience Platform provides a suite of technologies that allow you to collect client-side customer experience data and send it to the Adobe Experience Platform Edge Network where it can be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

**New or updated features**

| Feature | Description |
| --- | --- |
| New home screen | The home page for Data Collection UI has been updated to include helpful onboarding information and links to streamline productivity. This includes:<ol><li>Documentation and recommended workflows to get started</li><li>Recent properties, rules, and data elements</li><li>Popular extensions</li><li>New extension updates with a quick install feature</li></ol> |
| Send data to [!DNL Google Ads] using event forwarding | You can now use the [[!DNL Google Ads Enhanced Conversions] API extension](../../tags/extensions/server/google-ads-enhanced-conversions/overview.md) for event forwarding, combined with [Google Oauth 2 secrets](../../tags/ui/event-forwarding/secrets.md#google-oauth2), to securely send server-side data to [!DNL Google Ads] in real time. |

{style="table-layout:auto"}

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

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources and allows you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

| Feature | Description |
| --- | --- |
| Allow user access to subfolders of cloud storage sources | You can now define access to a specific subfolder of your cloud storage source when creating a new account. Once created, users will only be able to access data from the permitted subfolder. This feature is available to the following cloud storage sources: [Azure Blob Storage](../../sources/connectors/cloud-storage/blob.md), [Google Cloud Storage](../../sources/connectors/cloud-storage/google-cloud-storage.md), [Google PubSub](../../sources/connectors/cloud-storage/google-pubsub.md), and [SFTP](../../sources/connectors/cloud-storage/sftp.md). |
| Beta availability of [!DNL SugarCRM] | [!DNL SugarCRM] sources are now available in beta. Use the [!DNL SugarCRM Accounts & Contacts] and the [!DNL SugarCRM Events] sources to bring data from your [!DNL SugarCRM] account to Experience Platform. For more information, read the [[!DNL SugarCRM] overview](../../sources/connectors/crm/sugarcrm.md). |