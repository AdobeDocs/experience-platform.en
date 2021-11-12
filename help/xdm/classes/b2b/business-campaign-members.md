---
title: XDM Business Campaign Members Class
description: This document provides an overview of the XDM Business Campaign Members class in Experience Data Model (XDM).
exl-id: a39eac7d-46ee-4e9c-a1c0-4dbb63f2c813
---
# [!UICONTROL XDM Business Campaign Members] class

[!UICONTROL XDM Business Campaign Members] is a standard Experience Data Model (XDM) class that describes a contact or lead associated with a business campaign.

![](../../images/classes/b2b/business-campaign-members.png)

| Property | Data type |  Description |
| --- | --- | --- |
| `campaignKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the associated campaign. |
| `campaignMemberKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the campaign membership entity. |
| `extSourceSystemAudit` | [[!UICONTROL External Source System Audit Attributes]](../../data-types/external-source-system-audit-attributes.md) | If the campaign membership comes from an external source system, this object captures audit attributes for that system. |
| `personKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the person who is a member of the associated campaign. |
| `_id` | String  | A unique identifier for the record. This is a system-generated value that is separate from the `campaignMemberID`. |
| `campaignID` | String  | A unique ID for the associated campaign. |
| `campaignMemberID` | String  | A unique ID for the campaign membership entity. |
| `personId` | String  | A unique ID for the person who is a member of the associated campaign. |

{style="table-layout:auto"}

See the guide on [schema relationships in Real-time CDP B2B Edition](../../tutorials/relationship-b2b.md) to learn how this class conceptually relates to the other B2B classes and how you can establish these relationships in the Adobe Experience Platform UI.
