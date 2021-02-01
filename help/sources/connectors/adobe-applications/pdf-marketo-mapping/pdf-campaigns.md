---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping;marketo campaigns
solution: Experience Platform
title: Mapping Marketo campaigns fields to XDM
topic: overview
description: The table below contains the mappings between the Marketo campaigns dataset and its corresponding XDM fields.
---

# Mapping Marketo campaigns fields to XDM

The table below contains the mappings between the Marketo campaigns dataset and their corresponding Experience Data Model (XDM) fields.

| Source dataset | XDM target field |
| -------------- | ---------------- |
| `Campaign-key` | `campaignID` |
| `name` | `campaignName` |
| `description` | `campaignDescription` |
| `type` | `campaignType` |
| `status` | `campaignStatus` |
| `channel` | `channelName` |
| `createdAt` | `extSourceSystemAudit.createdDate` |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |

## Next steps

By reading this document, you have gained insight on the mapping relationship between your Marketo campaigns dataset and their corresponding XDM fields. See the Marketo tutorial to complete your Marketo campaigns mapping set.
