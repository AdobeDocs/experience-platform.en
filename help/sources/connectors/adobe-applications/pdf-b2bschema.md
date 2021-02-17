---
keywords: Experience Platform;home;popular topics;Marketo source connector;Marketo connector;Marketo source;Marketo
solution: Experience Platform
title: Marketo B2B schemas
topic: overview
description: This document provides an overview of custom B2B schemas required when creating a Marketo Engage source connector.
---

# Marketo B2B schemas

This document provides an overview of B2B schemas required when creating a Marketo Engage source connector.

## Schemas

The following table contains B2B schemas required to create a Marketo source connector. For more information on schemas, see the [schema overview](https://experienceleague.adobe.com/docs/experience-platform/xdm/schema/composition.html?lang=en#understanding-schemas) or the tutorial on [creating and editing schemas]((https://experienceleague.adobe.com/docs/experience-platform/xdm/ui/resources/schemas.html?lang=en#ui)) in the UI.

| Schema name | Base class | Mixins | Profile in schema | Primary identity | Primary identity namespace | Secondary identity | Secondary identity namespace | Relationship | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Marketo Company | XDM Business Account | XDM Business Account Details | Enabled | `accountID` in the base class | `company_{MUNCHKIN_ID}_marketo` | `extSourceSystemAudit.externalID` in the base class | `company_{SFDC_ORGANIZATION_ID}_salesforce` in the base class |
| Marketo Person | XDM Individual Profile | <ul><li>XDM Business Person Details</li><li>XDM Business Person Components</li></ul> | Enabled | `personID` in the base class | `person_{MUNCHKIN_ID}_marketo` | `extSourceSystemAudit.externalID` of XDM Business Person Details mixin | `person_{SFDC_Organization_ID}_salesforce`| <ul><li>`personComponents.sourceAccountID` of XDM Business Person Components mixin</li><li>Schema: Marketo Company</li><li>Namespace: `company_{MUNCHKIN_ID}_marketo`</li></ul> |
| Marketo Opportunity | XDM Business Opportunity | XDM Business Opportunity Details | Enabled | `opportunityID` in base class. | `opportunity_{MUNCHKIN_ID}_marketo` | `extSourceSystemAudit.externalID` in the base class | `opportunity_{SFDC_Organization_ID}_salesforce` | <ul><li>`accountID` in the base class</li><li>Schema: Marketo Company</li><li>Namespace: `company_{MUNCHKIN_ID}_marketo`</li></ul> | Notes |
| Marketo Opportunity Person Relation | XDM Business Opportunity Person Relation | None | Enabled | `opportunityPersonID` in base class. | `opportunity_person_relation_{MUNCHKIN_ID}_marketo` | `extSourceSystemAudit.externalID` in the base class | `opportunity_person_relation_{SFDC_Organization_ID}_salesforce` | Relationship | Notes |
| Marketo Campaign | XDM Business Campaign | XDM Business Campaign Details | Enabled | `campaignID` in base class. | `campaign_{MUNCHKIN_ID}_marketo` | `extSourceSystemAudit.externalID` in the base class | `campaign_{SFDC_Organization_ID}_salesforce` | Relationship | Notes |
| Marketo Campaign Member | XDM Business Campaign Member | XDM Business Campaign Member Details | Enabled | `campaignMemberID` in base class. | `campaign_member_{MUNCHKIN_ID}_marketo` | | | Relationship | |
| Marketo Marketing List | XDM Business Marketing List | None | Enabled | `marketingListID` in base class. | `marketing_list_{MUNCHKIN_ID}_marketo` | | | | Marketing list is not synced from Salesforce, so there is no secondary identity. |
| Marketo Marketing List Member | XDM Business Marketing List Members | None | Enabled | `marketingListMemberID` in base class. | `marketing_list_member_{MUNCHKIN_ID}_marketo` | | | Relationship | Notes |
| Marketo Named Account | XDM Business Account | XDM Business Account Details | Enabled | `accountID` in base class. | `named_account_{MUNCHKIN_ID}_marketo` | `extSourceSystemAudit.externalID` in the base class | `account_{SFDC_Organization_ID}_salesforce` | Relationship | Notes |
| Marketo Activity | XDM ExperienceEvent | <ul><li>Remove From List</li><li>Visit WebPage</li><li>Person Identifier</li><li>Marketo Web URL</li></ul> | Enabled | `personID` in base class. | `person_{MUNCHKIN_ID}_marketo` | | | | Notes |