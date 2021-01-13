---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping;Activities mapping;activities mapping;activities
solution: Experience Platform
title: Marketing lists and marketing list membership mapping fields
topic: overview
description: The tables below contain the mappings between the fields in the Marketo Activities dataset and their corresponding XDM fields.
---

# Marketing lists and marketing list membership mapping fields

The tables below contain the mappings between the fields in the Marketo Activities dataset and their corresponding XDM fields.

## Marketing Lists

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

## Marketing list membershio

| Source dataset | XDM target field |
| -------------- | ---------------- |
| MarketingListMember-key | marketingListMemberID |
| MarketingList-key | marketingListID |
| Person-key | personID |
| MarketingListMember-systemID | marketingListMemberComponents.sourceMarketingListMemberID.systemID |
| MarketingListMember-ID | marketingListMemberComponents.sourceMarketingListMemberID.ID |
| MarketingListMember-key | marketingListMemberComponents.sourceMarketingListMemberID.key |
| MarketingList-systemID | marketingListMemberComponents.sourceMarketingListID.systemID |
| MarketingList-ID | marketingListMemberComponents.sourceMarketingListID.ID |
| MarketingList-key | marketingListMemberComponents.sourceMarketingListID.key |
| Person-systemID | marketingListMemberComponents.sourcePersonID.systemID |
| Person-ID | marketingListMemberComponents.sourcePersonID.ID |
| Person-key | marketingListMemberComponents.sourcePersonID.key |
| createdAt | extSourceSystemAudit.createdDate |
| updatedAt | extSourceSystemAudit.lastUpdatedDate |