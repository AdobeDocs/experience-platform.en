---
keywords: Experience Platform;home;popular topics;Marketo source connector;namespaces;schemas
solution: Experience Platform
title: Marketo namespaces
topic-legacy: overview
description: This document provides an overview of custom namespaces required when creating a Marketo Engage source connector.
exl-id: f1592be5-987e-41b8-9844-9dea5bd452b9
---
# (Beta) [!DNL Marketo Engage] namespaces and schemas

>[!IMPORTANT]
>
>The [!DNL Marketo Engage] source is currently in beta. The feature and documentation are subject change.

This document provides information on the underlying set up for the B2B namespaces and schemas used with [!DNL Marketo Engage] (hereinafter referred to as "[!DNL Marketo]"). This document also provides details around setting up your Postman automation utility required for generating [!DNL Marketo] B2B namespaces and schemas.

## Set up the [!DNL Marketo] namespace and schema auto-generation utility

The first step in using the [!DNL Marketo] namespace and schema auto-generation utility is to set up your Platform developer console and [!DNL Postman] environment.

- You can download the namespace and schema auto-generation utility collection and environment from this [GitHub repository](https://github.com/adobe/experience-platform-postman-samples/tree/master/Postman%20Collections/CDP%20Namespaces%20and%20Schemas%20Utility).
- For information on using Platform APIs including details on how to gather values for required headers and read sample API calls, see the guide on [getting started with Platform APIs](../../../../landing/api-guide.md).
- For information on how to generate your credentials for Platform APIs, see the tutorial on [authenticating and accessing Experience Platform APIs](../../../../landing/api-authentication.md).
- For information on how to set up [!DNL Postman] for Platform APIs, see the tutorial on [setting up developer console and [!DNL Postman]](../../../../landing/postman.md).

With a Platform developer console and [!DNL Postman] set up, you can now start applying the appropriate environment values to your [!DNL Postman] environment.

The following table contains example values as well as additional information on populating your [!DNL Postman] environment:

| Variable | Description | Example |
| --- | --- | --- |
| `CLIENT_SECRET` | A unique identifier used to generate your `{ACCESS_TOKEN}`. See the tutorial on [authenticating and accessing Experience Platform APIs](../../../../landing/api-authentication.md) for information on how to retrieve your `{CLIENT_SECRET}`. | `{CLIENT_SECRET}` |
| `JWT_TOKEN` | The JSON Web Token (JWT) is an authentication credential used to generate your {ACCESS_TOKEN}. See the tutorial on [authenticating and accessing Experience Platform APIs](../../../../landing/api-authentication.md) for information on how to generate your `{JWT_TOKEN}`. | `{JWT_TOKEN}` |
| `API_KEY` | A unique identifier used to authenticate calls to Experience Platform APIs. See the tutorial on [authenticating and accessing Experience Platform APIs](../../../../landing/api-authentication.md) for information on how to retrieve your `{API_KEY}`. | `c8d9a2f5c1e03789bd22e8efdd1bdc1b` |
| `ACCESS_TOKEN` | The authorization token required to complete calls to Experience Platform APIs. See the tutorial on [authenticating and accessing Experience Platform APIs](../../../../landing/api-authentication.md) for information on how to retrieve your `{ACCESS_TOKEN}`. | `Bearer {ACCESS_TOKEN}` |
| `META_SCOPE` | With regards to [!DNL Marketo], this value is fixed and is alway set to: `ent_dataservices_sdk`. | `ent_dataservices_sdk` |
| `CONTAINER_ID` | The `global` container holds all standard Adobe and Experience Platform partner provided classes, schema field groups, data types, and schemas. With regards to [!DNL Marketo], this value is fixed and is always set to `global`. | `global` |
| `PRIVATE_KEY` | A credential used to authenticate your [!DNL Postman] instance to Experience Platform APIs. See the tutorial on setting up developer console and [setting up developer console and [!DNL Postman]](../../../../landing/postman.md) for instructions on how to retrieve your {PRIVATE_KEY}. | `{PRIVATE_KEY}` |
| `TECHNICAL_ACCOUNT_ID` | A credential used to integrate to Adobe I/O. | `D42AEVJZTTJC6LZADUBVPA15@techacct.adobe.com` |
| `IMS` | The Identity Management System (IMS) provides the framework for authentication to Adobe services. With regards to [!DNL Marketo], this value is fixed and is always set to: `ims-na1.adobelogin.com`. | `ims-na1.adobelogin.com` |
| `IMS_ORG` | A corporate entity that can own or license products and services and allow access to its members. See the tutorial on [setting up developer console and [!DNL Postman]](../../../../landing/postman.md) for instructions on how to retrieve your `{IMS_ORG}` information. | `ABCEH0D9KX6A7WA7ATQE0TE@adobeOrg` |
| `SANDBOX_NAME` | The name of the virtual sandbox partition that you are using. | `prod` |
| `TENANT_ID` | An ID used to ensure that the resources you create are namespaced properly and are contained within your IMS Organization. | `b2bcdpproductiontest` |
| `PLATFORM_URL` | The URL endpoint that you are making API calls to. This value is fixed and is always set to: `http://platform.adobe.io/`. | `http://platform.adobe.io/` |
| `munchkinId` | The unique ID for your [!DNL Marketo] account. See the tutorial on [authenticating your [!DNL Marketo] instance](./marketo-auth.md) for information on how to retrieve your `munchkinId`. | `123-ABC-456` |
| `sfdc_org_id` | The organization ID for your [!DNL Salesforce] account. See the following [[!DNL Salesforce] guide](https://help.salesforce.com/articleView?id=000325251&type=1&mode=1) for more information on acquiring your [!DNL Salesforce] organization ID. | `00D4W000000FgYJUA0` |
| `msd_org_id` | The organization ID for your [!DNL Dynamics] account. See the following [[!DNL Microsoft Dynamics] guide](https://docs.microsoft.com/en-us/power-platform/admin/determine-org-id-name) for more information on acquiring your [!DNL Dynamics] organization ID. | `f6438fab-67e8-4814-a6b5-8c8dcdf7a98f` |
| `has_abm` | A boolean value that indicates if you are subscribed to [!DNL Marketo Account-Based Marketing]. | `false` |
| `has_msi` | A boolean value that indicates if you are subcscribed to [!DNL Marketo Sales Insight]. | `false` |

{style="table-layout:auto"}

### Running the scripts

With your [!DNL Postman] collection and environment set up, you can now run the script through the [!DNL Postman] interface.

In the [!DNL Postman] interface, select the root folder of the auto-generator utility and then select **[!DNL Run]** from the top header.

![root-folder](../images/marketo/root-folder.png)

The [!DNL Runner] interface appears. From here, ensure that all the checkboxes are selected and then select **[!DNL Run Adobe I/O Access Token Generation + Automate Namespace creation]**.

![run-generator](../images/marketo/run-generator.png)

A successful request creates the B2B namespaces and schemas according to beta specifications.

## [!DNL Marketo] namespaces

Identity namespaces are a component of [[!DNL Identity Service]](../../../../identity-service/home.md) that serve as indicators of the context to which an identity relates.

A fully qualified identity includes an ID value and a namespace. A new custom namespace is required for every new [!DNL Marketo] instance and dataset combination. For example, a [!DNL Marketo] source connector ingesting the `programs` dataset requires its own custom namespace, and another Marketo source connector ingesting the same dataset also requires its own new custom namespace. See the [namespaces overview](../../../../identity-service/namespaces.md) for more information.

The [!DNL Marketo] namespace is used in the primary identity of the entity.

The following table contains information on the underlying set up for [!DNL Marketo] namespaces.

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

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

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Display name | Identity symbol | Identity type | Issuer type | Issuer entity type | [!DNL Salesforce] subscription organization ID example |
| --- | --- | --- | --- | --- | --- |
| `salesforce_lead_{SALESFORCE_ORGANIZATION_ID}` | auto-generated | `CROSS_DEVICE` | [!DNL Salesforce] | `lead` | `00DA0000000Hz79` |
| `salesforce_account_{SALESFORCE_ORGANIZATION_ID}` | auto-generated | `B2B_ACCOUNT` | [!DNL Salesforce] | `account` | `00DA0000000Hz79` |
| `salesforce_opportunity_{SALESFORCE_ORGANIZATION_ID}` | auto-generated | `B2B_OPPORTUNITY` | [!DNL Salesforce] | `opportunity` | `00DA0000000Hz79` |
| `salesforce_opportunity_contact_role_{SALESFORCE_ORGANIZATION_ID}` | auto-generated | `B2B_OPPORTUNITY_PERSON` | [!DNL Salesforce] | `opportunity contact role` | `00DA0000000Hz79` |
| `salesforce_campaign_{SALESFORCE_ORGANIZATION_ID}` | auto-generated | `B2B_CAMPAIGN` | [!DNL Salesforce] | `campaign` | `00DA0000000Hz79` |
| `salesforce_campaign_member_{SALESFORCE_ORGANIZATION_ID}` |  auto-generated | `B2B_CAMPAIGN_MEMBER` | [!DNL Salesforce] | `campaign member` | `00DA0000000Hz79` |

{style="table-layout:auto"}

### [!DNL Microsoft Dynamics] namespaces

If you are subscribed to the [!DNL Dynamics] integration, the [!DNL Dynamics] namespace is used as secondary identity of the entity.

The following table contains information on the underlying set up for [!DNL Dynamics] namespaces.

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Display name | Identity symbol | Identity type | Issuer type | Issuer entity type | [!DNL Dynamics] subscription organization ID example |
| --- | --- | --- | --- | --- | --- |
| `microsoft_person_{DYNAMICS_ID}` | auto-generated | `CROSS_DEVICE` | [!DNL Microsoft] | `person` | `94cahe38-e51h-3d57-a9c6-2edklb7184mh` |
| `microsoft_account_{DYNAMICS_ID}` | auto-generated | `B2B_ACCOUNT` | [!DNL Microsoft] | `account` | `94cahe38-e51h-3d57-a9c6-2edklb7184mh` |
| `microsoft_opportunity_{DYNAMICS_ID}` | auto-generated | `B2B_OPPORTUNITY` | [!DNL Microsoft] | `opportunity` | `94cahe38-e51h-3d57-a9c6-2edklb7184mh` |
| `microsoft_opportunity_contact_connection_{DYNAMICS_ID}` | auto-generated | `B2B_OPPORTUNITY_PERSON` | [!DNL Microsoft] | `opportunity relationship` | `94cahe38-e51h-3d57-a9c6-2edklb7184mh` |
| `microsoft_campaign_{DYNAMICS_ID}` | auto-generated | `B2B_CAMPAIGN` | [!DNL Microsoft] | `campaign` | `94cahe38-e51h-3d57-a9c6-2edklb7184mh` |
| `microsoft_campaign_member_{DYNAMICS_ID}` | auto-generated | `B2B_CAMPAIGN_MEMBER` | [!DNL Microsoft] | `campaign member` | `94cahe38-e51h-3d57-a9c6-2edklb7184mh` |

{style="table-layout:auto"}

## [!DNL Marketo] schemas

Experience Platform uses schemas to describe the structure of data in a consistent and reusable way. By defining data consistently across systems, it becomes easier to retain meaning and therefore gain value from data.

Before data can be ingested into Platform, a schema must be composed to describe the data's structure and provide constraints to the type of data that can be contained within each field. Schemas consist of a base class and zero or more schema field groups.

For more information on the schema composition model, including design principles and best practices, see the [basics of schema composition](../../../../xdm/schema/composition.md).

The following table contains information on the underlying setup of [!DNL Marketo] schemas.

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Schema name | Base class | Field groups | [!DNL Profile] in Schema | Primary identity | Primary identity namespace | Secondary identity | Secondary identity namespace | Relationship | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `[!DNL Marketo] Company {MUNCHKIN_ID}` | XDM Business Account | XDM Business Account Details | Enabled |  `accountID` in the base class | `marketo_company_{MUNCHKIN_ID}` | `extSourceSystemAudit.externalID` in the base class | `salesforce_account_{SALESFORCE_ORGANIZATION_ID}` | <ul><li>`accountParentID` in XDM Business Account Details field group</li><li>Type: one-to-one</li><li>Reference schema: `[!DNL Marketo] Company {MUNCHKIN_ID}`</li><li>Namespace: `marketo_company_{MUNCHKIN_ID}`</li></ul> |
| `[!DNL Marketo] Person {MUNCHKIN_ID}` | XDM Individual Profile | <ul><li>XDM Business Person Details</li><li>XDM Business Person Components</li><li>IdentityMap</li></ul> | Enabled | `personID` in the base class | `marketo_person_{MUNCHKIN_ID}` | <ol><li>`extSourceSystemAudit.externalID` of XDM Business Person Details field group</li><li>`workEmail.address` of XDM Business Person Details field group</li><li>`identityMap` of Identity Map field group</ol></li> | <ol><li>`salesforce_lead_{SALESFORCE_ORGANIZATION_ID}`</li><li>Email</li><li>ECID</li></ol> | <ul><li>`personComponents.sourceAccountID` of XDM Business Person Components field group</li><li>Type: Many-to-one</li><li>Reference Schema: `[!DNL Marketo] Company {MUNCHKIN_ID}`</li><li>Namespace: `marketo_company_{MUNCHKIN_ID}`</li><li>Destination property: `accountID`</li><li>Relationship name from current schema: Account</li><li>Relationship name from reference schema: People</li></ul> |
| `[!DNL Marketo] Opportunity {MUNCHKIN_ID}` | XDM Business Opportunity | XDM Business Opportunity Details | Enabled | `opportunityID` in the base class | `marketo_opportunity_{MUNCHKIN_ID}` | `extSourceSystemAudit.externalID` in the base class | `salesforce_opportunity_{SALESFORCE_ORGANIZATION_ID}` | <ul><li>`accountID` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: `[!DNL Marketo] Company {MUNCHKIN_ID}`</li><li>Namespace: `marketo_company_{MUNCHKIN_ID}`</li><li>Destination property: `accountID`</li><li>Relationship name from current schema: Account</li><li>Relationship name from reference schema: Opportunities</li></ul> |
| `[!DNL Marketo] Opportunity Contact Role {MUNCHKIN_ID}` | XDM Business Opportunity Person Relation | None | Enabled | `opportunityPersonID` in the base class | `marketo_opportunity_contact_role_{MUNCHKIN_ID}` | `extSourceSystemAudit.externalID` in the base class | `salesforce_opportunity_contact_role_{SALESFORCE_ORGANIZATION_ID}` | First relationship<ul><li>`personID` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: `[!DNL Marketo] Person {MUNCHKIN_ID}`</li><li>Namespace: `marketo_person_{MUNCHKIN_ID}`</li><li>Destination property: `personID`</li><li>Relationship name from current schema: Person</li><li>Relationship name from reference schema: Opportunities</li></ul>Second relationship<ul><li>`opportunityID` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: `[!DNL Marketo] Opportunity {MUNCHKIN_ID}`</li><li>Namespace: `marketo_opportunity_{MUNCHKIN_ID}`</li><li>Destination property: `opportunityID`</li><li>Relationship name from current schema: Opportunity</li><li>Relationship name from reference schema: People</li></ul> |
| `[!DNL Marketo] Program {MUNCHKIN_ID}` | XDM Business Campaign | XDM Business Campaign Details | Enabled | `campaignID` in the base class | `marketo_program_{MUNCHKIN_ID}` | `extSourceSystemAudit.externalID` in the base class | `salesforce_campaign_{SALESFORCE_ORGANIZATION_ID}` |
| `[!DNL Marketo] Program Member {MUNCHKIN_ID}` | XDM Business Campaign Member | XDM Business Campaign Member Details | Enabled | `campaignMemberID` in the base class | `marketo_program_member_{MUNCHKIN_ID}` | None | None | First relationship<ul><li>`personID` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: Marketo Person {MUNCHKIN_ID}</li><li>Namespace: `marketo_person_{MUNCHKIN_ID}`</li><li>Destination property: `personID`</li><li>Relationship name from current schema: Person</li><li>Relationship name from reference schema: Programs</li></ul>Second relationship<ul><li>`campaignID` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: `[!DNL Marketo] Program {MUNCHKIN_ID}`</li><li>Namespace: `marketo_program_{MUNCHKIN_ID}`</li><li>Destination property: `campaignID`</li><li>Relationship name from current schema: Program</li><li>Relationship name from reference schema: People</li></ul> |
| `[!DNL Marketo] Static List {MUNCHKIN_ID}` | XDM Business Marketing List | None | Enabled | `marketingListID` in the base class | `marketo_static_list_{MUNCHKIN_ID}` | None | None | None | Static List is not synced from [!DNL Salesforce] and therefore does not have a secondary identity. |
| `[!DNL Marketo] Static List Member {MUNCHKIN_ID}`| XDM Business Marketing List Members | None | Enabled | `marketingListMemberID` in the base class | `marketo_static_list_member_{MUNCHKIN_ID}` | None | None | First relationship<ul><li>`personID` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: `[!DNL Marketo] Person {MUNCHKIN_ID}`</li><li>Namespace: `marketo_person_{MUNCHKIN_ID}`</li><li>Destination property: `personID`</li><li>Relationship name from current schema: Person</li><li>Relationship name from reference schema: Lists</li></ul>Second relationship<ul><li>`marketingListID` in the base class</li><li>Type: Many-to-one</li><li>Reference Schema: `[!DNL Marketo] Static List {MUNCHKIN_ID}`</li><li>Namespace: `marketo_static_list_{MUNCHKIN_ID}`</li><li>Destination property: `marketingListID`</li><li>Relationship name from current schema: List</li><li>Relationship name from reference schema: People</li></ul> | Static list member is not synced from [!DNL Salesforce] and therefore does not have a secondary identity. |
| `[!DNL Marketo] Named Account {MUNCHKIN_ID}` | XDM Business Account | XDM Business Account Details | Enabled | `accountID` in the base class | `marketo_named_account_{MUNCHKIN_ID}` | `extSourceSystemAudit.externalID` in the base class | `salesforce_account_{SALESFORCE_ORGANIZATION_ID}` | <ul><li>`accountParentID` in XDM Business Account Details field group</li><li>Type: one-to-one</li><li>Reference Schema: `[!DNL Marketo] Named Account {MUNCHKIN_ID}`</li><li>Namespace: `marketo_named_account_{MUNCHKIN_ID}` |
| [!DNL Marketo] Activity `{MUNCHKIN ID}` | XDM ExperienceEvent | <ul><li>Visit WebPage</li><li>New Lead</li><li>Convert Lead</li><li>Add To List</li><li>Remove From List</li><li>Add To Opportunity</li><li>Remove From Opportunity</li><li>Form Filled Out</li><li>Link Clicks</li><li>Email Delivered</li><li>Email Opened</li><li>Email Clicked</li><li>Email Bounced</li><li>Email Bounced Soft</li><li>Email Unsubscribed</li><li>Score Changed</li><li>Opportunity Updated</li><li>Status in Campaign Progression Changed</li><li>Person Identifier</li><li>Marketo Web URL | Enabled | `personID` of Person Identifier field group | `marketo_person_{MUNCHKIN_ID}` | None | None | First relationship<ul><li>`listOperations.listID` field</li><li>Type: one-to-one</li><li>Reference Schema: `[!DNL Marketo] Static List {MUNCHKIN_ID}`</li><li>Namespace: `marketo_static_list_{MUNCHKIN_ID}`</li></ul>Second relationship<ul><li>`opportunityEvent.opportunityID` field</li><li>Type: one-to-one</li><li>Reference Schema: `[!DNL Marketo] Opportunity {MUNCHKIN_ID}`</li><li>Namespace: `marketo_opportunity_{MUNCHKIN_ID}`</li></ul>Third relationship<ul><li>`leadOperation.campaignProgression.campaignID` field</li><li>Type: one-to-one</li><li>Reference Schema: `[!DNL Marketo] Program {MUNCHKIN_ID}`</li><li>Namespace: `marketo_program_{MUNCHKIN_ID}`</li></ul> | The primary identity of `[!DNL Marketo] Activity {MUNCHKIN_ID}` schema is `personID`, which is the same as the primary identity of `[!DNL Marketo] Person {MUNCHKIN_ID}` schema. |

{style="table-layout:auto"}

## Next steps

To learn how to connect your [!DNL Marketo] data to Platform, see the tutorial on [creating a Marketo source connector in the UI](../../../tutorials/ui/create/adobe-applications/marketo.md).
