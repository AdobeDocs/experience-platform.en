---
keywords: linkedin connection;linkedin connection;linkedin destinations;linkedin;
title: Linkedin Matched Audiences connection
description: Activate profiles for your LinkedIn campaigns for audience targeting, personalization, and suppression, based on hashed emails.
---

# [!DNL LinkedIn Matched Audiences] connection

Activate profiles for your [!DNL LinkedIn] campaigns for audience targeting, personalization, and suppression, based on hashed emails and mobile IDs.

![LinkedIn destination in the Adobe Experience Platform UI](../../assets/catalog/social/linkedin/catalog.png)

## Use Cases

To help you better understand how and when you should use the [!DNL LinkedIn Matched Audiences] destination, here is a use case that Adobe Experience Platform customers can solve by using this feature.

A software company organizes a conference and wants to keep in touch with participants, and show them personalized offers based on their conference attendance status. The company can ingest email addresses or mobile device IDs from their own [!DNL CRM] into Adobe Experience Platform, build segments from their own offline data, and send these segments to the [!DNL LinkedIn] social platform, optimizing their advertising spending.

## Destination specifics {#destination-specs}

[!DNL LinkedIn Matched Audiences] supports the activation of the following identities: hashed emails, [!DNL GAID], and [!DNL IDFA].

### Supported Identities {#supported-identities}

[!DNL LinkedIn Matched Audiences] supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

|Target Identity|Description|Considerations|
|---|---|---|
|GAID|Google Advertising ID|Select this target identity when your source identity is a GAID namespace.|
|IDFA|Apple ID for Advertisers|Select this target identity when your source identity is an IDFA namespace.|
|email_lc_sha256|Email addresses hashed with the SHA256 algorithm|Both plain text and SHA256 hashed email addresses are supported by Adobe Experience Platform. Follow the instructions in the [ID matching requirements](#id-matching-requirements-id-matching-requirements) section and use the appropriate namespaces for plain text and hashed emails, respectively. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.|


### Export Type {#export-type}

**Segment Export** - you are exporting all members of a segment (audience) with the identifiers (name, phone number, etc.) used in the [!DNL LinkedIn Matched Audiences] destination.

### LinkedIn account prerequisites {#LinkedIn-account-prerequisites}

Before you can use the [!UICONTROL LinkedIn Matched Audience] destination, make sure your [!DNL LinkedIn Campaign Manager] account has the [!DNL Creative Manager] permission level or higher.

To learn how to edit your [!DNL LinkedIn Campaign Manager] user permissions, see [Add, Edit, and Remove User Permissions on Advertising Accounts](https://www.linkedin.com/help/lms/answer/5753) in the LinkedIn documentation.

### ID matching requirements {#id-matching-requirements}

[!DNL LinkedIn Matched Audiences] requires that no personally identifiable information (PII) is sent in clear. Therefore, the audiences activated to [!DNL LinkedIn Matched Audiences] can be keyed off *hashed* identifiers, such as email addresses or mobile device IDs.

Depending on the type of IDs that you ingest into Adobe Experience Platform, you need to adhere to their corresponding requirements.

#### Email hashing requirements {#email-hashing-requirements}

You can choose to hash email addresses before ingesting them into Adobe Experience Platform, or you can choose to work with email addresses in clear in Experience Platform and have our algorithm hash them on activation.

To learn about ingesting email addresses in Experience Platform, see the [batch ingestion overview](/help/ingestion/batch-ingestion/overview.md) and the [streaming ingestion overview](/help/ingestion/streaming-ingestion/overview.md).

If you select to hash the email addresses yourself, make sure to comply with the following requirements:

- Trim all leading and trailing spaces from the email string. For example: `johndoe@example.com`, not `<space>johndoe@example.com<space>`;
- When hashing the email strings, make sure to hash the lowercase string;
  - Example: `example@email.com`, not `EXAMPLE@EMAIL.COM`;
- Make sure the hashed string is all lowercase
  - Example: `55e79200c1635b37ad31a378c39feb12f120f116625093a19bc32fff15041149`, not `55E79200C1635B37AD31A378C39FEB12F120F116625093A19bC32FFF15041149`;
- Do not salt the string.

>[!NOTE]
>
>Data from unhashed namespaces is automatically hashed by [!DNL Platform] upon activation.
> Attribute source data is not automatically hashed.
> 
> During the [Identity Mapping](../../ui/activate-destinations.md#identity-mapping) step, when your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.
> 
> The **[!UICONTROL Apply transformation]** option is only displayed when you select attributes as source fields. It is not displayed when you choose namespaces.

![Identity mapping transformation](../../assets/ui/activate-destinations/identity-mapping-transformation.png)

## Connect to destination {#connect-destination}

To connect to the [!DNL LinkedIn Matched Audiences] destination, see [Social network destinations authentication workflow](./workflow.md). 

## Activate segments to [!DNL LinkedIn Matched Audiences] {#activate-segments}

For instructions on how to activate segments to [!DNL LinkedIn Matched Audiences], see [Activate Data to Destinations](../../ui/activate-destinations.md).

## Exported data {#exported-data}

A successful activation means that a [!DNL LinkedIn] custom audience would be created programmatically in [[!DNL LinkedIn Campaign Manager]](https://www.linkedin.com/campaignmanager/login). Segment membership in the audience would be added and removed as users are qualified or disqualified for the activated segments.

>[!TIP]
>
>The integration between Adobe Experience Platform and [!DNL LinkedIn Matched Audiences] supports historical audience backfills. All historical segment qualifications get sent to [!DNL LinkedIn] when you activate the segments to the destination.