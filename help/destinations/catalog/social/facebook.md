---
keywords: facebook connection;facebook connection;facebook destinations;facebook;instagram;messenger;facebook messenger
title: Facebook connection
description: Activate profiles for your Facebook campaigns for audience targeting, personalization and suppression based on hashed emails.
---

# [!DNL Facebook] connection

>[!IMPORTANT]
>
>Customer migration to the new destination versions is currently in progress. Until the migration is complete, you will only see the [!UICONTROL EMAIL] and [!UICONTROL EMAIL_LC_SHA_256] available identities for this destination.

Activate profiles for your [!DNL Facebook] campaigns for audience targeting, personalization and suppression based on hashed emails.

You can use this destination for audience targeting across [!DNL Facebook’s] family of apps that are supported by [!DNL Custom Audiences], including [!DNL Facebook], [!DNL Instagram], [!DNL Audience Network] and [!DNL Messenger]. Selection of the app that you want to run campaign against is indicated at the placement level in [!DNL Facebook Ads Manager].

![Facebook destination in the Adobe Experience Platform UI](../../assets/catalog/social/facebook/catalog.png)

## Use Cases

To help you better understand how and when you should use the [!DNL Facebook] destination, here are two sample use cases that Adobe Experience Platform customers can solve by using this feature.

### Use Case #1

An online retailer wants to reach existing customers through social platforms and show them personalized offers based on their previous orders. The online retailer can ingest email addresses from their own CRM to Adobe Experience Platform, build segments from their own offline data, and send these segments to the [!DNL Facebook] social platform, optimizing their advertising spending.

### Use Case #2

An airline has different customer tiers (Bronze, Silver, and Gold), and wants to provide each of the tiers with personalized offers via social platforms. However, not all customers use the airline's mobile app, and some of them have not logged on to the company's website. The only identifiers the company has about these customers are membership IDs and email addresses. 

To target them across social media, they can onboard the customer data from their CRM into Adobe Experience Platform, using the email addresses as identifiers.

Next, they can use their offline data including associated membership IDs and customer tiers to build new audience segments that they can target through the [!DNL Facebook] destination.

## Destination specifics {#destination-specs}

### Data governance for [!DNL Facebook] destinations {#data-governance}

>[!IMPORTANT]
>
>Data sent to [!DNL Facebook] should not include stitched identities. You are responsible for honoring this obligation and can do so by ensuring that segments selected for activation do not use a stitching option in their merge policy. Learn more about [merge policies](/help/profile/ui/merge-policies.md).

### Export Type {#export-type}

**Segment Export** - you are exporting all members of a segment (audience) with the identifiers (name, phone number, etc.) used in the Facebook destination.

### Facebook account prerequisites {#facebook-account-prerequisites}

Before you can send your audience segments to [!DNL Facebook], make sure you meet the following requirements:

- Your [!DNL Facebook] user account must have the **[!DNL Manage campaigns]** permission enabled for the Ad account that you plan to use.
- The **Adobe Experience Cloud** business account must be added as an advertising partner in your [!DNL Facebook Ad Account]. Use `business ID=206617933627973`. See [Add Partners to Your Business Manager](https://www.facebook.com/business/help/1717412048538897) in the Facebook documentation for details.
    >[!IMPORTANT]
    >
    > When configuring the permissions for Adobe Experience Cloud, you must enable the **Manage campaigns** permission. This is required for the [!DNL Adobe Experience Platform] integration.
- Read and sign the [!DNL Facebook Custom Audiences] Terms of Service. To do this, go to `https://business.facebook.com/ads/manage/customaudiences/tos/?act=[accountID]`, where `accountID` is your [!DNL Facebook Ad Account ID].

### ID matching requirements {#id-matching-requirements}

[!DNL Facebook] requires that no personally identifiable information (PII) is sent in clear. Therefore, the audiences activated to [!DNL Facebook] can be keyed off *hashed* identifiers, such as email addresses or phone numbers.

Depending on the type of IDs that you ingest into Adobe Experience Platform, you need to adhere to their corresponding requirements.

#### Phone number hashing requirements {#phone-number-hashing-requirements}

There are two methods to activate phone numbers in [!DNL Facebook]:

- **Ingesting raw phone numbers**: you can ingest raw phone numbers in the [!DNL E.164] format into [!DNL Platform], which will be automatically hashed upon activation. If you choose this option, make sure to always ingest your raw phone numbers into the `Phone_E.164` namespace.
- **Ingesting hashed phone numbers**: you can pre-hash your phone numbers before ingestion into [!DNL Platform]. If you choose this option, make sure to always ingest your hashed phone numbers into the `Phone_SHA256` namespace.

>[!NOTE]
>
>Phone numbers ingested into the `Phone` namespace cannot be activated in [!DNL Facebook].


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

Data from unhashed namespaces is automatically hashed by [!DNL Platform] upon activation.

Attribute source data is not automatically hashed. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.
![Identity mapping transformation](../../assets/ui/activate-destinations/identity-mapping-transformation.png)

#### Using custom namespaces {#custom-namespaces}

Before you can use the `Extern_ID` namespace to send data to [!DNL Facebook], make sure you synchronize your own identifiers using [!DNL Facebook Pixel]. See the [official documentation](https://developers.facebook.com/docs/marketing-api/audiences/guides/custom-audiences/#external_identifiers) for detailed information.

## Connect to destination {#connect-destination}

To connect to the [!DNL Facebook] destination, see [Social network destinations authentication workflow](./workflow.md). 

## Activate segments to [!DNL Facebook] {#activate-segments}

For instructions on how to activate segments to [!DNL Facebook], see [Activate Data to Destinations](../../ui/activate-destinations.md).

In the **[!UICONTROL Segment schedule]** step, you must provide the [!UICONTROL Origin of audience] when sending segments to [!DNL Facebook Custom Audiences].

![Facebook Origin of Audience](../../assets/catalog/social/facebook/facebook-origin-audience.png)

## Exported data {#exported-data}

For [!DNL Facebook], a successful activation means that a [!DNL Facebook] custom audience would be created programmatically in [[!DNL Facebook Ads Manager]](https://www.facebook.com/adsmanager/manage/). Segment membership in the audience would be added and removed as users are qualified or disqualified for the activated segments.

>[!TIP]
>
>The integration between Adobe Experience Platform and [!DNL Facebook] supports historical audience backfills. All historical segment qualifications get sent to [!DNL Facebook] when you activate the segments to the destination.