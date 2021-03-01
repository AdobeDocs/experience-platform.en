---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;individual profile;fields;schemas;Schemas;identityMap;identity map;Identity map;Schema design;map;Map;union schema;union
solution: Experience Platform
title: XDM Individual Profile Class
topic: overview
description: This document provides an overview of the XDM Individual Profile class.
---

# [!DNL XDM Individual Profile] class

[!DNL XDM Individual Profile] is a standard XDM class which forms a singular representation (or "profile") of the attributes and interests of both identified and partially identified individuals.

Profiles can range from anonymous behavioral signals (such as browser cookies), to highly identified profiles containing detailed information such as name, date of birth, location, and email address. As a profile grows, it becomes a robust repository of personal information, identities, contact details, and communication preferences for an individual. For more high-level information on the use of this class in the Platform ecosystem, refer to the [XDM overview](../home.md#data-behaviors).

The [!DNL XDM Individual Profile] class itself provides several system-generated values that are automatically populated when data is ingested, whereas all other fields must be added through the use of [compatible mixins](#mixins):

![](../images/classes/individual-profile.png)

| Property | Description |
| --- | --- |
| `_repo` | An object containing the following [!UICONTROL DateTime] fields: <ul><li>`createDate`: The date and time when the resource was created in the data store, such as when data was first ingested.</li><li>`modifyDate`: The date and time when the resource was last modified.</li></ul> |
| `_id` |  A unique, system-generated string identifier for the record. This field is used to track the uniqueness of an individual record, prevent duplication of data, and to look up that record in downstream services. Since this field is system-generated, it should not be supplied an explicit value during data ingestion.<br><br>It is important to distinguish that this field **does not** represent an identity related to an individual person, but rather the record of data itself. Identity data relating to a person should be relegated to [identity fields](../schema/composition.md#identity) instead. |
| `createdByBatchID` | The ID of the ingested batch that caused the record to be created. |
| `modifiedByBatchID` | The ID of the last ingested batch that caused the record to be updated. |
| `repositoryCreatedBy` | The ID of the user who created the record. |
| `repositoryLastModifiedBy` | The ID of the user who last modified the record. |

## Compatible mixins {#mixins}

>[!NOTE]
>
>The names of several mixins have changed. See the document on [mixin name updates](../mixins/name-updates.md) for more information.

Adobe provides several standard mixins for use with the [!DNL XDM Individual Profile] class. The following is a list of the most commonly used mixins for the class:

* [[!UICONTROL IdentityMap]](../mixins/profile/identitymap.md)
* [[!UICONTROL Demographic Details]](../mixins/profile/person-details.md)
* [[!UICONTROL Personal Contact Details]](../mixins/profile/personal-details.md)
* [[!UICONTROL Work Contact Details]](../mixins/profile/work-details.md)
* [[!UICONTROL Segment Membership Details]](../mixins/profile/segmentation.md)