---
keywords: Experience Platform;home;popular topics;Marketo source connector;Marketo connector;Marketo source;Marketo
solution: Experience Platform
title: Create a B2B schema
topic: overview
type: Tutorial
description: This tutorial provides steps for creating a B2B schema
---

# Create a B2B schema

This tutorial provides steps for creating a B2B schema to be used for a Marketo Engage source connector.

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
