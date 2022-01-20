---
title: XDM Business Marketing List Class
description: This document provides an overview of the XDM Business Marketing List class in Experience Data Model (XDM).
exl-id: 510c5608-054d-4bed-91eb-22d84b5dc625
---
# [!UICONTROL XDM Business Marketing List] class

>[!IMPORTANT]
>
>This class is intended to be used by organizations with access to [Real-time Customer Data Platform B2B Edition](../../../rtcdp/b2b-overview.md). You must have access to Real-time CDP B2B Edition in order for this class to participate in [Real-time Customer Profile](../../../profile/home.md).

[!UICONTROL XDM Business Marketing List] is a standard Experience Data Model (XDM) class that captures the minimum required properties of a marketing list. Marketing lists allow you to prioritize on prospect clients who are most likely to buy your product.

![](../../images/classes/b2b/business-marketing-list.png)

| Property | Data type |  Description |
| --- | --- | --- |
| `extSourceSystemAudit` | [[!UICONTROL External Source System Audit Attributes]](../../data-types/external-source-system-audit-attributes.md) | If the marketing list comes from an external source system, this object captures audit attributes for that system. |
| `marketingListKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the marketing list entity. |
| `_id` | String  | A unique identifier for the record. This is a system-generated value that is separate from the `marketingListID`. |
| `marketingListDescription` | String  | A description for the marketing list. |
| `marketingListID` | String  | A unique ID for the marketing list entity. |
| `marketingListName` | String  | The name of the marketing list. |

{style="table-layout:auto"}

See the guide on [schema relationships in Real-time CDP B2B Edition](../../tutorials/relationship-b2b.md) to learn how this class conceptually relates to the other B2B classes and how you can establish these relationships in the Adobe Experience Platform UI.
