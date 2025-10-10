---
title: Content Cards View
description: This guide details information about the Content Cards view in Adobe Experience Platform Assurance.
---
# Content Cards view in Assurance

The In-App Messaging view inside Adobe Experience Platform Assurance provides the ability to validate your app, monitor the content cards that are delivered to your device, and preview cards.

## Content Cards

At the top of the **[!UICONTROL Content Cards]** tab is a **[!UICONTROL Content Card]** dropdown. This lists all the content cards that have been received in the Assurance session. If a card is not in this list, it means the app never received it.

![Content Card dropdown containing a list of cards](./images/content-cards/dropdown.png)

Selecting a content card will show a lot of information about that card as described in the sections below.

### Card Preview

In the right panel is a **[!UICONTROL Card Preview]** pane shows how a card renders across common templates — Small Image, Large Image, and Image Only.

![Preview of selected Content Card](./images/content-cards/preview.png)

Use the **[!UICONTROL Theme]** toggle to view the card in light or dark mode.

![Preview of selected Content Card in Dark Theme](./images/content-cards/preview-dark.png)

### Available tabs

In the left section, the available tabs depend on the selected card. If the card includes rules, you’ll see three tabs: **[!UICONTROL Info]**, **[!UICONTROL Interactions]**, and **[!UICONTROL Analyze Rules]**. 

![Available tabs when rules are present: Info, Interactions, Analyze Rules](./images/content-cards/tabs-with-rules.png)

If the card does not include rules, you’ll see two tabs: **[!UICONTROL Info]** and **[!UICONTROL Interactions]**.

![Available tabs when no rules: Info and Interactions](./images/content-cards/tabs-no-rules.png)

### Info tab

The **[!UICONTROL Info]** tab shows **[!UICONTROL Card Properties]** section at the top, including badges for the **[!UICONTROL Current State]** (trigger, display, dismiss, disqualify) plus meta details like **[!UICONTROL Template]** (Small Image, Large Image, or Image Only), **[!UICONTROL Surface]**, and any custom key–value pairs.

![Card Properties showing current state badges, template, surface, and key–value pairs](./images/content-cards/card-properties.png)

Below that, the **[!UICONTROL Campaign Properties]** section shows information loaded from Adobe Journey Optimizer (AJO). 

You can also select **[!UICONTROL View Campaign]** to open the card in AJO for inspection or editing.

![Campaign Properties section with button to View Campaign](./images/content-cards/campaign-properties.png)

### Interactions tab

The **[!UICONTROL Interactions]** tab summarizes each card’s lifecycle as a sequence of badges: it always starts with **[!UICONTROL trigger]**, followed by whichever outcome the rules produced—**[!UICONTROL display]**, **[!UICONTROL dismiss]**, or **[!UICONTROL disqualify]**.

![Interactions table showing lifecycle badges from trigger to display, dismiss, or disqualify](./images/content-cards/interactions-tab.png)

### Analyze Rules tab

The **[!UICONTROL Analyze]** tab shows an events table with up to three rules columns—**[!UICONTROL Display]**, **[!UICONTROL Dismiss]**, and **[!UICONTROL Disqualify]**—based on the card’s rules. If the card defines only one rule, only that column appears. 

Each row represents a session event, and each column indicates whether the card’s rule matched for that event's conditions. A 0% score means no conditions matched; 100% is a full match (the rule would fire). 

If the event matches a condition, it will show a green checkmark. If the event does not match, it will show a red icon.

![Analyze tab events table with Display, Dismiss, and Disqualify rule columns](./images/content-cards/rules-tab.png)

Use the **[!UICONTROL Match Threshold]** slider to filter events by minimum match percentage.

![Match Threshold slider to filter events by minimum match percentage](./images/content-cards/match-threshold.png)

When you select an event, a details panel opens on the right with an accordion listing the three rules: **[!UICONTROL Display]**, **[!UICONTROL Dismiss]**, and **[!UICONTROL Disqualify]**. 

![Event details panel listing Display, Dismiss, and Disqualify rules](./images/content-cards/rules-panel.png)

Expand any section to see the rule’s conditions, which conditions matched, and the calculated match percentage for that outcome.

![Expanded rule accordion showing matched conditions and match percentage](./images/content-cards/expanded-accordion.png)

## Requests tab

The **[!UICONTROL Requests]** tab shows which Content Cards were requested and on which surface. 

![Requests tab showing Content Card requests](./images/content-cards/requests-tab.png)

Use the **[!UICONTROL View Card]** button to go back to the info tab of a specific content card.
 
## Event List tab

The **[!UICONTROL Event List]** tab shows session events relevant to Content Cards, including AJO proposition requests/responses, card lifecycle events, and interaction tracking. You can search, filter, sort, and customize columns, as well as export results. 

Selecting an event opens a right-side details panel with the raw payload and key attributes; you can also flag events for follow‑up. This view is useful for correlating requests, rule outcomes, and interactions across the session.

![Event List tab with searchable, filterable session events for Content Cards](./images/content-cards/event-list.png)

## Validation tab

The **[!UICONTROL Validation]** tab runs validations against your current session, checking to see if the app has been configured for Messaging correctly:

![Validation tab results checking Messaging configuration for the current session](./images/content-cards/validation.png)
