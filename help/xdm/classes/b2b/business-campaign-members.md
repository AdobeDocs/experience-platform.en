---
title: XDM Business Campaign Members Class
description: This document provides an overview of the XDM Business Campaign Members class in Experience Data Model (XDM).
---
# [!UICONTROL XDM Business Campaign Members] class

>[!NOTE]
>
>This class is only available for organizations that have access to the B2B edition of Real-time Customer Data Platform.

[!UICONTROL XDM Business Campaign Members] is a standard Experience Data Model (XDM) class that describes a contact or lead associated with a business campaign.

![](../../images/classes/b2b/business-campaign-members.png)

| Property | Data type |  Description |
| --- | --- | --- |
| `campaignKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the campaign. |
| `campaignMemberKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the campaign membership. |
| `extSourceSystemAudit` | [[!UICONTROL External Source System Audit Attributes]](../../data-types/external-source-system-audit-attributes.md) | If the campaign membership comes from an external source system, this object captures audit attributes for that system. |
| `personKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the person associated with the campaign membership. |
| `_id` | String  | A unique identifier for the record. This is a system-generated value that is separate from the `campaignMemberID`. |
| `campaignID` | String  | A unique ID for the campaign. |
| `campaignMemberID` | String  | A unique ID for the campaign membership. |
| `personId` | String  | A unique ID for the person associated with the campaign membership. |
