---
keywords: Experience Platform;home;popular topics;Marketo source connector;Marketo connector;Marketo source;Marketo
solution: Experience Platform
title: Marketo namespaces 
topic: overview
description: This document provides an overview of custom namespaces required when creating a Marketo Engage source connector.
---

# (Beta) [!DNL Marketo Engage] namespaces

>[!IMPORTANT]
>
>The [!DNL Marketo Engage] source is currently in beta. The feature and documentation are subject change.

This document provides details around setting up your Postman automation utility required for generating [!DNL Marketo] B2B namespaces and schemas.

## Prerequisites

Before you can generate your B2B namespaces and schemas, you must first set up your Platform developer console and [!DNL Postman] environment. For more information, see the tutorial on [setting up developer console and [!DNL Postman]](../../../../landing/postman.md).

With a Platform developer console and a [!DNL Postman] set up, apply the following variables to your [!DNL Marketo] environment:

| Environment variable | Example value | Notes |
| --- | --- | --- |
| `PRIVATE_KEY` | `{PRIVATE_KEY}` |
| `SANDBOX_NAME` | `prod` |
| `TENANT_ID` | `b2bcdpproductiontest` |
| `munchkinId` | `123-ABC-456 `| See the tutorial on [authenticating your [!DNL Marketo] instance](./marketo-auth.md) for more information. |
| `sfdc_org_id` | 00D4W000000FgYJUA0 | See the following [[!DNL Salesforce] guide](https://help.salesforce.com/articleView?id=000325251&type=1&mode=1) for more information on acquiring your organization ID. |
| `msd_org_id` | `f6438fab-67e8-4814-a6b5-8c8dcdf7a98f` | See the following [[!DNL Microsoft Dynamics] guide](https://docs.microsoft.com/en-us/power-platform/admin/determine-org-id-name) for more information on acquiring your organization ID. |
| `has_abm` | `false` | This value is set to `true` if you are subscribed to Account-Based Marketing. |
| `has_msi` | `false` | This value is set to `true` if you are subscribed to [!DNL Marketo Sales Insight]. |

{style="table-layout:auto"}

## [!DNL Marketo] namespaces

The [!DNL Marketo] namespace is used in the primary identity of the entity.

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

## [!DNL Salesforce] namespaces

If you are subscribed to the [!DNL Salesforce] integration, the [!DNL Salesforce] namespace is used in the secondary identity of the entity.

| Display name | Identity symbol | Identity type | Issuer type | Issuer entity type | [!DNL Salesforce] subscription organization ID example |
| --- | --- | --- | --- | --- | --- |
| `salesforce_person_{SALESFORCE_ORGANIZATION_ID}` | auto-generated | `CROSS_DEVICE` | [!DNL Salesforce] | `person` | `00DA0000000Hz79` |
| `salesforce_account_{SALESFORCE_ORGANIZATION_ID}` | auto-generated | `B2B_ACCOUNT` | [!DNL Salesforce] | `account` | `00DA0000000Hz79` |
| `salesforce_opportunity_{SALESFORCE_ORGANIZATION_ID}` | auto-generated | `B2B_OPPORTUNITY` | [!DNL Salesforce] | `opportunity` | `00DA0000000Hz79` |
| `salesforce_opportunity_contact_role_{SALESFORCE_ORGANIZATION_ID}` | auto-generated | `B2B_OPPORTUNITY_PERSON` | [!DNL Salesforce] | `opportunity contact role` | `00DA0000000Hz79` |
| `salesforce_campaign_{SALESFORCE_ORGANIZATION_ID}` | auto-generated | `B2B_CAMPAIGN` | [!DNL Salesforce] | `campaign` | `00DA0000000Hz79` |
| `salesforce_campaign_member_{SALESFORCE_ORGANIZATION_ID}` |  auto-generated | `B2B_CAMPAIGN_MEMBER` | [!DNL Salesforce] | `campaign member` | `00DA0000000Hz79` |

{style="table-layout:auto"}

## [!DNL Microsoft Dynamics] namespaces

If you are subscribed to the [!DNL Dynamics] integration, the [!DNL Dynamics] namespace will be used as secondary identity of the entity.

| Display name | Identity symbol | Identity type | Issuer type | Issuer entity type | [!DNL Salesforce] subscription organization ID example |
| --- | --- | --- | --- | --- | --- |
| `microsoft_person_{DYNAMICS_ID}` | auto-generated | `CROSS_DEVICE` | [!DNL Microsoft] | `person` | `94cahe38-e51h-3d57-a9c6-2edklb7184mh` |
| `microsoft_account_{DYNAMICS_ID}` | auto-generated | `B2B_ACCOUNT` | [!DNL Microsoft] | `account` | `94cahe38-e51h-3d57-a9c6-2edklb7184mh` |
| `microsoft_opportunity_{DYNAMICS_ID}` | auto-generated | `B2B_OPPORTUNITY` | [!DNL Microsoft] | `opportunity` | `94cahe38-e51h-3d57-a9c6-2edklb7184mh` |
| `microsoft_opportunity_contact_connection_{DYNAMICS_ID}` | auto-generated | `B2B_OPPORTUNITY_PERSON` | [!DNL Microsoft] | `opportunity relationship` | `94cahe38-e51h-3d57-a9c6-2edklb7184mh` |
| `microsoft_campaign_{DYNAMICS_ID}` | auto-generated | `B2B_CAMPAIGN` | [!DNL Microsoft] | `campaign` | `94cahe38-e51h-3d57-a9c6-2edklb7184mh` |
| `microsoft_campaign_member_{DYNAMICS_ID}` | auto-generated | `B2B_CAMPAIGN_MEMBER` | [!DNL Microsoft] | `campaign member` | `94cahe38-e51h-3d57-a9c6-2edklb7184mh` |

## Next steps

To learn how to connect your [!DNL Marketo] data to Platform, see the tutorial on [creating a Marketo source connector in the UI](../../../tutorials/ui/create/adobe-applications/marketo.md).