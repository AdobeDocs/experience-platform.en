---
title: XDM Business Campaign Class
description: This document provides an overview of the XDM Business Campaign class in Experience Data Model (XDM).
---
# [!UICONTROL XDM Business Campaign] class

>[!NOTE]
>
>This class is only available for organizations that have access to the B2B edition of Real-time Customer Data Platform.

[!UICONTROL XDM Business Campaign] is a standard Experience Data Model (XDM) class that captures the minimum required properties of a business campaign.

![](../../images/classes/b2b/business-campaign.png)

| Property | Data type |  Description |
| --- | --- | --- |
| `campaignKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the campaign. |
| `extSourceSystemAudit` | [[!UICONTROL External Source System Audit Attributes]](../../data-types/external-source-system-audit-attributes.md) | Audit attributes for external sources related to the campaign. |
| `_id` | String  | A unique identifier for the record. This is a system-generated value that is separate from the `campaignID`. |
| `campaignDescription` | String  | A description for the campaign. |
| `campaignID` | String  | A unique identifier for the campaign. |
| `campaignName` | String  | The name of the campaign. |
| `campaignType` | String  | The campaign type or target audience. |
