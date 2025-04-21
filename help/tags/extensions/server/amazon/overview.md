---
title: Adobe Amazon Conversions API extension
description: This Adobe Experience Platform web events API allows you to share website interactions directly with Amazon.
last-substantial-update: 2025-04-17
exl-id: 20339b6e-15e3-4d0e-8870-a3a85b7e66fd
---
# [!DNL Amazon] web events API extension overview

The [!DNL Amazon] Conversions API extension creates a direct connection between marketing data from an advertiser's server and [!DNL Amazon]. This enables advertisers to evaluate campaign effectiveness regardless of conversion location and optimize campaigns accordingly. The extension provides more complete attribution, improved data reliability, and better optimized delivery.

## [!DNL Amazon] prerequisites {#prerequisites}

Before installing and configuring the [!DNL Amazon] Conversions API extension, you need to complete several prerequisite steps to ensure proper authentication and data access.

### Create a secret and data element {#secret}

Authentication with [!DNL Amazon] requires a secure token that must be properly stored and referenced:

1. Create a new [!DNL Amazon] event forwarding secret with a unique name for authentication.
2. Create a data element using the **Core** extension with a **Secret** data element type to reference your [!DNL Amazon] secret.

This process ensures your authentication credentials remain secure while still being accessible to the extension when needed.

## Install and configure the [!DNL Amazon] extension

Installing the extension requires access to your event forwarding property in Experience Platform:

- Create or edit an event forwarding property.
- Select **Extensions** in the left navigation, then select [!DNL Amazon] extension in the Catalog tab.
- Select **Install**.
    
![[!DNL Amazon] extension selected in the extensions catalog along with the install button.](../../../images/extensions/server/amazon/amazon-extension.png)

- Configure with:

- **Access Token**: Your data element secret containing the OAuth 2 token

![Individual settings to enter the data element secret highlighted.](../../../images/extensions/server/amazon/2.png)

- **Entity Id**: Your Entity Id (found in Campaign Manager portal URL with "entity" prefix)

![The campaign manager portal in the left navigation.](../../../images/extensions/server/amazon/3.png)

- Select **Save**.

These configuration values establish the connection between Platform and your [!DNL Amazon] account.

### [!DNL Amazon] OAuth 2 {#oauth}

To create an [!DNL Amazon] OAuth 2 secret:

- Select [!DNL Amazon] OAuth 2 from the **Type** dropdown and select **Create Secret**.

![Amazon OAuth 2 in the dropdown menu.](../../../images/extensions/server/amazon/Oauth.png)

- Select **Create & Authorize secret with Amazon** on the popover to manually authorize the secret and continue.

![Create & Authorize secret with Amazon selected.](../../../images/extensions/server/amazon/Oauth.1.png)

- Enter your [!DNL Amazon] credentials in the dialog that appears. Follow the prompts to grant event forwarding access to your data. 

After completion, you'll see your secret with its status and expiration date in the **Secrets** tab.

![Created secret in the secrets tab.](../../../images/extensions/server/amazon/Oauth.2.png)

## Configure an event forwarding rule {#config-rule}

Once all your data elements are set up, you can create event forwarding rules that determine when and how your events will be sent to Amazon.

- Navigate to **Rules** and create a new event forwarding rule.
- Under **Actions**, select **Amazon Conversions API Extension**.
- Set the **Action Type** to **Import Conversion Events**.

![Action configuration options highlighted.](../../../images/extensions/server/amazon/4.png)

- Configure the event properties as outlined below:

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

- Select **Keep Changes** to save the rule.

![Event parameters in action configuration highlighted along with the keep changes button.](../../../images/extensions/server/amazon/5.png)

![Additional event parameters in action configuration highlighted along with the keep changes button.](../../../images/extensions/server/amazon/6.png)

## Event deduplication {#deduplication}

If you use both [!DNL Amazon] Advertising Tag (AAT) and the [!DNL Amazon] Conversions API extension for the same events, deduplication setup is required. Include `clientDedupeId` in every shared event to ensure proper deduplication.
Deduplication is not needed if client and server events don't overlap.

Proper deduplication prevents inflated conversion counts and ensures your optimization data remains accurate.

Refer to the [Amazon Event Deduplication Guide](https://advertising.amazon.com/) for more details.

## Next steps

This guide covered how to configure and send conversion events to [!DNL Amazon] using the [!DNL Amazon] Conversions API extension. For more information on event forwarding capabilities in [!DNL Adobe Experience Platform], refer to the [event forwarding overview](../../../ui/event-forwarding/overview.md)

For more details on how to debug your implementation using the Experience Platform Debugger and Event Forwarding Monitoring tool, read the [Adobe Experience Platform Debugger overview](https://experienceleague.adobe.com/en/docs/experience-platform/debugger/home) and [Monitor activities](https://experienceleague.adobe.com/en/docs/experience-platform/tags/event-forwarding/monitoring) in event forwarding.
