---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping;Marking lists mapping;marketing lists mapping;
solution: Experience Platform
title: Mapping Marketo marketing lists fields to XDM
topic: overview
description: The table below contains the mappings between the fields in the Marketo marketing lists dataset and their corresponding XDM fields.
---

# Mapping Marketo marketing lists fields to XDM

The table below contains the mappings between the fields in the [!DNL Marketo] marketing lists dataset and their corresponding Experience Data Model (XDM) fields.

| Source dataset | XDM target field |
| -------------- | ---------------- |
| `MarketingList-key` | `marketingListID` |
| `name` | `marketingListName` |
| `description` | `marketingListDescription` |
| `MarketingList-systemID` | `marketingListComponents.sourceMarketingListID.systemID` |
| `MarketingList-ID` | `marketingListComponents.sourceMarketingListID.ID` |
| `MarketingList-key` | `marketingListComponents.sourceMarketingListID.key` |
| `createdAt` | `extSourceSystemAudit.createdDate` |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |

## Next steps

By reading this document, you have gained insight on the mapping relationship between your [!DNL Marketo] marketing lists dataset and their corresponding XDM fields. See the tutorial on [creating a [!DNL Marketo] source connection](../../../tutorials/ui/create/adobe-applications/marketo.md) to complete your [!DNL Marketo] marketing lists mapping set.
