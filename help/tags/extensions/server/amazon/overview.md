---
title: Amazon Conversions API extension
description: Share website interactions directly with Amazon using the Adobe Experience Platform web events API  
last-substantial-update: 2025-04-17
---
# [!DNL Amazon] web events API extension overview

The [!DNL Amazon] Conversions API extension creates a direct connection between marketing data from an advertiser's server and [!DNL Amazon]. It enables advertisers to evaluate campaign effectiveness regardless of conversion location and optimize campaigns accordingly. This extension provides complete attribution, data reliability, and optimized delivery.

## [!DNL Amazon] prerequisites {#prerequisites}

Before you install and configure the [!DNL Amazon] Conversions API extension, complete the following prerequisite steps to ensure proper authentication and data access:

### Create a secret and data element {#secret}

Authentication with [!DNL Amazon] requires a secure token that must be properly stored and referenced:

1. Create a new [!DNL Amazon] event forwarding secret with a unique name for authentication.
2. Create a data element using the **Core** extension with a **Secret** data element type to reference your [!DNL Amazon] secret.

This process ensures that your authentication credentials remain secure while still being accessible to the extension when needed.

## Install and configure the [!DNL Amazon] extension {#install-configure}

Follow these steps to install and configure the [!DNL Amazon] Conversions API extension:

1. Create or edit an event forwarding property.
2. Navigate to **Extensions** in the left navigation panel, then select the [!DNL Amazon] extension in the Catalog tab.
3. Select **Install**.

   ![The Amazon extension card highlighted in the Adobe Experience Platform Extensions catalog.](../../../images/extensions/server/amazon/amazon-extension.png)

4. Configure the extension with the following details:
   - **Access Token**: Your data element secret containing the OAuth 2 token.

     ![The configuration interface highlighting the field to enter the data element secret for the OAuth 2 token.](../../../images/extensions/server/amazon/2.png)

   - **Entity ID**: Your Entity ID (found in the Campaign Manager portal URL with the "entity" prefix).

     ![The Campaign Manager portal interface with the Entity ID field highlighted.](../../../images/extensions/server/amazon/3.png)

5. Select **Save** to complete the configuration.

### [!DNL Amazon] OAuth 2 {#oauth}

To create an [!DNL Amazon] OAuth 2 secret:

1. Select **[!DNL Amazon] OAuth 2** from the **Type** dropdown and select **Create Secret**.

   ![The dropdown menu with Amazon OAuth 2 selected.](../../../images/extensions/server/amazon/Oauth.png)

2. Select **Create & Authorize secret with Amazon** on the popover to manually authorize the secret and continue.

   ![The Create & Authorize secret with Amazon button highlighted.](../../../images/extensions/server/amazon/Oauth.1.png)

3. Enter your [!DNL Amazon] credentials in the dialog that appears. Follow the prompts to grant event forwarding access to your data.

After completion, you'll see your secret with its status and expiration date in the **Secrets** tab.

   ![The Secrets tab displaying the created secret with its status and expiration date.](../../../images/extensions/server/amazon/Oauth.2.png)

## Configure an event forwarding rule {#config-rule}

Once all your data elements are set up, create event forwarding rules to determine when and how your events are sent to [!DNL Amazon].

1. Navigate to **Rules** and create a new event forwarding rule.
2. Under **Actions**, select **Amazon Conversions API Extension**.
3. Set the **Action Type** to **Import Conversion Events**.

   ![The event forwarding rule configuration interface with the Action Type set to Import Conversion Events.](../../../images/extensions/server/amazon/4.png)

4. Configure the event properties as outlined below:

   | Input | Description | Required | Example |
   | --- | --- | --- | --- |
   | `name` | The name of the conversion event. | Yes | My Event Name. |
   | `eventType` | Defines the type of event tracked. For example: purchases, cart additions. | Yes | Add to Shopping Cart. |
   | `eventActionSource` | Event time in ISO format. |  Yes | --- |
   | `clientDedupeId` | A unique ID for deduplication. | Yes | --- |
   | `timestamp` | User and device identifiers for attribution. | Yes | --- |
   | `matchKeys` | Monetary value of the event. | Yes | --- |
   | `matchKeys > type` | Currency in ISO-4217 format. | Yes | --- |
   | `matchKeys > value` | Quantity of items purchased. | Yes | --- |
   | `currencyCode` | Flags for limited data usage. | Yes | --- |
   | `unitsSold` | Indicates user consent for advertising data usage. | Yes | --- |
   | `countryCode` | Indicates user consent for advertising data usage. | Yes | --- |
   | `dataProcessingOptions` | Indicates user consent for advertising data usage. | Yes | --- |

5. Select **[!UICONTROL Keep Changes]** to save the rule.

   ![The event parameters configuration interface with the Keep Changes button highlighted.](../../../images/extensions/server/amazon/5.png)

   ![Additional event parameters configuration interface with the Keep Changes button highlighted.](../../../images/extensions/server/amazon/6.png)

## Event deduplication {#deduplication}

Deduplication is essential to ensure accurate reporting and prevent inflated conversion counts when using both the [!DNL Amazon] Advertising Tag (AAT) and the [!DNL Amazon] Conversions API extension to track the same events.

### When is deduplication required?

- **Required**: If the same event is being sent from both the client (AAT) and the server (Conversions API).
- **Not required**: If distinct event types are being sent from the client and server without any overlap.

### How to enable deduplication

To enable deduplication, include the `clientDedupeId` field in every shared event. This unique identifier allows [!DNL Amazon] to distinguish between client-side and server-side events and prevent duplicate entries.

By properly configuring deduplication, you can ensure that your optimization data remains accurate and that your reporting is not negatively impacted.

For more details, refer to the [Amazon Event Deduplication Guide](https://advertising.amazon.com/).

## Next steps {#next-steps}

This guide covered how to configure and send conversion events to [!DNL Amazon] using the [!DNL Amazon] Conversions API extension. For more information on event forwarding capabilities in [!DNL Adobe Experience Platform], refer to the [event forwarding overview](../../../ui/event-forwarding/overview.md).

For more details on how to debug your implementation using the Experience Platform Debugger and Event Forwarding Monitoring tool, read the [Adobe Experience Platform Debugger overview](/help/debugger/home.md) and [Monitor activities](../../../ui/event-forwarding/monitoring.md) in event forwarding.
