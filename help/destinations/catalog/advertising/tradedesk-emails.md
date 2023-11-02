---
title: (Beta) The Trade Desk - CRM connection
description: Activate profiles to your Trade Desk account for audience targeting and suppression based on CRM data.
last-substantial-update: 2023-01-25
exl-id: e09eaede-5525-4a51-a0e6-00ed5fdc662b
---
# (Beta) The [!DNL Trade Desk] - CRM connection

>[!IMPORTANT]
>
>[!DNL The Trade Desk - CRM] destination in Platform is currently in beta. The documentation and functionality are subject to change. 
>
>With the release of EUID (European Unified ID), you are now seeing two [!DNL The Trade Desk - CRM] destinations in the [destinations catalog](/help/destinations/catalog/overview.md).
>* If you source data in the EU, please use the **[!DNL The Trade Desk - CRM (EU)]** destination. 
>* If you source data in the APAC or NAMER regions, please use the **[!DNL The Trade Desk - CRM (NAMER & APAC)]** destination. 
>
>Both destinations in Experience Platform are currently in beta. This destination connector and documentation page are created and maintained by the *[!DNL Trade Desk]* team. For any inquiries or update requests, please contact your [!DNL Trade Desk] representative, the documentation and functionality are subject to change. 

## Overview {#overview}

This document is designed to help you activate profiles to your [!DNL Trade Desk] account for audience targeting and suppression based on CRM data.

[!DNL The Trade Desk(TTD)] does not directly handle the upload file of email addresses at any time nor does [!DNL The Trade Desk] store your raw (unhashed) emails.

>[!TIP]
>
>Use [!DNL The Trade Desk] CRM destinations for CRM data mapping, like email or hashed email address. Use the [other Trade Desk destination](/help/destinations/catalog/advertising/tradedesk.md) in the Adobe Experience Platform catalog for cookies and device ID mappings.

## Prerequisites {#prerequisites}

Before you can activate audiences to [!DNL The Trade Desk], you must contact your [!DNL The Trade Desk] account manager to sign the CRM Onboarding contract. [!DNL The Trade Desk] will then give permission and share your advertiser ID to configure your destination.  

## ID Matching Requirements {#id-matching-requirements}

Depending on the type of IDs you ingest into Adobe Experience Platform, you must adhere to their corresponding requirements. Please read the [Identity Namespace overview](/help/identity-service/namespaces.md) for more information.  

## Supported identities {#supported-identities}

[!DNL The Trade Desk] supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

Both plain text and SHA256 hashed email addresses are supported by Adobe Experience Platform. Follow the instructions in the ID matching requirements section and use the appropriate namespaces for plain text and hashed email addresses, respectively.

|Target Identity|Description|Considerations|
|---|---|---|
|Email|Email addresses (clear text) |Input `email` as the target identity when your source identity is an Email namespace or attribute.|
|Email_LC_SHA256|Email addresses need to be hashed using SHA256 and lowercased. Be sure to follow any [email normalization](https://github.com/UnifiedID2/uid2docs/tree/main/api#email-address-normalization) rules required. You won't be able to change this setting later. |Input `hashed_email` as the target identity when your source identity is an Email_LC_SHA256 namespace or attribute.|

{style="table-layout:auto"}

## Email hashing requirements {#hashing-requirements}

You can hash email addresses before ingesting them into Adobe Experience Platform or use raw email addresses. 

To learn about ingesting email addresses in Experience Platform, read the [batch ingestion overview](/help/ingestion/batch-ingestion/overview.md). 

If you select to hash the email addresses yourself, make sure to comply with the following requirements: 

*  Remove leading and trailing spaces. 
*  Convert all ASCII characters to lowercase. 
*  In `gmail.com` email addresses, remove the following characters from the username part of the email address: 
      *  The period (. (ASCII code 46)). For example, normalize `jane.doe@gmail.com` to `janedoe@gmail.com`. 
      *  The plus sign (+ (ASCII code 43)) and all subsequent characters. For example, normalize `janedoe+home@gmail.com` to `janedoe@gmail.com`. 

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Audience export]** | You are exporting all members of an audience with the identifiers (email or hashed email) used in the Trade Desk destination. |
| Export frequency | **[!UICONTROL Daily Batch]** | As a profile is updated in Experience Platform based on audience evaluation, the profile (identities) are updated once a day downstream to the destination platform. Read more about [batch exports](/help/destinations/destination-types.md#file-based).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

### Authenticate to Destination {#authenticate}

[!DNL The Trade Desk] CRM Destination is a daily batch file upload and does not require authentication by the user.

### Fill in Destination Details {#fill-in-details}

Before you can send, or activate, audience data to a destination, you must set up a connection to your own destination platform. While [setting up](https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/connect-destination.html) this destination, you must provide the following information:

*  **[!UICONTROL Account Type]**: Please choose the **[!UICONTROL Existing Account]** option. 
*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future. 
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL Advertiser ID]**: your [!DNL Trade Desk Advertiser ID], which can either be shared by your [!DNL Trade Desk] Account Manager or be found under [!DNL Advertiser Preferences] in the [!DNL Trade Desk] UI. 

