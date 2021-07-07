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

{style="table-layout:auto"}

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

{style="table-layout:auto"}

### Account

| Source field | Data type | Target XDM field path | Data type | Notes |
| --- | --- | --- | --- | --- |
| `AccountNumber` | string | `accountNumber` | string |
| `AccountSource` | picklist | `accountSourceType` | string |
| `AnnualRevenue` | currency | `accountOrganization.annualRevenue.amount` | double |
| `BillingCity` | address | `accountBillingAddress.city` | string |
| `BillingCountry` | string | `accountBillingAddress.country` | string |
| `BillingLatitude` | double | `accountBillingAddress._schema.latitude` | double |
| `BillingLongitude` | double | `accountBillingAddress._schema.longitude` | double |
| `BillingPostalCode` | string | `accountBillingAddress.postalCode` | string |
| `BillingState` | string | `accountBillingAddress.state` | string |
| `BillingStreet` | textarea | `accountBillingAddress.street1` | string |
| `CreatedDate` | dateTime | `extSourceSystemAudit.createdDate` | dateTime |
| `Description` | textarea | `accountDescription` | string |
| `DunsNumber` | string | `accountOrganization.DUNSNumber` | string | data.com feature |
| `Fax` | phone | `accountFax.number` | string |
| `Id` | id | `accountID` | string | Primary identity |
| `Industry` | picklist | `accountOrganization.industry` | string |
| `Jigsaw` | string | `accountOrganization.jigsaw` | string |
| `LastActivityDate` | date | `extSourceSystemAudit.lastActivityDate` | dateTime |
| `LastModifiedDate` | dateTime | `extSourceSystemAudit.lastUpdatedDate` | dateTime |
| `LastReferencedDate` | dateTime | `extSourceSystemAudit.lastReferencedDate` | dateTime |
| `LastViewedDate` | dateTime | `extSourceSystemAudit.lastViewedDate` | dateTime |
| `NaicsCode` | string | `accountOrganization.NAICSCode` | string | data.com feature |
| `NaicsDesc` | string | `accountOrganization.NAICSDescription` | string | data.com feature |
| `Name` | string | `accountName` | string |
| `NumberOfEmployees` | integer | `accountOrganization.numberOfEmployees` | integer |
| `Ownership` | picklist | `accountOwnership` | string |
| `ParentId` | reference | `accountParentID` | string |
| `Phone` | phone | `accountPhone.number` | string |
| `Rating` | picklist | `accountOrganization.rating` | string |
| `ShippingCity` | string | `accountShippingAddress.city` | string |
| `ShippingCountry` | string | `accountShippingAddress.country` | string |
| `ShippingLatitude` | double | `accountShippingAddress._schema.latitude` | double |
| `ShippingLongitude` | double | `accountShippingAddress._schema.longitude` | double |
| `ShippingPostalCode` | string | `accountShippingAddress.postalCode` | string |
| `ShippingState` | string | `accountShippingAddress.state` | string |
| `ShippingStreet` | textarea | `accountShippingAddress.street1` | string |
| `Sic` | string | `accountOrganization.SICCode` | string |
| `SicDesc` | string | `accountOrganization.SICDescription` | string |
| `Site` | string | `accountSite` | string |
| `TickerSymbol` | string | `accountOrganization.tickerSymbol` | string |
| `Tradestyle` | string | `accountTradeStyle` | string | data.com feature |
| `Type` | picklist | `accountType` | string |

{style="table-layout:auto"}

### Opportunity

| Source field | Data type | Target XDM field path | Data type | Notes |
| --- | --- | --- | --- | --- |
| `AccountId` reference | `accountID` | string | Relationship |
| `Amount` | currency | `opportunityAmount.amount` | double |
| `CampaignId` | reference | `campaignID` | string |
| `CloseDate` | date | `actualCloseDate` / `expectedCloseDate` | dateTime |
| `CreatedDate`| dateTime | `extSourceSystemAudit.createdDate` | dateTime |
| `Description` | textarea | `opportunityDescription` | string |
| `ExpectedRevenue` | currency | `expectedRevenue.amount` | double |
| `FiscalQuarter` | integer | `fiscalQuarter` | string |
| `FiscalYear` | integer | `fiscalYear` | integer |
| `ForecastCategory` | picklist | `forecastCategory` | string |
| `ForecastCategoryName` | picklist | `forecastCategoryName` | string |
| `Id` | id | `opportunityID` | string | Primary identity |
| `IsClosed` | boolean | `isClosed` | boolean |
| `IsWon` | boolean | `isWon` | boolean |
| `LastActivityDate` | date | `extSourceSystemAudit.lastActivityDate` | dateTime |
| `LastModifiedDate` | dateTime | `extSourceSystemAudit.lastUpdatedDate` | dateTime |
| `LastReferencedDate` | dateTime | `extSourceSystemAudit.lastReferencedDate` | dateTime |
| `LastViewedDate` | dateTime | `extSourceSystemAudit.lastViewedDate` | dateTime |
| `LeadSource` | picklist | `leadSource` | string |
| `Name` | string | `opportunityName` | string |
| `NextStep` | string | `nextStep` | string |
| `Probability` | percent | `probabilityPercentage` | double |
| `StageName` | picklist | `opportunityStage` | string |
| `TotalOpportunityQuantity` | double | `opportunityQuantity` | integer |
| `Type` | picklist | `opportunityType` | string |

### Opportunity contact role

| Source field | Data type | Target XDM field path | Data type | Notes |
| --- | --- | --- | --- | --- |
| `ContactId` | reference | `personID` | string | Relationship |
| `CreatedDate` | dateTime | `extSourceSystemAudit.createdDate` | dateTime |
| `Id` | id | `opportunityPersonID` | string | Primary identity |
| `IsPrimary` | boolean | `isPrimary` | boolean |
| `LastModifiedDate` | dateTime | `extSourceSystemAudit.lastUpdatedDate` | dateTime |
| `OpportunityId` | reference | `opportunityID` | string | Relationship |
| `Role` | picklist | personRole | string |

### Campaign

### Campaign member

### Task

### Event