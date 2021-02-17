---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping;
solution: Experience Platform
title: Mapping Marketo persons fields to XDM
topic: overview
description: The table below contains the mappings between the Marketo Persons dataset and their corresponding XDM fields.
---

# Mapping Marketo persons fields to XDM

The table below contains the mappings between the Marketo persons dataset and their corresponding Experience Data Model (XDM) fields.

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `id` | `personID` |
| `emailSuspended` | `b2b.personOptInOut._channels.email` |
| `emailSuspendedAt` | `b2b.personOptInOut.optOutDetails.email.optOutDate` |
| `emailSuspendedCause` | `b2b.personOptInOut.optOutDetails.email.optOutReason` |
| `contactCompany` | `b2b.accountID` |
| `marketingSuspended` | `b2b.isMarketingSuspended` |
| `marketingSuspendedCause` | `b2b.marketingSuspendedCause` |
| `leadScore` | `b2b.personScore` |
| `leadSource` | `b2b.personSource` |
| `leadStatus` | `b2b.personStatus` |
| `personType` | `b2b.personType` |
| `leadPartitionId` | `b2b.personGroupID` |
| `mktoCdpCnvContactPersonId` | `b2b.convertedContactID` |
| `sfdcId` | `extSourceSystemAudit.externalID` | Secondary identity |
| `createdAt` | `extSourceSystemAudit.createdDate` |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |
| `title` | `extendedWorkDetails.jobTitle` |
| `fax` | `faxPhone.number` |
| `mobilePhone` | `mobilePhone.number` |
| `firstName` | `person.name.firstName` |
| `lastName` | `person.name.lastName` |
| `middleName` | `person.name.middleName` |
| `salutation` | `person.name.courtesyTitle` |
| `dateOfBirth` | `person.birthDate` |
| `city` | `workAddress.city` |
| `country` | `workAddress.country` |
| `postalCode` | `workAddress.postalCode` |
| `state` | `workAddress.state` |
| `address` | `workAddress.street1` |
| `phone` | `workPhone.number` |
| `company` | `organizations` |
| `leadScore` | `personComponents.personSegmentTraits.personScore` |
| `leadSource` | `personComponents.personSegmentTraits.personSource` |
| `leadStatus` | `personComponents.personSegmentTraits.personStatus` |
| `personType` | `personComponents.personSegmentTraits.personType` |
| `contactCompany` | `personComponents.sourceAccountID` |
| `sfdcContactId` | `personComponents.sourceExternalID` | Recommended only if you use the Salesforce integration. |
| `id` | `personComponents.sourcePersonID` |
| `email` | `personComponents.workEmail.address` |
| `email` | `workEmail.address` |

## Next steps

By reading this document, you have gained insight on the mapping relationship between your Marketo persons dataset and their corresponding XDM fields.See the Marketo tutorial to complete your Marketo persons mapping set.
