---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping;Campaign memberships mapping;campaign memberships mapping
solution: Experience Platform
title: Mapping Marketo campaign memberships fields to XDM
topic: overview
description: The table below contains the mappings between the Marketo Campaign memberships dataset and their corresponding XDM fields.
---

# Mapping Marketo campaign memberships fields to XDM

The table below contains the mappings between the Marketo Campaign memberships dataset and their corresponding Experience Data Model (XDM) fields.

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `Id` | `campaignMemberID` | Primary Identity |
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
| `reachedSuccessDate` | `reachedSuccessDate` |
| `createdAt` | `extSourceSystemAudit.createdDate` |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |

## Next steps

By reading this document, you have gained insight on the mapping relationship between your Marketo campaigns memberships dataset and their corresponding XDM fields. See the Marketo tutorial to complete your Marketo campaigns memberships mapping set.
