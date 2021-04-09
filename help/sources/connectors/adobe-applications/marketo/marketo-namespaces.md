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

The Marketo namespace is used in the primary identity of the entity. The namespace display name is in the format of: `{ISSUER_ENTITY_TYPE}_{ISSUER_INSTANCE_ID}_{ISSUER_TYPE}`. This means that if the entity type is `companies`, the issuer instance ID is the munchkin ID of `123-ABC-789`, and the issuer type is `marketo`, then the display name is `company_123-ABC-789_marketo`.

>[!IMPORTANT]
>
>The munchkin ID for your display names and identity symbols are the same, but the munchkin ID used for the identity symbol does not contain hyphens.

| Display name | Identity symbol | Entity type |
| --- | --- | --- |
| `person_123-ABC-789_marketo` | `mk123ABC789p` | Cross-Device ID |
| `company_123-ABC-789_marketo` | `mk123ABC789c` | Non-people identifier |
| `opportunity_123-ABC-789_marketo` | `mk123ABC789o` | Non-people identifier |
| `opportunity_person_relation_123-ABC-789_marketo` | `mk123ABC789opr` | Non-people identifier |
| `campaign_123-ABC-789_marketo` | `mk123ABC789cp` | Non-people identifier |
| `campaign_member_123-ABC-789_marketo` | `mk123ABC789cpm` | Non-people identifier |
| `marketing_list_123-ABC-789_marketo` | `mk123ABC789ml` | Non-people identifier |
| `marketing_list_member_123-ABC-789_marketo` | `mk123ABC789mlm` | Non-people identifier |
| `named_account_123-ABC-789_marketo` |`mk123ABC789na` | Non-people identifier |

{style="table-layout:auto"}

## Salesforce namespaces

The salesforce namespace is used in the secondary identity of the entity. The namespace display name is in the format of: `{ISSUER_ENTITY_TYPE}_{ISSUER_INSTANCE_ID}_{ISSUER_TYPE}`. This means that if the entity type is `companies`, the issuer instance ID is the salesforce organization ID of `00DA0000000Hz79`, and the issuer type is salesforce, then the display name is `company_00DA0000000Hz79_salesforce`.

| Display name | Identity symbol | Entity type |
| --- | --- | --- |
| `person_00DA0000000Hz79_salesforce` | `sf00DA0000000Hz79p` | Cross-Device ID |
| `company_00DA0000000Hz79_salesforce` | `sf00DA0000000Hz79c` | Non-people identifier |
| `opportunity_00DA0000000Hz79_salesforce` | `sf00DA0000000Hz79o` | Non-people identifier |
| `opportunity_person_relation_00DA0000000Hz79_salesforce` | `sf00DA0000000Hz79opr` | Non-people identifier |
| `campaign_00DA0000000Hz79_salesforce` | `sf00DA0000000Hz79cp` | Non-people identifier |
| `campaign_member_00DA0000000Hz79_salesforce` |  `sf00DA0000000Hz79cpm` | Non-people identifier |
| `named_account_00DA0000000Hz79_salesforce` |`sf00DA0000000Hz79na` | Non-people identifier |

{style="table-layout:auto"}

## Appendix

The following are additional information that provides further context on the use of Marketo namespaces.

### Limits and constraints

* The identity symbol must be composed of only alphanumeric characters and no special characters.
* The identity symbol cannot exceed its cap of 20 characters. The Salesforce organization ID itself is the 15-character GUID.

The identity symbol follows the format of: `{ISSUER_TYPE_ABBREVIATION}{ISSUER_INSTANCE_ID}{ENTITY_TYPE_ABBREVIATION}`.

### Issuer type abbreviations

* `mk` for Marketo
* `sf` for Salesforce
* `md` for Microsoft Dynamics

### Entity type abbreviations

* `p` for Persons
* `c` for Companies
* `na` for Named accounts
* `o` for Opportunities
* `opr` for Opportunity person relations
* `cp` for Campaigns
* `cpm` for Campaign members
* `ml` for Marketing lists
* `mlm` for Marketing list members