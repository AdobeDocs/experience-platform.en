---
solution: Experience Platform
title: API migration guide for cloud storage destinations
description: Learn what you need to do as part of the migration of cloud storage destination to the new cards with profiles to cloud storage and email marketing destinations.
type: Tutorial
---
# API migration guide for cloud storage destinations

>[!IMPORTANT]
>
>* This beta functionality is available to customers who have purchased the Real-Time CDP Prime and Ultimate package. Please contact your Adobe representative for more information. 

Use the new file export capabilities to access enhanced customization functionality when exporting files out of Experience Platform: 

* Additional [file naming options](/help/destinations/ui/activate-batch-profile-destinations.md#file-names).
* Ability to set custom file headers in your exported files via the [improved mapping step](/help/destinations/ui/activate-batch-profile-destinations.md#mapping).
* [Ability to customize the formatting of exported CSV data files](/help/destinations/ui/batch-destinations-file-formatting-options.md).

This functionality is supported by the six new beta cloud storage cards listed below: 

* [[!DNL (Beta) Azure Data Lake Storage Gen2]](../../destinations/catalog/cloud-storage/adls-gen2.md)
* [[!DNL (Beta) Data Landing Zone]](../../destinations/catalog/cloud-storage/data-landing-zone.md)
* [[!DNL (Beta) Google Cloud Storage]](../../destinations/catalog/cloud-storage/google-cloud-storage.md)
* [[!DNL (Beta) Amazon S3]](../../destinations/catalog/cloud-storage/amazon-s3.md#changelog)
* [[!DNL (Beta) Azure Blob]](../../destinations/catalog/cloud-storage/azure-blob.md#changelog) 
* [[!DNL (Beta) SFTP]](../../destinations/catalog/cloud-storage/sftp.md#changelog)

![Image of the two Amazon S3 destination cards in a side-by-side view.](../assets/catalog/cloud-storage/amazon-s3/two-amazons3-destination-cards.png)

While these destinations were offered initially as a beta, Adobe is now moving all Real-Time CDP customers to the new cloud storage destinations. Read on for more information and action items.

## Who this page applies to {#who-this-applies-to}

If you were already using the Flow Service API to export profiles to the Amazon S3, Azure Blob, or SFTP cloud storage destinations, then this API migration guide applies to you. 

## Relevant documentation links 

* [Legacy API tutorial to export data to cloud storage destinations](/help/destinations/api/connect-activate-batch-destinations.md) (outdated, do not use anymore)
* [New API tutorial to export data to cloud storage destinations](https://experienceleague-review.corp.adobe.com/docs/experience-platform/destinations/api/activate-data-file-based-destinations.html)
* [Destinations API reference documentation](https://developer.adobe.com/experience-platform-apis/references/destinations/) 

### Significant differences

Briefly describe updates to profile mapping step and link to relevant section from API guide

Briefly describe additional naming options and link to relevant docs

Briefly describe ability to customize CSV files and link to relevant docs

## Migration steps

TODO: Briefly list out migration steps (if documenting these publicly is desired) 

## Action items

TODO: Add any action items for API users



## Next steps {#next-steps}

By reading this page, you now know which documentation pages to reference as you set up API-based workflows to export files out of Experience Platform to your preferred cloud storage destinations. TODO: Add links for next steps