---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;individual profile;fields;schemas;Schemas;identityMap;identity map;Identity map;Schema design;map;Map;union schema;union
solution: Experience Platform
title: XDM Individual Profile Class
topic-legacy: overview
description: This document provides an overview of the XDM Individual Profile class.
exl-id: 83b22462-79ce-4024-aa50-a9bd800c0f81
---
# [!DNL XDM Individual Profile] class

[!DNL XDM Individual Profile] is a standard Experience Data Model (XDM) class which forms a singular representation (or "profile") of an individual person. Specifically, the class (and its compatible mixins) captures the attributes and interests of both identified and partially identified individuals that interact with your brand.

Profiles can range from anonymous behavioral signals (such as browser cookies), to highly identified profiles containing detailed information such as name, date of birth, location, and email address. As a profile grows, it becomes a robust repository of personal information, identities, contact details, and communication preferences for an individual. For more high-level information on the use of this class in the Platform ecosystem, refer to the [XDM overview](../home.md#data-behaviors).

The [!DNL XDM Individual Profile] class itself provides several system-generated values that are automatically populated when data is ingested, whereas all other fields must be added through the use of [compatible schema field groups](#field-groups):

![](../images/classes/individual-profile.png)

| Property | Description |
| --- | --- |
| `_repo` | An object containing the following [!UICONTROL DateTime] fields: <ul><li>`createDate`: The date and time when the resource was created in the data store, such as when data was first ingested.</li><li>`modifyDate`: The date and time when the resource was last modified.</li></ul> |
| `_id` |  A unique identifier for the record. This field is used to track the uniqueness of an individual record, prevent duplication of data, and to look up that record in downstream services.<br><br>It is important to distinguish that this field **does not** represent an identity related to an individual person, but rather the record of data itself. Identity data relating to a person should be relegated to [identity fields](../schema/composition.md#identity) instead. |
| `createdByBatchID` | The ID of the ingested batch that caused the record to be created. |
| `modifiedByBatchID` | The ID of the last ingested batch that caused the record to be updated. |
| `personID` | A unique identifier for the individual person this record relates to. This field does not necessarily represent an identity related to the person unless it is also designated as an [identity field](../schema/composition.md#identity). |
| `repositoryCreatedBy` | The ID of the user who created the record. |
| `repositoryLastModifiedBy` | The ID of the user who last modified the record. |

## Compatible field groups {#field-groups}

>[!NOTE]
>
>The names of several field groups have changed. See the document on [field group name updates](../field-groups/name-updates.md) for more information.

Adobe provides several standard field groups for use with the [!DNL XDM Individual Profile] class. The following is a list of some commonly used field groups for the class:

* [[!UICONTROL IdentityMap]](../field-groups/profile/identitymap.md)
* [[!UICONTROL Demographic Details]](../field-groups/profile/demographic-details.md)
* [[!UICONTROL Personal Contact Details]](../field-groups/profile/personal-contact-details.md)
* [[!UICONTROL Work Contact Details]](../field-groups/profile/work-contact-details.md)
* [[!UICONTROL Segment Membership Details]](../field-groups/profile/segmentation.md)

For a complete list of all compatible field groups for [!DNL XDM Individual Profile], refer to the [XDM GitHub repo](https://github.com/adobe/xdm/tree/master/components/mixins/profile).
