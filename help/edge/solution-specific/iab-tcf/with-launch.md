---
title: Using IAB TCF 2.0 with Launch
seo-title: Setting up IAB TCF 2.0 consent with Adobe Launch and the Adobe Experience Platform Web SDK
description: Learn how to set up IAB TCF 2.0 consent with Adobe Launch and Adobe Experience Platform Web SDK
seo-description: Learn how to set up IAB TCF 2.0 consent with Adobe Launch and Adobe Experience Platform Web SDK
---

# Using IAB TCF 2.0 with Experience Platform Launch and the AEP Web SDK extension

The Adobe Experience Platform Web Software Development Kit (Adobe Experience Platform Web SDK) has support for the Interactive Advertising Bureau Transparency & Consent Framework, version 2.0 (IAB TCF 2.0). This guide shows you how to set up an Adobe Experience Platform Launch property to send IAB TCF 2.0 consent information to Adobe using the AEP Web SDK Launch extension. Please refer to [Using IAB TCF 2.0 without Experience Platform Launch](./without-launch.md) for the guide on using IAB TCF 2.0 without Experience Platform Launch. See [Supporting IAB TCF 2.0 Consent Information](./overview.md) for an overview of IAB TCF 2.0 support in the Adobe Experience Platform Web SDK.

## Setting default consent

Within the extension configuration, there is a setting for default consent. This controls the behavior of customers who do not yet have a consent cookie. If you want to queue Experience Events for customers who do not have a consent cookie, set this to "pending." Refer to the [defaultConsent section of the Configuring the SDK](../fundamentals/configuring-the-sdk.md#defaultConsent) page for more information about this option. Currently, there is no way to set this dynamically through the Experience Platform Launch extension.

## Updating profile with consent information

To call the `setConsent` action when the user's consent and preferences have changed, first create a new Experience Platform Launch rule. Add a new event, and choose the Core extension's "Custom Code" event type. Here is an example of the code to put in the event:

```javascript
// Wait for window.__tcfapi to be defined, then trigger when the user has completed their consent and preferences.
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

* Sets two data elements, one with the consent string and one with the `gdprApplies` flag. This will be useful later when filling out the "Set Consent" action. 

* Triggers the rule when the consent and preferences have changed. The "Set Consent" action should be used whenever consent or preferences have changed. Add a "Set Consent" action in the extension and fill out the form as follows:

  * Standard: "IAB TCF"
  * Version: "2.0"
  * Value: "%IAB TCF Consent String%"
  * GDPR Applies: "%IAB TCF Consent GDPR%"

![IAB Set Consent Action](./assets/iab_set_consent_action.png)

>[!NOTE]
>
>You cannot choose these data elements using the data element selector because they were created through custom code. You must type in the data element name with the percent signs.
This code updates the user's profile with their new consent and preferences whenever they change. Additionally, the server returns a cookie value, which could prevent the Adobe Experience Platform Web SDK from recording experience events.

## Creating an XDM data element for experience events

The consent string should be included in experience events in XDM. To do this, use the XDM Object data element. Create a new XDM Object data element or use one you already created for sending events. If you have added the Experience Event Privacy mixin to your schema, you should have a `consentStrings` key in the XDM object. 

1. Click **[!UICONTROL consentStrings]**.

1. Choose **[!UICONTROL Provide individual items]** and click **[!UICONTROL Add Item]**. 

1. Expand the **[!UICONTROL consentString]** heading, and expand the first item, then fill in these values:

  * `consentStandard`: IAB TCF
  * `consentStandardVersion`: 2.0
  * `consentStringValue`: %IAB TCF Consent String%
  * `gdprApplies`: %IAB TCF Consent GDPR%

>[!NOTE]
>
>You cannot choose these data elements using the data element selector because they were created through custom code. You must type in the data element name with the percent signs.
## Sending an initial experience event with IAB TCF 2.0 consent information

If the initial experience event on the page is triggered with a page load event, the consent string might not have loaded yet. This rule is intended to replace your current page load event. To make sure the consent information is loaded first, create a new rule and add the following code as a custom code event:

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

This code is identical to the previous custom code, except that both `useractioncomplete` and `tcloaded` events are handled. The previous custom code only triggers when the user chooses their preferences for the first time. This code also triggers when the user has already chosen their preferences. For example, on the second page load.

Add a "Send Event" action from the Adobe Experience Platform Web SDK extension. In the XDM field, choose the XDM data element you created in the previous section.

## Sending other events with IAB TCF 2.0 consent information

When events are triggered after the initial experience event, the two data elements are still defined and can be used to send the IAB consent information. Use the same XDM data element to send future events. The IAB TCF 2.0 information is included.