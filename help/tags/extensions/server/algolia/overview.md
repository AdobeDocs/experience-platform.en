---
title: Algolia Event Forwarding Extension Overview
description: Learn how to set up and use the Algolia event forwarding extension in Adobe Experience Platform. Forward user behavior data via the Insights API, configure rules, map XDM fields, and verify event delivery.
last-substantial-update: 2025-05-09
---

# [!DNL Algolia] event forwarding extension overview {#overview}

>[!NOTE]
>
>Adobe Experience Platform Launch is now part of Adobe Experience Platform's data collection technologies. As a result, terminology updates have been made across the product documentation. For a comprehensive list of these changes, refer to the [terminology updates guide](../../../../tags/term-updates.md).

Use [!DNL Algolia] to deliver fast, relevant, and personalized search experiences. With AI-powered optimization, you can enhance search results and recommendations to help users quickly find the products, content, or information they need.

Use the [!DNL Algolia] event forwarding extension to send user behavior events to [!DNL Algolia] through the [!DNL Insights API]. This behavioral data enables AI-powered recommendations, personalized experiences, and intelligent search capabilities.

## Prerequisites {#prerequisites}

Before you install the extension, make sure you meet the following requirements:

- You have a [!DNL Algolia] account with access to the [!DNL Insights API]. If you don't have an account, [sign up](https://dashboard.algolia.com/users/sign_up) and enable access to the API.

