---
title: Algolia event forwarding extension overview
description: Learn how to use event forwarding to send search user behaviors to Algolia.
last-substantial-update: 2025-05-09
---

# [!DNL Algolia] event forwarding extension overview

>[!NOTE]
>  
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](https://experienceleague.adobe.com/docs/experience-platform/tags/term-updates.html) for a consolidated reference of the terminology changes.

Algolia is a powerful search and discovery platform that enables businesses to deliver fast, relevant, and personalized search experiences. It uses AI-powered features to optimize search results and recommendations to help you find products, content, or information quickly.

Use the [!DNL Algolia] event forwarding extension to send user behavior events to [!DNL Algolia] using the [!DNL Insights] API, unlocking [!DNL Algolia]'s AI features. This document covers how to set up the extension and configure rules using the **[!UICONTROL Send Event]** action.

## Prerequisites {#prerequisites}

This document assumes that you are familiar with the relevant [!DNL Algolia] [!DNL Insights] APIs leveraged by the extension. For more information, please see [!DNL Algolia]'s documentation on [sending events](https://www.algolia.com/doc/guides/sending-events/getting-started/).

You must have an [!DNL Algolia] account with access to the [!DNL Insights API] in order to use this extension. See the [!DNL Algolia] documentation to [sign up](https://dashboard.algolia.com/users/sign_up).

Before you proceed, ensure that you have the following values from your [!DNL Algolia] account dashboard:

- **Application ID**
- **Search API Key**
- **Index Name**

## Install the extension {#install}

To install the [!DNL Algolia] extension, navigate to the [!UICONTROL Data Collection] in Adobe Experience Platform and complete the following steps:

1. Navigate to the **Extensions** tab. 
2. Select **Catalog** and locate the **[!DNL Algolia] Event Forwarding** extension.
3. Click **Install** to add the extension to your property.

### Configure the extension {#configure-extension}

Follow the steps below to configure the [!DNL Algolia] event forwarding extension:

1. Navigate to the **Extensions** tab.
2. Select the **[!DNL Algolia]** extension.
3. Select **Configure**.

![](../../../images/extensions/server/algolia/configure.png)

| Property | Description |
|----------|-------------|
| Application ID | Enter the [!UICONTROL Application ID] found in the [!DNL Algolia] Dashboard under [API Keys](https://www.algolia.com/account/api-keys/all) section. |
| Search API Key | Enter the [!UICONTROL Search API Key] found in the [!DNL Algolia] Dashboard under [API Keys](https://www.algolia.com/account/api-keys/all) section. |
| Index Name | Enter the [!UICONTROL Index Name] that contains your products or content. This **index** is used as the default value. |

{style="table-layout:auto"}

## [!DNL Algolia] event forwarding extension action types {#action-types}

The [!DNL Algolia] event forwarding extension offers a single action type that can be used in the **Then** section of a rule:

### Send event

Configure the `Send event` action to forward events to [!DNL Algolia]:

1. Select **Rules**, then **Add Rule** or select an existing rule
2. In the "Then" portion of the rule, add an action
3. Select **Extension**: `[!DNL Algolia] Event Forwarding`
4. Select **Action Type**: `Send Events`

![Configuration of the Send Event action in the Algolia event forwarding extension.](https://your-domain.com/images/extensions/server/algolia/send-event.png)

>[!NOTE]
>
>No additional configuration is required for this action.

## Implement the [!DNL Algolia] event field group {#algolia-field-group}

Ensure that the [!DNL Algolia] event field group is added to your schema before you use the [!DNL Algolia] event forwarding extension. It is one of the standard field groups provided through Platform.

![Algolia event field group configuration](https://example.com/images/extensions/server/algolia/algolia-field-groups.png)

### Add the [!DNL Algolia] event field group to your schema

To add the [!DNL Algolia] event field group:

1. Navigate to **[!UICONTROL Schemas]** and select **[!UICONTROL Browse]**
2. Add a new schema or update an existing schema that you use to send web events
3. Hover over the **Add** icon
4. Enter "[!DNL Algolia]" in the search box to narrow down the results
5. Select **[!DNL Algolia] Event Details** field group
6. Select the **Add field group** button
7. Select **Save**

![Algolia profile field group configuration in Platform](https://your-domain.com/images/extensions/server/algolia/algolia-profile-field-group.png)

### Map and send data using the Data Collection tag

#### Step 1: Create a tag property with the web SDK

1. Create a Tag property
2. Install the **Adobe Experience Platform Web SDK** extension
3. Use this extension to map data from HTML to the **[!DNL Algolia] Event** field group

![Example of an HTML dataset being mapped to the Algolia event field group](../../../images/extensions/server/algolia/html-dataset.png)

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

![Configure a rule to send events using the Algolia extension](../../../images/extensions/server/algolia/adobe-debugger.png)

### Verify events in [!DNL Algolia]

To confirm events are being properly received by [!DNL Algolia]:

1. Navigate to your [!DNL Algolia] dashboard
2. Go to **Data Sources > Events > Debugger**
3. Click on the event that matches the event sent from [!DNL Algolia]'s event forwarding extension
4. Verify that all expected data is present in the event

![Verify events in the Algolia debugger](../../../images/extensions/server/algolia/algolia-debugger.png)

## Common implementation scenarios

### Track product or content views

Use the extension to track when users view product/content pages, helping [!DNL Algolia] understand user interests.

### Track conversion events

Track add to cart/purchases and other conversion events to optimize [!DNL Algolia]'s AI-powered recommendations.

## Troubleshoot

### Events not appearing in [!DNL Algolia]

- Verify that your Application ID and API Key are correct
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