---
keywords: Experience Platform;home;popular topics;CRM;crm;mapping;marketo;B2B;b2b
solution: Experience Platform
title: Mapping Fields for the CRM Sources
topic-legacy: overview
description: The tables below contains the mappings between the fields in CRM sources and their corresponding XDM fields.
---
# CRM field mappings

## [!DNL Salesforce] field mappings

### Contact

| Source field | Data type | Target XDM field path | Data type | Notes |
| --- | --- | --- | --- | --- |
| `AccountId` | reference | `b2b.accountID` | string |
| `AccountId` | reference | `personComponents.sourceAccountID` | string
| `AssistantName` | string | `extendedWorkDetails.assistantDetails.name.fullName` | string |
| `AssistantPhone` | phone | `extendedWorkDetails.assistantDetails.phone.number` | string |
| `Birthdate` | date | `person.birthDate` | date |
| `CreatedDate` | date | `extSourceSystemAudit.createdDate` | dateTime |
| `Department` | string | `extendedWorkDetails.departments` | string |
| `Email` | email| `workEmail.address` | string |
| `Email` | email | `personComponents.workEmail.address` | string |
| `Fax` | phone | `faxPhone.number` | string |
| `FirstName` | string | `person.name.firstName` | string |
| `HomePhone` | phone | `homePhone.number` | string |
| `Id` | id | `personID` | string | Primary identity |
| `Id` | id | `personComponents.sourcePersonID` | string |
| `LastActivityDate` | date | `extSourceSystemAudit.lastActivityDate` | dateTime |
| `LastModifiedDate` | date | `extSourceSystemAudit.lastUpdatedDate` | dateTime |
| `LastName` | string | `person.name.lastName` | string |
| `LastReferencedDate` | dateTime | `extSourceSystemAudit.lastReferencedDate` | dateTime |
| `LastViewedDate` | dateTime | `extSourceSystemAudit.lastViewedDate` | dateTime |
| `LeadSource` | picklist | `b2b.personSource` | string |
| `LeadSource` | picklist | `personComponents.personSource` | string |
| `MailingCity` | string | `workAddress.city` | string |
| `MailingCountry` string | `workAddress.country` | string |
| `MailingLatitude` | double | `workAddress._schema.latitude`| double |
| `MailingLongitude` | double | `workAddress._schema.longitude` | double |
| `MailingPostalCode` | string | `workAddress.postalCode` | string |
| `MailingState` | string | `workAddress.state` | string |
| `MailingStreet` | string | `workAddress.street1` | string |
| `MobilePhone` | phone | `mobilePhone.number` | string |
| `Name` | string | `person.name.fullName` | string |
| `OtherCity` string `otherAddress.city` | string |
| `OtherCountry` | string | `otherAddress.country` | string |
| `OtherLatitude` | double | `otherAddress._schema.latitude` | double |
| `OtherLongitude` | double | `otherAddress._schema.longitude` | double |
| `OtherPhone` | phone | `otherPhone.number` | string |
| `OtherPostalCode` | string | `otherAddress.postalCode` | string |
| `OtherState` | string | `otherAddress.state` | string |
| `OtherStreet` | textarea | `otherAddress.street1` | string |
| `Phone`| phone | `workPhone.number` | string |
| `ReportsToId` | reference | `extendedWorkDetails.reportsToID` | string |
| `Salutation` | picklist | `person.name.courtesyTitle` | string |
| `Title` | string | `extendedWorkDetails.jobTitle` | string |

### Lead

| Source field | Data type | Target XDM field path | Data type | Notes |
| --- | --- | --- | --- | --- |
| `City` | string | `workAddress.city` | string |
| `ConvertedContactId` | reference | `b2b.convertedContactID` | string |
| `ConvertedContactId` | reference | `personComponents.sourceConvertedContactID` | string |
| `ConvertedDate` | date | `b2b.convertedDate` | dateTime |
| `Country` | string | `workAddress.country` | string |
| `Email` | email | `workEmail.address` | string | Secondary identity |
| `Email` | email | `personComponents.workEmail.address` | string |
| `Fax` | phone | `faxPhone.number` | string |
| `FirstName` | string | `person.name.firstName` | string |
| `IsConverted` | boolean | `b2b.isConverted` | boolean |
| `Id` | id | `personID` | string | Primary identity |
| `Id` | id | `personComponents.sourcePersonID` | string |
| `LastActivityDate` | date | `extSourceSystemAudit.lastActivityDate` | dateTime |
| `LastModifiedDate` | date | `extSourceSystemAudit.lastUpdatedDate` | dateTime |
| `LastName` | string | `person.name.lastName` | string |
| `LastReferencedDate` | dateTime | `extSourceSystemAudit.lastReferencedDate` | dateTime |
| `LastViewedDate` | dateTime | `extSourceSystemAudit.lastViewedDate` | dateTime |
| `LeadSource` | picklist | `b2b.personSource` | string |
| `LeadSource` | picklist | `personComponents.personSource` | string |
| `MailingCity` | string | `workAddress.city` | string |
| `MailingCountry` | string | `workAddress.country` | string |
| `MailingLatitude` | double | `workAddress._schema.latitude` | double |
| `MailingLongitude` | double | `workAddress._schema.longitude` | double |
| `MailingPostalCode` | string | `workAddress.postalCode` | string |
| `MailingState` | string | `workAddress.state` | string |
| `MailingStreet` | string | `workAddress.street1` | string |
| `MobilePhone` | phone | `mobilePhone.number` | string |
| `Name` | string | `person.name.fullName` | string |
| `OtherCity` | string | `otherAddress.city` | string |
| `OtherCountry` | string | `otherAddress.country` | string |
| `OtherLatitude` | double | `otherAddress._schema.latitude` | double |
| `OtherLongitude` | double | `otherAddress._schema.longitude` | double |
| `OtherPhone` | phone | `otherPhone.number` | string |
| `OtherPostalCode` | string | `otherAddress.postalCode` | string |
| `OtherState` | string | `otherAddress.state` | string |
| `OtherStreet` | textarea | `otherAddress.street1` | string |
| `Phone` | phone | `workPhone.number` | string |
| `ReportsToId` | reference | `extendedWorkDetails.reportsToID` | string |
| `Salutation` | picklist | `person.name.courtesyTitle` | string |
| `Title` | string | `extendedWorkDetails.jobTitle` | string |

### Account

### Opportunity

### Opportunity contact role

### Campaign

### Campaign member

### Task

### Event