![Platform UI screenshot showing how to fill in destination details.](/help/destinations/assets/catalog/advertising/tradedesk/configuredestination2.png)

When connecting to the destination, setting a data governance policy is completely optional. Please review the Experience Platform [data governance overview](/help/data-governance/policies/overview.md) for more details.  

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [activate audience data to batch profile export destinations](/help/destinations/ui/activate-batch-profile-destinations.md) for instructions on activating audiences to a destination. 

In the **[!UICONTROL Scheduling]** page, you can configure the schedule and the file names for each audience you are exporting. Configuring the schedule is mandatory, but configuring the file name is optional. 

![Platform UI screenshot to schedule audience activation.](/help/destinations/assets/catalog/advertising/tradedesk/schedulesegment1.png)

>[!NOTE] 
>
>All audiences activated to [!DNL The Trade Desk] CRM Destination are automatically set to a daily frequency and full file export.

![Platform UI screenshot to schedule audience activation.](/help/destinations/assets/catalog/advertising/tradedesk/schedulesegment2.png)

In the **[!UICONTROL Mapping]** page, you must select attributes or identity namespaces from the source column and map to the target column.  

![Platform UI screenshot to map audience activation.](/help/destinations/assets/catalog/advertising/tradedesk/mappingsegment1.png)

Below is an example of correct identity mapping when activating audiences to [!DNL The Trade Desk] CRM destination. 

>[!IMPORTANT]
>
> [!DNL The Trade Desk] CRM Destination does not accept raw and hashed email addresses as identities in the same activation flow. Create separate activation flows for raw and hashed email addresses.

Selecting source fields:

*  Select the `Email` namespace or attribute as source identity if using the raw email address on data ingestion. 
*  Select the `Email_LC_SHA256` namespace or attribute as source identity if you hashed customer email addresses on data ingestion into Platform.  

Selecting target fields:

*  Input  `email` as target identity when your source namespace or attribute is `Email`. 
*  Input  `hashed_email` as target identity when your source namespace or attribute is `Email_LC_SHA256`.

## Validate Data Export {#validate}

To validate that data is correctly exported out of Experience Platform and into [!DNL The Trade Desk], please find the audiences under the Adobe 1PD data tile within [!DNL The Trade Desk] Data Management Platform (DMP). Here are the steps to finding the corresponding ID within the [!DNL Trade Desk] UI: 

1. First, click on the **[!UICONTROL Data]** Tab, and review **[!UICONTROL First-Party]**.
2. Scroll down the page, under **[!UICONTROL Imported Data]**, you will find the **[!UICONTROL Adobe 1PD Tile]**.
3. Click on the**[!UICONTROL Adobe 1PD]** tile, and it will list out all audiences activated to the [!DNL Trade Desk] destination for your advertiser. You may also use the search function.
4. The Segment ID # from Experience Platform will appear as the Segment Name in the [!DNL Trade Desk] UI. 

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](/help/data-governance/home.md).
