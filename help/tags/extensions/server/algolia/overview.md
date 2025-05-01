---
title: Algolia Event Forwarding Extension Overview
description: Use event forwarding to send search user behaviours to Algolia.
type: Documentation
feature: Data Collection, Event Forwarding
level: Beginner
role: User, Developer, Admin
topic: Integrations
---
# [!DNL Algolia] event forwarding extension overview

>[!NOTE]
>  
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](https://experienceleague.adobe.com/docs/experience-platform/tags/term-updates.html) for a consolidated reference of the terminology changes.

The [!DNL Algolia] [event forwarding](../../../ui/event-forwarding/overview.md) extension forwards user behavior events to the Algolia using the Insights API to unlock Algolia's AI features.

This document covers how to set up the extension and configure rules using the **Send Event** action.

## Prerequisites

This document assumes that you are familiar with the relevant Algolia Insights APIs leveraged by the extension. For more information, please see the Algolia's help documentation for [sending events](https://www.algolia.com/doc/guides/sending-events/getting-started/).

An Algolia account is required to use this extension. You can sign up for a free account [here](https://dashboard.algolia.com/users/sign_up/). In the Algolia account dashboard, make note of the following values for use in this guide:

- Your Application ID
- Your Search API Key
- The Index Name

## Configure the Algolia event forwarding extension

If the Algolia Event Forwarding extension is not yet installed, open your property, then select **[!UICONTROL Extensions > Catalog]**, hover over the Algolia Event Forwarding extension, and select **[!UICONTROL Install]**.

To configure the extension, open the Extensions tab, hover over the extension, and then select **[!UICONTROL Configure]**.

![](../../../images/extensions/server/algolia/configure.png)

| Property                              | Description                                                                                                                                          |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| Application ID                        | Enter the Application Id which can be found in the on the Algolia Dashboard in the [API Keys](https://www.algolia.com/account/api-keys/all) section. |
| Search API Key                        | Enter Search API Key which can be found in the on the Algolia Dashboard in the [API Keys](https://www.algolia.com/account/api-keys/all) section.     |
| Index Name                            | Enter the Index Name that contain the Products or Content.  This Index will be used as a default.                                                    |

## Algolia event forwarding extension action types

This section describes the action types available in the Algolia event forwarding extension. It provides the only action in the Then portion of a rule:

### Send Event

Add this action to your rule to forward events to Algolia. Select **[!UICONTROL Rules]**, then **[!UICONTROL Add Rule]** or select an existing rule. In the Then portion of a rule, add the action and select **[!UICONTROL Extension]** `Algolia Event Forwarding`, then **[!UICONTROL Action Type]** `Send Events`.

![](../../../images/extensions/server/algolia/send-event.png)

**No Configuration is required**

## Using Algolia event field group

The Algolia event field group is required in order to use the Algolia event forwarding extension.  The Algolia field group is one of the standard field groups provided through Adobe Experience Platform.

![](../../../images/extensions/server/algolia/algolia-field-groups.png)

### Adding Algolia event field group to schema

In order to add the Algolia event field group, navigate to **[!UICONTROL Schemas]**, then select **[!UICONTROL Schemas > Browse]**, add a schema or update an existing schema you are using to send web events.  Hover over the **[!UICONTROL Add]** icon and enter **Algolia** in the search box to narrow down the results and click on the **Algolia Event Details** field group, and click on **[!UICONTROL Add field group]** button.  Click **[!UICONTROL Save]**.

![](../../../images/extensions/server/algolia/algolia-profile-field-group.png)

### Mapping and sending field group in Data Collection Tag

Create a Tag property and install the **Adobe Experience Platform Web SDK** extension.  Use this extension to map the data from the HTML to the **Algolia Event** field group.

![](../../../images/extensions/server/algolia/html-dataset.png)


Create a Data Element using the **[!UICONTROL Adobe Experience Platform Web SDK]** and **[!UICONTROL XDM object]**

![](../../../images/extensions/server/algolia/xdm-mapping.png)

Create a rule and add an action **[!UICONTROL Adobe Experience Platform Web SDK]** and **[!UICONTROL Send event]** to use the Data Element to send to Adobe Experience Platform.

![](../../../images/extensions/server/algolia/rule-action.png)

Once the mapping has been completed in your Tag property, publish the rules and extension changes to the target environment for testing.  Using Adobe Experience Platform Debugger, you can verify the debugging logs to see the data being sent to Adobe Experience Platform to Algolia.
![](../../../images/extensions/server/algolia/adobe-debugger.png)

In order to verify the events in Algolia, navigate to you Algolia dashboard, then go to **[!UICONTROL Data Sources]**, then select **[!UICONTROL Events > Debugger]**.  Click on the event the matches the event sent from Algolia's event forwarding extension. This verifies that the event has properly been send from the extension.

![](../../../images/extensions/server/algolia/algolia-debugger.png)


## Additional resources

- [Algolia Insights API Documentation](https://www.algolia.com/doc/rest-api/insights/)
- [Algolia Events](https://www.algolia.com/doc/guides/sending-events/getting-started/)
- [Adobe Experience Platform event forwarding documentation](https://experienceleague.adobe.com/docs/experience-platform/tags/event-forwarding/overview.html)




# Algolia Event Forwarding Extension Overview

>[!NOTE]
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](https://experienceleague.adobe.com/docs/experience-platform/tags/term-updates.html) for a consolidated reference of the terminology changes.

The Algolia event forwarding extension sends user behavior events to Algolia using the Insights API, unlocking Algolia's AI features. This document covers how to set up the extension and configure rules using the **Send Event** action.

## Prerequisites

This document assumes you are familiar with the relevant Algolia Insights APIs leveraged by the extension. For more information, please see Algolia's help documentation for [sending events](https://www.algolia.com/doc/guides/sending-events/getting-started/).

An Algolia account is required to use this extension. You can sign up for a free account [here](https://dashboard.algolia.com/users/sign_up/). In the Algolia account dashboard, make note of the following values which you'll need for configuration:

- Your Application ID
- Your Search API Key
- Your Index Name

## Configuring the Algolia Event Forwarding Extension

### Installation

If the Algolia Event Forwarding extension is not yet installed:
1. Open your property
2. Navigate to **Extensions > Catalog**
3. Hover over the Algolia Event Forwarding extension
4. Select **Install**

### Configuration

To configure the extension:
1. Navigate to the **Extensions** tab
2. Hover over the extension
3. Select **Configure**

![](../../../images/extensions/server/algolia/configure.png)

| Property | Description |
|----------|-------------|
| Application ID | Enter the Application ID found in the Algolia Dashboard under [API Keys](https://www.algolia.com/account/api-keys/all) section. |
| Search API Key | Enter the Search API Key found in the Algolia Dashboard under [API Keys](https://www.algolia.com/account/api-keys/all) section. |
| Index Name | Enter the Index Name that contains your Products or Content. This Index will be used as the default. |

## Algolia Event Forwarding Extension Action Types

The Algolia event forwarding extension provides one action type available in the "Then" portion of a rule:

### Send Event

This action forwards events to Algolia. To configure:

1. Select **Rules**, then **Add Rule** or select an existing rule
2. In the "Then" portion of the rule, add an action
3. Select **Extension**: `Algolia Event Forwarding`
4. Select **Action Type**: `Send Events`

![](../../../images/extensions/server/algolia/send-event.png)

**Note**: No additional configuration is required for this action.

## Implementing the Algolia Event Field Group

The Algolia event field group is required to use the Algolia event forwarding extension. It's one of the standard field groups provided through Adobe Experience Platform.

![](../../../images/extensions/server/algolia/algolia-field-groups.png)

### Adding the Algolia Event Field Group to Your Schema

To add the Algolia event field group:

1. Navigate to **Schemas > Browse**
2. Add a new schema or update an existing schema you're using to send web events
3. Hover over the **Add** icon
4. Enter "Algolia" in the search box to narrow down results
5. Click on the **Algolia Event Details** field group
6. Click the **Add field group** button
7. Click **Save**

![](../../../images/extensions/server/algolia/algolia-profile-field-group.png)

### Mapping and Sending Data Using the Data Collection Tag

#### Step 1: Create a Tag Property with the Web SDK
1. Create a Tag property
2. Install the **Adobe Experience Platform Web SDK** extension
3. Use this extension to map data from HTML to the **Algolia Event** field group

![](../../../images/extensions/server/algolia/html-dataset.png)

#### Step 2: Create a Data Element for XDM Mapping
1. Create a Data Element using the **Adobe Experience Platform Web SDK** 
2. Select **XDM object** as the data element type
3. Map your data to the appropriate XDM fields, ensuring Algolia-specific fields are populated

![](../../../images/extensions/server/algolia/xdm-mapping.png)

#### Step 3: Create a Rule to Send Events
1. Create a new rule in your Tag property
2. Add appropriate event triggers (e.g., page load, click events)
3. Add an action using **Adobe Experience Platform Web SDK**
4. Select **Send event** as the action type
5. Configure the action to use your XDM data element

![](../../../images/extensions/server/algolia/rule-action.png)

#### Step 4: Publish and Test
1. Publish the rules and extension changes to your target environment
2. Use Adobe Experience Platform Debugger to verify the data being sent to Adobe Experience Platform and forwarded to Algolia

![](../../../images/extensions/server/algolia/adobe-debugger.png)

### Verifying Events in Algolia

To confirm events are being properly received by Algolia:

1. Navigate to your Algolia dashboard
2. Go to **Data Sources > Events > Debugger**
3. Click on the event that matches the event sent from Algolia's event forwarding extension
4. Verify that all expected data is present in the event

![](../../../images/extensions/server/algolia/algolia-debugger.png)

## Common Implementation Scenarios

### Tracking Product Views
Use the extension to track when users view product pages, helping Algolia understand user interests.

### Tracking Search Queries
Send search queries to Algolia to improve search relevance and recommendations.

### Tracking Conversion Events
Track purchases and other conversion events to optimize Algolia's AI-powered recommendations.

## Troubleshooting

### Events Not Appearing in Algolia
- Verify your Application ID and API Key are correct
- Check that your XDM schema includes the Algolia Event field group
- Ensure data is properly mapped to the XDM fields
- Use both Adobe Experience Platform Debugger and Algolia's event debugger to trace the flow of data

### Incorrect Event Data
- Review your data mapping in the XDM object data element
- Ensure event parameters match Algolia's expected format

## Additional Resources

- [Algolia Insights API Documentation](https://www.algolia.com/doc/rest-api/insights/)
- [Algolia Events Documentation](https://www.algolia.com/doc/guides/sending-events/getting-started/)
- [Adobe Experience Platform Event Forwarding Documentation](https://experienceleague.adobe.com/docs/experience-platform/tags/event-forwarding/overview.html)
- [Algolia AI Features Overview](https://www.algolia.com/products/ai-search/)