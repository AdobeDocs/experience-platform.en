---
keywords: Experience Platform;home;popular topics;Salesforce;salesforce;field mapping;Field mapping;mapping;marketo;B2B;b2b
solution: Experience Platform
title: Salesforce Mapping Fields
topic-legacy: overview
description: The tables below contain the mappings between Salesforce source fields and their corresponding XDM fields.
---
# [!DNL Salesforce] field mappings

The tables below contain the mappings between [!DNL Salesforce] source fields and their corresponding Experience Data Model (XDM) fields.

## Contact {#contact}

| Source field | Target XDM field path | Notes |
| --- | --- | --- |
| `AccountId` | `b2b.accountID`|
| `AccountId` | `personComponents.sourceAccountID`|
| `AssistantName`| `extendedWorkDetails.assistantDetails.name.fullName`|
| `AssistantPhone` | `extendedWorkDetails.assistantDetails.phone.number`|
| `Birthdate` | `person.birthDate` |
| `CreatedDate` | `extSourceSystemAudit.createdDate` |
| `Department`| `extendedWorkDetails.departments`|
| `Email` | `workEmail.address`|
| `Email` | `personComponents.workEmail.address`|
| `Fax` | `faxPhone.number`|
| `FirstName`| `person.name.firstName`|
| `HomePhone` | `homePhone.number`|
| `Id` | `personID`| This is the primary identity |
| `Id` | `personComponents.sourcePersonID`|
| `LastActivityDate` | `extSourceSystemAudit.lastActivityDate` |
| `LastModifiedDate` | `extSourceSystemAudit.lastUpdatedDate` |
| `LastName`| `person.name.lastName`|
| `LastReferencedDate` | `extSourceSystemAudit.lastReferencedDate` |
| `LastViewedDate` | `extSourceSystemAudit.lastViewedDate` |
| `LeadSource` | `b2b.personSource`|
| `LeadSource` | `personComponents.personSource`|
| `MailingCity`| `workAddress.city`|
| `MailingCountry` | `workAddress.country`|
| `MailingLatitude` | `workAddress._schema.latitude`|
| `MailingLongitude` | `workAddress._schema.longitude` |
| `MailingPostalCode`| `workAddress.postalCode`|
| `MailingState`| `workAddress.state`|
| `MailingStreet`| `workAddress.street1`|
| `MobilePhone` | `mobilePhone.number`|
| `Name`| `person.name.fullName`|
| `OtherCity` | `otherAddress.city`|
| `OtherCountry`| `otherAddress.country`|
| `OtherLatitude` | `otherAddress._schema.latitude` |
| `OtherLongitude` | `otherAddress._schema.longitude` |
| `OtherPhone` | `otherPhone.number`|
| `OtherPostalCode`| `otherAddress.postalCode`|
| `OtherState`| `otherAddress.state`|
| `OtherStreet` | `otherAddress.street1`|
| `Phone`| `workPhone.number`|
| `ReportsToId` | `extendedWorkDetails.reportsToID`|
| `Salutation` | `person.name.courtesyTitle`|
| `Title`| `extendedWorkDetails.jobTitle`|

{style="table-layout:auto"}

## Lead {#lead}

