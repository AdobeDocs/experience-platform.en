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
| `id` | `campaignMemberID` | Primary Identity |
| `programId` | `campaignID` | Relationship |
| `leadId` | `personID` | Relationship |
| `acquiredByCampaignID` | `acquiredByCampaignID` |
| `reachedSuccess` | `hasReachedSuccess` |
| `isExhausted` | `isExhausted` |
| `statusName` | `memberStatus` |
| `statusReason` | `memberStatusReason` |
| `membershipDate` | `membershipDate` |
| `nurtureCadence` | `nurtureCadence` |
| `trackName` | `nurtureTrackName` |
| `webinarUrl` | `webinarConfirmationUrl` |
| `registrationCode` | `webinarRegistrationID` |
| `reachedSuccessDate` | `reachedSuccessDate` |
| `createdAt` | `extSourceSystemAudit.createdDate` |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |

## Next steps

By reading this document, you have gained insight on the mapping relationship between your Marketo campaigns memberships dataset and their corresponding XDM fields. See the Marketo tutorial to complete your Marketo campaigns memberships mapping set.
