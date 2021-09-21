---
title: XDM Business Marketing List Class
description: This document provides an overview of the XDM Business Marketing List class in Experience Data Model (XDM).
---
# [!UICONTROL XDM Business Marketing List] class

>[!NOTE]
>
>This class is only available for organizations that have access to the B2B edition of Real-time Customer Data Platform.

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
