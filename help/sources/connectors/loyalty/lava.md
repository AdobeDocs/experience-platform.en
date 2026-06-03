---
title: LAVA
description: Learn about the LAVA source on Adobe Experience Platform
---
# [!DNL LAVA]

>[!AVAILABILITY]
>
>The [!DNL LAVA] source is in beta. Read the [terms and conditions](../../home.md#terms-and-conditions) in the sources overview for more information on using beta-labeled sources.

[[!DNL LAVA]](https://lava.ai/) is a customer engagement platform. [!DNL LAVA] integrates with your ticketing, point-of-sale, mobile app and other touch points and creates moments that matter with our automation, loyalty and mobile pass solutions. 

The [!DNL LAVA] source connector can be used for several different sets of profile data and events. You can decide which are relevant for you. For each type of data you would like to stream from [!DNL LAVA] to Adobe, repeat the "Connect your LAVA account" steps.

## Prerequisites

Before you can use this source connector, ensure the following:

* You are an existing [!DNL LAVA] customer and have been granted Adobe export rights.
* You have a [LAVA Console](https://app.lava.ai/) account with either "Administrator" or "Export Manager" access.
* (Recommended) You have sandbox manager permissions in Adobe Experience Cloud.


### Member Profiles

The member profile lists key profile attributes LAVA stores on a member. By using `email` as an identity field, [!DNL Adobe Real-time Customer Profiles] can stitch [!DNL LAVA] records with other Adobe profiles.

Download the [sample Member Profiles data file here.](../../assets/lava/lava_profile_sample.json)

| [!DNL LAVA] Source Connector Field | Sample Value | Description |
| --- | --- | --- |
| `lavaId` | c448e091-af0f-4eab-98ff-2c758c149051 | The [!DNL LAVA] ID for the user. |
| `firstName` | John | The user's first name. |
| `lastName` | Doe | The user's last name. |
| `email` | jdoe@example.com | The user's email address. |
| `phone` | +12223334444 | The user's phone number. |
| `type` | profile | An indicator for what type of record this is. |
| `id` | c448e091-af0f-4eab-98ff-2c758c149051 | A unique ID for the record. |
| `timestamp` | 2025-10-22T12:51:04.317084Z | When the profile had these attributes set. |

{style="table-layout:auto"}

### Member Balances

The member balance source lists balances of rewards your members have. `balances` is an array. When using these in audiences, content personalization, conditions and other such locations, you will often have to either select out one particular entry, repeat something for all entries, or aggregate across several entries.

Download the [sample Member Balances data file here.](../../assets/lava/lava_balance_sample.json)


| [!DNL LAVA] Source Connector Field | Sample Value | Description |
| --- | --- | --- |
| `lavaId` | `c448e091-af0f-4eab-98ff-2c758c149051` | The [!DNL LAVA] ID for the user. |
| `balances[]` | - | List of reward balances in LAVA. A balance is an instance of a reward with a specific expiration. If a member has some amount of reward expiring on date A and some amount of the same reward expiring on date B, they will be recorded as separate balances. See balanceSummaries for an aggregation. |
| `balances[].amount` | 500 | The amount of reward items in this balance. For stored value, this is in the lowest unit of denomination (cents). |
| `balances[].expiresAt` | `2025-10-22T12:51:04.317084Z` | When this balance expires. |
| `balances[].rewardId` | 123 | The ID for a [!DNL LAVA] reward. This never changes for a given reward. |
| `balances[].rewardName` | F&B Credit | The name for the reward configured in the [!DNL LAVA] Moment Activation Console. This can be changed. |
| `balances[].rewardSlug` | Credit | The primary slug for the reward configured in the [!DNL LAVA] Moment Activation Console. This can be changed. |
| `balances[].rewardType` | stored | The type of reward (access, offer, points, stored or voucher). |
| `type` | rewards | An indicator for what type of record this is. |
| `id` | `8fefe232-0375-4d56-a24c-d009e9d351e8` | A unique ID for the record. |
| `timestamp` | `2025-10-22T12:51:04.317084Z` | When this data was recorded. |

{style="table-layout:auto"}

### Ticket Scan Events

The ticket scan event source provides detailed information each time a member scans a ticket at an event. This data can be used to understand attendance, engagement, and behavior patterns at specific venues or activities. By streaming ticket scan events to Adobe Experience Platform, you can augment member profiles and enable event-driven personalization or analytics. Each scan event record includes metadata about the event, the venue, as well as where and when the scan occurred.

Download the [sample Ticket Scan Events data file here.](../../assets/lava/lava_ticketscan_sample.json)

| [!DNL LAVA] Source Connector Field | Sample Value | Description |
| --- | --- | --- |
| `lavaId` | `aff0ee5f-da62-4054-8cdb-076f5b60bfc3` | The [!DNL LAVA] ID for the user who scanned the ticket. |
| `eventId` | 1234 | Identifier for an event provided by a ticketing service. |
| `eventName` | GRE1234A | The event name provided by the ticketing service. |
| `eventLabel` | Green Vs Blue | Description of an event as provided by the ticketing provider. |
| `venue` | ABC | Venue code used by the ticketing provider. |
| `venueLabel` | ABC Stadium | Description of the venue as provided by the ticketing provider. |
| `section` | GA4 | Seating section on the scanned ticket. |
| `sectionLabel` | General | A label for the section provided by the ticketing provider. |
| `row` | GA3 | Row on the scanned ticket. |
| `seat` | 13 | Seat on the scanned ticket. |
| `gate` | TEAM ST1 | Gate on the scanned ticket. |
| `gateLabel` | General | A label for the gate provided by the ticket provider. |
| `type` | event-ticketscan | An indicator for what type of record this is. |
| `id` | `1234567/GRE1234A/GA4/GA3/13/0` | A unique ID for the ticket scan event. |
| `timestamp` | `2025-11-03T01:41:00Z` | When the ticket scan occurred. |

{style="table-layout:auto"}

### Transaction Events

The transaction event source provides detailed information each time a purchase is made at a point of sale system by a user identified to LAVA. This data can be used to evaluate the utilization rate of promotions, understand customer preferences and evaluate sales performance. By streaming ticket scan events to Adobe Experience Platform, you can augment member profiles and enable event-driven personalization or analytics. Each transaction event record includes metadata about the purchase, LAVA rewards used and items purchased. Note that some vendors only provide this data when a reward was applied.

Download the [sample Transaction Events data file here.](../../assets/lava/lava_transaction_sample.json)

| [!DNL LAVA] Source Connector Field | Sample Value | Description |
| --- | --- | --- |
| `lavaId` | `52b6a289-f5a0-47f5-b5b5-da3e08aaedb9` | The [!DNL LAVA] ID for the user who made a purchase. |
| `transactionId` | `8d515630-eb0f-43bc-a9f6-221f3813f438` | The [!DNL LAVA]-created ID for the transaction. |
| `referenceId` | `2aed9e2c-77a4-496c-81cc-e9772d128c0e` | The point-of-sale-created ID for the transaction. |
| `subtotal` | `974` | The transaction subtotal in the lowest unit of denomination (cents). |
| `total` | `974` | The transaction total in the lowest unit of denomination (cents). |
| `location` | `64312` | The location where the transaction occurred. |
| `items[]` | - | List of items purchased in this transaction. This field is absent (not an empty list) when item-level data is not provided by the vendor. |
| `items[].sku` | `1083947` | The SKU for the item. |
| `items[].amount` | `1949` | The unit price of the item in the lowest unit of denomination (cents). |
| `items[].quantity` | `1` | The quantity of this item purchased. |
| `items[].adjustedTotal` | `1949` | The total price of this line item after applying any item-level rewards, in the lowest unit of denomination (cents). |
| `items[].rewardsApplied[]` | - | List of rewards applied to this item. |
| `items[].rewardsApplied[].amount` | `975` | The discount amount applied by this reward, in the lowest unit of denomination (cents). |
| `items[].rewardsApplied[].rewardId` | `5` | The [!DNL LAVA] ID of the reward applied. |
| `redeemedAmount` | `0` | The amount of stored value redeemed in this transaction, in the lowest unit of denomination (cents). |
| `rewardsApplied[]` | - | List of rewards applied to this transaction. |
| `rewardsApplied[].amount` | `975` | The discount amount applied by this reward, in the lowest unit of denomination (cents). |
| `rewardsApplied[].rewardId` | `5` | The [!DNL LAVA] ID of the reward applied. |
| `type` | `transaction` | An indicator for what type of record this is. |
| `id` | `8aa43866-173f-4c6e-bfa1-f231e34d6d71` | A unique ID for the record. |
| `timestamp` | `2026-05-09T22:24:43.951Z` | When the transaction was completed. |

{style="table-layout:auto"}

### Ledger Events

The ledger event source provides a record of each change to a member's balances, including grants in a Moment, grants from filling out a form, redemptions happening in a purchase or via the LAVA App, and transfers. A positive `amount` indicates rewards were added to the balance; a negative `amount` indicates rewards were redeemed or removed. Transfers events produce two records: one for the member losing the balance and one for the member receiving it. Payments and transactions may use multiple balances, each of which will come as a separate event.

Download the [sample Ledger Events data file here.](../../assets/lava/lava_ledger_sample.json)

| [!DNL LAVA] Source Connector Field | Sample Value | Description |
| --- | --- | --- |
| `lavaId` | `292c367c-19ee-4d56-8d33-b2ab2c8fd553` | The [!DNL LAVA] ID for the member whose balance changed. |
| `amount` | `-100` | The change in reward balance. Positive values indicate grants; negative values indicate redemptions or deductions. For stored value, this is in the lowest unit of denomination (cents). |
| `expiresAt` | `2026-05-31T22:40:43.109Z` | When the affected balance expires. |
| `rewardId` | `1` | The ID for a [!DNL LAVA] reward. This never changes for a given reward. |
| `rewardName` | `F&B Credit` | The name for the reward configured in the [!DNL LAVA] Moment Activation Console. This can be changed. |
| `rewardSlug` | `Credit` | The primary slug for the reward configured in the [!DNL LAVA] Moment Activation Console. This can be changed. |
| `rewardType` | `stored` | The type of reward (access, offer, points, stored or voucher). |
| `type` | `ledger` | An indicator for what type of record this is. |
| `id` | `8aa43866-173f-4c6e-bfa1-f231e34d6d71` | A unique ID for the record. |
| `timestamp` | `2026-05-21T22:40:43.109Z` | When the balance change occurred. |

{style="table-layout:auto"}

### Load the [!DNL LAVA] package

[!DNL LAVA] provides a package that includes our recommended field groups, schemas, identity namespace and datasets for using [!DNL LAVA] in Experience Platform. Use of these packages is recommended, but not required.

To load these packages, in the Experience Platform UI, select **[!UICONTROL Sandboxes]** from the left navigation to access the [!UICONTROL Sandboxes] workspace. The [!UICONTROL Packages] screen displays available packages. Select **[!UICONTROL Create package]** and **[!UICONTROL Paste package payload]** and paste the following.

```json
{
  "imsOrgId": "1EF71E43679AAD1E0A495C77@AdobeOrg",
  "packageId": "416a0c2a32794092aa1a957cbe9a6698"
}
```

For more information on loading the package, read the [package sharing tutorial](../../../sandboxes/ui/sharing-packages-across-orgs.md#create-a-new-package-using-a-package-payload).

After the package is created, select the ellipses (`...`) to open the menu and select **[!UICONTROL Import Package]** to import the package. For more information on how to import a package, refer to the [sandbox tooling guide](../../../sandboxes/ui/sandbox-tooling.md#import-a-package-to-a-target-sandbox).

The [!DNL LAVA] package includes three datasets: LAVA Profiles, LAVA Balances and LAVA Events. Although the profiles and balances use the same schema, they must be separate datasets so that balance updates do not overwrite profile updates, and vice-versa.

## Next steps

The [!DNL LAVA] source connector ingests member profiles, reward balances, and ticket scan events into Experience Platform. Plan for the listed prerequisites, map and extend schemas using the field reference tables and sample JSON files, and optionally import [!DNL LAVA]'s recommended package into a sandbox before you create connections and dataflows.

For step-by-step setup:

* [Create a source connection and dataflow to stream [!DNL LAVA] data using the [!DNL Flow Service] API](../../tutorials/api/create/loyalty/lava.md)
* [Create a source connection and dataflow to stream [!DNL LAVA] data using the UI](../../tutorials/ui/create/loyalty/lava.md)
