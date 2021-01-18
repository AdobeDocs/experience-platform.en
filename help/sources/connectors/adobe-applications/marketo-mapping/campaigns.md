---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping;Campaigns;campaigns;Campaigns mapping;campaigns mapping
solution: Experience Platform
title: Campaigns mapping fields
topic: overview
description: The table below contains the mappings between the Marketo campaigns dataset and its corresponding XDM fields.
---

# Campaigns mapping fields

The table below contains the mappings between the [!DNL Marketo] campaigns datasets and their corresponding XDM fields.

| Source dataset | XDM target field |
| -------------- | ---------------- |
| Campaign-key | campaignID |
| name | campaignName |
| description | campaignDescription |
| type | campaignType |
| status | campaignStatus |
| channel | channelName |
| Campaign-systemID | campaignComponents.sourceCampaignID.systemID |
| Campaign-ID | campaignComponents.sourceCampaignID.ID |
| Campaign-key | campaignComponents.sourceCampaignID.key |
| createdAt | extSourceSystemAudit.createdDate |
| updatedAt | extSourceSystemAudit.lastUpdatedDate |