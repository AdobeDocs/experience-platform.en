---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping
solution: Experience Platform
title: Mapping Marketo opportunities fields to XDM
topic: overview
description: The table below contains the mappings between the Marketo Opportunities dataset and their corresponding XDM fields.
---

# Mapping Marketo opportunities fields to XDM

The tables below contains the mappings between the Marketo opportunities dataset and their corresponding Experience Data Model (XDM) fields.

| Source dataset | XDM target field | Notes |
| -------------- | ---------------- | ----- |
| `Opportunity-key` | `opportunityID` |
| `Account-key` | `accountID` |
| `description` | `opportunityDescription` |
| `name` | `opportunityName` |
| `stage` | `opportunityStage` |
| `type` | `opportunityType` |
| `createdAt` | `extSourceSystemAudit.createdDate` |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |
| `expectedRevenue` | `expectedRevenue.amount` |
| `amount` | `opportunityAmount.amount` |
| `closeDate` | `expectedCloseDate` |
| `fiscalQuarter` | `fiscalQuarter` |
| `fiscalYear` | `fiscalYear` |
| `forecastCategory` | `forecastCategory` |
| `forecastCategoryName` | `forecastCategoryName` |
| `isClosed` | `isClosed` |
| `isWon` | `isWon` |
| `quantity` | `opportunityQuantity` |
| `probability` | `probabilityPercentage` |
| `mktoCdpSourceCampaignId` | `campaignID` | This mapping is available only to customers with a Salesforce integration. |
| `lastActivityDate` | `lastActivityDate` |
| `leadSource` | `leadSource` |
| `nextStep` | `nextStep` |

## Next steps

By reading this document, you have gained insight on the mapping relationship between your Marketo opportunities dataset and their corresponding XDM fields. See the Marketo tutorial to complete your Marketo opportunities mapping set.