| Source field | Target XDM field path | Notes |
| --- | --- | --- |
| `City`| `workAddress.city`|
| `ConvertedContactId` | `b2b.convertedContactID`|
| `ConvertedContactId` | `personComponents.sourceConvertedContactID`|
| `ConvertedDate` | `b2b.convertedDate` |
| `Country`| `workAddress.country`|
| `Email`  | `workEmail.address`| This is the secondary identity |
| `Email`  | `personComponents.workEmail.address`|
| `Fax` | `faxPhone.number`|
| `FirstName`| `person.name.firstName`|
| `IsConverted` | `b2b.isConverted` |
| `Id` | `personID`| This is the primary identity |
| `Id` | `personComponents.sourcePersonID`|
| `LastActivityDate` | `extSourceSystemAudit.lastActivityDate` |
| `LastModifiedDate` | `extSourceSystemAudit.lastUpdatedDate` |
| `LastName`| `person.name.lastName`|
| `LastReferencedDate` | `extSourceSystemAudit.lastReferencedDate` |
| `LastViewedDate` | `extSourceSystemAudit.lastViewedDate` |
| `LeadSource` | `b2b.personSource`|
| `LeadSource` | `personComponents.personSource`|
| `Latitude` | `workAddress._schema.latitude` |
| `Longitude` | `workAddress._schema.longitude` |
| `MiddleName` | `person.name.middleName` |
| `Name` | `person.name.fullName` |
| `PostalCode` | `workAddress.postalCode` |
| `Salutation` | `person.name.courtesyTitle` |
| `State` | `workAddress.state` |
| `Status` | `b2b.personStatus` |
| `Status` | `personComponents.personStatus` |
| `Street` | `workAddress.street1` |
| `Title` | `extendedWorkDetails.jobTitle` |
| `Suffix` | `person.name.suffix` |

{style="table-layout:auto"}

## Account {#account}

| Source field | Target XDM field path | Notes |
| --- | --- | --- |
| `AccountNumber`| `accountNumber`|
| `AccountSource` | `accountSourceType`|
| `AnnualRevenue` | `accountOrganization.annualRevenue.amount` |
| `BillingCity` | address | `accountBillingAddress.city`|
| `BillingCountry`| `accountBillingAddress.country`|
| `BillingLatitude` | `accountBillingAddress._schema.latitude` |
| `BillingLongitude` | `accountBillingAddress._schema.longitude` |
| `BillingPostalCode`| `accountBillingAddress.postalCode`|
| `BillingState`| `accountBillingAddress.state`|
| `BillingStreet` | `accountBillingAddress.street1`|
| `CreatedDate` | `extSourceSystemAudit.createdDate` |
| `Description` | `accountDescription`|
| `DunsNumber`| `accountOrganization.DUNSNumber`| data.com feature |
| `Fax` | `accountFax.number`|
| `Id` | `accountID`| This is the primary identity |
| `Industry` | `accountOrganization.industry`|
| `Jigsaw`| `accountOrganization.jigsaw`|
| `LastActivityDate` | `extSourceSystemAudit.lastActivityDate` |
| `LastModifiedDate` | `extSourceSystemAudit.lastUpdatedDate` |
| `LastReferencedDate` | `extSourceSystemAudit.lastReferencedDate` |
| `LastViewedDate` | `extSourceSystemAudit.lastViewedDate` |
| `NaicsCode`| `accountOrganization.NAICSCode`| data.com feature |
| `NaicsDesc`| `accountOrganization.NAICSDescription`| data.com feature |
| `Name`| `accountName`|
| `NumberOfEmployees` | `accountOrganization.numberOfEmployees` |
| `Ownership` | `accountOwnership`|
| `ParentId` | `accountParentID`|
| `Phone` | `accountPhone.number`|
| `Rating` | `accountOrganization.rating`|
| `ShippingCity`| `accountShippingAddress.city`|
| `ShippingCountry`| `accountShippingAddress.country`|
| `ShippingLatitude` | `accountShippingAddress._schema.latitude` |
| `ShippingLongitude` | `accountShippingAddress._schema.longitude` |
| `ShippingPostalCode`| `accountShippingAddress.postalCode`|
| `ShippingState`| `accountShippingAddress.state`|
| `ShippingStreet` | `accountShippingAddress.street1`|
| `Sic`| `accountOrganization.SICCode`|
| `SicDesc`| `accountOrganization.SICDescription`|
| `Site`| `accountSite`|
| `TickerSymbol`| `accountOrganization.tickerSymbol`|
| `Tradestyle`| `accountTradeStyle`| data.com feature |
| `Type` | `accountType`|

{style="table-layout:auto"}

## Opportunity {#opportunity}

