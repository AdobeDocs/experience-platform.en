---
keywords: Experience Platform;home;popular topics;Salesforce;salesforce;field mapping;Field mapping;mapping;marketo;B2B;b2b
title: Salesforce Mapping Fields
description: The tables below contain the mappings between Salesforce source fields and their corresponding XDM fields.
exl-id: 33ee76f2-0495-4acd-a862-c942c0fa3177
---
# [!DNL Salesforce] field mappings

The tables below contain the mappings between [!DNL Salesforce] source fields and their corresponding Experience Data Model (XDM) fields.

## Contact {#contact}

| Source field | Target XDM field path | Notes |
| --- | --- | --- |
| `AccountId` | `b2b.accountKey.sourceID`|
| `iif(AccountId != null && AccountId != "", to_object("sourceType", "Salesforce", "sourceInstanceID", "${CRM_ORG_ID}", "sourceKey", concat(AccountId,"@${CRM_ORG_ID}.Salesforce")), null)` | `b2b.accountKey` |
| `iif(AccountId != null && AccountId != "", to_object("sourceType", "Salesforce", "sourceInstanceID", "${CRM_ORG_ID}","sourceID", AccountId, "sourceKey", concat(AccountId,"@${CRM_ORG_ID}.Salesforce")), null)` | `personComponents.sourceAccountKey`|
| `"Salesforce"` | `b2b.personKey.sourceType` |
| `"${CRM_ORG_ID}"` | `b2b.personKey.sourceInstanceID` | The value for `"${CRM_ORG_ID}"` will be automatically replaced. |
| `concat(Id,"@${CRM_ORG_ID}.Salesforce")` | `b2b.personKey.sourceKey` | Primary identity. The value for `"${CRM_ORG_ID}"` will be automatically replaced. |
| `AssistantName`| `extendedWorkDetails.assistantDetails.name.fullName`|
| `AssistantPhone` | `extendedWorkDetails.assistantDetails.phone.number`|
| `Birthdate` | `person.birthDate` |
| `CreatedDate` | `extSourceSystemAudit.createdDate` |
| `Department`| `extendedWorkDetails.departments`|
| `Email` | `workEmail.address`| Secondary identity. |
| `Email` | `personComponents.workEmail.address`|
| `Fax` | `faxPhone.number`|
| `FirstName`| `person.name.firstName`|
| `HomePhone` | `homePhone.number`|
| `isDeleted` | `isDeleted` |
| `Id` | `b2b.personKey.sourceID`|  
| `"Salesforce"` | `personComponents.sourcePersonKey.sourceType` |
| `"${CRM_ORG_ID}"` | `personComponents.sourcePersonKey.sourceInstanceID` |
| `Id` | `personComponents.sourcePersonKey.sourceID` |
| `concat(Id,"@${CRM_ORG_ID}.Salesforce")` | `personComponents.sourcePersonKey.sourceKey` |
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
| `"Contact"` | `b2b.personType` |

{style="table-layout:auto"}

## Lead {#lead}

