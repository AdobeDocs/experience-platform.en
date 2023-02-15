---

title: Use the last qualification time XDM attribute in the new beta cloud storage destinations
description: Learn how to use the last qualification time XDM attribute in the new beta cloud storage destinations
hidefromtoc: y
hide: y

---
# Use the last qualification time XDM attribute in the new beta cloud storage destinations {##last-qualification-time}

>[!IMPORTANT]
> 
>This page describes functionality that is in beta. The functionality and documentation are subject to change. Contact your Adobe representative or Customer Care if you would like access to this beta program.

## Prerequisites {#prerequisites}

To use the last qualification time (`lastQualificationTime`) XDM attribute, you must be enrolled in the [beta program](/help/release-notes/2022/october-2022.md#destinations) to use the improved file export functionality and export data to one of the six [beta cloud storage destinations](/help/release-notes/2022/october-2022.md#destinations) ([ADLS Gen 2](/help/destinations/catalog/cloud-storage/adls-gen2.md), [Amazon S3](/help/destinations/catalog/cloud-storage/amazon-s3.md), [Azure Blob](/help/destinations/catalog/cloud-storage/azure-blob.md), [Data Landing Zone](/help/destinations/catalog/cloud-storage/data-landing-zone.md), [Google Cloud Storage](/help/destinations/catalog/cloud-storage/google-cloud-storage.md), [SFTP](/help/destinations/catalog/cloud-storage/sftp.md)). You are enrolled if you can see the new beta cards for the cloud storage destinations, as shown below for Amazon S3. 

![Image showing the new Amazon S3 beta card](/help/destinations/assets/ui/activate-destinations/new-amazon-s3-beta-card.png)

## How to use the last qualification time XDM attribute

If you are using one of the six new cloud storage beta connectors, you can use the last qualification time XDM attribute in the [mapping step](//help/destinations/ui/activate-batch-profile-destinations.md#mapping) of the activation workflow to create a column in the exported file with the latest timestamp when a profile qualified for a segment. This can help you with certain measurement or analytics use cases as well as give you a better idea of when to activate certain audiences. 

Note that to add `lastQualificationTime` to your file exports, you currently need to manually insert the value `xdm: segmentMembership.ups.seg_id.lastQualificationTime` into the schema field, as shown below and edit the target field to `lastQualificationTime` or anything that you would like to name this column.

![Screen recording showing the last qualification time XDM attribute paste into the mapping step](/help/destinations/ui/last-qualification-time.gif)

## More information

For extensive information about activating data to file-based destinations. read the [activate file-based destinations tutorial](/help/destinations/ui/activate-batch-profile-destinations.md).