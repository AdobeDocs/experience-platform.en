---
keywords: Experience Platform;home;popular topics;Marketo source connector;Marketo connector;Marketo source;Marketo
solution: Experience Platform
title: Marketo namespaces and B2B schemas
topic: overview
description: This document provides an overview of custom namespaces and B2B schemas required when creating a Marketo Engage source connector.
---

# Marketo namespaces and B2B schemas

This document provides an overview of custom namespaces and B2B schemas required when creating a Marketo Engage source connector.

## Namespaces

The following table contains custom namespaces you must create in order to establish a Marketo source connector. For more information on custom namespaces, see the [namespace overview](https://experienceleague.adobe.com/docs/experience-platform/identity/namespaces.html?lang=en#managing-custom-namespaces).

| Namespaces | Identity symbol | Entity type |
| --- | --- | --- |
| Marketo Opportunity | `mktoOppty` | Non-people |
| Salesforce Opportunity | `sfdcOppty` | Non-people |
| Microsoft Opportunity | `msftOppty` | Non-people |
| Bizible Opportunity | `bizOppty` | Non-people |
| Marketo Opportunity Person Relation | `mktoOpptyPersonRel` | Non-people |
| Salesforce Account Person Relation | `sfdcAccntPersonRel` | Non-people |
| Microsoft Account Person Relation | `msftAccntPersonRel` | Non-people |
| Marketo Campaign | `mktoCampaign` | Non-people |
| Bizible Campaign | `bizCampaign` | Non-people |
| Marketo Campaign Member | `mktoCampaignMbr` | Non-people |
| Bizible Campaign Member | `bizCampaignMbr` | Non-people |
| Marketo Marketing List | `mktoList` | Non-people |
| Marketo Marketing List Member | `mktoListMbr` | Non-people |
| Marketo Person | `mktoPrsn` | Cross-Device |
| Salesforce Person | `sfdcPrsn` | Cross-Device |
| Microsoft Person | `msftPrsn` | Cross-Device |
| Bizible Person | `bizPrsn` | Cross-Device |
| Marketo Account | `mktoAcct` | Non-people |
| Salesforce Account | `sfdcAcct` | Non-people |
| Microsoft Account | `msftAcct` | Non-people |
| Bizible Account | `bizAcct` | Non-people |

## Schemas

The following table contains B2B schemas required to create a Marketo source connector.

| Schema name | Base class | Mixins | Profile in schema | Primary identifier | Namespace (Marketo) | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Marketo Person | XDM Individual Profile | <ul><li>XDM Business Person Details</li><li>XDM Business Person Components</li></ul> | Enabled | `personID` in the base class | Marketo Person |
| Marketo Account | XDM Business Account | XDM Business Account | Enabled | `accountID` in the base class | Marketo account | This schema is used in dataflows for both the Company and Named Accounts datasets. |
| Marketo Opportunity | XDM Business Opportunity | XDM Business Opportunity Details | Enabled | `opportunityID` in the base class | Marketo Opportunity |
| Marketo Opportunity Person Relation | XDM Business Opportunity Person Relation | | Enabled | `opportunityPersonID` in the base class | Marketo Opportunity Person Relation |
| Marketo Marketing List | XDM Business Marketing List | | Enabled | `marketingListID` in the base class. | Marketo Marketing List |
| Marketo Marketing List Member | XDM Business Marketing List Members | | Enabled | `marketingListMemberID` in the base class | Marketo Marketing List Member |
| Marketo Campaign | XDM Business Campaign | XDM Business Campaign Details | Enabled | `campaignID` in the base class | Marketo Campaign |
| Marketo Campaign Member | XDM Business Campaign Member | XDM Business Campaign Details | Enabled | `campaignMemberID` in the base class | Marketo Campaign Member |
| Marketo Activity | XDM ExperienceEvent | <ul><li>Remove From List</li><li>Visit WebPage</li><li>Person Identifier</li><li>Marketo Web URL</li></ul> | Enabled | `personID` of Person Identifier mixin | Marketo Person |