| Source field | Target XDM field path | Notes |
| --- | --- | --- |
| `City`| `workAddress.city`|
| `ConvertedDate` | `b2b.convertedDate` |
| `Country`| `workAddress.country`|
| `Email`  | `workEmail.address`| Secondary identity. |
| `Email`  | `personComponents.workEmail.address`|
| `Fax` | `faxPhone.number`|
| `FirstName`| `person.name.firstName`|
| `IsConverted` | `b2b.isConverted` |
| `isDeleted` | `isDeleted` |
| `"Salesforce"` | `b2b.personKey.sourceType` |
| `"${CRM_ORG_ID}"` | `b2b.personKey.sourceInstanceID` |
| `Id` | `b2b.personKey.sourceID`|
| `concat(Id,"@${CRM_ORG_ID}.Salesforce")` | `b2b.personKey.sourceKey` | Primary identity. The value for `"${CRM_ORG_ID}"` will be automatically replaced. |
| `"Salesforce"` | `personComponents.sourcePersonKey.sourceType` |
| `"${CRM_ORG_ID}"` | `personComponents.sourcePersonKey.sourceInstanceID` |
| `Id` | `personComponents.sourcePersonKey.sourceID`|
| `concat(Id,"@${CRM_ORG_ID}.Salesforce")` | `personComponents.sourcePersonKey.sourceKey` |
| `LastActivityDate` | `extSourceSystemAudit.lastActivityDate` |
| `LastModifiedDate` | `extSourceSystemAudit.lastUpdatedDate` |
| `LastName`| `person.name.lastName`|
| `LastReferencedDate` | `extSourceSystemAudit.lastReferencedDate` |
| `LastViewedDate` | `extSourceSystemAudit.lastViewedDate` |
| `LeadSource` | `b2b.personSource`|
| `LeadSource` | `personComponents.personSource`|
| `Latitude` | `workAddress._schema.latitude` |
| `Longitude` | `workAddress._schema.longitude` |
| `Name` | `person.name.fullName` |
| `PostalCode` | `workAddress.postalCode` |
| `Salutation` | `person.name.courtesyTitle` |
| `State` | `workAddress.state` |
| `Status` | `b2b.personStatus` |
| `Status` | `personComponents.personStatus` |
| `Street` | `workAddress.street1` |
| `Title` | `extendedWorkDetails.jobTitle` |
| `Suffix` | `person.name.suffix` |
| `Company` | `b2b.companyName` |
| `Website` | `b2b.companyWebsite` |
| `ConvertedContactId` | `b2b.convertedContactKey.sourceID` |
| `iif(ConvertedContactId != null && ConvertedContactId != "", to_object("sourceType", "Salesforce", "sourceInstanceID", "${CRM_ORG_ID}", "sourceKey", concat(ConvertedContactId,"@${CRM_ORG_ID}.Salesforce")), null)` | `b2b.convertedContactKey` |
| `CreatedDate` | `extSourceSystemAudit.createdDate` |
| `"Lead"` | `b2b.personType` |
| `iif(ConvertedContactId != null && ConvertedContactId != "", to_object("sourceType", "Salesforce", "sourceInstanceID", "${CRM_ORG_ID}", "sourceID", ConvertedContactId, "sourceKey", concat(ConvertedContactId,"@${CRM_ORG_ID}.Salesforce")), null)` | `personComponents.sourceConvertedContactKey` |

{style="table-layout:auto"}

## Account {#account}

| Source field | Target XDM field path | Notes |
| --- | --- | --- |
| `"Salesforce"` | `accountKey.sourceType` |
| `"${CRM_ORG_ID}"` | `accountKey.sourceInstanceID` | The value for `"${CRM_ORG_ID}"` will be automatically replaced. |
| `AccountNumber`| `accountNumber`|
| `AccountSource` | `accountSourceType`|
| `AnnualRevenue` | `accountOrganization.annualRevenue.amount` |
| `BillingCity` | `accountBillingAddress.city`|
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
| `isDeleted` | `isDeleted` |
| `Id` | `accountKey.sourceID`|
| `concat(Id,"@${CRM_ORG_ID}.Salesforce")` | `accountKey.sourceKey` | Primary identity. The value for `"${CRM_ORG_ID}"` will be automatically replaced. |
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
| `ParentId` | `accountParentKey.sourceID`|
| `iif(ParentId != null && ParentId != "", to_object("sourceType", "Salesforce", "sourceInstanceID", "${CRM_ORG_ID}", "sourceKey", concat(ParentId,"@${CRM_ORG_ID}.Salesforce")), null)` | `accountParentKey` |
| `Phone` | `accountPhone.number`|
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
| `Website` | `accountOrganization.website` |

{style="table-layout:auto"}

## Opportunity {#opportunity}

