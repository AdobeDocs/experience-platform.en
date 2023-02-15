---

title: Use the last qualification time XDM attribute in the new beta cloud storage destinations
description: Learn how to use the last qualification time XDM attribute in the new beta cloud storage destinations
hidefromtoc: y
hide: y

---
# Use the last qualification time XDM attribute in the new beta cloud storage destinations {##last-qualification-time}

>[!IMPORTANT]
> 
>The `segmentMembership.ups.seg_id.lastQualificationTime` XDM attribute is available to customers participating in the improved file export functionality beta program and using the [new beta cloud storage destinations](/help/release-notes/2022/october-2022.md#destinations). The functionality and documentation are subject to change. Contact your Adobe representative or Customer Care if you would like access to this beta program.

## Prerequisites {#prerequisites}

To use this XDM attribute, you must be enrolled in the beta program to use the improved file export functionality. You are enrolled if you can see the new beta cards for the cloud storage destinations, as can be seen for example below for Amazon S3. 

![Image showing the new Amazon S3 beta card](/help/destinations/assets/ui/activate-destinations/new-amazon-s3-beta-card.png)

## How to use the last qualification time XDM attribute

For customers using the six new cloud storage beta connectors, you can use the `segmentMembership.ups.seg_id.lastQualificationTime` XDM attribute to understand when a profile qualified for a segment. This can help you with certain measurement or analytics use cases as well as give you a better idea of when to activate certain audiences. 

Note that you cannot currently use the **[!UICONTROL Select field]** window to add `segmentMembership.ups.seg_id.lastQualificationTime` to your file exports. Instead, you need to manually paste the value `segmentMembership.ups.seg_id.lastQualificationTime` into the schema field, as shown below.

ADD screen recording here

## More information

For extensive information about using the mapping step in the new cloud storage beta destinations, read the [mapping section](/help/destinations/ui/activate-batch-profile-destinations.md#mapping) of the activate file-based destinations tutorial.