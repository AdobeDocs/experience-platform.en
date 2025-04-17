---
title: Adobe Amazon Conversions API extension
description: This Adobe Experience Platform web events API allows you to share website interactions directly with Amazon.
last-substantial-update: 2025-04-15
---
# [!DNL Amazon] web events API extension overview

The [!DNL Amazon] Conversions API extension creates a direct connection between marketing data from an advertiser's server and [!DNL Amazon]. This enables advertisers to evaluate campaign effectiveness regardless of conversion location and optimize campaigns accordingly. The extension provides more complete attribution, improved data reliability, and better optimized delivery.

## [!DNL Amazon] prerequisites {#prerequisites}

To configure the Amazon Conversions API extension, follow these steps:

* **Create a Secret**: Create a new [!DNL Amazon] event forwarding secret with a unique name for authentication.

* **Create a Data Element**: Use the Core extension and a Secret data element type to reference the Amazon secret.

* **Obtain Credentials**: Ensure you have a valid Amazon account and retrieve your OAuth 2 Access Token from the Amazon Campaign Manager portal.

## Install and configure the [!DNL Amazon] Conversions API extension {#install}

### Installation

Navigate to the **Extensions** section in the Adobe Experience Platform UI.

In the **Catalog** tab, locate the [!DNL Amazon] Conversions API Extension and select **Install**.

![]()

### Configuration

On the configuration screen, input the required values:

- **Account ID**: Identifier used to access Amazon DSP.

- **Entity ID**: The profile identifier associated with the advertiser account.

- **Access Token**: OAuth 2 token needed for authentication.

Select **Save** when finished.

![]()

## Configure an event forwarding rule {#config-rule}

1. Navigate to **Rules** and create a new event forwarding rule.
2. Under **Actions**, select **Amazon Conversions API Extension**.
3. Set the **Action Type** to **Import Conversion Events**.
4. Configure the event properties:

| Input | Description |
| --- | --- |
| **Event Name** | The name of the conversion event. |
| **Event Type** | Defines the type of event tracked (e.g., purchases, cart additions). |
| **Timestamp** | Event time in ISO format. |
| **Client Dedupe ID** | A unique ID for deduplication. |
| **Match Keys** | User and device identifiers for attribution. |
| **Value** | Monetary value of the event. |
| **Currency Code** | Currency in ISO-4217 format. |
| **Units Sold** | Quantity of items purchased. |
| **Country Code** | Country where the event occurred. |
| **Data Processing Options** | Flags for limited data usage. |
| **Consent** | Indicates user consent for advertising data usage. |

Select **Keep Changes** to save the rule.

## Event deduplication {#deduplication}

If you use both [!DNL Amazon] Advertising Tag (AAT) and the [!DNL Amazon] Conversions API Extension, you must set up deduplication to prevent duplicate event reporting.

Ensure every shared event includes Client Dedupe ID. Events arriving within five minutes of each other will be merged, while duplicates received within 48 hours will be removed.

Refer to the [Amazon Event Deduplication Guide](https://advertising.amazon.com/) for more details.

## Next steps

This guide covered how to configure and send conversion events to [!DNL Amazon] using the [!DNL Amazon] Conversions API extension. For more information on event forwarding capabilities in [!DNL Adobe Experience Platform], refer to the [event forwarding overview](../../../ui/event-forwarding/overview.md)