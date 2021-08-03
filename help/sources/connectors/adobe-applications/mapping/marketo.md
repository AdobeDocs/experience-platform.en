---
keywords: Experience Platform;home;popular topics;Marketo Engage;marketo engage;Marketo;mapping
solution: Experience Platform
title: Mapping Fields for the Marketo Engage Source
topic-legacy: overview
description: The tables below contains the mappings between the fields in the Marketo datasets and their corresponding XDM fields.
exl-id: 2b217bba-2748-4d6f-85ac-5f64d5e99d49
---
# [!DNL Marketo Engage] field mappings

The tables below contain the mappings between the fields in the nine [!DNL Marketo] datasets and their corresponding Experience Data Model (XDM) fields.

## Activities {#activities}

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `_id` | `_id` |
| `personID` | `personID` | This is the primary identity. |
| `eventType` | `eventType`|
| `producedBy` | `producedBy` |
| `timestamp` | `timestamp` |
| `web.webPageDetails._marketo.URL` | `web.webPageDetails._marketo.URL` |
| `environment.browserDetails.userAgent` | `environment.browserDetails.userAgent` |
| `environment.ipV4` | `environment.ipV4`|
| `search.keywords` | `search.keywords` |
| `search.searchEngine` | `search.searchEngine` |
| `web.webPageDetails.webPageID` | `web.webPageDetails.webPageID` |
| `web.webPageDetails.name` | `web.webPageDetails.name` |
| `web.webPageDetails.isPersonalizedURL` | `web.webPageDetails.isPersonalizedURL` |
| `web.webPageDetails.queryParameters` | `web.webPageDetails.queryParameters` |
| `web.webReferrer.URL` | `web.webReferrer.URL` |
| `listOperations.listID` | `listOperations.listID` |
| `opportunityEvent.isPrimary` | `opportunityEvent.isPrimary` |
| `opportunityEvent.opportunityID` | `opportunityEvent.opportunityID` |
| `opportunityEvent.role` | `opportunityEvent.role` |
| `leadOperation.newLead.createdDate` | `leadOperation.newLead.createdDate` |
| `leadOperation.newLead.formName` | `leadOperation.newLead.formName` |
| `leadOperation.newLead.leadSource`| `leadOperation.newLead.leadSource` |
| `leadOperation.newLead.listName` | `leadOperation.newLead.listName` |
| `leadOperation.newLead.sfdcType` | `leadOperation.newLead.sfdcType` |
| `leadOperation.newLead.sourceType` | `leadOperation.newLead.sourceType` |
| `leadOperation.convertLead.assignTo` | `leadOperation.convertLead.assignTo` |
| `leadOperation.convertLead.convertedStatus` | `leadOperation.convertLead.convertedStatus` |
| `leadOperation.convertLead.isSentNotificationEmail` | `leadOperation.convertLead.isSentNotificationEmail` |
| `directMarketing.mailingID` | `directMarketing.mailingID` |
| `directMarketing.mailingName` | `directMarketing.mailingName` |
| `directMarketing.testVariantName` | `directMarketing.testVariantName` |
| `directMarketing.testVariantID` | `directMarketing.testVariantID` |
| `directMarketing.emailBouncedCode` | `directMarketing.emailBouncedCode` |
| `directMarketing.emailBouncedDetails` | `directMarketing.emailBouncedDetails` |
| `directMarketing.email` | `directMarketing.email` |
| `device.isMobileDevice` | `device.isMobileDevice` |
| `device.model` | `device.model` |
| `environment.operatingSystem` | `environment.operatingSystem` |
| `directMarketing.linkURL` | `directMarketing.linkURL` |
| `web.webInteraction.linkID` | `web.webInteraction.linkID` |
| `web.fillOutForm.webFormID` | `web.fillOutForm.webFormID` |
| `web.fillOutForm.webFormName` | `web.fillOutForm.webFormName` |
| `web.webInteraction.linkURL` | `web.webInteraction.linkURL` |
| `leadOperation.changeScore.changeValue` | `leadOperation.changeScore.changeValue` |
| `leadOperation.changeScore.newValue` | `leadOperation.changeScore.newValue` |
| `leadOperation.changeScore.oldValue` | `leadOperation.changeScore.oldValue` |
| `leadOperation.changeScore.priority` | `leadOperation.changeScore.priority` |
| `leadOperation.changeScore.reason` | `leadOperation.changeScore.reason` |
| `leadOperation.changeScore.relativeScore` | `leadOperation.changeScore.relativeScore` |
| `leadOperation.changeScore.relativeUrgency` | `leadOperation.changeScore.relativeUrgency` |
| `leadOperation.changeScore.scoreAttributeID` | `leadOperation.changeScore.scoreAttributeID` |
| `leadOperation.changeScore.scoreAttributeName` | `leadOperation.changeScore.scoreAttributeName` |
| `leadOperation.changeScore.urgency` | `leadOperation.changeScore.urgency` |
| `opportunityEvent.dataValueChanges.attributeName` | `opportunityEvent.dataValueChanges.attributeName` |
| `opportunityEvent.dataValueChanges.newValue` | `opportunityEvent.dataValueChanges.newValue` |
| `opportunityEvent.dataValueChanges.oldValue` | `opportunityEvent.dataValueChanges.oldValue` |
| `leadOperation.campaignProgression.campaignID` | `leadOperation.campaignProgression.campaignID` |
| `leadOperation.campaignProgression.isAcquiredBy` | `leadOperation.campaignProgression.isAcquiredBy` |
| `leadOperation.campaignProgression.isSuccessful` | `leadOperation.campaignProgression.isSuccessful` |
| `leadOperation.campaignProgression.newStatusID` | `leadOperation.campaignProgression.newStatusID` |
| `leadOperation.campaignProgression.newStatusName` | `leadOperation.campaignProgression.newStatusName` |
| `leadOperation.campaignProgression.oldStatusID` | `leadOperation.campaignProgression.oldStatusID` |
| `leadOperation.campaignProgression.oldStatusName` | `leadOperation.campaignProgression.oldStatusName` |
| `leadOperation.campaignProgression.reason` | `leadOperation.campaignProgression.reason` |
| `leadOperation.interestingMoment.date` | `leadOperation.interestingMoment.date` |
| `leadOperation.interestingMoment.description` | `leadOperation.interestingMoment.description` |
| `leadOperation.interestingMoment.source` | `leadOperation.interestingMoment.source` |
| `leadOperation.interestingMoment.type` | `leadOperation.interestingMoment.type` |

