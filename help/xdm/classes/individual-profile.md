---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;individual profile;fields;schemas;Schemas;identityMap;identity map;Identity map;Schema design;map;Map;union schema;union
solution: Experience Platform
title: XDM Individual Profile class
topic: overview
description: This document provides an overview of the XDM Individual Profile class.
---

# [!DNL XDM Individual Profile] class

[!DNL XDM Individual Profile] is a standard XDM class which forms a singular representation (or "profile") of the attributes and interests of both identified and partially identified individuals.

Profiles can range from anonymous behavioral signals (such as browser cookies), to highly identified profiles containing detailed information such as name, date of birth, location, and email address. As a profile grows, it becomes a robust repository of personal information, identities, contact details, and communication preferences for an individual. 

The [!DNL XDM Individual Profile] class itself provides several system-generated values that are automatically populated when data is ingested, whereas all other fields must be added through the use of [compatible mixins](#mixins):

![](../images/classes/individual-profile/structure.png)

| Property | Description |
| --- | --- |
| `_repo` | An object containing the following [!UICONTROL DateTime] fields: <ul><li>`createDate`: The date and time when the resource was created in the data store, such as when data was first ingested.</li><li>`modifyDate`: The date and time when the resource was last modified.</li></ul> |
| `_id` | A unique string identifier for the record, used for lookup purposes in the API. |
| `createdByBatchID` | The ID of the ingested batch that caused the record to be created. |
| `modifiedByBatchID` | The ID of the last ingested batch that caused the record to be updated. |
| `repositoryCreatedBy` | The ID of the user who created the record. |
| `repositoryLastModifiedBy` | The ID of the user who last modified the record. |

## Compatible mixins {#mixins}

Adobe provides several standard mixins for use with the [!DNL XDM Individual Profile] class. The following is a list of the most commonly used mixins for the class:

* [!UICONTROL IdentityMap]
* [!UICONTROL Profile person details]
* [!UICONTROL Profile personal details]
* [!UICONTROL Profile work details]
* [!UICONTROL Profile segmentation]
* [!UICONTROL Profile preferences details]
* [!UICONTROL Profile subscriptions]
* [!UICONTROL Profile test details]
* [!UICONTROL Profile push details]
* [!UICONTROL Profile owing entity details]
* [!UICONTROL Profile direct marketing]