---
keywords: Experience Platform;home;popular topics;Marketo source connector;namespaces;schemas
solution: Experience Platform
title: Marketo namespaces 
topic-legacy: overview
description: This document provides an overview of custom namespaces required when creating a Marketo Engage source connector.
---

# (Beta) [!DNL Marketo Engage] namespaces and schemas

>[!IMPORTANT]
>
>The [!DNL Marketo Engage] source is currently in beta. The feature and documentation are subject change.

This document provides information on the underlying set up for the B2B namespaces and schemas used with [!DNL Marketo Engage] (hereinafter referred to as "[!DNL Marketo]"). This document also provides details around setting up your Postman automation utility required for generating [!DNL Marketo] B2B namespaces and schemas.

## Prerequisites

Before you can generate your B2B namespaces and schemas, you must first set up your Platform developer console and [!DNL Postman] environment. For more information, see the tutorial on [setting up developer console and [!DNL Postman]](../../../../landing/postman.md).

With a Platform developer console and a [!DNL Postman] set up, apply the following variables to your [!DNL Marketo] environment:

| Environment variable | Example value | Notes |
| --- | --- | --- |
| `PRIVATE_KEY` | `{PRIVATE_KEY}` |
| `SANDBOX_NAME` | `prod` |
| `TENANT_ID` | `b2bcdpproductiontest` |
| `munchkinId` | `123-ABC-456 `| See the tutorial on [authenticating your [!DNL Marketo] instance](./marketo-auth.md) for more information. |
| `sfdc_org_id` | `00D4W000000FgYJUA0` | See the following [[!DNL Salesforce] guide](https://help.salesforce.com/articleView?id=000325251&type=1&mode=1) for more information on acquiring your organization ID. |
| `msd_org_id` | `f6438fab-67e8-4814-a6b5-8c8dcdf7a98f` | See the following [[!DNL Microsoft Dynamics] guide](https://docs.microsoft.com/en-us/power-platform/admin/determine-org-id-name) for more information on acquiring your organization ID. |
| `has_abm` | `false` | This value is set to `true` if you are subscribed to Account-Based Marketing. |
| `has_msi` | `false` | This value is set to `true` if you are subscribed to [!DNL Marketo Sales Insight]. |

{style="table-layout:auto"}

## [!DNL Marketo] namespaces

Identity namespaces are a component of [[!DNL Identity Service]](../../../../identity-service/home.md) that serve as indicators of the context to which an identity relates.

A fully qualified identity includes an ID value and a namespace. A new custom namespace is required for every new [!DNL Marketo] instance and dataset combination. For example, a [!DNL Marketo] source connector ingesting the `programs` dataset requires its own custom namespace, and another Marketo source connector ingesting the same dataset also requires its own new custom namespace. See the [namespaces overview](../../../../identity-service/namespaces.md) for more information.

The [!DNL Marketo] namespace is used in the primary identity of the entity.

The following table contains information on the underlying set up for [!DNL Marketo] namespaces.

| Display name | Identity symbol | Identity type | Issuer type | Issuer entity type | Munchkin ID example |
| --- | --- | --- | --- | --- | --- |
| `marketo_person_{MUNCHKIN_ID}` | auto-generated | `CROSS_DEVICE` | [!DNL Marketo] | `person` | `123-ABC-789` |
| `marketo_company_{MUNCHKIN_ID}` | auto-generated | `B2B_ACCOUNT` | [!DNL Marketo] | `company` | `123-ABC-789` |
| `marketo_opportunity_{MUNCHKIN_ID}` | auto-generated | `B2B_OPPORTUNITY` | [!DNL Marketo] | `opportunity` | `123-ABC-789` |
| `marketo_opportunity_contact_role_{MUNCHKIN_ID}` | auto-generated | `B2B_OPPORTUNITY_PERSON` | [!DNL Marketo] | `opportunity contact role` | `123-ABC-789` |
| `marketo_program_{MUNCHKIN_ID}` | auto-generated | `B2B_CAMPAIGN` | [!DNL Marketo] | `program` | `123-ABC-789` |
| `marketo_program_member_{MUNCHKIN_ID}` | auto-generated | `B2B_CAMPAIGN_MEMBER` | [!DNL Marketo] | `program member` | `123-ABC-789` |
| `marketo_static_list_{MUNCHKIN_ID}` | auto-generated | `B2B_MARKETING_LIST` | [!DNL Marketo] | `static list` | `123-ABC-789` |
| `marketo_static_list_member_{MUNCHKIN_ID}` | auto-generated | `B2B_MARKETING_LIST_MEMBER` | [!DNL Marketo] | `static list member` | `123-ABC-789` |
| `marketo_named_account_{MUNCHKIN_ID}` | auto-generated | `B2B_ACCOUNT` | [!DNL Marketo] | `named account` | `123-ABC-789` |

{style="table-layout:auto"}

### [!DNL Salesforce] namespaces

If you are subscribed to the [!DNL Salesforce] integration, the [!DNL Salesforce] namespace is used in the secondary identity of the entity.

The following table contains information on the underlying set up for [!DNL Salesforce] namespaces.

| Display name | Identity symbol | Identity type | Issuer type | Issuer entity type | [!DNL Salesforce] subscription organization ID example |
| --- | --- | --- | --- | --- | --- |
| `salesforce_person_{SALESFORCE_ORGANIZATION_ID}` | auto-generated | `CROSS_DEVICE` | [!DNL Salesforce] | `person` | `00DA0000000Hz79` |
| `salesforce_account_{SALESFORCE_ORGANIZATION_ID}` | auto-generated | `B2B_ACCOUNT` | [!DNL Salesforce] | `account` | `00DA0000000Hz79` |
| `salesforce_opportunity_{SALESFORCE_ORGANIZATION_ID}` | auto-generated | `B2B_OPPORTUNITY` | [!DNL Salesforce] | `opportunity` | `00DA0000000Hz79` |
| `salesforce_opportunity_contact_role_{SALESFORCE_ORGANIZATION_ID}` | auto-generated | `B2B_OPPORTUNITY_PERSON` | [!DNL Salesforce] | `opportunity contact role` | `00DA0000000Hz79` |
| `salesforce_campaign_{SALESFORCE_ORGANIZATION_ID}` | auto-generated | `B2B_CAMPAIGN` | [!DNL Salesforce] | `campaign` | `00DA0000000Hz79` |
| `salesforce_campaign_member_{SALESFORCE_ORGANIZATION_ID}` |  auto-generated | `B2B_CAMPAIGN_MEMBER` | [!DNL Salesforce] | `campaign member` | `00DA0000000Hz79` |

{style="table-layout:auto"}

### [!DNL Microsoft Dynamics] namespaces

If you are subscribed to the [!DNL Dynamics] integration, the [!DNL Dynamics] namespace is used as secondary identity of the entity.

The following table contains information on the underlying set up for [!DNL Dynamics] namespaces.

| Display name | Identity symbol | Identity type | Issuer type | Issuer entity type | [!DNL Salesforce] subscription organization ID example |
| --- | --- | --- | --- | --- | --- |
| `microsoft_person_{DYNAMICS_ID}` | auto-generated | `CROSS_DEVICE` | [!DNL Microsoft] | `person` | `94cahe38-e51h-3d57-a9c6-2edklb7184mh` |
| `microsoft_account_{DYNAMICS_ID}` | auto-generated | `B2B_ACCOUNT` | [!DNL Microsoft] | `account` | `94cahe38-e51h-3d57-a9c6-2edklb7184mh` |
| `microsoft_opportunity_{DYNAMICS_ID}` | auto-generated | `B2B_OPPORTUNITY` | [!DNL Microsoft] | `opportunity` | `94cahe38-e51h-3d57-a9c6-2edklb7184mh` |
| `microsoft_opportunity_contact_connection_{DYNAMICS_ID}` | auto-generated | `B2B_OPPORTUNITY_PERSON` | [!DNL Microsoft] | `opportunity relationship` | `94cahe38-e51h-3d57-a9c6-2edklb7184mh` |
| `microsoft_campaign_{DYNAMICS_ID}` | auto-generated | `B2B_CAMPAIGN` | [!DNL Microsoft] | `campaign` | `94cahe38-e51h-3d57-a9c6-2edklb7184mh` |
| `microsoft_campaign_member_{DYNAMICS_ID}` | auto-generated | `B2B_CAMPAIGN_MEMBER` | [!DNL Microsoft] | `campaign member` | `94cahe38-e51h-3d57-a9c6-2edklb7184mh` |

## [!DNL Marketo] schemas

Experience Platform uses schemas to describe the structure of data in a consistent and reusable way. By defining data consistently across systems, it becomes easier to retain meaning and therefore gain value from data.

Before data can be ingested into Platform, a schema must be composed to describe the data's structure and provide constraints to the type of data that can be contained within each field. Schemas consist of a base class and zero or more mixins.

For more information on the schema composition model, including design principles and best practices, see the [basics of schema composition](../../../../xdm/schema/composition.md).

The following table contains information on the underlying setup of [!DNL Marketo] schemas.

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Schema name | Base class | Mixins | Primary identity | Primary identity namespace | Secondary identity | Secondary identity namespace | Relationship | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [!DNL Marketo] Company {MUNCHKIN_ID} | XDM Business Account | XDM Business Account Details | `accountID` in the base class | `marketo_company_{MUNCHKIN_ID}` | `extSourceSystemAudit.externalID` in the base class | `salesforce_account_{SALESFORCE_ORGANIZATION_ID}` | <ul><li>`accountParentID` in XDM Business Account Details mixin</li><li>Type: one-to-one</li><li>Reference schema: Marketo Company {MUNCHKIN_ID}</li><li>Namespace: `marketo_company_{MUNCHKIN_ID}`</li></ul> |
| [!DNL Marketo] Person {MUNCHKIN_ID} | XDM Individual Profile | <ul><li>XDM Business Person Details</li><li>XDM Business Person Components</li></ul> | `personID` in the base class | `marketo_person_{MUNCHKIN_ID}` | <ol><li>`extSourceSystemAudit.externalID` of XDM Business Person Details mixin</li><li>`workEmail.address` of XDM Business Person Details mixin</li><li>`identityMap` of Identity Map mixin</ol></li> | <ol><li>`salesforce_person_{SALESFORCE_ORGANIZATION_ID}`</li><li>Email</li><li>ECID</li></ol> | <ul><li>`personComponents.sourceAccountID` of XDM Business Person Components mixin</li><li>Type: Many-to-one</li><li>Reference Schema: Marketo Company {MUNCHKIN_ID}</li><li>Namespace: `marketo_company_{MUNCHKIN_ID}`</li><li>Destination property: `accountID`</li><li>Relationship name from current schema: Account</li><li>Relationship name from reference schema: People</li></ul> |
| [!DNL Marketo] Opportunity {MUNCHKIN_ID} | XDM Business Opportunity | XDM Business Opportunity Details | `opportunityID` in the base class | `marketo_opportunity_{MUNCHKIN_ID}` | `extSourceSystemAudit.externalID` in the base class | `salesforce_opportunity_{SALESFORCE_ORGANIZATION_ID}` | <ul><li>`accountID` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: Marketo Company {MUNCHKIN_ID}</li><li>Namespace: `marketo_company_{MUNCHKIN_ID}`</li><li>Destination property: `accountID`</li><li>Relationship name from current schema: Account</li><li>Relationship name from reference schema: Opportunities</li></ul> |
| [!DNL Marketo] Opportunity Contact Role {MUNCHKIN_ID} | XDM Business Opportunity Person Relation | None | `opportunityPersonID` in the base class | `marketo_opportunity_contact_role_{MUNCHKIN_ID}` | `extSourceSystemAudit.externalID` in the base class | `salesforce_opportunity_contact_role_{SALESFORCE_ORGANIZATION_ID}` | First relationship<ul><li>`personID` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: Marketo Person {MUNCHKIN_ID}</li><li>Namespace: `marketo_person_{MUNCHKIN_ID}`</li><li>Destination property: `personID`</li><li>Relationship name from current schema: Person</li><li>Relationship name from reference schema: Opportunities</li></ul>Second relationship<ul><li>`opportunityID` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: Marketo Opportunity {MUNCHKIN_ID}</li><li>Namespace: `marketo_opportunity_{MUNCHKIN_ID}`</li><li>Destination property: `opportunityID`</li><li>Relationship name from current schema: Opportunity</li><li>Relationship name from reference schema: People</li></ul> |
| [!DNL Marketo] Program {MUNCHKIN_ID} | XDM Business Campaign | XDM Business Campaign Details | `campaignID` in the base class | `marketo_program_{MUNCHKIN_ID}` | `extSourceSystemAudit.externalID` in the base class | `salesforce_campaign_SALESFORCE_ORGANIZATION_ID}` |
| [!DNL Marketo] Program Member {MUNCHKIN_ID} | XDM Business Campaign Member | XDM Business Campaign Member Details | `campaignMemberID` in the base class | `marketo_program_member_{MUNCHKIN_ID}` | None | None | First relationship<ul><li>`personID` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: Marketo Person {MUNCHKIN_ID}</li><li>Namespace: `marketo_person_{MUNCHKIN_ID}`</li><li>Destination property: `personID`</li><li>Relationship name from current schema: Person</li><li>Relationship name from reference schema: Programs</li></ul>Second relationship<ul><li>`campaignID` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: Marketo Program {MUNCHKIN_ID}</li><li>Namespace: `marketo_program_{MUNCHKIN_ID}`</li><li>Destination property: campaignID</li><li>Relationship name from current schema: Program</li><li>Relationship name from reference schema: People</li></ul> |
| [!DNL Marketo] Static List {MUNCHKIN_ID} | XDM Business Marketing List | None | `marketingListID` in the base class | `marketo_static_list_{MUNCHKIN_ID}` | None | None | None | Static List is not synced from [!DNL Salesforce] and therefore does not have a secondary identity |
| [!DNL Marketo] Static List Member {MUNCHKIN_ID} | XDM Business Marketing List Members | None | `marketingListMemberID` in the base class | `marketo_static_list_member_{MUNCHKIN_ID}` | None | None | First relationship<ul><li>`personID` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: Marketo Person {MUNCHKIN_ID}</li><li>Namespace: `marketo_person_{MUNCHKIN_ID}`</li><li>Destination property: `personID`</li><li>Relationship name from current schema: Person</li><li>Relationship name from reference schema: Lists</li></ul>Second relationship<ul><li>`marketingListID` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: Marketo Static List {MUNCHKIN_ID}</li><li>Namespace: `marketo_static_list_{MUNCHKIN_ID}`</li><li>Destination property: `marketingListID`</li><li>Relationship name from current schema: List</li><li>Relationship name from reference schema: People</li></ul> |
| [!DNL Marketo] Named Account {MUNCHKIN_ID} | XDM Business Account | XDM Business Account Details | `accountID` in the base class | `marketo_named_account_{MUNCHKIN_ID}` | `extSourceSystemAudit.externalID` in the base class | `salesforce_account_{SALESFORCE_ORGANIZATION_ID}` | <ul><li>`accountParentID` in XDM Business Account Details mixin</li><li>Type: one-to-one</li><li>Reference Schema: Marketo Named Account {MUNCHKIN_ID}</li><li>Namespace: `marketo_named_account_{MUNCHKIN_ID}` |
| [!DNL Marketo] Activity {MUNCHKIN ID} | XDM Experience Event | <ul><li>Visit WebPage</li><li>New Lead</li><li>Convert Lead</li><li>Add To List</li><li>Remove From List</li><li>Add To Opportunity</li><li>Remove From Opportunity</li><li>Form Filled Out</li><li>Link Clicks</li><li>Email Delivered</li><li>Email Opened</li><li>Email Clicked</li><li>Email Bounced</li><li>Email Bounced Soft</li><li>Email Unsubscribed</li><li>Score Changed</li><li>Opportunity Updated</li><li>Status in Campaign Progression Changed</li><li>Person Identifier</li><li>Marketo Web URL | `personID` of Person Identifier mixin | marketo_person_{MUNCHKIN_ID} | None | None | First relationship<ul><li>`listOperations.listID` field</li><li>Type: one-to-one</li><li>Reference Schema: Marketo Static List {MUNCHKIN_ID}</li><li>Namespace: `marketo_static_list_{MUNCHKIN_ID}`</li></ul>Second relationship<ul><li>`opportunityEvent.opportunityID` field</li><li>Type: one-to-one</li><li>Reference Schema: Marketo Opportunity {MUNCHKIN_ID}</li><li>Namespace: `marketo_opportunity_{MUNCHKIN_ID}`</li></ul>Third relationship<ul><li>`leadOperation.campaignProgression.campaignID` field</li><li>Type: one-to-one</li><li>Reference Schema: Marketo Program {MUNCHKIN_ID}</li><li>Namespace: `marketo_program_{MUNCHKIN_ID}`</li></ul> |

{style="table-layout:auto"}

>[!NOTE]
>
>All schemas are enabled for [!DNL Real-time Customer Profile]

## Next steps

To learn how to connect your [!DNL Marketo] data to Platform, see the tutorial on [creating a Marketo source connector in the UI](../../../tutorials/ui/create/adobe-applications/marketo.md).