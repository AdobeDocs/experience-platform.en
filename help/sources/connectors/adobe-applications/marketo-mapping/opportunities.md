---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping
solution: Experience Platform
title: Mapping Marketo opportunities fields to XDM
topic: overview
description: The table below contains the mappings between the Marketo Opportunities dataset and their corresponding XDM fields.
---

# Mapping Marketo opportunities fields to XDM

The tables below contains the mappings between the [!DNL Marketo] opportunities dataset and their corresponding Experience Data Model (XDM) fields.

>[!IMPORTANT]
>
>If you are ingesting B2B data from [!DNL Marketo] and another CRM system, then select `External-Opportunity-key` from the first row of source datasets. If you are ingesting B2B data exclusively from [!DNL Marketo], then select `Opportunity-key` from the first row.

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
