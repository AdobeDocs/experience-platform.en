---
keywords: linkedin connection;linkedin connection;linkedin destinations;linkedin;
title: LinkedIn Matched Audience connection
description: Activate profiles for your LinkedIn campaigns for audience targeting, personalization and suppression based on hashed emails.
---

# [!DNL LinkedIn Matched Audience] connection

Activate profiles for your [!DNL LinkedIn] campaigns for audience targeting, personalization and suppression based on hashed emails and mobile IDs.

![LinkedIn destination in the Adobe Experience Platform UI](../../assets/catalog/social/linkedin/catalog.png)

## Use Cases

To help you better understand how and when you should use the [!DNL LinkedIn Matched Audience] destination, here is a sample use case that Adobe Experience Platform customers can solve by using this feature.

An online retailer wants to reach existing customers through social platforms and show them personalized offers based on their previous orders. The online retailer can ingest email addresses or mobile device IDs from their own CRM to Adobe Experience Platform, build segments from their own offline data, and send these segments to the [!DNL LinkedIn] social platform, optimizing their advertising spending.

## Destination specifics {#destination-specs}

 ### Data governance for [!DNL LinkedIn Matched Audience] destinations {#data-governance}

>[!IMPORTANT]
>
>Data sent to [!DNL Facebook] should not include stitched identities. You are responsible for honoring this obligation and can do so by ensuring that segments selected for activation do not use a stitching option in their merge policy. Learn more about [merge policies](/help/profile/ui/merge-policies.md).

### Export Type {#export-type}

**Segment Export** - you are exporting all members of a segment (audience) with the identifiers (name, phone number, etc.) used in the [!DNL LinkedIn Matched Audience] destination.

### LinkedIn account prerequisites {#LinkedIn-account-prerequisites}

Before you can send your audience segments to [!DNL LinkedIn], make sure you meet the following requirements:

- Your [!DNL LinkedIn] user account must have the **[!DNL Manage campaigns]** permission enabled for the Ad account that you plan to use.
- The **Adobe Experience Cloud** business account must be added as an advertising partner in your [!DNL Facebook Ad Account]. Use `business ID=206617933627973`. See [Add Partners to Your Business Manager](https://www.facebook.com/business/help/1717412048538897) in the Facebook documentation for details.
    >[!IMPORTANT]
    >
    > When configuring the permissions for Adobe Experience Cloud, you must enable the **Manage campaigns** permission. This is required for the [!DNL Adobe Experience Platform] integration.
- Read and sign the [!DNL Facebook Custom Audiences] Terms of Service. To do this, go to `https://business.facebook.com/ads/manage/customaudiences/tos/?act=[accountID]`, where `accountID` is your [!DNL Facebook Ad Account ID].

### ID matching requirements {#id-matching-requirements}

[!DNL LinkedIn Matched Audience] requires that no personally identifiable information (PII) is sent in clear. Therefore, the audiences activated to [!DNL LinkedIn Matched Audience] can be keyed off *hashed* identifiers, such as email addresses or mobile device IDs.

Depending on the type of IDs that you ingest into Adobe Experience Platform, you need to adhere to their corresponding requirements.

#### Email hashing requirements {#email-hashing-requirements}

You can choose to hash email addresses before ingesting them into Adobe Experience Platform, or you can choose to work with email addresses in clear in Experience Platform and have our algorithm hash them on activation.

To learn about ingesting email addresses in Experience Platform, see the [batch ingestion overview](/help/ingestion/batch-ingestion/overview.md) and the [steaming ingestion overview](/help/ingestion/streaming-ingestion/overview.md).

If you select to hash the email addresses yourself, make sure to comply with the following requirements:

- Trim all leading and trailing spaces from the email string; example: `johndoe@example.com`, not `<space>johndoe@example.com<space>`;
- When hashing the email strings, make sure to hash the lowercase string;
  - Example: `example@email.com`, not `EXAMPLE@EMAIL.COM`;
- Make sure the hashed string is all lowercase
  - Example: `55e79200c1635b37ad31a378c39feb12f120f116625093a19bc32fff15041149`, not `55E79200C1635B37AD31A378C39FEB12F120F116625093A19bC32FFF15041149`;
- Do not salt the string.

>[!NOTE]
>
>Data from unhashed namespaces is automatically hashed by [!DNL Platform] upon activation.
> Attribute source data is not automatically hashed. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.
> The **[!UICONTROL Apply transformation]** option is only displayed when you select attributes as source fields. It is not displayed when you choose namespaces.

![Identity mapping transformation](../../assets/ui/activate-destinations/identity-mapping-transformation.png)

## Connect to destination {#connect-destination}

To connect to the [!DNL LinkedIn Matched Audience] destination, see [Social network destinations authentication workflow](./workflow.md). 

## Activate segments to [!DNL LinkedIn Matched Audience] {#activate-segments}

For instructions on how to activate segments to [!DNL LinkedIn Matched Audience], see [Activate Data to Destinations](../../ui/activate-destinations.md).

## Exported data {#exported-data}

A successful activation means that a [!DNL LinkedIn] custom audience would be created programmatically in [[!DNL LinkedIn Campaign Manager]](https://www.linkedin.com/campaignmanager/login). Segment membership in the audience would be added and removed as users are qualified or disqualified for the activated segments.

>[!TIP]
>
>The integration between Adobe Experience Platform and [!DNL LinkedIn Matched Audience] supports historical audience backfills. All historical segment qualifications get sent to [!DNL LinkedIn] when you activate the segments to the destination.