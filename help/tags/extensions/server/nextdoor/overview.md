---
title: Nextdoor Conversion API Extension
description: Learn how to use the Nextdoor Conversion API extension to send conversion events to track the performance of you advertising campaigns.
last-substantial-update: 2025-10-17
---

# Nextdoor Conversion API Extension - User Guide

## Overview

The Nextdoor Conversion API Extension for Adobe Experience Platform Launch allows you to send conversion events directly to Nextdoor's Conversion API. This extension helps you track and measure the performance of your Nextdoor advertising campaigns by sending server-side conversion data.

## Prerequisites

Before using this extension, you'll need:

- **Nextdoor Ads Manager Account**: Access to Nextdoor's advertising platform
- **Data Source ID**: Obtained from your Nextdoor Ads Manager
- **Access Token**: API access token from Nextdoor for authentication
- **Adobe Experience Platform Launch**: Property with appropriate permissions

## Installation

1. **Access Adobe Experience Platform Launch**

   - Log into your Adobe Experience Platform Launch account
   - Navigate to your desired property

2. **Install the Extension**

   - Go to the Extensions catalog
   - Search for "Nextdoor Conversion API Extension"
   - Click "Install" and follow the prompts

3. **Configure the Extension**
   - After installation, you'll be prompted to configure the extension
   - See the [Configuration](#configuration) section below

## Configuration

The extension requires global configuration before you can create actions. This configuration applies to all actions within your property.

![Extension Configuration](extension-configuration-view.png "Extension Configuration View")

### Required Configuration Fields

| Field              | Description                                       | Where to Find                                        | Format                   | Security Notes                         |
| ------------------ | ------------------------------------------------- | ---------------------------------------------------- | ------------------------ | -------------------------------------- |
| **Data Source ID** | Your unique data source identifier from Nextdoor  | Nextdoor Ads Manager → Conversion API settings       | Alphanumeric string      | Safe to share within your organization |
| **Access Token**   | API authentication token for secure communication | Nextdoor Ads Manager → API settings → Generate Token | Long alphanumeric string | Keep secure - provides account access  |

### Configuration Example

Here's how the configuration looks when filled out:

![Extension Configuration Filled](extension-configuration-filled.png "Extension Configuration Filled")

## Setting Up Actions

After configuring the extension, you can create actions to send conversion events. Actions are triggered by rules you define in Launch.

### Creating a New Action

1. **Navigate to Rules**

   - Go to the Rules section in your Launch property
   - Create a new rule or edit an existing one

2. **Add Action**
   - In the rule builder, add a new action
   - Select "Nextdoor Conversion API Extension" as the extension
   - Choose "Report Web Conversions" as the action type

### Action Configuration Interface

The action configuration interface is organized into three main sections:

![Extension Action View](extension-action-view.png "Extension Action View")

#### 1. Main-body Parameters

These are the core parameters that define the conversion event itself:

| Parameter                   | Description                                            | Data Type         | Required                            | Options/Format                                                                                                                               | Example                                        |
| --------------------------- | ------------------------------------------------------ | ----------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| **Event Name**              | Specifies the type of conversion event being tracked   | String (dropdown) | **Required**                        | Purchase, Lead, Sign Up, Add to Cart, Initiate Checkout, Page View, Search, View Content, Add to Wishlist, Subscribe, Custom Conversion 1-10 | `Purchase`, `Lead`                             |
| **Event ID**                | Unique identifier to prevent duplicate event reporting | String            | Optional (auto-generated if blank)  | Any unique string identifier                                                                                                                 | `order_12345`, `lead_abc123`, `evt_1234567890` |
| **Event Time (Unix Epoch)** | Timestamp when the conversion event occurred           | Integer           | Optional (defaults to current time) | Unix timestamp in seconds                                                                                                                    | `1703980800` (Dec 30, 2023)                    |
| **Action Source**           | Channel or platform where the conversion occurred      | String (dropdown) | **Required**                        | website, email, app, phone_call, chat, physical_store, system_generated, other                                                               | `website`, `app`                               |
| **Data Source ID**          | Override the global data source ID for specific events | String            | Optional (inherits from config)     | Alphanumeric string                                                                                                                          | `12345`                                        |
| **Action Source URL**       | The specific URL where the conversion occurred         | String            | Optional                            | Full URL including protocol                                                                                                                  | `https://example.com/checkout/success`         |

##### Privacy and Compliance Parameters

| Parameter                           | Description                                         | Data Type | Required | Values/Format                          | Example                          |
| ----------------------------------- | --------------------------------------------------- | --------- | -------- | -------------------------------------- | -------------------------------- |
| **Restricted Data Usage**           | Flag to restrict data usage for privacy compliance  | Integer   | Optional | 0 = No restrictions, 1 = Restrict      | `0`, `1`                         |
| **Restricted Data Usage (Country)** | Country-specific data processing restrictions       | Integer   | Optional | 1 = USA (other codes may be supported) | `1`                              |
| **Restricted Data Usage (State)**   | State-specific restrictions for US users            | Integer   | Optional | 1000 = CA, 1001 = CO, etc.             | `1000`, `1001`                   |
| **Test Event**                      | Marks the event as a test for development/debugging | String    | Optional | Any non-empty string                   | `test`, `development`, `staging` |

#### 2. Customer Information Parameters

**Important**: At least one customer information parameter is required for proper event attribution and matching.

| Parameter             | Description                                    | Data Type | Required                             | Format                               | Example                    |
| --------------------- | ---------------------------------------------- | --------- | ------------------------------------ | ------------------------------------ | -------------------------- |
| **Email**             | Customer's email address for identity matching | String    | At least one customer field required | Plain text or SHA-256 hash           | `user@example.com`         |
| **Phone Number**      | Customer's phone number for identity matching  | String    | At least one customer field required | E.164 format (hashed with SHA-256)   | `+15551234567`             |
| **First Name**        | Customer's first name for enhanced matching    | String    | At least one customer field required | Plain text or SHA-256 hash           | `John`                     |
| **Last Name**         | Customer's last name for enhanced matching     | String    | At least one customer field required | Plain text or SHA-256 hash           | `Smith`                    |
| **Date of Birth**     | Customer's birth date for demographic matching | String    | Optional                             | YYYYMMDD (SHA-256 hashed)            | `19900115`                 |
| **Gender**            | Customer's gender for demographic targeting    | String    | Optional                             | M/F/O (SHA-256 hashed)               | `M`, `F`, `O`              |
| **External ID**       | Your internal customer identifier              | String    | Optional                             | Any unique string                    | `customer_12345`           |
| **Street Address**    | Customer's street address                      | String    | Optional                             | SHA-256 hashed                       | `123 Main Street` (hashed) |
| **City**              | Customer's city                                | String    | Optional                             | SHA-256 hashed                       | `San Francisco` (hashed)   |
| **State**             | Customer's state/province                      | String    | Optional                             | Two-letter code (SHA-256 hashed)     | `CA`, `NY` (hashed)        |
| **Zip Code**          | Customer's postal code                         | String    | Optional                             | First 5 digits US (SHA-256 hashed)   | `94102` (hashed)           |
| **Country**           | Customer's country                             | String    | Optional                             | ISO-3166-1 alpha-2 (SHA-256 hashed)  | `US`, `CA` (hashed)        |
| **Click ID**          | Nextdoor click identifier for attribution      | String    | Optional                             | Captured from `ndclid` URL parameter | `nd_click_12345abcdef`     |
| **Client IP Address** | IP address of the user's device                | String    | Optional                             | IPv4 or IPv6 address                 | `192.168.1.1`              |
| **Client User Agent** | Browser user agent string                      | String    | Optional                             | Raw browser user-agent string        | `Mozilla/5.0 (Windows...)` |

#### 3. Advertiser-custom Parameters

These parameters provide additional context about the conversion event:

##### E-commerce Parameters

| Parameter             | Description                                   | Data Type           | Required                         | Format                                  | Example                             |
| --------------------- | --------------------------------------------- | ------------------- | -------------------------------- | --------------------------------------- | ----------------------------------- |
| **Order Value**       | Total value of the purchase transaction       | String              | **REQUIRED for Purchase events** | ISO 4217 Currency + Amount (no spaces)  | `USD123.45`, `EUR99.99`             |
| **Order ID**          | Unique transaction or order identifier        | String              | Optional                         | Any unique string                       | `order_12345`, `txn_abc123`         |
| **Delivery Category** | Method of product/service delivery            | String              | Optional                         | `in_store`, `curbside`, `home_delivery` | `home_delivery`                     |
| **Product Context**   | Detailed information about purchased products | String (JSON array) | Optional                         | JSON array of product objects           | `[{"id":"SKU123","name":"Widget"}]` |

##### Mobile App Parameters (Required when Action Source = 'APP')

| Parameter                | Description                                  | Data Type | Required                    | Format                                    | Example                        |
| ------------------------ | -------------------------------------------- | --------- | --------------------------- | ----------------------------------------- | ------------------------------ |
| **App ID**               | Mobile application identifier                | String    | **REQUIRED for APP events** | Bundle ID (iOS) or Package Name (Android) | `com.company.app`, `123456789` |
| **App Tracking Enabled** | iOS App Tracking Transparency consent status | String    | **REQUIRED for APP events** | Boolean string                            | `true`, `false`                |
| **Platform**             | Mobile operating system                      | String    | **REQUIRED for APP events** | `iOS` or `Android`                        | `iOS`, `Android`               |
| **App Version**          | Version of the mobile application            | String    | **REQUIRED for APP events** | Version string as defined by your app     | `1.2.3`, `2.0.0-beta`          |

### Example Configuration

Here's an example of a configured Purchase event:

![Extension Action Filled](extension-action-filled.png "Extension Action Filled")

In this example:

| Field             | Value            | Purpose                                  |
| ----------------- | ---------------- | ---------------------------------------- |
| **Event Name**    | Purchase         | Identifies this as a purchase conversion |
| **Action Source** | website          | Indicates conversion occurred on website |
| **Email**         | user@example.com | Customer identifier for attribution      |
| **Order Value**   | USD123.45        | Transaction value for ROAS calculation   |

## Event Types

The extension supports various event types for different conversion scenarios:

### Supported Event Types

| Event Name               | Event Type | Description                           | Use Case                                | Required Fields                        | Notes                                 |
| ------------------------ | ---------- | ------------------------------------- | --------------------------------------- | -------------------------------------- | ------------------------------------- |
| **Purchase**             | Standard   | Completed purchase transaction        | E-commerce conversions                  | Event Name, Order Value, Customer Info | Most important for ROAS optimization  |
| **Lead**                 | Standard   | Lead generation or inquiry            | Form submissions, contact requests      | Event Name, Customer Info              | High-value conversion for B2B         |
| **Sign Up**              | Standard   | User registration or account creation | Newsletter signup, account registration | Event Name, Customer Info              | Top-funnel conversion tracking        |
| **Add to Cart**          | Standard   | Product added to shopping cart        | E-commerce funnel tracking              | Event Name, Customer Info              | Mid-funnel engagement signal          |
| **Initiate Checkout**    | Standard   | Checkout process started              | Purchase intent tracking                | Event Name, Customer Info              | Strong purchase intent indicator      |
| **Page View**            | Standard   | Important page visited                | Content engagement, landing pages       | Event Name, Customer Info              | Use for high-value pages only         |
| **Search**               | Standard   | Search performed on site              | Product/content discovery               | Event Name, Customer Info              | Indicates active user engagement      |
| **View Content**         | Standard   | Content or product viewed             | Product page views, content engagement  | Event Name, Customer Info              | Useful for remarketing audiences      |
| **Add to Wishlist**      | Standard   | Product added to wishlist             | Future purchase intent                  | Event Name, Customer Info              | Indicates strong product interest     |
| **Subscribe**            | Standard   | Subscription to service/newsletter    | Recurring revenue, engagement           | Event Name, Customer Info              | High lifetime value indicator         |
| **Custom Conversion 1**  | Custom     | Business-specific conversion event    | Define your own conversion type         | Event Name, Customer Info              | Customize for unique business actions |
| **Custom Conversion 2**  | Custom     | Business-specific conversion event    | Define your own conversion type         | Event Name, Customer Info              | Customize for unique business actions |
| **Custom Conversion 3**  | Custom     | Business-specific conversion event    | Define your own conversion type         | Event Name, Customer Info              | Customize for unique business actions |
| **Custom Conversion 4**  | Custom     | Business-specific conversion event    | Define your own conversion type         | Event Name, Customer Info              | Customize for unique business actions |
| **Custom Conversion 5**  | Custom     | Business-specific conversion event    | Define your own conversion type         | Event Name, Customer Info              | Customize for unique business actions |
| **Custom Conversion 6**  | Custom     | Business-specific conversion event    | Define your own conversion type         | Event Name, Customer Info              | Customize for unique business actions |
| **Custom Conversion 7**  | Custom     | Business-specific conversion event    | Define your own conversion type         | Event Name, Customer Info              | Customize for unique business actions |
| **Custom Conversion 8**  | Custom     | Business-specific conversion event    | Define your own conversion type         | Event Name, Customer Info              | Customize for unique business actions |
| **Custom Conversion 9**  | Custom     | Business-specific conversion event    | Define your own conversion type         | Event Name, Customer Info              | Customize for unique business actions |
| **Custom Conversion 10** | Custom     | Business-specific conversion event    | Define your own conversion type         | Event Name, Customer Info              | Customize for unique business actions |

## Field Reference

### Data Element Integration

All fields support Adobe Launch data elements. Click the data element icon (📊) next to any field to:

1. **Select Existing Data Elements**: Choose from previously created data elements
2. **Create New Data Elements**: Define new data elements on the fly
3. **Use Dynamic Values**: Populate fields with dynamic content from your website

## Best Practices

### 1. Data Quality and Privacy Compliance

- **Consistent Formatting**: Use consistent formats for emails, phone numbers, and other data

  - **Email Normalization**: Convert to lowercase, trim whitespace, remove dots from Gmail addresses
  - **Phone Number Standardization**: Use E.164 format (+1234567890) for international compatibility
  - **Address Normalization**: Standardize street abbreviations (St., Ave., Rd.), remove extra spaces
  - **Name Formatting**: Convert to lowercase, remove extra spaces, handle special characters consistently
  - **Helpful Resources**:
    - [Google's Email Normalization Guide](https://developers.google.com/gmail/markup/reference/formats/email-address)
    - [E.164 Phone Number Format Standard](https://en.wikipedia.org/wiki/E.164)
    - [USPS Address Standardization Guidelines](https://pe.usps.com/text/pub28/28c2_001.htm)

- **Data Hashing**: Consider hashing sensitive customer data before sending

  - **Important**: Always normalize data before hashing to ensure consistent hash values
  - Use SHA-256 hashing for phone numbers, addresses, and other PII
  - The extension automatically hashes plain text emails - you can send either format
  - Hash data consistently across all your tracking implementations
  - **Example**: Normalize "John@Example.COM" → "john@example.com" before hashing
  - **Resource**: [SHA-256 Hashing Best Practices](https://en.wikipedia.org/wiki/SHA-2)

- **Complete Information**: Provide as much customer information as possible for better matching

  - Include multiple identifiers (email + phone, or email + name + address) when available
  - Use external customer IDs to link conversion events to your CRM data
  - Provide demographic data (age, gender) when available and compliant with privacy laws

- **Consent Management**: Ensure you have proper consent for data collection

  - Implement proper consent mechanisms before collecting customer data
  - Respect user opt-out preferences and data deletion requests
  - Use the Restricted Data Usage parameters for users who have opted out
  - **Resources**:
    - [GDPR Compliance Guide](https://gdpr.eu/compliance/)
    - [CCPA Privacy Requirements](https://oag.ca.gov/privacy/ccpa)

- **Data Minimization**: Only send necessary data for conversion tracking

  - Only collect and send data that's essential for attribution and optimization
  - Regularly review and audit the data fields you're sending
  - Remove unnecessary customer information to reduce privacy risk

- **Accurate Timestamps**: Use accurate event timestamps for proper attribution
  - Use the actual time when the conversion occurred, not when the data was processed
  - Ensure timestamps are in Unix epoch format (seconds since January 1, 1970)
  - Account for timezone differences in your timestamp calculations

### 2. Event Deduplication

- **Unique Event IDs**: Always provide unique event IDs to prevent duplicate conversions
- **Consistent Naming**: Use consistent event naming across your implementation

## Conclusion

The Nextdoor Conversion API Extension provides a powerful way to track conversions and measure the effectiveness of your Nextdoor advertising campaigns. By following this guide and implementing best practices, you can ensure accurate conversion tracking and optimize your advertising performance.

For the most up-to-date information and additional resources, visit the [Nextdoor Ads Manager](https://ads.nextdoor.com) and [Adobe Experience Platform Launch documentation](https://experienceleague.adobe.com/docs/experience-platform/tags/home.html).