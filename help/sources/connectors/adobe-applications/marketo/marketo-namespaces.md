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

You must create a new custom namespace for every new Marketo instance and dataset combination. A Marketo source connector ingesting the `programs` dataset requires its own custom namespace, and another Marketo source connector ingesting the same dataset also requires its own new custom namespace. For more information on custom namespaces, see the [namespace overview](../../../../identity-service/namespaces.md).

This document provides an overview of custom namespaces required when creating a [!DNL Marketo] source connector.

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
| `salesforce_opportunity_contact_role_{SALESFORCE_ORGANIZATION_ID}` | auto-generated | `B2B_OPPORTUNITY_PERSON` | [!DNL Salesforce] | `opportunity contact role` | `00DA0000000Hz79`
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