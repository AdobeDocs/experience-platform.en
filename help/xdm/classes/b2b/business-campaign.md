---
title: XDM Business Campaign Class
description: This document provides an overview of the XDM Business Campaign class in Experience Data Model (XDM).
exl-id: 4e3228a1-74be-43af-b355-45d84afb1611
---
# [!UICONTROL XDM Business Campaign] class

>[!IMPORTANT]
>
>This class is intended to be used by organizations with access to [Adobe Real-Time Customer Data Platform B2B Edition](../../../rtcdp/b2b-overview.md). You must have access to Real-Time CDP B2B Edition in order for this class to participate in [Real-Time Customer Profile](../../../profile/home.md).

[!UICONTROL XDM Business Campaign] is a standard Experience Data Model (XDM) class that captures the minimum required properties of a business campaign.

![The structure of the XDM Business Campaign class as it appears in the UI](../../images/classes/b2b/business-campaign.png)

| Property | Data type |  Description |
| --- | --- | --- |
| `campaignKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the campaign entity. |
| `extSourceSystemAudit` | [[!UICONTROL External Source System Audit Attributes]](../../data-types/external-source-system-audit-attributes.md) | If the campaign comes from an external source system, this object captures audit attributes for that system. |
| `_id` | String  | A unique identifier for the record. This is a system-generated value that is separate from the `campaignID`. |
| `campaignDescription` | String  | A description for the campaign. |
| `campaignID` | String  | A unique identifier for the campaign entity. |
| `campaignName` | String  | The name of the campaign. |
| `campaignType` | String  | The campaign type or target audience. |

{style="table-layout:auto"}

To learn how this class conceptually relates to the other B2B classes and how you can establish these relationships in the Adobe Experience Platform UI, see the guide on [schema relationships in Real-Time CDP B2B Edition](../../tutorials/relationship-b2b.md) 

For additional fields that are compatible with this class, see the field group reference for [[!UICONTROL XDM Business Campaign Details]](../../field-groups/b2b-campaign/details.md).
