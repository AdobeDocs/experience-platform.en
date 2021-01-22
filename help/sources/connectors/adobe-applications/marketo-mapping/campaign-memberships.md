---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping;Campaign memberships mapping;campaign memberships mapping
solution: Experience Platform
title: Mapping Marketo campaign memberships fields to XDM
topic: overview
description: The table below contains the mappings between the Marketo Campaign memberships dataset and their corresponding XDM fields.
---

# Mapping Marketo campaign memberships fields to XDM

The table below contains the mappings between the [!DNL Marketo] Campaign memberships dataset and their corresponding Experience Data Model (XDM) fields.

| Source dataset | XDM target field |
| -------------- | ---------------- |
| `CampaignMember-key` | `campaignMemberID` |
| `Campaign-key` | `campaignID` |
| `Person-key` | `personID` |
| `AcquiredByCampaign-key` | `acquiredByCampaignID` |
| `Success` | `hasReachedSuccess` |
| `Exhausted` | `isExhausted` |
| `Status` | `memberStatus` |
| `Status Reason` | `memberStatusReason` |
| `Member Date` | `membershipDate` |
| `Cadence` | `nurtureCadence` |
| `Track Name` | `nurtureTrackName` |
| `Webinar Url` | `webinarConfirmationUrl` |
| `Registration Code` | `webinarRegistrationID` |
| `CampaignMember-systemID` | `campaignMemberComponents.sourceCampaignMemberID.systemID` |
| `CampaignMember-ID` | `campaignMemberComponents.sourceCampaignMemberID.ID` |
| `CampaignMember-key` | `campaignMemberComponents.sourceCampaignMemberID.key` |
| `Campaign-systemID` | `campaignMemberComponents.sourceCampaignID.systemID` |
| `Campaign-ID` | `campaignMemberComponents.sourceCampaignID.ID` |
| `Campaign-key` | `campaignMemberComponents.sourceCampaignID.key` |
| `Person-systemID` | `campaignMemberComponents.sourcePersonID.systemID` |
| `Person-ID` | `campaignMemberComponents.sourcePersonID.ID` |
| `Person-key` | `campaignMemberComponents.sourcePersonID.key` |
| `AcquiredByCampaign-systemID` | `campaignMemberComponents.sourceAcquiredByCampaignID.systemID` |
| `AcquiredByCampaign-ID` | `campaignMemberComponents.sourceAcquiredByCampaignID.ID` |
| `AcquiredByCampaign-key` | `campaignMemberComponents.sourceAcquiredByCampaignID.key` |
| `Success` | `campaignMemberComponents.hasReachedSuccess` |
| `Status` | `campaignMemberComponents.memberStatus` |
| `Status Reason` | `campaignMemberComponents.memberStatusReason` |

## Next steps

By reading this document, you have gained insight on the mapping relationship between your [!DNL Marketo] campaigns memberships dataset and their corresponding XDM fields. See the tutorial on [creating a [!DNL Marketo] source connection](../../../tutorials/ui/create/adobe-applications/marketo.md) to complete your [!DNL Marketo] campaigns memberships mapping set.
