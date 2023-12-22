---
title: Manage display events in Web SDK
description: This article explains what display events are and how you can use them in Web SDK.
exl-id: 7150ad6e-7693-4f4d-917e-8d08a39a0b41
---
# Manage display events in Web SDK

Display events are used by Web SDK to inform your personalization or analytics service when a specific personalization content is displayed on a page.

Sending display events improves the accuracy of personalization metrics and gives you an accurate overview of what the users see on your page.

Web SDK allows you to send display events in two ways:

* [Automatically](#send-automatically), immediately after the personalized content is rendered on the page. See the documentation on how to [render personalized content](rendering-personalization-content.md) for more information.
* [Manually](#send-sendEvent-calls), through subsequent `sendEvent` calls.

>[!NOTE]
>
>Display events are not sent automatically when calling the `applyPropositions` function.

## Send display events automatically {#send-automatically}

Sending display events automatically provides more accurate analytics metrics, since the event is sent immediately after the personalization loads. This implementation also has a more streamlined implementation method.

To send display events automatically after the personalized content is rendered on page, you must configure the following parameters:

* `renderDecisions: true`
* `personalization.sendDisplayNotifications: true` or not specified

Web SDK sends the display events immediately after any personalization is rendered as a result of a `sendEvent` call.

## Send display events in subsequent sendEvent calls {#send-sendEvent-calls}

Compared to [automatically](#send-automatically) sending display events, when you include them in subsequent `sendEvent` calls you also have the opportunity to include more information about the page load in the call. This may be extra information, which was not available when requesting the personalized content.

Additionally, sending display events in `sendEvent` calls minimizes bounce-rate errors when using Adobe Analytics.

>[!IMPORTANT]
>
>When using manually rendered propositions, display events are only supported via `sendEvent` calls. You cannot send display events automatically in this case.

### Send display events for automatically rendered propositions {#auto-rendered-propositions}

To send display events for automatically rendered propositions, you must configure the following parameters in the `sendEvent` call:

* `renderDecisions: true`
* `personalization.sendDisplayNotifications: false` for the top of page hit

To send the display events, call `sendEvent` with `personalization.includePendingDisplayNotifications: true`

### Send display events for manually rendered propositions {#manually-rendered-propositions}

To send display events for manually rendered propositions, you must include them in the `_experience.decisioning.propositions` XDM field, including the `id`, `scope`, and `scopeDetails` fields from the propositions.

Additionally, set the `include _experience.decisioning.propositionEventType.display` field to `1`.
