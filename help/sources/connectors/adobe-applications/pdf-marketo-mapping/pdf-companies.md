---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping;
solution: Experience Platform
title: Mapping Marketo companies fields to XDM
topic: overview
description: The table below contains the mappings between the Marketo companies dataset and their corresponding XDM fields.
---

# Mapping Marketo companies fields to XDM

The table below contains the mappings between the Marketo companies dataset and their corresponding Experience Data Model (XDM) fields.

| Source dataset | XDM target field |
| -------------- | ---------------- |
| `Account-key` | `accountID` |
| `createdAt` | `extSourceSystemAudit.createdDate` |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |
| `billingCity` | `accountBillingAddress.city` |
| `billingCountry` | `accountBillingAddress.country` |
| `billingPostalCode` | `accountBillingAddress.postalCode` |
| `billingState` | `accountBillingAddress.state` |
| `billingStreet` | `accountBillingAddress.street1` |
| `annualRevenue` | `accountOrganization.annualRevenue.amount` |
| `sicCode` | `accountOrganization.SICCode` |
| `industry` | `accountOrganization.industry` |
| `numberOfEmployees` | `accountOrganization.numberOfEmployees` |
| `website` | `accountOrganization.website` |
| `mainPhone` | `accountPhone.number` |
| `company` | `accountName` |
| `companyNotes` | `accountDescription` |
| `site` | `accountSite` |
| `AccountParentKey` | `accountParentID` |

## Next steps

By reading this document, you have gained insight on the mapping relationship between your Marketo companies dataset and their corresponding XDM fields. See the Marketo tutorial to complete your Marketo companies mapping set.
