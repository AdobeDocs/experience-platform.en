---
title: (Beta) The Trade Desk - CRM connection
description: Activate profiles to your Trade Desk account for audience targeting and suppression based on CRM data.
---

# (Beta) The [!DNL Trade Desk] - CRM connection

>[!IMPORTANT]
>
> [!DNL The Trade Desk - CRM] destination in Platform is currently in beta. The documentation and the functionality are subject to change.

## Overview {#overview}

>[!IMPORTANT]
>
>This documentation page was created by the *[!DNL Trade Desk]* team. For any inquiries or update requests, please contact your [!DNL Trade Desk] representative.

This document is designed to help you activate profiles to your [!DNL Trade Desk] account for audience targeting and suppression based on CRM data.

<!--

Adobe Real-Time CDP requires granular identity type mappings - if and when using multiple identity mappings (cookie, iOS, Android, email, hashed email, phone, etc), multiple destination mappings need to be utilized. 

-->

Use the [!DNL Trade Desk] CRM destination for CRM data mapping, like email or hashed email address. Use the [other Trade Desk destination](/help/destinations/catalog/advertising/tradedesk.md) in the Adobe Experience Platform catalog for cookies and device ID mappings.

[!DNL The Trade Desk] (TTD) does not directly handle the upload file of email addresses at any time nor does [!DNL The Trade Desk] store your raw (unhashed) emails.

## Prerequisites {#prerequisites}

Before you can activate segments to [!DNL The Trade Desk], you must contact your TTD account manager to sign the CRM Onboarding contract. TTD will then give permission and share your advertiser ID to configure your destination.  

## ID Matching Requirements (#id-matching-requirements)

Depending on the type of IDs you ingest into Adobe Experience Platform, you must adhere to their corresponding requirements. Please read the [Identity Namespace overview](https://experienceleague.adobe.com/docs/experience-platform/identity/namespaces.html?lang=en) for more information.  

## Supported identities {#supported-identities}

[!DNL The Trade Desk] supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

Both plain text and SHA256 hashed email addresses are supported by Adobe Experience Platform. Follow the instructions in the ID matching requirements section and use the appropriate namespaces for plain text and hashed email addresses, respectively.  

When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have Platform automatically hash the data on activation. 

|Target Identity|Description|Considerations|
|---|---|---|
|Email|Email addresses (clear text) |Select the `Email` target identity when your source identity is an Email namespace.|
|Email_LC_SHA256|Email addresses need to be hashed using SHA256 and lowercased. Be sure to follow any [email normalization] (https://github.com/UnifiedID2/uid2docs/tree/main/api#email-address-normalization) rules required. You won't be able to change this setting later. |Select the `Email_LC_SHA256` target identity when your source identity is an Email_LC_SHA256 namespace.|

## Email hashing requirements (#hashing-requirements)

You can hash email addresses before ingesting them into Adobe Experience Platform, or use raw email addresses and Experience Platform will hash them on activation. 

To learn about ingesting email addresses in Experience Platform, see the [batch ingestion overview] (https://experienceleague.adobe.com/docs/experience-platform/ingestion/batch/overview.html?lang=en). 

If you select to hash the email addresses yourself, make sure to comply with the following requirements: 

*  Remove leading and trailing spaces. 
*  Convert all ASCII characters to lowercase. 
*  In gmail.com email addresses, remove the following characters from the username part of the email address: 
      *  The period (. (ASCII code 46)). For example, normalize `jane.doe@gmail.com` to `janedoe@gmail.com`. 
      *  The plus sign (+ (ASCII code 43)) and all subsequent characters. For example, normalize `janedoe+home@gmail.com` to `janedoe@gmail.com`. 

## Hash on Activation (#hash-on-activation)

Data from unhashed namespaces is automatically hashed by Platform upon activation to a destination.  

Attribute source data is not automatically hashed. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have Platform automatically hash the data on activation. The Apply transformation option is only displayed when you select attributes as source fields. It is not displayed when you choose namespaces. 

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Segment export]** | You are exporting all members of a segment (audience) with the identifiers (email or hashed email) used in the Trade Desk destination. |
| Export frequency | **[!UICONTROL Daily Batch]** | As a profile is updated in Experience Platform based on segment evaluation, the profile (identities) are updated once a day downstream to the destination platform. Read more about [batch uploads](https://experienceleague.adobe.com/docs/experience-platform/destinations/destination-types.html?lang=en#file-based).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

### Authenticate to Destination (#authenticate)

[!DNL The Trade Desk] CRM Destination is a daily batch file upload and does not require authentication by the user.

### Fill in Destination Details (#fill-in-details)

Before you can send, or activate, audience data to a destination, you must set up a connection to your own destination platform. While [setting up](https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/connect-destination.html?lang=en) this destination, you must provide the following information:

*  **[!UICONTROL Account Type]**: Please choose the **[!UICONTROL Existing Account]** option. 
*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL Advertiser ID]**: your Trade Desk Advertiser ID, which can either be shared by your TTD Account Manager or be found under Advertiser Preferences in the TTD UI. 

When connecting to the destination, setting a Data Governance policy is completely optional. Please review Adobe’s [Data Usage Policy Overview](https://experienceleague.adobe.com/docs/experience-platform/data-governance/policies/overview.html?lang=en) for more details.  


## Activate segments to this destination {#activate}

See [activate audience data to batch profile export destinations](https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/activate/activate-batch-profile-destinations.html?lang=en) for instructions on activating audience segments to a destination. 

In the **[!UICONTROL Scheduling]** page, you can configure the schedule and the file names for each segment you are exporting. Configuring the schedule is mandatory, but configuring the file name is optional. 

>[!NOTE] 
>
>All segments activated to [!DNL The Trade Desk] CRM Destination are automatically set to a daily frequency and full file export.

In the **[!UICONTROL Mapping]** page, you must select attributes or identity namespaces from the source column and map to the target column.

Below is an example of correct identity mapping when activating segments to the Trade Desk CRM destination: 

Selecting source fields: 

*  Select the `Email` namespace as source identity if the email addresses you are using are not hashed. 
*  Select the `Email_LC_SHA256` namespace as source identity if you hashed customer email addresses on data ingestion into Platform.  

Selecting target fields: 

*  Select the `Email_LC_SHA256` namespace as target identity when your source namespaces are either `Email` or `Email_LC_SHA256`. 

## Validate Data Export (#validate)

To validate that data is correctly exported out of Experience Platform and into [!DNL The Trade Desk], please find the segments under the Adobe 1PD data tile within [!DNL The Trade Desk] Data Management Platform (DMP). Here are the steps to finding the corresponding ID within the TTD UI: 

1. First, click on the **[!UICONTROL Data]** tab, and review **[!UICONTROL First-Party]**.
1. Scroll down the page, under **[!UICONTROL Imported Data]**, you will find the **[!UICONTROL Adobe 1PD]** tile.
1. Click on the **[!UICONTROL Adobe 1PD]** tile, and it will list out all segments activated to the TTD Destination for your advertiser. You may also use the search function.
1. The Segment ID from Experience Platform will appear as the Segment Name in the TTD UI.
 
## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](/help/data-governance/home.md).
