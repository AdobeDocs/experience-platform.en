---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping
solution: Experience Platform
title: Mapping Marketo opportunity person relations fields to XDM
topic: overview
description: The table below contains the mappings between the Marketo Opportunity person relations dataset and their corresponding XDM fields.
---

# Mapping Marketo opportunity person relations fields to XDM

The table below contains the mappings between the Marketo opportunity person relations dataset and their corresponding Experience Data Model (XDM) fields.

>[!IMPORTANT]
>
>If you are ingesting B2B data from Marketo and another CRM system, then select `External-OpportunityPerson-key` from the first row of source datasets. If you are ingesting B2B data exclusively from Marketo, then select `OpportunityPerson-key` from the first row.

| Source dataset | XDM target field |
| -------------- | ---------------- |
| <ul><li>`External-OpportunityPerson-key`</li><li>`OpportunityPerson-key`</li></ul> | `opportunityPersonID` |
| `Opportunity-key` | `opportunityID` |
| `Person-key` | `personID` |
| `role` | `personRole` |
| `isPrimary` | `isPrimary` |
| `createdAt` | `extSourceSystemAudit.createdDate` |
| `updatedAt` | `extSourceSystemAudit.lastUpdatedDate` |
| `External-OpportunityPerson-systemID` | `opportunityPersonComponents.sourceExternalID.systemID` |
| `External-OpportunityPerson-ID` | `opportunityPersonComponents.sourceExternalID.ID` |
| `External-OpportunityPerson-key` | `opportunityPersonComponents.sourceExternalID.key` |
| `Opportunity-systemID` | `opportunityPersonComponents.sourceOpportunityID.systemID` |
| `Opportunity-ID` | `opportunityPersonComponents.sourceOpportunityID.ID` |
| `Opportunity-key` | `opportunityPersonComponents.sourceOpportunityID.key` |
| `OpportunityPerson-systemID` | `opportunityPersonComponents.sourceOpportunityPersonID.systemID` |
| `OpportunityPerson-ID` | `opportunityPersonComponents.sourceOpportunityPersonID.ID` |
| `OpportunityPerson-key` | `opportunityPersonComponents.sourceOpportunityPersonID.key` |
| `Person-systemID` | `opportunityPersonComponents.sourcePersonID.systemID` |
| `Person-ID` | `opportunityPersonComponents.sourcePersonID.ID` |
| `Person-key` | `opportunityPersonComponents.sourcePersonID.key` |
| `role` | `opportunityPersonComponents.personRole` |

## Next steps

By reading this document, you have gained insight on the mapping relationship between your Marketo opportunity person relations dataset and their corresponding XDM fields. See the Marketo tutorial to complete your Marketo opportunity person relations mapping set.
