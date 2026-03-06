---
title: Schemas in Real-Time Customer Data Platform B2B Edition
description: An overview of the role of Experience Data Model (XDM) schemas in Adobe Real-Time Customer Data Platform B2B Edition.
feature: Get Started, Data Management, Schemas
badgeB2B: label="B2B Edition" type="Informative" url="https://experienceleague.adobe.com/docs/experience-platform/rtcdp/intro/rtcdp-intro/overview.html#rtcdp-editions" newtab=true
exl-id: 3b18d377-108f-443f-86ae-dc7537cf9013
---
# Schemas in Real-Time Customer Data Platform B2B Edition

Adobe Real-Time Customer Data Platform B2B Edition provides several standard [Experience Data Model (XDM) classes](../../xdm/schema/composition.md#class) that capture details about essential B2B data entities, such as accounts, opportunities, campaigns, and more. In addition, Real-Time CDP B2B Edition allows you to define many-to-one relationships between these schemas so they can participate in advanced segmentation use cases.

>[!IMPORTANT]
>
>B2B schemas are available to use in Experience Platform applications (for example, in [Customer Journey Analytics B2B Edition](https://experienceleague.adobe.com/en/docs/analytics-platform/using/cja-overview/cja-b2b/cja-b2b-edition)). <br/>However, you must have access to Real-Time CDP B2B Edition in order for (profiles in) B2B schemas to participate in [Real-Time Customer Profile](../../profile/home.md).

The following standard classes are provided in Real-Time CDP B2B Edition:

* [XDM Business Account](../../xdm/classes/b2b/business-account.md)
* [XDM Business Account Person Relation](../../xdm/classes/b2b/business-account-person-relation.md)
* [XDM Business Campaign](../../xdm/classes/b2b/business-campaign.md)
* [XDM Business Campaign Members](../../xdm/classes/b2b/business-campaign-members.md)
* [XDM Business Opportunity](../../xdm/classes/b2b/business-opportunity.md)
* [XDM Business Opportunity Person Relation](../../xdm/classes/b2b/business-opportunity-person-relation.md)
* [XDM Business Marketing List](../../xdm/classes/b2b/business-marketing-list.md)
* [XDM Business Marketing List Members](../../xdm/classes/b2b/business-marketing-list-members.md)

To understand how schemas fit into your B2B workflow, please see the [end-to-end tutorial](../b2b-tutorial.md).

For steps on how to create a many-to-one relationship between two schemas, refer to the tutorial on [defining B2B schema relationships](../../xdm/tutorials/relationship-b2b.md).

If you are using a B2B source connection, you can use a tool to automatically generate the required schemas and the relationships between them. See the guide on [B2B namespaces](../../sources/connectors/adobe-applications/marketo/marketo-namespaces.md) in the sources documentation for more information.


The following table contains information on the underlying setup of B2B schemas.

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Schema name | Base class | Field groups | [!DNL Profile] in Schema | Primary identity | Primary identity namespace | Secondary identity | Secondary identity namespace | Relationship | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B2B Account | [XDM Business Account](../../xdm/classes/b2b/business-account.md) | XDM Business Account Details | Enabled |  `accountKey.sourceKey` in the base class | B2B Account | `extSourceSystemAudit.externalKey.sourceKey` in the base class | B2B Account | <ul><li>`accountParentKey.sourceKey` in XDM Business Account Details field group</li><li>Destination property: `/accountKey/sourceKey`</li><li>Type: one-to-one</li><li>Reference schema: B2B Account</li><li>Namespace: B2B Account</li></ul> ||
| B2B Person | [XDM Individual Profile](../../xdm/classes/individual-profile.md) | <ul><li>XDM Business Person Details</li><li>XDM Business Person Components</li><li>IdentityMap</li><li>Consent and Preference Details</li></ul> | Enabled | `b2b.personKey.sourceKey` in the XDM Business Person Details Field Group  | B2B Person | <ol><li>`extSourceSystemAudit.externalKey.sourceKey` of XDM Business Person Details field group</li><li>`workEmail.address` of XDM Business Person Details field group</ol></li> | <ol><li>B2B Person</li><li>Email</li></ol> | <ul><li>`personComponents.sourceAccountKey.sourceKey` of XDM Business Person Components field group</li><li>Type: Many-to-one</li><li>Reference Schema: B2B Account</li><li>Namespace: B2B Account</li><li>Destination property: accountKey.sourceKey</li><li>Relationship name from current schema: Account</li><li>Relationship name from reference schema: People</li></ul> ||
| B2B Opportunity | [XDM Business Opportunity](../../xdm/classes/b2b/business-opportunity.md) | XDM Business Opportunity Details | Enabled | `opportunityKey.sourceKey` in the base class | B2B Opportunity | `extSourceSystemAudit.externalKey.sourceKey` in the base class | B2B Opportunity | <ul><li>`accountKey.sourceKey` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: B2B Account</li><li>Namespace: B2B Account</li><li>Destination property: `accountKey.sourceKey`</li><li>Relationship name from current schema: Account</li><li>Relationship name from reference schema: Opportunities</li></ul> ||
| B2B Opportunity Person Relation | [XDM Business Opportunity Person Relation](../../xdm/classes/b2b/business-opportunity-person-relation.md) | None | Enabled | `opportunityPersonKey.sourceKey` in the base class | B2B Opportunity Person Relation | | | **First relationship**<ul><li>`personKey.sourceKey` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: B2B Person</li><li>Namespace: B2B Person</li><li>Destination property: b2b.personKey.sourceKey</li><li>Relationship name from current schema: Person</li><li>Relationship name from reference schema: Opportunities</li></ul>**Second relationship**<ul><li>`opportunityKey.sourceKey` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: B2B Opportunity </li><li>Namespace: B2B Opportunity </li><li>Destination property: `opportunityKey.sourceKey`</li><li>Relationship name from current schema: Opportunity</li><li>Relationship name from reference schema: People</li></ul> ||
| B2B Campaign | [XDM Business Campaign](../../xdm/classes/b2b/business-campaign.md) | XDM Business Campaign Details | Enabled | `campaignKey.sourceKey` in the base class | B2B Campaign | | | | |
| B2B Campaign Member | [XDM Business Campaign Members](../../xdm/classes/b2b/business-campaign-members.md) | XDM Business Campaign Member Details | Enabled | `ccampaignMemberKey.sourceKey` in the base class | B2B Campaign Member | | | **First relationship**<ul><li>`personKey.sourceKey` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: B2B Person</li><li>Namespace: B2B Person</li><li>Destination property: `b2b.personKey.sourceKey`</li><li>Relationship name from current schema: Person</li><li>Relationship name from reference schema: Campaigns</li></ul>**Second relationship**<ul><li>`campaignKey.sourceKey` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: B2B Campaign</li><li>Namespace: B2B Campaign</li><li>Destination property: `campaignKey.sourceKey`</li><li>Relationship name from current schema: Campaign</li><li>Relationship name from reference schema: People</li></ul> ||
| B2B Marketing List | [XDM Business Marketing List](../../xdm/classes/b2b/business-marketing-list.md) | None | Enabled | `marketingListKey.sourceKey` in the base class | B2B Marketing List | None | None | None | Static List is not synced from [!DNL Salesforce] and therefore does not have a secondary identity. |
| B2B Marketing List Member | [XDM Business Marketing List Members](../../xdm/classes/b2b/business-marketing-list-members.md) | None | Enabled | `marketingListMemberKey.sourceKey` in the base class | B2B Marketing List Member | None | None | **First relationship**<ul><li>`PersonKey.sourceKey` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: B2B Person</li><li>Namespace: B2B Person</li><li>Destination property: `b2b.personKey.sourceKey`</li><li>Relationship name from current schema: Person</li><li>Relationship name from reference schema: Marketing Lists</li></ul>**Second relationship**<ul><li>`marketingListKey.sourceKey` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: B2B Marketing List</li><li>Namespace: B2B Marketing List</li><li>Destination property: `marketingListKey.sourceKey`</li><li>Relationship name from current schema: Marketing List</li><li>Relationship name from reference schema: People</li></ul> | Static list member is not synced from [!DNL Salesforce] and therefore does not have a secondary identity. |
| B2B Account Person Relation | [XDM Business Account Person Relation](../../xdm/classes/b2b/business-account-person-relation.md) | Identity Map | Enabled | `accountPersonKey.sourceKey` in the base class | B2B Account Person Relation | None | None | **First relationship**<ul><li>`personKey.sourceKey` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: B2B Person</li><li>Namespace: B2B Person</li><li>Destination property: `b2b.personKey.SourceKey`</li><li>Relationship name from current schema: People</li><li>Relationship name from reference schema: Account</li></ul>**Second relationship**<ul><li>`accountKey.sourceKey` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: B2B Account</li><li>Namespace: B2B Account</li><li>Destination property: `accountKey.sourceKey`</li><li>Relationship name from current schema: Account</li><li>Relationship name from reference schema: People</li></ul> ||

{style="table-layout:auto"}