- You understand how to use the [!DNL Algolia] [!DNL Insights API]. For an overview of how to send events, see [sending events with the Insights API](https://www.algolia.com/doc/guides/sending-events/getting-started/).

- You have the following values from your [!DNL Algolia] account dashboard:
    - **[!UICONTROL Application ID]**
    - **[!UICONTROL Search API Key]**
    - **[!UICONTROL Index Name]**

## Install the extension {#install}

To install the [!DNL Algolia] extension, follow these steps:

- Navigate to **[!UICONTROL Data Collection]** in [!DNL Adobe Experience Platform].
- Select the **[!UICONTROL Extensions]** tab.
- Open the **[!UICONTROL Catalog]** and locate the **[!UICONTROL Algolia Event Forwarding]** extension.
- Click **[!UICONTROL Install]** to add the extension to your property.

### Configure the extension {#configure-extension}

Follow the steps below to configure the [!DNL Algolia] event forwarding extension:

1. Navigate to the **[!UICONTROL Extensions]** tab.
2. Select the **[!UICONTROL Algolia]** extension.
3. Select **[!UICONTROL Configure]**.

![Configuration screen for the Algolia event forwarding extension in Adobe Experience Platform](../../../images/extensions/server/algolia/configure.png)

| Property | Description |
|----------|-------------|
| **[!UICONTROL Application ID]** | Enter the [!UICONTROL Application ID] found in the Algolia Dashboard under the [API Keys](https://www.algolia.com/account/api-keys/all) section. |
| **[!UICONTROL Search API Key]** | Enter the [!UICONTROL Search API Key] found in the Algolia Dashboard under the [API Keys](https://www.algolia.com/account/api-keys/all) section. |
| **[!UICONTROL Index Name]** | Enter the [!UICONTROL Index Name] that contains your products or content. This index is used as the default value. |

{style="table-layout:auto"}

## [!DNL Algolia] event forwarding extension action types {#action-types}

The [!DNL Algolia] event forwarding extension offers a single action type that can be used in the **[!UICONTROL Then]** section of a rule:

### Send event {#send-event}

Configure the **[!UICONTROL Send event]** action to forward events to [!DNL Algolia]:

1. Select **[!UICONTROL Rules]**, then **[!UICONTROL Add Rule]** or select an existing rule.
2. In the **[!UICONTROL Then]** portion of the rule, add an action.
3. Select **[!UICONTROL Extension]**: [!DNL Algolia] Event Forwarding.
4. Select **[!UICONTROL Action Type]**: **[!UICONTROL Send Events]**.

![Configuration of the Send Event action in the Algolia vent forwarding extension.](../../../images/extensions/server/algolia/send-event.png)

>[!NOTE]
>
>No additional configuration is required for this action.

## Implement the [!DNL Algolia] event field group {#algolia-field-group}

Ensure that the [!DNL Algolia] event field group is added to your schema before you use the [!DNL Algolia] event forwarding extension. It is one of the standard field groups provided through Adobe Experience Platform.

![Algolia event field group configuration](../../../images/extensions/server/algolia/algolia-field-groups.png)

### Add the [!DNL Algolia] event field group to your schema {#add-algolia-field-group}

To add the [!DNL Algolia] event field group:

1. Navigate to **[!UICONTROL Schemas]** and select **[!UICONTROL Browse]**.
2. Add a new schema or update an existing schema that you use to send web events.
3. Hover over the **[!UICONTROL Add]** icon.
4. Enter "[!DNL Algolia]" in the search box to narrow down the results.
5. Select **[!DNL Algolia] Event Details** field group.
6. Select the **[!UICONTROL Add field group]** button.
7. Select **[!UICONTROL Save]**.

![Algolia profile field group configuration in [!DNL Adobe Experience Platform]](../../../images/extensions/server/algolia/algolia-profile-field-group.png)

### Map and send data using the [!UICONTROL Data Collection] tag

The [!DNL Algolia] event forwarding extension can be used with the **[!DNL Adobe Experience Platform Web SDK]** to send data from your website to [!DNL Algolia]. This is done by creating a tag property, mapping data to the [!DNL XDM] object, and configuring rules to send events.

#### Step 1: Create a Tag property with the web SDK

1. Create a [!UICONTROL Tag] property.
2. Install the [!DNL Adobe Experience Platform Web SDK] extension.
3. Use this extension to map data from HTML to the **[!DNL Algolia] Event** field group.

![Example of an HTML dataset being mapped to the Algolia event field group](../../../images/extensions/server/algolia/html-dataset.png)

#### Step 2: Create a data element for [!DNL XDM] mapping

1. Create a [!UICONTROL Data Element] using the **[!DNL Adobe Experience Platform Web SDK]**.
2. Select **[!UICONTROL XDM object]** as the data element type.
3. Map your data to the appropriate [!DNL XDM] fields, ensuring that [!DNL Algolia]-specific fields are populated.

![](../../../images/extensions/server/algolia/xdm-mapping.png)

#### Step 3: Create a rule to send events

1. Create a new rule in your [!UICONTROL Tag] property.
2. Add appropriate event triggers (For example: page load, click events).
3. Add an action using **[!DNL Adobe Experience Platform Web SDK]**.
4. Select **[!UICONTROL Send event]** as the action type.
5. Configure the action to use your [!DNL XDM] data element.

![Example of configuring a rule action in the Algolia event forwarding extension](../../../images/extensions/server/algolia/rule-action.png)

#### Step 4: Publish and test

1. Publish the rules and extension changes to your target environment.
2. Use the [!DNL Adobe Experience Platform Debugger] to verify the data is sent to Adobe Experience Platform and forwarded to [!DNL Algolia].

![Configure a rule to send events using the Algolia extension](../../../images/extensions/server/algolia/adobe-debugger.png)

### Verify events in [!DNL Algolia]

To confirm that events are being properly received by [!DNL Algolia], complete the following steps:

1. Navigate to your [!DNL Algolia] dashboard.
2. Go to **[!UICONTROL Data Sources > Events > Debugger]**.
3. Select the event that matches the event sent from [!DNL Algolia]'s event forwarding extension.
4. Verify that all expected data is present in the event.

![Verify events in the Algolia debugger](../../../images/extensions/server/algolia/algolia-debugger.png)

## Common implementation scenarios

Here are some common scenarios where you can use the [!DNL Algolia] event forwarding extension:

### Track product or content views

Use the extension to track when users view product/content pages, helping [!DNL Algolia] understand user interests.

### Track conversion events

Track add-to-cart/purchases and other conversion events to optimize [!DNL Algolia]'s AI-powered recommendations.

## Troubleshoot

If you encounter issues while implementing the [!DNL Algolia] event forwarding extension, consider the following troubleshooting steps:

### Events do not appear in [!DNL Algolia]

If events are not appearing in [!DNL Algolia], check the following: 

- Verify that your **[!UICONTROL Application ID]** and **[!UICONTROL API Key]** are correct.
- Check that your [!DNL XDM] schema includes the [!DNL Algolia] Event field group.
- Ensure that data is properly mapped to the [!DNL XDM] fields.
- Use both the [!DNL Adobe Experience Platform Debugger] and [!DNL Algolia]'s event debugger to trace the flow of data.

### Incorrect event data

- Review your data mapping in the [!DNL XDM] object data element.
- Ensure event parameters match [!DNL Algolia]'s expected format.

## Additional resources

- [[!DNL Algolia] Insights API Documentation](https://www.algolia.com/doc/rest-api/insights/)
- [[!DNL Algolia] Events Documentation](https://www.algolia.com/doc/guides/sending-events/getting-started/)
- [[!DNL Adobe Experience Platform] Event Forwarding Documentation](https://experienceleague.adobe.com/docs/experience-platform/tags/event-forwarding/overview.html)
- [[!DNL Algolia] AI Features Overview](https://www.algolia.com/products/ai-search/)
