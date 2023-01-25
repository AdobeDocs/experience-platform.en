---
title: Adobe Experience Platform Release Notes January 2023
description: The January 2023 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: January 25, 2023**

Updates to existing features in Adobe Experience Platform:

- [[!DNL Destinations]](#destinations)

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New destinations**

| Destination | Description |
| ----------- | ----------- |
| [(Beta) Adobe Experience Cloud Audiences connection](../../destinations/catalog/adobe/experience-cloud-audiences.md) | Use the [!UICONTROL (Beta) Adobe Experience Cloud Audiences] connection to share segments from Experience Platform to various Experience Platform solutions, like Audience Manager, Analytics, Advertising Cloud, Adobe Campaign, Target, or Marketo.. |
| [Pega Profile connection](../../destinations/catalog/personalization/pega-profile.md) | Use the [!DNL Pega Profile Connector] in Adobe Experience Platform to create a live outbound connection to your [!DNL Amazon Web Services] (AWS) S3 storage to periodically export profile data to CSV files from Adobe Experience Platform into your own S3 buckets. In [!DNL Pega Customer Decision Hub], you can schedule data jobs to import this profile data from S3 storage to update the [!DNL Pega Customer Decision Hub] profile. |
| [(Beta) The Trade Desk CRM EU connection](../../destinations/catalog/advertising/tradedesk-emails.md) | With the release of EUID (European Unified ID), you are now seeing two [!DNL The Trade Desk - CRM] destinations in the [destinations catalog](/help/destinations/catalog/overview.md). <ul><li> If you source data in the EU, please use the **[!DNL The Trade Desk - CRM (EU)]** destination.</li><li> If you source data in the APAC or NAMER regions, please use the **[!DNL The Trade Desk - CRM (NAMER & APAC)]** destination. </li></ul> |

**New or updated functionality**

| Functionality | Description |
| ----------- | ----------- |
| New delimiter options for beta cloud storage destination connectors | Three new delimiter options (Colon `:`, Pipe `|`, Semicolon `;`) are now available for the new beta cloud storage destinations - [(Beta) Amazon S3](/help/destinations/catalog/cloud-storage/amazon-s3.md), [(Beta) Azure Blob](/help/destinations/catalog/cloud-storage/azure-blob.md), [(Beta) Azure Data Lake Storage Gen2](/help/destinations/catalog/cloud-storage/adls-gen2.md), [(Beta) Data Landing Zone](/help/destinations/catalog/cloud-storage/data-landing-zone.md), [(Beta) Google Cloud Storage](/help/destinations/catalog/cloud-storage/google-cloud-storage.md), [(Beta) SFTP](/help/destinations/catalog/cloud-storage/sftp.md). <br> Read about the supported [file formatting options](/help/destinations/ui/batch-destinations-file-formatting-options.md) for file-based destinations. |
| Two new optional parameters available in [customer data fields](/help/destinations/destination-sdk/destination-configuration.md#customer-data-fields) configurations in [Destination SDK](/help/destinations/destination-sdk/overview.md) | <ul><li>`hidden`: Use this parameter when you need to create a customer data field that should not be visible to the user when connecting to the destination that you set up.</li><li>`unique`: Use this when you need to create a customer data field whose value must be unique across all destination dataflows set up by a user's organization. <br> For example, the **[!UICONTROL Integration alias]** field in the [[!UICONTROL Custom Personalization]](/help/destinations/catalog/personalization/custom-personalization.md#parameters) destination must be unique, meaning that two separate dataflows to this destination cannot have the same value for this field. </li></ul> |

**Fixes and enhancements**

| Fix or enhancement | Description |
| ----------- | ----------- |
| UI and API validation for required mappings and duplicate mappings (PLAT-123316) | Validation is now enforced as follows in the UI and API when [mapping fields](/help/destinations/ui/activate-batch-profile-destinations.md#mapping) in the activate destinations workflow:<ul><li>**Required mappings**: If the destination has been set up by the destination developer with required mappings (for example, the [Google Ad Manager 360](/help/destinations/catalog/advertising/google-ad-manager-360-connection.md#activate) destination), then these required mappings need to be added by the user when activating data to the destination. </li><li>**Duplicate mappings**: expand on allowed and forbidden source-to-target mappings.</li></ul> |
| Updated profile export behavior to cloud storage destinations (PLAT-123316) | We fixed an issue in the behavior of [mandatory attributes](/help/destinations/ui/activate-batch-profile-destinations.md#mandatory-attributes) when exporting data files to batch destinations. <br> Previously, every record in the output files was verified to contain both: <ol><li>A non-null value of the `mandatoryField` column and</li><li>also contain a non-null value on at least one of the other non-mandatory fields.</li></ol> The second condition has been removed. As a result, you might be seeing more output rows in your exported data files. |

For more general information on destinations, refer to the [destinations overview](../../destinations/home.md).