---
title: XDM Business Account Class
description: This document provides an overview of the XDM Business Account class in Experience Data Model (XDM).
---
# [!UICONTROL XDM Business Account] class

>[!NOTE]
>
>This class is only available for organizations that have access to the B2B edition of Real-time Customer Data Platform.

[!UICONTROL XDM Business Account] is a standard Experience Data Model (XDM) class that captures the minimum required properties of a business account.

![](../../images/classes/b2b/business-account.png)

| Property | Data type |  Description |
| --- | --- | --- |
| `accountKey` | [[!UICONTROL B2B Source]](../../data-types/b2b-source.md) | A composite identifier for the account. |
| `extSourceSystemAudit` | [[!UICONTROL External Source System Audit Attributes]](../../data-types/external-source-system-audit-attributes.md) | Audit attributes for external sources related to the account. |
| `_id` | String  | A unique identifier for the record. This is a system-generated value that is separate from the `accountID`. |
| `accountID` | String  | A unique identifier for the account. |
