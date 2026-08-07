---
keywords: adform integration; adform;
title: Adform integration for unauthenticated retargeting
description: This Adobe Experience Platform integration allows you to retarget users based on ECID.
last-substantial-update: 2025-03-26T00:00:00.000Z
exl-id: 37eb9453-fc3c-481e-94ea-54d9b1545631
TQID: https://experienceleague.adobe.com/sY5gD03C3Jfqps-Q7CPc-H5JshzJygn-isYS3-lBkx4
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: e43347a8-f2c5-4aa4-8623-6f13875d7e3a
    internal-label: Target
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a075b2c1-7748-4328-b7f6-343aa314616a
    internal-label: Campaigns
  - id: adee20bd-51f4-461d-b9db-d215f8756eeb
    internal-label: Audiences
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
  - id: f6ff4d13-7b5c-4533-8556-95e76673d4cb
    internal-label: Properties
  - id: f9a2105e-7a47-4e85-9193-31a519a2cb83
    internal-label: Data elements
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# [!DNL Adform] extension overview

The [[!DNL Adform]](https://www.adformhelp.com/hc/en-us/articles/29635608709137-Use-the-Adform-S2S-Site-Tracking-Extension-With-Adobe-Experience-Cloud) extension enables server-side event forwarding in Adobe Experience Platform, allowing advertisers, media agencies and publishers to synchronize data directly with Adform's ID Fusion system. This integration enables businesses to engage audiences across multiple channels, improving campaign performance and provides tailored solutions to refine digital advertising strategies and maximize ad spend effectiveness.

Unlike traditional client-side tracking, this extension eliminates the need for third-party cookies by leveraging first-party IDs - specifically, the ECID (Experience Cloud ID) which is synchronized with Adform. This allows for seamless audience retargeting without requiring client-side JavaScript deployment. 

This guide covers how to install, configure and deploy the extension to forward events from a brand's digital properties via Adobe's Edge Network to Adform to enable seamless retargeting of visitors. 

## Offsite retargeting

Through offsite retargeting, you can re-engage potential customers who visited your website but didn't convert. Adform helps you reach these audiences across various platforms, reinforcing brand presence and increasing conversion opportunities. Use this integration to:

* Re-engage unknown visitors without the use of third-party cookies.
* Activate audiences directly on ECIDs without using third-party cookie-alternate identifiers or additional tags on your digital properties.

Adform helps you to:

* Easily turn your 1st party audiences denoted on ECIDs into addressable IDs for digital ad campaigns. 
* Link ECIDs to 40+ biddable ID solutions to optimize your reach, frequency, and performance against your targeted audiences.

### Server-side audience activation with [!DNL Adform] {#server-side-activation}

Unlike traditional client-side ID deployments, this integration does not require you to deploy an ID vendor's solution on your digital properties. Instead it enables server-side audience activation by leveraging ECIDs that are already synchronized with Adform. Key benefits include:

* **No client-side JavaScript deployment**: You do not need to manage client-side visitor recognition logic or decrypt client-side IDs into longer-lived stable versions.
* **Seamless audience synchronization**: ECIDs are mapped to Adform's internal ID graph, allowing for efficient retargeting across platforms.
* **Enhanced reach and deduplication**: The ID Fusion graph connects ECIDs to multiple identifiers ensuring high-qualitiy audience matching.

## Prerequisites {#prerequisites}

Before integrating Adform with Adobe, ensure the following prerequisites are met:

1. **Adobe Web SDK setup**: The Adobe Web SDK must be implemented to facilitate data collection and event forwarding.

2. **CDP or Connection SKU**: You must have either the Adobe Customer Data Platform (CDP) Prime or Ultimate SKU, or the Connection SKU, to enable seamless client-side and server-side communication. 

3. **Adobe Experience Platform Edge Network configuration**: 
    * Ensure that the Edge Network is configured to support real-time event forwarding for offsite retargeting. See Adobe's [Event Forwarding Getting Started guide](https://experienceleague.adobe.com/en/docs/experience-platform/tags/event-forwarding/getting-started) for more information.
    * This step is crucial for transmitting data to Adform's server-side endpoint efficiently.

Once these prerequisites are in place, you can continue to configure and deploy the [!DNL Adform] extension.

## Configure the [!DNL Adform] extension {#configure-adform-extension}

To configure the [!DNL Adform] extension, follow the steps outlined in the sections below.

### Install and configure the extension

Navigate to the [!DNL Adform extension] in the event forwarding UI and enter the required values:

| Input | Description |
| --- | --- |
| Tracking Setup ID | The unique identiier provided by Adform for tracking events.|
| Global Domain | Use `a1.adform.net` to optimize performance and avoid regional latency issues.|

Save the configuration after entering these details.

<!-- ![Installing and configuring the Adform extension in Adobe Experience Platorm]() -->

### Define tracking parameters

The "track" action is the primary event rule. It triggers based on predefined actions, typically `page load.` Include the following parameters:

**Required parameters:**

| Parameters | Description |
| --- | --- |
| `Page Name`| Identifies the page or user action. |
| `User Agent` | Captures information for audience matching. |
| `IP Address` | Crucial for accurate targeting and retargeting. |

**Recommended parameters:**

| Parameters | Description |
| --- | --- |
| `Page URL`| Identifies the page or user action. |
| `Referral URL` | Captures information for audience matching. |
| `ECID` | Crucial for accurate targeting and retargeting. |
| `Source Domain` | Crucial for accurate targeting and retargeting. |

<!-- ![Tracking parameters for Adform]() -->

### Attach rule

The extension must be attached to a rule to function properly. If no conditions are set, create a global rule to ensure it always runs. 

>[!NOTE]
>
>If the extension doesn't fire, verify that it is attached to a valid rule in Adobe Experience Platform Data Collection.

<!-- ![Attach a rule to the Adform extension]() -->

## Validate and deploy

Ensure that the extension is installed and configured correctly and that all the required data elements are mapped including:

* [ECID](/help/identity-service/features/ecid.md)
* Page Name 
* Referral URL 
* User Agent
* IP Address

Once you input all the required fields and finish testing, select **build** to deploy the extension.

## Next steps

You should now understand how Adform integrates with Adobe's server-side capablities, and can assess the feasibility of the integration within your existing infrastructure. For more information, refer to [Adform's official documentation](https://www.adformhelp.com/hc/en-us/articles/29635608709137-Use-the-Adform-S2S-Site-Tracking-Extension-With-Adobe-Experience-Cloud).
