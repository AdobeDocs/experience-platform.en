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

The [!DNL Algolia] [event forwarding](../../../ui/event-forwarding/overview.md) extension sends user behavior events to the Algolia using the Insights API to unlock Algolia's AI features.

This document covers how to set up the extension and configure rules using the Send Event action.

## Prerequisites

This document assumes that you are familiar with the relevant Algolia Insights APIs leveraged by the extension. For more information, please see the Algolia's help documentation for [sending events](https://www.algolia.com/doc/guides/sending-events/getting-started/).

An Algolia account is required to use this extension. You can sign up for an account [here](https://dashboard.algolia.com/users/sign_up/). In the Algolia account dashboard, make note of the following values for use in this guide:

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

This section describes the action types available in the Algolia event forwarding extension. It provides the following actions in the Then portion of a rule:

### Send Event

Add this action to your tag rule to forward the event to Algolia. Select **[!UICONTROL Rules]**, then **[!UICONTROL Add Rule]** or select an existing rule. In the Then portion of a rule, add the action and select **[!UICONTROL Extension]** `Algolia Event Forwarding`, then **[!UICONTROL Action Type]** `Send Events`.

![](../../../images/extensions/server/algolia/send-event.png)

**No Configuration is required**

## Using Algolia event field group

The Algolia event field group is required in order to use the Algolia event forwarding extension.  The Algolia field group is part of one of the standard field groups provided through Adobe Experience Platform.

![](../../../images/extensions/server/algolia/algolia-field-groups.png)

### Adding Algolia event field group to schema

In order to add the Algolia event field group, navigate to **[!UICONTROL Schemas]**, then select **[!UICONTROL Schemas > Browse]**, add a schema or update an existing schema you are using to send web events.  Hover over the **[!UICONTROL Add]** icon and enter **Algolia** in the search box to narrow down the results and click on the **Algolia Event Details** field group, and click on **[!UICONTROL Add field group]** button.  Click **[!UICONTROL Save]**.

![](../../../images/extensions/server/algolia/algolia-profile-field-group.png)

### Mapping and sending field group in Data Collection Tag

Create a Tag property and install the **Adobe Experience Platform Web SDK** extension.  Use this extension to map the data from HTML to the **Algolia Event** field group.

![](../../../images/extensions/server/algolia/html-dataset.png)


Create a Data Element using the **[!UICONTROL Adobe Experience Platform Web SDK]** and **[!UICONTROL XDM object]**

![](../../../images/extensions/server/algolia/xdm-mapping.png)

Create a rule and add an action **[!UICONTROL Adobe Experience Platform Web SDK]** and **[!UICONTROL Send event]** to use the Data Element to send to Adobe Experience Platform.

![](../../../images/extensions/server/algolia/rule-action.png)

## Additional resources

- [Algolia Insights API Documentation](https://www.algolia.com/doc/rest-api/insights/)
- [Algolia Events](https://www.algolia.com/doc/guides/sending-events/getting-started/)
- [Adobe Experience Platform event forwarding documentation](https://experienceleague.adobe.com/docs/experience-platform/tags/event-forwarding/overview.html)