---
title: The Trade Desk - CRM
description: Activate profiles to your Trade Desk account for audience targeting and suppression based on CRM data.
---

# The Trade Desk - CRM


## Overview {#overview}

This document is designed to help you activate profiles to your Trade Desk account for audience targeting and suppression based on CRM data.

The Adobe Real-Time CDP requires granular identity type mappings - if and when using multiple identity mappings (cookie, iOS, Android, email, hashed email, phone, etc), multiple destinations need to be created. The Trade Desk CRM destination is meant to be used for CRM data mapping, like email or hashed email address.   

The Trade Desk (TTD) does not directly handle the upload file of email addresses at any time nor does The Trade Desk store your raw (unhashed) emails.

## Prerequisites {#prerequisites}

Before you can activate segments to The Trade Desk, you must contact your TTD account manager to sign the CRM Onboarding contract. TTD will then give permission and share your advertiser ID to configure your destination.  

## ID Matching Requirements (#id-matching-requirements)

Depending on the type of IDs you ingest into Adobe Experience Platform, you must adhere to their corresponding requirements. Please read the [Identity Namespace overview](https://experienceleague.adobe.com/docs/experience-platform/identity/namespaces.html?lang=en) for more information.  

## Supported identities {#supported-identities}

The Trade Desk supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

Both plain text and SHA256 hashed email addresses are supported by Adobe Experience Platform. Follow the instructions in the ID matching requirements section and use the appropriate namespaces for plain text and hashed email addresses, respectively.  

When your source field contains unhashed attributes, check the Apply transformation option, to have Platform automatically hash the data on activation. 

|Target Identity|Description|Considerations|
|---|---|---|
|Email|Email addresses (clear text) |Select the Email target identity when your source identity is an Email namespace.|
|Email_LC_SHA256|Email addresses need to be hashed using SHA256 and lowercased. Be sure to follow any [email normalization] (https://github.com/UnifiedID2/uid2docs/tree/main/api#email-address-normalization) rules required. You won't be able to change this setting later. |Select the Email_LC_SHA256 target identity when your source identity is an Email_LC_SHA256 namespace.|

## Email hashing requirements (#hashing-requirements)

You can hash email addresses before ingesting them into Adobe Experience Platform, or use raw email addresses in the Experience Platform, and have the Platform hash them on activation. 

To learn about ingesting email addresses in Experience Platform, see the [batch ingestion overview] (https://experienceleague.adobe.com/docs/experience-platform/ingestion/batch/overview.html?lang=en). 

If you select to hash the email addresses yourself, make sure to comply with the following requirements: 

*  Remove leading and trailing spaces. 
*  Convert all ASCII characters to lowercase. 
*  In gmail.com email addresses, remove the following characters from the username part of the email address: 
      *  The period (. (ASCII code 46)). For example, normalize jane.doe@gmail.com to janedoe@gmail.com. 
      *  The plus sign (+ (ASCII code 43)) and all subsequent characters. For example, normalize janedoe+home@gmail.com to janedoe@gmail.com. 

##Hash on Activation (#hash-on-activation)

Data from unhashed namespaces is automatically hashed by Platform upon activation to a destination.  

Attribute source data is not automatically hashed. When your source field contains unhashed attributes, check the Apply transformation option, to have Platform automatically hash the data on activation. The Apply transformation option is only displayed when you select attributes as source fields. It is not displayed when you choose namespaces. 

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Segment export]** | You are exporting all members of a segment (audience) with the identifiers (email or hashed email) used in the Trade Desk destination. |
| Export frequency | **[!UICONTROL Daily Batch]** | As a profile is updated in Experience Platform based on segment evaluation, the profile (identities) are updated once a day downstream to the destination platform. Read more about [batch uploads](https://experienceleague.adobe.com/docs/experience-platform/destinations/destination-types.html?lang=en#file-based).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

## Authenticate to Destination (#authenticate)

The Trade Desk CRM Destination is a Daily Batch file upload and does not require authentication by the user.

## Fill in Destination Details (#fill-in-details)

Before you can send, or activate, audience data to a destination, you must set up a connection to your own destination platform. While [setting up](https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/connect-destination.html?lang=en) this destination, you must provide the following information:

*  **[!UICONTROL Account Type]**: Please choose the Existing Account option. 
*  **[!UICONTROL Name]**: A name by which you will recognize this destination mapping in the future. 
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL Advertiser ID]**: your Trade Desk Advertiser ID, which can either be shared by your TTD Account Manager or be found under Advertiser Preferences in the TTD UI. 

Setting a Data Governance policy is completely optional – please review Adobe’s [Data Usage Policy Overview](https://experienceleague.adobe.com/docs/experience-platform/data-governance/policies/overview.html?lang=en) for more details.  


## Activate segments to this destination {#activate}

See [activate audience data to batch profile export destinations](https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/activate/activate-batch-profile-destinations.html?lang=en) for instructions on activating audience segments to a destination. 

In the Scheduling page, you can configure the schedule and the file names for each segment you are exporting. Configuring the schedule is mandatory, but configuring the file name is optional. 

[!NOTE] All segments activated to The Trade Desk CRM Destination you are mapping to will be set to a daily Frequency and full file export.

In the Mapping page, you must select attributes or identity namespaces you want to set as the source to target destination.  

As you have marked your XDM fields as Identity, that will determine what is choosen in mapping.  

Below is an example of correct identity mapping when activating segments to the Trade Desk CRM destination. 

Selecting source fields: 

*  Select the Email namespace as source identity if the email addresses you are using are not hashed. 
*  Select the Email_LC_SHA256 namespace as source identity if you hashed customer email addresses on data ingestion into Platform.  

Selecting target fields: 

*  Select the Email_LC_SHA256 namespace as target identity when your source namespaces are either Email or Email_LC_SHA256. 

##Validate Data Export (#validate)

To validate segment activation, please find the segment under the Adobe 1PD data tile within The Trade Desk DMP. Here are the steps to finding the corresponding ID within the TTD UI: 

* First, click on the Data Tab, and review First-Party.
* Scroll down the page, under Imported Data, you will find the Adobe 1PD Tile.
* Click on the Adobe 1PD tile, and it will list out all Segments activated to the TTD Destination for your advertiser. You may also use the search function.
* The Segment ID # from AEP will appear as the Segment Name in the TTD UI. 

 
## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](/help/data-governance/home.md).