{style="table-layout:auto"}

## Programs {#programs}

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `id` | `campaignID` | This is the primary identity. |
| `sfdcId` | `extSourceSystemAudit.externalID` | This is the secondary identity. |
| `name` | `campaignName` |
| `description` | `campaignDescription` |
| `type` | `campaignType` |
| `status` | `campaignStatus` |
| `channel` | `channelName` |
| `createdAt` | `extSourceSystemAudit.createdDate` |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |
| `cost` | `actualCost.amount` |
| `parentProgramId` | `parentCampaignID` |
| `integrationPartner` | `integrationPartnerName` |
| `webinarSessionName` | `webinarSessionName` |
| `webinarSessionDescription` | `webinarSessionDescription` |
| `webinarHistorySyncStatus` | `webinarHistorySyncStatus` |
| `webinarHistorySyncDate` | `webinarHistorySyncDate` |
| `startDate` | `campaignStartDate` |
| `endDate` | `campaignEndDate` |

{style="table-layout:auto"}

## Program memberships {#program-memberships}

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `id` | `campaignMemberID` | This is the primary identity. |
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
| `sfdc.crmId` | `extSourceSystemAudit.externalID` |
| `sfdc.lastStatus` | `lastStatus` |
| `sfdc.hasResponded` | `hasResponded` |
| `sfdc.firstRespondedDate` | `firstRespondedDate` |
| `createdAt` | `extSourceSystemAudit.createdDate` |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |

{style="table-layout:auto"}

## Companies {#companies}

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `id` | `accountID` | This is the primary identity. |
| `mktoCdpExternalId` | `extSourceSystemAudit.externalID` | This is the secondary identity and is applicable only if you have the [!DNL Salesforce] integration. |
| `msftCdpExternalId` | `extSourceSystemAudit.externalID` | This is the secondary identity and is applicable only if you have the [!DNL Microsoft Dynamics] integration. |
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
| `mktoCdpParentOrgId` | `accountParentID` |

{style="table-layout:auto"}

## Static lists {#static-lists}

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `id` | `marketingListID` | This is the primary identity. |
| `name` | `marketingListName` |
| `description` | `marketingListDescription` |
| `createdAt` | `extSourceSystemAudit.createdDate` |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |

{style="table-layout:auto"}

## Static list memberships {#static-list-memberships}

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `staticListMemberID` | `marketingListMemberID` | This is the primary identity. |
| `staticListID` | `marketingListID` | Relationship |
| `personID`| `personID` | Relationship |
| `createdAt` | `extSourceSystemAudit.createdDate` |

