---
title: XDM Business Opportunity Person Relation Class
description: This document provides an overview of the XDM Business Opportunity Person Relation class in Experience Data Model (XDM).
---
# [!UICONTROL XDM Business Opportunity Person Relation] class

>[!NOTE]
>
>This class is only available for organizations that have access to the B2B edition of Real-time Customer Data Platform.

[!UICONTROL XDM Business Opportunity Person Relation] is a standard Experience Data Model (XDM) class that captures the minimum required properties of a person that is associated with a business opportunity.

![](../../images/classes/b2b/business-opportunity-person-relation.png)

| Property | Data type |  Description |
| --- | --- | --- |
| `extSourceSystemAudit` | [[!UICONTROL External Source System Audit Attributes]](../../data-types/external-source-system-audit-attributes.md) | Audit attributes for external sources related to the account. |
| `opportunityKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the opportunity in the opportunity-person relationship. |
| `opportunityPersonKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the relationship between the opportunity and the person. |
| `personKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the person in the opportunity-person relationship. |
| `_id` | String  | A unique identifier for the record. This is a system-generated value that is separate from the other ID fields captured by the class. |
| `isPrimary` | Boolean  | Indicates whether the person is the primary contact for this opportunity. |
| `personID` | String  | A unique identifier for the person in the opportunity-person relationship. |
| `personRole` | String  | The role for the person in the opportunity-person relationship. |
