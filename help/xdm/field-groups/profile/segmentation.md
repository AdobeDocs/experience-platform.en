---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;individual profile;fields;schemas;Schemas;segment;segmentMembership;segment membership;Schema design;map;Map;
solution: Experience Platform
title: Segment Membership Details Schema Field Group
description: This document provides an overview of the Segment Membership Details schema field group.
exl-id: 4d463f3a-2247-4307-8afe-9527e7fd72a7
---

# [!UICONTROL Segment Membership Details] schema field group

>[!NOTE]
>
>The names of several schema field groups have changed. See the document on [field group name updates](../name-updates.md) for more information.

[!UICONTROL Segment Membership Details] is a standard schema field group for the [[!DNL XDM Individual Profile] class](../../classes/individual-profile.md). The field group provides a single map field which captures information regarding segment membership, including which segments the individual belongs to, the last qualification time, and when the membership is valid until.

>[!WARNING]
>
>While the `segmentMembership` field must be manually added to your profile schema using this field group, you should not attempt to manually populate or update this field. The system automatically updates the `segmentMembership` map for each profile as segmentation jobs are performed.

<img src='../../images/data-types/profile-segmentation.png' width=400 /><br />

| Property | Data type | Description |
| --- | --- | --- |
| `segmentMembership` | Map | A map object which describes the individual's segment memberships. The structure of this object is described in detail below. |

{style="table-layout:auto"}

The following is an example `segmentMembership` map that the system has populated for a particular profile. Segment memberships are sorted by namespace, as indicated by the root-level keys of the object. In turn, the individual keys under each namespace represent the IDs of the segments the profile is a member of. Each segment object contains several sub-fields that provide further details about the membership:

```json
{
  "xdm:segmentMembership": {
    "AAM": {
      "04a81716-43d6-4e7a-a49c-f1d8b3129ba9": {
        "xdm:version": "15",
        "xdm:lastQualificationTime": "2018-04-26T15:52:25+00:00",
        "xdm:validUntil": "2019-04-26T15:52:25+00:00",
        "xdm:status": "existing",
        "xdm:payload": {
          "xdm:payloadBooleanValue": true,
          "xdm:payloadType": "boolean"
        }
      },
      "53cba6b2-a23b-454a-8069-fc41308f1c0f": {
        "xdm:version": "3",
        "xdm:lastQualificationTime": "2018-04-26T15:52:25+00:00",
        "xdm:validUntil": "2018-04-27T15:52:25+00:00",
        "xdm:status": "realized",
        "xdm:payload": {
          "xdm:payloadPropensityValue": 0.5,
          "xdm:payloadType": "propensity"
        }
      }
    },
    "Email": {
      "abcd@adobe.com": {
        "xdm:version": "1",
        "xdm:lastQualificationTime": "2017-09-26T15:52:25+00:00",
        "xdm:validUntil": "2017-12-26T15:52:25+00:00",
        "xdm:status": "exited"
      }
    }
  }
}
```

| Property | Description |
| --- | --- |
| `xdm:version` | The version of the segment that this profile qualified for. |
| `xdm:lastQualificationTime` | A timestamp of the last time this profile qualified for the segment. |
| `xdm:validUntil` | A timestamp of when the segment membership should no longer be assumed to be valid. For external audiences, if this field is not set, the segment membership will only be retained for 30 days from the `lastQualificationTime`. |
| `xdm:status` | A string field that indicates whether the segment membership has been realized as part of the current request. The following values are accepted: <ul><li>`existing`: The profile was already part of the segment prior to the request, and continues to maintain its membership.</li><li>`realized`: The profile is entering the segment as part of the current request.</li><li>`exited`: The profile is exiting the segment as part of the current request.</li></ul> |
| `xdm:payload` | Some segment memberships include a payload that describes additional values directly related to the membership. Only one payload of a given type can be provided for each membership. `xdm:payloadType` indicates the type of payload (`boolean`, `number`, `propensity`, or `string`), while its sibling property provides the value for the payload type. |

{style="table-layout:auto"}

>[!NOTE]
>
>Any segment membership that is in the `exited` status for more than 30 days, based on the `lastQualificationTime`, will be subject to deletion.

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/fieldgroups/profile/profile-personal-details.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/fieldgroups/profile/profile-personal-details.schema.json)
