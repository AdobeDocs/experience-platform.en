---
keywords: Experience Platform;home;popular topics;Marketo source connector;Marketo connector;Marketo source;Marketo
solution: Experience Platform
title: Marketo B2B schemas
topic: overview
description: This document provides an overview of custom B2B schemas required when creating a Marketo Engage source connector.
---

# Marketo B2B schemas

This document provides an overview of B2B schemas required when creating a Marketo Engage source connector.

## List of B2B schemas

The following are B2B schemas required to create a Marketo source connector. For more information on schemas, see the [schema overview](https://experienceleague.adobe.com/docs/experience-platform/xdm/schema/composition.html?lang=en#understanding-schemas) or the tutorial on [creating and editing schemas]((https://experienceleague.adobe.com/docs/experience-platform/xdm/ui/resources/schemas.html?lang=en#ui)) in the UI.

### Marketo Company

* **Base class**: XDM Business Account
* **Mixins**: XDM Business Account Details
* **Profile in schema**: Enabled
* **Primary identity**: `accountID` in the base class.
* **Primary identity namespace**: `company_{MUNCHKIN_ID}_marketo`
* **Secondary identity**: `extSourceSystemAudit.externalID` in the base class.
* **Secondary identity namespace**: `company_{SFDC_ORGANIZATION_ID}_salesforce` in the base class.

### Marketo Person

* **Base class**: XDM Individual Profile
* **Mixins**: <ul><li>XDM Business Person Details</li><li>XDM Business Person Components</li></ul>
* **Profile in schema**: Enabled
* **Primary identity**: `personID` in the base class.
* **Primary identity namespace**: `person_{MUNCHKIN_ID}_marketo`
* **Secondary identity**: `extSourceSystemAudit.externalID` of XDM Business Person Details mixin.
* **Secondary identity namespace**: `person_{SFDC_Organization_ID}_salesforce`
* **Relationship**: <ul><li>`personComponents.sourceAccountID` of XDM Business Person Components mixim</li><li>Schema: Marketo Company</li><li>Namespace: `company_{MUNCHKIN_ID}_marketo`</li></ul>

### Marketo Opportunity

* **Base class**: XDM Business Opportunity
* **Mixins**: XDM Business Opportunity Details
* **Profile in schema**: Enabled
* **Primary identity**: `opportunityID` in the base class.
* **Primary identity namespace**: `opportunity_{MUNCHKIN_ID}_marketo`
* **Secondary identity**: `extSourceSystemAudit.externalID` in the base class.
* **Secondary identity namespace**: `opportunity_{SFDC_Organization_ID}_salesforce`
* **Relationship**: <ul><li>`accountID` in the base class</li><li>Schema: Marketo Company</li><li>Namespace: `company_{MUNCHKIN_ID}_marketo`</li></ul>

### Marketo Opportunity Person Relation

* **Base class**: XDM Business Opportunity Person Relation
* **Mixins**: None
* **Profile in schema**: Enabled
* **Primary identity**: `opportunityPersonID` in base class.
* **Primary identity namespace**: `opportunity_person_relation_{MUNCHKIN_ID}_marketo`
* **Secondary identity**: `extSourceSystemAudit.externalID` in the base class.
* **Secondary identity namespace**: `opportunity_person_relation_{SFDC_Organization_ID}_salesforce`
* **Relationship**: <ul><li>`personID` in the base class</li><li>Schema: Marketo Person</li><li>Namespace: `person_{MUNCHKIN_ID}_marketo`</li></ul><ul><br><li>`opportunityID` in the base class</li><li>Schema: Marketo Opportunity</li><li>Namespace: `opportunity_{MUNCHKIN_ID}
_marketo`</li></ul>

### Marketo Campaign

* **Base class**: XDM Business Campaign
* **Mixins**: XDM Business Campaign Details
* **Profile in schema**: Enabled
* **Primary identity**: `campaignID` in base class.
* **Primary identity namespace**: `campaign_{MUNCHKIN_ID}_marketo`
* **Secondary identity**: `extSourceSystemAudit.externalID` in the base class.
* **Secondary identity namespace**: `campaign_{SFDC_Organization_ID}_salesforce`

### Marketo Campaign Member

* **Base class**: XDM Business Campaign Member
* **Mixins**: XDM Business Campaign Member Details
* **Profile in schema**: Enabled
* **Primary identity**: `campaignMemberID` in base class.
* **Primary identity namespace**: `campaign_member_{MUNCHKIN_ID}_marketo`
* **Relationship**: <ul><li>`personID` in the base class</li><li>Schema: Marketo Company</li><li>Namespace: `company_{MUNCHKIN_ID}_marketo`</li></ul><ul><br><li>`campaignID` in the base class</li><li>Schema: Marketo Campaign</li><li>Namespace: `campaign_{MUNCHKIN_ID}
_marketo`</li></ul>

### Marketo Marketing List

* **Base class**: XDM Business Marketing List
* **Mixins**: None
* **Profile in schema**: Enabled
* **Primary identity**: `marketingListID` in base class.
* **Primary identity namespace**: `marketing_list_{MUNCHKIN_ID}_marketo`
* **Notes**: Marketing list is not synced from Salesforce, so there is no secondary identity.

### Marketo Marketing List Member

* **Base class**: XDM Business Marketing List Members
* **Mixins**: None
* **Profile in schema**: Enabled
* **Primary identity**: `marketingListMemberID` in base class.
* **Primary identity namespace**: `marketing_list_member_{MUNCHKIN_ID}_marketo`
* **Relationship**: <ul><li>`personID` in the base class</li><li>Schema: Marketo Company</li><li>Namespace: `company_{MUNCHKIN_ID}_marketo`</li></ul><ul><br><li>`marketingListID` in the base class</li><li>Schema: Marketo Opportunity</li><li>Namespace: `marketing_list_{MUNCHKIN_ID}_marketo`</li></ul>
* **Notes**: Marketing list is not synced from Salesforce, so there is no secondary identity.

### Marketo Named Account

* **Base class**: XDM Business Account
* **Mixins**: XDM Business Account Details
* **Profile in schema**: Enabled
* **Primary identity**: `accountID` in base class.
* **Primary identity namespace**: `named_account_{MUNCHKIN_ID}_marketo`
* **Secondary identity**: `extSourceSystemAudit.externalID` in the base class.
* **Secondary identity namespace**: `account_{SFDC_Organization_ID}_salesforce`

### Marketo Activity

* **Base class**: XDM ExperienceEvent
* **Mixins**: <ul><li>Remove From List</li><li>Visit WebPage</li><li>Person Identifier</li><li>Marketo Web URL</li></ul>
* **Profile in schema**: Enabled
* **Primary identity**: `personID` of Person Identifier mixin.
* **Primary identity namespace**: `person_{MUNCHKIN_ID}_marketo`
* **Notes**: Experience Event is different from entities. The identity of experience event is the person who did the activity.
