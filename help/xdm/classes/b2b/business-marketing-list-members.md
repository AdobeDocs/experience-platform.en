---
title: XDM Business Marketing List Members Class
description: This document provides an overview of the XDM Business Marketing List Members class in Experience Data Model (XDM).
---
# [!UICONTROL XDM Business Marketing List Members] class

>[!NOTE]
>
>This class is only available for organizations that have access to the B2B edition of Real-time Customer Data Platform.

[!UICONTROL XDM Business Marketing List Members] is a standard Experience Data Model (XDM) class that describes members, persons, or contacts associated with a marketing list.

![](../../images/classes/b2b/business-marketing-list-members.png)

| Property | Data type |  Description |
| --- | --- | --- |
| `extSourceSystemAudit` | [[!UICONTROL External Source System Audit Attributes]](../../data-types/external-source-system-audit-attributes.md) | If the marketing list membership comes from an external source system, this object captures audit attributes for that system. |
| `marketingListKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the marketing list that the person is a member of. |
| `marketingListMemberKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the marketing list membership entity. |
| `personKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the person who is a member of the marketing list. |
| `_id` | String  | A unique identifier for the record. This is a system-generated value that is separate from the `marketingListMemberID`. |
| `marketingListID` | String  | A unique ID for the marketing list. |
| `marketingListMemberID` | String  | A unique ID for the marketing list membership entity. |
| `personId` | String  | A unique ID for the person. |
