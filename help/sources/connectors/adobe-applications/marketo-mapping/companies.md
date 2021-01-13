---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping;
solution: Experience Platform
title: Companies mapping fields
topic: overview
description: The tables below contain the mappings between the Marketo Companies datasets and their corresponding XDM fields.
---

# Companies mapping fields

The tables below contain the mappings between the [!DNL Marketo] [!UICONTROL Companies] datasets and their corresponding XDM fields.

If the customer plans to ingest B2B data from not only Marketo but also another CRM system, then choose the blue color attribute on the source side for the first row.

If the customer plans to ingest B2B data from Marketo exclusively, then choose the green color attribute on the source side for the first row.

There is no difference from the second row and beyond.

| Source dataset | XDM target field |
| -------------- | ---------------- |
| <ul><li>External-Account-key</li><li>Account-key</li></ul> | accountID |
| createdAt | extSourceSystemAudit.createdDate |
| updatedAt | extSourceSystemAudit.lastUpdatedDate |
| billingCity | accountBillingAddress.city |
| billingCountry | accountBillingAddress.country |
| billingPostalCode | accountBillingAddress.postalCode |
| billingState | accountBillingAddress.state |
| billingStreet | accountBillingAddress.street1 |
| annualRevenue | accountOrganization.annualRevenue.amount |
| sicCode | accountOrganization.SICCode |
| industry | accountOrganization.industry |
| numberOfEmployees | accountOrganization.numberOfEmployees |
| website | accountOrganization.website |
| mainPhone | accountPhone.number |
| company | accountName |
| companyNotes | accountDescription |
| site | accountSite |
| billingCity | accountComponents.segmentationAttributes.accountBillingAddress.city |
| billingCountry | accountComponents.segmentationAttributes.accountBillingAddress.country |
| billingPostalCode | accountComponents.segmentationAttributes.accountBillingAddress.postalCode |
| billingState | accountComponents.segmentationAttributes.accountBillingAddress.state |
| billingStreet | accountComponents.segmentationAttributes.accountBillingAddress.street1 |
| annualRevenue | accountComponents.segmentationAttributes.accountOrganization.annualRevenue.amount |
| sicCode | accountComponents.segmentationAttributes.accountOrganization.SICCode |
| industry | accountComponents.segmentationAttributes.accountOrganization.industry |
| numberOfEmployees | accountComponents.segmentationAttributes.accountOrganization.numberOfEmployees |
| website | accountComponents.segmentationAttributes.accountOrganization.website |
| company | accountComponents.segmentationAttributes.accountName |
| Account-systemID | accountComponents.sourceAccountID.systemID |
| Account-ID | accountComponents.sourceAccountID.ID |
| Account-key | accountComponents.sourceAccountID.key |
| External-Account-systemID | accountComponents.sourceExternalID.systemID |
| External-Account-ID | accountComponents.sourceExternalID.ID |
| External-Account-key | accountComponents.sourceExternalID.key |