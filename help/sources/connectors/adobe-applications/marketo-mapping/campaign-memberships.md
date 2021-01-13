---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping;Program mapping;Program memberships mapping;program;program memberships
solution: Experience Platform
title: Campaign and campaign membership mapping fields
topic: overview
description: The tables below contain the mappings between the Marketo Campaign and campaign membership dataset and their corresponding XDM fields.
---

# Campaigns and campaign memberships mapping fields

The tables below contain the mappings between the [!DNL Marketo] Campaigns and campaign memberships datasets and their corresponding XDM fields.

## Campaigns

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

## Campaign memberships

| Source dataset | XDM target field |
| -------------- | ---------------- |
| CampaignMember-key | campaignMemberID |
| Campaign-key | campaignID |
| Person-key | personID |
| AcquiredByCampaign-key | acquiredByCampaignID |
| Success | hasReachedSuccess |
| Exhausted | isExhausted |
| Status | memberStatus |
| Status Reason | memberStatusReason |
| Member Date | membershipDate |
| Cadence | nurtureCadence |
| Track Name | nurtureTrackName |
| Webinar Url | webinarConfirmationUrl |
| Registration Code | webinarRegistrationID |
| CampaignMember-systemID | campaignMemberComponents.sourceCampaignMemberID.systemID |
| CampaignMember-ID | campaignMemberComponents.sourceCampaignMemberID.ID |
| CampaignMember-key | campaignMemberComponents.sourceCampaignMemberID.key |
| Campaign-systemID | campaignMemberComponents.sourceCampaignID.systemID |
| Campaign-ID | campaignMemberComponents.sourceCampaignID.ID |
| Campaign-key | campaignMemberComponents.sourceCampaignID.key |
| Person-systemID | campaignMemberComponents.sourcePersonID.systemID |
| Person-ID | campaignMemberComponents.sourcePersonID.ID |
| Person-key | campaignMemberComponents.sourcePersonID.key |
| AcquiredByCampaign-systemID | campaignMemberComponents.sourceAcquiredByCampaignID.systemID |
| AcquiredByCampaign-ID | campaignMemberComponents.sourceAcquiredByCampaignID.ID |
| AcquiredByCampaign-key | campaignMemberComponents.sourceAcquiredByCampaignID.key |
| Success | campaignMemberComponents.hasReachedSuccess |
| Status | campaignMemberComponents.memberStatus |
| Status Reason | campaignMemberComponents.memberStatusReason |