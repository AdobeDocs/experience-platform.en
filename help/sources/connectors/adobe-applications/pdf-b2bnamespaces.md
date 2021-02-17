---
keywords: Experience Platform;home;popular topics;Marketo source connector;Marketo connector;Marketo source;Marketo
solution: Experience Platform
title: Marketo namespaces 
topic: overview
description: This document provides an overview of custom namespaces required when creating a Marketo Engage source connector.
---

# Marketo namespaces 

Identity namespaces are a component of Identity Service that serve as indicators of the context to which an identity relates. A fully qualified identity includes an ID value and a namespace.

You must create a new custom namespace for every new Marketo instance and dataset combination. A Marketo source connector ingesting the `programs` dataset requires its own custom namespace, and another Marketo source connector ingesting the same dataset also requires its own new custom namespace. For more information on custom namespaces, see the [namespace overview](https://experienceleague.adobe.com/docs/experience-platform/identity/namespaces.html?lang=en#managing-custom-namespaces).

This document provides an overview of custom namespaces required when creating a Marketo Engage source connector.

## Marketo namespaces

The Marketo namespace is used in the primary identity of the entity. The namespace display name is in the format of: `{ENTITY_TYPE}_{ISSUER_INSTANCE_ID}_{ISSUER_TYPE}`. This means that if the entity type is `companies`, the issuer instance ID is the munchkin ID of `123-ABC-789`, and the issuer type is `marketo`, then the display name is `company_123-ABC-789_marketo`.

>[!IMPORTANT]
>
>The munchkin ID for your display names and identity symbols are the same, but the munchkin ID used for the identity symbol does not contain hyphens.

| Display name | Display name example | Identity symbol | Identity symbol example | Entity type |
| --- | --- | --- | --- | --- |
| `person_{MUNCHKIN_ID}_marketo` | `person_123-ABC-789_marketo` | `mk{MUNCHKIN_ID_WITHOUT_HYPHEN}p` | `mk123ABC789p` | Cross-Device ID |
| `company_{MUNCHKIN_ID}_marketo` | `company_123-ABC-789_marketo` | `mk{MUNCHKIN_ID_WITHOUT_HYPHEN}c` | `mk123ABC789c` | Non-people identifier |
| `opportunity_{MUNCHKIN_ID}_marketo` | `opportunity_123-ABC-789_marketo` | `mk{MUNCHKIN_ID_WITHOUT_HYPHEN}o` | `mk123ABC789o` | Non-people identifier |
| `opportunity_person_relation_{MUNCHKIN_ID}_marketo` | `opportunity_person_relation_123-ABC-789_marketo` | `mk{MUNCHKIN_ID_WITHOUT_HYPHEN}opr` | `mk123ABC789opr` | Non-people identifier |
| `campaign_{MUNCHKIN_ID}_marketo` | `campaign_123-ABC-789_marketo` | `mk{MUNCHKIN_ID_WITHOUT_HYPHEN}cp` | `mk123ABC789cp` | Non-people identifier |
| `campaign_member_{MUNCHKIN_ID}_marketo` | `campaign_member_123-ABC-789_marketo` | `mk{MUNCHKIN_ID_WITHOUT_HYPHEN}cpm` | `mk123ABC789cpm` | Non-people identifier |
| `marketing_list_{MUNCHKIN_ID}_marketo` | `marketing_list_123-ABC-789_marketo` | `mk{MUNCHKIN_ID_WITHOUT_HYPHEN}ml` | `mk123ABC789ml` | Non-people identifier |
| `marketing_list_member_{MUNCHKIN_ID}_marketo` | `marketing_list_member_123-ABC-789_marketo` | `mk{MUNCHKIN_ID_WITHOUT_HYPHEN}mlm` | `mk123ABC789mlm` | Non-people identifier |
| `named_account_{MUNCHKIN_ID}_marketo` | `named_account_123-ABC-789_marketo` | `mk{MUNCHKIN_ID_WITHOUT_HYPHEN}na` | `mk123ABC789na` | Non-people identifier |

## Salesforce namespaces

The salesforce namespace is used in the secondary identity of the entity. The namespace display name is in the format of: `{ENTITY_TYPE}_{ISSUER_INSTANCE_ID}_{ISSUER_TYPE}`. This means that if the entity type is `companies`, the issuer instance ID is the salesforce organization ID of `00DA0000000Hz79`, and the issuer type is salesforce, then the display name is `company_00DA0000000Hz79_salesforce`.

| Display name | Display name example | Identity symbol | Identity symbol example | Entity type |
| --- | --- | --- | --- | --- |
| `person_{SFDC_ORGANIZATION_ID}_salesforce` | `person_00DA0000000Hz79_salesforce` | `sf{SFDC_ORGANIZATION_ID_WITHOUT_HYPHEN}p` | `sf00DA0000000Hz79p` | Cross-Device ID |
| `company_{SFDC_ORGANIZATION_ID}_salesforce` | `company_00DA0000000Hz79_salesforce` | `sf{SFDC_ORGANIZATION_ID_WITHOUT_HYPHEN}c` | `sf00DA0000000Hz79c` | Non-people identifier |
| `opportunity_{SFDC_ORGANIZATION_ID}_salesforce` | `opportunity_00DA0000000Hz79_salesforce` | `sf{SFDC_ORGANIZATION_ID_WITHOUT_HYPHEN}o` | `sf00DA0000000Hz79o` | Non-people identifier |
| `opportunity_person_relation_{SFDC_ORGANIZATION_ID}_salesforce` | `opportunity_person_relation_00DA0000000Hz79_salesforce` | `sf{SFDC_ORGANIZATION_ID_WITHOUT_HYPHEN}opr` | `sf00DA0000000Hz79opr` | Non-people identifier |
| `campaign_{SFDC_ORGANIZATION_ID}_salesforce` | `campaign_00DA0000000Hz79_salesforce` | `sf{SFDC_ORGANIZATION_ID_WITHOUT_HYPHEN}cp` | `sf00DA0000000Hz79cp` | Non-people identifier |
| `campaign_member_{SFDC_ORGANIZATION_ID}_salesforce` | `campaign_member_00DA0000000Hz79_salesforce` | `sf{SFDC_ORGANIZATION_ID_WITHOUT_HYPHEN}cpm` | `sf00DA0000000Hz79cpm` | Non-people identifier |
| `named_account_{SFDC_ORGANIZATION_ID}_salesforce` | `named_account_00DA0000000Hz79_salesforce` | `sf{SFDC_ORGANIZATION_ID_WITHOUT_HYPHEN}na` | `sf00DA0000000Hz79na` | Non-people identifier |
