---
title: Facebook Destination
seo-title: Facebook Destination
description: Activate profiles for your Facebook campaigns for audience targeting, personalization and suppression based on hashed emails.
seo-description: Activate profiles for your Facebook campaigns for audience targeting, personalization and suppression based on hashed emails.
---

# Facebook Destination 

## Overview {#overview}

Activate profiles for your Facebook campaigns for audience targeting, personalization and suppression based on hashed emails.

## Destination specifics {destination-specs}

### Activation Type {#activation-type}

Segment Export - you are exporting all members of a segment (audience) with their identifiers (name, phone number, etc.) used in the Facebook destination

### Prerequisites {#prerequisites}

Before you can send your audience segments to [!DNL Facebook], make sure you meet the following requirements:

1. Your [!DNL Facebook] user account must have the **Manage campaigns** permission enabled for the Ad account that you plan to use.
2. Add the **Adobe Experience Cloud** business account as an advertising partner in your [!DNL Facebook Ad Account]. Use `business ID=206617933627973`. See [Add Partners to Your Business Manager](https://www.facebook.com/business/help/1717412048538897) for details.
    >[!IMPORTANT]
    > When configuring the permissions for Adobe Experience Cloud, you must enable the **Manage campaigns** permission. This is required for the [!DNL Adobe Real-time CDP] integration.
3. Read and sign the [!DNL Facebook Custom Audiences] Terms of Service. To do this, go to `https://business.facebook.com/ads/manage/customaudiences/tos/?act=[accountID]`, where `accountID` is your [!DNL Facebook Ad Account ID].

### Email hashing requirements {#email-hashing-requirements}

Facebook requires that no personally identifiable information (PII) is sent in clear. Therefore, the audiences activated to Facebook must be keyed off *hashed* email addresses. You can choose to hash email addresses before ingesting them into Adobe Experience Platform, or you can choose to work with email addresses in clear in Experience Platform and have our algorithm hash them on activation.

If you select to hash the email addresses yourself, make sure to comply with the following requirements:

* Trim all leading and trailing spaces from the email string; example: `johndoe@example.com`, not `<space>johndoe@example.com<space>`;
* When hashing the email strings, make sure to hash the lowercase string;
  * Example: `example@email.com`, not `EXAMPLE@EMAIL.COM`;
* Make sure the hashed string is all lowercase
  * Example: `55e79200c1635b37ad31a378c39feb12f120f116625093a19bc32fff15041149`, not `55E79200C1635B37AD31A378C39FEB12F120F116625093A19bC32FFF15041149`;
* Do not salt the string.


>[!TIP]
>
>If you choose not to hash email addresses, Adobe Real-time CDP will do that for you when you activate segments to Facebook. In the activation workflow, select the `Email_LC_SHA256` option as shown below.


![Hashing on activation](/help/rtcdp/destinations/assets/identity-mapping.png)

## Connect destination {#connect-destination}

To connect the Facebook destination, see [Social network destinations authentication workflow](/help/rtcdp/destinations/social-network-destinations-workflow.md). 


## Activate segments to Facebook {#activate-segments}

For instructions on how to activate segments to Facebook, see [Activate Data to Destinations](/help/rtcdp/destinations/activate-destinations.md). 