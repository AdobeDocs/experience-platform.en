---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping
solution: Experience Platform
title: Opportunities and opportunity person relation mapping fields
topic: overview
description: The tables below contain the mappings between the Marketo Opportunities and opportunity person relation datasets and their corresponding XDM fields.
---

# Opportunities and Opportunity Person Relation mapping fields

The tables below contain the mappings between the [!DNL Marketo] Opportunities and Opportunity Person Relation datasets and their corresponding XDM fields.

## Opportunities

If the customer plans to ingest B2B data from not only Marketo but also another CRM system, then choose the blue color attribute on the source side for the first row.

If the customer plans to ingest B2B data from Marketo exclusively, then choose the green color attribute on the source side for the first row.

There is no difference from the second row and beyond.

| Source dataset | XDM target field |
| -------------- | ---------------- |
| <ul><li>External-Opportunity-key</li><li>Opportunity-key</li></ul> | opportunityID |
| Account-key | accountID |
| description | opportunityDescription |
| name | opportunityName |
| stage | opportunityStage |
| type | opportunityType |
| createdAt | extSourceSystemAudit.createdDate |
| updatedAt | extSourceSystemAudit.lastUpdatedDate |
| expectedRevenue | expectedRevenue.amount |
| amount | opportunityAmount.amount |
| closeDate | closeDate |
| fiscalQuarter | fiscalQuarter |
| fiscalYear | fiscalYear |
| forecastCategory | forecastCategory |
| forecastCategoryName | forecastCategoryName |
| isClosed | isClosed |
| isWon | isWon |
| quantity | opportunityQuantity |
| probability | probabilityPercentage |
| mktoCdpSourceCampaignId* | campaignID |
| lastActivityDate | lastActivityDate |
| leadSource | leadSource |
| nextStep | nextStep |
| Account-systemID | opportunityComponents.sourceAccountID.systemID |
| Account-ID | opportunityComponents.sourceAccountID.ID |
| Account-key | opportunityComponents.sourceAccountID.key |
| mktoCdpSourceCampaignId | opportunityComponents.sourceCampaignID.ID |
| External-Opportunity-systemID | opportunityComponents.sourceExternalID.systemID |
| External-Opportunity-ID | opportunityComponents.sourceExternalID.ID |
| External-Opportunity-key | opportunityComponents.sourceExternalID.key |
| Opportunity-systemID | opportunityComponents.sourceOpportunityID.systemID |
| Opportunity-ID | opportunityComponents.sourceOpportunityID.ID |
| Opportunity-key | opportunityComponents.sourceOpportunityID.key |

## Opportunity Person Relation

If the customer plans to ingest B2B data from not only Marketo but also another CRM system, then choose the blue color attribute on the source side for the first row.

If the customer plans to ingest B2B data from Marketo exclusively, then choose the green color attribute on the source side for the first row.

There is no difference from the second row and beyond.

| Source dataset | XDM target field |
| -------------- | ---------------- |
| <ul><li>External-OpportunityPerson-key</li><li>OpportunityPerson-key</li></ul> | opportunityPersonID |
| Opportunity-key | opportunityID |
| Person-key | personID |
| role | personRole |
| isPrimary | isPrimary |
| createdAt | extSourceSystemAudit.createdDate |
| updatedAt | extSourceSystemAudit.lastUpdatedDate |
| External-OpportunityPerson-systemID | opportunityPersonComponents.sourceExternalID.systemID |
| External-OpportunityPerson-ID | opportunityPersonComponents.sourceExternalID.ID |
| External-OpportunityPerson-key | opportunityPersonComponents.sourceExternalID.key |
| Opportunity-systemID | opportunityPersonComponents.sourceOpportunityID.systemID |
| Opportunity-ID | opportunityPersonComponents.sourceOpportunityID.ID |
| Opportunity-key | opportunityPersonComponents.sourceOpportunityID.key |
| OpportunityPerson-systemID | opportunityPersonComponents.sourceOpportunityPersonID.systemID |
| OpportunityPerson-ID | opportunityPersonComponents.sourceOpportunityPersonID.ID |
| OpportunityPerson-key | opportunityPersonComponents.sourceOpportunityPersonID.key |
| Person-systemID | opportunityPersonComponents.sourcePersonID.systemID |
| Person-ID | opportunityPersonComponents.sourcePersonID.ID |
| Person-key | opportunityPersonComponents.sourcePersonID.key |
| role | opportunityPersonComponents.personRole |