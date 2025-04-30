---
title: Unauthenticated server-side retargeting
description: Learn how to retarget unauthenticated users by using ECIDs
feature: Use Cases, Customer Acquisition
exl-id: 008f4534-29e7-49b9-b0be-9e0c3962ee21
---
# Unauthenticated server-side retargeting {#unauthenticated-retargeting}

As third-party cookies lose effectiveness, businesses are transitioning to cookie-less solutions for personalized engagement and retargeting. Offsite retargeting enables businesses to reach high-intent users based on their previous interactions, without relying on client-side JavaScript. 

## Why to consider retargeting unauthenticated visitors {#why-use-case}

By integrating Adobe Experience Platform's Web SDK and server-side event forwarding, you can streamline event streaming and data forwarding. This enables seamless retargeting of unauthenticated users using ECIDs (Experience Cloud IDs), ensuring consistent engagement across platforms. With this solution, you can increase conversion opportunities by effectively retargeting unauthenticated users based on their past interactions.

## Prerequisites and planning {#prerequisites-and-planning}

Before proceeding with the deployment of the Web SDK and the Event Forwarding configuration, ensure the following:

1. **Adobe with Web SDK setup**: The Adobe Web SDK must be implemented to facilitate event collection and data forwarding.

2. **Adobe Experience Platform Edge Network configuration**: Ensure the Edge Network is configured to support real-time event forwarding for offsite retargeting.

3. **ECID Synchronization**: Make sure ECIDs are synchronized across platforms to enable seamless audience matching.

## How to achieve offsite retargeting {#achieve-offsite-retargeting}

1. **Deploy Web SDK**: Implement the Adobe Web SDK on your website to capture real-time event data, including user interactions such as page views, clicks, and other behaviors.

2. **Enable Event Forwarding**: Configure event forwarding within Platform to send collected user data, ensuring efficient data transfer for audience activation.

3. **Configure Server-Side Activation**: Use Adobe's server-side capabilities to activate retargeting audiences based on ECIDs, ensuring accurate audience targeting across platforms.

4. **Create Retargeted Audiences**: Utilize Platform's audience segmentation tools to define focused audiences based on user behavior, such as views, interactions, or abandoned carts.

5. **Activate Audiences**: Once your retargeted audiences are created, activate them to deliver personalized content, ensuring users are re-engaged based on their prior interactions with your site.

## Create an audience using the computed attribute {#create-audience}

To effectively retarget high-intent users, create audiences based on their past interactions with your website. Use Platform to segment users using computed attributes.

1. **Identify key behaviors**: Select user actions to track such as page views or clicks.

2. **Create audiences**: Use audience segmentation tools to group users based on behaviors. 

3. **Sync ECID**: Ensure ECIDs are synchronized across platforms for accurate audience matching.

## Activate your audience {#activate-audience}

Once you've create your audience, activate it across platforms to engage users.

1. **Review audiences**: Ensure the audience segments reflect the right behaviors.

2. **Create activation rules**: Set conditions for when and how users are engaged based on actions.

3. **Push to Platform**: Activate the audience.

4. **Monitor performance**: Track audience performance and adjust as needed.

## Configure the offsite retargeting extension {#configure-extension}

### Deploy the Web SDK

Ensure that the Adobe Web SDK is properly integrated into your website. This SDK allows the collection of real-time event data, which is crucial for efficient retargeting.

### Enable event forwarding

Set up an event forwarding within Platform to send collected user behavior data to retargeting platforms. Event forwarding ensures that data is transmitted efficiently, enabling businesses to target high-intent users without relying on cookies.

### Attach to retargeting rule

Ensure that the offsite retargeting extension is attached to a valid event rule in Adobe Experience Platform Data Collection. Typically, a global rule should be created to fire on key actions, such as `page load` or specific user interactions.

To learn more about configuring the extension, read the [Event forwarding](https://experienceleague.adobe.com/en/docs/experience-platform/tags/event-forwarding/getting-started) documentation.

## Other use cases {#other-use-cases}

This document provides an overview of the key use cases and technical considerations for successfully developing and utilizing the Web SDK and Event Forwarding setup. By following the outlined procedures and ensuring the necessary prerequisites are met, you can significantly improve their data tracking and analytics capabilities. 

You can explore further use cases enabled through partner data support in Real-Time CDP:

- [Engage and acquire new customers](./prospecting.md) by using partner data.
- [Personalize onsite experiences](./offsite-retargeting.md) with partner-aided visitor recognition.
- [Supplement First-party profiles](./supplement-first-party-profiles.md) with Partner-provided attributes.
