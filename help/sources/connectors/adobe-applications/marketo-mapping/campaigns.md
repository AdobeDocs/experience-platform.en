---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping;marketo campaigns
solution: Experience Platform
title: Mapping Marketo campaigns fields to XDM
topic: overview
description: The table below contains the mappings between the Marketo campaigns dataset and its corresponding XDM fields.
---

# Mapping Marketo campaigns fields to XDM

The table below contains the mappings between the [!DNL Marketo] campaigns dataset and their corresponding Experience Data Model (XDM) fields.

| Source dataset | XDM target field |
| -------------- | ---------------- |
| `Campaign-key` | `campaignID` |
| `name` | `campaignName` |
| `description` | `campaignDescription` |
| `type` | `campaignType` |
| `status` | `campaignStatus` |
| `channel` | `channelName` |
| `Campaign-systemID` | `campaignComponents.sourceCampaignID.systemID` |
| `Campaign-ID` | `campaignComponents.sourceCampaignID.ID` |
| `Campaign-key` | `campaignComponents.sourceCampaignID.key` |
| `createdAt` | `extSourceSystemAudit.createdDate` |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |

## Next steps

By reading this document, you have gained insight on the mapping relationship between your [!DNL Marketo] campaigns dataset and their corresponding XDM fields. See the tutorial on [creating a [!DNL Marketo] source connection](../../../tutorials/ui/create/adobe-applications/marketo.md) to complete your [!DNL Marketo] campaigns mapping set.
