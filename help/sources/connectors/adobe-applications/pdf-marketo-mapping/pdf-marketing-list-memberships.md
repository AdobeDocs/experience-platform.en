---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping;
solution: Experience Platform
title: Mapping Marketo marketing list memberships fields to XDM
topic: overview
description: The table below contains the mappings between the fields in the Marketo marketing list memberships dataset and their corresponding XDM fields.
---

# Mapping Marketo marketing list memberships fields to XDM

The table below contains the mappings between the fields in the Marketo marketing list memberships dataset and their corresponding Experience Data Model (XDM) fields.

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `marketingListMemberID` | `marketingListMemberID` | Primary Identity |
| `marketingListID` | `marketingListID` | Relationship |
| `personID`| `personID` | Relationship |
| `createdAt` | `extSourceSystemAudit.createdDate` |

## Next steps

By reading this document, you have gained insight on the mapping relationship between your Marketo marketing list memberships dataset and their corresponding XDM fields. See the Marketo tutorial to complete your Marketo marketing list memberships mapping set.
