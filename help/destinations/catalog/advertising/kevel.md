---
title: Kevel Connection
description: Use the Kevel streaming destination to activate audiences into Kevel's UserDB and Segment Management APIs for real-time targeting at decision time.
last-substantial-update: 2026-06-18
exl-id: 53ce2864-6a3b-4859-b14d-a03c2ce18884
TQID: https://experienceleague.adobe.com/nJ7SPoowD09LIODa9JajFZXnzw28ovZRV0-bZSIIrYY
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
subfeature_v2:
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
  - id: ee602049-8a18-43df-9299-a689a025a371
    internal-label: Use cases
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: c2be0313-b3ae-45e0-b454-d20bf54b23f2
    internal-label: Measurement
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
---
# [!DNL Kevel] connection {#kevel}

[Kevel](https://www.kevel.com/) provides the AI-enabled technology and expert guidance that help innovative commerce leaders launch, scale, and succeed in retail media. [!DNL Kevel]'s [!DNL Retail Media Cloud] powers targeted, attributable, customizable ad formats for on-site and off-site advertising.

Use the [!DNL Kevel] streaming destination to activate Adobe audiences directly into [!DNL Kevel]'s [!DNL UserDB] and Segment Management APIs and support real-time targeting at ad decision time. You can also export profile attributes, such as a user's [incrementality testing](https://dev.kevel.com/docs/incrementality) group assignment, for [!DNL Kevel] to act on at decision time.

>[!IMPORTANT]
>
>If you have questions or would like to request an update regarding the [!DNL Kevel] destination or its documentation, please email the [!DNL Kevel] team at [support@kevel.com](mailto:support@kevel.com).

## Use cases {#use-cases}

**Target retail media audiences in real time.** You can activate rich first-party behavioral audiences across your retail media experiences to deliver more relevant ads and stronger performance. In Experience Platform, you build high-value, intent-based audiences, such as frequent category shoppers or users with recent product interest, and sync those memberships to [!DNL Kevel] in real time. [!DNL Kevel] immediately makes these segments available for [ad decisioning](https://dev.kevel.com/docs/segment-targeting), enabling precise targeting for sponsored products and other formats across search, browse, and app experiences. As soon as users qualify, you can act on these signals to drive more relevant impressions, better targeting, and improved measurement and ROAS.

**Measure incremental impact.** You can also export a user's group assignment as a profile attribute to power [!DNL Kevel]'s [incrementality testing](https://dev.kevel.com/docs/incrementality). [!DNL Kevel] holds out a control cohort and compares it against exposed users to quantify the *causal* lift your campaigns drive, rather than relying on proxy metrics such as new-to-brand counts or correlation-based lift. This lets you prove incremental sales and conversions while [!DNL Kevel] minimizes revenue impact by serving the next best eligible ad to held-out users.

## Prerequisites {#prerequisites}

To prepare for using the [!DNL Kevel] destination, ensure the following prerequisites are met:

- You must have an active **[!DNL Kevel] network** and API access.
- You need a **[!DNL Kevel] API key** with permissions to create segments and update [!DNL UserDB] records.
- You must configure identity namespaces in Experience Platform that map to the identities your site or app sends during [!DNL Kevel] ad requests, such as ECID, GAID, IDFA, and loyalty ID.
- Only map identities that you send during real-time ad requests. Each mapped identity results in a [!DNL UserDB] record.

## Supported identities {#supported-identities}

The [!DNL Kevel] destination supports activation for any identity that your application may use when sending ad requests to [!DNL Kevel]. You may map up to three identity namespaces to generate corresponding [!DNL UserDB] records.

[!DNL Kevel] supports the following Experience Platform identity namespaces:

| Identity namespace | Description                     | Typical usage                                                  |
|--------------------|---------------------------------|----------------------------------------------------------------|
| **ECID**           | Experience Cloud ID             | Used for onsite personalization and cross-Adobe identification.|
| **GAID**           | Google Advertising ID           | Used for Android app/device traffic.                           |
| **IDFA**           | Apple Advertising ID            | Used for iOS app/device traffic (subject to ATT consent).      |
| **EXTERNAL_ID**    | External ID (custom identifier) | Passes proprietary or backend-generated IDs.                   |

{style="table-layout:auto"}

### Support for custom identity namespaces {#custom-identity-namespaces}

The [!DNL Kevel] destination also accepts custom namespaces, as defined in your Experience Platform implementation.

This means:

- You can map customer-specific identity namespaces, such as `loyalty_id`, `gigya_id`, or any custom identity you've defined in Identity Service.
- You can assign these namespaces to `kevel_user_key1`, `kevel_user_key2`, or `kevel_user_key3` the same way as global namespaces.

### Identity mapping behavior {#identity-mapping-behavior}

- You may map up to three Experience Platform identity namespaces to [!DNL Kevel]'s three identity slots.
- For each activated profile, [!DNL Kevel] generates one [!DNL UserDB] record per instance of each mapped identity, allowing real-time matching at ad decision time for each identifier your systems send.
- Only map identities that you send in ad requests to [!DNL Kevel] to avoid unnecessary [!DNL UserDB] storage.

![Screenshot of the identity mapping step showing three identity namespaces mapped to the Kevel identity slots.](/help/destinations/assets/catalog/advertising/kevel-destination-mappings.png)

## Supported audiences {#supported-audiences}

The [!DNL Kevel] destination supports the following audience origins and audience data types.

| Audience origin        | Supported | Description                                              |
|-----------------------|-----------|---------------------------------------------------------- |
| Segmentation Service  | Yes       | Adobe Profile audiences evaluated by the segmentation engine. |
| All other audience origins | Yes | This category includes all audience origins outside of audiences generated through the [!DNL Segmentation Service]. Read about the [various audience origins](/help/segmentation/ui/audience-portal.md#customize). Some examples include: <ul><li> custom upload audiences [imported](../../../segmentation/ui/audience-portal.md#import-audience) into Experience Platform from CSV files,</li><li> look-alike audiences, </li><li> federated audiences, </li><li> audiences generated in other Experience Platform apps such as [!DNL Adobe Journey Optimizer], </li><li> and more. </li></ul> |

{style="table-layout:auto"}

Supported audiences by audience data type:

| Audience data type | Supported | Description | Use cases |
|--------------------|-----------|-------------|-----------|
| [People audiences](/help/segmentation/types/people-audiences.md) | Yes | Based on customer profiles, allowing you to target specific groups of people for marketing campaigns. | Frequent buyers, cart abandoners |
| [Account audiences](/help/segmentation/types/account-audiences.md) | No | Target individuals within specific organizations for account-based marketing strategies. | B2B marketing |
| [Prospect audiences](/help/segmentation/types/prospect-audiences.md) | No | Target individuals who are not yet customers but share characteristics with your target audience. | Prospecting with third-party data |
| [Dataset exports](/help/catalog/datasets/overview.md) | No | Collections of structured data stored in the [!DNL Adobe Experience Platform] Data Lake. | Reporting, data science workflows |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

The [!DNL Kevel] destination exports data using the following type and frequency.

| Item | Type | Notes |
|------|------|-------|
| Export type | **Segment export** | [!DNL Kevel] receives an update whenever a profile qualifies for or exits an audience. |
| Export frequency | **Streaming** | Updates are sent in real time using the Destination SDK streaming framework. |

{style="table-layout:auto"}

## Connect to the destination {#connect}

Follow the standard Experience Platform [connect a destination](../../ui/connect-destination.md) workflow.

>[!IMPORTANT]
>
>You must have **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** permissions.

### Authenticate to destination {#authenticate}

When connecting to [!DNL Kevel], provide the following field:

- **[!UICONTROL Bearer token]**: Your [!DNL Kevel] API key.

![Screenshot of the authentication step showing the bearer token field for the Kevel destination.](/help/destinations/assets/catalog/advertising/kevel-destination-authentication.png)

### Fill in destination details {#destination-details}

After authentication, configure:

- **[!UICONTROL Name]**: A label to identify this destination instance.
- **[!UICONTROL Description]**: Optional text to describe this destination instance.
- **[!UICONTROL Kevel Network ID]**: Your [!DNL Kevel] network identifier.

![Screenshot of the destination details step showing the name, description, and Kevel Network ID fields.](/help/destinations/assets/catalog/advertising/kevel-destination-details.png)

## Activate audiences to this destination {#activate}

To send audiences to [!DNL Kevel], follow the workflow in [Activate audiences to streaming destinations](/help/destinations/ui/activate-segment-streaming-destinations.md).

### Deactivate audiences {#deactivate}

When an audience is deactivated or removed from the [!DNL Kevel] destination in Experience Platform, Experience Platform stops sending further profile qualification updates for that audience. Any existing segment created in [!DNL Kevel] remains available and is not automatically deleted.

If the [!DNL Kevel] segment is currently being used in an active campaign, [!DNL Kevel] prevents deletion to avoid disrupting live delivery. In this case, deactivation in Experience Platform results in the following:

- The Experience Platform dataflow stops.
- The [!DNL Kevel] segment continues to exist and may remain attached to campaigns until manually removed or the campaign is updated.

To fully stop targeting in [!DNL Kevel], ensure the segment is removed from any active campaigns in [!DNL Kevel]'s campaign management system.

### Map attributes and identities {#map}

[!DNL Kevel] requires:

- **Identity namespaces**: Up to three identity namespaces mapped to [!DNL Kevel] identity slots.
- **Audience membership**: No manual mapping required. Experience Platform automatically passes audience membership identifiers and aliases.

During activation, select the identity namespaces you have configured for [!DNL Kevel]. Each identity generates its own [!DNL UserDB] update call.

#### Profile attributes (optional) {#profile-attributes}

You can optionally map XDM profile attributes to [!DNL Kevel]. The destination recognizes the following target attribute name.

| Target field name | Description | Value type |
|-------------------|-------------|------------|
| **`kevelGroup`** | The user's incrementality testing group assignment. Used by [!DNL Kevel] to split users into test and control cohorts for measuring causal ad impact. | Integer (1 to 100) |

{style="table-layout:auto"}

To map a group attribute, add a new mapping row in the **[!UICONTROL Mapping]** step and configure:

1. **[!UICONTROL Source field]**: Select the XDM attribute or computed attribute that contains the user's group number, such as `_yourSchema.incrementalityGroup`.
1. **[!UICONTROL Target field]**: Open the target-field selector, keep **[!UICONTROL Select attributes]** chosen, and select **`kevelGroup`** (Integer) from the schema.

![Screenshot of the mapping step showing an XDM attribute mapped to the kevelGroup target field for the Kevel destination.](/help/destinations/assets/catalog/advertising/kevel-destination-group-mapping.png)

## Validate the data export {#exported-data}

When a profile qualifies for or exits an audience, Experience Platform sends a streaming update to [!DNL Kevel].

### Sample payload received by [!DNL Kevel] UserDB {#sample-payload}

Experience Platform sends the following sample payload to [!DNL Kevel]'s [!DNL UserDB] API.

```json
PUT /udb/{networkId}/segments?userKey=ECID-12345&group=42
{
  "segments": [1723, 3344, 9988]
}
```

| Parameter | Description |
|-----------|-------------|
| **userKey** | Derived from the mapped Adobe identity. |
| **group** | *(Optional)* Sent as a query parameter. The user's incrementality testing group (1 to 100). Only included if a profile attribute is mapped to the `kevelGroup` target field. |
| **segments** | The set of [!DNL Kevel] segment IDs corresponding to the Adobe audiences for which the profile is currently realized. |

{style="table-layout:auto"}

### Sample Experience Platform profile used during export {#sample-profile}

When activating audiences to the [!DNL Kevel] destination, Experience Platform sends profile fragments that contain both **segment qualifications** and the **identities you mapped** to [!DNL Kevel]'s identity slots.

Below is an example of an exported profile showing:

- Multiple identity namespaces mapped to `kevel_user_key1`, `kevel_user_key2`, and `kevel_user_key3`
- A single activated segment in the `ups` namespace
- A profile attribute mapped to `kevelGroup` for incrementality testing

```json
{
  "attributes": {
    "kevelGroup": 42
  },
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

#### How [!DNL Kevel] interprets this profile {#kevel-profile-interpretation}

With the [!DNL Kevel] destination configuration, each mapped identity generates a distinct [!DNL UserDB] record, meaning [!DNL Kevel] receives:

- One update for `ECID-fN1zo`
- One update for `ECID-9Xr2p`
- One update for `GAID-4oic4`
- One update for `IDFA-nB5fU`

This allows the same person to be recognized at ad decision time using any of their available identities, with each identity carrying an identical set of segment memberships.

When a `kevelGroup` attribute is mapped and present on the profile, each [!DNL UserDB] update also includes the user's group assignment as the `group` query parameter, enabling [!DNL Kevel]'s incrementality testing feature to determine test and control cohort membership at ad decision time.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

- [Kevel UserDB reference](https://dev.kevel.com/reference/userdb)
- [Kevel User Segment Targeting](https://dev.kevel.com/docs/segment-targeting)
