---
title: XDM Business Opportunity Person Relation Class
description: This document provides an overview of the XDM Business Opportunity Person Relation class in Experience Data Model (XDM).
---
# [!UICONTROL XDM Business Opportunity Person Relation] class (Beta)

>[!IMPORTANT]
>
>This class is available as part of Real-time Customer Data Platform B2B Edition, which is currently in beta. The documentation and functionality are subject to change.

[!UICONTROL XDM Business Opportunity Person Relation] is a standard Experience Data Model (XDM) class that captures the minimum required properties of a person that is associated with a business opportunity.

![](../../images/classes/b2b/business-opportunity-person-relation.png)

| Property | Data type | Description |
| --- | --- | --- |
| `extSourceSystemAudit` | [[!UICONTROL External Source System Audit Attributes]](../../data-types/external-source-system-audit-attributes.md) | If the business person relation comes from an external source system, this object captures audit attributes for that system. |
| `opportunityKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the opportunity in the opportunity-person relationship. |
| `opportunityPersonKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the opportunity-person relation entity. |
| `personKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the person in the opportunity-person relationship. |
| `_id` | String | A unique identifier for the record. This is a system-generated value that is separate from the other ID fields captured by the class. |
| `opportunityID` | String | A unique identifier for the opportunity in the opportunity-person relationship. |
| `opportunityPersonID` | String | A unique identifier for the opportunity-person relation entity |
| `isPrimary` | Boolean | Indicates whether the person is the primary contact for this opportunity. |
| `personID` | String | A unique identifier for the person in the opportunity-person relationship. |
| `personRole` | String | The role for the person in the opportunity-person relationship. |

{style="table-layout:auto"}

See the guide on [schema relationships in Real-time CDP B2B Edition](../../tutorials/relationship-b2b.md) to learn how this class conceptually relates to the other B2B classes and how you can establish these relationships in the Adobe Experience Platform UI.
