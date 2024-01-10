---
title: Integrate IAB TCF 2.0 Support using tags and the Platform Web SDK Extension
description: Learn how to set up IAB TCF 2.0 consent with tags and the Adobe Experience Platform Web SDK extension.
exl-id: dc0e6b68-8257-4862-9fc4-50b370ef204f
---
# Integrate IAB TCF 2.0 support using tags and the Platform Web SDK extension

Adobe Experience Platform Web SDK supports the Interactive Advertising Bureau Transparency & Consent Framework, version 2.0 (IAB TCF 2.0). This guide shows you how to set up a tag property for sending IAB TCF 2.0 consent information to Adobe using the Adobe Experience Platform Web SDK tag extension.

If you do not wish to use tags, please refer to the guide on [using IAB TCF 2.0 without tags](./without-tags.md).

## Getting started

In order to use IAB TCF 2.0 with tags and the Platform Web SDK extension, you need to have an XDM schema and dataset available.

Additionally, this guide requires you to have a working understanding of Adobe Experience Platform Web SDK. For a quick refresher, please read the [Adobe Experience Platform Web SDK overview](../../home.md) and the [Frequently asked questions](../../faq.md) documentation.

## Setting default consent

Within the extension configuration, there is a setting for default consent. This controls the behavior of customers who do not have a consent cookie. If you want to queue Experience Events for customers who do not have a consent cookie, set this to `pending`. If you want to discard Experience Events for customers who do not have a consent cookie, set this to `out`. You can also use a data element to dynamically set the default consent value. See [`defaultConsent`](/help/web-sdk/commands/configure/defaultconsent.md) for more information.

## Updating Profile with consent information {#consent-code-1}

To call the [`setConsent`](/help/web-sdk/commands/setconsent.md) action when your customers consent preferences have changed, create a tag rule. Start by adding a new event and choose the Core extension's "Custom Code" event type.

Use the following code sample for your new event:

```javascript
// Wait for window.__tcfapi to be defined, then trigger when the customer has completed their consent and preferences.
function addEventListener() {
  if (window.__tcfapi) {
    window.__tcfapi("addEventListener", 2, function (tcData, success) {
      if (success && tcData.eventStatus === "useractioncomplete") {
        // save the tcData.tcString in a data element
        _satellite.setVar("IAB TCF Consent String", tcData.tcString);
        _satellite.setVar("IAB TCF Consent GDPR", tcData.gdprApplies);
        trigger();
      }
    });
  } else {
    // window.__tcfapi wasn't defined. Check again in 100 milliseconds
    setTimeout(addEventListener, 100);
  }
}
addEventListener();
```

This custom code does two things:

* Sets two data elements, one with the consent string and one with the `gdprApplies` flag. This is useful later when filling out the "Set Consent" action.

* Triggers the rule when the consent preferences have changed. The "Set Consent" action should be used whenever consent preferences have changed. Add a "Set Consent" action in the extension and fill out the form as follows:

* Standard: "IAB TCF"
* Version: "2.0"
* Value: "%IAB TCF Consent String%"
* GDPR Applies: "%IAB TCF Consent GDPR%"

![IAB Set Consent Action](../../assets/consent/iab-tcf/with-launch/iab-action.png)

>[!IMPORTANT]
>
>You cannot choose these data elements using the data element selector because they were created through custom code. You must type in the data element name with the percent signs. This code updates your customer's profile with their new consent preferences whenever they change. Additionally, the server returns a cookie value, which could prevent Adobe Experience Platform Web SDK from recording Experience Events.

## Creating an XDM data element for Experience Events

The consent string should be included in the XDM Experience Event. To do this, use the XDM Object data element. Start by creating a new XDM Object data element, or alternatively, use one you already created for sending events. If you have added the Experience Event Privacy schema field group to your schema, you should have a `consentStrings` key in the XDM object.

1. Select **[!UICONTROL consentStrings]**.

1. Choose **[!UICONTROL Provide individual items]** and select **[!UICONTROL Add Item]**.

1. Expand the **[!UICONTROL consentString]** heading, and expand the first item, then fill in the following values:

* `consentStandard`: IAB TCF
* `consentStandardVersion`: 2.0
* `consentStringValue`: %IAB TCF Consent String%
* `gdprApplies`: %IAB TCF Consent GDPR%

>[!IMPORTANT]
>
>You cannot choose these data elements using the data element selector because they were created through custom code. You must type in the data element name with the percent signs.

## Sending an initial Experience Event with IAB TCF 2.0 consent information

If the initial Experience Event on the page is triggered with a page load event, the consent string might not have loaded yet. This rule is intended to replace your current page load event. To make sure the consent information is loaded first, create a new rule and add the following code as a custom code event:

```javascript
// Wait for window.__tcfapi to be defined, then trigger when there is a consent string
function addEventListener() {
  if (window.__tcfapi) {
    window.__tcfapi("addEventListener", 2, function (tcData, success) {
      if (success && (tcData.eventStatus === "useractioncomplete" || tcData.eventStatus === "tcloaded")) {
        // save the tcData.tcString in a data element
        _satellite.setVar("IAB TCF Consent String", tcData.tcString);
        _satellite.setVar("IAB TCF GDPR Applies", tcData.gdprApplies);
        trigger();
      }
    });
  } else {
    // window.__tcfapi wasn"t defined. Check again in 100 milliseconds
    setTimeout(addEventListener, 100);
  }
}
addEventListener();
```

This code is identical to the previous custom code, except that both `useractioncomplete` and `tcloaded` events are handled. The [previous custom code](#consent-code-1) only triggers when the customer chooses their preferences for the first time. This code also triggers when the customer has already chosen their preferences. For example, on the second page load.

Add a "Send Event" action from the Platform Web SDK extension. Within the XDM field, choose the XDM data element you created in the previous section.

## Sending other events with IAB TCF 2.0 consent information

When events are triggered after the initial Experience Event, the two data elements are still defined and can be used to send the IAB consent information. Use the same XDM data element to send future events. IAB TCF 2.0 information is included.

## Next steps

Now that you have learned how to use IAB TCF 2.0 with the Platform Web SDK extension, you can also choose to integrate with other Adobe solutions such as Adobe Analytics or Adobe Real-Time Customer Data Platform. See the [IAB Transparency & Consent Framework 2.0 overview](./overview.md) for more information.
