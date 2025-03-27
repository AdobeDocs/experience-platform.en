---
keywords: adform integration; adform;
title: Adform integration for unauthenticated retargeting
description: This Adobe Experience Platform integration allows you to retarget users based on ECID.
last-substantial-update: 2025-03-26
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