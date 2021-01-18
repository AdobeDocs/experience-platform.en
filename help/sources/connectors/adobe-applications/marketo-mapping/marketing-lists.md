---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping;Marking lists mapping;marketing lists mapping;
solution: Experience Platform
title: Marketing lists mapping fields
topic: overview
description: The table below contains the mappings between the fields in the Marketo marketing lists dataset and their corresponding XDM fields.
---

# Marketing lists mapping fields

The table below contains the mappings between the fields in the [!DNL Marketo] marketing lists dataset and their corresponding XDM fields.

| Source dataset | XDM target field |
| -------------- | ---------------- |
| MarketingList-key | marketingListID |
| name | marketingListName |
| description | marketingListDescription |
| MarketingList-systemID | marketingListComponents.sourceMarketingListID.systemID |
| MarketingList-ID | marketingListComponents.sourceMarketingListID.ID |
| MarketingList-key | marketingListComponents.sourceMarketingListID.key |
| createdAt | extSourceSystemAudit.createdDate |
| updatedAt | extSourceSystemAudit.lastUpdatedDate |