---
title: Nextdoor Conversion API Extension
description: Learn how to use the Nextdoor Conversion API extension to send conversion events to track the performance of your advertising campaigns.
last-substantial-update: 2025-12-18
exl-id: fbab477d-a865-4a35-94ba-6e887d7d28db
---
# [!DNL Nextdoor] Conversion API Extension - User Guide

## Overview
 
[!DNL Nextdoor] is a social networking service for neighborhoods that connects people to their local communities. It's a platform where neighbors can communicate, share information, stay updated on local events and news, and buy and sell items with others in their area.

Use the [[!DNL Nextdoor] Conversion API Extension](https://help.nextdoor.com/s/article/About-the-Nextdoor-Conversion-API) to send conversion events directly to [!DNL Nextdoor's] Conversion API. This extension helps you track and measure the performance of your [!DNL Nextdoor] advertising campaigns by sending server-side conversion data.

This guide shows you how to install, configure, and use the [!DNL Nextdoor] Conversion API extension in your event forwarding [rules](https://experienceleague.adobe.com/en/docs/experience-platform/tags/ui/rules).

## Prerequisites {#prerequisites}

You need a valid [!DNL Nextdoor] Ads Manager account to use this extension. If you don't have one already, go to the [[!DNL Nextdoor Ads] registration page](https://ads.nextdoor.com/v2/signup) to register and create your account.

### Gather required configuration details {#configuration-details}

To connect Experience Platform to [!DNL Nextdoor], you'll need the following information:

| Credential | Description | Security Notes |
| --- | --- | --- |
| Data Source ID | Your unique data source identifier from [!DNL Nextdoor], which you can find in your [!DNL Nextdoor Ads Manager] account by accessing the Assets > Pixels page and generating a Nextdoor Pixel. | It is safe to share this within your organization. |
| Access Token | Your API authentication access token for secure communication. You can generate this token by logging into your [!DNL Nextdoor Ads Manager] account and accessing the API settings. | Keep this token secure, as it provides access to your account. |

## Install and configure the [!DNL Nextdoor] extension {#install}

To install the extension, select **[!UICONTROL Extensions]** in the left navigation. In the **[!UICONTROL Catalog]** tab, select the **[!UICONTROL Nextdoor Conversion API Extension]** and then select **[!UICONTROL Install]**.

![The extension catalog showing the [!DNL Nextdoor] extension card highlighting install.](../../../images/extensions/server/nextdoor/install-extension.png)

On the next screen, enter the configuration values you generated from your [!DNL Nextdoor Ads Manager]:

* **[!UICONTROL Data Source ID]**
* **[!UICONTROL Access Token]**

When finished, select **[!UICONTROL Save]**.

![[!DNL Nextdoor] configuration screen for the [!DNL Nextdoor] conversion API extension.](../../../images/extensions/server/nextdoor/configure.png)

## Configure an event forwarding rule {#config-rule}

Once all your data elements are set up, you can create event forwarding rules that determine when and how your events are sent to [!DNL Nextdoor].

Create a new [rule](../../../ui/managing-resources/rules.md) in your event forwarding property. Under **[!UICONTROL Actions]**, add a new action and set the extension to **[!UICONTROL Nextdoor Conversion API Extension]**. To send Edge Network events to [!DNL Nextdoor], set the **[!UICONTROL Action Type]** to **[!UICONTROL Report Web Conversions]**.

![The [!UICONTROL Report Web Conversions] action type being selected for a [!DNL Nextdoor] rule in the Data Collection UI.](../../../images/extensions/server/nextdoor/select-action.png)

After you make this selection, additional controls appear that let you configure the event further, as outlined below. Once completed, select **[!UICONTROL Keep Changes]** to save the rule.

**Main-body parameters**

These core parameters define your conversion event:

| Parameter                            | Description    | Data Type      | Required       | Options/Format | Example        |
| ------------------------------------ | -------------- | -------------- | -------------- | -------------- | -------------- |
| [!UICONTROL Event Name]              | Specifies the type of conversion event being tracked. | String (dropdown) | Required | <ul><li>Purchase</li><li>Lead</li><li>Sign Up</li><li>Add to Cart</li><li>Initiate Checkout</li><li>Page View</li><li>Search</li><li>View Content</li><li>Add to Wishlist</li><li>Subscribe</li><li>Custom</li></li>Conversion 1-10</li></ul> | `Purchase` |
| [!UICONTROL Event ID]                | Unique identifier to prevent duplicate event reporting. This will be auto-generated if blank. | String | Optional | Unique string identifier | `order_12345` |
| [!UICONTROL Event Time (Unix Epoch)] | Timestamp when the conversion event occurred. Defaults to current time if left blank. | Integer | Optional | Unix timestamp in seconds | `1703980800` (Dec 30, 2023) |
| [!UICONTROL Action Source]           | Channel or platform where the conversion occurred. | String (dropdown) | Required | <ul><li>website</li><li>email</li><li>app</li><li>phone_call</li><li>chat</li><li>physical_store</li><li>system_generated</li><li>other</li></ul> | `website` |
| [!UICONTROL Data Source ID]          | Override the global data source ID for specific events. Will inherit from the config if left blank. | String | Optional | Alphanumeric string | `12345`|
| [!UICONTROL Action Source URL]       | The specific URL where the conversion occurred. | String | Optional | Full URL including protocol | https://example.com/checkout/success |

**Privacy and compliance parameters**

Use these parameters to ensure privacy compliance:

| Parameter                                    | Description                                          | Data Type | Required | Values/Format                                              | Example    |
| -------------------------------------------- | ---------------------------------------------------  | --------- | -------- | ---------------------------------------------------------- | ---------- |
| [!UICONTROL Restricted Data Usage]           | Flag to restrict data usage for privacy compliance.  | Integer   | Optional | <ul><li>0 = No restrictions</li><li>1 = Restrict</li></ul> | `0`        |
| [!UICONTROL Restricted Data Usage (Country)] | Country-specific data processing restrictions.       | Integer   | Optional | 1 = USA (other codes may be supported)                     | `1`        |
| [!UICONTROL Restricted Data Usage (State)]   | State-specific restrictions for US users.            | Integer   | Optional | 1000 = CA, 1001 = CO, etc.                                 | `1000`     |
| [!UICONTROL Test Event]                      | Marks the event as a test for development/debugging. | String    | Optional | Any non-empty string                                       | `test`     |

**Customer information parameters**

>[!IMPORTANT]
>
>You must provide at least one customer information parameter for proper event attribution and matching.

| Parameter                      | Description                                     | Data Type | Required                             | Format                               | Example                    |
| ------------------------------ | ----------------------------------------------- | --------- | ------------------------------------ | ------------------------------------ | -------------------------- |
| [!UICONTROL Email]             | Customer's email address for identity matching. | String    | At least one customer field required | Plain text or SHA-256 hash           | `user@example.com`         |
| [!UICONTROL Phone Number]      | Customer's phone number for identity matching.  | String    | At least one customer field required | E.164 format (hashed with SHA-256)   | `+15551234567`             |
| [!UICONTROL First Name]        | Customer's first name for enhanced matching.    | String    | At least one customer field required | Plain text or SHA-256 hash           | `John`                     |
| [!UICONTROL Last Name]         | Customer's last name for enhanced matching.     | String    | At least one customer field required | Plain text or SHA-256 hash           | `Smith`                    |
| [!UICONTROL Date of Birth]     | Customer's birth date for demographic matching. | String    | Optional                             | YYYYMMDD (SHA-256 hashed)            | `19900115`                 |
| [!UICONTROL Gender]            | Customer's gender for demographic targeting.    | String    | Optional                             | M/F/O (SHA-256 hashed)               | `M`                        |
| [!UICONTROL External ID]       | Your internal customer identifier.              | String    | Optional                             | Any unique string                    | `customer_12345`           |
| [!UICONTROL Street Address]    | Customer's street address.                      | String    | Optional                             | SHA-256 hashed                       | `123 Main Street` (hashed) |
| [!UICONTROL City]              | Customer's city.                                | String    | Optional                             | SHA-256 hashed                       | `San Francisco` (hashed)   |
| [!UICONTROL State]             | Customer's state/province.                      | String    | Optional                             | Two-letter code (SHA-256 hashed)     | `CA` (hashed)              |
| [!UICONTROL Zip Code]          | Customer's postal code.                         | String    | Optional                             | First 5 digits US (SHA-256 hashed)   | `94102` (hashed)           |
| [!UICONTROL Country]           | Customer's country.                             | String    | Optional                             | ISO-3166-1 alpha-2 (SHA-256 hashed)  | `US` (hashed)              |
| [!UICONTROL Click ID]          | Nextdoor click identifier for attribution.      | String    | Optional                             | Captured from `ndclid` URL parameter | `nd_click_12345abcdef`     |
| [!UICONTROL Client IP Address] | IP address of the user's device.                | String    | Optional                             | IPv4 or IPv6 address                 | `192.168.1.1`              |
| [!UICONTROL Client User Agent] | Browser user agent string.                      | String    | Optional                             | Raw browser user-agent string        | `Mozilla/5.0 (Windows...)` |

**Custom parameters**

These parameters provide additional context about your conversion event:

| Parameter                      | Description                                    | Data Type           | Required                         | Format                                  | Example                 |
| ------------------------------ | ---------------------------------------------- | ------------------- | -------------------------------- | --------------------------------------- | ----------------------- |
| [!UICONTROL Order Value]       | Total value of the purchase transaction.       | String              | **REQUIRED for Purchase events** | ISO 4217 Currency + Amount (no spaces)  | `USD123.45`             |
| [!UICONTROL Order ID]          | Unique transaction or order identifier.        | String              | Optional                         | Any unique string                       | `order_12345`           |
| [!UICONTROL Delivery Category] | Method of product/service delivery.            | String              | Optional                         | <ul><li>`in_store`</li><li>`curbside`</li><li>`home_delivery`</li></ul> | `home_delivery`         |
| [!UICONTROL Product Context]   | Detailed information about purchased products. | String (JSON array) | Optional                         | JSON array of product objects           | `[{"id":"SKU123","content_name":"Widget","item_price":29.99,"quantity":1}]` |

**Mobile app parameters**

You must include these parameters when `Action Source = 'APP'`:

| Parameter                         | Description                                   | Data Type | Required                    | Format                                    | Example           |
| --------------------------------- | --------------------------------------------- | --------- | --------------------------- | ----------------------------------------- | ----------------- |
| [!UICONTROL App ID*]              | Mobile application identifier.                | String    | **REQUIRED for APP events** | <ul><li>Bundle ID (iOS)</li><li>Package Name (Android)</li></ul> | `com.company.app` |
| [!UICONTROL App Tracking Enabled] | iOS App Tracking Transparency consent status. | String    | **REQUIRED for APP events** | Boolean string                            | `true`            |
| [!UICONTROL Platform]             | Mobile operating system.                      | String    | **REQUIRED for APP events** | <ul><li>`iOS`</li><li>`Android`</li></ul> | `Android`         |
| [!UICONTROL App Version]          | Version of the mobile application.            | String    | **REQUIRED for APP events** | Version string as defined by your app     | `2.0.0-beta`      |

## Event types {#event-types}

The following event types are supported for different conversion scenarios:

| Event Name               | Event Type | Description                            | Use Case                                | Required Fields                        | Notes                                 |
| ------------------------ | ---------- | -------------------------------------- | --------------------------------------- | -------------------------------------- | ------------------------------------- |
| [!UICONTROL Purchase]             | Standard   | Completed purchase transaction.        | E-commerce conversions                  | <ul><li>Event Name</li><li>Order Value</li><li>Customer Info</li></ul> | Most important for ROAS optimization  |
| [!UICONTROL Lead]                 | Standard   | Lead generation or inquiry.            | Form submissions, contact requests      | <ul><li>Event Name</li><li>Customer Info</li></ul>             | High-value conversion for B2B         |
| [!UICONTROL Sign Up]              | Standard   | User registration or account creation. | Newsletter signup, account registration | <ul><li>Event Name</li><li>Customer Info</li></ul>             | Top-funnel conversion tracking        |
| [!UICONTROL Add to Cart]          | Standard   | Product added to shopping cart.        | E-commerce funnel tracking              | <ul><li>Event Name</li><li>Customer Info</li></ul>             | Mid-funnel engagement signal          |
| [!UICONTROL Initiate Checkout]    | Standard   | Checkout process started.              | Purchase intent tracking                | <ul><li>Event Name</li><li>Customer Info</li></ul>             | Strong purchase intent indicator      |
| [!UICONTROL Page View]            | Standard   | Important page visited.                | Content engagement, landing pages       | <ul><li>Event Name</li><li>Customer Info</li></ul>             | Use for high-value pages only         |
| [!UICONTROL Search]               | Standard   | Search performed on site.              | Product/content discovery               | <ul><li>Event Name</li><li>Customer Info</li></ul>             | Indicates active user engagement      |
| [!UICONTROL View Content]         | Standard   | Content or product viewed.             | Product page views, content engagement  | <ul><li>Event Name</li><li>Customer Info</li></ul>             | Useful for remarketing audiences      |
| [!UICONTROL Add to Wishlist]      | Standard   | Product added to wishlist.             | Future purchase intent                  | <ul><li>Event Name</li><li>Customer Info</li></ul>             | Indicates strong product interest     |
| [!UICONTROL Subscribe]            | Standard   | Subscription to service/newsletter.    | Recurring revenue, engagement           | <ul><li>Event Name</li><li>Customer Info</li></ul>             | High lifetime value indicator         |
| [!UICONTROL Custom Conversion 1 - 10] | Custom | Business-specific conversion event.    | Define your own conversion type         | <ul><li>Event Name</li><li>Customer Info</li></ul>             | Customize for unique business actions |

## Data elements integration {#data-element}

All fields support Adobe event forwarding data elements. Select the data element icon ![data elements](../../../images/extensions/server/nextdoor/data-element-icon.png) next to any field to:

* **Select Existing Data Elements**: Select from data elements that have already been created.
* **Add New Data Elements**: Create and define new data elements as needed.
* **Apply Dynamic Values**: Populate fields with dynamic content sourced from your website.

## Best practices {#best-practices}

Follow these best practices to ensure accurate conversion tracking, improve data quality, and comply with privacy regulations. These recommendations will help you maximize the effectiveness of your [!DNL Nextdoor] Conversion API integration and optimize your advertising performance.

### Data Quality and Privacy Compliance

Proper data handling is essential for maximizing conversion attribution accuracy while maintaining user privacy and regulatory compliance. These practices help ensure your customer data is formatted correctly, processed securely, and handled according to privacy regulations.

* **Use consistent data formatting**: Format emails, phone numbers, and other data consistently:

  * **Email normalization**: Convert emails to lowercase, trim whitespace, and remove dots from [!DNL Gmail] addresses.
  * **Phone number standardization**: Use E.164 format (+1234567890) for international compatibility.
  * **Address normalization**: Standardize street abbreviations (St., Ave., Rd.), and remove any extra spaces.
  * **Name formatting**: Convert names to lowercase, remove extra spaces, and handle special characters consistently.

* **Hash sensitive data**: Consider hashing sensitive customer data before sending it. Always normalize your data before hashing to ensure consistent hash values:

  * Use SHA-256 hashing for phone numbers, addresses, and other PII.
  * The extension automatically hashes plain text emails - you can send either format.
  * Hash data consistently across all your tracking implementations.
    * **Example**: Normalize "John@Example.COM" → "john@example.com" before hashing.

* **Provide complete information**: Include as much customer information as possible for better matching:

  * Include multiple identifiers (email + phone, or email + name + address) when available.
  * Use external customer IDs to link conversion events to your CRM data.
  * Provide demographic data (age, gender) when available and compliant with privacy laws.

* **Consent Management**: Ensure you have proper consent for data collection:

  * Implement proper consent mechanisms before collecting customer data.
  * Respect user opt-out preferences and data deletion requests.
  * Use the Restricted Data Usage parameters for users who have opted out.
  * **Resources**:
    * [GDPR Compliance Guide](https://gdpr.eu/compliance/)
    * [CCPA Privacy Requirements](https://oag.ca.gov/privacy/ccpa)

* **Data Minimization**: Only send necessary data for conversion tracking:

  * Only collect and send data that's essential for attribution and optimization.
  * Regularly review and audit the data fields you're sending.
  * Remove unnecessary customer information to reduce privacy risk.

* **Use accurate timestamps**: Ensure event timestamps are accurate for proper attribution.
  * Use the actual time when the conversion occurred, not when you processed the data.
  * Ensure timestamps are in Unix epoch format (seconds since January 1, 1970).
  * Account for timezone differences in your timestamp calculations.

### Event Deduplication

Prevent duplicate conversion events to ensure accurate campaign measurement and avoid inflated performance metrics. Implement proper deduplication so that each conversion is counted only once, providing reliable data for your optimization decisions.

* **Provide unique event IDs**: Always use unique event IDs to prevent duplicate conversions.
* **Use consistent naming**: Apply consistent event naming across your implementation.

### Rate Limiting

The [!DNL Nextdoor] Conversion API is subject to rate limiting. The current rate limit is **100 requests/minute** per advertiser. If you surpass the rate limit, the API will return an `HTTP 429 Too Many Requests` error code.

## Conclusion {#conclusion}

The [!DNL Nextdoor] Conversion API Extension provides a powerful way to track conversions and measure the effectiveness of your [!DNL Nextdoor] advertising campaigns. By following this guide and implementing the best practices, you can ensure accurate conversion tracking and optimize your advertising performance.

For the most up-to-date information and additional resources, visit [[!DNL Nextdoor Ads Manager]](https://ads.nextdoor.com).

## Next steps {#next-steps}

This guide showed you how to send server-side event data to [!DNL Nextdoor] using the [!DNL Nextdoor] Conversion API extension. To learn more about event forwarding capabilities in [!DNL Adobe Experience Platform], see the [event forwarding overview](../../../ui/event-forwarding/overview.md).