| Source field | Target XDM field path | Notes |
| --- | --- | --- |
| `"Salesforce"` | `opportunityKey.sourceType` |
| `"${CRM_ORG_ID}"` | `opportunityKey.sourceInstanceID` | The value for `"${CRM_ORG_ID}"` will be automatically replaced. |
| `concat(Id,"@${CRM_ORG_ID}.Salesforce")` | `opportunityKey.sourceKey` | Primary identity. The value for `"${CRM_ORG_ID}"` will be automatically replaced. |
| `AccountId` | `accountKey.sourceID`|
| `iif(AccountId != null && AccountId != "", to_object("sourceType", "Salesforce", "sourceInstanceID", "${CRM_ORG_ID}", "sourceKey", concat(AccountId,"@${CRM_ORG_ID}.Salesforce")), null)` | `accountKey` | Relationship. |
| `Amount` | `opportunityAmount.amount` |
| `CampaignId` | `campaignKey.sourceID`|
| `iif(CampaignId != null && CampaignId != "", to_object("sourceType", "Salesforce", "sourceInstanceID", "${CRM_ORG_ID}", "sourceKey", concat(CampaignId,"@${CRM_ORG_ID}.Salesforce")), null)` | `campaignKey` |
| `CloseDate` | `expectedCloseDate` |
| `CreatedDate`| `extSourceSystemAudit.createdDate` |
| `Description` | `opportunityDescription`|
| `ExpectedRevenue` | `expectedRevenue.amount` |
| `FiscalQuarter` | `fiscalQuarter`|
| `FiscalYear` | `fiscalYear` |
| `ForecastCategory` | `forecastCategory`|
| `ForecastCategoryName` | `forecastCategoryName`|
| `Id` | `opportunityKey.sourceID`|
| `IsClosed` | `isClosed` |
| `isDeleted` | `isDeleted` |
| `IsWon` | `isWon` |
| `LastActivityDate` | `extSourceSystemAudit.lastActivityDate` |
| `LastModifiedDate` | `extSourceSystemAudit.lastUpdatedDate` |
| `LastReferencedDate` | `extSourceSystemAudit.lastReferencedDate` |
| `LastViewedDate` | `extSourceSystemAudit.lastViewedDate` |
| `LeadSource` | `leadSource`|
| `Name`| `opportunityName`|
| `NextStep`| `nextStep`|
| `Probability` | `probabilityPercentage` |
| `StageName` | `opportunityStage`|
| `TotalOpportunityQuantity` | `opportunityQuantity` |
| `Type` | `opportunityType`|
| `CurrencyIsoCode` | `opportunityAmount.currencyCode` |

{style="table-layout:auto"}

## Opportunity contact role {#opportunity-contact-role}

| Source field | Target XDM field path | Notes |
| --- | --- | --- |
| `"Salesforce"` | `opportunityPersonKey.sourceType` |
| `"${CRM_ORG_ID}"` | `opportunityPersonKey.sourceInstanceID` | The value for `"${CRM_ORG_ID}"` will be automatically replaced. |
| `"Salesforce"` | `personKey.sourceType` |
| `"${CRM_ORG_ID}"` | `personKey.sourceInstanceID` |
| `ContactId` | `personKey.sourceID` |
| `concat(ContactId,"@${CRM_ORG_ID}.Salesforce")` | `personKey.sourceKey` |
| `CreatedDate` | `extSourceSystemAudit.createdDate` |
| `Id` | `opportunityPersonKey.sourceID`|
| `concat(Id,"@${CRM_ORG_ID}.Salesforce")` | `opportunityPersonKey.sourceKey` | Primary identity. The value for `"${CRM_ORG_ID}"` will be automatically replaced. |
| `isDeleted` | `isDeleted` |
| `IsPrimary` | `isPrimary` |
| `LastModifiedDate` | `extSourceSystemAudit.lastUpdatedDate` |
| `"Salesforce"` | `opportunityKey.sourceType` |
| `"${CRM_ORG_ID}"` | `opportunityKey.sourceInstanceID` |
| `OpportunityId` | `opportunityKey.sourceID`|
| `concat(OpportunityId,"@${CRM_ORG_ID}.Salesforce")` | `opportunityKey.sourceKey` |
| `Role` | `personRole`|

{style="table-layout:auto"}

## Campaign {#campaign}

| Source field | Target XDM field path | Notes |
| --- | --- | --- |
| `"Salesforce"` | `campaignKey.sourceType` |
| `"${CRM_ORG_ID}"` | `campaignKey.sourceInstanceID` | The value for `"${CRM_ORG_ID}"` will be automatically replaced. |
| `isDeleted` | `isDeleted` |
| `Id` | `campaignKey.sourceID`|
| `concat(Id,"@${CRM_ORG_ID}.Salesforce")` | `campaignKey.sourceKey` | Primary identity. The value for `"${CRM_ORG_ID}"` will be automatically replaced. |
| `Name`| `campaignName`|
| `ParentId` | `parentCampaignKey.sourceID`|
| `iif(ParentId != null && ParentId != "", to_object("sourceType", "Salesforce", "sourceInstanceID", "${CRM_ORG_ID}", "sourceKey", concat(ParentId,"@${CRM_ORG_ID}.Salesforce")), null)` | `parentCampaignKey` |
| `Type` | `campaignType`|
| `Status` | `campaignStatus`|
| `StartDate` | `campaignStartDate` |
| `EndDate` | `campaignEndDate` |
| `ExpectedRevenue` | `expectedRevenue.amount` |
| `BudgetedCost` | `budgetedCost.amount` |
| `ActualCost` | `actualCost.amount` |
| `ExpectedResponse` | `expectedResponse`|
| `IsActive` | `isActive` |
| `Description` | `campaignDescription`|
| `CreatedDate` | `extSourceSystemAudit.createdDate` |
| `LastModifiedDate` | `extSourceSystemAudit.lastUpdatedDate` |
| `LastActivityDate` | `extSourceSystemAudit.lastActivityDate` |
| `LastViewedDate` | `extSourceSystemAudit.lastViewedDate` |
| `LastReferencedDate` | `extSourceSystemAudit.lastReferencedDate` |
| `CurrencyIsoCode` | `actualCost.currencyCode` |

