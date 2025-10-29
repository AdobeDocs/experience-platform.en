---
keywords: Experience Platform;home;popular topics;Marketo Engage;marketo engage;Marketo;mapping
solution: Experience Platform
title: Mapping Fields for the Marketo Engage Source
description: The tables below contains the mappings between the fields in the Marketo datasets and their corresponding XDM fields.
exl-id: 2b217bba-2748-4d6f-85ac-5f64d5e99d49
---
# [!DNL Marketo Engage] field mappings {#marketo-engage-field-mappings}

The tables below contain the mappings between the fields in the nine [!DNL Marketo] datasets and their corresponding Experience Data Model (XDM) fields.

>[!TIP]
>
>All [!DNL Marketo] datasets except `Activities` now support `isDeleted`. Your existing dataflows will automatically include `isDeleted`, but will only ingest the flag for newly ingested data. If you want to apply the flag to all of your historical data, then you must stop your existing dataflows and recreate them with the new mapping. Please note that if you remove `isDeleted`, then you will no longer have access to the functionality. It is critical that the mapping is kept after it is auto-populated.

## Activities {#activities}

The [!DNL Marketo] source now supports additional standard activities. To use standard activities, you must update your schema using the [schema auto-generation utility](../marketo/marketo-namespaces.md) because if you create new `activities` dataflow without updating your schema, the mapping templates will fail as the new target fields will not be present in your schema. If you choose not to update your schema, you can still create a new dataflow and dismiss any errors. However, any new or updated fields will not be ingested into Experience Platform.

Read the documentation on [XDM Experience Event class](../../../../xdm/classes/experienceevent.md) for more information on the XDM Class and XDM Field Group(s).

