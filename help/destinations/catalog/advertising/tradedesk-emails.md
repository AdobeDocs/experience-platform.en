---
title: The Trade Desk - CRM Connection
description: Activate profiles to your Trade Desk account for audience targeting and suppression based on CRM data.
last-substantial-update: 2025-01-16
exl-id: e09eaede-5525-4a51-a0e6-00ed5fdc662b
---
# The [!DNL Trade Desk] - CRM connection

>[!IMPORTANT]
>
>There are two The Trade Desk - CRM destinations in the [destinations catalog](/help/destinations/catalog/overview.md).
>
>* If you source data in the EU, please use the **[!DNL The Trade Desk - CRM (EU)]** destination. 
>* If you source data in the APAC or NAMER regions, please use the **[!DNL The Trade Desk - CRM (NAMER & APAC)]** destination. 
>
>This destination connector and documentation page are created and maintained by the *[!DNL Trade Desk]* team. For any inquiries or update requests, please contact your [!DNL Trade Desk] representative. 

## Overview {#overview}

Understand how you can activate profiles to your [!DNL Trade Desk] account for audience targeting and suppression based on CRM data.

This connector sends data to the [!DNL The Trade Desk] for First-Party Data activation. [!DNL The Trade Desk] store your raw (unhashed) emails and phone numbers. 

>[!TIP]
>
>Use [!DNL The Trade Desk] First-Party Data destinations to send CRM data (such as emails and phone numbers) and other First-Party Data identifiers like cookies and device IDs. You can continue to use [other Trade Desk destination](/help/destinations/catalog/advertising/tradedesk.md) in the Adobe Experience Platform catalog for cookies and device ID mappings.

## Prerequisites {#prerequisites}

>[!IMPORTANT]
>
>Before you can activate audiences to The Trade Desk, you must contact your [!DNL Trade Desk] account manager to enable the feature. If you are sending emails, phone numbers and UID2/EUID you must share the signed UID2/EUID agreement with [!DNL The Trade Desk].

## ID Matching Requirements {#id-matching-requirements}

Depending on the type of IDs that you ingest into Adobe Experience Platform, you must adhere to their corresponding requirements. Please read the [Identity Namespace overview](/help/identity-service/features/namespaces.md) for more information.  

## Supported identities {#supported-identities}

[!DNL The Trade Desk] supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/features/namespaces.md).

Both unhashed and hashed emails addresses and phone numbers are supported by Adobe Experience Platform. Follow the instructions in the ID matching requirements section and use the appropriate namespaces for plain text and hashed email addresses, respectively.

|Target Identity|Description|
|---|---|
|Email|Email addresses (clear text)| 
|Email_LC_SHA256|Email addresses need to be hashed using SHA256 and lowercased. You won't be able to change this setting later.| 
|Phone (E.164)|Phone numbers that need to be normalized in E.164 format. The E.164 format includes a plus sign (+), an international country calling code, a local area code, and a phone number. For example: (+)(country code)(area code)(phone number). This identifier is not available for The Trade Desk – First-Party Data (EU).|
|Phone (SHA256_E.164)|Phone numbers that have already been normalized to E.164 format and then hashed using SHA-256, with the resulting hash Base64-encoded. This identifier is not available for The Trade Desk – First-Party Data (EU).| 
|TDID|Cookie ID in The Trade Desk|
|GAID|Google Advertising ID|
|IDFA|Apple ID for Advertisers|
|UID2|The raw UID2 value|
|UID2Token|The encrypted UID2 token, also known as an advertising token.|
|EUID|The raw European Union ID value|
|EUIDToken|The encrypted EUID token, also known as an advertising token.|
|RampID|The 49-character or 70-character RampID (previously known as IdentityLink or IDL). This must be a RampID from LiveRamp that is mapped specifically for The Trade Desk.|
|netID|The user's netID as a 70-character base64-encoded string. This ID is supported only in Europe.|
|FirstID|The user's First-id, a first-party cookie typically set by publishers in France. This ID is supported only in Europe.|


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

## Phone Number normalizing and hashing requirements {#hashing-requirements}

Here's what you need to know about uploading phone numbers:

*  You must normalize phone numbers before sending them in a request, regardless of whether you send them hashed or unhashed in a request.
*  To upload normalized, hashed, and encoded data, you must send phone numbers as Base64-encoded SHA-256 hashes of the normalized phone numbers.

Whether you want to upload raw or hashed phone numbers, you must normalize them.

>[!IMPORTANT]
>Normalization before hashing ensures that the generated ID value will always be the same, and the data can be matched accurately.

Here's what you need to know about phone number normalization requirements: 

