---
keywords: Experience Platform;home;popular topics;Marketo Engage;marketo engage;Marketo;mapping
solution: Experience Platform
title: Mapping Fields for the Marketo Engage Source
topic: overview
description: The tables below contains the mappings between the fields in the Marketo datasets and their corresponding XDM fields.
---

# (Alpha) [!DNL Marketo Engage] Field Mappings

>[!IMPORTANT]
>
>The [!DNL Marketo] source is currently in alpha. Its features and the documentation are subject to change.

The tables below contain the mappings between the fields in the nine [!DNL Marketo] datasets and their corresponding Experience Data Model (XDM) fields.

## Activities

>[!NOTE]
>
>Currently, the only activity types supported are `removeFromList` and `visitWebPage`. More activity types will be supported in future releases.

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `id` | `_id` |
| `personID` | `personID` | Primary Identity |
| `eventType` | `eventType` |
| `timeStamp` | `timestamp`|
| `removeFromList.listID` | `listOperations.listID` |
| `visitWebPage.userAgent` | `environment.browserDetails.userAgent` |
| `visitWebPage.ipV4` | `environment.ipV4` |
| `visitWebPage.searchKeywords`| `search.keywords` |
| `visitWebPage.searchEngine` | `search.searchEngine` |
| `visitWebPage.isPersonalizedURL` | `web.webPageDetails.isPersonalizedURL` |
| `visitWebPage.webPageName` | `web.webPageDetails.name` |
| `visitWebPage.queryParameters` | `web.webPageDetails.queryParameters` |
| `visitWebPage.webPageID` | `web.webPageDetails.webPageID` |
| `visitWebPage.referrerURL` | `web.webReferrer.URL`|
| `visitWebPage.webPageURL` | `web.webPageDetails._marketo.URL` |

{style="table-layout:auto"}

## Campaigns

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `id` | `campaignID` | Primary Identity |
| `sfdcId` | `extSourceSystemAudit.externalID` | Secondary Identity |
| `name` | `campaignName` |
| `description` | `campaignDescription` |
| `type` | `campaignType` |
| `status` | `campaignStatus` |
| `channel` | `channelName` |
| `createdAt` | `extSourceSystemAudit.createdDate` |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |

{style="table-layout:auto"}

## Campaign Membership

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

{style="table-layout:auto"}

## Companies

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `id` | `accountID` | Primary Identity |
| `mktoCdpExternalId` | `extSourceSystemAudit.externalID` | Secondary Identity |
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

{style="table-layout:auto"}

## Marketing Lists

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `id` | `marketingListID` | Primary Identity |
| `name` | `marketingListName` |
| `description` | `marketingListDescription` |
| `createdAt` | `extSourceSystemAudit.createdDate` |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |

{style="table-layout:auto"}

## Marketing List Membership

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `marketingListMemberID` | `marketingListMemberID` | Primary Identity |
| `marketingListID` | `marketingListID` | Relationship |
| `personID`| `personID` | Relationship |
| `createdAt` | `extSourceSystemAudit.createdDate` |

{style="table-layout:auto"}

## Named Accounts

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

{style="table-layout:auto"}

## Opportunities

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `id` | `opportunityID` | Primary Identity |
| `externalOpportunityId` | `extSourceSystemAudit.externalID` | Secondary Identity |
| `mktoCdpAccountOrgId` | `accountID` | Relationship |
| `description` | `opportunityDescription` |
| `name` | `opportunityName` |
| `stage` | `opportunityStage` |
| `type` | `opportunityType` |
| `createdAt` | `extSourceSystemAudit.createdDate` |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |
| `expectedRevenue` | `expectedRevenue.amount` |
| `amount` | `opportunityAmount.amount` |
| `closeDate` | `expectedCloseDate` |
| `fiscalQuarter` | `fiscalQuarter` |
| `fiscalYear` | `fiscalYear` |
| `forecastCategory` | `forecastCategory` |
| `forecastCategoryName` | `forecastCategoryName` |
| `isClosed` | `isClosed` |
| `isWon` | `isWon` |
| `quantity` | `opportunityQuantity` |
| `probability` | `probabilityPercentage` |
| `Campaign-ID` | `campaignID` | Recommended only if you use the Salesforce integration. |
| `lastActivityDate` | `lastActivityDate` |
| `leadSource` | `leadSource` |
| `nextStep` | `nextStep` |

{style="table-layout:auto"}

## Opportunity Person Relations

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `id` | `opportunityPersonID` | Primary Identity |
| `mktoCdpSfdcId` | `extSourceSystemAudit.externalID` | Secondary Identity |
| `mktoCdpOpptyId` | `opportunityID` | Relationship |
| `leadId` | `personID` | Relationship |
| `role` | `personRole` |
| `isPrimary` | `isPrimary` |
| `createdAt` | `extSourceSystemAudit.createdDate` |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |

{style="table-layout:auto"}

## Persons

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
| `leadScore` | `personComponents.personScore` |
| `leadSource` | `personComponents.personSource` |
| `leadStatus` | `personComponents.personStatus` |
| `personType` | `personComponents.personType` |
| `leadPartitionId` | `personComponents.personGroupID` |
| `mktoCdpCnvContactPersonId` | `personComponents.sourceConvertedContactID` |
| `contactCompany` | `personComponents.sourceAccountID` |
| `sfdcContactId` | `personComponents.sourceExternalID` | Recommended only if you use the Salesforce integration. |
| `id` | `personComponents.sourcePersonID` |
| `email` | `personComponents.workEmail.address` |
| `email` | `workEmail.address` |

{style="table-layout:auto"}

## Next steps

By reading this document, you have gained insight on the mapping relationship between your [!DNL Marketo] datasets and their corresponding XDM fields. See the tutorial on [creating a [!DNL Marketo] source connection](../../../tutorials/ui/create/adobe-applications/marketo.md) to complete your [!DNL Marketo] dataflow.