>[!NOTE]
>
>The `iif(${web\.ecid} != null, to_object('ECID', arrays_to_objects('id', explode(last(split(${web\.ecid}, ":")), " "))), null)` source field is a calculated field that must be added using the **[!UICONTROL Add calculated field]** option in the Experience Platform UI. Read the tutorial on [adding calculated fields](../../../../data-prep/ui/mapping.md#calculated-fields) for more information.

| Marketo source field | Activity type ID | Source dataset | XDM target field | Notes |
| -------------------- | ---------------- | -------------- | ---------------- | ----- |
| `_id` |  | `_id` | `_id` |  |
|  |  | `"Marketo"` | `personKey.sourceType` |  |
|  |  | `"${MUNCHKIN_ID}"` | `personKey.sourceInstanceID` | MUNCHKIN_ID will be replaced as part of explore API |
| `leadId` |  | `personID` | `personKey.sourceID` |  |
|  |  | `concat(personID,"@${MUNCHKIN_ID}.Marketo")` | `personKey.sourceKey` | Primary identity. MUNCHKIN_ID will be replaced as part of explore API |
| `activityTypeId` |  | `eventType` | `eventType` |  |
| <ul><li>If the <code>activityTypeId</code> is 1, 2, 3, 9, 10, or 11 &rarr; mark <code>producedBy</code> as <strong>self</strong>.</li><li>If the <code>activityTypeId</code> is 6, 7, 8, 12, 21, 22, 24, 25, 27, 32, 34, 35, 36, 46, 101, 104, 110, 113, 114, or 115 &rarr; mark <code>producedBy</code> as <strong>system</strong>.</li><li>For all other values &rarr; mark <code>producedBy</code> as <strong>self</strong>.</li></ul> |  | `producedBy` | `producedBy` |  |
| `activityDate` |  | `timestamp` | `timestamp` |  | 
| `attributes.Webpage URL` |  | `web.webPageDetails.URL`| `web.webPageDetails.URL` |  |  
| `attributes.User Agent` |  | `environment.browserDetails.userAgent` | `environment.browserDetails.userAgent` |  |
| `attributes.Client IP Address` |  | `environment.ipV4` | `environment.ipV4` |  |
| `attributes.Search Query` |  | `search.keywords` | `search.keywords` |  |  
| `attributes.Search Engine` |  | `search.searchEngine` | `search.searchEngine` |  |
| `primaryAttributeValue when activityTypeId = 1` | 1 | `web.webPageDetails.webPageID` | `web.webPageDetails.webPageID` |  |
| `primaryAttributeValue when activityTypeId = 1` | 1 | `web.webPageDetails.name` | `web.webPageDetails.name` |  |
| `attributes.Personalized URL` | 1 | `web.webPageDetails.isPersonalizedURL` | `web.webPageDetails.isPersonalizedURL` |  |
| `attributes.Query Parameters`| 1 | `web.webPageDetails.queryParameters` | `web.webPageDetails.queryParameters` |  |
| `attributes.Referrer URL` |  | `web.webReferrer.URL` | `web.webReferrer.URL` |  |
| `primaryAttributeValueId when activityTypeId in (24, 25)` | 24, 25 | `iif(${listOperations\.listID} != null && ${listOperations\.listID} != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}", "sourceID", ${listOperations\.listID}, "sourceKey", concat(${listOperations\.listID},"@${MUNCHKIN_ID}.Marketo")), null)` | `listOperations.listKey` |  |
| `attributes.Is Primary` | 34,35,36 | `opportunityEvent.isPrimary` | `opportunityEvent.isPrimary` |  |
| primaryAttributeValueId when activityTypeId in (34, 35, 36) | 34, 35, 36 | `iif(${opportunityEvent\.opportunityID} != null && ${opportunityEvent\.opportunityID} != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}","sourceID",${opportunityEvent\.opportunityID}, "sourceKey", concat(${opportunityEvent\.opportunityID},"@${MUNCHKIN_ID}.Marketo")), null)` | `opportunityEvent.opportunityKey` |  |
| `attributes.Role` | 34, 35, 36 | `opportunityEvent.role` | `opportunityEvent.role` |  |
| `attributes.Created Date` |  | `leadOperation.newLead.createdDate` | `leadOperation.newLead.createdDate` |  |
| `attributes.Form Name` |  | `leadOperation.newLead.formName` | `leadOperation.newLead.formName` |  |
| `attributes.Lead Source` |  | `leadOperation.newLead.leadSource` | `leadOperation.newLead.leadSource` |  |
| `attributes.List Name` |  | `leadOperation.newLead.listName` | `leadOperation.newLead.listName` |  |
| `attributes.SFDC Type` |  | `leadOperation.newLead.sfdcType` | `leadOperation.newLead.sfdcType` |  |
| `attributes.Source Type` |  | `leadOperation.newLead.sourceType` | `leadOperation.newLead.sourceType` |  |
| primaryAttributeValue when activityTypeId = 21 | 21  | `leadOperation.convertLead.assignTo` | `leadOperation.convertLead.assignTo` |  |
| `attributes.Converted Status` | 21 | `leadOperation.convertLead.convertedStatus` | `leadOperation.convertLead.convertedStatus` |  |
| `attributes.Send Notification Email` | 21 | `leadOperation.convertLead.isSentNotificationEmail` | `leadOperation.convertLead.isSentNotificationEmail` |  |
| primaryAttributeValueId when activityTypeId in (7, 8, 9, 10, 11, 27) | 7, 8, 9, 10, 11, 27 | `iif(${directMarketing\\.mailingID} != null && ${directMarketing\\.mailingID} != \"\", to_object(\"sourceType\", \"Marketo\", \"sourceInstanceID\", \"${MUNCHKIN_ID}\",\"sourceID\",${directMarketing\\.mailingID}, \"sourceKey\", concat(${directMarketing\\.mailingID},\"@${MUNCHKIN_ID}.Marketo\")), null)` | `directMarketing.mailingKey` |  |
| primaryAttributeValueId when activityTypeId in (7, 8, 9, 10, 11, 27) | 7, 8, 9, 10, 11, 27 | `directMarketing.mailingName` | `directMarketing.mailingName` |  |
|  |  | `directMarketing.testVariantName` | `directMarketing.testVariantName` |  |
| `attributes.Test Variant` |  | `directMarketing.testVariantID` | `directMarketing.testVariantID` |  |
| `attributes.Subcategory` <ul><li><strong>activityTypeId = 8</strong><ul><li>1099 &rarr; MESSAGE BLOCKED</li><li>1003 &rarr; SPAM BLOCKED ON SOURCE</li><li>1004 &rarr; SPAM BLOCKED ON MESSAGE</li><li>2003 &rarr; EMAIL ADDRESS INVALID</li><li>2001 &rarr; EMAIL ADDRESS ERROR</li><li>*` &rarr;` UNKNOWN REASON FOR BOUNCE</li></ul></li><li><strong>activityTypeId = 27</strong><ul><li>3999 &rarr; MESSAGE NOT ACCEPTED</li><li>3001 &rarr; MAILBOX FULL</li><li>3004 &rarr; TIMEOUT OCCURRED</li><li>4003 &rarr; DNS FAILURE</li><li>4002 &rarr; MESSAGE TOO LARGE</li><li>4006 &rarr; POLICY VIOLATION</li><li>4999 &rarr; TRANSIENT FAILURE</li><li>9999 &rarr; BAD RESPONSE RECEIVED</li><li>* &rarr; UNKNOWN REASON FOR SOFT BOUNCE</li></ul></li></ul> | 8, 27 | `directMarketing.emailBouncedCode` | `directMarketing.emailBouncedCode` |  |
| `attributes.Details` |  | `directMarketing.emailBouncedDetails` | `directMarketing.emailBouncedDetails` |  |
| `attributes.Email` |  | `directMarketing.email` | `directMarketing.email` |  |
| `attributes.Is Mobile Device` |  | `device.isMobileDevice` | `device.isMobileDevice` |  |
| `attributes.device` |  | `device.model` | `device.model` |  |
| `attributes.Platform` |  | `environment.operatingSystem` | `environment.operatingSystem` |  |
| `attributes.Link` |  | `directMarketing.linkURL` | `directMarketing.linkURL` |  |
| primaryAttributeValueId when activityTypeId = 3 else attributes.Link ID | 3 | `iif(${web\\.webInteraction\\.linkID} != null && ${web\\.webInteraction\\.linkID} != \"\", to_object(\"sourceType\", \"Marketo\", \"sourceInstanceID\", \"${MUNCHKIN_ID}\",\"sourceID\",${web\\.webInteraction\\.linkID}, \"sourceKey\", concat(${web\\.webInteraction\\.linkID},\"@${MUNCHKIN_ID}.Marketo\")), null)` | `web.webInteraction.webInteractionKey` |  |
| primaryAttributeValueId when activityTypeId = 2 else attributes.Webform ID | 2 | `iif(${web\\.fillOutForm\\.webFormID} != null && ${web\\.fillOutForm\\.webFormID} != \"\", to_object(\"sourceType\", \"Marketo\", \"sourceInstanceID\", \"${MUNCHKIN_ID}\",\"sourceID\",${web\\.fillOutForm\\.webFormID}, \"sourceKey\", concat(${web\\.fillOutForm\\.webFormID},\"@${MUNCHKIN_ID}.Marketo\")), null)` | `web.fillOutForm.webFormKey` |  |
| primaryAttributeValueId when activityTypeId = 2 else null | 2 | `web.fillOutForm.webFormName` | `web.fillOutForm.webFormName` |  |
| primaryAttributeValueId when activityTypeId = 3 else attributes.Link | 3 | `web.webInteraction.linkURL` | `web.webInteraction.linkURL` |  |
| `attributes.Change Value` | 22 | `leadOperation.changeScore.changeValue` | `leadOperation.changeScore.changeValue` |  |
| `attributes.New Value` | 22 | `leadOperation.changeScore.newValue` | `leadOperation.changeScore.newValue` |  |
| `attributes.Old Value` | 22 | `leadOperation.changeScore.oldValue` | `leadOperation.changeScore.oldValue` |  |
| `attributes.Priority` | 22 | `leadOperation.changeScore.priority` | `leadOperation.changeScore.priority` |  |
| `attributes.Reason` | 22 | `leadOperation.changeScore.reason` | `leadOperation.changeScore.reason` |  |
| `attributes.Relative Score` | 22 | `leadOperation.changeScore.relativeScore` | `leadOperation.changeScore.relativeScore` |  |
| `attributes.Relative Urgency` | 22 | `leadOperation.changeScore.relativeUrgency` | `leadOperation.changeScore.relativeUrgency` |  |
| primaryAttributeValueId when activityTypeId = 22 | 22 | `iif(${leadOperation\.changeScore\.scoreAttributeID} != null && ${leadOperation\.changeScore\.scoreAttributeID} != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}","sourceID",${leadOperation\.changeScore\.scoreAttributeID}, "sourceKey", concat(${leadOperation\.changeScore\.scoreAttributeID},"@${MUNCHKIN_ID}.Marketo")), null)` | `leadOperation.changeScore.scoreAttributeKey` |  |
| primaryAttributeValueId when activityTypeId = 22 | 22 | `leadOperation.changeScore.scoreAttributeName` | `leadOperation.changeScore.scoreAttributeName` |  |
| `attributes.Urgency` | 22 | `leadOperation.changeScore.urgency` | `leadOperation.changeScore.urgency` |  |
| `attributes.Data Value Changes` |  | `json_to_object(${opportunityEvent\.dataValueChanges})` | `opportunityEvent.dataValueChanges` |  |
| primaryAttributeValueId when activityTypeId = 104 | 104 | `iif(${leadOperation\.campaignProgression\.campaignID} != null && ${leadOperation\.campaignProgression\.campaignID} != "" , to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}", "sourceID", ${leadOperation\.campaignProgression\.campaignID}, "sourceKey", concat(${leadOperation\.campaignProgression\.campaignID},"@${MUNCHKIN_ID}.Marketo")), null)` | `leadOperation.campaignProgression.campaignKey` |  |
| `attributes.Acquired By` | 104 | `leadOperation.campaignProgression.isAcquiredBy` | `leadOperation.campaignProgression.isAcquiredBy` |  |
| `attributes.Success` | 104 | `leadOperation.campaignProgression.isSuccessful` | `leadOperation.campaignProgression.isSuccessful` |  |
| `attributes.New Status ID` | 104 | `leadOperation.campaignProgression.newStatusID` | `leadOperation.campaignProgression.newStatusID` |  |
| `attributes.New Status` | 104 | `leadOperation.campaignProgression.newStatusName` | `leadOperation.campaignProgression.newStatusName` |  |
| `attributes.Old Status ID` | 104 | `leadOperation.campaignProgression.oldStatusID` | `leadOperation.campaignProgression.oldStatusID` |  |
| `attributes.Old Status` | 104 | `leadOperation.campaignProgression.oldStatusName` | `leadOperation.campaignProgression.oldStatusName` |  |
| `attributes.Reason` | 104 | `leadOperation.campaignProgression.reason` | `leadOperation.campaignProgression.reason` |  |
| `attributes.Date` | 46 | `leadOperation.interestingMoment.date` | `leadOperation.interestingMoment.date` |  |
| `attributes.Description` | 46 | `leadOperation.interestingMoment.description` | `leadOperation.interestingMoment.description` |  |
| `attributes.Source` | 46 | `leadOperation.interestingMoment.source` | `leadOperation.interestingMoment.source` |  |
| primaryAttributeValue when activityTypeId = 46 | 46 | `leadOperation.interestingMoment.type` | `leadOperation.interestingMoment.type` |  |
| primaryAttributeValueId when activityTypeId = 110 | 110 | `iif(${leadOperation\\.callWebhook\\.webhookID} != null && ${leadOperation\\.callWebhook\\.webhookID} != \"\", to_object(\"sourceType\", \"Marketo\", \"sourceInstanceID\", \"${MUNCHKIN_ID}\", \"sourceID\", ${leadOperation\\.callWebhook\\.webhookID}, \"sourceKey\", concat(${leadOperation\\.callWebhook\\.webhookID},\"@${MUNCHKIN_ID}.Marketo\")), null)` | `leadOperation.callWebhook.webhookKey` |  |
| primaryAttributeValueId when activityTypeId = 110 | 110 | `leadOperation.callWebhook.webhookName` | `leadOperation.callWebhook.webhookName` |  |
| `attributes.Error Type` | 110 | `leadOperation.callWebhook.responseCode` | `leadOperation.callWebhook.responseCode` |  |
| primaryAttributeValueId when activityTypeId = 115 | 115 | `iif(${leadOperation\\.changeCampaignCadence\\.campaignID} != null && ${leadOperation\\.changeCampaignCadence\\.campaignID} != \"\", to_object(\"sourceType\", \"Marketo\", \"sourceInstanceID\", \"${MUNCHKIN_ID}\", \"sourceID\", ${leadOperation\\.changeCampaignCadence\\.campaignID}, \"sourceKey\", concat(${leadOperation\\.changeCampaignCadence\\.campaignID},\"@${MUNCHKIN_ID}.Marketo\")), null)` | `leadOperation.changeCampaignCadence.campaignKey` |  |
| `attributes.New Nurture Cadence`| 115 | `leadOperation.changeCampaignCadence.newCadence` | `leadOperation.changeCampaignCadence.newCadence` |  |
| `attributes.Previous Nurture Cadence` | 115 | `leadOperation.changeCampaignCadence.previousCadence` | `leadOperation.changeCampaignCadence.previousCadence` |  |
| primaryAttributeValueId when activityTypeId = 114 | 113 | `iif(${leadOperation\.addToCampaign\.campaignID} != null && ${leadOperation\.addToCampaign\.campaignID} != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}","sourceID",${leadOperation\.addToCampaign\.campaignID}, "sourceKey", concat(${leadOperation\.addToCampaign\.campaignID},"@${MUNCHKIN_ID}.Marketo")), null)` | `leadOperation.addToCampaign.campaignKey` |  |
| `attributes.Track ID` | 113 | `iif(${leadOperation\.addToCampaign\.streamID} != null && ${leadOperation\.addToCampaign\.streamID} != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}","sourceID",${leadOperation\.addToCampaign\.streamID}, "sourceKey", concat(${leadOperation\.addToCampaign\.streamID},"@${MUNCHKIN_ID}.Marketo")), null)` | `leadOperation.addToCampaign.streamKey` |  |
| `attributes.Stream Name` | 113 | `leadOperation.addToCampaign.streamName` | `leadOperation.addToCampaign.streamName` |  |
| primaryAttributeValueId when activityTypeId = 115 | 115 | `iif(${leadOperation\.changeCampaignStream\.campaignID} != null && ${leadOperation\.changeCampaignStream\.campaignID} != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}","sourceID",${leadOperation\.changeCampaignStream\.campaignID}, "sourceKey", concat(${leadOperation\.changeCampaignStream\.campaignID},"@${MUNCHKIN_ID}.Marketo")), null)` | `leadOperation.changeCampaignStream.campaignKey` |  |
| `attributes.New Track ID` | 115 | `iif(${leadOperation\.changeCampaignStream\.newStreamID} != null && ${leadOperation\.changeCampaignStream\.newStreamID} != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}","sourceID",${leadOperation\.changeCampaignStream\.newStreamID}, "sourceKey", concat(${leadOperation\.changeCampaignStream\.newStreamID},"@${MUNCHKIN_ID}.Marketo")), null)` | `leadOperation.changeCampaignStream.newStreamKey` |  |
| `attributes.New Track Name` | 115 | `leadOperation.changeCampaignStream.newStreamName` | `leadOperation.changeCampaignStream.newStreamName` |  |
| `attributes.Previous Track ID` | 115 | `iif(${leadOperation\.changeCampaignStream\.previousStreamID} != null && ${leadOperation\.changeCampaignStream\.previousStreamID} != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}","sourceID",${leadOperation\.changeCampaignStream\.previousStreamID}, "sourceKey", concat(${leadOperation\.changeCampaignStream\.previousStreamID},"@${MUNCHKIN_ID}.Marketo")), null)` | `leadOperation.changeCampaignStream.previousStreamKey` |  |
| `attributes.Previous Stream Name` | 115 | `leadOperation.changeCampaignStream.previousStreamName` | `leadOperation.changeCampaignStream.previousStreamName` |  |
| primaryAttributeValueId when activityTypeId = 101 | 101 | `iif(${leadOperation\.changeRevenueStage\.modelID} != null && ${leadOperation\.changeRevenueStage\.modelID} != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}","sourceID",${leadOperation\.changeRevenueStage\.modelID}, "sourceKey", concat(${leadOperation\.changeRevenueStage\.modelID},"@${MUNCHKIN_ID}.Marketo")), null)` | `leadOperation.changeRevenueStage.modelKey` |  |
| primaryAttributeValueId when activityTypeId = 101 | 101 | `leadOperation.changeRevenueStage.modelName` | `leadOperation.changeRevenueStage.modelName` |  |
| `attributes.New Stage ID` | 101 | `iif(${leadOperation\.changeRevenueStage\.newStageID} != null && ${leadOperation\.changeRevenueStage\.newStageID} != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}","sourceID",${leadOperation\.changeRevenueStage\.newStageID}, "sourceKey", concat(${leadOperation\.changeRevenueStage\.newStageID},"@${MUNCHKIN_ID}.Marketo")), null)` | `leadOperation.changeRevenueStage.newStageKey` |  |
| `attributes.New Stage` | 101 | `leadOperation.changeRevenueStage.newStageName` | `leadOperation.changeRevenueStage.newStageName` |  |
| `attributes.Old Stage ID` | 101 | `iif(${leadOperation\\.changeRevenueStage\\.previousStageID} != null && ${leadOperation\\.changeRevenueStage\\.previousStageID} != \"\", to_object(\"sourceType\", \"Marketo\", \"sourceInstanceID\", \"${MUNCHKIN_ID}\",\"sourceID\",${leadOperation\\.changeRevenueStage\\.previousStageID}, \"sourceKey\", concat(${leadOperation\\.changeRevenueStage\\.previousStageID},\"@${MUNCHKIN_ID}.Marketo\")), null)` | `leadOperation.changeRevenueStage.previousStageKey` |  |
| `attributes.Old Stage` | 101 | `leadOperation.changeRevenueStage.previousStageName` | `leadOperation.changeRevenueStage.previousStageName` |  |
| `attributes.Reason` | 101 | `leadOperation.changeRevenueStage.reason` | `leadOperation.changeRevenueStage.reason` |  |
| `attributes.Merge IDs` when activityTypeId = 32 | 32 | `json_to_object(${leadOperation\.mergeLeads\.mergeIDs})` | `leadOperation.mergeLeads.sourceKeys` |  |
| `attributes.Master Updated` | 32 | `leadOperation.mergeLeads.targetUpdated` | `leadOperation.mergeLeads.targetUpdated` |  |
| `attributes.Merged in Sales` | 32 | `leadOperation.mergeLeads.mergedInCRM` | `leadOperation.mergeLeads.mergedInCRM` |  |
| `attributes.Merge Source` | 32 | `leadOperation.mergeLeads.mergeSource` | `leadOperation.mergeLeads.mergeSource` |  |
| primaryAttributeValueId when activityTypeId = 6 | 6 | `iif(${directMarketing\.emailSent\.mailingID} != null && ${directMarketing\.emailSent\.mailingID} != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}","sourceID",${directMarketing\.emailSent\.mailingID}, "sourceKey", concat(${directMarketing\.emailSent\.mailingID},"@${MUNCHKIN_ID}.Marketo")), null)` | `directMarketing.emailSent.mailingKey` |  |
| primaryAttributeValueId when activityTypeId = 6 | 6 | `directMarketing.emailSent.mailingName` | `directMarketing.emailSent.mailingName` |  |
| `attributes.Test Variant` | 6 | `directMarketing.emailSent.testVariantID` | `directMarketing.emailSent.testVariantID` |  |
| Note - derived from secondary assets value |  | `directMarketing.emailSent.testVariantName` | `directMarketing.emailSent.testVariantName` |  |
| `attributes.Campaign Run ID` | 6 | `directMarketing.emailSent.automationRunID` |  `directMarketing.emailSent.automationRunID` |  |  
|  |  | `directMarketing.automationRunID` |  `directMarketing.automationRunID` |  |

{style="table-layout:auto"}

## Programs {#programs}

Read the [XDM Business Campaign overview](../../../../xdm/classes/b2b/business-campaign.md) for more information on the XDM class. For more information on the XDM field groups, read the [Business Campaign Details schema field group](../../../../xdm/field-groups/b2b-campaign/details.md) guide.

>[!NOTE]
>
>For custom tag types, go to schemas and create new field groups. Then, add all the additional field names required to map the source fields with destination XDM fields.

| Source dataset | XDM target field | Notes |
| -------------- | --------------- | ----- |
| `"${MUNCHKIN_ID}"` | `campaignKey.sourceInstanceID` | MUNCHKIN_ID will be replaced as part of explore API |
| `"Marketo"` | `campaignKey.sourceType` |  |
| `channel` | `channelName` |  |
| `concat(id,"@${MUNCHKIN_ID}.Marketo")` | `campaignKey.sourceKey` | Primary Identity. MUNCHKIN_ID will be replaced as part of explore API |
| `cost` | `actualCost.amount` |  |
| `createdAt` | `extSourceSystemAudit.createdDate` |  |
| `description` | `campaignDescription` |  |
| `endDate` | `campaignEndDate` |  |
| `id` | `campaignKey.sourceID` |  |
| `iif(parentProgramId != null && parentProgramId != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}", "sourceID", parentProgramId, "sourceKey", concat(parentProgramId,"@${MUNCHKIN_ID}.Marketo")), null)` | `parentCampaignKey` |  |
| `iif(sfdcId != null && sfdcId != "", to_object("sourceType", "${CRM_TYPE}", "sourceInstanceID", "${CRM_ORG_ID}", "sourceID", sfdcId, "sourceKey", concat(sfdcId,"@${CRM_ORG_ID}.${CRM_TYPE}")), null)` | `extSourceSystemAudit.externalKey` | `extSourceSystemAudit.externalKey.sourceKey` is Secondary Identity. CRM_TYPE and CRM_ORG_ID will be replaced as part of explore API |
| `integrationPartner` | `integrationPartnerName` |  |
| `marketoIsDeleted` | `isDeleted` |  |
| `name` | `campaignName` |  |
| `startDate` | `campaignStartDate` |  |
| `status` | `campaignStatus` |  |
| `type` | `campaignType` |  |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |  |
| `webinarHistorySyncDate` | `webinarHistorySyncDate` |  |
| `webinarHistorySyncStatus` | `webinarHistorySyncStatus` |  |
| `webinarSessionDescription` | `webinarSessionDescription` |  |
| `webinarSessionName` | `webinarSessionName` |  |

{style="table-layout:auto"}

## Program memberships {#program-memberships}

Read the [XDM Business Campaign Members overview](../../../../xdm/classes/b2b/business-campaign-members.md) for more information on the XDM class. For more information on the XDM field groups, read the [XDM Business Campaign Member Details schema field group](../../../../xdm/field-groups/b2b-campaign-members/details.md) guide.

| Source dataset | XDM target field | Notes |
| -------------- | --------------- | ----- |
| `"Marketo"` | `campaignMemberKey.sourceType` |  |
| `"${MUNCHKIN_ID}"` | `campaignMemberKey.sourceInstanceID` | MUNCHKIN_ID will be replaced as part of explore API |
| `id` | `campaignMemberKey.sourceID` |  |
| `concat(id,"@${MUNCHKIN_ID}.Marketo")` | `campaignMemberKey.sourceKey` | Primary Identity. MUNCHKIN_ID will be replaced as part of explore API |
| `iif(programId != null && programId != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}", "sourceID", programId, "sourceKey", concat(programId,"@${MUNCHKIN_ID}.Marketo")), null)` | `campaignKey` | Relationship |
| `iif(leadId != null && leadId != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}", "sourceID", leadId, "sourceKey", concat(leadId,"@${MUNCHKIN_ID}.Marketo")), null)` | `personKey` | Relationship |
| `iif(acquiredByCampaignID != null && acquiredByCampaignID != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}", "sourceID", acquiredByCampaignID, "sourceKey", concat(acquiredByCampaignID,"@${MUNCHKIN_ID}.Marketo")), null)` | `acquiredByCampaignKey` |  |
| `reachedSuccess` | `hasReachedSuccess` |  |
| `isExhausted` | `isExhausted` |  |
| `statusName` | `memberStatus` |  |
| `statusReason` | `memberStatusReason` |  |
| `membershipDate` | `membershipDate` |  |
| `nurtureCadence` | `nurtureCadence` |  |
| `trackName` | `nurtureTrackName` |  |
| `webinarUrl` | `webinarConfirmationUrl` |  |
| `registrationCode` | `webinarRegistrationID` |  |
| `reachedSuccessDate` | `reachedSuccessDate` |  |
| `iif(sfdc.crmId != null && sfdc.crmId != "", to_object("sourceType", "${CRM_TYPE}", "sourceInstanceID", "${CRM_ORG_ID}", "sourceID", sfdc.crmId, "sourceKey", concat(sfdc.crmId,"@${CRM_ORG_ID}.${CRM_TYPE}")), null)` | `extSourceSystemAudit.externalKey` | `extSourceSystemAudit.externalKey.sourceKey` is Secondary Identity. CRM_TYPE and CRM_ORG_ID will be replaced as part of explore API |
| `sfdc.lastStatus` | `lastStatus` |  |
| `sfdc.hasResponded` | `hasResponded` |  |
| `sfdc.firstRespondedDate` | `firstRespondedDate` |  |
| `createdAt` | `extSourceSystemAudit.createdDate` |  |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |  |
| `marketoIsDeleted` | `isDeleted` |  |

{style="table-layout:auto"}

## Companies {#companies}

Read the [XDM Business Account overview](../../../../xdm/classes/b2b/business-account.md) for more information on the XDM class.

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `"Marketo"` | `accountKey.sourceType` | |
| `"${MUNCHKIN_ID}"` | `accountKey.sourceInstanceID` | MUNCHKIN_ID will be replaced as part of explore API |
| `concat(id, ".mkto_org")` | `accountKey.sourceID` | |
| `concat(id, ".mkto_org@${MUNCHKIN_ID}.Marketo")` | `accountKey.sourceKey` | Primary Identity. MUNCHKIN_ID will be replaced as part of explore API |
| <ul><li><code>iif(mktoCdpExternalId != null && mktoCdpExternalId != "", to_object("sourceType", "${CRM_TYPE}", "sourceInstanceID", "${CRM_ORG_ID}", "sourceID", mktoCdpExternalId, "sourceKey", concat(mktoCdpExternalId,"@${CRM_ORG_ID}.${CRM_TYPE}")), null)</code></li><li><code>iif(msftCdpExternalId != null && msftCdpExternalId != "", to_object("sourceType", "${CRM_TYPE}", "sourceInstanceID", "${CRM_ORG_ID}", "sourceID", msftCdpExternalId, "sourceKey", concat(msftCdpExternalId,"@${CRM_ORG_ID}.${CRM_TYPE}")), null)</code></li></ul> | `extSourceSystemAudit.externalKey` | `extSourceSystemAudit.externalKey.sourceKey` is Secondary Identity. CRM_ORG_ID and CRM_TYPE will be replaced as part of explore API |
| `createdAt` | `extSourceSystemAudit.createdDate` | |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` | |
| `billingCity` | `accountBillingAddress.city` | |
| `billingCountry` | `accountBillingAddress.country` | |
| `billingPostalCode` | `accountBillingAddress.postalCode` | |
| `billingState` | `accountBillingAddress.state` | |
| `billingStreet` | `accountBillingAddress.street1` | |
| `annualRevenue` | `accountOrganization.annualRevenue.amount` | |
| `sicCode` | `accountOrganization.SICCode` | |
| `industry` | `accountOrganization.industry` | |
| `numberOfEmployees` | `accountOrganization.numberOfEmployees` | |
| `website` | `accountOrganization.website` | |
| `mainPhone` | `accountPhone.number` | |
| `company` | `accountName` | |
| `companyNotes` | `accountDescription` | |
| `site` | `accountSite` | |
| `iif(mktoCdpParentOrgId != null && mktoCdpParentOrgId != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}", "sourceID", concat(mktoCdpParentOrgId, ".mkto_org"), "sourceKey", concat(mktoCdpParentOrgId, ".mkto_org@${MUNCHKIN_ID}.Marketo")), null)` | `accountParentKey` | |
| `marketoIsDeleted` | `isDeleted` | |

{style="table-layout:auto"}

## Static lists {#static-lists}

Read the [XDM Business Marketing List overview](../../../../xdm/classes/b2b/business-marketing-list.md) for more information on the XDM class.

| Source dataset | XDM target field | Notes |
| -------------- | --------------- | ----- |
| `"Marketo"` | `marketingListKey.sourceType` |  |
| `"${MUNCHKIN_ID}"` | `marketingListKey.sourceInstanceID` | MUNCHKIN_ID will be replaced as part of explore API |
| `id` | `marketingListKey.sourceID` |  |
| `concat(id,"@${MUNCHKIN_ID}.Marketo")` | `marketingListKey.sourceKey` | Primary Identity. MUNCHKIN_ID will be replaced as part of explore API |
| `name` | `marketingListName` |  |
| `description` | `marketingListDescription` |  |
| `createdAt` | `extSourceSystemAudit.createdDate` |  |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |  |
| `marketoIsDeleted` | `isDeleted` |  |

{style="table-layout:auto"}

## Static list memberships {#static-list-memberships}

Read the [XDM Business Marketing List Members overview](../../../../xdm/classes/b2b/business-marketing-list-members.md) for more information on the XDM Class.

| Source dataset | XDM target field | Notes |
| -------------- | --------------- | ----- |
| `"Marketo"` | `marketingListMemberKey.sourceType` |  |
| `"${MUNCHKIN_ID}"` | `marketingListMemberKey.sourceInstanceID` | MUNCHKIN_ID will be replaced as part of explore API |
| `staticListMemberID` | `marketingListMemberKey.sourceID` |  |
| `concat(staticListMemberID,"@${MUNCHKIN_ID}.Marketo")` | `marketingListMemberKey.sourceKey` | Primary Identity. MUNCHKIN_ID will be replaced as part of explore API |
| `iif(staticListID != null && staticListID != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}", "sourceID", staticListID, "sourceKey", concat(staticListID,"@${MUNCHKIN_ID}.Marketo")), null)` | `marketingListKey` | Relationship |
| `iif(personID != null && personID != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}", "sourceID", personID, "sourceKey", concat(personID,"@${MUNCHKIN_ID}.Marketo")), null)` | `personKey` | Relationship |
| `createdAt` | `extSourceSystemAudit.createdDate` |  |
| `marketoIsDeleted` | `isDeleted` |  |

{style="table-layout:auto"}

## Named accounts {#named-accounts}

>[!IMPORTANT]
>
>The named accounts dataset is only necessary with Marketo's account-based marketing (ABM) feature. If you are not using ABM, then you do not need to set up mappings for named accounts.

Read the [XDM Business Account overview](../../../../xdm/classes/b2b/business-account.md) for more information on the XDM class.

| Source dataset | XDM target field | Notes |
| -------------- | --------------- | ----- |
| `"Marketo"` | `accountKey.sourceType` |  |
| `"${MUNCHKIN_ID}"` | `accountKey.sourceInstanceID` | MUNCHKIN_ID will be replaced as part of explore API |
| `concat(id, ".mkto_acct")` | `accountKey.sourceID` |  |
| `concat(id, ".mkto_acct@${MUNCHKIN_ID}.Marketo")` | `accountKey.sourceKey` | Primary Identity. MUNCHKIN_ID will be replaced as part of explore API |
| `iif(crmGuid != null && crmGuid != "", to_object("sourceType", "${CRM_TYPE}", "sourceInstanceID", "${CRM_ORG_ID}", "sourceID", crmGuid, "sourceKey", concat(crmGuid,"@${CRM_ORG_ID}.${CRM_TYPE}")), null)` | `extSourceSystemAudit.externalKey` | `extSourceSystemAudit.externalKey.sourceKey` is Secondary Identity. CRM_TYPE and CRM_ORG_ID will be replaced as part of explore API |
| `createdAt` | `extSourceSystemAudit.createdDate` |  |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |  |
| `city` | `accountBillingAddress.city` |  |
| `country` | `accountBillingAddress.country` |  |
| `state` | `accountBillingAddress.state` |  |
| `annualRevenue` | `accountOrganization.annualRevenue.amount` |  |
| `sicCode` | `accountOrganization.SICCode` |  |
| `industry` | `accountOrganization.industry` |  |
| `logoUrl` | `accountOrganization.logoUrl` |  |
| `numberOfEmployees` | `accountOrganization.numberOfEmployees` |  |
| `name` | `accountName` |  |
| `iif(parentAccountId != null && parentAccountId != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}", "sourceID", concat(parentAccountId, ".mkto_acct"), "sourceKey", concat(parentAccountId, ".mkto_acct@${MUNCHKIN_ID}.Marketo")), null)` | `accountParentKey` |  |
| `sourceType` | `accountSourceType` |  |
| `marketoIsDeleted` | `isDeleted` |  |

{style="table-layout:auto"}

## Opportunities {#opportunities}

Read the [XDM Business Opportunity overview](../../../../xdm/classes/b2b/business-opportunity.md) for more information on the XDM class.

| Source dataset | XDM target field | Notes |
| -------------- | --------------- | ----- |
| `"Marketo"` | `opportunityKey.sourceType` |  |
| `"${MUNCHKIN_ID}"` | `opportunityKey.sourceInstanceID` | MUNCHKIN_ID will be replaced as part of explore API |
| `id` | `opportunityKey.sourceID` |  |
| `concat(id,"@${MUNCHKIN_ID}.Marketo")` | `opportunityKey.sourceKey` | Primary Identity. MUNCHKIN_ID will be replaced as part of explore API |
| `iif(externalOpportunityId != null && externalOpportunityId != "", to_object("sourceType", "${CRM_TYPE}", "sourceInstanceID", "${CRM_ORG_ID}", "sourceID", externalOpportunityId, "sourceKey", concat(externalOpportunityId,"@${CRM_ORG_ID}.${CRM_TYPE}")), null)` | `extSourceSystemAudit.externalKey` | `extSourceSystemAudit.externalKey.sourceKey` is Secondary Identity. CRM_TYPE and CRM_ORG_ID will be replaced as part of explore API |
| `iif(mktoCdpAccountOrgId != null && mktoCdpAccountOrgId != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}", "sourceID", concat(mktoCdpAccountOrgId, ".mkto_org"), "sourceKey", concat(mktoCdpAccountOrgId, ".mkto_org@${MUNCHKIN_ID}.Marketo")), null)` | `accountKey` | Relationship |
| `description` | `opportunityDescription` |  |
| `name` | `opportunityName` |  |
| `stage` | `opportunityStage` |  |
| `type` | `opportunityType` |  |
| `createdAt` | `extSourceSystemAudit.createdDate` |  |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |  |
| `expectedRevenue` | `expectedRevenue.amount` |  |
| `amount` | `opportunityAmount.amount` |  |
| `closeDate` | `expectedCloseDate` |  |
| `fiscalQuarter` | `fiscalQuarter` |  |
| `fiscalYear` | `fiscalYear` |  |
| `forecastCategory` | `forecastCategory` |  |
| `forecastCategoryName` | `forecastCategoryName` |  |
| `isClosed` | `isClosed` |  |
| `isWon` | `isWon` |  |
| `quantity` | `opportunityQuantity` |  |
| `probability` | `probabilityPercentage` |  |
| `iif(mktoCdpSourceCampaignId != null && mktoCdpSourceCampaignId != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}", "sourceID", mktoCdpSourceCampaignId, "sourceKey", concat(mktoCdpSourceCampaignId,"@${MUNCHKIN_ID}.Marketo")), null)` | `campaignKey` | For customers with Salesforce Integration only |
| `lastActivityDate` | `lastActivityDate` |  |
| `leadSource` | `leadSource` |  |
| `nextStep` | `nextStep` |  |
| `marketoIsDeleted` | `isDeleted` |  |

{style="table-layout:auto"}

## Opportunity contact roles {#opportunity-contact-roles}

Read the [XDM Business Opportunity Person Relation overview](../../../../xdm/classes/b2b/business-account-person-relation.md) for more information on the XDM class.

| Source dataset | XDM target field | Notes |
| -------------- | --------------- | ----- |
| `"${MUNCHKIN_ID}"` | `opportunityPersonKey.sourceInstanceID` | MUNCHKIN_ID will be replaced as part of explore API |
| `"Marketo"` | `opportunityPersonKey.sourceType` |  |
| `concat(id,"@${MUNCHKIN_ID}.Marketo")` | `opportunityPersonKey.sourceKey` | Primary Identity. MUNCHKIN_ID will be replaced as part of explore API |
| `createdAt` | `extSourceSystemAudit.createdDate` |  |
| `id` | `opportunityPersonKey.sourceID` |  |
| `iif(leadId != null && leadId != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}", "sourceID", leadId, "sourceKey", concat(leadId,"@${MUNCHKIN_ID}.Marketo")), null)` | `personKey` | Relationship |
| `iif(mktoCdpOpptyId != null && mktoCdpOpptyId != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}", "sourceID", mktoCdpOpptyId, "sourceKey", concat(mktoCdpOpptyId,"@${MUNCHKIN_ID}.Marketo")), null)` | `opportunityKey` | Relationship |
| `iif(mktoCdpSfdcId != null && mktoCdpSfdcId != "", to_object("sourceType", "${CRM_TYPE}", "sourceInstanceID", "${CRM_ORG_ID}", "sourceID", mktoCdpSfdcId, "sourceKey", concat(mktoCdpSfdcId,"@${CRM_ORG_ID}.${CRM_TYPE}")), null)` | `extSourceSystemAudit.externalKey` | `extSourceSystemAudit.externalKey.sourceKey` is Secondary Identity. CRM_TYPE and CRM_ORG_ID will be replaced as part of explore API |
| `isPrimary` | `isPrimary` |  |
| `marketoIsDeleted` | `isDeleted` |  |
| `role` | `personRole` |  |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |  |

{style="table-layout:auto"}

## Persons {#persons}

Read the [XDM Individual Profile overview](../../../../xdm/classes/individual-profile.md) for more information on the XDM class. For more information on the XDM field groups, read the [XDM Business Person Details schema field group](../../../../xdm/field-groups/profile/business-person-details.md) guide and [XDM Business Person Components schema field group](../../../../xdm/field-groups/profile/business-person-components.md) guide.

| Source field | Target XDM field | Notes |
|---|---|---|
| `"${MUNCHKIN_ID}"` | `b2b.personKey.sourceInstanceID` | MUNCHKIN_ID will be replaced as part of explore API |
| `"Marketo"` | `b2b.personKey.sourceType` | |
| `address` | `workAddress.street1` | |
| `city` | `workAddress.city` | |
| `company` | `organizations` | |
| `concat(id,"@${MUNCHKIN_ID}.Marketo")` | `b2b.personKey.sourceKey` | Primary Identity. MUNCHKIN_ID will be replaced as part of explore API |
| `country` | `workAddress.country` | |
| `createdAt` | `extSourceSystemAudit.createdDate` | |
| `dateOfBirth` | `person.birthDate` | |
| `email` | `personComponents.workEmail.address` | |
| `email` | `workEmail.address` | |
| `fax` | `faxPhone.number` | |
| `firstName` | `person.name.firstName` | |
| `id` | `b2b.personKey.sourceID` | |
| `iif(contactCompany != null && contactCompany != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}", "sourceID", concat(contactCompany, ".mkto_org"), "sourceKey", concat(contactCompany, ".mkto_org@${MUNCHKIN_ID}.Marketo")), null)` | `b2b.accountKey` | |
| `iif(contactCompany != null && contactCompany != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}", "sourceID", concat(contactCompany, ".mkto_org"), "sourceKey", concat(contactCompany, ".mkto_org@${MUNCHKIN_ID}.Marketo")), null)` | `personComponents.sourceAccountKey` | |
| <ul><li><code>iif(decode(sfdcType, "Contact", sfdcContactId, "Lead", sfdcLeadId , null) != null, to_object("sourceType", "${CRM_TYPE}", "sourceInstanceID", "${CRM_ORG_ID}","sourceID", decode(sfdcType, "Contact", sfdcContactId, "Lead", sfdcLeadId , null), "sourceKey", concat(decode(sfdcType, "Contact", sfdcContactId, "Lead", sfdcLeadId , null),"@${CRM_ORG_ID}.${CRM_TYPE}")), null)</code></li><li><code>iif(decode(msftType, "Contact", msftContactId, "Lead", msftLeadId , null) != null, to_object("sourceType", "${CRM_TYPE}", "sourceInstanceID", "${CRM_ORG_ID}","sourceID", decode(msftType, "Contact", msftContactId, "Lead", msftLeadId , null), "sourceKey", concat(decode(msftType, "Contact", msftContactId, "Lead", msftLeadId , null),"@${CRM_ORG_ID}.${CRM_TYPE}")), null)</code></li></ul> | `personComponents.sourceExternalKey` | |
| <ul><li><code>iif(decode(sfdcType, "Contact", sfdcContactId, "Lead", sfdcLeadId , null) != null, to_object("sourceType", "${CRM_TYPE}", "sourceInstanceID", "${CRM_ORG_ID}","sourceID", decode(sfdcType, "Contact", sfdcContactId, "Lead", sfdcLeadId , null), "sourceKey", concat(decode(sfdcType, "Contact", sfdcContactId, "Lead", sfdcLeadId , null),"@${CRM_ORG_ID}.${CRM_TYPE}")), null)</code></li><li><code>iif(decode(msftType, "Contact", msftContactId, "Lead", msftLeadId , null) != null, to_object("sourceType", "${CRM_TYPE}", "sourceInstanceID", "${CRM_ORG_ID}","sourceID", decode(msftType, "Contact", msftContactId, "Lead", msftLeadId , null), "sourceKey", concat(decode(msftType, "Contact", msftContactId, "Lead", msftLeadId , null),"@${CRM_ORG_ID}.${CRM_TYPE}")), null)</code></li></ul> | `extSourceSystemAudit.externalKey` | `extSourceSystemAudit.externalKey.sourceKey` is secondary Identity |
| `iif(ecids != null, to_object('ECID',arrays_to_objects('id',explode(ecids))), null)` | `identityMap` | This is a calculated field |
| `iif(id != null && id != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}", "sourceID", id, "sourceKey", concat(id,"@${MUNCHKIN_ID}.Marketo")), null)` | `personComponents.sourcePersonKey` | |
| `iif(mktoCdpCnvContactPersonId != null && mktoCdpCnvContactPersonId != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}", "sourceID", mktoCdpCnvContactPersonId, "sourceKey", concat(mktoCdpCnvContactPersonId,"@${MUNCHKIN_ID}.Marketo")), null)` | `b2b.convertedContactKey` | This is a calculated field |
| `iif(mktoCdpCnvContactPersonId != null && mktoCdpCnvContactPersonId != "", to_object("sourceType", "Marketo", "sourceInstanceID", "${MUNCHKIN_ID}", "sourceID", mktoCdpCnvContactPersonId, "sourceKey", concat(mktoCdpCnvContactPersonId,"@${MUNCHKIN_ID}.Marketo")), null)` | `personComponents.sourceConvertedContactKey` | This is a calculated field |
| `iif(unsubscribed == 'true', 'n', 'y' )` | `consents.marketing.email.val` | If unsubscribed is true (i.e. value = 1), then set consents.marketing.email.val as "n". If unsubscribed is false (i.e. value = 0), then set consents.marketing.email.val as null |
| `iif(unsubscribedReason != null && unsubscribedReason != "", substr(unsubscribedReason, 0, 100), null)` | `consents.marketing.email.reason` | |
| `lastName` | `person.name.lastName` | |
| `leadPartitionId` | `b2b.personGroupID` | |
| `leadPartitionId` | `personComponents.personGroupID` | |
| `leadScore` | `b2b.personScore` | |
| `leadScore` | `personComponents.personScore` | |
| `leadSource` | `b2b.personSource` | |
| `leadSource` | `personComponents.personSource` | |
| `leadStatus` | `b2b.personStatus` | |
| `leadStatus` | `personComponents.personStatus` | |
| `marketingSuspended` | `b2b.isMarketingSuspended` | |
| `marketingSuspendedCause` | `b2b.marketingSuspendedCause` | |
| `marketoIsDeleted` | `isDeleted` | |
| `middleName` | `person.name.middleName` | |
| `mktoCdpConvertedDate` | `b2b.convertedDate` | |
| `mktoCdpIsConverted` | `b2b.isConverted` | |
| `mobilePhone` | `mobilePhone.number` | |
| `personType` | `b2b.personType` | |
| `personType` | `personComponents.personType` | |
| `phone` | `workPhone.number` | |
| `postalCode` | `workAddress.postalCode` | |
| `salutation` | `person.name.courtesyTitle` | |
| `state` | `workAddress.state` | |
| `title` | `extendedWorkDetails.jobTitle` | |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` | |

{style="table-layout:auto"}

## Next steps

By reading this document, you have gained insight on the mapping relationship between your [!DNL Marketo] datasets and their corresponding XDM fields. See the tutorial on [creating a [!DNL Marketo] source connection](../../../tutorials/ui/create/adobe-applications/marketo.md) to complete your [!DNL Marketo] dataflow.