*  The UID2 Operator accepts phone numbers in the E.164 format, which is the international telephone number format that ensures global uniqueness. 
*  E.164 phone numbers can have a maximum of 15 digits.
*  Normalized E.164 phone numbers use the following syntax: [+][country code][subscriber number including area code] (with no spaces, hyphens, parentheses, or other special characters). Here are a few examples:
*  US: 1 (234) 567-8901 is normalized to +12345678901.
*  Singapore: 65 1243 5678 is normalized to +6512345678.
*  Australia: mobile phone number 0491 570 006 is normalized to add the country code and drop the leading zero: +61491570006.
*  UK: mobile phone number 07812 345678 is normalized to add the country code and drop the leading zero: +447812345678. 

Make sure that the normalized phone number is UTF-8, not another encoding system such as UTF-16. 

A phone number hash is a Base64-encoded SHA-256 hash of a normalized phone number. The phone number is first normalized, then hashed using the SHA-256 hashing algorithm, and then the resulting bytes of the hash value are encoded using Base64 encoding. Note that the Base64 encoding is applied to the bytes of the hash value, not the hex-encoded string representation.
The following table shows an example of a simple input phone number, and the result as each step is applied to arrive at a secure, opaque value. 

|Type|Example|Comments and Usage|
|---|---|---|
|Raw phone number|1 (234) 567-8901|This is the starting point.|
|Normalized phone number|+12345678901|Normalization is always the first step.|
|SHA-256 hash of normalized phone number|10e6f0b47054a83359477dcb35231db6de5c69fb1816e1a6b98e192de9e5b9ee|This 64-character string is a hex-encoded representation of the 32-byte SHA-256.|
|Hex to Base64 SHA-256 encoding of normalized and hashed phone number|EObwtHBUqDNZR33LNSMdtt5cafsYFuGmuY4ZLenlue4|This 44-character string is a Base64-encoded representation of the 32-byte SHA-256. The SHA-256 hash is a hexadecimal value. You must use a Base64 encoder that takes a hex value as input. Use this encoding for phone_hash values sent in the request body.|

>[!IMPORTANT]
>When applying Base64 encoding, be sure to use a function that takes a hex value as input. If you use a function that takes text as input, the result is a longer string which is invalid for the purposes of UID2.

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
|---------|----------|---------|
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

![Experience Platform UI screenshot showing how to fill in destination details.](/help/destinations/assets/catalog/advertising/tradedesk/configuredestination2.png)

When connecting to the destination, setting a data governance policy is completely optional. Please review the Experience Platform [data governance overview](/help/data-governance/policies/overview.md) for more details.  

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [activate audience data to batch profile export destinations](/help/destinations/ui/activate-batch-profile-destinations.md) for instructions on activating audiences to a destination. 

In the **[!UICONTROL Scheduling]** page, you can configure the schedule and the file names for each audience you are exporting. Configuring the schedule is mandatory, but configuring the file name is optional. 

![Experience Platform UI screenshot to schedule audience activation.](/help/destinations/assets/catalog/advertising/tradedesk/schedulesegment1.png)

>[!NOTE] 
>
>All audiences activated to [!DNL The Trade Desk] CRM Destination are automatically set to a daily frequency and full file export.

![Experience Platform UI screenshot to schedule audience activation.](/help/destinations/assets/catalog/advertising/tradedesk/schedulesegment2.png)

In the **[!UICONTROL Mapping]** page, you must select attributes or identity namespaces from the source column and map to the target column.  

![Experience Platform UI screenshot to map audience activation.](/help/destinations/assets/catalog/advertising/tradedesk/mappingsegment1.png)

Below is an example of correct identity mapping when activating audiences to [!DNL The Trade Desk] CRM destination. 

 

Selecting source and target fields:

|Source Field|Target Field|
|---|---|
|Email|email|
|Email_LC_SHA256|hashed_email|
|Phone (E.164)|phone|
|Phone (SHA256_E.164)|hashed_phone|
|TDID|tdid|
|GAID|daid|
|IDFA|idfa|
|UID2|uid2|
|UID2Token|uid2_token|
|EUID|euid|
|EUIDToken|euid_token|
|RampID|idl|
|ID5|id5|
|netID|net_id|
|FirstID|first_id|


## Validate Data Export {#validate}

To validate that data is correctly exported out of Experience Platform and into [!DNL The Trade Desk], please find the audiences under the Adobe 1PD tab within [!DNL The Trade Desk] "Advertiser Data and identity" library. Here are the steps to finding the corresponding ID within the [!DNL Trade Desk] UI: 

1. First, select the **[!UICONTROL Libraries]** tab, and review the **[!UICONTROL Advertiser data and identity]** section.
2. Click on the **[!UICONTROL Adobe 1PD]**, and it will list out all audiences activated to [!DNL The Trade Desk]. 
3. The Segment Name or Segment ID # from Experience Platform will appear as the Segment Name in the [!DNL Trade Desk] UI. 

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](/help/data-governance/home.md).
