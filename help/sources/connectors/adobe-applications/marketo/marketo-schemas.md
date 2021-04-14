---
keywords: Experience Platform;home;popular topics;Marketo source connector;Marketo connector;Marketo source;Marketo
solution: Experience Platform
title: Marketo B2B schemas
topic: overview
description: This document provides an overview of custom B2B schemas required when creating a Marketo Engage source connector.
---

# (Beta) [!DNL Marketo Engage] schemas

This document provides an overview of B2B schemas required when creating a [!DNL Marketo Engage] source connector.

>[!NOTE]
>
>All schemas are enabled for [!DNL Real-time Customer Profile]

| Schema name | Base class | Mixins | Primary identity | Primary identity namespace | Secondary identity | Secondary identity namespace | Relationship | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [!DNL Marketo] Company {MUNCHKIN_ID} | XDM Business Account | XDM Business Account Details | `accountID` in the base class | `marketo_company_{MUNCHKIN_ID}` | `extSourceSystemAudit.externalID` in the base class | `salesforce_account_{SALESFORCE_ORGANIZATION_ID}` | <ul><li>`accountParentID` in XDM Business Account Details mixin</li><li>Type: one-to-one</li><li>Reference schema: Marketo Company {MUNCHKIN_ID}</li><li>Namespace: `marketo_company_{MUNCHKIN_ID}`</li></ul> |