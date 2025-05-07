---
title: Algolia Event Forwarding Extension Overview
description: Learn how to use event forwarding to send search user behaviors to Algolia.
type: Documentation
feature: Data Collection, Event Forwarding
level: Beginner
role: User, Developer, Admin
topic: Integrations
---

# [!DNL Algolia] Event Forwarding Extension Overview

>[!NOTE]
>  
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](https://experienceleague.adobe.com/docs/experience-platform/tags/term-updates.html) for a consolidated reference of the terminology changes.

Algolia is a powerful search and discovery platform that enables businesses to deliver fast, relevant, and personalized search experiences. It uses AI-powered features to optimize search results and recommendations to help you find products, content, or information quickly.

Use the [!DNL Algolia] event forwarding extension to send user behavior events to [!DNL Algolia] using the [!DNL Insights] API, unlocking [!DNL Algolia]'s AI features. This document covers how to set up the extension and configure rules using the **[!UICONTROL Send Event]** action.

## Prerequisites {#prerequisites}

This document assumes that you are familiar with the relevant [!DNL Algolia] [!DNL Insights] APIs leveraged by the extension. For more information, please see [!DNL Algolia]'s documentation on [sending events](https://www.algolia.com/doc/guides/sending-events/getting-started/).

An [!DNL Algolia] account is required to use this extension. You can sign up for a free account on the [Algolia sign-up page](https://dashboard.algolia.com/users/sign_up/). In the [!DNL Algolia] account dashboard, make note of the following values that you need for configuration:

- Your Application ID
- Your Search API Key
- Your Index Name

## Configuring the [!DNL Algolia] Event Forwarding Extension {#installation-and-configuration}

Learn how to install and configure the [!DNL Algolia] Event Forwarding extension to send user behavior events to [!DNL Algolia].

### Installation {#installation}

To install the [!DNL Algolia] event forwarding extension:

1. Open your Platform Data Collection property.
2. Navigate to the **Extensions** tab and select **Catalog**.
3. Locate the [!DNL Algolia] event forwarding extension in the catalog.
4. Click **Install** to add the extension to your property.

### Configuration {#configuration}

Follow these steps to configure the [!DNL Algolia] event forwarding extension:

1. Navigate to the **Extensions** tab.
2. Click on the extension.
3. Select **Configure**.

![](../../../images/extensions/server/algolia/configure.png)

| Property | Description |
|----------|-------------|
| Application ID | Enter the [!UICONTROL Application ID] found in the [!DNL Algolia] Dashboard under [API Keys](https://www.algolia.com/account/api-keys/all) section. |
| Search API Key | Enter the [!UICONTROL Search API Key] found in the [!DNL Algolia] Dashboard under [API Keys](https://www.algolia.com/account/api-keys/all) section. |
| Index Name | Enter the [!UICONTROL Index Name] that contains your products or content. This **index** is used as the default value. |

## [!DNL Algolia] event forwarding extension action types {#action-types}

The [!DNL Algolia] event forwarding extension offers a single action type that can be used in the **Then** section of a rule:

### Send event

Configure the `Send event` action to forward events to [!DNL Algolia]:

1. Select **Rules**, then **Add Rule** or select an existing rule
2. In the "Then" portion of the rule, add an action
3. Select **Extension**: `[!DNL Algolia] Event Forwarding`
4. Select **Action Type**: `Send Events`

![](../../../images/extensions/server/algolia/send-event.png)

>[!NOTE]
>
>No additional configuration is required for this action.

## Implement the [!DNL Algolia] event field group {#algolia-field-group}

Ensure that the [!DNL Algolia] event field group is added to your schema before you use the [!DNL Algolia] event forwarding extension. It is one of the standard field groups provided through Platform.

![](https://your-domain.com/images/extensions/server/algolia/algolia-field-groups.png)

### Add the [!DNL Algolia] event field group to your schema

To add the [!DNL Algolia] event field group:

1. Navigate to **Schemas > Browse**
2. Add a new schema or update an existing schema you're using to send web events
3. Hover over the **Add** icon
4. Enter "[!DNL Algolia]" in the search box to narrow down the results
5. Click on the **[!DNL Algolia] Event Details** field group
6. Click the **Add field group** button
7. Click **Save**

![](https://your-domain.com/images/extensions/server/algolia/algolia-profile-field-group.png)

### Map and send data using the Data Collection tag

#### Step 1: Create a tag property with the web SDK

1. Create a Tag property
2. Install the **Adobe Experience Platform Web SDK** extension
3. Use this extension to map data from HTML to the **[!DNL Algolia] Event** field group

![](../../../images/extensions/server/algolia/html-dataset.png)

#### Step 2: Create a data element for XDM mapping

1. Create a Data Element using the **Adobe Experience Platform Web SDK** 
2. Select **XDM object** as the data element type
3. Map your data to the appropriate XDM fields, ensuring that [!DNL Algolia]-specific fields are populated

![](../../../images/extensions/server/algolia/xdm-mapping.png)

#### Step 3: Create a rule to send events

1. Create a new rule in your Tag property
2. Add appropriate event triggers (For example: page load, click events)
3. Add an action using **Adobe Experience Platform Web SDK**
4. Select **Send event** as the action type
5. Configure the action to use your XDM data element

![](../../../images/extensions/server/algolia/rule-action.png)

#### Step 4: Publish and test

1. Publish the rules and extension changes to your target environment
2. Use the Platform Debugger to verify the data is sent to Platform and forwarded to Algolia

![](../../../images/extensions/server/algolia/adobe-debugger.png)

### Verifying events in [!DNL Algolia]

To confirm events are being properly received by [!DNL Algolia]:

1. Navigate to your [!DNL Algolia] dashboard
2. Go to **Data Sources > Events > Debugger**
3. Click on the event that matches the event sent from [!DNL Algolia]'s event forwarding extension
4. Verify that all expected data is present in the event

![](../../../images/extensions/server/algolia/algolia-debugger.png)

## Common implementation scenarios

### Tracking product or content views

Use the extension to track when users view product/content pages, helping [!DNL Algolia] understand user interests.

### Tracking conversion events

Track add to cart/purchases and other conversion events to optimize [!DNL Algolia]'s AI-powered recommendations.

## Troubleshooting

### Events not appearing in [!DNL Algolia]

- Verify your Application ID and API Key are correct
- Check that your XDM schema includes the [!DNL Algolia] Event field group
- Ensure that data is properly mapped to the XDM fields
- Use both the Platform Debugger and [!DNL Algolia]'s event debugger to trace the flow of data

### Incorrect event data

- Review your data mapping in the XDM object data element
- Ensure event parameters match [!DNL Algolia]'s expected format

## Additional resources

- [[!DNL Algolia] Insights API Documentation](https://www.algolia.com/doc/rest-api/insights/)
- [[!DNL Algolia] Events Documentation](https://www.algolia.com/doc/guides/sending-events/getting-started/)
- [Adobe Experience Platform Event Forwarding Documentation](https://experienceleague.adobe.com/docs/experience-platform/tags/event-forwarding/overview.html)
- [[!DNL Algolia] AI Features Overview](https://www.algolia.com/products/ai-search/)