---
title: Kevel Connection
description: Use the Kevel streaming destination to activate audiences directly into Kevel's UserDB and Segment Management APIs and support real-time targeting at decision time.
---

# [!DNL Kevel] connection {#kevel}

## Overview {#overview}

[[!DNL Kevel]](https://www.kevel.com/) provides the AI-enabled technology and expert guidance that help innovative commerce leaders launch, scale, and succeed in retail media. [!DNL Kevel]'s Retail Media Cloud powers targeted, attributable, customizable ad formats for on-site and off-site advertising.

The [!DNL Kevel] streaming destination for Adobe Experience Platform enables customers to activate Adobe audiences directly into [!DNL Kevel]'s UserDB and Segment Management APIs to support real-time targeting at ad decision time.

>[!IMPORTANT]
> 
>If you have questions or would like to request an update regarding the [!DNL Kevel] destination or its documentation, please email the [!DNL Kevel] team at [support@kevel.com](mailto:support@kevel.com).

## Use cases {#use-cases}

You can activate rich first-party behavioral audiences across your retail media experiences to deliver more relevant ads and stronger performance. In Experience Platform, you build high-value, intent-based audiences, such as frequent category shoppers or users with recent product interest, and sync those memberships to [!DNL Kevel] in real time. [!DNL Kevel] immediately makes these segments available for ad decisioning, enabling precise targeting for sponsored products and other formats across search, browse, and app experiences. As soon as users qualify, you can act on these signals to drive more relevant impressions, better targeting, and improved measurement and ROAS.

## Prerequisites {#prerequisites}

To prepare for using the [!DNL Kevel] destination, ensure the following prerequisites are met:

- You must have an active **[!DNL Kevel] network** and API access.  
- You need a **[!DNL Kevel] API key** with permissions to create segments and update UserDB records.
- You must configure identity namespaces in Experience Platform that map to the identities your site or app sends during [!DNL Kevel] ad requests (for example, ECID, GAID, IDFA, loyalty ID, etc.).
- Adobe customers should only map identities that are used during real-time ad requests, as each identity will result in a UserDB record.

## Supported identities {#supported-identities}

The [!DNL Kevel] destination supports activation for any identity that your application may use when sending ad requests to [!DNL Kevel]. You may map up to three identity namespaces to generate corresponding UserDB records.

[!DNL Kevel] supports the following Experience Platform identity namespaces:

| Identity namespace | Description                     | Typical usage                                                  |
|--------------------|---------------------------------|----------------------------------------------------------------|
| **ECID**           | Experience Cloud ID             | Used for onsite personalization and cross-Adobe identification.|
| **GAID**           | Google Advertising ID           | Used for Android app/device traffic.                           |
| **IDFA**           | Apple Advertising ID            | Used for iOS app/device traffic (subject to ATT consent).      |
| **EXTERNAL_ID**    | External ID (custom identifier) | Passes proprietary or backend-generated IDs.                   |

{style="table-layout:auto"}

### Support for custom identity namespaces

The [!DNL Kevel] destination **also accepts custom namespaces**, as defined in your Experience Platform implementation.

This means:

- You can map **customer-specific identity namespaces** (for example: `loyalty_id`, `gigya_id`, or any custom identity you've defined in Identity Service).
- These namespaces can be assigned to `kevel_user_key1`, `kevel_user_key2`, or `kevel_user_key3` the same way as global namespaces.
- [!DNL Kevel] will generate **one UserDB record per instance of each mapped identity**, allowing real-time matching at ad-decision time for each identifier your systems send.

### Identity mapping behavior

- You may map **up to three** Experience Platform identity namespaces to [!DNL Kevel]'s three identity slots.
- For each activated profile, [!DNL Kevel] receives **one UserDB record per instance of each mapped identity**.
- Customers should only map identities they actually send in ad requests to [!DNL Kevel] to avoid unnecessary UserDB storage.

![Mapping example for Kevel Destination](/help/destinations/assets/catalog/advertising/kevel-destination-mappings.png)

## Supported audiences {#supported-audiences}

| Audience origin        | Supported | Description                                              |
|-----------------------|-----------|---------------------------------------------------------- |
| Segmentation Service  | Yes       | Adobe Profile audiences evaluated by the segmentation engine. |
| Custom uploads        | No        | Not supported at this time.                               |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

| Item | Type | Notes |
|------|------|-------|
| Export type | **Segment export** | [!DNL Kevel] receives an update whenever a profile qualifies for or exits an audience. |
| Export frequency | **Streaming** | Updates are sent in real time using the Destination SDK streaming framework. |

{style="table-layout:auto"}

## Connect to the destination {#connect}

Follow the standard Experience Platform [connect a destination](../../ui/connect-destination.md) workflow.

>[!IMPORTANT]
> 
>You must have **View Destinations** and **Manage Destinations** permissions.

### Authenticate to destination {#authenticate}

When connecting to [!DNL Kevel], provide the following field:

- **Bearer token** — Your [!DNL Kevel] API key.

![Authentication options for Kevel Destination](/help/destinations/assets/catalog/advertising/kevel-destination-authentication.png)

### Fill in destination details {#destination-details}

After authentication, configure:

- **Name** — A label to identify this destination instance.
- **Description** — Optional text to describe this destination instance.
- **[!DNL Kevel] Network ID** — Your [!DNL Kevel] network identifier.

![Destination details for Kevel Destination](/help/destinations/assets/catalog/advertising/kevel-destination-details.png)

## Activate segments to this destination {#activate}

To send audiences to [!DNL Kevel], follow the workflow in  
[Activate profiles and segments to streaming segment export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md).

### Deactivating audiences {#deactivate}

When an audience is deactivated or removed from the [!DNL Kevel] destination in Experience Platform, Experience Platform stops sending further profile qualification updates for that audience. Any existing segment created in [!DNL Kevel] remains available and is not automatically deleted.

If the [!DNL Kevel] segment is currently being used in an active campaign, [!DNL Kevel] prevents deletion to avoid disrupting live delivery. In this case, deactivation in Experience Platform results in the following:

- The Experience Platform dataflow stops
- The [!DNL Kevel] segment continues to exist and may remain attached to campaigns until manually removed or the campaign is updated

To fully stop targeting in [!DNL Kevel], ensure the segment is removed from any active campaigns in [!DNL Kevel]'s campaign management system.

### Map attributes and identities {#map}

[!DNL Kevel] requires:

- **Identity namespaces** — Up to three identity namespaces mapped to [!DNL Kevel] identity slots.
- **Segment membership** — No manual mapping required; Experience Platform automatically passes segment membership identifiers and aliases.

During activation, select the identity namespaces you have configured for [!DNL Kevel]. Each identity will generate its own UserDB update call.

## Exported data / Validate data export {#exported-data}

When a profile qualifies for or exits an audience, Experience Platform sends a streaming update to [!DNL Kevel].

### Sample payload received by [!DNL Kevel] UserDB

```json
PUT /udb/{networkId}/segments?userKey=ECID-12345
{
  "segments": [1723, 3344, 9988]
}
```

| Parameter | Description |
|-----------|-------------|
| **userKey** | Derived from the mapped Adobe identity. |
| **segments** | The set of [!DNL Kevel] segment IDs corresponding to the Adobe audiences for which the profile is currently realized. |

{style="table-layout:auto"}

### Sample Experience Platform profile used during export {#sample-profile}

When activating audiences to the [!DNL Kevel] destination, Experience Platform sends profile fragments that contain both **segment qualifications** and the **identities mapped by the customer** to [!DNL Kevel]'s identity slots.

Below is an example of an exported profile showing:

- Multiple identity namespaces mapped to `kevel_user_key1`, `kevel_user_key2`, and `kevel_user_key3`
- A single activated segment in the `ups` namespace

```json
{
  "segmentMembership": {
    "ups": {
      "9d161bbb-c785-474a-965b-7d7bc2adf879": {
        "status": "realized",
        "lastQualificationTime": "2025-12-10T21:43:38.541076Z"
      }
    }
  },
  "identityMap": {
    "kevel_user_key1": [
      {
        "id": "ECID-fN1zo"
      },
      {
        "id": "ECID-9Xr2p"
      }
    ],
    "kevel_user_key2": [
      {
        "id": "GAID-4oic4"
      }
    ],
    "kevel_user_key3": [
      {
        "id": "IDFA-nB5fU"
      }
    ]
  }
}
```

#### How [!DNL Kevel] interprets this profile

With the [!DNL Kevel] destination configuration, each mapped identity generates a distinct UserDB record, meaning [!DNL Kevel] receives:

- One update for `ECID-fN1zo`
- One update for `ECID-9Xr2p`
- One update for `GAID-4oic4`
- One update for `IDFA-nB5fU`

This allows the same person to be recognized at ad decision time using any of their available identities, with each identity carrying an identical set of segment memberships.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

- [[!DNL Kevel] UserDB reference](https://dev.kevel.com/reference/userdb)
- [[!DNL Kevel] User Segment Targeting](https://dev.kevel.com/docs/segment-targeting)
