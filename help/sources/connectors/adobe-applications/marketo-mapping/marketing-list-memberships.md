---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping;
solution: Experience Platform
title: Mapping Marketo marketing list memberships fields to XDM
topic: overview
description: The table below contains the mappings between the fields in the Marketo marketing list memberships dataset and their corresponding XDM fields.
---

# Mapping Marketo marketing list memberships fields to XDM

The table below contains the mappings between the fields in the [!DNL Marketo] marketing list memberships dataset and their corresponding Experience Data Model (XDM) fields.

| Source dataset | XDM target field |
| -------------- | ---------------- |
| `MarketingListMember-key` | `marketingListMemberID` |
| `MarketingList-key` | `marketingListID` |
| `Person-key`| `personID` |
| `MarketingListMember-systemID` | `marketingListMemberComponents.sourceMarketingListMemberID.systemID` |
| `MarketingListMember-ID` | `marketingListMemberComponents.sourceMarketingListMemberID.ID` |
| `MarketingListMember-key` | `marketingListMemberComponents.sourceMarketingListMemberID.key` |
| `MarketingList-systemID` | `marketingListMemberComponents.sourceMarketingListID.systemID` |
| `MarketingList-ID` | `marketingListMemberComponents.sourceMarketingListID.ID` |
| `MarketingList-key` | `marketingListMemberComponents.sourceMarketingListID.key` |
| `Person-systemID` | `marketingListMemberComponents.sourcePersonID.systemID` |
| `Person-ID` | `marketingListMemberComponents.sourcePersonID.ID` |
| `Person-key` | `marketingListMemberComponents.sourcePersonID.key` |
| `createdAt` | `extSourceSystemAudit.createdDate` |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |
