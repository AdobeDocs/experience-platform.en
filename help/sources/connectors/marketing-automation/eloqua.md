---
title: Oracle Eloqua (V2) Source Overview
description: Learn how to connect Oracle Eloqua to Adobe Experience Platform.
---
# [!DNL Oracle Eloqua] (V2) source overview

[!DNL Oracle Eloqua] is a powerful, enterprise-grade marketing automation platform designed to help organizations, primarily in the B2B space, automate and personalize the complex process of managing leads and orchestrating buyer journeys. It serves as a central hub where marketing teams can define, deploy, and measure sophisticated campaigns across multiple digital channels, ensuring prospects receive the right content at the precise moment they are most engaged.

You can use the [!DNL Oracle Eloqua] source to connect your [!DNL Oracle Eloqua] account to Adobe Experience Platform. Read the documentation below to learn how to get started.

## Prerequisites {#prerequisites}

Read the sections below for prerequisite set up that you must complete before you can connect your source to Experience Platform.

### IP address allowlist

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform. For more information, read the guide on [allowlisting IP addresses to connect to Experience Platform](../../ip-address-allow-list.md) for more information.

## [!DNL Oracle Eloqua] mapping guide

### Accounts

| Eloqua Source Field | XDM Destination Field | Source Type | Transformation Logic | Immutable | Notes |
|--------------------|----------------------|-------------|---------------------|-----------|-------|
| Static value | accountKey.sourceType | text/x.aep-xl | `"Eloqua"` | Yes | Source system type identifier |
| Variable | accountKey.sourceInstanceID | text/x.aep-xl | `${SOURCE_INSTANCE_ID}` | Yes | Source instance ID |
| Id | accountKey.sourceID | schema-path | Direct mapping | Yes | Eloqua account ID |
| Id | accountKey.sourceKey | text/x.aep-xl | `concat(Id, "@${SOURCE_INSTANCE_ID}.Eloqua")` | Yes | Composite key |
| M_CompanyName | accountName | schema-path | Direct mapping | No | Company name |
| M_Account_Engagement_Score | accountScore | schema-path | Direct mapping | No | Engagement score |
| M_Account_Type1 | accountType | schema-path | Direct mapping | No | Account type |
| M_Country | accountPhysicalAddress.country | schema-path | Direct mapping | No | Country |
| M_Address1 | accountPhysicalAddress.street1 | schema-path | Direct mapping | No | Street address |
| M_City | accountPhysicalAddress.city | schema-path | Direct mapping | No | City |
| M_State_Prov | accountPhysicalAddress.stateProvince | schema-path | Direct mapping | No | State/Province |
| M_Zip_Postal | accountPhysicalAddress.postalCode | schema-path | Direct mapping | No | Postal code |
| M_BusPhone | accountPhone.number | schema-path | Direct mapping | No | Business phone |
| M_Fax1 | accountFax.number | schema-path | Direct mapping | No | Fax number |
| M_Wesbsite1 | accountOrganization.website | schema-path | Direct mapping | No | Website URL |
| M_Employees1 | accountOrganization.numberOfEmployees | schema-path | Direct mapping | No | Number of employees |
| M_Annual_Revenue1 | accountOrganization.annualRevenue.amount | text/x.aep-xl | `to_decimal(M_Annual_Revenue1)` | No | Revenue as decimal |
| M_Industry1 | accountOrganization.industry | schema-path | Direct mapping | No | Industry classification |
| M_DateModified | extSourceSystemAudit.lastUpdatedDate | schema-path | Direct mapping | No | Last modified timestamp |
| M_DateCreated | extSourceSystemAudit.createdDate | schema-path | Direct mapping | No | Creation timestamp |

### Activities

| Eloqua Source Field | XDM Destination Field | Source Type | Transformation Logic / Logic Summary | Immutable | Notes |
|---------------------|----------------------|-------------|--------------------------------------|-----------|-------|
| Static | personKey.sourceType | text/x.aep-xl | `"Eloqua"` | Yes | Person ID system type |
| Variable | personKey.sourceInstanceID | text/x.aep-xl | `${SOURCE_INSTANCE_ID}` | Yes | Instance ID |
| ContactId | personKey.sourceID | schema-path | Direct | Yes | Contact ID |
| ContactId | personKey.sourceKey | text/x.aep-xl | `concat(ContactId, "@${SOURCE_INSTANCE_ID}.Eloqua")` | Yes | Source key |
| ExternalId | _id | schema-path | Direct | No | Event ID |
| ActivityDate | timestamp | schema-path | Direct | No | Event timestamp |
| ActivityType | eventType | text/x.aep-xl | Conditional mapping based on activity type string | No | Maps Eloqua ActivityType to XDM eventType |
| AssetName | directMarketing.mailingName | schema-path | Used when `AssetType == "Email"` | No | Campaign / email name |
| AssetId | directMarketing.mailingKey | text/x.aep-xl | Conditional on `AssetType == "Email"` | No | Email key object |
| EmailAddress | directMarketing.email | schema-path | Conditional on `AssetType == "Email"` | No | Email address |
| EmailWebLink | directMarketing.linkURL | schema-path | Conditional on `AssetType == "Email"` | No | Link URL |
| SmtpMessage | directMarketing.emailBouncedDetails | schema-path | Conditional on `AssetType == "Email"` | No | Bounce details |
| SmtpStatusCode | directMarketing.emailBouncedCode | schema-path | Conditional on `ActivityType == "Bounceback"` | No | Bounce code |
| AssetName | web.fillOutForm.webFormName | schema-path | Conditional on `ActivityType == "FormSubmit"` | No | Form name |
| AssetId | web.fillOutForm.webFormKey | text/x.aep-xl | Conditional on `ActivityType == "FormSubmit"` | No | Form key object |
| AssetName | web.webPageDetails.name | schema-path | Conditional on `ActivityType == "PageView"` | No | Page name |
| AssetId | web.webPageDetails.webPageKey | text/x.aep-xl | Conditional on `ActivityType == "PageView"` | No | Page key object |
| Url | web.webPageDetails.URL | schema-path | Conditional on `ActivityType == "PageView"` | No | Page URL |

### Campaigns

| Eloqua Source Field | XDM Destination Field | Source Type | Transformation Logic | Immutable | Notes |
|--------------------|----------------------|-------------|---------------------|-----------|-------|
| Static value | accountKey.sourceType | text/x.aep-xl | `"Eloqua"` | Yes | Source system type identifier |
| Variable | accountKey.sourceInstanceID | text/x.aep-xl | `${SOURCE_INSTANCE_ID}` | Yes | Source instance ID |
| Id | accountKey.sourceID | schema-path | Direct mapping | Yes | Eloqua account ID |
| Id | accountKey.sourceKey | text/x.aep-xl | `concat(Id, "@${SOURCE_INSTANCE_ID}.Eloqua")` | Yes | Composite key |
| M_CompanyName | accountName | schema-path | Direct mapping | No | Company name |
| M_Account_Engagement_Score | accountScore | schema-path | Direct mapping | No | Engagement score |
| M_Account_Type1 | accountType | schema-path | Direct mapping | No | Account type |
| M_Country | accountPhysicalAddress.country | schema-path | Direct mapping | No | Country |
| M_Address1 | accountPhysicalAddress.street1 | schema-path | Direct mapping | No | Street address |
| M_City | accountPhysicalAddress.city | schema-path | Direct mapping | No | City |
| M_State_Prov | accountPhysicalAddress.stateProvince | schema-path | Direct mapping | No | State/Province |
| M_Zip_Postal | accountPhysicalAddress.postalCode | schema-path | Direct mapping | No | Postal code |
| M_BusPhone | accountPhone.number | schema-path | Direct mapping | No | Business phone |
| M_Fax1 | accountFax.number | schema-path | Direct mapping | No | Fax number |
| M_Wesbsite1 | accountOrganization.website | schema-path | Direct mapping | No | Website URL |
| M_Employees1 | accountOrganization.numberOfEmployees | schema-path | Direct mapping | No | Number of employees |
| M_Annual_Revenue1 | accountOrganization.annualRevenue.amount | text/x.aep-xl | `to_decimal(M_Annual_Revenue1)` | No | Revenue as decimal |
| M_Industry1 | accountOrganization.industry | schema-path | Direct mapping | No | Industry classification |
| M_DateModified | extSourceSystemAudit.lastUpdatedDate | schema-path | Direct mapping | No | Last modified timestamp |
| M_DateCreated | extSourceSystemAudit.createdDate | schema-path | Direct mapping | No | Creation timestamp |

### Contacts

| Eloqua Source Field | XDM Destination Field | Source Type | Transformation Logic | Immutable | Notes |
|---------------------|----------------------|-------------|---------------------|-----------|-------|
| Static value | b2b.personKey.sourceType | text/x.aep-xl | `"Eloqua"` | Yes | Source system type identifier |
| Variable | b2b.personKey.sourceInstanceID | text/x.aep-xl | `${SOURCE_INSTANCE_ID}` | Yes | Source instance ID |
| Id | b2b.personKey.sourceID | schema-path | Direct mapping | Yes | Eloqua contact ID |
| Id | b2b.personKey.sourceKey | text/x.aep-xl | `concat(Id, "@${SOURCE_INSTANCE_ID}.Eloqua")` | Yes | Composite source key |
| C_Company | b2b.companyName | schema-path | Direct mapping | No | Company name |
| C_Website1 | b2b.companyWebsite | schema-path | Direct mapping | No | Company website URL |
| C_Job_Title1 | extendedWorkDetails.jobTitle | schema-path | Direct mapping | No | Job title |
| C_Fax | faxPhone.number | schema-path | Direct mapping | No | Fax number |
| C_MobilePhone | mobilePhone.number | schema-path | Direct mapping | No | Mobile phone number |
| C_BusPhone | workPhone.number | schema-path | Direct mapping | No | Business phone number |
| C_EmailAddress | personComponents.workEmail.address | schema-path | Direct mapping | No | Email address (component) |
| C_EmailAddress | workEmail.address | schema-path | Direct mapping | No | Email address (direct) |
| C_SFDCLeadID, C_SFDCContactID | personComponents.sourceExternalKey | text/x.aep-xl | Conditional object creation based on Salesforce IDs | No | External key for Salesforce Lead/Contact |
| C_DateCreated | extSourceSystemAudit.createdDate | schema-path | Direct mapping | No | Record creation timestamp |
| C_DateModified | extSourceSystemAudit.lastUpdatedDate | schema-path | Direct mapping | No | Last modified timestamp |
| C_FirstName | person.name.firstName | schema-path | Direct mapping | No | First name |
| C_LastName | person.name.lastName | schema-path | Direct mapping | No | Last name |
| C_MiddleName | person.name.middleName | schema-path | Direct mapping | No | Middle name |
| C_Salutation | person.name.courtesyTitle | schema-path | Direct mapping | No | Salutation / courtesy title |
| C_Address1 | workAddress.street1 | schema-path | Direct mapping | No | Street address line 1 |
| C_Address2 | workAddress.street2 | schema-path | Direct mapping | No | Street address line 2 |
| C_Address3 | workAddress.street3 | schema-path | Direct mapping | No | Street address line 3 |
| C_City | workAddress.city | schema-path | Direct mapping | No | City |
| C_State_Prov | workAddress.state | schema-path | Direct mapping | No | State / Province |
| C_Zip_Postal | workAddress.postalCode | schema-path | Direct mapping | No | Zip / Postal code |
| C_Country | workAddress.country | schema-path | Direct mapping | No | Country |
| C_LeadScore | b2b.personScore | schema-path | Direct mapping | No | Lead / person score |
| C_LeadStatus | b2b.personStatus | schema-path | Direct mapping | No | Lead / person status |
| C_LeadSource | b2b.personSource | schema-path | Direct mapping | No | Lead / person source |
| C_PersonType | b2b.personType | schema-path | Direct mapping | No | Person type |
| C_PersonGroupID | b2b.personGroupID | schema-path | Direct mapping | No | Person group / partition |
| Static (SFDC/Dynamics external key logic) | extSourceSystemAudit.externalKey | text/x.aep-xl | Conditional object based on `${CRM_INSTANCE_ID}` and CRM IDs | No | Secondary identity for CRM |
| Id | personID | schema-path | Direct mapping | Yes | Primary person identifier in XDM |
| Id, C_EmailAddress | identityMap | text/x.aep-xl | Builds ECID/email identities as needed (implementation-specific expression) | No | Identity stitching |

### Activity type mapping reference

| Eloqua ActivityType | XDM eventType |
|--------------------|---------------|
| EmailSend | directMarketing.emailSent |
| EmailOpen | directMarketing.emailOpened |
| EmailClickthrough | directMarketing.emailClicked |
| Unsubscribe | directMarketing.emailUnsubscribed |
| Bounceback | directMarketing.emailBounced |
| FormSubmit | web.formFilledOut |
| PageView | web.webpagedetails.pageViews |
| Other | pass through as-is |