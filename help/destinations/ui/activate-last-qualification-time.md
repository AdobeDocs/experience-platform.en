---
title: Use the last qualification time XDM attribute in the new beta cloud storage destinations
description: Learn how to use the last qualification time XDM attribute in the new beta cloud storage destinations
badgeBeta: label="Beta" type="Informative"
exl-id: d077ea10-5ff2-4acc-8ee6-78ea6cd752d1
---
# Use the last qualification time XDM attribute in the new beta cloud storage destinations {#last-qualification-time}

>[!IMPORTANT]
> 
>This page describes functionality that is in beta. The functionality and documentation are subject to change. Contact your Adobe representative or Customer Care if you would like access to this beta program.

## Prerequisites {#prerequisites}

To use the last qualification time (`lastQualificationTime`) XDM attribute, you must be exporting data to one of the six cloud storage destinations listed below: 

* [[!DNL ADLS Gen 2]](/help/destinations/catalog/cloud-storage/adls-gen2.md)
* [[!DNL Amazon S3]](/help/destinations/catalog/cloud-storage/amazon-s3.md)
* [[!DNL Azure Blob]](/help/destinations/catalog/cloud-storage/azure-blob.md)
* [[!DNL Data Landing Zon]e](/help/destinations/catalog/cloud-storage/data-landing-zone.md)
* [[!DNL Google Cloud Storage]](/help/destinations/catalog/cloud-storage/google-cloud-storage.md)
* [SFTP](/help/destinations/catalog/cloud-storage/sftp.md)

## How to use the last qualification time XDM attribute {#how-to-use}

If you are using one of the six cloud storage connectors listed above, you can use the last qualification time XDM attribute in the [mapping step](/help/destinations/ui/activate-batch-profile-destinations.md#mapping) of the activation workflow to create a column in the exported file with the latest timestamp of when a profile qualified for a segment. This can help you with certain measurement or analytics use cases as well as give you a better idea of when to activate certain audiences. 

Note that to add `lastQualificationTime` to your file exports, you currently need to manually insert the value `xdm: segmentMembership.ups.seg_id.lastQualificationTime` into the source field, as shown below. You can also edit the target field to `lastQualificationTime` or any other value that you would like to name this column. Note that since this is a beta functionality, the syntax of the `xdm: segmentMembership.ups.seg_id.lastQualificationTime` value may change in the future.

![Screen recording showing the last qualification time XDM attribute paste into the mapping step](/help/destinations/ui/last-qualification-time.gif)

## More information {#more-information}

For extensive information about activating data to file-based destinations including all the steps in the workflow and necessary permissions, read the [activate file-based destinations tutorial](/help/destinations/ui/activate-batch-profile-destinations.md).
