---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping;Campaign memberships mapping;campaign memberships mapping
solution: Experience Platform
title: Campaign memberships mapping fields
topic: overview
description: The table below contains the mappings between the Marketo Campaign memberships dataset and their corresponding XDM fields.
---

# Campaign memberships mapping fields

The table below contains the mappings between the [!DNL Marketo] Campaign memberships datasets and their corresponding XDM fields.

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