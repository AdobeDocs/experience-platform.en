---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping;
solution: Experience Platform
title: Persons mapping fields
topic: overview
description: The table below contains the mappings between the Marketo Persons datasets and their corresponding XDM fields.
---

# Persons mapping fields

The table below contains the mappings between the [!DNL Marketo] persons datasets and their corresponding XDM fields.

| Source dataset | XDM target field |
| -------------- | ---------------- |
| Person-key | personID |
| DunsNumber | b2b.leadOrganization.DUNSNumber |
| NaicsCode | b2b.leadOrganization.NAICSCode |
| NaicsDesc | b2b.leadOrganization.NAICSDescription |
| sicCode | b2b.leadOrganization.SICCode |
| SicDesc | b2b.leadOrganization.SICDescription |
| industry | b2b.leadOrganization.industry |
| Jigsaw | b2b.leadOrganization.jigsaw |
| numberOfEmployees | b2b.leadOrganization.numberOfEmployees |
| website | b2b.leadOrganization.website |
| emailSuspended | b2b.personOptInOut._channels.email |
| emailSuspendedAt | b2b.personOptInOut.optOutDetails.email.optOutDate |
| emailSuspendedCause | b2b.personOptInOut.optOutDetails.email.optOutReason |
| Account-key | b2b.accountID |
| ConvertedContact-key | b2b.convertedContactID |
| marketingSuspended | b2b.isMarketingSuspended |
| marketingSuspendedCause | b2b.marketingSuspendedCause |
| leadScore | b2b.personScore |
| leadSource | b2b.personSource |
| leadStatus | b2b.personStatus |
| personType | b2b.personType |
| createdAt | extSourceSystemAudit.createdDate |
| updatedAt | extSourceSystemAudit.lastUpdatedDate |
| title | extendedWorkDetails.jobTitle |
| fax | faxPhone.number |
| mobilePhone | mobilePhone.number |
| firstName | person.name.firstName |
| lastName | person.name.lastName |
| middleName | person.name.middleName |
| salutation | person.name.courtesyTitle |
| dateOfBirth | person.birthDate |
| city | workAddress.city |
| country | workAddress.country |
| postalCode | workAddress.postalCode |
| state | workAddress.state |
| address | workAddress.street1 |
| phone | workPhone.number |
| inferredCompany | inferredCompany |
| inferredMetropolitanArea | inferredMetropolitanArea |
| inferredPhoneAreaCode | inferredPhoneAreaCode |
| inferredCity | inferredAddress.city |
| inferredCountry | inferredAddress.country |
| inferredPostalCode | inferredAddress.postalCode |
| inferredStateRegion | inferredAddress.state |
| company | organizations |
| inferredCity | personComponents.personSegmentTraits.inferredAddress.city |
| inferredCountry | personComponents.personSegmentTraits.inferredAddress.country |
| inferredPostalCode | personComponents.personSegmentTraits.inferredAddress.postalCode |
| inferredStateRegion | personComponents.personSegmentTraits.inferredAddress.state |
| annualRevenue | personComponents.personSegmentTraits.leadOrganization.annualRevenue.amount |
| DunsNumber | personComponents.personSegmentTraits.leadOrganization.DUNSNumber |
| NaicsCode | personComponents.personSegmentTraits.leadOrganization.NAICSCode |
| NaicsDesc | personComponents.personSegmentTraits.leadOrganization.NAICSDescription |
| sicCode | personComponents.personSegmentTraits.leadOrganization.SICCode |
| SicDesc | personComponents.personSegmentTraits.leadOrganization.SICDescription |
| industry | personComponents.personSegmentTraits.leadOrganization.industry |
| Jigsaw | personComponents.personSegmentTraits.leadOrganization.jigsaw |
| numberOfEmployees | personComponents.personSegmentTraits.leadOrganization.numberOfEmployees |
| website | personComponents.personSegmentTraits.leadOrganization.website |
| inferredCompany | personComponents.personSegmentTraits.inferredCompany |
| inferredMetropolitanArea | personComponents.personSegmentTraits.inferredMetropolitanArea |
| inferredPhoneAreaCode | personComponents.personSegmentTraits.inferredPhoneAreaCode |
| leadScore | personComponents.personSegmentTraits.personScore |
| leadSource | personComponents.personSegmentTraits.personSource |
| leadStatus | personComponents.personSegmentTraits.personStatus |
| personType | personComponents.personSegmentTraits.personType |
| Account-systemID | personComponents.sourceAccountID.systemID |
| Account-ID | personComponents.sourceAccountID.ID |
| Account-key | personComponents.sourceAccountID.key |
| ConvertedContact-systemID | personComponents.sourceConvertedContactID.systemID |
| ConvertedContact-ID | personComponents.sourceConvertedContactID.ID |
| ConvertedContact-key | personComponents.sourceConvertedContactID.key |
| sfdcContactId | personComponents.sourceExternalID.ID |
| Person-systemID | personComponents.sourcePersonID.systemID |
| Person-ID | personComponents.sourcePersonID.ID |
| Person-key | personComponents.sourcePersonID.key |
| email | personComponents.workEmail.address |
| email | workEmail.address |