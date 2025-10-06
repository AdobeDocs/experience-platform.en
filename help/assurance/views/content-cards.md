---
title: Content Cards View
description: This guide details information about the Content Cards view in Adobe Experience Platform Assurance.
exl-id: ?
---
# Content Cards view in Assurance

The In-App Messaging view inside Adobe Experience Platform Assurance provides the ability to validate your app, monitor the content cards that are delivered to your device, and preview cards.

## Content Cards

At the top of the **[!UICONTROL Content Cards]** tab is a **[!UICONTROL Content Card]** dropdown. This lists all the content cards that have been received in the Assurance session. If a card is not in this list, it means the app never received it.

![Content Card](./images/content-cards/dropdown.png)

Selecting a content card will show a lot of information about that card as described in the sections below.

### Card Preview

In the right panel is a **[!UICONTROL Card Preview]** pane shows how a card renders across common templates — Small Image, Large Image, and Image Only.

![Preview](./images/content-cards/preview.png)

Use the **[!UICONTROL Theme]** toggle to view the card in light or dark mode.

![Preview Dark Mode](./images/content-cards/preview-dark.png)

### Available Tabs

In the left section, the available tabs depend on the selected card. If the card includes rules, you’ll see three tabs: **[!UICONTROL Info]**, **[!UICONTROL Interactions]**, and **[!UICONTROL Analyze Rules]**. 

![Tabs With Rules](./images/content-cards/tabs-with-rules.png)

If the card does not include rules, you’ll see two tabs: **[!UICONTROL Info]** and **[!UICONTROL Interactions]**.

![Tabs No Rules](./images/content-cards/tabs-no-rules.png)

### Info Tab
The **[!UICONTROL Info]** tab shows **[!UICONTROL Card Properties]** section at the top, including badges for the **[!UICONTROL Current State]** (trigger, display, dimiss, disqualify) plus meta details like **[!UICONTROL Template]** (Small Image, Large Image, or Image Only), **[!UICONTROL Surface]**, and any custom key–value pairs.

![Card Properties](./images/content-cards/card-properties.png)

Below that, the **[!UICONTROL Campaign Properties]** section  shows information loaded from Adobe Journey Optimizer (AJO). 

You can also select **[!UICONTROL View Campaign]** to open the card in AJO for inspection or editing.

![Campaign Properties](./images/content-cards/campaign-properties.png)

### Interactions Tab

The **[!UICONTROL Interactions]** tab summarizes each card’s lifecycle as a sequence of badges: it always starts with **[!UICONTROL trigger]**, followed by whichever outcome the rules produced—**[!UICONTROL display]**, **[!UICONTROL dismiss]**, or **[!UICONTROL disqualify]**.

![Interactions](./images/content-cards/interactions-tab.png)

### Analyze Rules Tab

The **[!UICONTROL Analyze]** tab shows an events table with up to three rules columns—**[!UICONTROL Display]**, **[!UICONTROL Dismiss]**, and [**!UICONTROL Disqualify]**—based on the card’s rules. If the card defines only one rule, only that column appears. Each row represents a session event, and each column indicates whether the card’s rule matched for that outcome. You can sort/filter to focus on events that meet (or nearly meet) the rule.

![Rules](./images/content-cards/rules-tab.png)

The example shows three different conditions for the rule. If you select an event (from an events list, the Analyze tab, or in the timeline), that event will be evaluated against these rules. If the event matches a condition, it will show a green checkmark:

![Rule Match](./images/in-app-messaging/rule-match.png)

If the event does not match, it will show a red icon:

![Rule Mismatch](./images/in-app-messaging/rule-mismatch.png)

If all three conditions match the current event, the message will be displayed.

### Analyze Tab

The **[!UICONTROL Analyze]** tab provides additional insights into the rules. Here, we filter every event in the session based on how close our message rule matches the event.

![Analyze](./images/in-app-messaging/analyze.png)

In the example in the **[!UICONTROL Rules Tab]** section, there are three conditions in the rule. This tab shows what percentage of the rule each event matches. The majority of events match at 33% (one of three conditions) and the rest match at 100%.

As a result, you can find events that are close to matching but not fully matching the rule.

![Threshold](./images/in-app-messaging/threshold.png)

The **[!UICONTROL Match Threshold]** slider lets you filter which events should be displayed. For example, this could be set to 50% - 90% to get a list of events that match exact two of the three conditions.

## Validation

The **[!UICONTROL Validation]** tab runs validations against your current session, checking to see if the app has been configured for In-App Messaging correctly:

![Validation](./images/in-app-messaging/validation.png)

If any errors were found, details on how to fix those errors will be provided.

## Event List

![Validation](./images/in-app-messaging/event-list.png)

The **[!UICONTROL Event List]** tab provides a quick look at all the events in the Assurance session that are related to In-App Messaging. Some of the events you may see here are:

* Requests and responses to retrieve messages
* Display message events
* Interaction tracking events

In this view, you can use many of the standard event list features including applying searches, applying filters, adding or removing columns, and exporting data.

Select an event to view the raw details of the event in the right panel.

From the right details panel, the selected event can be flagged, which is helpful to mark something that should be reviewed by another person.
