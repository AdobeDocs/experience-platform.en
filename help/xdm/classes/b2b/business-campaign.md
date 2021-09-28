---
title: XDM Business Campaign Class
description: This document provides an overview of the XDM Business Campaign class in Experience Data Model (XDM).
exl-id: 4e3228a1-74be-43af-b355-45d84afb1611
---
# [!UICONTROL XDM Business Campaign] class (Beta)

>[!IMPORTANT]
>
>This class is available as part of Real-time Customer Data Platform B2B Edition, which is currently in beta. The documentation and functionality are subject to change.

[!UICONTROL XDM Business Campaign] is a standard Experience Data Model (XDM) class that captures the minimum required properties of a business campaign.

![](../../images/classes/b2b/business-campaign.png)

| Property | Data type |  Description |
| --- | --- | --- |
| `campaignKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the campaign entity. |
| `extSourceSystemAudit` | [[!UICONTROL External Source System Audit Attributes]](../../data-types/external-source-system-audit-attributes.md) | If the campaign comes from an external source system, this object captures audit attributes for that system. |
| `_id` | String  | A unique identifier for the record. This is a system-generated value that is separate from the `campaignID`. |
| `campaignDescription` | String  | A description for the campaign. |
| `campaignID` | String  | A unique identifier for the campaign entity. |
| `campaignName` | String  | The name of the campaign. |
| `campaignType` | String  | The campaign type or target audience. |

See the guide on [schema relationships in Real-time CDP B2B Edition](../../tutorials/relationship-b2b.md) to learn how this class conceptually relates to the other B2B classes and how you can establish these relationships in the Adobe Experience Platform UI.
