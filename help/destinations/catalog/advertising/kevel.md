---
title: Kevel connection
description: Activate Adobe Experience Platform audiences to Kevel for real-time onsite and offsite ad targeting.
---

# Kevel connection {#kevel}

## Overview {#overview}

[Kevel](https://www.kevel.com/) provides infrastructure APIs that enable retailers, marketplaces, and apps to power fully custom ad platforms. With Kevel’s APIs, brands can build high-performance retail media offerings, onsite sponsored listings, and personalized ad experiences without relying on monolithic third-party ad servers.

The Kevel destination for Adobe Experience Platform enables customers to activate Adobe audiences directly into Kevel’s **UserDB** and **Segment Management** APIs to support real-time targeting at ad decision time.

> [!IMPORTANT]
> The Kevel destination and this documentation page are maintained by the Kevel team.  
> For questions or update requests, contact **support@kevel.com**.

## Use cases {#use-cases}

### Use case #1 — Power onsite retail media

A retailer wants to deliver more relevant sponsored products in search and browse pages. They build Adobe audiences such as *“high-value beauty shoppers”* or *“recently viewed electronics”* and automatically sync them to Kevel's UserDB. Kevel then makes these segments available for real-time ad decisioning on their site or app.

### Use case #2 — Improve campaign targeting and measurement

A marketplace wants to enrich advertiser campaigns with Adobe first-party behavioral signals. As users qualify for Adobe audiences, those segment memberships are streamed to Kevel in real time. Advertisers can immediately target users based on these signals, improving campaign ROAS.

## Prerequisites {#prerequisites}

Before you set up the Kevel destination:

- You must have an active **Kevel network** and API access.  
- You need a **Kevel API key** with permissions to create segments and update UserDB records.
- You must configure identity namespaces in Adobe Experience Platform that map to the identities your site/app sends during Kevel ad requests (for example, ECID, GAID, IDFA, loyalty ID, etc.).
- Adobe customers should only map identities that are used during real-time ad requests, as each identity will result in a UserDB record.

## Supported identities {#supported-identities}

The Kevel destination supports activation for any identity that your application may use when sending ad requests to Kevel. You may map up to three identity namespaces to generate corresponding UserDB records.

Kevel supports the following Adobe Experience Platform identity namespaces:

| Identity namespace | Description                                | Typical usage |
|--------------------|--------------------------------------------|---------------|
| **ECID**           | Adobe Experience Cloud ID                  | Used for onsite personalization and cross-Adobe identification. |
| **GAID**           | Google Advertising ID                      | Used for Android app/device traffic. |
| **IDFA**           | Apple Advertising ID                       | Used for iOS app/device traffic (subject to ATT consent). |
| **AAID**           | Amazon Advertising ID                      | Used for Fire OS devices and some CTV environments. |
| **CORE**           | First-party customer identifier            | Common internal user/account IDs. |
| **external_id**    | Custom external identifier                 | Passes proprietary or backend-generated IDs. |

{style="table-layout:auto"}

### Support for custom identity namespaces

The Kevel destination **also accepts custom namespaces**, as defined in your Adobe Experience Platform implementation.

This means:

- You can map **customer-specific identity namespaces** (for example: `loyalty_id`, `internal_device_id`, or any custom identity you’ve defined in Identity Service).
- These namespaces can be assigned to `kevel_user_key1`, `kevel_user_key2`, or `kevel_user_key3` the same way as global namespaces.
- Kevel will generate **one UserDB record per mapped identity**, allowing real-time matching at ad-decision time for each identifier your systems send.

### Identity mapping behavior

- You may map **up to three** Adobe identity namespaces to Kevel’s three identity slots.
- For each activated profile, Kevel receives **1 UserDB record per mapped identity**.
- Customers should only map identities they actually send in ad requests to Kevel to avoid unnecessary UserDB storage.

![Mapping example for Kevel Destination](/help/destinations/assets/catalog/advertising/kevel-destination-mappings.png)

## Supported audiences {#supported-audiences}

| Audience origin | Supported | Description | 
|---------|----------|----------|
| Segmentation Service | ✓ | Adobe Profile audiences evaluated by the segmentation engine. |
| Custom uploads | X | Not supported at this time. |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

| Item | Type | Notes |
|------|------|-------|
| Export type | **Segment export** | Kevel receives an update whenever a profile qualifies for or exits an audience. |
| Export frequency | **Streaming** | Updates are sent in real time using the Destination SDK streaming framework. |

{style="table-layout:auto"}

## Connect to the destination {#connect}

Follow the standard Adobe Experience Platform [connect a destination](../../ui/connect-destination.md) workflow.

> [!IMPORTANT]
> You must have **View Destinations** and **Manage Destinations** permissions.

### Authenticate to destination {#authenticate}

When connecting to Kevel, provide the following field:

- **Bearer token** — Your Kevel API key.

![Authentication options for Kevel Destination](/help/destinations/assets/catalog/advertising/kevel-destination-authentication.png)

### Fill in destination details {#destination-details}

After authentication, configure:

- **Name** — A label to identify this destination instance.
- **Description** — Optional text to describe this destination instance.
- **Kevel Network ID** — Your Kevel network identifier.

![Destination details for Kevel Destination](/help/destinations/assets/catalog/advertising/kevel-destination-details.png)

### Enable alerts {#enable-alerts}

You may subscribe to dataflow alerts to monitor activation success and errors.  
See [subscribe to destinations alerts](../../ui/alerts.md).

## Activate segments to this destination {#activate}

To send audiences to Kevel, follow the workflow in  
[Activate profiles and segments to streaming segment export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md).

### Map attributes and identities {#map}

Kevel requires:

- **Identity namespaces** — Up to three identity namespaces mapped to Kevel identity slots.
- **Segment membership** — No manual mapping required; Adobe automatically passes segment membership identifiers and aliases.

During activation, select the identity namespaces you have configured for Kevel. Each identity will generate its own UserDB update call.

## Exported data / Validate data export {#exported-data}

When a profile qualifies for or exits an audience, Adobe sends a streaming update to Kevel.

### Sample payload received by Kevel UserDB

```json
PUT /udb/{networkId}/segments?userKey=ECID-12345
{
  "segments": [1723, 3344, 9988]
}
```
Where:
- `userKey` is derived from the mapped Adobe identity.
- `segments` is the set of Kevel segment IDs corresponding to the Adobe audiences for which the profile is currently realized.

### Sample Adobe profile used during export {#sample-profile}

When activating audiences to the Kevel destination, Adobe Experience Platform sends profile fragments that contain both **segment qualifications** and the **identities mapped by the customer** to Kevel’s identity slots.

Below is an example of an exported profile showing:

- Multiple identity namespaces mapped to  
  `kevel_user_key1`, `kevel_user_key2`, and `kevel_user_key3`
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
#### How Kevel interprets this profile

With the Kevel destination configuration:
	•	Each mapped identity generates a distinct UserDB update, meaning Kevel receives:
	•	One update for `ECID-fN1zo`
	•	One update for `GAID-4oic4`
	•	One update for `IDFA-nB5fU`

Each identity is independently targetable at ad-decision time.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}
- [Kevel UserDB reference](https://dev.kevel.com/reference/userdb)
- [Kevel User Segment Targeting](https://dev.kevel.com/docs/segment-targeting)