| Source field | Target XDM field path | Notes |
| --- | --- | --- |
| `AccountId` | `accountID`| Relationship |
| `Amount` | `opportunityAmount.amount` |
| `CampaignId` | `campaignID`|
| `CloseDate` | `actualCloseDate` / `expectedCloseDate` |
| `CreatedDate`| `extSourceSystemAudit.createdDate` |
| `Description` | `opportunityDescription`|
| `ExpectedRevenue` | `expectedRevenue.amount` |
| `FiscalQuarter` | `fiscalQuarter`|
| `FiscalYear` | `fiscalYear` |
| `ForecastCategory` | `forecastCategory`|
| `ForecastCategoryName` | `forecastCategoryName`|
| `Id` | `opportunityID`| This is the primary identity |
| `IsClosed` | `isClosed` |
| `IsWon` | `isWon` |
| `LastActivityDate` | `extSourceSystemAudit.lastActivityDate` |
| `LastModifiedDate` | `extSourceSystemAudit.lastUpdatedDate` |
| `LastReferencedDate` | `extSourceSystemAudit.lastReferencedDate` |
| `LastViewedDate` | `extSourceSystemAudit.lastViewedDate` |
| `LeadSource` | `leadSource`|
| `Name`| `opportunityName`|
| `NextStep`| `nextStep`|
| `Probability` | percent | `probabilityPercentage` |
| `StageName` | `opportunityStage`|
| `TotalOpportunityQuantity` | `opportunityQuantity` |
| `Type` | `opportunityType`|

{style="table-layout:auto"}

## Opportunity contact role {#opportunity-contact-role}

| Source field | Target XDM field path | Notes |
| --- | --- | --- |
| `ContactId` | `personID`| Relationship |
| `CreatedDate` | `extSourceSystemAudit.createdDate` |
| `Id` | `opportunityPersonID`| This is the primary identity |
| `IsPrimary` | `isPrimary` |
| `LastModifiedDate` | `extSourceSystemAudit.lastUpdatedDate` |
| `OpportunityId` | `opportunityID`| Relationship |
| `Role` | `personRole`|

{style="table-layout:auto"}

## Campaign {#campaign}

| Source field | Target XDM field path | Notes |
| --- | --- | --- |
| `Id` | `xdm: campaignID`| This is the primary identity |
| `Name`| `xdm: campaignName`|
| `ParentId` | `xdm: parentCampaignID`|
| `Type` | `xdm: campaignType`|
| `Status` | `xdm: campaignStatus`|
| `StartDate` | `xdm: campaignStartDate` |
| `EndDate` | `xdm: campaignEndDate` |
| `ExpectedRevenue` | `xdm: expectedRevenue.amount` |
| `BudgetedCost` | `xdm: budgetedCost.amount` |
| `ActualCost` | `xdm: actualCost.amount` |
| `ExpectedResponse` | percent | `xdm: expectedResponse`|
| `IsActive` | `xdm: isActive` |
| `Description` | `xdm: campaignDescription`|
| `CreatedDate` | `xdm: extSourceSystemAudit.createdDate` |
| `LastModifiedDate` | `xdm: extSourceSystemAudit.lastUpdatedDate` |
| `LastActivityDate` | `xdm: extSourceSystemAudit.lastActivityDate` |
| `LastViewedDate` | `xdm: extSourceSystemAudit.lastViewedDate` |
| `LastReferencedDate` | `xdm: extSourceSystemAudit.lastReferencedDate` |

## Campaign member {#campaign-member}

| Source field | Target XDM field path | Notes |
| --- | --- | --- |
| `Id` | `campaignMemberID`| This is the primary identity |
| `CampaignId` | `campaignID`| Relationship |
| `LeadOrContactId` | `personID`| Relationship |
| `Status` | `memberStatus`|
| `HasResponded` | `hasResponded` |
| `CreatedDate` | `extSourceSystemAudit.createdDate` |
| `LastModifiedDate` | `extSourceSystemAudit.lastUpdatedDate` |
| `FirstRespondedDate` | `firstRespondedDate` |

## Next steps

By reading this document, you have gained insight on the mapping relationship between [!DNL Salesforce] source fields and their corresponding XDM fields. See the tutorial on [creating a [!DNL Salesforce] source connection](../../../tutorials/ui/create/crm/salesforce.md) to start your [!DNL Salesforce] dataflow.