{style="table-layout:auto"}

## Named accounts {#named-accounts}

>[!IMPORTANT]
>
>The named accounts dataset is only necessary with Marketo's account-based marketing (ABM) feature. If you are not using ABM, then you do not need to set up mappings for named accounts.

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `id` | `accountID` | This is the primary identity. |
| `crmGuid` | `extSourceSystemAudit.externalID` | This is the secondary identity. |
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

## Opportunities {#opportunities}

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `id` | `opportunityID` | This is the primary identity. |
| `externalOpportunityId` | `extSourceSystemAudit.externalID` | This is the secondary identity. |
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
| `mktoCdpSourceCampaignId` | `campaignID` | This dataset is recommended only if you are using the [!DNL Salesforce] integration. |
| `lastActivityDate` | `lastActivityDate` |
| `leadSource` | `leadSource` |
| `nextStep` | `nextStep` |

{style="table-layout:auto"}

## Opportunity contact roles {#opportunity-contact-roles}

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `id` | `opportunityPersonID` | This is the primary identity |
| `mktoCdpSfdcId` | `extSourceSystemAudit.externalID` | This is the secondary identity. |
| `mktoCdpOpptyId` | `opportunityID` | Relationship |
| `leadId` | `personID` | Relationship |
| `role` | `personRole` |
| `isPrimary` | `isPrimary` |
| `createdAt` | `extSourceSystemAudit.createdDate` |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |

{style="table-layout:auto"}

## Persons {#persons}

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `id` | `personID` | This is the primary identity. |
| `iif(unsubscribed == 'true', 'n', 'y' ))` | `consents.marketing.email.val` | If unsubscribed is `true` (for example, value = `1`),  then set `consents.marketing.email.val` as (`n`). If unsubscribed is `false` (for example, value = `0`),  then set `consents.marketing.email.val` as `null`. |
| `unsubscribedReason` | `consents.marketing.email.reason` |
| `contactCompany` | `b2b.accountID` |
| `marketingSuspended` | `b2b.isMarketingSuspended` |
| `marketingSuspendedCause` | `b2b.marketingSuspendedCause` |
| `leadScore` | `b2b.personScore` |
| `leadSource` | `b2b.personSource` |
| `leadStatus` | `b2b.personStatus` |
| `personType` | `b2b.personType` |
| `leadPartitionId` | `b2b.personGroupID` |
| `mktoCdpIsConverted` | `b2b.isConverted` |
| `mktoCdpConvertedDate` | `b2b.convertedDate` |
| `decode(sfdcType, "Contact", sfdcContactId, "Lead", sfdcLeadId , "")` | `extSourceSystemAudit.externalID` | This is the secondary identity using the `Lead` namespace. This is a calculated field and is applicable only if you have the [!DNL Salesforce] integration. |
| `decode(msftType, "Contact", msftContactId, "Lead", msftLeadId , "")` | `extSourceSystemAudit.externalID` | This is the secondary identity using the `Lead` namespace. This is a calculated field and is applicable only if you have the [!DNL Microsoft Dynamics] integration. |
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
| `contactCompany` | `personComponents.sourceAccountID` |
| `decode(sfdcType, "Contact", sfdcContactId, "Lead", sfdcLeadId , "")` | `personComponents.sourceExternalID` | This is a calculated field and is applicable only if you have the [!DNL Salesforce] integration. |
| `decode(msftType, "Contact", msftContactId, "Lead", msftLeadId , "")` | `personComponents.sourceExternalID` | This is a calculated field and is applicable only if you have the [!DNL Microsoft Dynamics] integration. |
| `id` | `personComponents.sourcePersonID` |
| `email` | `personComponents.workEmail.address` |
| `email` | `workEmail.address` |
| `to_object('ECID',arrays_to_objects('id',explode(ecids)))` | `identityMap` | This is a calculated field. |

{style="table-layout:auto"}

>[!NOTE]
>
>The `to_object('ECID',arrays_to_objects('id',explode(ecids)))` source field is a calculated field that must be added using the [!UICONTROL Add calculated field] option in the Platform UI. See the tutorial on [adding calculated fields](../../../../ingestion/tutorials/map-a-csv-file.md) for more information.

## Next steps

By reading this document, you have gained insight on the mapping relationship between your [!DNL Marketo] datasets and their corresponding XDM fields. See the tutorial on [creating a [!DNL Marketo] source connection](../../../tutorials/ui/create/adobe-applications/marketo.md) to complete your [!DNL Marketo] dataflow.
