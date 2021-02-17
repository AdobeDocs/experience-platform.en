---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping;Named accounts mapping;named accounts mapping;named accounts
solution: Experience Platform
title: Mapping Marketo named accounts fields to XDM
topic: overview
description: The table below contains the mappings between the Marketo named accounts dataset and their corresponding XDM fields.
---

# Mapping Marketo named accounts fields to XDM

The table below contains the mappings between the Marketo named accounts dataset and their corresponding Experience Data Model (XDM) fields.

>[!IMPORTANT]
>
>The named accounts dataset is only necessary with Marketo's account-based marketing (ABM) feature. If you are not using ABM, then you do not need to set up mappings for named accounts.

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `id` | `accountID` | Primary Identity |
| `crmGuid` | `extSourceSystemAudit.externalID` | Secondary Identity |
| `createdAt` | `extSourceSystemAudit.createdDate` |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |
| `city` | `accountBillingAddress.city` |
| `country` | `accountBillingAddress.country` |
| `state` | `accountBillingAddress.state` |
| `annualRevenue` | `accountOrganization.annualRevenue.amount` |
| `sicCode` | `accountOrganization.SICCode` |
| `industry` | `accountOrganization.industry` |
| `logoUrl` | `accountOrganization.logoUrl` |
| `numberOfEmployees` | `accountOrganization.numberOfEmployees` |
| `name` | `accountName` |
| `parentAccountId` | `accountParentID` |
| `sourceType` | `accountSourceType` |

## Next steps

By reading this document, you have gained insight on the mapping relationship between your Marketo named accounts dataset and their corresponding XDM fields. See the Marketo tutorial to complete your Marketo named accounts mapping set.
