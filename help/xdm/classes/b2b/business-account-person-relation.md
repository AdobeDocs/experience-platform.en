---
title: XDM Business Account Person Relation Class
description: This document provides an overview of the XDM Business Account Person Relation class in Experience Data Model (XDM).
exl-id: d51abe9b-d936-4c84-96e2-35a81ca6b67f
---
# [!UICONTROL XDM Business Account Person Relation] class

>[!IMPORTANT]
>
>This class is intended to be used by organizations with access to [Adobe Real-Time Customer Data Platform B2B Edition](../../../rtcdp/b2b-overview.md). You must have access to Real-Time CDP B2B Edition in order for this class to participate in [Real-time Customer Profile](../../../profile/home.md).

[!UICONTROL XDM Business Account Person Relation] is a standard Experience Data Model (XDM) class that captures the minimum required properties of a person that is associated with a business account.

![The structure of the XDM Business Account Person Relation class as it appears in the UI](../../images/classes/b2b/business-account-person-relation.png)

| Property | Data type |  Description |
| --- | --- | --- |
| `accountKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the account in the account-person relationship. |
| `accountPersonKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the account-person relation entity. |
| `extSourceSystemAudit` | [[!UICONTROL External Source System Audit Attributes]](../../data-types/external-source-system-audit-attributes.md) | If the account-person relationship comes from an external source system, this object captures audit attributes for that system. |
| `personKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the person in the account-person relationship. |
| `_id` | String  | A unique identifier for the record. This is a system-generated value that is separate from the other ID fields captured by the class. |
| `accountID` | String  | A unique identifier for the account in the account-person relationship. |
| `accountPersonID` | String  | A unique identifier for the account-person relation entity. |
| `currencyCode` | String  | The ISO 4217 currency code used for the relationship between the account and the person. |
| `isActive` | Boolean  | Indicates whether the relationship between the account and the person is active. |
| `isDeleted` | Boolean  | Indicates whether this account-person relationship has been deleted in Marketo Engage.<br><br>When using the [Marketo source connector](../../../sources/connectors/adobe-applications/marketo/marketo.md), any records that are deleted in Marketo are automatically reflected in Real-time Customer Profile. However, records relating to these profiles may still persist in the Data Lake. By setting `isDeleted` to `true`, you can use the field to filter out which records have been deleted from your sources when querying the Data Lake. |
| `isDirect` | Boolean  | Indicates whether this is a direct relationship between the account and the person. |
| `isPrimary` | Boolean  | Indicates whether the person is the primary contact on this account. |
| `personID` | String  | A unique identifier for the person in the account-person relationship. |
| `personRoles` | Array of strings  | Lists the roles for the person in the account-person relationship. |
| `relationEndDate` | DateTime | The date when the relationship between the account and the person ended. |
| `relationStartDate` | DateTime | The date when the relationship between the account and the person started. |
| `relationshipSource` | String | The source of the account-person relation. |

{style="table-layout:auto"}

See the guide on [schema relationships in Real-Time CDP B2B Edition](../../tutorials/relationship-b2b.md) to learn how this class conceptually relates to the other B2B classes and how you can establish these relationships in the Adobe Experience Platform UI.
