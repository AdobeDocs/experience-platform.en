---
solution: Experience Platform
title: API migration guide for cloud storage destinations
description: Learn what changes in the workflow to activate cloud storage destinations as part of the migration to the new cloud storage destination cards with additional functionality.
type: Tutorial
---
# API migration guide for cloud storage destinations

>[!IMPORTANT]
>
>* The functionality described on this page is available to customers who have purchased the Real-Time CDP Prime and Ultimate package. Please contact your Adobe representative for more information. 

Starting November 2022, you can use the new file export capabilities to access enhanced customization functionality when exporting files out of Experience Platform: 

* Additional [file naming options](/help/destinations/ui/activate-batch-profile-destinations.md#file-names).
* Ability to set custom file headers in your exported files via the [improved mapping step](/help/destinations/ui/activate-batch-profile-destinations.md#mapping).
* [Ability to customize the formatting of exported CSV data files](/help/destinations/ui/batch-destinations-file-formatting-options.md).

This functionality is supported by the six beta cloud storage cards listed below: 

* [[!DNL (Beta) Amazon S3]](../../destinations/catalog/cloud-storage/amazon-s3.md#changelog)
* [[!DNL (Beta) Azure Blob]](../../destinations/catalog/cloud-storage/azure-blob.md#changelog) 
* [[!DNL (Beta) SFTP]](../../destinations/catalog/cloud-storage/sftp.md#changelog)
* [[!DNL (Beta) Azure Data Lake Storage Gen2]](../../destinations/catalog/cloud-storage/adls-gen2.md)
* [[!DNL (Beta) Data Landing Zone]](../../destinations/catalog/cloud-storage/data-landing-zone.md)
* [[!DNL (Beta) Google Cloud Storage]](../../destinations/catalog/cloud-storage/google-cloud-storage.md)

![Image of the two Amazon S3 destination cards in a side-by-side view.](../assets/catalog/cloud-storage/amazon-s3/two-amazons3-destination-cards.png)

While these destinations were offered initially as a beta, Adobe is now moving all Real-Time CDP customers to the new cloud storage destinations. For customers who were already using Amazon S3, Azure Blob, or SFTP, this means that existing dataflows will be migrated to the new cards. Read on for more information about the specific changes as part of the migration.

## Who this page applies to {#who-this-applies-to}

If you are already using the Flow Service API to export profiles to the Amazon S3, Azure Blob, or SFTP cloud storage destinations then this API migration guide applies to you. 

If you have scripts running in your Amazon S3, Azure Blob, or SFTP cloud storage locations on top of the exported files from Experience Platform, be aware that some parameters are changing with regards to the connection and flow specs or the new cards, as well as with regard to the mapping step.

For example, if you were using a script to filter destination dataflows to the Amazon S3 destination, based on the connection spec of the Amazon S3 destination, be aware that the connection spec will change so you will need to update your filters. 

## Relevant documentation links 

This section includes the relevant API tutorial and reference documentation for the enhanced functionality to export data to cloud storage destinations.

* [Legacy API tutorial to export data to cloud storage destinations](/help/destinations/api/connect-activate-batch-destinations.md) (outdated, do not use anymore)
* [New API tutorial to export data to cloud storage destinations](https://experienceleague-review.corp.adobe.com/docs/experience-platform/destinations/api/activate-data-file-based-destinations.html)
* [Destinations API reference documentation](https://developer.adobe.com/experience-platform-apis/references/destinations/) 

### Summary of backwards-incompatible changes

With the migration to the new destinations, all your dataflows will now be assigned new target connections and target base connections. The profile mapping step also changes. Backwards-incompatible changes are summarized in the sections below for each destination.

![Migration guide overview image](/help/destinations/assets/api/api-migration-guide/migration-guide-diagram.png)

### Backwards-incompatible changes to the Amazon S3 destination

The breaking changes for the API users are an updated connection spec and flow spec as below:

|Amazon S3 | Legacy | New |
|---------|----------|---------|
| Flow Spec | 71471eba-b620-49e4-90fd-23f1fa0174d8 | 269ba276-16fc-47db-92b0-c1049a3c131f |
| Connection spec | 4890fc95-5a1f-4983-94bb-e060c08e3f81 | 4fce964d-3f37-408f-9778-e597338a21ee |

### Backwards-incompatible changes to Azure Blob destination

The breaking changes for the API users are an updated connection spec and flow spec as below:

|Azure Blob | Legacy | New |
|---------|----------|---------|
| Flow Spec | 71471eba-b620-49e4-90fd-23f1fa0174d8 | 95bd8965-fc8a-4119-b9c3-944c2c2df6d2 |
| Connection spec | e258278b-a4cf-43ac-b158-4fa0ca0d948b | 6d6b59bf-fb58-4107-9064-4d246c0e5bb2 |

### Backwards-incompatible changes to SFTP destination

The breaking changes for the API users are an updated connection spec and flow spec as below:

|SFTP | Legacy | New |
|---------|----------|---------|
| Flow Spec | 71471eba-b620-49e4-90fd-23f1fa0174d8 | 354d6aad-4754-46e4-a576-1b384561c440 |
| Connection spec | 64ef4b8b-a6e0-41b5-9677-3805d1ee5dd0 | 36965a81-b1c6-401b-99f8-22508f1e6a26 |

### Backwards-incompatible changes common to Amazon S3, Azure Blob, and SFTP destinations

The profile selector step in all three destinations is replaced by a mapping step which allows you to rename the columns in your exported files. See the side-by-side image below with the old attribute selector step on the left and the new mapping step in the right.

![Migration guide overview image](/help/destinations/assets/api/api-migration-guide/old-and-new-mapping-step.png)



## Migration steps

TODO: Briefly list out migration steps (if documenting these publicly is desired) 

## Action items

Prepare to update your scripts. Your Adobe account team will reach out with further information about when your dataflows will be migrated. 

## Next steps {#next-steps}

By reading this page, you now know which documentation pages to reference as you set up API-based workflows to export files out of Experience Platform to your preferred cloud storage destinations. Next, you can view the API tutorial to export data to cloud storage destinations.