## Campaign member {#campaign-member}

| Source field | Target XDM field path | Notes |
| --- | --- | --- |
| `"Salesforce"` | `campaignMemberKey.sourceType` |
| `"${CRM_ORG_ID}"` | `campaignMemberKey.sourceInstanceID` | The value for `"${CRM_ORG_ID}"` will be automatically replaced. |
| `isDeleted` | `isDeleted` |
| `Id` | `campaignMemberKey.sourceID`|
| `concat(Id,"@${CRM_ORG_ID}.Salesforce")` | `campaignMemberKey.sourceKey` | Primary identity. The value for `"${CRM_ORG_ID}"` will be automatically replaced. |
| `"Salesforce"` | `campaignKey.sourceType` |
| `${CRM_ORG_ID}` | `campaignKey.sourceInstanceID` |
| `CampaignId` | `campaignKey.sourceID` |
| `concat(CampaignId,"@${CRM_ORG_ID}.Salesforce")` | `campaignKey.sourceKey` |
| `"Salesforce"` | `personKey.sourceType` |
| `${CRM_ORG_ID}` | `personKey.sourceInstanceID` |
| `LeadOrContactId` | `personKey.sourceID`|
| `concat(LeadOrContactId,"@${CRM_ORG_ID}.Salesforce")` | `personKey.sourceKey` |
| `Status` | `memberStatus`|
| `HasResponded` | `hasResponded` |
| `CreatedDate` | `extSourceSystemAudit.createdDate` |
| `LastModifiedDate` | `extSourceSystemAudit.lastUpdatedDate` |
| `FirstRespondedDate` | `firstRespondedDate` |
| `Type` | `b2b.personType` |

## Account contact relation {#account-contact-relation}

| Source field | Target XDM field path | Notes |
| --- | --- | --- |
| `AccountId` | `accountKey.sourceID` |
| `iif(AccountId != null && AccountId != "", to_object("sourceType", "Salesforce", "sourceInstanceID", "${CRM_ORG_ID}", "sourceKey", concat(AccountId,"@${CRM_ORG_ID}.Salesforce")), null)` | `accountKey` |
| `ContactId` | `personKey.sourceID` |
| `iif(ContactId != null && ContactId != "", to_object("sourceType", "Salesforce", "sourceInstanceID", "${CRM_ORG_ID}", "sourceKey", concat(ContactId,"@${CRM_ORG_ID}.Salesforce")), null)` | `personKey` |
| `CreatedById` | `extSourceSystemAudit.createdBy` |
| `CreatedDate` | `extSourceSystemAudit.createdDate` |
| `EndDate` | `relationEndDate` |
| `IsDeleted` | `isDeleted` |
| `Id` | `accountPersonKey.sourceID` |
| `"Salesforce"` | `accountPersonKey.sourceType` |
| `"${CRM_ORG_ID}"` | `accountPersonKey.sourceInstanceID` |
| `concat(Id, "@${CRM_ORG_ID}.Salesforce")` | `accountPersonKey.sourceKey` | Primary identity. |
| `IsActive` | `IsActive` |
| `IsDirect` | `IsDirect` |
| `LastModifiedById` | `extSourceSystemAudit.lastUpdatedBy` |
| `LastModifiedDate` | `extSourceSystemAudit.lastUpdatedDate` |
| `explode(Roles,";")` | `personRoles[]` |
| `StartDate` | `relationStartDate` |

## Next steps

By reading this document, you have gained insight on the mapping relationship between [!DNL Salesforce] source fields and their corresponding XDM fields. See the documentation on [creating a [!DNL Salesforce] source connection](../../../connectors/crm/salesforce.md) for more information.
