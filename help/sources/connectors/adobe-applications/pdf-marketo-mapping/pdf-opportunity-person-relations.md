---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping
solution: Experience Platform
title: Mapping Marketo opportunity person relations fields to XDM
topic: overview
description: The table below contains the mappings between the Marketo Opportunity person relations dataset and their corresponding XDM fields.
---

# Mapping Marketo opportunity person relations fields to XDM

The table below contains the mappings between the Marketo opportunity person relations dataset and their corresponding Experience Data Model (XDM) fields.

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `id` | `opportunityPersonID` | Primary Identity |
| `mktoCdpSfdcId` | `extSourceSystemAudit.externalID` | Secondary Identity |
| `mktoCdpOpptyId` | `opportunityID` | Relationship |
| `leadId` | `personID` | Relationship |
| `role` | `personRole` |
| `isPrimary` | `isPrimary` |
| `createdAt` | `extSourceSystemAudit.createdDate` |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |

## Next steps

By reading this document, you have gained insight on the mapping relationship between your Marketo opportunity person relations dataset and their corresponding XDM fields. See the Marketo tutorial to complete your Marketo opportunity person relations mapping set.
