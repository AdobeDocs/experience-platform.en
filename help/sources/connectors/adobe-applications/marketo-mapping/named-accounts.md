---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping;Named accounts mapping;named accounts mapping;named accounts
solution: Experience Platform
title: Named accounts mapping fields
topic: overview
description: The table below contains the mappings between the Marketo named accounts dataset and their corresponding XDM fields.
---

# Named accounts mapping fields

The table below contains the mappings between the [!DNL Marketo] named accounts dataset and their corresponding XDM fields.

>[!IMPORTANT]
>
>If you are ingesting B2B data from [!DNL Marketo] and another CRM system, then select `External-Account-key` from the first row of source datasets. If you are ingesting B2B data exclusively from [!DNL Marketo], then select `Account-key` from the first row.

| Source dataset | XDM target field |
| -------------- | ---------------- |
| <ul><li>External-Account-key</li><li>Account-key</li></ul> | accountID |
| createdAt | extSourceSystemAudit.createdDate |
| updatedAt | extSourceSystemAudit.lastUpdatedDate |
| city | accountBillingAddress.city |
| country | accountBillingAddress.country |
| state | accountBillingAddress.state |
| annualRevenue | accountOrganization.annualRevenue.amount |
| sicCode | accountOrganization.SICCode |
| industry | accountOrganization.industry |
| logoUrl | accountOrganization.logoUrl |
| numberOfEmployees | accountOrganization.numberOfEmployees |
| name | accountName |
| accountOwnerId | accountOwnerID |
| AccountParent-key | accountParentID |
| sourceType | accountSourceType |
| city | accountComponents.segmentationAttributes.accountBillingAddress.city |
| country | accountComponents.segmentationAttributes.accountBillingAddress.country |
| state | accountComponents.segmentationAttributes.accountBillingAddress.state |
| annualRevenue | accountComponents.segmentationAttributes.accountOrganization.annualRevenue.amount |
| sicCode | accountComponents.segmentationAttributes.accountOrganization.SICCode |
| industry | accountComponents.segmentationAttributes.accountOrganization.industry |
| logoUrl | accountComponents.segmentationAttributes.accountOrganization.logoUrl |
| numberOfEmployees | accountComponents.segmentationAttributes.accountOrganization.numberOfEmployees |
| name | accountComponents.segmentationAttributes.accountName |
| Account-systemID | accountComponents.sourceAccountID.systemID |
| Account-ID | accountComponents.sourceAccountID.ID |
| Account-key | accountComponents.sourceAccountID.key |
| External-Account-systemID | accountComponents.sourceExternalID.systemID |
| External-Account-ID | accountComponents.sourceExternalID.ID |
| External-Account-key | accountComponents.sourceExternalID.key |
| AccountParent-systemID | accountComponents.sourceAccountParentID.systemID |
| AccountParent-ID | accountComponents.sourceAccountParentID.ID |
| AccountParent-key | accountComponents.sourceAccountParentID.key |