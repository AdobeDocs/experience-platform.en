---
title: XDM Business Opportunity Class
description: This document provides an overview of the XDM Business Opportunity class in Experience Data Model (XDM).
---
# [!UICONTROL XDM Business Opportunity] class

>[!NOTE]
>
>This class is only available for organizations that have access to Real-time Customer Data Platform B2B Edition.

[!UICONTROL XDM Business Opportunity] is a standard Experience Data Model (XDM) class that captures the minimum required properties of a business opportunity.

![](../../images/classes/b2b/business-opportunity.png)

| Property | Data type |  Description |
| --- | --- | --- |
| `accountKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the account this opportunity is associated with. |
| `extSourceSystemAudit` | [[!UICONTROL External Source System Audit Attributes]](../../data-types/external-source-system-audit-attributes.md) | If the opportunity comes from an external source system, this object captures audit attributes for that system. |
| `opportunityKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the opportunity entity. |
| `_id` | String  | A unique identifier for the record. This is a system-generated value that is separate from the `opportunityID`. |
| `accountID` | String  | A unique ID for the account this opportunity is associated with. |
| `opportunityDescription` | String  | A description for the opportunity. |
| `opportunityID` | String  | A unique ID for the opportunity entity. |
| `opportunityName` | String  | The name of the opportunity. |
| `opportunityStage` | String  | The sales stage of the opportunity. |
| `opportunityType` | String  | The type of opportunity. |

See the guide on [schema relationships in Real-time CDP B2B Edition](../../tutorials/relationship-b2b.md) to learn how this class conceptually relates to the other B2B classes and how you can establish these relationships in the Adobe Experience Platform UI.
